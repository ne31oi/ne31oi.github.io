
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.23.2' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    const subscriber_queue = [];
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = [];
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (let i = 0; i < subscribers.length; i += 1) {
                        const s = subscribers[i];
                        s[1]();
                        subscriber_queue.push(s, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.push(subscriber);
            if (subscribers.length === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                const index = subscribers.indexOf(subscriber);
                if (index !== -1) {
                    subscribers.splice(index, 1);
                }
                if (subscribers.length === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    const timeframe = writable({});

    const exchange = writable({});
    const Binance = writable({});
    const Bittrex = writable({});
    const Okex = writable({});

    /* src/Dashboard.svelte generated by Svelte v3.23.2 */

    const { console: console_1, document: document_1 } = globals;
    const file = "src/Dashboard.svelte";

    function add_css() {
    	var style = element("style");
    	style.id = "svelte-u2l48o-style";
    	style.textContent = ".card-header.svelte-u2l48o .form-group.svelte-u2l48o{display:flex;align-items:center;margin-bottom:0}label.svelte-u2l48o.svelte-u2l48o{margin-bottom:0;margin-right:10px}.card-header.svelte-u2l48o legend.svelte-u2l48o{display:flex;justify-content:space-between}.b.svelte-u2l48o.svelte-u2l48o{display:flex}.b.svelte-u2l48o .btn.svelte-u2l48o{flex-shrink:0;margin-left:10px;height:36px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkLnN2ZWx0ZSIsInNvdXJjZXMiOlsiRGFzaGJvYXJkLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQge3RpbWVmcmFtZSxcblx0XHRleGNoYW5nZSxcblx0XHRCaW5hbmNlLFxuXHRcdEJpdHRyZXgsXG5cdFx0T2tleH0gZnJvbSAnLi4vc3JjL3N0b3JlLmpzJ1x0XG5cblx0bGV0IHR5cGUgPSAwO1xuXHRmdW5jdGlvbiBoYW5kbGVDbGljayhldixpKSB7XG5cdFx0dHlwZSA9IGk7XG5cdH1cblx0bGV0IGRhdGFNYXAgPSB7ZGF0YUdEUCA6IHtcblx0ICAgICAgICAgICAgICAgIDIwMTQ6WzE2MjUxLjkzLDExMzA3LjI4LDI0NTE1Ljc2LDExMjM3LjU1LDE0MzU5Ljg4LDIyMjI2LjcsMTA1NjguODMsMTI1ODIsMTkxOTUuNjksNDkxMTAuMjddLFxuXHQgICAgICAgICAgICAgICAgMjAxMzpbMTQxMTMuNTgsOTIyNC40NiwyMDM5NC4yNiw5MjAwLjg2LDExNjcyLDE4NDU3LjI3LDg2NjcuNTgsMTAzNjguNiwxNzE2NS45OCw0MTQyNS40OF0sXG5cdCAgICAgICAgICAgICAgICAyMDEyOlsxMjE1My4wMyw3NTIxLjg1LDE3MjM1LjQ4LDczNTguMzEsOTc0MC4yNSwxNTIxMi40OSw3Mjc4Ljc1LDg1ODcsMTUwNDYuNDUsMzQ0NTcuM10sXG5cdCAgICAgICAgICAgICAgICAyMDExOlsxMTExNSw2NzE5LjAxLDE2MDExLjk3LDczMTUuNCw4NDk2LjIsMTM2NjguNTgsNjQyNi4xLDgzMTQuMzcsMTQwNjkuODcsMzA5ODEuOThdLFxuXHQgICAgICAgICAgICAgICAgMjAxMDpbOTg0Ni44MSw1MjUyLjc2LDEzNjA3LjMyLDYwMjQuNDUsNjQyMy4xOCwxMTE2NC4zLDUyODQuNjksNzEwNCwxMjQ5NC4wMSwyNjAxOC40OF1cblx0ICAgICAgICAgICAgfSxkYXRhRXN0YXRlOntcblx0ICAgICAgICAgICAgICAgIDIwMTQ6WzEwNzQuOTMsNDExLjQ2LDkxOC4wMiwyMjQuOTEsMzg0Ljc2LDg3Ni4xMiwyMzguNjEsNDkyLjEsMTAxOS42OCwyNzQ3Ljg5XSxcblx0ICAgICAgICAgICAgICAgIDIwMTM6WzEwMDYuNTIsMzc3LjU5LDY5Ny43OSwxOTIsMzA5LjI1LDczMy4zNywyMTIuMzIsMzkxLjg5LDEwMDIuNSwyNjAwLjk1XSxcblx0ICAgICAgICAgICAgICAgIDIwMTI6WzEwNjIuNDcsMzA4LjczLDYxMi40LDE3My4zMSwyODYuNjUsNjA1LjI3LDIwMC4xNCwzMDEuMTgsMTIzNy41NiwyMDI1LjM5XSxcblx0ICAgICAgICAgICAgICAgIDIwMTE6Wzg0NC41OSwyMjcuODgsNTEzLjgxLDE2Ni4wNCwyNzMuMyw1MDAuODEsMTgyLjcsMjQ0LjQ3LDkzOS4zNCwxNjI2LjEzXSxcblx0ICAgICAgICAgICAgICAgIDIwMTA6WzgyMS41LDE4My40NCw0NjcuOTcsMTM0LjEyLDE5MS4wMSw0MTAuNDMsMTUzLjAzLDIyNS44MSw5NTguMDYsMTM2NS43MV1cblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgZGF0YUZpbmFuY2lhbDp7XG5cdCAgICAgICAgICAgICAgICAyMDE0OlsyMjE1LjQxLDc1Ni41LDc0Ni4wMSw1MTkuMzIsNDQ3LjQ2LDc1NS41NywyMDcuNjUsMzcwLjc4LDIyNzcuNCwyNjAwLjExXSxcblx0ICAgICAgICAgICAgICAgIDIwMTM6WzE4NjMuNjEsNTcyLjk5LDYxNS40Miw0NDguMywzNDYuNDQsNjM5LjI3LDE5MC4xMiwzMDQuNTksMTk1MC45NiwyMTA1LjkyXSxcblx0ICAgICAgICAgICAgICAgIDIwMTI6WzE2MDMuNjMsNDYxLjIsNTI1LjY3LDM2MS42NCwyOTEuMSw1NjAuMiwxODAuODMsMjI3LjU0LDE4MDQuMjgsMTU5Ni45OF0sXG5cdCAgICAgICAgICAgICAgICAyMDExOlsxNTE5LjE5LDM2OC4xLDQyMC43NCwyOTAuOTEsMjE5LjA5LDQ1NS4wNywxNDcuMjQsMTc3LjQzLDE0MTQuMjEsMTI5OC40OF0sXG5cdCAgICAgICAgICAgICAgICAyMDEwOlsxMzAyLjc3LDI4OC4xNywzNDcuNjUsMjE4LjczLDE0OC4zLDM4Ni4zNCwxMjYuMDMsMTU1LjQ4LDEyMDkuMDgsMTA1NC4yNV1cblx0ICAgICAgICAgICAgfX07XG5cdGxldCBvcHRpb25zID0ge1xuXHQgICAgICAgICAgICAgICAgLy8gU2V0dXAgdGltZWxpbmVcblx0ICAgICAgICAgICAgICAgIHRpbWVsaW5lOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgYXhpc1R5cGU6ICdjYXRlZ29yeScsXG5cdCAgICAgICAgICAgICAgICAgICAgZGF0YTogWycyMDEwLTAxLTAxJywgJzIwMTEtMDEtMDEnLCAnMjAxMi0wMS0wMScsICcyMDEzLTAxLTAxJywgJzIwMTQtMDEtMDEnXSxcblx0ICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuXHQgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuXHQgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcblx0ICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8sIEFyaWFsLCBWZXJkYW5hLCBzYW5zLXNlcmlmJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICBhdXRvUGxheTogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgICAgICBwbGF5SW50ZXJ2YWw6IDMwMDBcblx0ICAgICAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgICAgIC8vIENvbmZpZ1xuXHQgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuXHQgICAgICAgICAgICAgICAgICAgIHtcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBHbG9iYWwgdGV4dCBzdHlsZXNcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvLCBBcmlhbCwgVmVyZGFuYSwgc2Fucy1zZXJpZicsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTNcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFydCBhbmltYXRpb24gZHVyYXRpb25cblx0ICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDc1MCxcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXR1cCBncmlkXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQ6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEwLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzNSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNjAsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluTGFiZWw6IHRydWVcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbGVnZW5kXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWydCVEMnLCdGaW5hbmNpYWwnLCdSZWFsIEVzdGF0ZSddLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUhlaWdodDogOCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1HYXA6IDIwXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9vbHRpcFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNzUpJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFsxMCwgMTVdLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEzLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8sIHNhbnMtc2VyaWYnXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2hhZG93Jyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dTdHlsZToge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwwLDAsMC4wMjUpJ1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBIb3Jpem9udGFsIGF4aXNcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeEF4aXM6IFt7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWydQYXJpcycsJ0J1ZGFwZXN0JywnUHJhZ3VlJywnTWFkcmlkJywnQW1zdGVyZGFtJywnQmVybGluJywnQnJhdGlzbGF2YScsJ011bmljaCcsJ0hhZ3VlJywnUm9tZSddLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzMzJ1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNMaW5lOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzk5OSdcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRMaW5lOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZWVlJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Rhc2hlZCdcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRBcmVhOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFsncmdiYSgyNTAsMjUwLDI1MCwwLjEpJywgJ3JnYmEoMCwwLDAsMC4wMTUpJ11cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZlcnRpY2FsIGF4aXNcblx0ICAgICAgICAgICAgICAgICAgICAgICAgeUF4aXM6IFtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogNTM1MDAsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzMydcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNMaW5lOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjOTk5J1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdExpbmU6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlZWUnXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JUQycsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzMydcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNMaW5lOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjOTk5J1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdExpbmU6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmNWY1ZjUnXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF0sXG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcmllc1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQlRDJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrTGluZToge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IFsnYXJyb3cnLCdub25lJ10sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFNpemU6IFs0LCAyXSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtjb2xvcjogJ29yYW5nZSd9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhckJvcmRlckNvbG9yOiAnb3JhbmdlJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHBhcmFtcykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQocGFyYW1zLnZhbHVlKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7Y29sb3I6ICdvcmFuZ2UnfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW3t0eXBlOiAnYXZlcmFnZScsIG5hbWU6ICdBdmVyYWdlJ31dXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhTWFwLmRhdGFHRFBbJzIwMTAnXVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRmluYW5jaWFsJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5QXhpc0luZGV4OiAxLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFNYXAuZGF0YUZpbmFuY2lhbFsnMjAxMCddXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdSZWFsIEVzdGF0ZScsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeUF4aXNJbmRleDogMSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhTWFwLmRhdGFFc3RhdGVbJzIwMTAnXVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICBdXG5cdCAgICAgICAgICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIDIwMTEgZGF0YVxuXHQgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBbXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTogZGF0YU1hcC5kYXRhR0RQWycyMDExJ119LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE6IGRhdGFNYXAuZGF0YUZpbmFuY2lhbFsnMjAxMSddfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhOiBkYXRhTWFwLmRhdGFFc3RhdGVbJzIwMTEnXX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgXVxuXHQgICAgICAgICAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyAyMDEyIGRhdGFcblx0ICAgICAgICAgICAgICAgICAgICB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllczogW1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE6IGRhdGFNYXAuZGF0YUdEUFsnMjAxMiddfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhOiBkYXRhTWFwLmRhdGFGaW5hbmNpYWxbJzIwMTInXX0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTogZGF0YU1hcC5kYXRhRXN0YXRlWycyMDEyJ119XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIF1cblx0ICAgICAgICAgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gMjAxMyBkYXRhXG5cdCAgICAgICAgICAgICAgICAgICAge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhOiBkYXRhTWFwLmRhdGFHRFBbJzIwMTMnXX0sXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTogZGF0YU1hcC5kYXRhRmluYW5jaWFsWycyMDEzJ119LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE6IGRhdGFNYXAuZGF0YUVzdGF0ZVsnMjAxMyddfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICBdXG5cdCAgICAgICAgICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIDIwMTQgZGF0YVxuXHQgICAgICAgICAgICAgICAgICAgIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzOiBbXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YTogZGF0YU1hcC5kYXRhR0RQWycyMDE0J119LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE6IGRhdGFNYXAuZGF0YUZpbmFuY2lhbFsnMjAxNCddfSxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhOiBkYXRhTWFwLmRhdGFFc3RhdGVbJzIwMTQnXX1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgXVxuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIF1cblx0fVxuXHRsZXQgY29sdW1uc190aW1lbGluZV9lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbHVtbnNfdGltZWxpbmUnKSxcblx0Y29sdW1uc190aW1lbGluZTtcblx0d2luZG93LkVjaGFydHNDb2x1bW5zV2F0ZXJmYWxscyA9IGZ1bmN0aW9uKCkge1xuXHQgICAgdmFyIF9jb2x1bW5zV2F0ZXJmYWxsc0V4YW1wbGVzID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBlY2hhcnRzID09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAgIGNvbnNvbGUud2FybignV2FybmluZyAtIGVjaGFydHMubWluLmpzIGlzIG5vdCBsb2FkZWQuJyk7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgY29sdW1uc190aW1lbGluZV9lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbHVtbnNfdGltZWxpbmUnKTtcblx0ICAgICAgICBpZiAoY29sdW1uc190aW1lbGluZV9lbGVtZW50KSB7XG5cdCAgICAgICAgICAgIGNvbHVtbnNfdGltZWxpbmUgPSBlY2hhcnRzLmluaXQoY29sdW1uc190aW1lbGluZV9lbGVtZW50KTtcblx0ICAgICAgICAgICAgY29sdW1uc190aW1lbGluZS5zZXRPcHRpb24ob3B0aW9ucyk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciB0cmlnZ2VyQ2hhcnRSZXNpemUgPSBmdW5jdGlvbigpIHsgICAgICAgICAgICBcblx0ICAgICAgICAgICAgY29sdW1uc190aW1lbGluZV9lbGVtZW50ICYmIGNvbHVtbnNfdGltZWxpbmUucmVzaXplKCk7XG5cdCAgICAgICAgfTtcblx0ICAgICAgICB2YXIgcmVzaXplQ2hhcnRzO1xuXHQgICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZUNoYXJ0cyk7XG5cdCAgICAgICAgICAgIHJlc2l6ZUNoYXJ0cyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdHJpZ2dlckNoYXJ0UmVzaXplKCk7XG5cdCAgICAgICAgICAgIH0sIDIwMCk7XG5cdCAgICAgICAgfTtcblx0ICAgIH07XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICBfY29sdW1uc1dhdGVyZmFsbHNFeGFtcGxlcygpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0fSgpO1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHRcblx0ICAgIEVjaGFydHNDb2x1bW5zV2F0ZXJmYWxscy5pbml0KCk7XG5cdCAgICBcblx0fSk7XG5cblx0bGV0IHRmPTA7XG5cdGxldCB1bnN1YnNjcmliZSA9IHRpbWVmcmFtZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdHRmID0gdmFsdWU7XG5cdH0pO1xuXHR0ZiA9ICh0eXBlb2YgdGYgPT0gJ29iamVjdCc/MDp0ZilcblxuXHRsZXQgZXhjaD0wO1xuXHR1bnN1YnNjcmliZSA9IGV4Y2hhbmdlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG5cdFx0ZXhjaCA9IHZhbHVlO1xuXHR9KTtcblx0ZXhjaCA9ICh0eXBlb2YgZXhjaCA9PSAnb2JqZWN0Jz8wOmV4Y2gpXG5cblx0bGV0IGJpdHRyZXg9MDtcblx0dW5zdWJzY3JpYmUgPSBCaXR0cmV4LnN1YnNjcmliZSh2YWx1ZSA9PiB7XG5cdFx0Yml0dHJleCA9IHZhbHVlO1xuXHRcdG9wdGlvbnMub3B0aW9uc1swXS55QXhpc1sxXS5uYW1lID0gYml0dHJleFxuXHRcdGNvbnNvbGUubG9nKGJpdHRyZXgpXG5cdFx0XG5cdFx0RWNoYXJ0c0NvbHVtbnNXYXRlcmZhbGxzLmluaXQoKTtcblx0fSk7XG5cdGJpdHRyZXggPSAodHlwZW9mIGJpdHRyZXggPT0gJ29iamVjdCc/MDpiaXR0cmV4KVxuXG5cdGxldCBiaW5hbmNlPTA7XG5cdHVuc3Vic2NyaWJlID0gQmluYW5jZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdGJpbmFuY2UgPSB2YWx1ZTtcblx0fSk7XG5cdGJpbmFuY2UgPSAodHlwZW9mIGJpbmFuY2UgPT0gJ29iamVjdCc/MDpiaW5hbmNlKVxuXG5cdGxldCBva2V4PTA7XG5cdHVuc3Vic2NyaWJlID0gT2tleC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdG9rZXggPSB2YWx1ZTtcblx0fSk7XG5cdG9rZXggPSAodHlwZW9mIG9rZXggPT0gJ29iamVjdCc/MDpva2V4KVxuXG48L3NjcmlwdD5cbjxkaXYgY2xhc3M9XCJjYXJkXCI+XG5cdFxuXHRcdDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBoZWFkZXItZWxlbWVudHMtaW5saW5lXCI+XG5cdFx0XHQ8bGVnZW5kPlxuXHRcdFx0XHQ8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQgIDxsYWJlbCBjbGFzcz1cImQtYmxvY2sgZm9udC13ZWlnaHQtc2VtaWJvbGRcIj5UcmFkaW5nIHZvbHVtZSBpbiBwcm9ncmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZSBmb3JtLWNoZWNrLXJpZ2h0XCIgb246Y2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCAwKX0+XG5cdFx0XHRcdFx0ICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj4gICAgICBVcCB0byAxMCBwYWlycyBjb21wYXJpc29uXG5cdFx0XHRcdFx0ICAgICAgPGRpdiBjbGFzcz1cInVuaWZvcm0tY2hvaWNlXCI+PHNwYW4gY2xhc3M9XCJ7dHlwZT09MCA/ICdjaGVja2VkJyA6ICcnfVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXQtc3R5bGVkXCIgbmFtZT1cInJhZGlvLWlubGluZS1yaWdodFwiICBkYXRhLWZvdWM9XCJcIj48L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0ICAgIDwvbGFiZWw+XG5cdFx0XHRcdFx0ICA8L2Rpdj5cblx0XHRcdFx0XHQgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lIGZvcm0tY2hlY2stcmlnaHRcIiBvbjpjbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIDEpfT5cblx0XHRcdFx0XHQgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPiAgICAgIFNpbmdsZSBwYWlyIGluIHByb2dyZXNzXG5cdFx0XHRcdFx0ICAgICAgPGRpdiBjbGFzcz1cInVuaWZvcm0tY2hvaWNlXCI+PHNwYW4gY2xhc3M9XCJ7dHlwZT09MSA/ICdjaGVja2VkJyA6ICcnfVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXQtc3R5bGVkXCIgbmFtZT1cInJhZGlvLWlubGluZS1yaWdodFwiIGRhdGEtZm91Yz1cIlwiPjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHQgICAgPC9sYWJlbD5cblx0XHRcdFx0XHQgIDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGVyLWVsZW1lbnRzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtaWNvbnNcIj5cblx0XHQgICAgICAgIFx0XHQ8YSBjbGFzcz1cImxpc3QtaWNvbnMtaXRlbVwiIGRhdGEtYWN0aW9uPVwiY29sbGFwc2VcIj48L2E+XG5cdFx0ICAgICAgICBcdFx0PGEgY2xhc3M9XCJsaXN0LWljb25zLWl0ZW1cIiBkYXRhLWFjdGlvbj1cInJlbG9hZFwiPjwvYT5cblx0XHQgICAgICAgIFx0XHQ8YSBjbGFzcz1cImxpc3QtaWNvbnMtaXRlbVwiIGRhdGEtYWN0aW9uPVwicmVtb3ZlXCI+PC9hPlxuXHRcdCAgICAgICAgXHQ8L2Rpdj5cblx0XHQgICAgXHQ8L2Rpdj5cblx0ICAgIFx0PC9sZWdlbmQ+XG5cdFx0PC9kaXY+XG5cdFxuXG5cdDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cblx0XHQ8bGVnZW5kPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZC1ibG9ja1wiPlNlbGVjdCB0aW1lZnJhbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCB0aW1lZnJhbWVcIj4gXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwXCI+MW08L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIj41bTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPjE1bTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiM1wiPjMwbTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiNFwiPjFoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCI1XCI+Mmg8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjZcIj40aDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiN1wiPjZoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCI4XCI+MTJoPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCI5XCI+MUQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjEwXCI+MVc8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjExXCI+MU08L29wdGlvbj5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5TZWxlY3QgRXhjaGFuZ2U8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBleGNoYW5nZVwiPiBcblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjBcIj5CaW5hbmNlPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+Qml0dHJleDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPk9rZXg8L29wdGlvbj5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5TZWxlY3QgQmFzZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwie2V4Y2g9PTA/Jyc6J2hpZGUnfVwiPlxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1pY29ucyBiYXNlQmluYW5jZSBcIj4gXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjBcIiAgZGF0YS1pY29uPVwiQml0Y29pbi5zdmcucG5nXCI+QlRDPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjFcIiAgZGF0YS1pY29uPVwidGV0aGVyLnN2Z1wiPlVTRChzKSZmaWF0IDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIyXCIgIGRhdGEtaWNvbj1cIkJOQi5wbmdcIj5CTkI8L29wdGlvbj5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ7ZXhjaD09MT8nJzonaGlkZSd9XCI+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWljb25zIGJhc2VCaXR0cmV4IFwiPiBcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMFwiICBkYXRhLWljb249XCJCaXRjb2luLnN2Zy5wbmdcIj5CVEM8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMVwiICBkYXRhLWljb249XCJ0ZXRoZXIuc3ZnXCI+VVNEKHMpJmZpYXQgPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjJcIiAgZGF0YS1pY29uPVwiZXRoLnBuZ1wiPkVUSDwvb3B0aW9uPlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ7ZXhjaD09Mj8nJzonaGlkZSd9XCI+XG5cdFx0XHRcdFx0XHRcdDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWljb25zIGJhc2VPa2V4XCI+IFxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIwXCIgIGRhdGEtaWNvbj1cIkJpdGNvaW4uc3ZnLnBuZ1wiPkJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCIgIGRhdGEtaWNvbj1cInRldGhlci5zdmdcIj5VU0QocykmZmlhdCA8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiICBkYXRhLWljb249XCJldGgucG5nXCI+RVRIPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIjNcIiAgZGF0YS1pY29uPVwib2tiLnBuZ1wiPk9LQjwvb3B0aW9uPlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImQtYmxvY2tcIj5DaG9vc2UgdXAgdG8gMTAgdHJhZGluZyBwYWlycyB0byBjb21wYXJlIHRoZWlyIHRvdGFsLCBidXksIHNlbGwgdHJhZGluZyB2b2x1bWUgaW4gcHJvZ3Jlc3M8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJcIj5cblx0XHRcdFx0XHRcdFx0PHNlbGVjdCBkYXRhLXBsYWNlaG9sZGVyPVwiU2VsZWN0IHN0YXRlc1wiIG11bHRpcGxlPVwibXVsdGlwbGVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBzZWxlY3QtYWNjZXNzLW11bHRpcGxlLWNsZWFyXCIgZGF0YS1mb3VjPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBS1wiPlJFUEJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJDQVwiPkRMVEJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBWlwiPlhFTUJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJDT1wiPlhSUEJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJJRFwiPk1EVEJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJXWVwiPkdBU0JUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJXWVwiPkxTS0JUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJXWVwiPktOQ0JUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJXWVwiPlJFTkJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJDVFwiPlhMTUJUQzwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYmctYnJvd24tNDAwIGFjY2Vzcy1tdWx0aXBsZS1jbGVhclwiPkNsZWFyIHNlbGVjdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9sZWdlbmQ+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNoYXJ0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNoYXJ0IGhhcy1maXhlZC1oZWlnaHRcIiBpZD1cImNvbHVtbnNfdGltZWxpbmVcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuXG5cbjxzdHlsZT5cblx0LmNhcmQtaGVhZGVyIC5mb3JtLWdyb3Vwe1xuXHRcdGRpc3BsYXk6ZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cblx0bGFiZWx7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdH1cblx0LmNhcmQtaGVhZGVyIGxlZ2VuZHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHRcblx0LmJ7XG5cdFx0ZGlzcGxheTogZmxleDtcdFx0XG5cdH1cblx0LmIgLmJ0bntcblx0XHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRoZWlnaHQ6IDM2cHg7XG5cdH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThhQywwQkFBWSxDQUFDLHlCQUFXLENBQUMsQUFDeEIsUUFBUSxJQUFJLENBQ1osV0FBVyxDQUFFLE1BQU0sQ0FDbkIsYUFBYSxDQUFFLENBQUMsQUFDakIsQ0FBQyxBQUNELGlDQUFLLENBQUMsQUFDTCxhQUFhLENBQUUsQ0FBQyxDQUNoQixZQUFZLENBQUUsSUFBSSxBQUNuQixDQUFDLEFBQ0QsMEJBQVksQ0FBQyxvQkFBTSxDQUFDLEFBQ25CLE9BQU8sQ0FBRSxJQUFJLENBQ2IsZUFBZSxDQUFFLGFBQWEsQUFDL0IsQ0FBQyxBQUVELDhCQUFFLENBQUMsQUFDRixPQUFPLENBQUUsSUFBSSxBQUNkLENBQUMsQUFDRCxnQkFBRSxDQUFDLGtCQUFJLENBQUMsQUFDTixXQUFXLENBQUUsQ0FBQyxDQUNkLFdBQVcsQ0FBRSxJQUFJLENBQ2pCLE1BQU0sQ0FBRSxJQUFJLEFBQ2QsQ0FBQyJ9 */";
    	append_dev(document_1.head, style);
    }

    function create_fragment(ctx) {
    	let div24;
    	let div7;
    	let legend0;
    	let h5;
    	let div4;
    	let label0;
    	let t1;
    	let div1;
    	let label1;
    	let t2;
    	let div0;
    	let span0;
    	let input0;
    	let span0_class_value;
    	let t3;
    	let div3;
    	let label2;
    	let t4;
    	let div2;
    	let span1;
    	let input1;
    	let span1_class_value;
    	let t5;
    	let div6;
    	let div5;
    	let a0;
    	let t6;
    	let a1;
    	let t7;
    	let a2;
    	let t8;
    	let div23;
    	let legend1;
    	let div19;
    	let div9;
    	let div8;
    	let label3;
    	let t10;
    	let select0;
    	let option0;
    	let option1;
    	let option2;
    	let option3;
    	let option4;
    	let option5;
    	let option6;
    	let option7;
    	let option8;
    	let option9;
    	let option10;
    	let option11;
    	let t23;
    	let div11;
    	let div10;
    	let label4;
    	let t25;
    	let select1;
    	let option12;
    	let option13;
    	let option14;
    	let t29;
    	let div16;
    	let div15;
    	let label5;
    	let t31;
    	let div12;
    	let select2;
    	let option15;
    	let option16;
    	let option17;
    	let div12_class_value;
    	let t35;
    	let div13;
    	let select3;
    	let option18;
    	let option19;
    	let option20;
    	let div13_class_value;
    	let t39;
    	let div14;
    	let select4;
    	let option21;
    	let option22;
    	let option23;
    	let option24;
    	let div14_class_value;
    	let t44;
    	let div18;
    	let label6;
    	let t46;
    	let div17;
    	let select5;
    	let option25;
    	let option26;
    	let option27;
    	let option28;
    	let option29;
    	let option30;
    	let option31;
    	let option32;
    	let option33;
    	let option34;
    	let t57;
    	let button;
    	let t59;
    	let div22;
    	let div21;
    	let div20;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div24 = element("div");
    			div7 = element("div");
    			legend0 = element("legend");
    			h5 = element("h5");
    			div4 = element("div");
    			label0 = element("label");
    			label0.textContent = "Trading volume in progress";
    			t1 = space();
    			div1 = element("div");
    			label1 = element("label");
    			t2 = text("Up to 10 pairs comparison\n\t\t\t\t\t      ");
    			div0 = element("div");
    			span0 = element("span");
    			input0 = element("input");
    			t3 = space();
    			div3 = element("div");
    			label2 = element("label");
    			t4 = text("Single pair in progress\n\t\t\t\t\t      ");
    			div2 = element("div");
    			span1 = element("span");
    			input1 = element("input");
    			t5 = space();
    			div6 = element("div");
    			div5 = element("div");
    			a0 = element("a");
    			t6 = space();
    			a1 = element("a");
    			t7 = space();
    			a2 = element("a");
    			t8 = space();
    			div23 = element("div");
    			legend1 = element("legend");
    			div19 = element("div");
    			div9 = element("div");
    			div8 = element("div");
    			label3 = element("label");
    			label3.textContent = "Select timeframe";
    			t10 = space();
    			select0 = element("select");
    			option0 = element("option");
    			option0.textContent = "1m";
    			option1 = element("option");
    			option1.textContent = "5m";
    			option2 = element("option");
    			option2.textContent = "15m";
    			option3 = element("option");
    			option3.textContent = "30m";
    			option4 = element("option");
    			option4.textContent = "1h";
    			option5 = element("option");
    			option5.textContent = "2h";
    			option6 = element("option");
    			option6.textContent = "4h";
    			option7 = element("option");
    			option7.textContent = "6h";
    			option8 = element("option");
    			option8.textContent = "12h";
    			option9 = element("option");
    			option9.textContent = "1D";
    			option10 = element("option");
    			option10.textContent = "1W";
    			option11 = element("option");
    			option11.textContent = "1M";
    			t23 = space();
    			div11 = element("div");
    			div10 = element("div");
    			label4 = element("label");
    			label4.textContent = "Select Exchange";
    			t25 = space();
    			select1 = element("select");
    			option12 = element("option");
    			option12.textContent = "Binance";
    			option13 = element("option");
    			option13.textContent = "Bittrex";
    			option14 = element("option");
    			option14.textContent = "Okex";
    			t29 = space();
    			div16 = element("div");
    			div15 = element("div");
    			label5 = element("label");
    			label5.textContent = "Select Base";
    			t31 = space();
    			div12 = element("div");
    			select2 = element("select");
    			option15 = element("option");
    			option15.textContent = "BTC";
    			option16 = element("option");
    			option16.textContent = "USD(s)&fiat ";
    			option17 = element("option");
    			option17.textContent = "BNB";
    			t35 = space();
    			div13 = element("div");
    			select3 = element("select");
    			option18 = element("option");
    			option18.textContent = "BTC";
    			option19 = element("option");
    			option19.textContent = "USD(s)&fiat ";
    			option20 = element("option");
    			option20.textContent = "ETH";
    			t39 = space();
    			div14 = element("div");
    			select4 = element("select");
    			option21 = element("option");
    			option21.textContent = "BTC";
    			option22 = element("option");
    			option22.textContent = "USD(s)&fiat ";
    			option23 = element("option");
    			option23.textContent = "ETH";
    			option24 = element("option");
    			option24.textContent = "OKB";
    			t44 = space();
    			div18 = element("div");
    			label6 = element("label");
    			label6.textContent = "Choose up to 10 trading pairs to compare their total, buy, sell trading volume in progress";
    			t46 = space();
    			div17 = element("div");
    			select5 = element("select");
    			option25 = element("option");
    			option25.textContent = "REPBTC";
    			option26 = element("option");
    			option26.textContent = "DLTBTC";
    			option27 = element("option");
    			option27.textContent = "XEMBTC";
    			option28 = element("option");
    			option28.textContent = "XRPBTC";
    			option29 = element("option");
    			option29.textContent = "MDTBTC";
    			option30 = element("option");
    			option30.textContent = "GASBTC";
    			option31 = element("option");
    			option31.textContent = "LSKBTC";
    			option32 = element("option");
    			option32.textContent = "KNCBTC";
    			option33 = element("option");
    			option33.textContent = "RENBTC";
    			option34 = element("option");
    			option34.textContent = "XLMBTC";
    			t57 = space();
    			button = element("button");
    			button.textContent = "Clear selection";
    			t59 = space();
    			div22 = element("div");
    			div21 = element("div");
    			div20 = element("div");
    			attr_dev(label0, "class", "d-block font-weight-semibold svelte-u2l48o");
    			add_location(label0, file, 316, 7, 12485);
    			attr_dev(input0, "type", "radio");
    			attr_dev(input0, "class", "form-check-input-styled");
    			attr_dev(input0, "name", "radio-inline-right");
    			attr_dev(input0, "data-fouc", "");
    			add_location(input0, file, 319, 80, 12823);
    			attr_dev(span0, "class", span0_class_value = /*type*/ ctx[0] == 0 ? "checked" : "");
    			add_location(span0, file, 319, 39, 12782);
    			attr_dev(div0, "class", "uniform-choice");
    			add_location(div0, file, 319, 11, 12754);
    			attr_dev(label1, "class", "form-check-label svelte-u2l48o");
    			add_location(label1, file, 318, 9, 12679);
    			attr_dev(div1, "class", "form-check form-check-inline form-check-right");
    			add_location(div1, file, 317, 7, 12571);
    			attr_dev(input1, "type", "radio");
    			attr_dev(input1, "class", "form-check-input-styled");
    			attr_dev(input1, "name", "radio-inline-right");
    			attr_dev(input1, "data-fouc", "");
    			add_location(input1, file, 324, 80, 13218);
    			attr_dev(span1, "class", span1_class_value = /*type*/ ctx[0] == 1 ? "checked" : "");
    			add_location(span1, file, 324, 39, 13177);
    			attr_dev(div2, "class", "uniform-choice");
    			add_location(div2, file, 324, 11, 13149);
    			attr_dev(label2, "class", "form-check-label svelte-u2l48o");
    			add_location(label2, file, 323, 9, 13076);
    			attr_dev(div3, "class", "form-check form-check-inline form-check-right");
    			add_location(div3, file, 322, 7, 12968);
    			attr_dev(div4, "class", "form-group svelte-u2l48o");
    			add_location(div4, file, 315, 5, 12453);
    			attr_dev(h5, "class", "card-title");
    			add_location(h5, file, 314, 4, 12424);
    			attr_dev(a0, "class", "list-icons-item");
    			attr_dev(a0, "data-action", "collapse");
    			add_location(a0, file, 331, 12, 13453);
    			attr_dev(a1, "class", "list-icons-item");
    			attr_dev(a1, "data-action", "reload");
    			add_location(a1, file, 332, 12, 13520);
    			attr_dev(a2, "class", "list-icons-item");
    			attr_dev(a2, "data-action", "remove");
    			add_location(a2, file, 333, 12, 13585);
    			attr_dev(div5, "class", "list-icons");
    			add_location(div5, file, 330, 5, 13416);
    			attr_dev(div6, "class", "header-elements");
    			add_location(div6, file, 329, 4, 13381);
    			attr_dev(legend0, "class", "svelte-u2l48o");
    			add_location(legend0, file, 313, 3, 12411);
    			attr_dev(div7, "class", "card-header header-elements-inline svelte-u2l48o");
    			add_location(div7, file, 312, 2, 12359);
    			attr_dev(label3, "class", "d-block svelte-u2l48o");
    			add_location(label3, file, 345, 6, 13818);
    			option0.__value = "0";
    			option0.value = option0.__value;
    			add_location(option0, file, 347, 7, 13920);
    			option1.__value = "1";
    			option1.value = option1.__value;
    			add_location(option1, file, 348, 7, 13957);
    			option2.__value = "2";
    			option2.value = option2.__value;
    			add_location(option2, file, 349, 7, 13994);
    			option3.__value = "3";
    			option3.value = option3.__value;
    			add_location(option3, file, 350, 7, 14032);
    			option4.__value = "4";
    			option4.value = option4.__value;
    			add_location(option4, file, 351, 7, 14070);
    			option5.__value = "5";
    			option5.value = option5.__value;
    			add_location(option5, file, 352, 7, 14107);
    			option6.__value = "6";
    			option6.value = option6.__value;
    			add_location(option6, file, 353, 7, 14144);
    			option7.__value = "7";
    			option7.value = option7.__value;
    			add_location(option7, file, 354, 7, 14181);
    			option8.__value = "8";
    			option8.value = option8.__value;
    			add_location(option8, file, 355, 7, 14218);
    			option9.__value = "9";
    			option9.value = option9.__value;
    			add_location(option9, file, 356, 7, 14256);
    			option10.__value = "10";
    			option10.value = option10.__value;
    			add_location(option10, file, 357, 7, 14293);
    			option11.__value = "11";
    			option11.value = option11.__value;
    			add_location(option11, file, 358, 7, 14331);
    			attr_dev(select0, "class", "form-control timeframe");
    			add_location(select0, file, 346, 6, 13872);
    			attr_dev(div8, "class", "form-group");
    			add_location(div8, file, 344, 5, 13787);
    			attr_dev(div9, "class", "col-md-2");
    			add_location(div9, file, 343, 4, 13759);
    			attr_dev(label4, "class", "d-block svelte-u2l48o");
    			add_location(label4, file, 364, 6, 14470);
    			option12.__value = "0";
    			option12.value = option12.__value;
    			add_location(option12, file, 366, 7, 14570);
    			option13.__value = "1";
    			option13.value = option13.__value;
    			add_location(option13, file, 367, 7, 14612);
    			option14.__value = "2";
    			option14.value = option14.__value;
    			add_location(option14, file, 368, 7, 14654);
    			attr_dev(select1, "class", "form-control exchange");
    			add_location(select1, file, 365, 6, 14523);
    			attr_dev(div10, "class", "form-group");
    			add_location(div10, file, 363, 5, 14439);
    			attr_dev(div11, "class", "col-md-2");
    			add_location(div11, file, 362, 4, 14411);
    			attr_dev(label5, "class", "d-block svelte-u2l48o");
    			add_location(label5, file, 374, 6, 14800);
    			option15.__value = "0";
    			option15.value = option15.__value;
    			attr_dev(option15, "data-icon", "Bitcoin.svg.png");
    			add_location(option15, file, 377, 8, 14955);
    			option16.__value = "1";
    			option16.value = option16.__value;
    			attr_dev(option16, "data-icon", "tether.svg");
    			add_location(option16, file, 378, 8, 15023);
    			option17.__value = "2";
    			option17.value = option17.__value;
    			attr_dev(option17, "data-icon", "BNB.png");
    			add_location(option17, file, 379, 8, 15095);
    			attr_dev(select2, "class", "form-control select-icons baseBinance ");
    			add_location(select2, file, 376, 7, 14890);
    			attr_dev(div12, "class", div12_class_value = /*exch*/ ctx[1] == 0 ? "" : "hide");
    			add_location(div12, file, 375, 6, 14849);
    			option18.__value = "0";
    			option18.value = option18.__value;
    			attr_dev(option18, "data-icon", "Bitcoin.svg.png");
    			add_location(option18, file, 384, 8, 15301);
    			option19.__value = "1";
    			option19.value = option19.__value;
    			attr_dev(option19, "data-icon", "tether.svg");
    			add_location(option19, file, 385, 8, 15369);
    			option20.__value = "2";
    			option20.value = option20.__value;
    			attr_dev(option20, "data-icon", "eth.png");
    			add_location(option20, file, 386, 8, 15441);
    			attr_dev(select3, "class", "form-control select-icons baseBittrex ");
    			add_location(select3, file, 383, 7, 15236);
    			attr_dev(div13, "class", div13_class_value = /*exch*/ ctx[1] == 1 ? "" : "hide");
    			add_location(div13, file, 382, 6, 15195);
    			option21.__value = "0";
    			option21.value = option21.__value;
    			attr_dev(option21, "data-icon", "Bitcoin.svg.png");
    			add_location(option21, file, 391, 8, 15642);
    			option22.__value = "1";
    			option22.value = option22.__value;
    			attr_dev(option22, "data-icon", "tether.svg");
    			add_location(option22, file, 392, 8, 15710);
    			option23.__value = "2";
    			option23.value = option23.__value;
    			attr_dev(option23, "data-icon", "eth.png");
    			add_location(option23, file, 393, 8, 15782);
    			option24.__value = "3";
    			option24.value = option24.__value;
    			attr_dev(option24, "data-icon", "okb.png");
    			add_location(option24, file, 394, 8, 15842);
    			attr_dev(select4, "class", "form-control select-icons baseOkex");
    			add_location(select4, file, 390, 7, 15581);
    			attr_dev(div14, "class", div14_class_value = /*exch*/ ctx[1] == 2 ? "" : "hide");
    			add_location(div14, file, 389, 6, 15540);
    			attr_dev(div15, "class", "form-group");
    			add_location(div15, file, 373, 5, 14769);
    			attr_dev(div16, "class", "col-md-2");
    			add_location(div16, file, 372, 4, 14741);
    			attr_dev(label6, "class", "d-block svelte-u2l48o");
    			add_location(label6, file, 400, 6, 15993);
    			option25.__value = "AK";
    			option25.value = option25.__value;
    			add_location(option25, file, 403, 8, 16274);
    			option26.__value = "CA";
    			option26.value = option26.__value;
    			add_location(option26, file, 404, 8, 16317);
    			option27.__value = "AZ";
    			option27.value = option27.__value;
    			add_location(option27, file, 405, 8, 16360);
    			option28.__value = "CO";
    			option28.value = option28.__value;
    			add_location(option28, file, 406, 8, 16403);
    			option29.__value = "ID";
    			option29.value = option29.__value;
    			add_location(option29, file, 407, 8, 16446);
    			option30.__value = "WY";
    			option30.value = option30.__value;
    			add_location(option30, file, 408, 8, 16489);
    			option31.__value = "WY";
    			option31.value = option31.__value;
    			add_location(option31, file, 409, 8, 16532);
    			option32.__value = "WY";
    			option32.value = option32.__value;
    			add_location(option32, file, 410, 8, 16575);
    			option33.__value = "WY";
    			option33.value = option33.__value;
    			add_location(option33, file, 411, 8, 16618);
    			option34.__value = "CT";
    			option34.value = option34.__value;
    			add_location(option34, file, 412, 8, 16661);
    			attr_dev(select5, "data-placeholder", "Select states");
    			select5.multiple = "multiple";
    			attr_dev(select5, "class", "form-control select-access-multiple-clear");
    			attr_dev(select5, "data-fouc", "");
    			add_location(select5, file, 402, 7, 16144);
    			attr_dev(button, "type", "button");
    			attr_dev(button, "class", "btn bg-brown-400 access-multiple-clear svelte-u2l48o");
    			add_location(button, file, 414, 7, 16720);
    			attr_dev(div17, "class", "b svelte-u2l48o");
    			add_location(div17, file, 401, 6, 16121);
    			attr_dev(div18, "class", "col-md-6");
    			add_location(div18, file, 399, 4, 15964);
    			attr_dev(div19, "class", "row");
    			add_location(div19, file, 342, 3, 13737);
    			add_location(legend1, file, 341, 2, 13725);
    			attr_dev(div20, "class", "chart has-fixed-height");
    			attr_dev(div20, "id", "columns_timeline");
    			add_location(div20, file, 422, 4, 16928);
    			attr_dev(div21, "class", "chart-container");
    			add_location(div21, file, 420, 3, 16889);
    			attr_dev(div22, "class", "row");
    			add_location(div22, file, 419, 2, 16868);
    			attr_dev(div23, "class", "card-body");
    			add_location(div23, file, 340, 1, 13699);
    			attr_dev(div24, "class", "card");
    			add_location(div24, file, 310, 0, 12336);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div24, anchor);
    			append_dev(div24, div7);
    			append_dev(div7, legend0);
    			append_dev(legend0, h5);
    			append_dev(h5, div4);
    			append_dev(div4, label0);
    			append_dev(div4, t1);
    			append_dev(div4, div1);
    			append_dev(div1, label1);
    			append_dev(label1, t2);
    			append_dev(label1, div0);
    			append_dev(div0, span0);
    			append_dev(span0, input0);
    			append_dev(div4, t3);
    			append_dev(div4, div3);
    			append_dev(div3, label2);
    			append_dev(label2, t4);
    			append_dev(label2, div2);
    			append_dev(div2, span1);
    			append_dev(span1, input1);
    			append_dev(legend0, t5);
    			append_dev(legend0, div6);
    			append_dev(div6, div5);
    			append_dev(div5, a0);
    			append_dev(div5, t6);
    			append_dev(div5, a1);
    			append_dev(div5, t7);
    			append_dev(div5, a2);
    			append_dev(div24, t8);
    			append_dev(div24, div23);
    			append_dev(div23, legend1);
    			append_dev(legend1, div19);
    			append_dev(div19, div9);
    			append_dev(div9, div8);
    			append_dev(div8, label3);
    			append_dev(div8, t10);
    			append_dev(div8, select0);
    			append_dev(select0, option0);
    			append_dev(select0, option1);
    			append_dev(select0, option2);
    			append_dev(select0, option3);
    			append_dev(select0, option4);
    			append_dev(select0, option5);
    			append_dev(select0, option6);
    			append_dev(select0, option7);
    			append_dev(select0, option8);
    			append_dev(select0, option9);
    			append_dev(select0, option10);
    			append_dev(select0, option11);
    			append_dev(div19, t23);
    			append_dev(div19, div11);
    			append_dev(div11, div10);
    			append_dev(div10, label4);
    			append_dev(div10, t25);
    			append_dev(div10, select1);
    			append_dev(select1, option12);
    			append_dev(select1, option13);
    			append_dev(select1, option14);
    			append_dev(div19, t29);
    			append_dev(div19, div16);
    			append_dev(div16, div15);
    			append_dev(div15, label5);
    			append_dev(div15, t31);
    			append_dev(div15, div12);
    			append_dev(div12, select2);
    			append_dev(select2, option15);
    			append_dev(select2, option16);
    			append_dev(select2, option17);
    			append_dev(div15, t35);
    			append_dev(div15, div13);
    			append_dev(div13, select3);
    			append_dev(select3, option18);
    			append_dev(select3, option19);
    			append_dev(select3, option20);
    			append_dev(div15, t39);
    			append_dev(div15, div14);
    			append_dev(div14, select4);
    			append_dev(select4, option21);
    			append_dev(select4, option22);
    			append_dev(select4, option23);
    			append_dev(select4, option24);
    			append_dev(div19, t44);
    			append_dev(div19, div18);
    			append_dev(div18, label6);
    			append_dev(div18, t46);
    			append_dev(div18, div17);
    			append_dev(div17, select5);
    			append_dev(select5, option25);
    			append_dev(select5, option26);
    			append_dev(select5, option27);
    			append_dev(select5, option28);
    			append_dev(select5, option29);
    			append_dev(select5, option30);
    			append_dev(select5, option31);
    			append_dev(select5, option32);
    			append_dev(select5, option33);
    			append_dev(select5, option34);
    			append_dev(div17, t57);
    			append_dev(div17, button);
    			append_dev(div23, t59);
    			append_dev(div23, div22);
    			append_dev(div22, div21);
    			append_dev(div21, div20);

    			if (!mounted) {
    				dispose = [
    					listen_dev(div1, "click", /*click_handler*/ ctx[3], false, false, false),
    					listen_dev(div3, "click", /*click_handler_1*/ ctx[4], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*type*/ 1 && span0_class_value !== (span0_class_value = /*type*/ ctx[0] == 0 ? "checked" : "")) {
    				attr_dev(span0, "class", span0_class_value);
    			}

    			if (dirty & /*type*/ 1 && span1_class_value !== (span1_class_value = /*type*/ ctx[0] == 1 ? "checked" : "")) {
    				attr_dev(span1, "class", span1_class_value);
    			}

    			if (dirty & /*exch*/ 2 && div12_class_value !== (div12_class_value = /*exch*/ ctx[1] == 0 ? "" : "hide")) {
    				attr_dev(div12, "class", div12_class_value);
    			}

    			if (dirty & /*exch*/ 2 && div13_class_value !== (div13_class_value = /*exch*/ ctx[1] == 1 ? "" : "hide")) {
    				attr_dev(div13, "class", div13_class_value);
    			}

    			if (dirty & /*exch*/ 2 && div14_class_value !== (div14_class_value = /*exch*/ ctx[1] == 2 ? "" : "hide")) {
    				attr_dev(div14, "class", div14_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div24);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let type = 0;

    	function handleClick(ev, i) {
    		$$invalidate(0, type = i);
    	}

    	let dataMap = {
    		dataGDP: {
    			2014: [
    				16251.93,
    				11307.28,
    				24515.76,
    				11237.55,
    				14359.88,
    				22226.7,
    				10568.83,
    				12582,
    				19195.69,
    				49110.27
    			],
    			2013: [
    				14113.58,
    				9224.46,
    				20394.26,
    				9200.86,
    				11672,
    				18457.27,
    				8667.58,
    				10368.6,
    				17165.98,
    				41425.48
    			],
    			2012: [
    				12153.03,
    				7521.85,
    				17235.48,
    				7358.31,
    				9740.25,
    				15212.49,
    				7278.75,
    				8587,
    				15046.45,
    				34457.3
    			],
    			2011: [
    				11115,
    				6719.01,
    				16011.97,
    				7315.4,
    				8496.2,
    				13668.58,
    				6426.1,
    				8314.37,
    				14069.87,
    				30981.98
    			],
    			2010: [
    				9846.81,
    				5252.76,
    				13607.32,
    				6024.45,
    				6423.18,
    				11164.3,
    				5284.69,
    				7104,
    				12494.01,
    				26018.48
    			]
    		},
    		dataEstate: {
    			2014: [
    				1074.93,
    				411.46,
    				918.02,
    				224.91,
    				384.76,
    				876.12,
    				238.61,
    				492.1,
    				1019.68,
    				2747.89
    			],
    			2013: [
    				1006.52,
    				377.59,
    				697.79,
    				192,
    				309.25,
    				733.37,
    				212.32,
    				391.89,
    				1002.5,
    				2600.95
    			],
    			2012: [
    				1062.47,
    				308.73,
    				612.4,
    				173.31,
    				286.65,
    				605.27,
    				200.14,
    				301.18,
    				1237.56,
    				2025.39
    			],
    			2011: [
    				844.59,
    				227.88,
    				513.81,
    				166.04,
    				273.3,
    				500.81,
    				182.7,
    				244.47,
    				939.34,
    				1626.13
    			],
    			2010: [
    				821.5,
    				183.44,
    				467.97,
    				134.12,
    				191.01,
    				410.43,
    				153.03,
    				225.81,
    				958.06,
    				1365.71
    			]
    		},
    		dataFinancial: {
    			2014: [
    				2215.41,
    				756.5,
    				746.01,
    				519.32,
    				447.46,
    				755.57,
    				207.65,
    				370.78,
    				2277.4,
    				2600.11
    			],
    			2013: [
    				1863.61,
    				572.99,
    				615.42,
    				448.3,
    				346.44,
    				639.27,
    				190.12,
    				304.59,
    				1950.96,
    				2105.92
    			],
    			2012: [
    				1603.63,
    				461.2,
    				525.67,
    				361.64,
    				291.1,
    				560.2,
    				180.83,
    				227.54,
    				1804.28,
    				1596.98
    			],
    			2011: [
    				1519.19,
    				368.1,
    				420.74,
    				290.91,
    				219.09,
    				455.07,
    				147.24,
    				177.43,
    				1414.21,
    				1298.48
    			],
    			2010: [
    				1302.77,
    				288.17,
    				347.65,
    				218.73,
    				148.3,
    				386.34,
    				126.03,
    				155.48,
    				1209.08,
    				1054.25
    			]
    		}
    	};

    	let options = {
    		// Setup timeline
    		timeline: {
    			axisType: "category",
    			data: ["2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01", "2014-01-01"],
    			left: 0,
    			right: 0,
    			bottom: 0,
    			label: {
    				normal: {
    					fontFamily: "Roboto, Arial, Verdana, sans-serif",
    					fontSize: 11
    				}
    			},
    			autoPlay: true,
    			playInterval: 3000
    		},
    		// Config
    		options: [
    			{
    				// Global text styles
    				textStyle: {
    					fontFamily: "Roboto, Arial, Verdana, sans-serif",
    					fontSize: 13
    				},
    				// Chart animation duration
    				animationDuration: 750,
    				// Setup grid
    				grid: {
    					left: 10,
    					right: 10,
    					top: 35,
    					bottom: 60,
    					containLabel: true
    				},
    				// Add legend
    				legend: {
    					data: ["BTC", "Financial", "Real Estate"],
    					itemHeight: 8,
    					itemGap: 20
    				},
    				// Tooltip
    				tooltip: {
    					trigger: "axis",
    					backgroundColor: "rgba(0,0,0,0.75)",
    					padding: [10, 15],
    					textStyle: {
    						fontSize: 13,
    						fontFamily: "Roboto, sans-serif"
    					},
    					axisPointer: {
    						type: "shadow",
    						shadowStyle: { color: "rgba(0,0,0,0.025)" }
    					}
    				},
    				// Horizontal axis
    				xAxis: [
    					{
    						type: "category",
    						data: [
    							"Paris",
    							"Budapest",
    							"Prague",
    							"Madrid",
    							"Amsterdam",
    							"Berlin",
    							"Bratislava",
    							"Munich",
    							"Hague",
    							"Rome"
    						],
    						axisLabel: { color: "#333" },
    						axisLine: { lineStyle: { color: "#999" } },
    						splitLine: {
    							show: true,
    							lineStyle: { color: "#eee", type: "dashed" }
    						},
    						splitArea: {
    							show: true,
    							areaStyle: {
    								color: ["rgba(250,250,250,0.1)", "rgba(0,0,0,0.015)"]
    							}
    						}
    					}
    				],
    				// Vertical axis
    				yAxis: [
    					{
    						type: "value",
    						name: "",
    						max: 53500,
    						axisLabel: { color: "#333" },
    						axisLine: { lineStyle: { color: "#999" } },
    						splitLine: { show: true, lineStyle: { color: "#eee" } }
    					},
    					{
    						type: "value",
    						name: "BTC",
    						axisLabel: { color: "#333" },
    						axisLine: { lineStyle: { color: "#999" } },
    						splitLine: {
    							show: true,
    							lineStyle: { color: "#f5f5f5" }
    						}
    					}
    				],
    				// Add series
    				series: [
    					{
    						name: "BTC",
    						type: "bar",
    						markLine: {
    							symbol: ["arrow", "none"],
    							symbolSize: [4, 2],
    							itemStyle: {
    								normal: {
    									lineStyle: { color: "orange" },
    									barBorderColor: "orange",
    									label: {
    										position: "left",
    										formatter(params) {
    											return Math.round(params.value);
    										},
    										textStyle: { color: "orange" }
    									}
    								}
    							},
    							data: [{ type: "average", name: "Average" }]
    						},
    						data: dataMap.dataGDP["2010"]
    					},
    					{
    						name: "Financial",
    						yAxisIndex: 1,
    						type: "bar",
    						data: dataMap.dataFinancial["2010"]
    					},
    					{
    						name: "Real Estate",
    						yAxisIndex: 1,
    						type: "bar",
    						data: dataMap.dataEstate["2010"]
    					}
    				]
    			},
    			// 2011 data
    			{
    				series: [
    					{ data: dataMap.dataGDP["2011"] },
    					{ data: dataMap.dataFinancial["2011"] },
    					{ data: dataMap.dataEstate["2011"] }
    				]
    			},
    			// 2012 data
    			{
    				series: [
    					{ data: dataMap.dataGDP["2012"] },
    					{ data: dataMap.dataFinancial["2012"] },
    					{ data: dataMap.dataEstate["2012"] }
    				]
    			},
    			// 2013 data
    			{
    				series: [
    					{ data: dataMap.dataGDP["2013"] },
    					{ data: dataMap.dataFinancial["2013"] },
    					{ data: dataMap.dataEstate["2013"] }
    				]
    			},
    			// 2014 data
    			{
    				series: [
    					{ data: dataMap.dataGDP["2014"] },
    					{ data: dataMap.dataFinancial["2014"] },
    					{ data: dataMap.dataEstate["2014"] }
    				]
    			}
    		]
    	};

    	let columns_timeline_element = document.getElementById("columns_timeline"),
    		columns_timeline;

    	window.EchartsColumnsWaterfalls = (function () {
    		var _columnsWaterfallsExamples = function () {
    			if (typeof echarts == "undefined") {
    				console.warn("Warning - echarts.min.js is not loaded.");
    				return;
    			}

    			columns_timeline_element = document.getElementById("columns_timeline");

    			if (columns_timeline_element) {
    				columns_timeline = echarts.init(columns_timeline_element);
    				columns_timeline.setOption(options);
    			}

    			var triggerChartResize = function () {
    				columns_timeline_element && columns_timeline.resize();
    			};

    			var resizeCharts;

    			window.onresize = function () {
    				clearTimeout(resizeCharts);

    				resizeCharts = setTimeout(
    					function () {
    						triggerChartResize();
    					},
    					200
    				);
    			};
    		};

    		return {
    			init() {
    				_columnsWaterfallsExamples();
    			}
    		};
    	})();

    	document.addEventListener("DOMContentLoaded", function () {
    		EchartsColumnsWaterfalls.init();
    	});

    	let tf = 0;

    	let unsubscribe = timeframe.subscribe(value => {
    		tf = value;
    	});

    	tf = typeof tf == "object" ? 0 : tf;
    	let exch = 0;

    	unsubscribe = exchange.subscribe(value => {
    		$$invalidate(1, exch = value);
    	});

    	exch = typeof exch == "object" ? 0 : exch;
    	let bittrex = 0;

    	unsubscribe = Bittrex.subscribe(value => {
    		bittrex = value;
    		options.options[0].yAxis[1].name = bittrex;
    		console.log(bittrex);
    		EchartsColumnsWaterfalls.init();
    	});

    	bittrex = typeof bittrex == "object" ? 0 : bittrex;
    	let binance = 0;

    	unsubscribe = Binance.subscribe(value => {
    		binance = value;
    	});

    	binance = typeof binance == "object" ? 0 : binance;
    	let okex = 0;

    	unsubscribe = Okex.subscribe(value => {
    		okex = value;
    	});

    	okex = typeof okex == "object" ? 0 : okex;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Dashboard> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Dashboard", $$slots, []);
    	const click_handler = () => handleClick(event, 0);
    	const click_handler_1 = () => handleClick(event, 1);

    	$$self.$capture_state = () => ({
    		timeframe,
    		exchange,
    		Binance,
    		Bittrex,
    		Okex,
    		type,
    		handleClick,
    		dataMap,
    		options,
    		columns_timeline_element,
    		columns_timeline,
    		tf,
    		unsubscribe,
    		exch,
    		bittrex,
    		binance,
    		okex
    	});

    	$$self.$inject_state = $$props => {
    		if ("type" in $$props) $$invalidate(0, type = $$props.type);
    		if ("dataMap" in $$props) dataMap = $$props.dataMap;
    		if ("options" in $$props) options = $$props.options;
    		if ("columns_timeline_element" in $$props) columns_timeline_element = $$props.columns_timeline_element;
    		if ("columns_timeline" in $$props) columns_timeline = $$props.columns_timeline;
    		if ("tf" in $$props) tf = $$props.tf;
    		if ("unsubscribe" in $$props) unsubscribe = $$props.unsubscribe;
    		if ("exch" in $$props) $$invalidate(1, exch = $$props.exch);
    		if ("bittrex" in $$props) bittrex = $$props.bittrex;
    		if ("binance" in $$props) binance = $$props.binance;
    		if ("okex" in $$props) okex = $$props.okex;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [type, exch, handleClick, click_handler, click_handler_1];
    }

    class Dashboard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		if (!document_1.getElementById("svelte-u2l48o-style")) add_css();
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Dashboard",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    Object.defineProperty(window,'timeframe',{    
        set: function(val){
            timeframe.set(val);
        },
    });

    Object.defineProperty(window,'exchange',{    
        set: function(val){
            exchange.set(val);
        },
    });

    Object.defineProperty(window,'Binance',{    
        set: function(val){
            Binance.set(val);
        },
    });

    Object.defineProperty(window,'Bittrex',{    
        set: function(val){
            Bittrex.set(val);
        },
    });

    Object.defineProperty(window,'Okex',{    
        set: function(val){
            Okex.set(val);
        },
    });

    const app = new Dashboard({
    	target: document.querySelector('#dashboard'),
    	props: {
    		name: 'world'
    	}
    });

    return app;

}());
//# sourceMappingURL=dashboard.js.map
