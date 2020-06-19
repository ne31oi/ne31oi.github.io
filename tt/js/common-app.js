/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

(function(factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    window.wNumb = factory();
  }
})(function() {
  "use strict";

  var FormatOptions = [
    "decimals",
    "thousand",
    "mark",
    "prefix",
    "suffix",
    "encoder",
    "decoder",
    "negativeBefore",
    "negative",
    "edit",
    "undo"
  ];

  // General

  // Reverse a string
  function strReverse(a) {
    return a
      .split("")
      .reverse()
      .join("");
  }

  // Check if a string starts with a specified prefix.
  function strStartsWith(input, match) {
    return input.substring(0, match.length) === match;
  }

  // Check is a string ends in a specified suffix.
  function strEndsWith(input, match) {
    return input.slice(-1 * match.length) === match;
  }

  // Throw an error if formatting options are incompatible.
  function throwEqualError(F, a, b) {
    if ((F[a] || F[b]) && F[a] === F[b]) {
      throw new Error(a);
    }
  }

  // Check if a number is finite and not NaN
  function isValidNumber(input) {
    return typeof input === "number" && isFinite(input);
  }

  // Provide rounding-accurate toFixed method.
  // Borrowed: http://stackoverflow.com/a/21323330/775265
  function toFixed(value, exp) {
    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
    value = value.toString().split("e");
    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
  }

  // Formatting

  // Accept a number as input, output formatted string.
  function formatTo(
    decimals,
    thousand,
    mark,
    prefix,
    suffix,
    encoder,
    decoder,
    negativeBefore,
    negative,
    edit,
    undo,
    input
  ) {
    var originalInput = input,
      inputIsNegative,
      inputPieces,
      inputBase,
      inputDecimals = "",
      output = "";

    // Apply user encoder to the input.
    // Expected outcome: number.
    if (encoder) {
      input = encoder(input);
    }

    // Stop if no valid number was provided, the number is infinite or NaN.
    if (!isValidNumber(input)) {
      return false;
    }

    // Rounding away decimals might cause a value of -0
    // when using very small ranges. Remove those cases.
    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
      input = 0;
    }

    // Formatting is done on absolute numbers,
    // decorated by an optional negative symbol.
    if (input < 0) {
      inputIsNegative = true;
      input = Math.abs(input);
    }

    // Reduce the number of decimals to the specified option.
    if (decimals !== false) {
      input = toFixed(input, decimals);
    }

    // Transform the number into a string, so it can be split.
    input = input.toString();

    // Break the number on the decimal separator.
    if (input.indexOf(".") !== -1) {
      inputPieces = input.split(".");

      inputBase = inputPieces[0];

      if (mark) {
        inputDecimals = mark + inputPieces[1];
      }
    } else {
      // If it isn't split, the entire number will do.
      inputBase = input;
    }

    // Group numbers in sets of three.
    if (thousand) {
      inputBase = strReverse(inputBase).match(/.{1,3}/g);
      inputBase = strReverse(inputBase.join(strReverse(thousand)));
    }

    // If the number is negative, prefix with negation symbol.
    if (inputIsNegative && negativeBefore) {
      output += negativeBefore;
    }

    // Prefix the number
    if (prefix) {
      output += prefix;
    }

    // Normal negative option comes after the prefix. Defaults to '-'.
    if (inputIsNegative && negative) {
      output += negative;
    }

    // Append the actual number.
    output += inputBase;
    output += inputDecimals;

    // Apply the suffix.
    if (suffix) {
      output += suffix;
    }

    // Run the output through a user-specified post-formatter.
    if (edit) {
      output = edit(output, originalInput);
    }

    // All done.
    return output;
  }

  // Accept a sting as input, output decoded number.
  function formatFrom(
    decimals,
    thousand,
    mark,
    prefix,
    suffix,
    encoder,
    decoder,
    negativeBefore,
    negative,
    edit,
    undo,
    input
  ) {
    var originalInput = input,
      inputIsNegative,
      output = "";

    // User defined pre-decoder. Result must be a non empty string.
    if (undo) {
      input = undo(input);
    }

    // Test the input. Can't be empty.
    if (!input || typeof input !== "string") {
      return false;
    }

    // If the string starts with the negativeBefore value: remove it.
    // Remember is was there, the number is negative.
    if (negativeBefore && strStartsWith(input, negativeBefore)) {
      input = input.replace(negativeBefore, "");
      inputIsNegative = true;
    }

    // Repeat the same procedure for the prefix.
    if (prefix && strStartsWith(input, prefix)) {
      input = input.replace(prefix, "");
    }

    // And again for negative.
    if (negative && strStartsWith(input, negative)) {
      input = input.replace(negative, "");
      inputIsNegative = true;
    }

    // Remove the suffix.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    if (suffix && strEndsWith(input, suffix)) {
      input = input.slice(0, -1 * suffix.length);
    }

    // Remove the thousand grouping.
    if (thousand) {
      input = input.split(thousand).join("");
    }

    // Set the decimal separator back to period.
    if (mark) {
      input = input.replace(mark, ".");
    }

    // Prepend the negative symbol.
    if (inputIsNegative) {
      output += "-";
    }

    // Add the number
    output += input;

    // Trim all non-numeric characters (allow '.' and '-');
    output = output.replace(/[^0-9\.\-.]/g, "");

    // The value contains no parse-able number.
    if (output === "") {
      return false;
    }

    // Covert to number.
    output = Number(output);

    // Run the user-specified post-decoder.
    if (decoder) {
      output = decoder(output);
    }

    // Check is the output is valid, otherwise: return false.
    if (!isValidNumber(output)) {
      return false;
    }

    return output;
  }

  // Framework

  // Validate formatting options
  function validate(inputOptions) {
    var i,
      optionName,
      optionValue,
      filteredOptions = {};

    if (inputOptions["suffix"] === undefined) {
      inputOptions["suffix"] = inputOptions["postfix"];
    }

    for (i = 0; i < FormatOptions.length; i += 1) {
      optionName = FormatOptions[i];
      optionValue = inputOptions[optionName];

      if (optionValue === undefined) {
        // Only default if negativeBefore isn't set.
        if (optionName === "negative" && !filteredOptions.negativeBefore) {
          filteredOptions[optionName] = "-";
          // Don't set a default for mark when 'thousand' is set.
        } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
          filteredOptions[optionName] = ".";
        } else {
          filteredOptions[optionName] = false;
        }

        // Floating points in JS are stable up to 7 decimals.
      } else if (optionName === "decimals") {
        if (optionValue >= 0 && optionValue < 8) {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }

        // These options, when provided, must be functions.
      } else if (
        optionName === "encoder" ||
        optionName === "decoder" ||
        optionName === "edit" ||
        optionName === "undo"
      ) {
        if (typeof optionValue === "function") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }

        // Other options are strings.
      } else {
        if (typeof optionValue === "string") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }
      }
    }

    // Some values can't be extracted from a
    // string if certain combinations are present.
    throwEqualError(filteredOptions, "mark", "thousand");
    throwEqualError(filteredOptions, "prefix", "negative");
    throwEqualError(filteredOptions, "prefix", "negativeBefore");

    return filteredOptions;
  }

  // Pass all options as function arguments
  function passAll(options, method, input) {
    var i,
      args = [];

    // Add all options in order of FormatOptions
    for (i = 0; i < FormatOptions.length; i += 1) {
      args.push(options[FormatOptions[i]]);
    }

    // Append the input, then call the method, presenting all
    // options as arguments.
    args.push(input);
    return method.apply("", args);
  }

  function wNumb(options) {
    if (!(this instanceof wNumb)) {
      return new wNumb(options);
    }

    if (typeof options !== "object") {
      return;
    }

    options = validate(options);

    // Call 'formatTo' with proper arguments.
    this.to = function(input) {
      return passAll(options, formatTo, input);
    };

    // Call 'formatFrom' with proper arguments.
    this.from = function(input) {
      return passAll(options, formatFrom, input);
    };
  }

  return wNumb;
});

// ==================================================
// fancyBox v3.5.2
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function a(t,e){var o,a,i,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),i=n.fancybox.getInstance(),i&&i.$trigger&&i.$trigger.is(o)||(e.selector?s=n(e.selector):(a=o.attr("data-fancybox")||"",a?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),i=n.fancybox.open(s,e,r),i.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var i={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in a)if(n.style[t]!==o)return a[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,a;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},a=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),a)},b=function(t,e,o){var a=this;a.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(a.opts=h(a.opts,e)),n.fancybox.isMobile&&(a.opts=h(a.opts,a.opts.mobile)),a.id=a.opts.id||++c,a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=!0,a.group=[],a.slides={},a.addContent(t),a.group.length&&a.init()};n.extend(b.prototype,{init:function(){var o,a,i=this,s=i.group[i.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&r.hideScrollbar!==!1&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),a="",n.each(r.buttons,function(t,e){a+=r.btnTpl[e]||""}),o=n(i.translate(i,r.baseTpl.replace("{{buttons}}",a).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+i.id).addClass(r.baseClass).data("FancyBox",i).appendTo(r.parentEl),i.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){i.$refs[t]=o.find(".fancybox-"+t)}),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var a=n[e];return a===o?t:a})},addContent:function(t){var e,a=this,i=n.makeArray(t);n.each(i,function(t,e){var i,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),u=i.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=i,d.src=a.opts.src||u.src||i.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},a.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),n.fancybox.isMobile&&d.opts.mobile&&(d.opts=h(d.opts,d.opts.mobile)),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(s="video",d.opts.video.format||(d.opts.video.format="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?(s="iframe",d=n.extend(!0,d,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===c.charAt(0)&&(s="inline")),s?d.type=s:a.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=a.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.$thumb=d.opts.$thumb||null,d.opts.$trigger&&d.index===a.opts.index&&(d.$thumb=d.opts.$trigger.find("img:first"),d.$thumb.length&&(d.opts.$orig=d.opts.$trigger)),d.$thumb&&d.$thumb.length||!d.opts.$orig||(d.$thumb=d.opts.$orig.find("img:first")),d.$thumb&&!d.$thumb.length&&(d.$thumb=null),d.thumb=d.opts.thumb||(d.$thumb?d.$thumb[0].src:null),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[a,d])),"function"===n.type(a.opts.caption)&&(d.opts.caption=a.opts.caption.apply(e,[a,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),a.group.push(d)}),Object.keys(a.slides).length&&(a.updateControls(),e=a.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,a=o.current,i=t.keyCode||t.which;if(9==i)return void(a.opts.trapFocus&&e.focus(t));if(!(!a.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void e.close(t)):37===i||38===i?(t.preventDefault(),void e.previous()):39===i||40===i?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,i)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){e.idleSecondsCounter++,e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var a,i,s,r,c,l,d,u,f,h=this,g=h.group.length;if(!(h.isDragging||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=g))return!1;if(a=h.firstRun=!Object.keys(h.slides).length,c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),g>1&&((s||r.index<g-1)&&h.createSlide(t+1),(s||r.index>0)&&h.createSlide(t-1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=h.isMoved(r),r.$slide.addClass("fancybox-slide--current"),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.addClass("fancybox-is-open").trigger("focus"),h.loadSlide(r),void h.preload("image");l=n.fancybox.getTranslate(c.$slide),d=n.fancybox.getTranslate(h.$refs.stage),n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),c.pos!==r.pos&&(c.isComplete=!1),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(f=l.left-(c.pos*l.width+c.pos*c.opts.gutter),n.each(h.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var a=o.pos*l.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:a-d.left+f}),o.pos!==r.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>r.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-r.pos)*l.width+(o.pos-r.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&h.complete()})})):e&&r.opts.transitionEffect&&(u="fancybox-animated fancybox-fx-"+r.opts.transitionEffect,c.$slide.addClass("fancybox-slide--"+(c.pos>r.pos?"next":"previous")),n.fancybox.animate(c.$slide,u,e,function(){c.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload("image")}},createSlide:function(t){var e,o,a=this;return o=t%a.group.length,o=o<0?a.group.length+o:o,!a.slides[t]&&a.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage),a.slides[t]=n.extend(!0,{},a.group[o],{pos:t,$slide:e,isLoaded:!1}),a.updateSlide(a.slides[t])),a.slides[t]},scaleToActual:function(t,e,a){var i,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;d.isAnimating||d.isMoved()||!f||"image"!=u.type||!u.isLoaded||u.hasError||(d.isAnimating=!0,n.fancybox.stop(f),t=t===o?.5*p:t,e=e===o?.5*h:e,i=n.fancybox.getTranslate(f),i.top-=n.fancybox.getTranslate(u.$slide).top,i.left-=n.fancybox.getTranslate(u.$slide).left,c=g/i.width,l=b/i.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=i.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},a||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,a=o.current,i=a.$content;o.isAnimating||o.isMoved()||!i||"image"!=a.type||!a.isLoaded||a.hasError||(o.isAnimating=!0,n.fancybox.stop(i),e=o.getFitPos(a),o.updateCursor(e.width,e.height),n.fancybox.animate(i,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,a,i,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),a=Math.min(1,e/l,o/d),l=a*l,d=a*d,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(i=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/i?d=l/i:l>d*i&&(l=d*i)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,a=t&&t.$content,i=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),a&&(i||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(a),n.fancybox.setTranslate(a,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,a=e.current,i=a.$slide;!e.isClosing&&a&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},t===o?0:t,function(){i.css({transform:"",opacity:""}),a.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,a=t||this.current;return!!a&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(a.$slide),!a.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,a,i=this,s=i.current,r=i.$refs.container;s&&!i.isClosing&&i.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=i.canPan(t,e),a=!!o||i.isZoomable(),r.toggleClass("fancybox-is-zoomable",a),n("[data-fancybox-zoom]").prop("disabled",!a),o?r.addClass("fancybox-can-pan"):a&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||i.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),t&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var a=this,i=!1,s=a.current,r=s.$content;return t!==o&&e!==o?i=t<s.width&&e<s.height:r&&(i=n.fancybox.getTranslate(r),i=i.width<s.width&&i.height<s.height),i},canPan:function(t,e){var a=this,i=a.current,s=null,r=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(r=a.getFitPos(i),t!==o&&e!==o?s={width:t,height:e}:i.isComplete&&(s=n.fancybox.getTranslate(i.$content)),s&&r&&(r=Math.abs(s.width-r.width)>1.5||Math.abs(s.height-r.height)>1.5)),r},loadSlide:function(t){var e,o,a,i=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,i.trigger("beforeLoad",t)===!1)return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.src||t.content);break;case"video":i.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),a=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){a.abort()});break;default:i.setError(t)}return!0}},setImage:function(t){var o,a=this;setTimeout(function(){var e=t.$image;a.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||a.showLoading(t)},50),a.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),t.opts.preload!==!1&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){a.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),a.setBigImage(t)},checkSrcset:function(e){var n,o,a,i,s=e.opts.srcset||e.opts.image.srcset;if(s){a=t.devicePixelRatio||1,i=t.innerWidth*a,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=i||"x"===c.postfix&&c.value>=a){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,a=e.createElement("img"),i=n(a);t.$image=i.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),i.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(a.complete||"complete"==a.readyState)&&i.naturalWidth&&i.naturalHeight?i.trigger("load"):a.error&&i.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),a=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),a>0&&(t.width=Math.floor(a*e/n),t.height=a)},setIframe:function(t){var e,a=this,i=t.opts.iframe,s=t.$slide;n.fancybox.isMobile&&(i.css.overflow="scroll"),t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(a.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),a.afterLoad(t)}),s.on("refresh.fb",function(){var n,a,r=t.$content,c=i.css.width,l=i.css.height;if(1===e[0].isReady){try{n=e.contents(),a=n.find("body")}catch(t){}a&&a.length&&a.children().length&&(s.css("overflow","visible"),r.css({width:"100%","max-width":"100%",height:"9999px"}),c===o&&(c=Math.ceil(Math.max(a[0].clientWidth,a.outerWidth(!0)))),r.css("width",c?c:"").css("max-width",""),l===o&&(l=Math.ceil(Math.max(a[0].clientHeight,a.outerHeight(!0)))),r.css("height",l?l:""),s.css("overflow","auto")),r.removeClass("fancybox-is-hidden")}})):a.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e=this,n=t||e.current,o=n.opts.caption,a=e.$refs.caption,i=!1;n.opts.preventCaptionOverlap&&o&&o.length&&(n.pos!==e.currPos?(a=a.clone().empty().appendTo(a.parent()),a.html(o),i=a.outerHeight(!0),a.empty().remove()):e.$caption&&(i=e.$caption.outerHeight(!0)),n.$slide.css("padding-bottom",i||""))},adjustLayout:function(t){var e,n,o,a,i=this,s=t||i.current;s.isLoaded&&s.opts.disableLayoutFix!==!0&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],a=s.$slide.css("padding-bottom"),parseFloat(a)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=a),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,a,i,s,r=this,c=t.$slide,l=!1,d=!1,u=r.isMoved(t),f=t.isRevealed;return t.isRevealed=!0,e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],i=t.opts[r.firstRun?"animationDuration":"transitionDuration"],i=parseInt(t.forcedDuration===o?i:t.forcedDuration,10),!u&&t.pos===r.currPos&&i||(e=!1),"zoom"===e&&(t.pos===r.currPos&&i&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e?(r.isAnimating=!0,l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),p(t.$content),void n.fancybox.animate(t.$content,l,i,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(t),e?(n.fancybox.stop(c),a="fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,c.addClass(a).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(c),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(c,"fancybox-slide--current",i,function(){c.removeClass(a).css({transform:"",opacity:""}),t.pos===r.currPos&&r.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),f||!u||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===r.currPos&&r.complete())))},getThumbPos:function(t){var e,o,a,i,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),a=parseFloat(c.css("border-right-width")||0),i=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-a-s,height:e.height-o-i,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,a={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?a[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=a),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var a,i,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(a=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),a=a.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),a.length?(i=a.index(e.activeElement),t&&t.shiftKey?(i<0||0==i)&&(t.preventDefault(),a.eq(a.length-1).trigger("focus")):(i<0||i==a.length-1)&&(t&&t.preventDefault(),a.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,a,i,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,u.trigger("beforeClose",t)===!1?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),i=f.$content,o=f.opts.animationEffect,a=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),t!==!0?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),a&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",a+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||i&&a&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(i),s=n.fancybox.getTranslate(i),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(i,c),p(i),n.fancybox.animate(i,l,a,h),!0):(o&&a?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,a,h):t===!0?setTimeout(h,a):h(),
!0)))},cleanUp:function(e){var o,a,i,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(a=t.scrollX,i=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(i).scrollLeft(a))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,a=Array.prototype.slice.call(arguments,1),i=this,s=e&&e.opts?e:i.current;return s?a.unshift(s):s=i,a.unshift(i),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,a)),o===!1?o:void("afterClose"!==t&&i.$refs?i.$refs.container.trigger(t+".fb",a):r.trigger(t+".fb",a))},updateControls:function(){var t=this,o=t.current,a=o.index,i=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),t.$caption=r&&r.length?s.html(r):null,t.hasHiddenControls||t.isIdle||t.showControls(),i.find("[data-fancybox-count]").html(t.group.length),i.find("[data-fancybox-index]").html(a+1),i.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&a<=0),i.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&a>=t.group.length-1),"image"===o.type?i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.2",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",a={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o?n+=" scale("+e.scaleX+", "+e.scaleY+")":e.scaleX!==o&&(n+=" scaleX("+e.scaleX+")"),n.length&&(a.transform=n),e.opacity!==o&&(a.opacity=e.opacity),e.width!==o&&(a.width=e.width),e.height!==o&&(a.height=e.height),t.css(a)},animate:function(t,e,a,i,s){var r,c=this;n.isFunction(a)&&(i=a,a=null),c.stop(t),r=c.getTranslate(t),t.on(f,function(l){(!l||!l.originalEvent||t.is(l.originalEvent.target)&&"z-index"!=l.originalEvent.propertyName)&&(c.stop(t),n.isNumeric(a)&&t.css("transition-duration",""),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&c.setTranslate(t,{top:e.top,left:e.left,width:r.width*e.scaleX,height:r.height*e.scaleY,scaleX:1,scaleY:1}):s!==!0&&t.removeClass(e),n.isFunction(i)&&i(l))}),n.isNumeric(a)&&t.css("transition-duration",a+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},a+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},a):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},a),this},r.on("click.fb-start","[data-fancybox]",a),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=".fancybox-button",e="fancybox-focus",o=null;r.on("mousedown mouseup focus blur",t,function(a){switch(a.type){case"mousedown":o=n(this);break;case"mouseup":o=null;break;case"focusin":n(t).removeClass(e),n(this).is(o)||n(this).is("[disabled]")||n(this).addClass(e);break;case"focusout":n(t).removeClass(e)}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube-nocookie.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,a,i){var s,r,c,l,d,u,f,p=i.src||"",h=!1;s=t.extend(!0,{},e,i.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var a=0;a<d.length;++a){var s=d[a].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,i.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,i):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,i):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=r),"iframe"===h&&(i.opts=t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(i,{type:h,src:p,origSrc:i.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(i.type=i.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;return this[t].loaded?void setTimeout(function(){n.done(t)}):void(this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e)))},done:function(e){var n,o,a;"youtube"===e&&delete window.onYouTubeIframeAPIReady,n=t.fancybox.getInstance(),n&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?a=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(a=new Vimeo.Player(o),a.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),i=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,a=o.length;e<a;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],a=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return a||i},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(a(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var a=this,c=n(o.target),d=a.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&a.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();a.realPoints=a.startPoints=i(o),a.startPoints.length&&(u.touch&&o.stopPropagation(),a.startEvent=o,a.canTap=!0,a.$target=c,a.$content=p,a.opts=u.opts.touch,a.isPanning=!1,a.isSwiping=!1,a.isZooming=!1,a.isScrolling=!1,a.canPan=d.canPan(),a.startTime=(new Date).getTime(),a.distanceX=a.distanceY=a.distance=0,a.canvasWidth=Math.round(f[0].clientWidth),a.canvasHeight=Math.round(f[0].clientHeight),a.contentLastPos=null,a.contentStartPos=n.fancybox.getTranslate(a.$content)||{top:0,left:0},a.sliderStartPos=n.fancybox.getTranslate(f),a.stagePos=n.fancybox.getTranslate(d.$refs.stage),a.sliderStartPos.top-=a.stagePos.top,a.sliderStartPos.left-=a.stagePos.left,a.contentStartPos.top-=a.stagePos.top,a.contentStartPos.left-=a.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(a,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(a,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",a.onscroll,!0),((a.opts||a.canPan)&&(c.is(a.$stage)||a.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.hasClass("fancybox-caption")))&&(a.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&a.isScrollable||o.preventDefault(),(1===a.startPoints.length||u.hasError)&&(a.canPan?(n.fancybox.stop(a.$content),a.isPanning=!0):a.isSwiping=!0,a.$container.addClass("fancybox-is-grabbing")),2===a.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(a.canTap=!1,a.isSwiping=!1,a.isPanning=!1,a.isZooming=!0,n.fancybox.stop(a.$content),a.centerPointStartX=.5*(a.startPoints[0].x+a.startPoints[1].x)-n(t).scrollLeft(),a.centerPointStartY=.5*(a.startPoints[0].y+a.startPoints[1].y)-n(t).scrollTop(),a.percentageOfImageAtPinchPointX=(a.centerPointStartX-a.contentStartPos.left)/a.contentStartPos.width,a.percentageOfImageAtPinchPointY=(a.centerPointStartY-a.contentStartPos.top)/a.contentStartPos.height,a.startDistanceBetweenFingers=s(a.startPoints[0],a.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=i(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var i,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(c!==!0)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(a(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(i=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=i>45&&i<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,a;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),a=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-a.top,s.sliderStartPos.left=o.left-a.left),n.fancybox.setTranslate(e.$slide,{top:o.top-a.top,left:o.left-a.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&a(t.requestId),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,a,i,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return a=h>r?f+l:f,i=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&a>t&&(a=t-1+Math.pow(-t+f+l,.8)||0),l<0&&a<n&&(a=n+1-Math.pow(n-f-l,.8)||0),d>0&&i>e&&(i=e-1+Math.pow(-e+p+d,.8)||0),d<0&&i<o&&(i=o+1-Math.pow(o-p-d,.8)||0),{top:i,left:a}},d.prototype.limitPosition=function(t,e,n,o){var a=this,i=a.canvasWidth,s=a.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,i=e.contentStartPos,r=i.width,c=i.height,l=i.left,d=i.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&a(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;return o.endPoints=i(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(a(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,void(r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)))},d.prototype.endSwiping=function(t,e){var o=this,a=!1,i=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&i>1&&(o.dMs>130&&s>10||s>50),c=300;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),a=o.instance.close(!0,250)):r&&o.distanceX>0?a=o.instance.previous(c):r&&o.distanceX<0&&(a=o.instance.next(c)),a!==!1||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,a=this;a.contentLastPos&&(a.opts.momentum===!1||a.dMs>350?(t=a.contentLastPos.left,e=a.contentLastPos.top):(t=a.contentLastPos.left+500*a.velocityX,e=a.contentLastPos.top+500*a.velocityY),o=a.limitPosition(t,e,a.contentStartPos.width,a.contentStartPos.height),o.width=a.contentStartPos.width,o.height=a.contentStartPos.height,n.fancybox.animate(a.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,a,i=this,s=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,a={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,a),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>s.width||c>s.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.animate(i.$content,o,150)))},d.prototype.onTap=function(e){var o,a=this,s=n(e.target),r=a.instance,c=r.current,l=e&&i(e)||a.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-a.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-a.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(a.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(a.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(a.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(a.tapped){if(clearTimeout(a.tapped),a.tapped=null,Math.abs(d-a.tapX)>50||Math.abs(u-a.tapY)>50)return this;f("dblclick"+o)}else a.tapX=d,a.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?a.tapped=setTimeout(function(){a.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,a=o.current;a&&(t===!0||a.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==a.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},a.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},a.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var a=e&&e.SlideShow;o?a&&n.opts.slideShow.autoStart&&a.start():a&&a.isActive&&a.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,a,i,s){var r=o&&o.SlideShow;!r||!a.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(i.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var a=e[o];if(a&&a[1]in t){for(var i=0;i<a.length;i++)n[e[0][i]]=a[i];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var a;return n?void(e&&e.group[e.currIndex].opts.fullScreen?(a=e.$refs.container,a.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()):void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,n,o,a){e&&e.FullScreen&&70===a&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var a=function(t){this.init(t)};e.extend(a.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var a=0,i=n.length;a<i&&(n[a].thumb&&o++,!(o>1));a++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,a=o.instance,i=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)),o.$grid.on("click","a",function(){a.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(a.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+a.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,a=this,i=a.$list,s=a.$grid;a.instance.current&&(e=i.children().removeClass(o).filter('[data-index="'+a.instance.current.index+'"]').addClass(o),n=e.position(),"y"===a.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===a.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new a(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var a=e&&e.Thumbs;a&&a.isVisible&&a.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,a){var i=e&&e.Thumbs;i&&i.isActive&&71===a&&(o.preventDefault(),i.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,a=e.fancybox.getInstance(),i=a.current||null;i&&("function"===e.type(i.opts.share.url)&&(t=i.opts.share.url.apply(i,[a,i])),o=i.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===i.type?encodeURIComponent(i.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,a.$caption?encodeURIComponent(a.$caption.text()):""),e.fancybox.open({src:a.translate(a,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){a.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,a=n.join("-");return{hash:e,index:o<1?1:o,gallery:a}}function a(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function i(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(e).on({"onInit.fb":function(t,e){var n,a;e.group[e.currIndex].opts.hash!==!1&&(n=o(),a=i(e),a&&n.gallery&&a==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,a,s){var r;a&&a.opts.hash!==!1&&(r=i(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(a.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,a){a.opts.hash!==!1&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var a=n(o).data("FancyBox");if(a&&a.currentHash)return e=a,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&a(t)}),setTimeout(function(){n.fancybox.getInstance()||a(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,a=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,a-n<250||(n=a,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "-"
    }, a.fn.extend({
        caret: function (a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function () {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)if (j[a] && C[a] === p(a))return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)if (j[c]) {
                            if (!(n > d && j[c].test(C[d])))break;
                            C[c] = C[d], C[d] = p(d), d = q(d)
                        }
                        z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)if (j[b]) {
                        if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e)))break;
                        c = e
                    }
                }

                function u() {
                    var a = B.val(), b = B.caret();
                    if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];)b.begin--;
                        if (0 === b.begin)for (; b.begin < l && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function () {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++)j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0, d = 0; n > b; b++)if (j[b]) {
                        for (C[b] = p(b); d++ < e.length;)if (c = e.charAt(d - 1), j[b].test(c)) {
                            C[b] = c, f = b;
                            break
                        }
                        if (d > e.length) {
                            y(b + 1, n);
                            break
                        }
                    } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }

                var B = a(this), C = a.map(c.split(""), function (a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0
                }), D = C.join(""), E = B.val();
                B.data(a.mask.dataName, function () {
                    return a.map(C, function (a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function () {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function () {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function () {
                            B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                    B.prop("readonly") || setTimeout(function () {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*
== malihu jquery custom scrollbar plugin == 
Version: 3.1.5 
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller 
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development. 
For production, use either the minified jquery.mCustomScrollbar.min.js script or 
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin 
and dependencies (minified). 
*/

(function(factory){
	if(typeof define==="function" && define.amd){
		define(["jquery"],factory);
	}else if(typeof module!=="undefined" && module.exports){
		module.exports=factory;
	}else{
		factory(jQuery,window,document);
	}
}(function($){
(function(init){
	var _rjs=typeof define==="function" && define.amd, /* RequireJS */
		_njs=typeof module !== "undefined" && module.exports, /* NodeJS */
		_dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */
		_url="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
	if(!_rjs){
		if(_njs){
			require("jquery-mousewheel")($);
		}else{
			/* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS 
			(works when mCustomScrollbar fn is called on window load) */
			$.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));
		}
	}
	init();
}(function(){
	
	/* 
	----------------------------------------
	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
	----------------------------------------
	*/
	
	var pluginNS="mCustomScrollbar",
		pluginPfx="mCS",
		defaultSelector=".mCustomScrollbar",
	
	
		
	
	
	/* 
	----------------------------------------
	DEFAULT OPTIONS 
	----------------------------------------
	*/
	
		defaults={
			/*
			set element/content width/height programmatically 
			values: boolean, pixels, percentage 
				option						default
				-------------------------------------
				setWidth					false
				setHeight					false
			*/
			/*
			set the initial css top property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setTop:0,
			/*
			set the initial css left property of content  
			values: string (e.g. "-100px", "10%" etc.)
			*/
			setLeft:0,
			/* 
			scrollbar axis (vertical and/or horizontal scrollbars) 
			values (string): "y", "x", "yx"
			*/
			axis:"y",
			/*
			position of scrollbar relative to content  
			values (string): "inside", "outside" ("outside" requires elements with position:relative)
			*/
			scrollbarPosition:"inside",
			/*
			scrolling inertia
			values: integer (milliseconds)
			*/
			scrollInertia:950,
			/* 
			auto-adjust scrollbar dragger length
			values: boolean
			*/
			autoDraggerLength:true,
			/*
			auto-hide scrollbar when idle 
			values: boolean
				option						default
				-------------------------------------
				autoHideScrollbar			false
			*/
			/*
			auto-expands scrollbar on mouse-over and dragging
			values: boolean
				option						default
				-------------------------------------
				autoExpandScrollbar			false
			*/
			/*
			always show scrollbar, even when there's nothing to scroll 
			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
			*/
			alwaysShowScrollbar:0,
			/*
			scrolling always snaps to a multiple of this number in pixels
			values: integer, array ([y,x])
				option						default
				-------------------------------------
				snapAmount					null
			*/
			/*
			when snapping, snap with this number in pixels as an offset 
			values: integer
			*/
			snapOffset:0,
			/* 
			mouse-wheel scrolling
			*/
			mouseWheel:{
				/* 
				enable mouse-wheel scrolling
				values: boolean
				*/
				enable:true,
				/* 
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto",
				/* 
				mouse-wheel scrolling axis 
				the default scrolling direction when both vertical and horizontal scrollbars are present 
				values (string): "y", "x" 
				*/
				axis:"y",
				/* 
				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
				values: boolean
					option						default
					-------------------------------------
					preventDefault				null
				*/
				/*
				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
				values: "auto", integer 
				"auto" uses the default OS/browser value 
				*/
				deltaFactor:"auto",
				/*
				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
				values: boolean
					option						default
					-------------------------------------
					normalizeDelta				null
				*/
				/*
				invert mouse-wheel scrolling direction 
				values: boolean
					option						default
					-------------------------------------
					invert						null
				*/
				/*
				the tags that disable mouse-wheel when cursor is over them
				*/
				disableOver:["select","option","keygen","datalist","textarea"]
			},
			/* 
			scrollbar buttons
			*/
			scrollButtons:{ 
				/*
				enable scrollbar buttons
				values: boolean
					option						default
					-------------------------------------
					enable						null
				*/
				/*
				scrollbar buttons scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
				/*
				tabindex of the scrollbar buttons
				values: false, integer
					option						default
					-------------------------------------
					tabindex					null
				*/
			},
			/* 
			keyboard scrolling
			*/
			keyboard:{ 
				/*
				enable scrolling via keyboard
				values: boolean
				*/
				enable:true,
				/*
				keyboard scrolling type 
				values (string): "stepless", "stepped"
				*/
				scrollType:"stepless",
				/*
				scrolling amount in pixels
				values: "auto", integer 
				*/
				scrollAmount:"auto"
			},
			/*
			enable content touch-swipe scrolling 
			values: boolean, integer, string (number)
			integer values define the axis-specific minimum amount required for scrolling momentum
			*/
			contentTouchScroll:25,
			/*
			enable/disable document (default) touch-swipe scrolling 
			*/
			documentTouchScroll:true,
			/*
			advanced option parameters
			*/
			advanced:{
				/*
				auto-expand content horizontally (for "x" or "yx" axis) 
				values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
					option						default
					-------------------------------------
					autoExpandHorizontalScroll	null
				*/
				/*
				auto-scroll to elements with focus
				*/
				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
				/*
				auto-update scrollbars on content, element or viewport resize 
				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
				values: boolean
				*/
				updateOnContentResize:true,
				/*
				auto-update scrollbars each time each image inside the element is fully loaded 
				values: "auto", boolean
				*/
				updateOnImageLoad:"auto",
				/*
				auto-update scrollbars based on the amount and size changes of specific selectors 
				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
				a value of true (boolean) will auto-update scrollbars each time any element is changed
					option						default
					-------------------------------------
					updateOnSelectorChange		null
				*/
				/*
				extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					extraDraggableSelectors		null
				*/
				/*
				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
					option						default
					-------------------------------------
					releaseDraggableSelectors	null
				*/
				/*
				auto-update timeout 
				values: integer (milliseconds)
				*/
				autoUpdateTimeout:60
			},
			/* 
			scrollbar theme 
			values: string (see CSS/plugin URI for a list of ready-to-use themes)
			*/
			theme:"light",
			/*
			user defined callback functions
			*/
			callbacks:{
				/*
				Available callbacks: 
					callback					default
					-------------------------------------
					onCreate					null
					onInit						null
					onScrollStart				null
					onScroll					null
					onTotalScroll				null
					onTotalScrollBack			null
					whileScrolling				null
					onOverflowY					null
					onOverflowX					null
					onOverflowYNone				null
					onOverflowXNone				null
					onImageLoad					null
					onSelectorChange			null
					onBeforeUpdate				null
					onUpdate					null
				*/
				onTotalScrollOffset:0,
				onTotalScrollBackOffset:0,
				alwaysTriggerOffsets:true
			}
			/*
			add scrollbar(s) on all elements matching the current selector, now and in the future 
			values: boolean, string 
			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
			liveSelector values: string (selector)
				option						default
				-------------------------------------
				live						false
				liveSelector				null
			*/
		},
	
	
	
	
	
	/* 
	----------------------------------------
	VARS, CONSTANTS 
	----------------------------------------
	*/
	
		totalInstances=0, /* plugin instances amount */
		liveTimers={}, /* live option timers */
		oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */
		touchActive=false,touchable, /* global touch vars (for touch and pointer events) */
		/* general plugin classes */
		classes=[
			"mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",
			"mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",
			"mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"
		],
		
	
	
	
	
	/* 
	----------------------------------------
	METHODS 
	----------------------------------------
	*/
	
		methods={
			
			/* 
			plugin initialization method 
			creates the scrollbar(s), plugin data object and options
			----------------------------------------
			*/
			
			init:function(options){
				
				var options=$.extend(true,{},defaults,options),
					selector=_selector.call(this); /* validate selector */
				
				/* 
				if live option is enabled, monitor for elements matching the current selector and 
				apply scrollbar(s) when found (now and in the future) 
				*/
				if(options.live){
					var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */
						$liveSelector=$(liveSelector); /* live selector(s) as jquery object */
					if(options.live==="off"){
						/* 
						disable live if requested 
						usage: $(selector).mCustomScrollbar({live:"off"}); 
						*/
						removeLiveTimers(liveSelector);
						return;
					}
					liveTimers[liveSelector]=setTimeout(function(){
						/* call mCustomScrollbar fn on live selector(s) every half-second */
						$liveSelector.mCustomScrollbar(options);
						if(options.live==="once" && $liveSelector.length){
							/* disable live after first invocation */
							removeLiveTimers(liveSelector);
						}
					},500);
				}else{
					removeLiveTimers(liveSelector);
				}
				
				/* options backward compatibility (for versions < 3.0.0) and normalization */
				options.setWidth=(options.set_width) ? options.set_width : options.setWidth;
				options.setHeight=(options.set_height) ? options.set_height : options.setHeight;
				options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);
				options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;
				if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */
					options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
				}
				options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
				options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
				options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType); 
				
				_theme(options); /* theme-specific options */
				
				/* plugin constructor */
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */
					
						/* store options and create objects in jquery data */
						$this.data(pluginPfx,{
							idx:++totalInstances, /* instance index */
							opt:options, /* options */
							scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */
							overflowed:null, /* overflowed axis */
							contentReset:{y:null,x:null}, /* object to check when content resets */
							bindEvents:false, /* object to check if events are bound */
							tweenRunning:false, /* object to check if tween is running */
							sequential:{}, /* sequential scrolling object */
							langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */
							cbOffsets:null, /* object to check whether callback offsets always trigger */
							/* 
							object to check how scrolling events where last triggered 
							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
							usage: object.data("mCS").trigger
							*/
							trigger:null,
							/* 
							object to check for changes in elements in order to call the update method automatically 
							*/
							poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}
						});
						
						var d=$this.data(pluginPfx),o=d.opt,
							/* HTML data attributes */
							htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");
						 
						if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */
						if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */
						if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */
							o.theme=htmlDataTheme;
							_theme(o); /* theme-specific options */
						}
						
						_pluginMarkup.call(this); /* add plugin markup */
						
						if(d && o.callbacks.onCreate && typeof o.callbacks.onCreate==="function"){o.callbacks.onCreate.call(this);} /* callbacks: onCreate */
						
						$("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */
						
						methods.update.call(null,$this); /* call the update method */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin update method 
			updates content and scrollbar(s) values, events and status 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("update");
			*/
			
			update:function(el,cb){
				
				var selector=el || _selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx),o=d.opt,
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
						
						if(!mCSB_container.length){return;}
						
						if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */
						
						if(cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate==="function"){o.callbacks.onBeforeUpdate.call(this);} /* callbacks: onBeforeUpdate */
						
						/* if element was disabled or destroyed, remove class(es) */
						if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}
						if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}
						
						/* css flexbox fix, detect/set max-height */
						mCustomScrollBox.css("max-height","none");
						if(mCustomScrollBox.height()!==$this.height()){mCustomScrollBox.css("max-height",$this.height());}
						
						_expandContentHorizontally.call(this); /* expand content horizontally */
						
						if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
							mCSB_container.css("width",_contentWidth(mCSB_container));
						}
						
						d.overflowed=_overflowed.call(this); /* determine if scrolling is required */
						
						_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */
						
						/* auto-adjust scrollbar dragger length analogous to content */
						if(o.autoDraggerLength){_setDraggerLength.call(this);}
						
						_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */
						
						_bindEvents.call(this); /* bind scrollbar events */
						
						/* reset scrolling position and/or events */
						var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];
						if(o.axis!=="x"){ /* y/yx axis */
							if(!d.overflowed[0]){ /* y scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="y"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[1]){
									_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* y scrolling is required */
								_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								d.contentReset.y=null;
							}
						}
						if(o.axis!=="y"){ /* x/yx axis */
							if(!d.overflowed[1]){ /* x scrolling is not required */
								_resetContentPosition.call(this); /* reset content position */
								if(o.axis==="x"){
									_unbindEvents.call(this);
								}else if(o.axis==="yx" && d.overflowed[0]){
									_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
								}
							}else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){
								_resetContentPosition.call(this); /* reset content position */
							}else{ /* x scrolling is required */
								_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
								d.contentReset.x=null;
							}
						}
						
						/* callbacks: onImageLoad, onSelectorChange, onUpdate */
						if(cb && d){
							if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){
								o.callbacks.onImageLoad.call(this);
							}else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){
								o.callbacks.onSelectorChange.call(this);
							}else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){
								o.callbacks.onUpdate.call(this);
							}
						}
						
						_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/* 
			plugin scrollTo method 
			triggers a scrolling event to a specific value
			----------------------------------------
			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
			*/
		
			scrollTo:function(val,options){
				
				/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
				if(typeof val=="undefined" || val==null){return;}
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							/* method default options */
							methodDefaults={
								trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */
								scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */
								scrollEasing:"mcsEaseInOut", /* animation easing */
								moveDragger:false, /* move dragger instead of content */
								timeout:60, /* scroll-to delay */
								callbacks:true, /* enable/disable callbacks */
								onStart:true,
								onUpdate:true,
								onComplete:true
							},
							methodOptions=$.extend(true,{},methodDefaults,options),
							to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;
						
						/* translate yx values to actual scroll-to positions */
						to[0]=_to.call(this,to[0],"y");
						to[1]=_to.call(this,to[1],"x");
						
						/* 
						check if scroll-to value moves the dragger instead of content. 
						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
						*/
						if(methodOptions.moveDragger){
							to[0]*=d.scrollRatio.y;
							to[1]*=d.scrollRatio.x;
						}
						
						methodOptions.dur=_isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden
						
						setTimeout(function(){ 
							/* do the scrolling */
							if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */
								methodOptions.dir="y";
								methodOptions.overwrite="all";
								_scrollTo($this,to[0].toString(),methodOptions);
							}
							if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */
								methodOptions.dir="x";
								methodOptions.overwrite="none";
								_scrollTo($this,to[1].toString(),methodOptions);
							}
						},methodOptions.timeout);
						
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin stop method 
			stops scrolling animation
			----------------------------------------
			usage: $(selector).mCustomScrollbar("stop");
			*/
			stop:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
										
						_stop($this);
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin disable method 
			temporarily disables the scrollbar(s) 
			----------------------------------------
			usage: $(selector).mCustomScrollbar("disable",reset); 
			reset (boolean): resets content position to 0 
			*/
			disable:function(r){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
						
						var d=$this.data(pluginPfx);
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						if(r){_resetContentPosition.call(this);} /* reset content position */
						
						_scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */
						
						$this.addClass(classes[3]); /* add disable class */
					
					}
					
				});
				
			},
			/* ---------------------------------------- */
			
			
			
			/*
			plugin destroy method 
			completely removes the scrollbar(s) and returns the element to its original state
			----------------------------------------
			usage: $(selector).mCustomScrollbar("destroy"); 
			*/
			destroy:function(){
				
				var selector=_selector.call(this); /* validate selector */
				
				return $(selector).each(function(){
					
					var $this=$(this);
					
					if($this.data(pluginPfx)){ /* check if plugin has initialized */
					
						var d=$this.data(pluginPfx),o=d.opt,
							mCustomScrollBox=$("#mCSB_"+d.idx),
							mCSB_container=$("#mCSB_"+d.idx+"_container"),
							scrollbar=$(".mCSB_"+d.idx+"_scrollbar");
					
						if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */
						
						_autoUpdate.call(this,"remove"); /* remove automatic updating */
						
						_unbindEvents.call(this); /* unbind events */
						
						_resetContentPosition.call(this); /* reset content position */
						
						$this.removeData(pluginPfx); /* remove plugin data object */
						
						_delete(this,"mcs"); /* delete callbacks object */
						
						/* remove plugin markup */
						scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
						mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */
						mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
						/* remove plugin classes from the element and add destroy class */
						$this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);
					
					}
					
				});
				
			}
			/* ---------------------------------------- */
			
		},
	
	
	
	
		
	/* 
	----------------------------------------
	FUNCTIONS
	----------------------------------------
	*/
	
		/* validates selector (if selector is invalid or undefined uses the default one) */
		_selector=function(){
			return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;
		},
		/* -------------------- */
		
		
		/* changes options according to theme */
		_theme=function(obj){
			var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],
				nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],
				disabledScrollButtonsThemes=["minimal","minimal-dark"],
				enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],
				scrollbarPositionOutsideThemes=["minimal","minimal-dark"];
			obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
			obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
			obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
			obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
			obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
		},
		/* -------------------- */
		
		
		/* live option timers removal */
		removeLiveTimers=function(selector){
			if(liveTimers[selector]){
				clearTimeout(liveTimers[selector]);
				_delete(liveTimers,selector);
			}
		},
		/* -------------------- */
		
		
		/* normalizes axis option to valid values: "y", "x", "yx" */
		_findAxis=function(val){
			return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";
		},
		/* -------------------- */
		
		
		/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
		_findScrollButtonsType=function(val){
			return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";
		},
		/* -------------------- */
		
		
		/* generates plugin markup */
		_pluginMarkup=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",
				scrollbar=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
				wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",
				scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],
				contentWrapper=o.axis==="yx" ? "<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />" : "",
				autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",
				scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";
			if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */
			if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */
			o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
			$this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+d.langDir+"' /></div>");
			var mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
				mCSB_container.css("width",_contentWidth(mCSB_container));
			}
			if(o.scrollbarPosition==="outside"){
				if($this.css("position")==="static"){ /* requires elements with non-static position */
					$this.css("position","relative");
				}
				$this.css("overflow","visible");
				mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
			}else{
				mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
				mCSB_container.wrap(contentWrapper);
			}
			_scrollButtons.call(this); /* add scrollbar buttons */
			/* minimum dragger length */
			var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());
			mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());
		},
		/* -------------------- */
		
		
		/* calculates content width */
		_contentWidth=function(el){
			var val=[el[0].scrollWidth,Math.max.apply(Math,el.children().map(function(){return $(this).outerWidth(true);}).get())],w=el.parent().width();
			return val[0]>w ? val[0] : val[1]>w ? val[1] : "100%";
		},
		/* -------------------- */
		
		
		/* expands content horizontally */
		_expandContentHorizontally=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){
				/* calculate scrollWidth */
				mCSB_container.css({"width":"auto","min-width":0,"overflow-x":"scroll"});
				var w=Math.ceil(mCSB_container[0].scrollWidth);
				if(o.advanced.autoExpandHorizontalScroll===3 || (o.advanced.autoExpandHorizontalScroll!==2 && w>mCSB_container.parent().width())){
					mCSB_container.css({"width":w,"min-width":"100%","overflow-x":"inherit"});
				}else{
					/* 
					wrap content with an infinite width div and set its position to absolute and width to auto. 
					Setting width to auto before calculating the actual width is important! 
					We must let the browser set the width as browser zoom values are impossible to calculate.
					*/
					mCSB_container.css({"overflow-x":"inherit","position":"absolute"})
						.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
						.css({ /* set actual width, original position and un-wrap */
							/* 
							get the exact width (with decimals) and then round-up. 
							Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
							*/
							"width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),
							"min-width":"100%",
							"position":"relative"
						}).unwrap();
				}
			}
		},
		/* -------------------- */
		
		
		/* adds scrollbar buttons */
		_scrollButtons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),
				tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='"+o.scrollButtons.tabindex+"'",
				btnHTML=[
					"<a href='#' class='"+classes[13]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[14]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[15]+"' "+tabindex+" />",
					"<a href='#' class='"+classes[16]+"' "+tabindex+" />"
				],
				btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];
			if(o.scrollButtons.enable){
				mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
			}
		},
		/* -------------------- */
		
		
		/* auto-adjusts scrollbar dragger length */
		_setDraggerLength=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],
				l=[
					parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),
					parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())
				],
				h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];
			mCSB_dragger[0].css({
				"height":h,"max-height":(mCSB_dragger[0].parent().height()-10)
			}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});
			mCSB_dragger[1].css({
				"width":w,"max-width":(mCSB_dragger[1].parent().width()-10)
			});
		},
		/* -------------------- */
		
		
		/* calculates scrollbar to content ratio */
		_scrollRatio=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],
				ratio=[
					scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),
					scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())
				];
			d.scrollRatio={y:ratio[0],x:ratio[1]};
		},
		/* -------------------- */
		
		
		/* toggles scrolling classes */
		_onDragClasses=function(el,action,xpnd){
			var expandClass=xpnd ? classes[0]+"_expanded" : "",
				scrollbar=el.closest(".mCSB_scrollTools");
			if(action==="active"){
				el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]); 
				el[0]._draggable=el[0]._draggable ? 0 : 1;
			}else{
				if(!el[0]._draggable){
					if(action==="hide"){
						el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);
					}else{
						el.addClass(classes[0]); scrollbar.addClass(classes[1]);
					}
				}
			}
		},
		/* -------------------- */
		
		
		/* checks if content overflows its container to determine if scrolling is required */
		_overflowed=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),
				contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false),
				h=mCSB_container[0].scrollHeight,w=mCSB_container[0].scrollWidth;
			if(h>contentHeight){contentHeight=h;}
			if(w>contentWidth){contentWidth=w;}
			return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];
		},
		/* -------------------- */
		
		
		/* resets content position to 0 */
		_resetContentPosition=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
			_stop($this); /* stop any current scrolling before resetting */
			if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */
				mCSB_dragger[0].add(mCSB_container).css("top",0);
				_scrollTo($this,"_resetY");
			}
			if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */
				var cx=dx=0;
				if(d.langDir==="rtl"){ /* adjust left position for rtl direction */
					cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);
					dx=Math.abs(cx/d.scrollRatio.x);
				}
				mCSB_container.css("left",cx);
				mCSB_dragger[1].css("left",dx);
				_scrollTo($this,"_resetX");
			}
		},
		/* -------------------- */
		
		
		/* binds scrollbar events */
		_bindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt;
			if(!d.bindEvents){ /* check if events are already bound */
				_draggable.call(this);
				if(o.contentTouchScroll){_contentDraggable.call(this);}
				_selectable.call(this);
				if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */
					function _mwt(){
						mousewheelTimeout=setTimeout(function(){
							if(!$.event.special.mousewheel){
								_mwt();
							}else{
								clearTimeout(mousewheelTimeout);
								_mousewheel.call($this[0]);
							}
						},100);
					}
					var mousewheelTimeout;
					_mwt();
				}
				_draggerRail.call(this);
				_wrapperScroll.call(this);
				if(o.advanced.autoScrollOnFocus){_focus.call(this);}
				if(o.scrollButtons.enable){_buttons.call(this);}
				if(o.keyboard.enable){_keyboard.call(this);}
				d.bindEvents=true;
			}
		},
		/* -------------------- */
		
		
		/* unbinds scrollbar events */
		_unbindEvents=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				sb=".mCSB_"+d.idx+"_scrollbar",
				sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}
			if(o.advanced.extraDraggableSelectors){sel.add($(o.advanced.extraDraggableSelectors));}
			if(d.bindEvents){ /* check if events are bound */
				/* unbind namespaced events from document/selectors */
				$(document).add($(!_canAccessIFrame() || top.document)).unbind("."+namespace);
				sel.each(function(){
					$(this).unbind("."+namespace);
				});
				/* clear and delete timeouts/objects */
				clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");
				clearTimeout(d.sequential.step); _delete(d.sequential,"step");
				clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");
				d.bindEvents=false;
			}
		},
		/* -------------------- */
		
		
		/* toggles scrollbar visibility */
		_scrollbarVisibility=function(disabled){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),
				content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),
				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
				mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];
			if(o.axis!=="x"){
				if(d.overflowed[0] && !disabled){
					scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");
					content.removeClass(classes[8]+" "+classes[10]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}
						content.removeClass(classes[10]);
					}else{
						scrollbar[0].css("display","none");
						content.addClass(classes[10]);
					}
					content.addClass(classes[8]);
				}
			}
			if(o.axis!=="y"){
				if(d.overflowed[1] && !disabled){
					scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");
					content.removeClass(classes[9]+" "+classes[11]);
				}else{
					if(o.alwaysShowScrollbar){
						if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}
						content.removeClass(classes[11]);
					}else{
						scrollbar[1].css("display","none");
						content.addClass(classes[11]);
					}
					content.addClass(classes[9]);
				}
			}
			if(!d.overflowed[0] && !d.overflowed[1]){
				$this.addClass(classes[5]);
			}else{
				$this.removeClass(classes[5]);
			}
		},
		/* -------------------- */
		
		
		/* returns input coordinates of pointer, touch and mouse events (relative to document) */
		_coordinates=function(e){
			var t=e.type,o=e.target.ownerDocument!==document && frameElement!==null ? [$(frameElement).offset().top,$(frameElement).offset().left] : null,
				io=_canAccessIFrame() && e.target.ownerDocument!==top.document && frameElement!==null ? [$(e.view.frameElement).offset().top,$(e.view.frameElement).offset().left] : [0,0];
			switch(t){
				case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":
					return o ? [e.originalEvent.pageY-o[0]+io[0],e.originalEvent.pageX-o[1]+io[1],false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];
					break;
				case "touchstart": case "touchmove": case "touchend":
					var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
						touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
					return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];
					break;
				default:
					return o ? [e.pageY-o[0]+io[0],e.pageX-o[1]+io[1],false] : [e.pageY,e.pageX,false];
			}
		},
		/* -------------------- */
		
		
		/* 
		SCROLLBAR DRAG EVENTS
		scrolls content via scrollbar dragging 
		*/
		_draggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),
				draggable,dragY,dragX,
				rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
				eds=o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
			mCSB_dragger.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				touchActive=true;
				if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */
				_iframe.call(mCSB_container,false); /* enable scrollbar dragging over iframes by disabling their events */
				_stop($this);
				draggable=$(this);
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
					h=draggable.height()+offset.top,w=draggable.width()+offset.left;
				if(y<h && y>0 && x<w && x>0){
					dragY=y; 
					dragX=x;
				}
				_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
			}).bind("touchmove."+namespace,function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				_drag(dragY,dragX,y,x);
			});
			$(document).add(eds).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){
				if(draggable){
					var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
					if(dragY===y && dragX===x){return;} /* has it really moved? */
					_drag(dragY,dragX,y,x);
				}
			}).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				if(draggable){
					_onDragClasses(draggable,"active",o.autoExpandScrollbar); 
					draggable=null;
				}
				touchActive=false;
				if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */
				_iframe.call(mCSB_container,true); /* enable iframes events */
			});
			function _drag(dragY,dragX,y,x){
				mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;
				if(draggable.attr("id")===draggerId[1]){
					var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;
				}else{
					var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;
				}
				_scrollTo($this,to.toString(),{dir:dir,drag:true});
			}
		},
		/* -------------------- */
		
		
		/* 
		TOUCH SWIPE EVENTS
		scrolls content via touch swipe 
		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
		*/
		_contentDraggable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				draggable,dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,
				durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,
				iframe=mCSB_container.find("iframe"),
				events=[
					"touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start
					"touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move
					"touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end
				],
				touchAction=document.body.style.touchAction!==undefined && document.body.style.touchAction!=="";
			mCSB_container.bind(events[0],function(e){
				_onTouchstart(e);
			}).bind(events[1],function(e){
				_onTouchmove(e);
			});
			mCustomScrollBox.bind(events[0],function(e){
				_onTouchstart2(e);
			}).bind(events[2],function(e){
				_onTouchend(e);
			});
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onTouchstart(e);
								_onTouchstart2(e);
							}).bind(events[1],function(e){
								_onTouchmove(e);
							}).bind(events[2],function(e){
								_onTouchend(e);
							});
						}
					});
				});
			}
			function _onTouchstart(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1; touchDrag=0; docDrag=0; draggable=1;
				$this.removeClass("mCS_touch_action");
				var offset=mCSB_container.offset();
				dragY=_coordinates(e)[0]-offset.top;
				dragX=_coordinates(e)[1]-offset.left;
				touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];
			}
			function _onTouchmove(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				if(!o.documentTouchScroll){e.preventDefault();} 
				e.stopImmediatePropagation();
				if(docDrag && !touchDrag){return;}
				if(draggable){
					runningTime=_getTime();
					var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
						easing="mcsLinearOut";
					touchMoveY.push(y);
					touchMoveX.push(x);
					touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);
					if(d.overflowed[0]){
						var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
							prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));
					}
					if(d.overflowed[1]){
						var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
							preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));
					}
					if(prevent || preventX){ /* prevent native document scrolling */
						if(!touchAction){e.preventDefault();} 
						touchDrag=1;
					}else{
						docDrag=1;
						$this.addClass("mCS_touch_action");
					}
					if(touchAction){e.preventDefault();} 
					amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];
					mCSB_container[0].idleTimer=250;
					if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}
					if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}
				}
			}
			function _onTouchstart2(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
				touchable=1;
				e.stopImmediatePropagation();
				_stop($this);
				startTime=_getTime();
				var offset=mCustomScrollBox.offset();
				touchStartY=_coordinates(e)[0]-offset.top;
				touchStartX=_coordinates(e)[1]-offset.left;
				touchMoveY=[]; touchMoveX=[];
			}
			function _onTouchend(e){
				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
				draggable=0;
				e.stopImmediatePropagation();
				touchDrag=0; docDrag=0;
				endTime=_getTime();
				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
				if((endTime-runningTime)>30){return;}
				speed=1000/(endTime-startTime);
				var easing="mcsEaseOut",slow=speed<2.5,
					diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];
				distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];
				var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];
				speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];
				var a=[
					Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),
					Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))
				];
				amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];
				durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];
				var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
				amount[0]=absDistance[0]>md ? amount[0] : 0;
				amount[1]=absDistance[1]>md ? amount[1] : 0;
				if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}
				if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}
			}
			function _m(ds,s){
				var r=[s*1.5,s*2,s/1.5,s/2];
				if(ds>90){
					return s>4 ? r[0] : r[3];
				}else if(ds>60){
					return s>3 ? r[3] : r[2];
				}else if(ds>30){
					return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];
				}else{
					return s>8 ? s : r[3];
				}
			}
			function _drag(amount,dur,easing,dir,overwrite,drag){
				if(!amount){return;}
				_scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});
			}
		},
		/* -------------------- */
		
		
		/* 
		SELECT TEXT EVENTS 
		scrolls content when text is selected 
		*/
		_selectable=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				action;
			mCSB_container.bind("mousedown."+namespace,function(e){
				if(touchable){return;}
				if(!action){action=1; touchActive=true;}
			}).add(document).bind("mousemove."+namespace,function(e){
				if(!touchable && action && _sel()){
					var offset=mCSB_container.offset(),
						y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;
					if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){
						if(seq.step){_seq("off",null,"stepped");}
					}else{
						if(o.axis!=="x" && d.overflowed[0]){
							if(y<0){
								_seq("on",38);
							}else if(y>wrapper.height()){
								_seq("on",40);
							}
						}
						if(o.axis!=="y" && d.overflowed[1]){
							if(x<0){
								_seq("on",37);
							}else if(x>wrapper.width()){
								_seq("on",39);
							}
						}
					}
				}
			}).bind("mouseup."+namespace+" dragend."+namespace,function(e){
				if(touchable){return;}
				if(action){action=0; _seq("off",null);}
				touchActive=false;
			});
			function _sel(){
				return 	window.getSelection ? window.getSelection().toString() : 
						document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;
			}
			function _seq(a,c,s){
				seq.type=s && action ? "stepped" : "stepless";
				seq.scrollAmount=10;
				_sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);
			}
		},
		/* -------------------- */
		
		
		/* 
		MOUSE WHEEL EVENT
		scrolls content via mouse-wheel 
		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
		*/
		_mousewheel=function(){
			if(!$(this).data(pluginPfx)){return;} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
				iframe=$("#mCSB_"+d.idx+"_container").find("iframe");
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){
								_onMousewheel(e,delta);
							});
						}
					});
				});
			}
			mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){
				_onMousewheel(e,delta);
			});
			function _onMousewheel(e,delta){
				_stop($this);
				if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */
				var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100,
					dur=o.scrollInertia;
				if(o.axis==="x" || o.mouseWheel.axis==="x"){
					var dir="x",
						px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),
						draggerPos=mCSB_dragger[1][0].offsetLeft,
						limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
						dlt=o.mouseWheel.axis==="y" ? (e.deltaY || delta) : e.deltaX;
				}else{
					var dir="y",
						px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],
						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],
						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),
						draggerPos=mCSB_dragger[0][0].offsetTop,
						limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
						dlt=e.deltaY || delta;
				}
				if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}
				if(o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice){dlt=-dlt;}
				if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}
				if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){
					e.stopImmediatePropagation();
					e.preventDefault();
				}
				if(e.deltaFactor<5 && !o.mouseWheel.normalizeDelta){
					//very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
					amount=e.deltaFactor; dur=17;
				}
				_scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir,dur:dur});
			}
		},
		/* -------------------- */
		
		
		/* checks if iframe can be accessed */
		_canAccessIFrameCache=new Object(),
		_canAccessIFrame=function(iframe){
		    var result=false,cacheKey=false,html=null;
		    if(iframe===undefined){
				cacheKey="#empty";
		    }else if($(iframe).attr("id")!==undefined){
				cacheKey=$(iframe).attr("id");
		    }
			if(cacheKey!==false && _canAccessIFrameCache[cacheKey]!==undefined){
				return _canAccessIFrameCache[cacheKey];
			}
			if(!iframe){
				try{
					var doc=top.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}else{
				try{
					var doc=iframe.contentDocument || iframe.contentWindow.document;
					html=doc.body.innerHTML;
				}catch(err){/* do nothing */}
				result=(html!==null);
			}
			if(cacheKey!==false){_canAccessIFrameCache[cacheKey]=result;}
			return result;
		},
		/* -------------------- */
		
		
		/* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
		_iframe=function(evt){
			var el=this.find("iframe");
			if(!el.length){return;} /* check if content contains iframes */
			var val=!evt ? "none" : "auto";
			el.css("pointer-events",val); /* for IE11, iframe's display property should not be "block" */
		},
		/* -------------------- */
		
		
		/* disables mouse-wheel when hovering specific elements like select, datalist etc. */
		_disableMousewheel=function(el,target){
			var tag=target.nodeName.toLowerCase(),
				tags=el.data(pluginPfx).opt.mouseWheel.disableOver,
				/* elements that require focus */
				focusTags=["select","textarea"];
			return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));
		},
		/* -------------------- */
		
		
		/* 
		DRAGGER RAIL CLICK EVENT
		scrolls content via dragger rail 
		*/
		_draggerRail=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]),
				clickable;
			mCSB_draggerContainer.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
				touchActive=true;
				if(!$(e.target).hasClass("mCSB_dragger")){clickable=1;}
			}).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
				touchActive=false;
			}).bind("click."+namespace,function(e){
				if(!clickable){return;}
				clickable=0;
				if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){
					_stop($this);
					var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");
					if(el.parent(".mCSB_scrollTools_horizontal").length>0){
						if(!d.overflowed[1]){return;}
						var dir="x",
							clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));
					}else{
						if(!d.overflowed[0]){return;}
						var dir="y",
							clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,
							to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));
					}
					_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		FOCUS EVENT
		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
		*/
		_focus=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				namespace=pluginPfx+"_"+d.idx,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent();
			mCSB_container.bind("focusin."+namespace,function(e){
				var el=$(document.activeElement),
					nested=mCSB_container.find(".mCustomScrollBox").length,
					dur=0;
				if(!el.is(o.advanced.autoScrollOnFocus)){return;}
				_stop($this);
				clearTimeout($this[0]._focusTimeout);
				$this[0]._focusTimer=nested ? (dur+17)*nested : 0;
				$this[0]._focusTimeout=setTimeout(function(){
					var	to=[_childPos(el)[0],_childPos(el)[1]],
						contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],
						isVisible=[
							(contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),
							(contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))
						],
						overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
					if(o.axis!=="x" && !isVisible[0]){
						_scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
					if(o.axis!=="y" && !isVisible[1]){
						_scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
					}
				},$this[0]._focusTimer);
			});
		},
		/* -------------------- */
		
		
		/* sets content wrapper scrollTop/scrollLeft always to 0 */
		_wrapperScroll=function(){
			var $this=$(this),d=$this.data(pluginPfx),
				namespace=pluginPfx+"_"+d.idx,
				wrapper=$("#mCSB_"+d.idx+"_container").parent();
			wrapper.bind("scroll."+namespace,function(e){
				if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){
					$(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		BUTTONS EVENTS
		scrolls content via up, down, left and right buttons 
		*/
		_buttons=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				sel=".mCSB_"+d.idx+"_scrollbar",
				btn=$(sel+">a");
			btn.bind("contextmenu."+namespace,function(e){
				e.preventDefault(); //prevent right click
			}).bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){
				e.preventDefault();
				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
				var btnClass=$(this).attr("class");
				seq.type=o.scrollButtons.scrollType;
				switch(e.type){
					case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":
						if(seq.type==="stepped"){return;}
						touchActive=true;
						d.tweenRunning=false;
						_seq("on",btnClass);
						break;
					case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":
					case "mouseout": case "pointerout": case "MSPointerOut":
						if(seq.type==="stepped"){return;}
						touchActive=false;
						if(seq.dir){_seq("off",btnClass);}
						break;
					case "click":
						if(seq.type!=="stepped" || d.tweenRunning){return;}
						_seq("on",btnClass);
						break;
				}
				function _seq(a,c){
					seq.scrollAmount=o.scrollButtons.scrollAmount;
					_sequentialScroll($this,a,c);
				}
			});
		},
		/* -------------------- */
		
		
		/* 
		KEYBOARD EVENTS
		scrolls content via keyboard 
		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
		*/
		_keyboard=function(){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
				namespace=pluginPfx+"_"+d.idx,
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				editables="input,textarea,select,datalist,keygen,[contenteditable='true']",
				iframe=mCSB_container.find("iframe"),
				events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];
			if(iframe.length){
				iframe.each(function(){
					$(this).bind("load",function(){
						/* bind events on accessible iframes */
						if(_canAccessIFrame(this)){
							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
								_onKeyboard(e);
							});
						}
					});
				});
			}
			mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){
				_onKeyboard(e);
			});
			function _onKeyboard(e){
				switch(e.type){
					case "blur":
						if(d.tweenRunning && seq.dir){_seq("off",null);}
						break;
					case "keydown": case "keyup":
						var code=e.keyCode ? e.keyCode : e.which,action="on";
						if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){
							/* up (38), down (40), left (37), right (39) arrows */
							if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}
							if(e.type==="keyup"){action="off";}
							if(!$(document.activeElement).is(editables)){
								e.preventDefault();
								e.stopImmediatePropagation();
								_seq(action,code);
							}
						}else if(code===33 || code===34){
							/* PgUp (33), PgDn (34) */
							if(d.overflowed[0] || d.overflowed[1]){
								e.preventDefault();
								e.stopImmediatePropagation();
							}
							if(e.type==="keyup"){
								_stop($this);
								var keyboardDir=code===34 ? -1 : 1;
								if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
									var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));
								}else{
									var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));
								}
								_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
							}
						}else if(code===35 || code===36){
							/* End (35), Home (36) */
							if(!$(document.activeElement).is(editables)){
								if(d.overflowed[0] || d.overflowed[1]){
									e.preventDefault();
									e.stopImmediatePropagation();
								}
								if(e.type==="keyup"){
									if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
										var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;
									}else{
										var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;
									}
									_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
								}
							}
						}
						break;
				}
				function _seq(a,c){
					seq.type=o.keyboard.scrollType;
					seq.scrollAmount=o.keyboard.scrollAmount;
					if(seq.type==="stepped" && d.tweenRunning){return;}
					_sequentialScroll($this,a,c);
				}
			}
		},
		/* -------------------- */
		
		
		/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
		_sequentialScroll=function(el,action,trigger,e,s){
			var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				once=seq.type==="stepped" ? true : false,
				steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */
				steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;
			switch(action){
				case "on":
					seq.dir=[
						(trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),
						(trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)
					];
					_stop(el);
					if(_isNumeric(trigger) && seq.type==="stepped"){return;}
					_on(once);
					break;
				case "off":
					_off();
					if(once || (d.tweenRunning && seq.dir)){
						_on(true);
					}
					break;
			}
			
			/* starts sequence */
			function _on(once){
				if(o.snapAmount){seq.scrollAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0]==="x" ? o.snapAmount[1] : o.snapAmount[0];} /* scrolling snapping */
				var c=seq.type!=="stepped", /* continuous scrolling */
					t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */
					m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */
					contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],
					ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],
					amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),
					px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),
					to=seq.scrollAmount!=="auto" ? px : amount,
					easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
					onComplete=!once ? false : true;
				if(once && t<17){
					to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];
				}
				_scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});
				if(once){
					seq.dir=false;
					return;
				}
				clearTimeout(seq.step);
				seq.step=setTimeout(function(){
					_on();
				},t);
			}
			/* stops sequence */
			function _off(){
				clearTimeout(seq.step);
				_delete(seq,"step");
				_stop(el);
			}
		},
		/* -------------------- */
		
		
		/* returns a yx array from value */
		_arr=function(val){
			var o=$(this).data(pluginPfx).opt,vals=[];
			if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */
			/* check if value is object or array, its length and create an array with yx values */
			if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
				vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;
				vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;
			}else{ /* array value (e.g. [100,100]) */
				vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];
			}
			/* check if array values are anonymous functions */
			if(typeof vals[0]==="function"){vals[0]=vals[0]();}
			if(typeof vals[1]==="function"){vals[1]=vals[1]();}
			return vals;
		},
		/* -------------------- */
		
		
		/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
		_to=function(val,dir){
			if(val==null || typeof val=="undefined"){return;}
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				t=typeof val;
			if(!dir){dir=o.axis==="x" ? "x" : "y";}
			var contentLength=dir==="x" ? mCSB_container.outerWidth(false)-wrapper.width() : mCSB_container.outerHeight(false)-wrapper.height(),
				contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
				cssProp=dir==="x" ? "left" : "top";
			switch(t){
				case "function": /* this currently is not used. Consider removing it */
					return val();
					break;
				case "object": /* js/jquery object */
					var obj=val.jquery ? val : $(val);
					if(!obj.length){return;}
					return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
					break;
				case "string": case "number":
					if(_isNumeric(val)){ /* numeric value */
						return Math.abs(val);
					}else if(val.indexOf("%")!==-1){ /* percentage value */
						return Math.abs(contentLength*parseInt(val)/100);
					}else if(val.indexOf("-=")!==-1){ /* decrease value */
						return Math.abs(contentPos-parseInt(val.split("-=")[1]));
					}else if(val.indexOf("+=")!==-1){ /* inrease value */
						var p=(contentPos+parseInt(val.split("+=")[1]));
						return p>=0 ? 0 : Math.abs(p);
					}else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */
						return Math.abs(val.split("px")[0]);
					}else{
						if(val==="top" || val==="left"){ /* special strings */
							return 0;
						}else if(val==="bottom"){
							return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));
						}else if(val==="right"){
							return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));
						}else if(val==="first" || val==="last"){
							var obj=mCSB_container.find(":"+val);
							return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
						}else{
							if($(val).length){ /* jquery selector */
								return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];
							}else{ /* other values (e.g. "100em") */
								mCSB_container.css(cssProp,val);
								methods.update.call(null,$this[0]);
								return;
							}
						}
					}
					break;
			}
		},
		/* -------------------- */
		
		
		/* calls the update method automatically */
		_autoUpdate=function(rem){
			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
				mCSB_container=$("#mCSB_"+d.idx+"_container");
			if(rem){
				/* 
				removes autoUpdate timer 
				usage: _autoUpdate.call(this,"remove");
				*/
				clearTimeout(mCSB_container[0].autoUpdate);
				_delete(mCSB_container[0],"autoUpdate");
				return;
			}
			upd();
			function upd(){
				clearTimeout(mCSB_container[0].autoUpdate);
				if($this.parents("html").length===0){
					/* check element in dom tree */
					$this=null;
					return;
				}
				mCSB_container[0].autoUpdate=setTimeout(function(){
					/* update on specific selector(s) length and size change */
					if(o.advanced.updateOnSelectorChange){
						d.poll.change.n=sizesSum();
						if(d.poll.change.n!==d.poll.change.o){
							d.poll.change.o=d.poll.change.n;
							doUpd(3);
							return;
						}
					}
					/* update on main element and scrollbar size changes */
					if(o.advanced.updateOnContentResize){
						d.poll.size.n=$this[0].scrollHeight+$this[0].scrollWidth+mCSB_container[0].offsetHeight+$this[0].offsetHeight+$this[0].offsetWidth;
						if(d.poll.size.n!==d.poll.size.o){
							d.poll.size.o=d.poll.size.n;
							doUpd(1);
							return;
						}
					}
					/* update on image load */
					if(o.advanced.updateOnImageLoad){
						if(!(o.advanced.updateOnImageLoad==="auto" && o.axis==="y")){ //by default, it doesn't run on vertical content
							d.poll.img.n=mCSB_container.find("img").length;
							if(d.poll.img.n!==d.poll.img.o){
								d.poll.img.o=d.poll.img.n;
								mCSB_container.find("img").each(function(){
									imgLoader(this);
								});
								return;
							}
						}
					}
					if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}
				},o.advanced.autoUpdateTimeout);
			}
			/* a tiny image loader */
			function imgLoader(el){
				if($(el).hasClass(classes[2])){doUpd(); return;}
				var img=new Image();
				function createDelegate(contextObject,delegateMethod){
					return function(){return delegateMethod.apply(contextObject,arguments);}
				}
				function imgOnLoad(){
					this.onload=null;
					$(el).addClass(classes[2]);
					doUpd(2);
				}
				img.onload=createDelegate(img,imgOnLoad);
				img.src=el.src;
			}
			/* returns the total height and width sum of all elements matching the selector */
			function sizesSum(){
				if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}
				var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);
				if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=this.offsetHeight+this.offsetWidth;});}
				return total;
			}
			/* calls the update method */
			function doUpd(cb){
				clearTimeout(mCSB_container[0].autoUpdate);
				methods.update.call(null,$this[0],cb);
			}
		},
		/* -------------------- */
		
		
		/* snaps scrolling to a multiple of a pixels number */
		_snapAmount=function(to,amount,offset){
			return (Math.round(to/amount)*amount-offset); 
		},
		/* -------------------- */
		
		
		/* stops content and scrollbar animations */
		_stop=function(el){
			var d=el.data(pluginPfx),
				sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");
			sel.each(function(){
				_stopTween.call(this);
			});
		},
		/* -------------------- */
		
		
		/* 
		ANIMATES CONTENT 
		This is where the actual scrolling happens
		*/
		_scrollTo=function(el,to,options){
			var d=el.data(pluginPfx),o=d.opt,
				defaults={
					trigger:"internal",
					dir:"y",
					scrollEasing:"mcsEaseOut",
					drag:false,
					dur:o.scrollInertia,
					overwrite:"all",
					callbacks:true,
					onStart:true,
					onUpdate:true,
					onComplete:true
				},
				options=$.extend(defaults,options),
				dur=[options.dur,(options.drag ? 0 : options.dur)],
				mCustomScrollBox=$("#mCSB_"+d.idx),
				mCSB_container=$("#mCSB_"+d.idx+"_container"),
				wrapper=mCSB_container.parent(),
				totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],
				totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];
			d.trigger=options.trigger;
			if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */
				$(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");
				wrapper.scrollTop(0).scrollLeft(0);
			}
			if(to==="_resetY" && !d.contentReset.y){
				/* callbacks: onOverflowYNone */
				if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}
				d.contentReset.y=1;
			}
			if(to==="_resetX" && !d.contentReset.x){
				/* callbacks: onOverflowXNone */
				if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}
				d.contentReset.x=1;
			}
			if(to==="_resetY" || to==="_resetX"){return;}
			if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){
				/* callbacks: onOverflowY */
				if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}
				d.contentReset.x=null;
			}
			if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){
				/* callbacks: onOverflowX */
				if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}
				d.contentReset.x=null;
			}
			if(o.snapAmount){ /* scrolling snapping */
				var snapAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : options.dir==="x" ? o.snapAmount[1] : o.snapAmount[0];
				to=_snapAmount(to,snapAmount,o.snapOffset);
			}
			switch(options.dir){
				case "x":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),
						property="left",
						contentPos=mCSB_container[0].offsetLeft,
						limit=[
							mCustomScrollBox.width()-mCSB_container.outerWidth(false),
							mCSB_dragger.parent().width()-mCSB_dragger.width()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],
						tso=totalScrollOffsets[1],
						tsbo=totalScrollBackOffsets[1],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;
					break;
				case "y":
					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),
						property="top",
						contentPos=mCSB_container[0].offsetTop,
						limit=[
							mCustomScrollBox.height()-mCSB_container.outerHeight(false),
							mCSB_dragger.parent().height()-mCSB_dragger.height()
						],
						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],
						tso=totalScrollOffsets[0],
						tsbo=totalScrollBackOffsets[0],
						totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,
						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;
					break;
			}
			if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){
				scrollTo=[0,0];
			}else if(scrollTo[1]>=limit[1]){
				scrollTo=[limit[0],limit[1]];
			}else{
				scrollTo[0]=-scrollTo[0];
			}
			if(!el[0].mcs){
				_mcs();  /* init mcs object (once) to make it available before callbacks */
				if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */
			}
			clearTimeout(mCSB_container[0].onCompleteTimeout);
			_tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);
			if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}
			_tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{
				onStart:function(){
					if(options.callbacks && options.onStart && !d.tweenRunning){
						/* callbacks: onScrollStart */
						if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}
						d.tweenRunning=true;
						_onDragClasses(mCSB_dragger);
						d.cbOffsets=_cbOffsets();
					}
				},onUpdate:function(){
					if(options.callbacks && options.onUpdate){
						/* callbacks: whileScrolling */
						if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}
					}
				},onComplete:function(){
					if(options.callbacks && options.onComplete){
						if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}
						var t=mCSB_container[0].idleTimer || 0;
						mCSB_container[0].onCompleteTimeout=setTimeout(function(){
							/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
							if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}
							if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}
							if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}
							d.tweenRunning=false;
							mCSB_container[0].idleTimer=0;
							_onDragClasses(mCSB_dragger,"hide");
						},t);
					}
				}
			});
			/* checks if callback function exists */
			function _cb(cb){
				return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";
			}
			/* checks whether callback offsets always trigger */
			function _cbOffsets(){
				return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];
			}
			/* 
			populates object with useful values for the user 
			values: 
				content: this.mcs.content
				content top position: this.mcs.top 
				content left position: this.mcs.left 
				dragger top position: this.mcs.draggerTop 
				dragger left position: this.mcs.draggerLeft 
				scrolling y percentage: this.mcs.topPct 
				scrolling x percentage: this.mcs.leftPct 
				scrolling direction: this.mcs.direction
			*/
			function _mcs(){
				var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */
					dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */
					cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */
					pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */
				el[0].mcs={
					content:mCSB_container, /* original content wrapper as jquery object */
					top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],
					topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),
					direction:options.dir
				};
				/* 
				this refers to the original element containing the scrollbar(s)
				usage: this.mcs.top, this.mcs.leftPct etc. 
				*/
			}
		},
		/* -------------------- */
		
		
		/* 
		CUSTOM JAVASCRIPT ANIMATION TWEEN 
		Lighter and faster than jquery animate() and css transitions 
		Animates top/left properties and includes easings 
		*/
		_tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var callbacks=callbacks || {},
				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},
				startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];
			if(prop==="left"){from=el.offsetLeft;}
			var diff=to-from;
			tobj.stop=0;
			if(overwrite!=="none"){_cancelTween();}
			_startTween();
			function _step(){
				if(tobj.stop){return;}
				if(!progress){onStart.call();}
				progress=_getTime()-startTime;
				_tween();
				if(progress>=tobj.time){
					tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;
					if(tobj.time<progress+1){tobj.time=progress+1;}
				}
				if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}
			}
			function _tween(){
				if(duration>0){
					tobj.currVal=_ease(tobj.time,from,diff,duration,easing);
					elStyle[prop]=Math.round(tobj.currVal)+"px";
				}else{
					elStyle[prop]=to+"px";
				}
				onUpdate.call();
			}
			function _startTween(){
				_delay=1000/60;
				tobj.time=progress+_delay;
				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
				tobj.id=_request(_step);
			}
			function _cancelTween(){
				if(tobj.id==null){return;}
				if(!window.requestAnimationFrame){clearTimeout(tobj.id);
				}else{window.cancelAnimationFrame(tobj.id);}
				tobj.id=null;
			}
			function _ease(t,b,c,d,type){
				switch(type){
					case "linear": case "mcsLinear":
						return c*t/d + b;
						break;
					case "mcsLinearOut":
						t/=d; t--; return c * Math.sqrt(1 - t*t) + b;
						break;
					case "easeInOutSmooth":
						t/=d/2;
						if(t<1) return c/2*t*t + b;
						t--;
						return -c/2 * (t*(t-2) - 1) + b;
						break;
					case "easeInOutStrong":
						t/=d/2;
						if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
						t--;
						return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
						break;
					case "easeInOut": case "mcsEaseInOut":
						t/=d/2;
						if(t<1) return c/2*t*t*t + b;
						t-=2;
						return c/2*(t*t*t + 2) + b;
						break;
					case "easeOutSmooth":
						t/=d; t--;
						return -c * (t*t*t*t - 1) + b;
						break;
					case "easeOutStrong":
						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
						break;
					case "easeOut": case "mcsEaseOut": default:
						var ts=(t/=d)*t,tc=ts*t;
						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
				}
			}
		},
		/* -------------------- */
		
		
		/* returns current time */
		_getTime=function(){
			if(window.performance && window.performance.now){
				return window.performance.now();
			}else{
				if(window.performance && window.performance.webkitNow){
					return window.performance.webkitNow();
				}else{
					if(Date.now){return Date.now();}else{return new Date().getTime();}
				}
			}
		},
		/* -------------------- */
		
		
		/* stops a tween */
		_stopTween=function(){
			var el=this;
			if(!el._mTween){el._mTween={top:{},left:{}};}
			var props=["top","left"];
			for(var i=0; i<props.length; i++){
				var prop=props[i];
				if(el._mTween[prop].id){
					if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);
					}else{window.cancelAnimationFrame(el._mTween[prop].id);}
					el._mTween[prop].id=null;
					el._mTween[prop].stop=1;
				}
			}
		},
		/* -------------------- */
		
		
		/* deletes a property (avoiding the exception thrown by IE) */
		_delete=function(c,m){
			try{delete c[m];}catch(e){c[m]=null;}
		},
		/* -------------------- */
		
		
		/* detects left mouse button */
		_mouseBtnLeft=function(e){
			return !(e.which && e.which!==1);
		},
		/* -------------------- */
		
		
		/* detects if pointer type event is touch */
		_pointerTouch=function(e){
			var t=e.originalEvent.pointerType;
			return !(t && t!=="touch" && t!==2);
		},
		/* -------------------- */
		
		
		/* checks if value is numeric */
		_isNumeric=function(val){
			return !isNaN(parseFloat(val)) && isFinite(val);
		},
		/* -------------------- */
		
		
		/* returns element position according to content */
		_childPos=function(el){
			var p=el.parents(".mCSB_container");
			return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];
		},
		/* -------------------- */
		
		
		/* checks if browser tab is hidden/inactive via Page Visibility API */
		_isTabHidden=function(){
			var prop=_getHiddenProp();
			if(!prop) return false;
			return document[prop];
			function _getHiddenProp(){
				var pfx=["webkit","moz","ms","o"];
				if("hidden" in document) return "hidden"; //natively supported
				for(var i=0; i<pfx.length; i++){ //prefixed
				    if((pfx[i]+"Hidden") in document) 
				        return pfx[i]+"Hidden";
				}
				return null; //not supported
			}
		};
		/* -------------------- */
		
	
	
	
	
	/* 
	----------------------------------------
	PLUGIN SETUP 
	----------------------------------------
	*/
	
	/* plugin constructor functions */
	$.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	$[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
	
	/* 
	allow setting plugin default options. 
	usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
	to apply any changed default options on default selectors (below), use inside document ready fn 
	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
	*/
	$[pluginNS].defaults=defaults;
	
	/* 
	add window object (window.mCustomScrollbar) 
	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
	*/
	window[pluginNS]=true;
	
	$(window).bind("load",function(){
		
		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */
		
		/* extend jQuery expressions */
		$.extend($.expr[":"],{
			/* checks if element is within scrollable viewport */
			mcsInView:$.expr[":"].mcsInView || function(el){
				var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;
				if(!content.length){return;}
				wrapper=content.parent();
				cPos=[content[0].offsetTop,content[0].offsetLeft];
				return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) && 
						cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);
			},
			/* checks if element or part of element is in view of scrollable viewport */
			mcsInSight:$.expr[":"].mcsInSight || function(el,i,m){
				var $el=$(el),elD,content=$el.parents(".mCSB_container"),wrapperView,pos,wrapperViewPct,
					pctVals=m[3]==="exact" ? [[1,0],[1,0]] : [[0.9,0.1],[0.6,0.4]];
				if(!content.length){return;}
				elD=[$el.outerHeight(false),$el.outerWidth(false)];
				pos=[content[0].offsetTop+_childPos($el)[0],content[0].offsetLeft+_childPos($el)[1]];
				wrapperView=[content.parent()[0].offsetHeight,content.parent()[0].offsetWidth];
				wrapperViewPct=[elD[0]<wrapperView[0] ? pctVals[0] : pctVals[1],elD[1]<wrapperView[1] ? pctVals[0] : pctVals[1]];
				return 	pos[0]-(wrapperView[0]*wrapperViewPct[0][0])<0 && pos[0]+elD[0]-(wrapperView[0]*wrapperViewPct[0][1])>=0 && 
						pos[1]-(wrapperView[1]*wrapperViewPct[1][0])<0 && pos[1]+elD[1]-(wrapperView[1]*wrapperViewPct[1][1])>=0;
			},
			/* checks if element is overflowed having visible scrollbar(s) */
			mcsOverflow:$.expr[":"].mcsOverflow || function(el){
				var d=$(el).data(pluginPfx);
				if(!d){return;}
				return d.overflowed[0] || d.overflowed[1];
			}
		});
	
	});

}))}));
/*! device.js 0.2.7 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (S, e) {
  "use strict";
  var t = [],
      T = S.document,
      i = Object.getPrototypeOf,
      a = t.slice,
      m = t.concat,
      l = t.push,
      o = t.indexOf,
      n = {},
      r = n.toString,
      h = n.hasOwnProperty,
      s = h.toString,
      c = s.call(Object),
      g = {};

  function v(e, t) {
    var n = (t = t || T).createElement("script");
    n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
  }

  function u(e, t) {
    return t.toUpperCase()
  }

  var d = "3.1.1",
      C = function (e, t) {
        return new C.fn.init(e, t)
      },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      f = /^-ms-/,
      y = /-([a-z])/g;

  function k(e) {
    var t = !!e && "length" in e && e.length,
        n = C.type(e);
    return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  C.fn = C.prototype = {
    jquery: d,
    constructor: C,
    length: 0,
    toArray: function () {
      return a.call(this)
    },
    get: function (e) {
      return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = C.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return C.each(this, e)
    },
    map: function (n) {
      return this.pushStack(C.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(a.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: l,
    sort: t.sort,
    splice: t.splice
  }, C.extend = C.fn.extend = function () {
    var e, t, n, i, o, r, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
    for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
      if (null != (e = arguments[a]))
        for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (C.isPlainObject(i) || (o = C.isArray(i))) ? (r = o ? (o = !1, n && C.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {}, s[t] = C.extend(c, r, i)) : void 0 !== i && (s[t] = i));
    return s
  }, C.extend({
    expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {
    },
    isFunction: function (e) {
      return "function" === C.type(e)
    },
    isArray: Array.isArray,
    isWindow: function (e) {
      return null != e && e === e.window
    },
    isNumeric: function (e) {
      var t = C.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    },
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== r.call(e) || (t = i(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || s.call(n) !== c))
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
    },
    globalEval: function (e) {
      v(e)
    },
    camelCase: function (e) {
      return e.replace(f, "ms-").replace(y, u)
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function (e, t) {
      var n, i = 0;
      if (k(e))
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ;
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i])) break;
      return e
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(p, "")
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : o.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
      return e.length = o, e
    },
    grep: function (e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
      return i
    },
    map: function (e, t, n) {
      var i, o, r = 0,
          s = [];
      if (k(e))
        for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
      else
        for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
      return m.apply([], s)
    },
    guid: 1,
    proxy: function (e, t) {
      var n, i, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), C.isFunction(e)) return i = a.call(arguments, 2), (o = function () {
        return e.apply(t || this, i.concat(a.call(arguments)))
      }).guid = e.guid = e.guid || C.guid++, o
    },
    now: Date.now,
    support: g
  }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var b = function (n) {
    function d(e, t, n) {
      var i = "0x" + t - 65536;
      return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
    }

    function o() {
      w()
    }

    var e, f, b, r, s, h, p, m, x, l, c, w, S, a, T, g, u, v, y, C = "sizzle" + +new Date,
        k = n.document,
        $ = 0,
        i = 0,
        A = se(),
        E = se(),
        P = se(),
        D = function (e, t) {
          return e === t && (c = !0), 0
        },
        j = {}.hasOwnProperty,
        t = [],
        O = t.pop,
        M = t.push,
        N = t.push,
        L = t.slice,
        H = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        R = "\\[" + I + "*(" + q + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + I + "*\\]",
        _ = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        B = new RegExp(I + "+", "g"),
        z = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        W = new RegExp("^" + I + "*," + I + "*"),
        G = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        U = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
        V = new RegExp(_),
        X = new RegExp("^" + q + "$"),
        K = {
          ID: new RegExp("^#(" + q + ")"),
          CLASS: new RegExp("^\\.(" + q + ")"),
          TAG: new RegExp("^(" + q + "|[*])"),
          ATTR: new RegExp("^" + R),
          PSEUDO: new RegExp("^" + _),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + F + ")$", "i"),
          needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        },
        Y = /^(?:input|select|textarea|button)$/i,
        Q = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        },
        oe = ye(function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
          dir: "parentNode",
          next: "legend"
        });
    try {
      N.apply(t = L.call(k.childNodes), k.childNodes), t[k.childNodes.length].nodeType
    } catch (e) {
      N = {
        apply: t.length ? function (e, t) {
          M.apply(e, L.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) ;
          e.length = n - 1
        }
      }
    }

    function re(e, t, n, i) {
      var o, r, s, a, l, c, u, d = t && t.ownerDocument,
          p = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!i && ((t ? t.ownerDocument || t : k) !== S && w(t), t = t || S, T)) {
        if (11 !== p && (l = Z.exec(e)))
          if (o = l[1]) {
            if (9 === p) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n
            } else if (d && (s = d.getElementById(o)) && y(t, s) && s.id === o) return n.push(s), n
          } else {
            if (l[2]) return N.apply(n, t.getElementsByTagName(e)), n;
            if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(o)), n
          }
        if (f.qsa && !P[e + " "] && (!g || !g.test(e))) {
          if (1 !== p) d = t, u = e;
          else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(ne, ie) : t.setAttribute("id", a = C), r = (c = h(e)).length; r--;) c[r] = "#" + a + " " + ve(c[r]);
            u = c.join(","), d = ee.test(e) && me(t.parentNode) || t
          }
          if (u) try {
            return N.apply(n, d.querySelectorAll(u)), n
          } catch (e) {
          } finally {
            a === C && t.removeAttribute("id")
          }
        }
      }
      return m(e.replace(z, "$1"), t, n, i)
    }

    function se() {
      var i = [];
      return function e(t, n) {
        return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
      }
    }

    function ae(e) {
      return e[C] = !0, e
    }

    function le(e) {
      var t = S.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function ce(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
    }

    function ue(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function pe(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function fe(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function he(s) {
      return ae(function (r) {
        return r = +r, ae(function (e, t) {
          for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    for (e in f = re.support = {}, s = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, w = re.setDocument = function (e) {
      var t, n, i = e ? e.ownerDocument || e : k;
      return i !== S && 9 === i.nodeType && i.documentElement && (a = (S = i).documentElement, T = !s(S), k !== S && (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), f.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), f.getElementsByTagName = le(function (e) {
        return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
      }), f.getElementsByClassName = J.test(S.getElementsByClassName), f.getById = le(function (e) {
        return a.appendChild(e).id = C, !S.getElementsByName || !S.getElementsByName(C).length
      }), f.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, d);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, b.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && T) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, d);
        return function (e) {
          var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n
        }
      }, b.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && T) {
          var n, i, o, r = t.getElementById(e);
          if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
          }
          return []
        }
      }), b.find.TAG = f.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [],
            o = 0,
            r = t.getElementsByTagName(e);
        if ("*" !== e) return r;
        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
        return i
      }, b.find.CLASS = f.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
      }, u = [], g = [], (f.qsa = J.test(S.querySelectorAll)) && (le(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = S.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
      })), (f.matchesSelector = J.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function (e) {
        f.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", _)
      }), g = g.length && new RegExp(g.join("|")), u = u.length && new RegExp(u.join("|")), t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, D = t ? function (e, t) {
        if (e === t) return c = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === k && y(k, e) ? -1 : t === S || t.ownerDocument === k && y(k, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return c = !0, 0;
        var n, i = 0,
            o = e.parentNode,
            r = t.parentNode,
            s = [e],
            a = [t];
        if (!o || !r) return e === S ? -1 : t === S ? 1 : o ? -1 : r ? 1 : l ? H(l, e) - H(l, t) : 0;
        if (o === r) return ue(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) a.unshift(n);
        for (; s[i] === a[i];) i++;
        return i ? ue(s[i], a[i]) : s[i] === k ? -1 : a[i] === k ? 1 : 0
      }), S
    }, re.matches = function (e, t) {
      return re(e, null, null, t)
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== S && w(e), t = t.replace(U, "='$1']"), f.matchesSelector && T && !P[t + " "] && (!u || !u.test(t)) && (!g || !g.test(t))) try {
        var n = v.call(e, t);
        if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
      }
      return 0 < re(t, S, null, [e]).length
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== S && w(e), y(e, t)
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== S && w(e);
      var n = b.attrHandle[t.toLowerCase()],
          i = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
      return void 0 !== i ? i : f.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, re.escape = function (e) {
      return (e + "").replace(ne, ie)
    }, re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, re.uniqueSort = function (e) {
      var t, n = [],
          i = 0,
          o = 0;
      if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(D), c) {
        for (; t = e[o++];) t === e[o] && (i = n.push(o));
        for (; i--;) e.splice(n[i], 1)
      }
      return l = null, e
    }, r = re.getText = function (e) {
      var t, n = "",
          i = 0,
          o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else
        for (; t = e[i++];) n += r(t);
      return n
    }, (b = re.selectors = {
      cacheLength: 50,
      createPseudo: ae,
      match: K,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, d), e[3] = (e[3] || e[4] || e[5] || "").replace(te, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
        },
        PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, d).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function (e) {
          var t = A[e + " "];
          return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && A(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        },
        ATTR: function (n, i, o) {
          return function (e) {
            var t = re.attr(e, n);
            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(B, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
          }
        },
        CHILD: function (h, e, t, m, g) {
          var v = "nth" !== h.slice(0, 3),
              y = "last" !== h.slice(-4),
              k = "of-type" === e;
          return 1 === m && 0 === g ? function (e) {
            return !!e.parentNode
          } : function (e, t, n) {
            var i, o, r, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
                u = e.parentNode,
                d = k && e.nodeName.toLowerCase(),
                p = !n && !k,
                f = !1;
            if (u) {
              if (v) {
                for (; c;) {
                  for (s = e; s = s[c];)
                    if (k ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                  l = c = "only" === h && !l && "nextSibling"
                }
                return !0
              }
              if (l = [y ? u.firstChild : u.lastChild], y && p) {
                for (f = (a = (i = (o = (r = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                  if (1 === s.nodeType && ++f && s === e) {
                    o[h] = [$, a, f];
                    break
                  }
              } else if (p && (f = a = (i = (o = (r = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === $ && i[1]), !1 === f)
                for (;
                    (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((k ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [$, f]), s !== e));) ;
              return (f -= g) === m || f % m == 0 && 0 <= f / m
            }
          }
        },
        PSEUDO: function (e, r) {
          var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
          return s[C] ? s(r) : 1 < s.length ? (t = [e, e, "", r], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, t) {
            for (var n, i = s(e, r), o = i.length; o--;) e[n = H(e, i[o])] = !(t[n] = i[o])
          }) : function (e) {
            return s(e, 0, t)
          }) : s
        }
      },
      pseudos: {
        not: ae(function (e) {
          var i = [],
              o = [],
              a = p(e.replace(z, "$1"));
          return a[C] ? ae(function (e, t, n, i) {
            for (var o, r = a(e, null, i, []), s = e.length; s--;) (o = r[s]) && (e[s] = !(t[s] = o))
          }) : function (e, t, n) {
            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
          }
        }),
        has: ae(function (t) {
          return function (e) {
            return 0 < re(t, e).length
          }
        }),
        contains: ae(function (t) {
          return t = t.replace(te, d),
              function (e) {
                return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
              }
        }),
        lang: ae(function (n) {
          return X.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, d).toLowerCase(),
              function (e) {
                var t;
                do {
                  if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        },
        root: function (e) {
          return e === a
        },
        focus: function (e) {
          return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: fe(!1),
        disabled: fe(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function (e) {
          return !b.pseudos.empty(e)
        },
        header: function (e) {
          return Q.test(e.nodeName)
        },
        input: function (e) {
          return Y.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: he(function () {
          return [0]
        }),
        last: he(function (e, t) {
          return [t - 1]
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: he(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
          return e
        }),
        gt: he(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = pe(e);

    function ge() {
    }

    function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function ye(a, e, t) {
      var l = e.dir,
          c = e.next,
          u = c || l,
          d = t && "parentNode" === u,
          p = i++;
      return e.first ? function (e, t, n) {
        for (; e = e[l];)
          if (1 === e.nodeType || d) return a(e, t, n);
        return !1
      } : function (e, t, n) {
        var i, o, r, s = [$, p];
        if (n) {
          for (; e = e[l];)
            if ((1 === e.nodeType || d) && a(e, t, n)) return !0
        } else
          for (; e = e[l];)
            if (1 === e.nodeType || d)
              if (o = (r = e[C] || (e[C] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
              else {
                if ((i = o[u]) && i[0] === $ && i[1] === p) return s[2] = i[2];
                if ((o[u] = s)[2] = a(e, t, n)) return !0
              }
        return !1
      }
    }

    function ke(o) {
      return 1 < o.length ? function (e, t, n) {
        for (var i = o.length; i--;)
          if (!o[i](e, t, n)) return !1;
        return !0
      } : o[0]
    }

    function be(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
      return s
    }

    function xe(f, h, m, g, v, e) {
      return g && !g[C] && (g = xe(g)), v && !v[C] && (v = xe(v, e)), ae(function (e, t, n, i) {
        var o, r, s, a = [],
            l = [],
            c = t.length,
            u = e || function (e, t, n) {
              for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
              return n
            }(h || "*", n.nodeType ? [n] : n, []),
            d = !f || !e && h ? u : be(u, a, f, n, i),
            p = m ? v || (e ? f : c || g) ? [] : t : d;
        if (m && m(d, p, n, i), g)
          for (o = be(p, l), g(o, [], n, i), r = o.length; r--;) (s = o[r]) && (p[l[r]] = !(d[l[r]] = s));
        if (e) {
          if (v || f) {
            if (v) {
              for (o = [], r = p.length; r--;) (s = p[r]) && o.push(d[r] = s);
              v(null, p = [], o, i)
            }
            for (r = p.length; r--;) (s = p[r]) && -1 < (o = v ? H(e, s) : a[r]) && (e[o] = !(t[o] = s))
          }
        } else p = be(p === t ? p.splice(c, p.length) : p), v ? v(null, t, p, i) : N.apply(t, p)
      })
    }

    function we(e) {
      for (var o, t, n, i = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = ye(function (e) {
        return e === o
      }, s, !0), c = ye(function (e) {
        return -1 < H(o, e)
      }, s, !0), u = [function (e, t, n) {
        var i = !r && (n || t !== x) || ((o = t).nodeType ? l : c)(e, t, n);
        return o = null, i
      }]; a < i; a++)
        if (t = b.relative[e[a].type]) u = [ye(ke(u), t)];
        else {
          if ((t = b.filter[e[a].type].apply(null, e[a].matches))[C]) {
            for (n = ++a; n < i && !b.relative[e[n].type]; n++) ;
            return xe(1 < a && ke(u), 1 < a && ve(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(z, "$1"), t, a < n && we(e.slice(a, n)), n < i && we(e = e.slice(n)), n < i && ve(e))
          }
          u.push(t)
        }
      return ke(u)
    }

    function Se(g, v) {
      function e(e, t, n, i, o) {
        var r, s, a, l = 0,
            c = "0",
            u = e && [],
            d = [],
            p = x,
            f = e || k && b.find.TAG("*", o),
            h = $ += null == p ? 1 : Math.random() || .1,
            m = f.length;
        for (o && (x = t === S || t || o); c !== m && null != (r = f[c]); c++) {
          if (k && r) {
            for (s = 0, t || r.ownerDocument === S || (w(r), n = !T); a = g[s++];)
              if (a(r, t || S, n)) {
                i.push(r);
                break
              }
            o && ($ = h)
          }
          y && ((r = !a && r) && l--, e && u.push(r))
        }
        if (l += c, y && c !== l) {
          for (s = 0; a = v[s++];) a(u, d, t, n);
          if (e) {
            if (0 < l)
              for (; c--;) u[c] || d[c] || (d[c] = O.call(i));
            d = be(d)
          }
          N.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && re.uniqueSort(i)
        }
        return o && ($ = h, x = p), u
      }

      var y = 0 < v.length,
          k = 0 < g.length;
      return y ? ae(e) : e
    }

    return ge.prototype = b.filters = b.pseudos, b.setFilters = new ge, h = re.tokenize = function (e, t) {
      var n, i, o, r, s, a, l, c = E[e + " "];
      if (c) return t ? 0 : c.slice(0);
      for (s = e, a = [], l = b.preFilter; s;) {
        for (r in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = G.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(z, " ")
        }), s = s.slice(n.length)), b.filter) !(i = K[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
          value: n,
          type: r,
          matches: i
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? re.error(e) : E(e, a).slice(0)
    }, p = re.compile = function (e, t) {
      var n, i = [],
          o = [],
          r = P[e + " "];
      if (!r) {
        for (n = (t = t || h(e)).length; n--;) (r = we(t[n]))[C] ? i.push(r) : o.push(r);
        (r = P(e, Se(o, i))).selector = e
      }
      return r
    }, m = re.select = function (e, t, n, i) {
      var o, r, s, a, l, c = "function" == typeof e && e,
          u = !i && h(e = c.selector || e);
      if (n = n || [], 1 === u.length) {
        if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && T && b.relative[r[1].type]) {
          if (!(t = (b.find.ID(s.matches[0].replace(te, d), t) || [])[0])) return n;
          c && (t = t.parentNode), e = e.slice(r.shift().value.length)
        }
        for (o = K.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);)
          if ((l = b.find[a]) && (i = l(s.matches[0].replace(te, d), ee.test(r[0].type) && me(t.parentNode) || t))) {
            if (r.splice(o, 1), !(e = i.length && ve(r))) return N.apply(n, i), n;
            break
          }
      }
      return (c || p(e, u))(i, t, !T, n, !t || ee.test(e) && me(t.parentNode) || t), n
    }, f.sortStable = C.split("").sort(D).join("") === C, f.detectDuplicates = !!c, w(), f.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ce("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), f.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ce("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), le(function (e) {
      return null == e.getAttribute("disabled")
    }) || ce(F, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), re
  }(S);
  C.find = b, C.expr = b.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = b.uniqueSort, C.text = b.getText, C.isXMLDoc = b.isXML, C.contains = b.contains, C.escapeSelector = b.escape;

  function x(e, t, n) {
    for (var i = [], o = void 0 !== n;
         (e = e[t]) && 9 !== e.nodeType;)
      if (1 === e.nodeType) {
        if (o && C(e).is(n)) break;
        i.push(e)
      }
    return i
  }

  function w(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  }

  var $ = C.expr.match.needsContext,
      A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      E = /^.[^:#\[\.,]*$/;

  function P(e, n, i) {
    return C.isFunction(n) ? C.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== i
    }) : n.nodeType ? C.grep(e, function (e) {
      return e === n !== i
    }) : "string" != typeof n ? C.grep(e, function (e) {
      return -1 < o.call(n, e) !== i
    }) : E.test(n) ? C.filter(n, e, i) : (n = C.filter(n, e), C.grep(e, function (e) {
      return -1 < o.call(n, e) !== i && 1 === e.nodeType
    }))
  }

  C.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, C.fn.extend({
    find: function (e) {
      var t, n, i = this.length,
          o = this;
      if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
        for (t = 0; t < i; t++)
          if (C.contains(o[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
      return 1 < i ? C.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(P(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(P(this, e || [], !0))
    },
    is: function (e) {
      return !!P(this, "string" == typeof e && $.test(e) ? C(e) : e || [], !1).length
    }
  });
  var D, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (C.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (i[1]) {
      if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), A.test(i[1]) && C.isPlainObject(t))
        for (i in t) C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      return this
    }
    return (o = T.getElementById(i[2])) && (this[0] = o, this.length = 1), this
  }).prototype = C.fn, D = C(T);
  var O = /^(?:parents|prev(?:Until|All))/,
      M = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

  function N(e, t) {
    for (;
        (e = e[t]) && 1 !== e.nodeType;) ;
    return e
  }

  C.fn.extend({
    has: function (e) {
      var t = C(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (C.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n, i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && C(e);
      if (!$.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
              r.push(n);
              break
            }
      return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
    },
    index: function (e) {
      return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), C.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return x(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return x(e, "parentNode", n)
    },
    next: function (e) {
      return N(e, "nextSibling")
    },
    prev: function (e) {
      return N(e, "previousSibling")
    },
    nextAll: function (e) {
      return x(e, "nextSibling")
    },
    prevAll: function (e) {
      return x(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return x(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return x(e, "previousSibling", n)
    },
    siblings: function (e) {
      return w((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return w(e.firstChild)
    },
    contents: function (e) {
      return e.contentDocument || C.merge([], e.childNodes)
    }
  }, function (i, o) {
    C.fn[i] = function (e, t) {
      var n = C.map(this, o, e);
      return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (M[i] || C.uniqueSort(n), O.test(i) && n.reverse()), this.pushStack(n)
    }
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function H(e) {
    return e
  }

  function F(e) {
    throw e
  }

  function I(e, t, n) {
    var i;
    try {
      e && C.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && C.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
    } catch (e) {
      n.call(void 0, e)
    }
  }

  C.Callbacks = function (i) {
    var e, n;
    i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(L) || [], function (e, t) {
      n[t] = !0
    }), n) : C.extend({}, i);

    function o() {
      for (a = i.once, s = r = !0; c.length; u = -1)
        for (t = c.shift(); ++u < l.length;) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
      i.memory || (t = !1), r = !1, a && (l = t ? [] : "")
    }

    var r, t, s, a, l = [],
        c = [],
        u = -1,
        d = {
          add: function () {
            return l && (t && !r && (u = l.length - 1, c.push(t)), function n(e) {
              C.each(e, function (e, t) {
                C.isFunction(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== C.type(t) && n(t)
              })
            }(arguments), t && !r && o()), this
          },
          remove: function () {
            return C.each(arguments, function (e, t) {
              for (var n; -1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
            }), this
          },
          has: function (e) {
            return e ? -1 < C.inArray(e, l) : 0 < l.length
          },
          empty: function () {
            return l = l && [], this
          },
          disable: function () {
            return a = c = [], l = t = "", this
          },
          disabled: function () {
            return !l
          },
          lock: function () {
            return a = c = [], t || r || (l = t = ""), this
          },
          locked: function () {
            return !!a
          },
          fireWith: function (e, t) {
            return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), r || o()), this
          },
          fire: function () {
            return d.fireWith(this, arguments), this
          },
          fired: function () {
            return !!s
          }
        };
    return d
  }, C.extend({
    Deferred: function (e) {
      var r = [
            ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
            ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
          ],
          o = "pending",
          s = {
            state: function () {
              return o
            },
            always: function () {
              return a.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return s.then(null, e)
            },
            pipe: function () {
              var o = arguments;
              return C.Deferred(function (i) {
                C.each(r, function (e, t) {
                  var n = C.isFunction(o[t[4]]) && o[t[4]];
                  a[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && C.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                  })
                }), o = null
              }).promise()
            },
            then: function (t, n, i) {
              var l = 0;

              function c(o, r, s, a) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(o < l)) {
                      if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, C.isFunction(t) ? a ? t.call(e, c(l, r, H, a), c(l, r, F, a)) : (l++, t.call(e, c(l, r, H, a), c(l, r, F, a), c(l, r, H, r.notifyWith))) : (s !== H && (n = void 0, i = [e]), (a || r.resolveWith)(n, i))
                    }
                  }

                  var n = this,
                      i = arguments,
                      t = a ? e : function () {
                        try {
                          e()
                        } catch (e) {
                          C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== F && (n = void 0, i = [e]), r.rejectWith(n, i))
                        }
                      };
                  o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), S.setTimeout(t))
                }
              }

              return C.Deferred(function (e) {
                r[0][3].add(c(0, e, C.isFunction(i) ? i : H, e.notifyWith)), r[1][3].add(c(0, e, C.isFunction(t) ? t : H)), r[2][3].add(c(0, e, C.isFunction(n) ? n : F))
              }).promise()
            },
            promise: function (e) {
              return null != e ? C.extend(e, s) : s
            }
          },
          a = {};
      return C.each(r, function (e, t) {
        var n = t[2],
            i = t[5];
        s[t[1]] = n.add, i && n.add(function () {
          o = i
        }, r[3 - e][2].disable, r[0][2].lock), n.add(t[3].fire), a[t[0]] = function () {
          return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
        }, a[t[0] + "With"] = n.fireWith
      }), s.promise(a), e && e.call(a, a), a
    },
    when: function (e) {
      function t(t) {
        return function (e) {
          o[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(o, r)
        }
      }

      var n = arguments.length,
          i = n,
          o = Array(i),
          r = a.call(arguments),
          s = C.Deferred();
      if (n <= 1 && (I(e, s.done(t(i)).resolve, s.reject), "pending" === s.state() || C.isFunction(r[i] && r[i].then))) return s.then();
      for (; i--;) I(r[i], t(i), s.reject);
      return s.promise()
    }
  });
  var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  C.Deferred.exceptionHook = function (e, t) {
    S.console && S.console.warn && e && q.test(e.name) && S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, C.readyException = function (e) {
    S.setTimeout(function () {
      throw e
    })
  };
  var R = C.Deferred();

  function _() {
    T.removeEventListener("DOMContentLoaded", _), S.removeEventListener("load", _), C.ready()
  }

  C.fn.ready = function (e) {
    return R.then(e).catch(function (e) {
      C.readyException(e)
    }), this
  }, C.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? C.readyWait++ : C.ready(!0)
    },
    ready: function (e) {
      (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(T, [C]))
    }
  }), C.ready.then = R.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? S.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", _), S.addEventListener("load", _));

  function B(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }

  var z = function (e, t, n, i, o, r, s) {
    var a = 0,
        l = e.length,
        c = null == n;
    if ("object" === C.type(n))
      for (a in o = !0, n) z(e, t, a, n[a], !0, r, s);
    else if (void 0 !== i && (o = !0, C.isFunction(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function (e, t, n) {
      return c.call(C(e), n)
    })), t))
      for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
  };

  function W() {
    this.expando = C.expando + W.uid++
  }

  W.uid = 1, W.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, B(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var i, o = this.cache(e);
      if ("string" == typeof t) o[C.camelCase(t)] = n;
      else
        for (i in t) o[C.camelCase(i)] = t[i];
      return o
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][C.camelCase(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = C.isArray(t) ? t.map(C.camelCase) : (t = C.camelCase(t)) in i ? [t] : t.match(L) || []).length;
          for (; n--;) delete i[t[n]]
        }
        void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !C.isEmptyObject(t)
    }
  };
  var G = new W,
      U = new W,
      V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      X = /[A-Z]/g;

  function K(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType)
      if (i = "data-" + t.replace(X, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
        try {
          n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : V.test(o) ? JSON.parse(o) : o)
        } catch (e) {
        }
        U.set(e, t, n)
      } else n = void 0;
    return n
  }

  C.extend({
    hasData: function (e) {
      return U.hasData(e) || G.hasData(e)
    },
    data: function (e, t, n) {
      return U.access(e, t, n)
    },
    removeData: function (e, t) {
      U.remove(e, t)
    },
    _data: function (e, t, n) {
      return G.access(e, t, n)
    },
    _removeData: function (e, t) {
      G.remove(e, t)
    }
  }), C.fn.extend({
    data: function (n, e) {
      var t, i, o, r = this[0],
          s = r && r.attributes;
      if (void 0 !== n) return "object" == typeof n ? this.each(function () {
        U.set(this, n)
      }) : z(this, function (e) {
        var t;
        if (r && void 0 === e) {
          if (void 0 !== (t = U.get(r, n))) return t;
          if (void 0 !== (t = K(r, n))) return t
        } else this.each(function () {
          U.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0);
      if (this.length && (o = U.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
        for (t = s.length; t--;) s[t] && (0 === (i = s[t].name).indexOf("data-") && (i = C.camelCase(i.slice(5)), K(r, i, o[i])));
        G.set(r, "hasDataAttrs", !0)
      }
      return o
    },
    removeData: function (e) {
      return this.each(function () {
        U.remove(this, e)
      })
    }
  }), C.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || C.isArray(n) ? i = G.access(e, t, C.makeArray(n)) : i.push(n)), i || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = C.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = C._queueHooks(e, t);
      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        C.dequeue(e, t)
      }, r)), !i && r && r.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return G.get(e, n) || G.access(e, n, {
        empty: C.Callbacks("once memory").add(function () {
          G.remove(e, [t + "queue", n])
        })
      })
    }
  }), C.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = C.queue(this, t, n);
        C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        C.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      function n() {
        --o || r.resolveWith(s, [s])
      }

      var i, o = 1,
          r = C.Deferred(),
          s = this,
          a = this.length;
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (i = G.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
      return n(), r.promise(t)
    }
  });

  function Y(e, t, n, i) {
    var o, r, s = {};
    for (r in t) s[r] = e.style[r], e.style[r] = t[r];
    for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
    return o
  }

  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      J = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
      Z = ["Top", "Right", "Bottom", "Left"],
      ee = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
      };

  function te(e, t, n, i) {
    var o, r = 1,
        s = 20,
        a = i ? function () {
          return i.cur()
        } : function () {
          return C.css(e, t, "")
        },
        l = a(),
        c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
        u = (C.cssNumber[t] || "px" !== c && +l) && J.exec(C.css(e, t));
    if (u && u[3] !== c)
      for (c = c || u[3], n = n || [], u = +l || 1; u /= r = r || ".5", C.style(e, t, u + c), r !== (r = a() / l) && 1 !== r && --s;) ;
    return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
  }

  var ne = {};

  function ie(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = G.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ee(i) && (o[r] = (d = c = l = void 0, c = (a = i).ownerDocument, u = a.nodeName, (d = ne[u]) || (l = c.body.appendChild(c.createElement(u)), d = C.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), ne[u] = d)))) : "none" !== n && (o[r] = "none", G.set(i, "display", n)));
    var a, l, c, u, d;
    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
    return e
  }

  C.fn.extend({
    show: function () {
      return ie(this, !0)
    },
    hide: function () {
      return ie(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? C(this).show() : C(this).hide()
      })
    }
  });
  var oe = /^(?:checkbox|radio)$/i,
      re = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      se = /^$|\/(?:java|ecma)script/i,
      ae = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

  function le(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && C.nodeName(e, t) ? C.merge([e], n) : n
  }

  function ce(e, t) {
    for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
  }

  ae.optgroup = ae.option, ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead, ae.th = ae.td;
  var ue, de, pe = /<|&#?\w+;/;

  function fe(e, t, n, i, o) {
    for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
      if ((r = e[f]) || 0 === r)
        if ("object" === C.type(r)) C.merge(p, r.nodeType ? [r] : r);
        else if (pe.test(r)) {
          for (s = s || d.appendChild(t.createElement("div")), a = (re.exec(r) || ["", ""])[1].toLowerCase(), l = ae[a] || ae._default, s.innerHTML = l[1] + C.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
          C.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
    for (d.textContent = "", f = 0; r = p[f++];)
      if (i && -1 < C.inArray(r, i)) o && o.push(r);
      else if (c = C.contains(r.ownerDocument, r), s = le(d.appendChild(r), "script"), c && ce(s), n)
        for (u = 0; r = s[u++];) se.test(r.type || "") && n.push(r);
    return d
  }

  ue = T.createDocumentFragment().appendChild(T.createElement("div")), (de = T.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), ue.appendChild(de), g.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue;
  var he = T.documentElement,
      me = /^key/,
      ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ve = /^([^.]*)(?:\.(.+)|)/;

  function ye() {
    return !0
  }

  function ke() {
    return !1
  }

  function be() {
    try {
      return T.activeElement
    } catch (e) {
    }
  }

  function xe(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) xe(e, a, n, i, t[a], r);
      return e
    }
    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ke;
    else if (!o) return e;
    return 1 === r && (s = o, (o = function (e) {
      return C().off(e), s.apply(this, arguments)
    }).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
      C.event.add(this, t, o, i, n)
    })
  }

  C.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var r, s, a, l, c, u, d, p, f, h, m, g = G.get(t);
      if (g)
        for (n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(he, o), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
          return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
        }), c = (e = (e || "").match(L) || [""]).length; c--;) f = m = (a = ve.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = C.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = C.event.special[f] || {}, u = C.extend({
          type: f,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: o,
          needsContext: o && C.expr.match.needsContext.test(o),
          namespace: h.join(".")
        }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), C.event.global[f] = !0)
    },
    remove: function (e, t, n, i, o) {
      var r, s, a, l, c, u, d, p, f, h, m, g = G.hasData(e) && G.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(L) || [""]).length; c--;)
          if (f = m = (a = ve.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
            for (d = C.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
            s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, f, g.handle), delete l[f])
          } else
            for (f in l) C.event.remove(e, f + t[c], n, i, !0);
        C.isEmptyObject(l) && G.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, i, o, r, s, a = C.event.fix(e),
          l = new Array(arguments.length),
          c = (G.get(this, "events") || {})[a.type] || [],
          u = C.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = C.event.handlers.call(this, a, c), t = 0;
             (o = s[t++]) && !a.isPropagationStopped();)
          for (a.currentTarget = o.elem, n = 0;
               (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (e, t) {
      var n, i, o, r, s, a = [],
          l = t.delegateCount,
          c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length), s[o] && r.push(i);
            r.length && a.push({
              elem: c,
              handlers: r
            })
          }
      return c = this, l < t.length && a.push({
        elem: c,
        handlers: t.slice(l)
      }), a
    },
    addProp: function (t, e) {
      Object.defineProperty(C.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: C.isFunction(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function (e) {
      return e[C.expando] ? e : new C.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== be() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === be() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && C.nodeName(this, "input")) return this.click(), !1
        },
        _default: function (e) {
          return C.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, C.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, C.Event = function (e, t) {
    return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void (this[C.expando] = !0)) : new C.Event(e, t)
  }, C.Event.prototype = {
    constructor: C.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = ye, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = ye, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ye, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, C.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, C.event.addProp), C.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, o) {
    C.event.special[e] = {
      delegateType: o,
      bindType: o,
      handle: function (e) {
        var t, n = e.relatedTarget,
            i = e.handleObj;
        return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
      }
    }
  }), C.fn.extend({
    on: function (e, t, n, i) {
      return xe(this, e, t, n, i)
    },
    one: function (e, t, n, i) {
      return xe(this, e, t, n, i, 1)
    },
    off: function (e, t, n) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        C.event.remove(this, e, n, t)
      });
      for (o in e) this.off(o, t, e[o]);
      return this
    }
  });
  var we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Se = /<script|<style|<link/i,
      Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ce = /^true\/(.*)/,
      $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ae(e, t) {
    return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
  }

  function Ee(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Pe(e) {
    var t = Ce.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function De(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (G.hasData(e) && (r = G.access(e), s = G.set(t, r), c = r.events))
        for (o in delete s.handle, s.events = {}, c)
          for (n = 0, i = c[o].length; n < i; n++) C.event.add(t, o, c[o][n]);
      U.hasData(e) && (a = U.access(e), l = C.extend({}, a), U.set(t, l))
    }
  }

  function je(n, i, o, r) {
    i = m.apply([], i);
    var e, t, s, a, l, c, u = 0,
        d = n.length,
        p = d - 1,
        f = i[0],
        h = C.isFunction(f);
    if (h || 1 < d && "string" == typeof f && !g.checkClone && Te.test(f)) return n.each(function (e) {
      var t = n.eq(e);
      h && (i[0] = f.call(this, e, t.html())), je(t, i, o, r)
    });
    if (d && (t = (e = fe(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
      for (a = (s = C.map(le(e, "script"), Ee)).length; u < d; u++) l = e, u !== p && (l = C.clone(l, !0, !0), a && C.merge(s, le(l, "script"))), o.call(n[u], l, u);
      if (a)
        for (c = s[s.length - 1].ownerDocument, C.map(s, Pe), u = 0; u < a; u++) l = s[u], se.test(l.type || "") && !G.access(l, "globalEval") && C.contains(c, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : v(l.textContent.replace($e, ""), c))
    }
    return n
  }

  function Oe(e, t, n) {
    for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(le(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && ce(le(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  C.extend({
    htmlPrefilter: function (e) {
      return e.replace(we, "<$1></$2>")
    },
    clone: function (e, t, n) {
      var i, o, r, s, a, l, c, u = e.cloneNode(!0),
          d = C.contains(e.ownerDocument, e);
      if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
        for (s = le(u), i = 0, o = (r = le(e)).length; i < o; i++) a = r[i], l = s[i], "input" === (c = l.nodeName.toLowerCase()) && oe.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      if (t)
        if (n)
          for (r = r || le(e), s = s || le(u), i = 0, o = r.length; i < o; i++) De(r[i], s[i]);
        else De(e, u);
      return 0 < (s = le(u, "script")).length && ce(s, !d && le(e, "script")), u
    },
    cleanData: function (e) {
      for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (B(n)) {
          if (t = n[G.expando]) {
            if (t.events)
              for (i in t.events) o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
            n[G.expando] = void 0
          }
          n[U.expando] && (n[U.expando] = void 0)
        }
    }
  }), C.fn.extend({
    detach: function (e) {
      return Oe(this, e, !0)
    },
    remove: function (e) {
      return Oe(this, e)
    },
    text: function (e) {
      return z(this, function (e) {
        return void 0 === e ? C.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return je(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return je(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ae(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return je(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return je(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(le(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return C.clone(this, e, t)
      })
    },
    html: function (e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Se.test(e) && !ae[(re.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = C.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(le(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var n = [];
      return je(this, arguments, function (e) {
        var t = this.parentNode;
        C.inArray(this, n) < 0 && (C.cleanData(le(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), C.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, s) {
    C.fn[e] = function (e) {
      for (var t, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), C(i[r])[s](t), l.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var Me, Ne, Le, He, Fe, Ie, qe = /^margin/,
      Re = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
      _e = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = S), t.getComputedStyle(e)
      };

  function Be() {
    if (Ie) {
      Ie.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", Ie.innerHTML = "", he.appendChild(Fe);
      var e = S.getComputedStyle(Ie);
      Me = "1%" !== e.top, He = "2px" === e.marginLeft, Ne = "4px" === e.width, Ie.style.marginRight = "50%", Le = "4px" === e.marginRight, he.removeChild(Fe), Ie = null
    }
  }

  function ze(e, t, n) {
    var i, o, r, s, a = e.style;
    return (n = n || _e(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !g.pixelMarginRight() && Re.test(s) && qe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
  }

  function We(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  Fe = T.createElement("div"), (Ie = T.createElement("div")).style && (Ie.style.backgroundClip = "content-box", Ie.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === Ie.style.backgroundClip, Fe.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", Fe.appendChild(Ie), C.extend(g, {
    pixelPosition: function () {
      return Be(), Me
    },
    boxSizingReliable: function () {
      return Be(), Ne
    },
    pixelMarginRight: function () {
      return Be(), Le
    },
    reliableMarginLeft: function () {
      return Be(), He
    }
  }));
  var Ge = /^(none|table(?!-c[ea]).+)/,
      Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Ve = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Xe = ["Webkit", "Moz", "ms"],
      Ke = T.createElement("div").style;

  function Ye(e) {
    if (e in Ke) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
      if ((e = Xe[n] + t) in Ke) return e
  }

  function Qe(e, t, n) {
    var i = J.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function Je(e, t, n, i, o) {
    var r, s = 0;
    for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += C.css(e, n + Z[r], !0, o)), i ? ("content" === n && (s -= C.css(e, "padding" + Z[r], !0, o)), "margin" !== n && (s -= C.css(e, "border" + Z[r] + "Width", !0, o))) : (s += C.css(e, "padding" + Z[r], !0, o), "padding" !== n && (s += C.css(e, "border" + Z[r] + "Width", !0, o)));
    return s
  }

  function Ze(e, t, n) {
    var i, o = !0,
        r = _e(e),
        s = "border-box" === C.css(e, "boxSizing", !1, r);
    if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
      if (((i = ze(e, t, r)) < 0 || null == i) && (i = e.style[t]), Re.test(i)) return i;
      o = s && (g.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + Je(e, t, n || (s ? "border" : "content"), o, r) + "px"
  }

  function et(e, t, n, i, o) {
    return new et.prototype.init(e, t, n, i, o)
  }

  C.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = ze(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, r, s, a = C.camelCase(t),
            l = e.style;
        return t = C.cssProps[a] || (C.cssProps[a] = Ye(a) || a), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : ("string" === (r = typeof n) && (o = J.exec(n)) && o[1] && (n = te(e, t, o), r = "number"), void (null != n && n == n && ("number" === r && (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
      }
    },
    css: function (e, t, n, i) {
      var o, r, s, a = C.camelCase(t);
      return t = C.cssProps[a] || (C.cssProps[a] = Ye(a) || a), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = ze(e, t, i)), "normal" === o && t in Ve && (o = Ve[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
    }
  }), C.each(["height", "width"], function (e, s) {
    C.cssHooks[s] = {
      get: function (e, t, n) {
        if (t) return !Ge.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, s, n) : Y(e, Ue, function () {
          return Ze(e, s, n)
        })
      },
      set: function (e, t, n) {
        var i, o = n && _e(e),
            r = n && Je(e, s, n, "border-box" === C.css(e, "boxSizing", !1, o), o);
        return r && (i = J.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = C.css(e, s)), Qe(0, t, r)
      }
    }
  }), C.cssHooks.marginLeft = We(g.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - Y(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), C.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (o, r) {
    C.cssHooks[o + r] = {
      expand: function (e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + Z[t] + r] = i[t] || i[t - 2] || i[0];
        return n
      }
    }, qe.test(o) || (C.cssHooks[o + r].set = Qe)
  }), C.fn.extend({
    css: function (e, t) {
      return z(this, function (e, t, n) {
        var i, o, r = {},
            s = 0;
        if (C.isArray(t)) {
          for (i = _e(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, i);
          return r
        }
        return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((C.Tween = et).prototype = {
    constructor: et,
    init: function (e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function (e) {
        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, C.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, C.fx = et.prototype.init, C.fx.step = {};
  var tt, nt, it, ot, rt = /^(?:toggle|show|hide)$/,
      st = /queueHooks$/;

  function at() {
    nt && (S.requestAnimationFrame(at), C.fx.tick())
  }

  function lt() {
    return S.setTimeout(function () {
      tt = void 0
    }), tt = C.now()
  }

  function ct(e, t) {
    var n, i = 0,
        o = {
          height: e
        };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = Z[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o
  }

  function ut(e, t, n) {
    for (var i, o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), r = 0, s = o.length; r < s; r++)
      if (i = o[r].call(n, t, e)) return i
  }

  function dt(r, e, t) {
    var n, s, i = 0,
        o = dt.prefilters.length,
        a = C.Deferred().always(function () {
          delete l.elem
        }),
        l = function () {
          if (s) return !1;
          for (var e = tt || lt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
          return a.notifyWith(r, [c, n, t]), n < 1 && o ? t : (a.resolveWith(r, [c]), !1)
        },
        c = a.promise({
          elem: r,
          props: C.extend({}, e),
          opts: C.extend(!0, {
            specialEasing: {},
            easing: C.easing._default
          }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: tt || lt(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var n = C.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
            return c.tweens.push(n), n
          },
          stop: function (e) {
            var t = 0,
                n = e ? c.tweens.length : 0;
            if (s) return this;
            for (s = !0; t < n; t++) c.tweens[t].run(1);
            return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this
          }
        }),
        u = c.props;
    for (function (e, t) {
      var n, i, o, r, s;
      for (n in e)
        if (o = t[i = C.camelCase(n)], r = e[n], C.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
          for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
        else t[i] = o
    }(u, c.opts.specialEasing); i < o; i++)
      if (n = dt.prefilters[i].call(c, r, u, c.opts)) return C.isFunction(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(n.stop, n)), n;
    return C.map(u, ut, c), C.isFunction(c.opts.start) && c.opts.start.call(r, c), C.fx.timer(C.extend(l, {
      elem: r,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  C.Animation = C.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, J.exec(t), n), n
      }]
    },
    tweener: function (e, t) {
      for (var n, i = 0, o = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(L)).length; i < o; i++) n = e[i], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
    },
    prefilters: [function (e, t, n) {
      var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          m = e.nodeType && ee(e),
          g = G.get(e, "fxshow");
      for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a()
      }), s.unqueued++, p.always(function () {
        p.always(function () {
          s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
        })
      })), t)
        if (o = t[i], rt.test(o)) {
          if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[i]) continue;
            m = !0
          }
          f[i] = g && g[i] || C.style(e, i)
        }
      if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
        for (i in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = G.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (ie([e], !0), c = e.style.display || c, u = C.css(e, "display"), ie([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (p.done(function () {
          h.display = c
        }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        })), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {
          display: c
        }), r && (g.hidden = !m), m && ie([e], !0), p.done(function () {
          for (i in m || ie([e]), G.remove(e, "fxshow"), f) C.style(e, i, f[i])
        })), l = ut(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
    }],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
    }
  }), C.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? C.extend({}, e) : {
      complete: n || !n && t || C.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !C.isFunction(t) && t
    };
    return C.fx.off || T.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
    }, i
  }, C.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i)
    },
    animate: function (t, e, n, i) {
      function o() {
        var e = dt(this, C.extend({}, t), s);
        (r || G.get(this, "finish")) && e.stop(!0)
      }

      var r = C.isEmptyObject(t),
          s = C.speed(e, n, i);
      return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
    },
    stop: function (o, e, r) {
      function s(e) {
        var t = e.stop;
        delete e.stop, t(r)
      }

      return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
        var e = !0,
            t = null != o && o + "queueHooks",
            n = C.timers,
            i = G.get(this);
        if (t) i[t] && i[t].stop && s(i[t]);
        else
          for (t in i) i[t] && i[t].stop && st.test(t) && s(i[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
        !e && r || C.dequeue(this, o)
      })
    },
    finish: function (s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var e, t = G.get(this),
            n = t[s + "queue"],
            i = t[s + "queueHooks"],
            o = C.timers,
            r = n ? n.length : 0;
        for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), C.each(["toggle", "show", "hide"], function (e, i) {
    var o = C.fn[i];
    C.fn[i] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ct(i, !0), e, t, n)
    }
  }), C.each({
    slideDown: ct("show"),
    slideUp: ct("hide"),
    slideToggle: ct("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, i) {
    C.fn[e] = function (e, t, n) {
      return this.animate(i, e, t, n)
    }
  }), C.timers = [], C.fx.tick = function () {
    var e, t = 0,
        n = C.timers;
    for (tt = C.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || C.fx.stop(), tt = void 0
  }, C.fx.timer = function (e) {
    C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
  }, C.fx.interval = 13, C.fx.start = function () {
    nt = nt || (S.requestAnimationFrame ? S.requestAnimationFrame(at) : S.setInterval(C.fx.tick, C.fx.interval))
  }, C.fx.stop = function () {
    S.cancelAnimationFrame ? S.cancelAnimationFrame(nt) : S.clearInterval(nt), nt = null
  }, C.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, C.fn.delay = function (i, e) {
    return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
      var n = S.setTimeout(e, i);
      t.stop = function () {
        S.clearTimeout(n)
      }
    })
  }, it = T.createElement("input"), ot = T.createElement("select").appendChild(T.createElement("option")), it.type = "checkbox", g.checkOn = "" !== it.value, g.optSelected = ot.selected, (it = T.createElement("input")).value = "t", it.type = "radio", g.radioValue = "t" === it.value;
  var pt, ft = C.expr.attrHandle;
  C.fn.extend({
    attr: function (e, t) {
      return z(this, C.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        C.removeAttr(this, e)
      })
    }
  }), C.extend({
    attr: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!g.radioValue && "radio" === t && C.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, i = 0,
          o = t && t.match(L);
      if (o && 1 === e.nodeType)
        for (; n = o[i++];) e.removeAttribute(n)
    }
  }), pt = {
    set: function (e, t, n) {
      return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var s = ft[t] || C.find.attr;
    ft[t] = function (e, t, n) {
      var i, o, r = t.toLowerCase();
      return n || (o = ft[r], ft[r] = i, i = null != s(e, t, n) ? r : null, ft[r] = o), i
    }
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      mt = /^(?:a|area)$/i;

  function gt(e) {
    return (e.match(L) || []).join(" ")
  }

  function vt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  C.fn.extend({
    prop: function (e, t) {
      return z(this, C.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[C.propFix[e] || e]
      })
    }
  }), C.extend({
    prop: function (e, t, n) {
      var i, o, r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = C.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), g.optSelected || (C.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    C.propFix[this.toLowerCase()] = this
  }), C.fn.extend({
    addClass: function (t) {
      var e, n, i, o, r, s, a, l = 0;
      if (C.isFunction(t)) return this.each(function (e) {
        C(this).addClass(t.call(this, e, vt(this)))
      });
      if ("string" == typeof t && t)
        for (e = t.match(L) || []; n = this[l++];)
          if (o = vt(n), i = 1 === n.nodeType && " " + gt(o) + " ") {
            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            o !== (a = gt(i)) && n.setAttribute("class", a)
          }
      return this
    },
    removeClass: function (t) {
      var e, n, i, o, r, s, a, l = 0;
      if (C.isFunction(t)) return this.each(function (e) {
        C(this).removeClass(t.call(this, e, vt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t)
        for (e = t.match(L) || []; n = this[l++];)
          if (o = vt(n), i = 1 === n.nodeType && " " + gt(o) + " ") {
            for (s = 0; r = e[s++];)
              for (; -1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
            o !== (a = gt(i)) && n.setAttribute("class", a)
          }
      return this
    },
    toggleClass: function (o, t) {
      var r = typeof o;
      return "boolean" == typeof t && "string" == r ? t ? this.addClass(o) : this.removeClass(o) : C.isFunction(o) ? this.each(function (e) {
        C(this).toggleClass(o.call(this, e, vt(this), t), t)
      }) : this.each(function () {
        var e, t, n, i;
        if ("string" == r)
          for (t = 0, n = C(this), i = o.match(L) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        else void 0 !== o && "boolean" != r || ((e = vt(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && G.get(this, "__className__") || ""))
      })
    },
    hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];)
        if (1 === n.nodeType && -1 < (" " + gt(vt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var yt = /\r/g;
  C.fn.extend({
    val: function (n) {
      var i, e, o, t = this[0];
      return arguments.length ? (o = C.isFunction(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = o ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
      })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
    }
  }), C.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = C.find.attr(e, "value");
          return null != t ? t : gt(C.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, i, o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
          for (i = r < 0 ? l : s ? r : 0; i < l; i++)
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !C.nodeName(n.parentNode, "optgroup"))) {
              if (t = C(n).val(), s) return t;
              a.push(t)
            }
          return a
        },
        set: function (e, t) {
          for (var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--;) ((i = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0);
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), C.each(["radio", "checkbox"], function () {
    C.valHooks[this] = {
      set: function (e, t) {
        if (C.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
      }
    }, g.checkOn || (C.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var kt = /^(?:focusinfocus|focusoutblur)$/;
  C.extend(C.event, {
    trigger: function (e, t, n, i) {
      var o, r, s, a, l, c, u, d = [n || T],
          p = h.call(e, "type") ? e.type : e,
          f = h.call(e, "namespace") ? e.namespace.split(".") : [];
      if (r = s = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !kt.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
        if (!i && !u.noBubble && !C.isWindow(n)) {
          for (a = u.delegateType || p, kt.test(a + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), s = r;
          s === (n.ownerDocument || T) && d.push(s.defaultView || s.parentWindow || S)
        }
        for (o = 0;
             (r = d[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? a : u.bindType || p, (c = (G.get(r, "events") || {})[e.type] && G.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && B(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
        return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !B(n) || l && C.isFunction(n[p]) && !C.isWindow(n) && ((s = n[l]) && (n[l] = null), n[C.event.triggered = p](), C.event.triggered = void 0, s && (n[l] = s)), e.result
      }
    },
    simulate: function (e, t, n) {
      var i = C.extend(new C.Event, n, {
        type: e,
        isSimulated: !0
      });
      C.event.trigger(i, null, t)
    }
  }), C.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        C.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return C.event.trigger(e, t, n, !0)
    }
  }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    C.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), C.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), g.focusin = "onfocusin" in S, g.focusin || C.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, i) {
    function o(e) {
      C.event.simulate(i, e.target, C.event.fix(e))
    }

    C.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this,
            t = G.access(e, i);
        t || e.addEventListener(n, o, !0), G.access(e, i, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this,
            t = G.access(e, i) - 1;
        t ? G.access(e, i, t) : (e.removeEventListener(n, o, !0), G.remove(e, i))
      }
    }
  });
  var bt = S.location,
      xt = C.now(),
      wt = /\?/;
  C.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new S.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
  };
  var St = /\[\]$/,
      Tt = /\r?\n/g,
      Ct = /^(?:submit|button|image|reset|file)$/i,
      $t = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, i, o) {
    var t;
    if (C.isArray(e)) C.each(e, function (e, t) {
      i || St.test(n) ? o(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
    });
    else if (i || "object" !== C.type(e)) o(n, e);
    else
      for (t in e) At(n + "[" + t + "]", e[t], i, o)
  }

  C.param = function (e, t) {
    function n(e, t) {
      var n = C.isFunction(t) ? t() : t;
      o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    }

    var i, o = [];
    if (C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
      n(this.name, this.value)
    });
    else
      for (i in e) At(i, e[i], t, n);
    return o.join("&")
  }, C.fn.extend({
    serialize: function () {
      return C.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = C.prop(this, "elements");
        return e ? C.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !C(this).is(":disabled") && $t.test(this.nodeName) && !Ct.test(e) && (this.checked || !oe.test(e))
      }).map(function (e, t) {
        var n = C(this).val();
        return null == n ? null : C.isArray(n) ? C.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Tt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Tt, "\r\n")
        }
      }).get()
    }
  });
  var Et = /%20/g,
      Pt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      Nt = {},
      Lt = {},
      Ht = "*/".concat("*"),
      Ft = T.createElement("a");

  function It(r) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, i = 0,
          o = e.toLowerCase().match(L) || [];
      if (C.isFunction(t))
        for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
    }
  }

  function qt(t, o, r, s) {
    var a = {},
        l = t === Lt;

    function c(e) {
      var i;
      return a[e] = !0, C.each(t[e] || [], function (e, t) {
        var n = t(o, r, s);
        return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
      }), i
    }

    return c(o.dataTypes[0]) || !a["*"] && c("*")
  }

  function Rt(e, t) {
    var n, i, o = C.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
    return i && C.extend(!0, e, i), e
  }

  Ft.href = bt.href, C.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Ht,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": C.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Rt(Rt(e, C.ajaxSettings), t) : Rt(C.ajaxSettings, e)
    },
    ajaxPrefilter: It(Nt),
    ajaxTransport: It(Lt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var u, d, p, n, f, i, h, m, o, r, g = C.ajaxSetup({}, t),
          v = g.context || g,
          y = g.context && (v.nodeType || v.jquery) ? C(v) : C.event,
          k = C.Deferred(),
          b = C.Callbacks("once memory"),
          x = g.statusCode || {},
          s = {},
          a = {},
          l = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; t = jt.exec(p);) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function () {
              return h ? p : null
            },
            setRequestHeader: function (e, t) {
              return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
            },
            overrideMimeType: function (e) {
              return null == h && (g.mimeType = e), this
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) w.always(e[w.status]);
                else
                  for (t in e) x[t] = [x[t], e[t]];
              return this
            },
            abort: function (e) {
              var t = e || l;
              return u && u.abort(t), c(0, t), this
            }
          };
      if (k.promise(w), g.url = ((e || g.url || bt.href) + "").replace(Mt, bt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
        i = T.createElement("a");
        try {
          i.href = g.url, i.href = i.href, g.crossDomain = Ft.protocol + "//" + Ft.host != i.protocol + "//" + i.host
        } catch (e) {
          g.crossDomain = !0
        }
      }
      if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), qt(Nt, g, t, w), h) return w;
      for (o in (m = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ot.test(g.type), d = g.url.replace(Pt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Et, "+")) : (r = g.url.slice(d.length), g.data && (d += (wt.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(Dt, "$1"), r = (wt.test(d) ? "&" : "?") + "_=" + xt++ + r), g.url = d + r), g.ifModified && (C.lastModified[d] && w.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && w.setRequestHeader("If-None-Match", C.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && w.setRequestHeader("Content-Type", g.contentType), w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : g.accepts["*"]), g.headers) w.setRequestHeader(o, g.headers[o]);
      if (g.beforeSend && (!1 === g.beforeSend.call(v, w, g) || h)) return w.abort();
      if (l = "abort", b.add(g.complete), w.done(g.success), w.fail(g.error), u = qt(Lt, g, t, w)) {
        if (w.readyState = 1, m && y.trigger("ajaxSend", [w, g]), h) return w;
        g.async && 0 < g.timeout && (f = S.setTimeout(function () {
          w.abort("timeout")
        }, g.timeout));
        try {
          h = !1, u.send(s, c)
        } catch (e) {
          if (h) throw e;
          c(-1, e)
        }
      } else c(-1, "No Transport");

      function c(e, t, n, i) {
        var o, r, s, a, l, c = t;
        h || (h = !0, f && S.clearTimeout(f), u = void 0, p = i || "", w.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
          for (var i, o, r, s, a = e.contents, l = e.dataTypes;
               "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i)
            for (o in a)
              if (a[o] && a[o].test(i)) {
                l.unshift(o);
                break
              }
          if (l[0] in n) r = l[0];
          else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                r = o;
                break
              }
              s = s || o
            }
            r = r || s
          }
          if (r) return r !== l[0] && l.unshift(r), n[r]
        }(g, w, n)), a = function (e, t, n, i) {
          var o, r, s, a, l, c = {},
              u = e.dataTypes.slice();
          if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
          for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
              if ("*" === r) r = l;
              else if ("*" !== l && l !== r) {
                if (!(s = c[l + " " + r] || c["* " + r]))
                  for (o in c)
                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                      !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                      break
                    }
                if (!0 !== s)
                  if (s && e.throws) t = s(t);
                  else try {
                    t = s(t)
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: s ? e : "No conversion from " + l + " to " + r
                    }
                  }
              }
          return {
            state: "success",
            data: t
          }
        }(g, a, w, o), o ? (g.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (C.lastModified[d] = l), (l = w.getResponseHeader("etag")) && (C.etag[d] = l)), 204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || c) + "", o ? k.resolveWith(v, [r, c, w]) : k.rejectWith(v, [w, c, s]), w.statusCode(x), x = void 0, m && y.trigger(o ? "ajaxSuccess" : "ajaxError", [w, g, o ? r : s]), b.fireWith(v, [w, c]), m && (y.trigger("ajaxComplete", [w, g]), --C.active || C.event.trigger("ajaxStop")))
      }

      return w
    },
    getJSON: function (e, t, n) {
      return C.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return C.get(e, void 0, t, "script")
    }
  }), C.each(["get", "post"], function (e, o) {
    C[o] = function (e, t, n, i) {
      return C.isFunction(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
        url: e,
        type: o,
        dataType: i,
        data: t,
        success: n
      }, C.isPlainObject(e) && e))
    }
  }), C._evalUrl = function (e) {
    return C.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    })
  }, C.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (C.isFunction(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (n) {
      return C.isFunction(n) ? this.each(function (e) {
        C(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = C(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function (t) {
      var n = C.isFunction(t);
      return this.each(function (e) {
        C(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        C(this).replaceWith(this.childNodes)
      }), this
    }
  }), C.expr.pseudos.hidden = function (e) {
    return !C.expr.pseudos.visible(e)
  }, C.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, C.ajaxSettings.xhr = function () {
    try {
      return new S.XMLHttpRequest
    } catch (e) {
    }
  };
  var _t = {
        0: 200,
        1223: 204
      },
      Bt = C.ajaxSettings.xhr();
  g.cors = !!Bt && "withCredentials" in Bt, g.ajax = Bt = !!Bt, C.ajaxTransport(function (o) {
    var r, s;
    if (g.cors || Bt && !o.crossDomain) return {
      send: function (e, t) {
        var n, i = o.xhr();
        if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
          for (n in o.xhrFields) i[n] = o.xhrFields[n];
        for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
        r = function (e) {
          return function () {
            r && (r = s = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(_t[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
              binary: i.response
            } : {
              text: i.responseText
            }, i.getAllResponseHeaders()))
          }
        }, i.onload = r(), s = i.onerror = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
          4 === i.readyState && S.setTimeout(function () {
            r && s()
          })
        }, r = r("abort");
        try {
          i.send(o.hasContent && o.data || null)
        } catch (e) {
          if (r) throw e
        }
      },
      abort: function () {
        r && r()
      }
    }
  }), C.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), C.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return C.globalEval(e), e
      }
    }
  }), C.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), C.ajaxTransport("script", function (n) {
    var i, o;
    if (n.crossDomain) return {
      send: function (e, t) {
        i = C("<script>").prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", o = function (e) {
          i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), T.head.appendChild(i[0])
      },
      abort: function () {
        o && o()
      }
    }
  });
  var zt, Wt = [],
      Gt = /(=)\?(?=&|$)|\?\?/;

  function Ut(e) {
    return C.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }

  C.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Wt.pop() || C.expando + "_" + xt++;
      return this[e] = !0, e
    }
  }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
    var i, o, r,
        s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
      return r || C.error(i + " was not called"), r[0]
    }, e.dataTypes[0] = "json", o = S[i], S[i] = function () {
      r = arguments
    }, n.always(function () {
      void 0 === o ? C(S).removeProp(i) : S[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Wt.push(i)), r && C.isFunction(o) && o(r[0]), r = o = void 0
    }), "script"
  }), g.createHTMLDocument = ((zt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), C.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), r = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = fe([e], t, r), r && r.length && C(r).remove(), C.merge([], o.childNodes)));
    var i, o, r
  }, C.fn.load = function (e, t, n) {
    var i, o, r, s = this,
        a = e.indexOf(" ");
    return -1 < a && (i = gt(e.slice(a)), e = e.slice(0, a)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && C.ajax({
      url: e,
      type: o || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      r = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, r || [e.responseText, t, e])
      })
    }), this
  }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    C.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), C.expr.pseudos.animated = function (t) {
    return C.grep(C.timers, function (e) {
      return t === e.elem
    }).length
  }, C.offset = {
    setOffset: function (e, t, n) {
      var i, o, r, s, a, l, c = C.css(e, "position"),
          u = C(e),
          d = {};
      "static" === c && (e.style.position = "relative"), a = u.offset(), r = C.css(e, "top"), l = C.css(e, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
    }
  }, C.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        C.offset.setOffset(this, t, e)
      });
      var e, n, i, o, r = this[0];
      return r ? r.getClientRects().length ? (i = r.getBoundingClientRect()).width || i.height ? (n = Ut(o = r.ownerDocument), e = o.documentElement, {
        top: i.top + n.pageYOffset - e.clientTop,
        left: i.left + n.pageXOffset - e.clientLeft
      }) : i : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e, t, n = this[0],
            i = {
              top: 0,
              left: 0
            };
        return "fixed" === C.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (i = e.offset()), i = {
          top: i.top + C.css(e[0], "borderTopWidth", !0),
          left: i.left + C.css(e[0], "borderLeftWidth", !0)
        }), {
          top: t.top - i.top - C.css(n, "marginTop", !0),
          left: t.left - i.left - C.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
        return e || he
      })
    }
  }), C.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, o) {
    var r = "pageYOffset" === o;
    C.fn[t] = function (e) {
      return z(this, function (e, t, n) {
        var i = Ut(e);
        return void 0 === n ? i ? i[o] : e[t] : void (i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n)
      }, t, e, arguments.length)
    }
  }), C.each(["top", "left"], function (e, n) {
    C.cssHooks[n] = We(g.pixelPosition, function (e, t) {
      if (t) return t = ze(e, n), Re.test(t) ? C(e).position()[n] + "px" : t
    })
  }), C.each({
    Height: "height",
    Width: "width"
  }, function (s, a) {
    C.each({
      padding: "inner" + s,
      content: a,
      "": "outer" + s
    }, function (i, r) {
      C.fn[r] = function (e, t) {
        var n = arguments.length && (i || "boolean" != typeof e),
            o = i || (!0 === e || !0 === t ? "margin" : "border");
        return z(this, function (e, t, n) {
          var i;
          return C.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
        }, a, n ? e : void 0, n)
      }
    })
  }), C.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), C.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
    return C
  });
  var Vt = S.jQuery,
      Xt = S.$;
  return C.noConflict = function (e) {
    return S.$ === C && (S.$ = Xt), e && S.jQuery === C && (S.jQuery = Vt), C
  }, e || (S.jQuery = S.$ = C), C
}),
    function (e) {
      "use strict";
      "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (c) {
      "use strict";
      var o, s = window.Slick || {};
      o = 0, (s = function (e, t) {
        var n, i = this;
        i.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: c(e),
          appendDots: c(e),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, t) {
            return c('<button type="button" />').text(t + 1)
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: .35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }, i.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(e).data("slick") || {}, i.options = c.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
      }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
        }).find("a, input, button, select").attr({
          tabindex: "0"
        })
      }, s.prototype.addSlide = s.prototype.slickAdd = function (e, t, n) {
        var i = this;
        if ("boolean" == typeof t) n = t, t = null;
        else if (t < 0 || t >= i.slideCount) return !1;
        i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (e, t) {
          c(t).attr("data-slick-index", e)
        }), i.$slidesCache = i.$slides, i.reinit()
      }, s.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({
            height: t
          }, e.options.speed)
        }
      }, s.prototype.animateSlide = function (e, t) {
        var n = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
          left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
          top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
          animStart: i.currentLeft
        }).animate({
          animStart: e
        }, {
          duration: i.options.speed,
          easing: i.options.easing,
          step: function (e) {
            e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
          },
          complete: function () {
            t && t.call()
          }
        })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function () {
          i.disableTransition(), t.call()
        }, i.options.speed))
      }, s.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = c(e).not(this.$slider)), e
      }, s.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function () {
          var e = c(this).slick("getSlick");
          e.unslicked || e.slideHandler(t, !0)
        })
      }, s.prototype.applyTransition = function (e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
      }, s.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
      }, s.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
      }, s.prototype.autoPlayIterator = function () {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
      }, s.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        }))
      }, s.prototype.buildDots = function () {
        var e, t, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
          for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
          n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
      }, s.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
          c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
      }, s.prototype.buildRows = function () {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), 0 < a.options.rows) {
          for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var u = e * s + (t * a.options.slidesPerRow + n);
                r.get(u) && c.appendChild(r.get(u))
              }
              l.appendChild(c)
            }
            i.appendChild(l)
          }
          a.$slider.empty().append(i), a.$slider.children().children().children().css({
            width: 100 / a.options.slidesPerRow + "%",
            display: "inline-block"
          })
        }
      }, s.prototype.checkResponsive = function (e, t) {
        var n, i, o, r = this,
            s = !1,
            a = r.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
          for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
          null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
      }, s.prototype.changeSlide = function (e, t) {
        var n, i, o = this,
            r = c(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
          case "previous":
            i = 0 == n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
            break;
          case "next":
            i = 0 == n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
            break;
          case "index":
            var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
            break;
          default:
            return
        }
      }, s.prototype.checkNavigable = function (e) {
        var t, n;
        if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break
            }
            n = t[i]
          }
        return e
      }, s.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
      }, s.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
      }, s.prototype.cleanUpRows = function () {
        var e;
        0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
      }, s.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
      }, s.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
          c(this).attr("style", c(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
      }, s.prototype.disableTransition = function (e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
      }, s.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
          zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
          opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
          opacity: 1,
          zIndex: n.options.zIndex
        }), t && setTimeout(function () {
          n.disableTransition(e), t.call()
        }, n.options.speed))
      }, s.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
          opacity: 0,
          zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
          opacity: 0,
          zIndex: t.options.zIndex - 2
        }))
      }, s.prototype.filterSlides = s.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
      }, s.prototype.focusHandler = function () {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (e) {
          var t = c(this);
          setTimeout(function () {
            n.options.pauseOnFocus && t.is(":focus") && (n.focussed = !0, n.autoPlay())
          }, 0)
        }).on("blur.slick", "*", function (e) {
          c(this);
          n.options.pauseOnFocus && (n.focussed = !1, n.autoPlay())
        })
      }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function () {
        return this.currentSlide
      }, s.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
      }, s.prototype.getLeft = function (e) {
        var t, n, i, o, r = this,
            s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (s = e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
      }, s.prototype.getOption = s.prototype.slickGetOption = function (e) {
        return this.options[e]
      }, s.prototype.getNavigableIndexes = function () {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (e = !1 === t.options.infinite ? t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
      }, s.prototype.getSlick = function () {
        return this
      }, s.prototype.getSlideCount = function () {
        var o, r, e, s = this;
        return e = !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0, r = -1 * s.swipeLeft + e, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (e, t) {
          var n, i;
          if (n = c(t).outerWidth(), i = t.offsetLeft, !0 !== s.options.centerMode && (i += n / 2), r < i + n) return o = t, !1
        }), Math.abs(c(o).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
      }, s.prototype.goTo = s.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
          data: {
            message: "index",
            index: parseInt(e)
          }
        }, t)
      }, s.prototype.init = function (e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
      }, s.prototype.initADA = function () {
        var i = this,
            n = Math.ceil(i.slideCount / i.options.slidesToShow),
            o = i.getNavigableIndexes().filter(function (e) {
              return 0 <= e && e < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
        }).find("a, input, button, select").attr({
          tabindex: "-1"
        }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (e) {
          var t = o.indexOf(e);
          if (c(this).attr({
            role: "tabpanel",
            id: "slick-slide" + i.instanceUid + e,
            tabindex: -1
          }), -1 !== t) {
            var n = "slick-slide-control" + i.instanceUid + t;
            c("#" + n).length && c(this).attr({
              "aria-describedby": n
            })
          }
        }), i.$dots.attr("role", "tablist").find("li").each(function (e) {
          var t = o[e];
          c(this).attr({
            role: "presentation"
          }), c(this).find("button").first().attr({
            role: "tab",
            id: "slick-slide-control" + i.instanceUid + e,
            "aria-controls": "slick-slide" + i.instanceUid + t,
            "aria-label": e + 1 + " of " + n,
            "aria-selected": null,
            tabindex: "-1"
          })
        }).eq(i.currentSlide).find("button").attr({
          "aria-selected": "true",
          tabindex: "0"
        }).end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.options.focusOnChange ? i.$slides.eq(e).attr({
          tabindex: "0"
        }) : i.$slides.eq(e).removeAttr("tabindex");
        i.activateADA()
      }, s.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
      }, s.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", {
          message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
      }, s.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
      }, s.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
          action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(e.setPosition)
      }, s.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
      }, s.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
          data: {
            message: !0 === t.options.rtl ? "next" : "previous"
          }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
          data: {
            message: !0 === t.options.rtl ? "previous" : "next"
          }
        }))
      }, s.prototype.lazyLoad = function () {
        var e, t, n, r = this;

        function i(e) {
          c("img[data-lazy]", e).each(function () {
            var e = c(this),
                t = c(this).attr("data-lazy"),
                n = c(this).attr("data-srcset"),
                i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                o = document.createElement("img");
            o.onload = function () {
              e.animate({
                opacity: 0
              }, 100, function () {
                n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                  opacity: 1
                }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                }), r.$slider.trigger("lazyLoaded", [r, e, t])
              })
            }, o.onerror = function () {
              e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
            }, o.src = t
          })
        }

        if (!0 === r.options.centerMode ? n = !0 === r.options.infinite ? (t = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (t = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (t = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(t + r.options.slidesToShow), !0 === r.options.fade && (0 < t && t--, n <= r.slideCount && n++)), e = r.$slider.find(".slick-slide").slice(t, n), "anticipated" === r.options.lazyLoad)
          for (var o = t - 1, s = n, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), e = (e = e.add(a.eq(o))).add(a.eq(s)), o--, s++;
        i(e), r.slideCount <= r.options.slidesToShow ? i(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? i(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && i(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
      }, s.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
          opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
      }, s.prototype.next = s.prototype.slickNext = function () {
        this.changeSlide({
          data: {
            message: "next"
          }
        })
      }, s.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
      }, s.prototype.pause = s.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
      }, s.prototype.play = s.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
      }, s.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
      }, s.prototype.prev = s.prototype.slickPrev = function () {
        this.changeSlide({
          data: {
            message: "previous"
          }
        })
      }, s.prototype.preventDefault = function (e) {
        e.preventDefault()
      }, s.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, n, i, o, r, s = this,
            a = c("img[data-lazy]", s.$slider);
        a.length ? (t = a.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
          i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, n]), s.progressiveLazyLoad()
        }, r.onerror = function () {
          e < 3 ? setTimeout(function () {
            s.progressiveLazyLoad(e + 1)
          }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad())
        }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
      }, s.prototype.refresh = function (e) {
        var t, n, i = this;
        n = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > n && (i.currentSlide = n), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), t = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
          currentSlide: t
        }), i.init(), e || i.changeSlide({
          data: {
            message: "index",
            index: t
          }
        }, !1)
      }, s.prototype.registerBreakpoints = function () {
        var e, t, n, i = this,
            o = i.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
          for (e in i.respondTo = i.options.respondTo || "window", o)
            if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
              for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
              i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
            }
          i.breakpoints.sort(function (e, t) {
            return i.options.mobileFirst ? e - t : t - e
          })
        }
      }, s.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
      }, s.prototype.resize = function () {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
          e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
      }, s.prototype.removeSlide = s.prototype.slickRemove = function (e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
      }, s.prototype.setCSS = function (e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
      }, s.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
          padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
          padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
      }, s.prototype.setFade = function () {
        var n, i = this;
        i.$slides.each(function (e, t) {
          n = i.slideWidth * e * -1, !0 === i.options.rtl ? c(t).css({
            position: "relative",
            right: n,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
          }) : c(t).css({
            position: "relative",
            left: n,
            top: 0,
            zIndex: i.options.zIndex - 2,
            opacity: 0
          })
        }), i.$slides.eq(i.currentSlide).css({
          zIndex: i.options.zIndex - 1,
          opacity: 1
        })
      }, s.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t)
        }
      }, s.prototype.setOption = s.prototype.slickSetOption = function () {
        var e, t, n, i, o, r = this,
            s = !1;
        if ("object" === c.type(arguments[0]) ? (n = arguments[0], s = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[1], s = arguments[2], "responsive" === (n = arguments[0]) && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;
        else if ("multiple" === o) c.each(n, function (e, t) {
          r.options[e] = t
        });
        else if ("responsive" === o)
          for (t in i)
            if ("array" !== c.type(r.options.responsive)) r.options.responsive = [i[t]];
            else {
              for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
              r.options.responsive.push(i[t])
            }
        s && (r.unload(), r.reinit())
      }, s.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
      }, s.prototype.setProps = function () {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
      }, s.prototype.setSlideClasses = function (e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
      }, s.prototype.setupInfinite = function () {
        var e, t, n, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
          for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e) t = e - 1, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
          for (e = 0; e < n + i.slideCount; e += 1) t = e, c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
          i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
            c(this).attr("id", "")
          })
        }
      }, s.prototype.interrupt = function (e) {
        e || this.autoPlay(), this.interrupted = e
      }, s.prototype.selectHandler = function (e) {
        var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
            n = parseInt(t.attr("data-slick-index"));
        n = n || 0, this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n)
      }, s.prototype.slideHandler = function (e, t, n) {
        var i, o, r, s, a, l, c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
          if (!1 === t && c.asNavFor(e), i = e, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
            c.postSlide(i)
          }) : c.postSlide(i));
          else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, function () {
            c.postSlide(i)
          }) : c.postSlide(i));
          else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
              c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function () {
              c.postSlide(o)
            }) : c.postSlide(o)
          }
      }, s.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
      }, s.prototype.swipeDirection = function () {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i || i <= 360 && 315 <= i ? !1 === o.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
      }, s.prototype.swipeEnd = function (e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
        if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
          switch (n = i.swipeDirection()) {
            case "left":
            case "down":
              t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
              break;
            case "right":
            case "up":
              t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
          }
          "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
      }, s.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
          case "start":
            t.swipeStart(e);
            break;
          case "move":
            t.swipeMove(e);
            break;
          case "end":
            t.swipeEnd(e)
        }
      }, s.prototype.swipeMove = function (e) {
        var t, n, i, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
      }, s.prototype.swipeStart = function (e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
      }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
      }, s.prototype.unload = function () {
        var e = this;
        c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
      }, s.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
      }, s.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
      }, s.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
      }, s.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
      }, c.fn.slick = function () {
        var e, t, n = this,
            i = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            r = n.length;
        for (e = 0; e < r; e++)
          if ("object" == typeof i || void 0 === i ? n[e].slick = new s(n[e], i) : t = n[e].slick[i].apply(n[e].slick, o), void 0 !== t) return t;
        return n
      }
    }),
    function (a) {
      function t(e, t, n, i) {
        var o = e.text(),
            r = o.split(t),
            s = "";
        r.length && (a(r).each(function (e, t) {
          s += '<span class="' + n + (e + 1) + '" aria-hidden="true">' + t + "</span>" + i
        }), e.attr("aria-label", o).empty().append(s))
      }

      var n = {
        init: function () {
          return this.each(function () {
            t(a(this), "", "char", "")
          })
        },
        words: function () {
          return this.each(function () {
            t(a(this), " ", "word", " ")
          })
        },
        lines: function () {
          return this.each(function () {
            var e = "eefec303079ad17405c889e092e105b0";
            t(a(this).children("br").replaceWith(e).end(), e, "line", "")
          })
        }
      };
      a.fn.lettering = function (e) {
        return e && n[e] ? n[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (a.error("Method " + e + " does not exist on jQuery.lettering"), this) : n.init.apply(this, [].slice.call(arguments, 0))
      }
    }(jQuery),
    function (n) {
      var i = {};

      function o(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
          i: e,
          l: !1,
          exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
      }

      o.m = n, o.c = i, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n
        })
      }, o.r = function (e) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default
        } : function () {
          return e
        };
        return o.d(t, "a", t), t
      }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, o.p = "", o(o.s = 0)
    }([function (e, t, n) {
      "use strict";
      n(1), n(7), n(8), n(9);
      var i = s(n(4)),
          o = s(n(2)),
          r = s(n(3));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      o.default === r.default && n(10), window.Inputmask = i.default
    }, function (e, t, n) {
      "use strict";
      var i, o, r;
      o = [n(2), n(4)], void 0 === (r = "function" == typeof (i = function (a, l) {
        var d = {
              d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
              dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
                return c(Date.prototype.getDate.call(this), 2)
              }],
              ddd: [""],
              dddd: [""],
              m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
                return Date.prototype.getMonth.call(this) + 1
              }],
              mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function () {
                return c(Date.prototype.getMonth.call(this) + 1, 2)
              }],
              mmm: [""],
              mmmm: [""],
              yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
                return c(Date.prototype.getFullYear.call(this), 2)
              }],
              yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
                return c(Date.prototype.getFullYear.call(this), 4)
              }],
              h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
                return c(Date.prototype.getHours.call(this), 2)
              }],
              hhh: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
              H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              HH: ["[01][0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
                return c(Date.prototype.getHours.call(this), 2)
              }],
              HHH: ["[0-9]+", Date.prototype.setHours, "hours", Date.prototype.getHours],
              M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
              MM: ["[0-5][0-9]", Date.prototype.setMinutes, "minutes", function () {
                return c(Date.prototype.getMinutes.call(this), 2)
              }],
              s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
              ss: ["[0-5][0-9]", Date.prototype.setSeconds, "seconds", function () {
                return c(Date.prototype.getSeconds.call(this), 2)
              }],
              l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
                return c(Date.prototype.getMilliseconds.call(this), 3)
              }],
              L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
                return c(Date.prototype.getMilliseconds.call(this), 2)
              }],
              t: ["[ap]"],
              tt: ["[ap]m"],
              T: ["[AP]"],
              TT: ["[AP]M"],
              Z: [""],
              o: [""],
              S: [""]
            },
            t = {
              isoDate: "yyyy-mm-dd",
              isoTime: "HH:MM:ss",
              isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
              isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };

        function p(e) {
          if (!e.tokenizer) {
            var t = [];
            for (var n in d) -1 === t.indexOf(n[0]) && t.push(n[0]);
            e.tokenizer = "(" + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g")
          }
          return e.tokenizer
        }

        function i(e, t, n) {
          for (var i, o = ""; i = p(n).exec(e);)
            if (void 0 === t)
              if (d[i[0]]) o += "(" + d[i[0]][0] + ")";
              else switch (i[0]) {
                case "[":
                  o += "(";
                  break;
                case "]":
                  o += ")?";
                  break;
                default:
                  o += l.escapeRegex(i[0])
              } else if (d[i[0]]) {
              o += d[i[0]][3].call(t.date)
            } else o += i[0];
          return o
        }

        function c(e, t) {
          for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;
          return e
        }

        function u(e, t, o) {
          var r, n, i, s, a = {
                date: new Date(1, 0, 1)
              },
              l = e;

          function c(e, t) {
            e[r] = function (e) {
              var t;
              if (o.min && o.min[r] || o.max && o.max[r]) {
                var n = o.min && o.min[r] || o.max[r],
                    i = o.max && o.max[r] || o.min[r];
                for (t = e.replace(/[^0-9]/g, ""), t += (n.indexOf(t) < i.indexOf(t) ? i : n).toString().substr(t.length); !new RegExp(s).test(t);) t--
              } else t = e.replace(/[^0-9]/g, "0");
              return t
            }(t), e["raw" + r] = t, void 0 !== i && i.call(e.date, "month" == r ? parseInt(e[r]) - 1 : e[r])
          }

          if ("string" == typeof l) {
            for (; n = p(o).exec(t);) {
              var u = l.slice(0, n[0].length);
              d.hasOwnProperty(n[0]) && (s = d[n[0]][0], r = d[n[0]][2], i = d[n[0]][1], c(a, u)), l = l.slice(u.length)
            }
            return a
          }
        }

        return l.extendAliases({
          datetime: {
            mask: function (e) {
              return d.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = t[e.inputFormat] || e.inputFormat, e.displayFormat = t[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = t[e.outputFormat] || e.outputFormat || e.inputFormat, e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[\[\]]/, ""), e.min = u(e.min, e.inputFormat, e), e.max = u(e.max, e.inputFormat, e), e.regex = i(e.inputFormat, void 0, e), null
            },
            placeholder: "",
            inputFormat: "isoDateTime",
            displayFormat: void 0,
            outputFormat: void 0,
            min: null,
            max: null,
            i18n: {
              dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              ordinalSuffix: ["st", "nd", "rd", "th"]
            },
            postValidation: function (e, t, n) {
              var i, o, r = t,
                  s = u(e.join(""), n.inputFormat, n);
              return r && s.date.getTime() == s.date.getTime() && (i = s, o = r, r = (r = (!isFinite(i.rawday) || "29" == i.day && !isFinite(i.rawyear) || new Date(i.date.getFullYear(), isFinite(i.rawmonth) ? i.month : i.date.getMonth() + 1, 0).getDate() >= i.day) && o) && function (e, t) {
                var n = !0;
                if (t.min) {
                  if (e.rawyear) {
                    var i = e.rawyear.replace(/[^0-9]/g, "");
                    n = t.min.year.substr(0, i.length) <= i
                  }
                  e.year === e.rawyear && t.min.date.getTime() == t.min.date.getTime() && (n = t.min.date.getTime() <= e.date.getTime())
                }
                return n && t.max && t.max.date.getTime() == t.max.date.getTime() && (n = t.max.date.getTime() >= e.date.getTime()), n
              }(s, n)), r
            },
            onKeyDown: function (e, t, n, i) {
              if (e.ctrlKey && e.keyCode === l.keyCode.RIGHT) {
                for (var o, r = new Date, s = ""; o = p(i).exec(i.inputFormat);) "d" === o[0].charAt(0) ? s += c(r.getDate(), o[0].length) : "m" === o[0].charAt(0) ? s += c(r.getMonth() + 1, o[0].length) : "yyyy" === o[0] ? s += r.getFullYear().toString() : "y" === o[0].charAt(0) && (s += c(r.getYear(), o[0].length));
                this.inputmask._valueSet(s), a(this).trigger("setvalue")
              }
            },
            onUnMask: function (e, t, n) {
              return i(n.outputFormat, u(e, n.inputFormat, n), n)
            },
            casing: function (e, t, n, i) {
              return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e
            },
            insertMode: !1
          }
        }), l
      }) ? i.apply(t, o) : i) || (e.exports = r)
    }, function (e, t, n) {
      "use strict";
      var i, o, r;
      o = [n(3)], void 0 === (r = "function" == typeof (i = function (e) {
        return e
      }) ? i.apply(t, o) : i) || (e.exports = r)
    }, function (e, t) {
      e.exports = jQuery
    }, function (e, t, n) {
      "use strict";
      var i, o, r, pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      o = [n(2), n(5), n(6)], void 0 === (r = "function" == typeof (i = function (ne, ie, oe, re) {
        var e = navigator.userAgent,
            se = ue("touchstart"),
            ae = /iemobile/i.test(e),
            le = /iphone/i.test(e) && !ae;

        function ce(e, t, n) {
          if (!(this instanceof ce)) return new ce(e, t, n);
          this.el = re, this.events = {}, this.maskset = re, !(this.refreshValue = !1) !== n && (ne.isPlainObject(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = ne.extend(!0, {}, this.defaults, t), this.noMasksCache = t && t.definitions !== re, this.userOptions = t || {}, this.isRTL = this.opts.numericInput, u(this.opts.alias, t, this.opts))
        }

        function u(e, t, n) {
          var i = ce.prototype.aliases[e];
          return i ? (i.alias && u(i.alias, re, n), ne.extend(!0, n, i), ne.extend(!0, n, t), 1) : (null === n.mask && (n.mask = e), 0)
        }

        function r(n, a) {
          function e(e, t, n) {
            var i = !1;
            if (null !== e && "" !== e || (e = (i = null !== n.regex) ? (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (i = !0, ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 0 < n.repeat || "*" === n.repeat || "+" === n.repeat) {
              var o = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
              e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + o + "," + n.repeat + n.quantifiermarker[1]
            }
            var r, s = i ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e;
            return ce.prototype.masksCache[s] === re || !0 === a ? (r = {
              mask: e,
              maskToken: ce.prototype.analyseMask(e, i, n),
              validPositions: {},
              _buffer: re,
              buffer: re,
              tests: {},
              excludes: {},
              metadata: t,
              maskLength: re
            }, !0 !== a && (ce.prototype.masksCache[s] = r, r = ne.extend(!0, {}, ce.prototype.masksCache[s]))) : r = ne.extend(!0, {}, ce.prototype.masksCache[s]), r
          }

          if (ne.isFunction(n.mask) && (n.mask = n.mask(n)), ne.isArray(n.mask)) {
            if (1 < n.mask.length) {
              if (null === n.keepStatic) {
                n.keepStatic = "auto";
                for (var t = 0; t < n.mask.length; t++)
                  if (n.mask[t].charAt(0) !== n.mask[0].charAt(0)) {
                    n.keepStatic = !0;
                    break
                  }
              }
              var i = n.groupmarker[0];
              return ne.each(n.isRTL ? n.mask.reverse() : n.mask, function (e, t) {
                1 < i.length && (i += n.groupmarker[1] + n.alternatormarker + n.groupmarker[0]), t.mask === re || ne.isFunction(t.mask) ? i += t : i += t.mask
              }), e(i += n.groupmarker[1], n.mask, n)
            }
            n.mask = n.mask.pop()
          }
          return n.mask && n.mask.mask !== re && !ne.isFunction(n.mask.mask) ? e(n.mask.mask, n.mask, n) : e(n.mask, n.mask, n)
        }

        function ue(e) {
          var t = oe.createElement("input"),
              n = "on" + e,
              i = n in t;
          return i || (t.setAttribute(n, "return;"), i = "function" == typeof t[n]), t = null, i
        }

        function de(e, t, z) {
          t = t || this.maskset, z = z || this.opts;
          var m, o, g, f, c = this,
              r = this.el,
              v = this.isRTL,
              s = !1,
              u = !1,
              y = !1,
              n = !1,
              a = "";

          function h(e, t, n, i, o) {
            var r = z.greedy;
            o && (z.greedy = !1), t = t || 0;
            var s, a, l, c = [],
                u = 0,
                d = S();
            do {
              if (!0 === e && W().validPositions[u]) a = (l = o && !0 === W().validPositions[u].match.optionality && W().validPositions[u + 1] === re && (!0 === W().validPositions[u].generatedInput || W().validPositions[u].input == z.skipOptionalPartCharacter && 0 < u) ? k(u, $(u, s, u - 1)) : W().validPositions[u]).match, s = l.locator.slice(), c.push(!0 === n ? l.input : !1 === n ? a.nativeDef : I(u, a));
              else {
                a = (l = b(u, s, u - 1)).match, s = l.locator.slice();
                var p = !0 !== i && (!1 !== z.jitMasking ? z.jitMasking : a.jit);
                !1 === p || p === re || u < d || "number" == typeof p && isFinite(p) && u < p ? c.push(!1 === n ? a.nativeDef : I(u, a)) : a.jit && a.optionalQuantifier
              }
              "auto" === z.keepStatic && a.newBlockMarker && null !== a.fn && (z.keepStatic = u - 1), u++
            } while ((g === re || u < g) && (null !== a.fn || "" !== a.def) || u < t);
            return "" === c[c.length - 1] && c.pop(), !1 === n && W().maskLength !== re || (W().maskLength = u - 1), z.greedy = r, c
          }

          function W() {
            return t
          }

          function w(e) {
            var t = W();
            t.buffer = re, !0 !== e && (t.validPositions = {}, t.p = 0)
          }

          function S(e, t, n) {
            var i = -1,
                o = -1,
                r = n || W().validPositions;
            for (var s in e === re && (e = -1), r) {
              var a = parseInt(s);
              r[a] && (t || !0 !== r[a].generatedInput) && (a <= e && (i = a), e <= a && (o = a))
            }
            return -1 !== i && i != e && (-1 == o || e - i < o - e) ? i : o
          }

          function T(e) {
            var t = e.locator[e.alternation];
            return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]), t !== re ? t.toString() : ""
          }

          function d(e, t) {
            var n = (e.alternation != re ? e.mloc[T(e)] : e.locator).join("");
            if ("" !== n)
              for (; n.length < t;) n += "0";
            return n
          }

          function k(e, t) {
            for (var n, i, o, r = d(C(e = 0 < e ? e - 1 : 0)), s = 0; s < t.length; s++) {
              var a = t[s];
              n = d(a, r.length);
              var l = Math.abs(n - r);
              (i === re || "" !== n && l < i || o && o.match.optionality && "master" === o.match.newBlockMarker && (!a.match.optionality || !a.match.newBlockMarker) || o && o.match.optionalQuantifier && !a.match.optionalQuantifier) && (i = l, o = a)
            }
            return o
          }

          function b(e, t, n) {
            return W().validPositions[e] || k(e, $(e, t ? t.slice() : t, n))
          }

          function C(e, t) {
            return W().validPositions[e] ? W().validPositions[e] : (t || $(e))[0]
          }

          function x(e, t) {
            for (var n = !1, i = $(e), o = 0; o < i.length; o++)
              if (i[o].match && i[o].match.def === t) {
                n = !0;
                break
              }
            return n
          }

          function $(H, e, t) {
            var F, n, i, o, r = W().maskToken,
                I = e ? t : 0,
                s = e ? e.slice() : [0],
                q = [],
                R = !1,
                _ = e ? e.join("") : "";

            function B(M, N, e, t) {
              function L(e, t, n) {
                function r(n, i) {
                  var o = 0 === ne.inArray(n, i.matches);
                  return o || ne.each(i.matches, function (e, t) {
                    if (!0 === t.isQuantifier ? o = r(n, i.matches[e - 1]) : !0 !== t.isOptional && !0 !== t.isAlternate || (o = r(n, t)), o) return !1
                  }), o
                }

                function i(e, o, r) {
                  var s, a;
                  if ((W().tests[e] || W().validPositions[e]) && ne.each(W().tests[e] || [W().validPositions[e]], function (e, t) {
                    if (t.mloc[o]) return s = t, !1;
                    var n = r !== re ? r : t.alternation,
                        i = t.locator[n] !== re ? t.locator[n].toString().indexOf(o) : -1;
                    (a === re || i < a) && -1 !== i && (s = t, a = i)
                  }), s) {
                    var t = s.locator[s.alternation];
                    return (s.mloc[o] || s.mloc[t] || s.locator).slice((r !== re ? r : s.alternation) + 1)
                  }
                  return r !== re ? i(e, o) : re
                }

                function o(e, t) {
                  function n(e) {
                    for (var t, n, i = [], o = 0, r = e.length; o < r; o++)
                      if ("-" === e.charAt(o))
                        for (n = e.charCodeAt(o + 1); ++t < n;) i.push(String.fromCharCode(t));
                      else t = e.charCodeAt(o), i.push(e.charAt(o));
                    return i.join("")
                  }

                  return z.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== n(t.match.def.replace(/[\[\]]/g, "")).indexOf(n(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef
                }

                function s(e, t) {
                  if (t === re || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                    e.mloc = e.mloc || {};
                    var n = e.locator[e.alternation];
                    if (n !== re) {
                      if ("string" == typeof n && (n = n.split(",")[0]), e.mloc[n] === re && (e.mloc[n] = e.locator.slice()), t !== re) {
                        for (var i in t.mloc) "string" == typeof i && (i = i.split(",")[0]), e.mloc[i] === re && (e.mloc[i] = t.mloc[i]);
                        e.locator[e.alternation] = Object.keys(e.mloc).join(",")
                      }
                      return 1
                    }
                    e.alternation = re
                  }
                }

                if (5e3 < I) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + W().mask;
                if (I === H && e.matches === re) return q.push({
                  match: e,
                  locator: t.reverse(),
                  cd: _,
                  mloc: {}
                }), !0;
                if (e.matches !== re) {
                  if (e.isGroup && n !== e) {
                    if (e = L(M.matches[ne.inArray(e, M.matches) + 1], t, n)) return !0
                  } else if (e.isOptional) {
                    var a = e;
                    if (e = B(e, N, t, n)) {
                      if (ne.each(q, function (e, t) {
                        t.match.optionality = !0
                      }), F = q[q.length - 1].match, n !== re || !r(F, a)) return !0;
                      R = !0, I = H
                    }
                  } else if (e.isAlternator) {
                    var l, c = e,
                        u = [],
                        d = q.slice(),
                        p = t.length,
                        f = 0 < N.length ? N.shift() : -1;
                    if (-1 === f || "string" == typeof f) {
                      var h, m = I,
                          g = N.slice(),
                          v = [];
                      if ("string" == typeof f) v = f.split(",");
                      else
                        for (h = 0; h < c.matches.length; h++) v.push(h.toString());
                      if (W().excludes[H]) {
                        for (var y = v.slice(), k = 0, b = W().excludes[H].length; k < b; k++) v.splice(v.indexOf(W().excludes[H][k].toString()), 1);
                        0 === v.length && (W().excludes[H] = re, v = y)
                      }
                      (!0 === z.keepStatic || isFinite(parseInt(z.keepStatic)) && m >= z.keepStatic) && (v = v.slice(0, 1));
                      for (var x = !1, w = 0; w < v.length; w++) {
                        h = parseInt(v[w]), q = [], N = "string" == typeof f && i(I, h, p) || g.slice(), c.matches[h] && L(c.matches[h], [h].concat(t), n) ? e = !0 : 0 === w && (x = !0), l = q.slice(), I = m, q = [];
                        for (var S = 0; S < l.length; S++) {
                          var T = l[S],
                              C = !1;
                          T.match.jit = T.match.jit || x, T.alternation = T.alternation || p, s(T);
                          for (var $ = 0; $ < u.length; $++) {
                            var A = u[$];
                            if ("string" != typeof f || T.alternation !== re && -1 !== ne.inArray(T.locator[T.alternation].toString(), v)) {
                              if (T.match.nativeDef === A.match.nativeDef) {
                                C = !0, s(A, T);
                                break
                              }
                              if (o(T, A)) {
                                s(T, A) && (C = !0, u.splice(u.indexOf(A), 0, T));
                                break
                              }
                              if (o(A, T)) {
                                s(A, T);
                                break
                              }
                              if (O = A, (j = T).locator.slice(j.alternation).join("") == O.locator.slice(O.alternation).join("") && null === j.match.fn && null !== O.match.fn && O.match.fn.test(j.match.def, W(), H, !1, z, !1)) {
                                s(T, A) && (C = !0, u.splice(u.indexOf(A), 0, T));
                                break
                              }
                            }
                          }
                          C || u.push(T)
                        }
                      }
                      q = d.concat(u), I = H, R = 0 < q.length, e = 0 < u.length, N = g.slice()
                    } else e = L(c.matches[f] || M.matches[f], [f].concat(t), n);
                    if (e) return !0
                  } else if (e.isQuantifier && n !== M.matches[ne.inArray(e, M.matches) - 1])
                    for (var E = e, P = 0 < N.length ? N.shift() : 0; P < (isNaN(E.quantifier.max) ? P + 1 : E.quantifier.max) && I <= H; P++) {
                      var D = M.matches[ne.inArray(E, M.matches) - 1];
                      if (e = L(D, [P].concat(t), D)) {
                        if ((F = q[q.length - 1].match).optionalQuantifier = P > E.quantifier.min - 1, F.jit = P + D.matches.indexOf(F) >= E.quantifier.jit, r(F, D) && P > E.quantifier.min - 1) {
                          R = !0, I = H;
                          break
                        }
                        if (E.quantifier.jit !== re && isNaN(E.quantifier.max) && F.optionalQuantifier && W().validPositions[H - 1] === re) {
                          q.pop(), R = !0, I = H, _ = re;
                          break
                        }
                        return !0
                      }
                    } else if (e = B(e, N, t, n)) return !0
                } else I++;
                var j, O
              }

              for (var n = 0 < N.length ? N.shift() : 0; n < M.matches.length; n++)
                if (!0 !== M.matches[n].isQuantifier) {
                  var i = L(M.matches[n], [n].concat(e), t);
                  if (i && I === H) return i;
                  if (H < I) break
                }
            }

            if (-1 < H) {
              if (e === re) {
                for (var a, l = H - 1;
                     (a = W().validPositions[l] || W().tests[l]) === re && -1 < l;) l--;
                a !== re && -1 < l && (n = l, i = a, o = [], ne.isArray(i) || (i = [i]), 0 < i.length && (i[0].alternation === re ? 0 === (o = k(n, i.slice()).locator.slice()).length && (o = i[0].locator.slice()) : ne.each(i, function (e, t) {
                  if ("" !== t.def)
                    if (0 === o.length) o = t.locator.slice();
                    else
                      for (var n = 0; n < o.length; n++) t.locator[n] && -1 === o[n].toString().indexOf(t.locator[n]) && (o[n] += "," + t.locator[n])
                })), _ = (s = o).join(""), I = l)
              }
              if (W().tests[H] && W().tests[H][0].cd === _) return W().tests[H];
              for (var c = s.shift(); c < r.length; c++) {
                if (B(r[c], s, [c]) && I === H || H < I) break
              }
            }
            return 0 !== q.length && !R || q.push({
              match: {
                fn: null,
                optionality: !1,
                casing: null,
                def: "",
                placeholder: ""
              },
              locator: [],
              mloc: {},
              cd: _
            }), e !== re && W().tests[H] ? ne.extend(!0, [], q) : (W().tests[H] = ne.extend(!0, [], q), W().tests[H])
          }

          function A() {
            return W()._buffer === re && (W()._buffer = h(!1, 1), W().buffer === re && (W().buffer = W()._buffer.slice())), W()._buffer
          }

          function E(e) {
            return W().buffer !== re && !0 !== e || (W().buffer = h(!0, S(), !0)), W().buffer
          }

          function P(e, t, n) {
            var i, o;
            if (!0 === e) w(), e = 0, t = n.length;
            else
              for (i = e; i < t; i++) delete W().validPositions[i];
            for (i = o = e; i < t; i++)
              if (w(!0), n[i] !== z.skipOptionalPartCharacter) {
                var r = j(o, n[i], !0, !0);
                !1 !== r && (w(!0), o = r.caret !== re ? r.caret : r.pos + 1)
              }
          }

          function p(e, t, n) {
            for (var i, o = z.greedy ? t : t.slice(0, 1), r = !1, s = n !== re ? n.split(",") : [], a = 0; a < s.length; a++) -1 !== (i = e.indexOf(s[a])) && e.splice(i, 1);
            for (var l = 0; l < e.length; l++)
              if (-1 !== ne.inArray(e[l], o)) {
                r = !0;
                break
              }
            return r
          }

          function D(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p = ne.extend(!0, {}, W().validPositions),
                f = !1,
                h = o !== re ? o : S();
            if (-1 === h && o === re) s = (l = C(r = 0)).alternation;
            else
              for (; 0 <= h; h--)
                if ((a = W().validPositions[h]) && a.alternation !== re) {
                  if (l && l.locator[a.alternation] !== a.locator[a.alternation]) break;
                  r = h, s = W().validPositions[r].alternation, l = a
                }
            if (s !== re) {
              d = parseInt(r), W().excludes[d] = W().excludes[d] || [], !0 !== e && W().excludes[d].push(T(l));
              var m = [],
                  g = 0;
              for (c = d; c < S(re, !0) + 1; c++) (u = W().validPositions[c]) && !0 !== u.generatedInput ? m.push(u.input) : c < e && g++, delete W().validPositions[c];
              for (; W().excludes[d] && W().excludes[d].length < 10;) {
                var v = -1 * g,
                    y = m.slice();
                for (W().tests[d] = re, w(!0), f = !0; 0 < y.length;) {
                  var k = y.shift();
                  if (!(f = j(S(re, !0) + 1, k, !1, i, !0))) break
                }
                if (f && t !== re) {
                  var b = S(e) + 1;
                  for (c = d; c < S() + 1; c++) ((u = W().validPositions[c]) === re || null == u.match.fn) && c < e + v && v++;
                  f = j((e += v) > b ? b : e, t, n, i, !0)
                }
                if (f) break;
                if (w(), l = C(d), W().validPositions = ne.extend(!0, {}, p), !W().excludes[d]) {
                  f = D(e, t, n, i, d - 1);
                  break
                }
                var x = T(l);
                if (-1 !== W().excludes[d].indexOf(x)) {
                  f = D(e, t, n, i, d - 1);
                  break
                }
                for (W().excludes[d].push(x), c = d; c < S(re, !0) + 1; c++) delete W().validPositions[c]
              }
            }
            return W().excludes[d] = re, f
          }

          function j(c, e, t, u, n, i) {
            function d(e) {
              return v ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1
            }

            t = !0 === t;
            var o = c;

            function r(r, s, a) {
              var l = !1;
              return ne.each($(r), function (e, t) {
                var n = t.match;
                if (E(!0), !1 !== (l = null != n.fn ? n.fn.test(s, W(), r, a, z, d(c)) : (s === n.def || s === z.skipOptionalPartCharacter) && "" !== n.def && {
                  c: I(r, n, !0) || n.def,
                  pos: r
                })) {
                  var i = l.c !== re ? l.c : s,
                      o = r;
                  return i = i === z.skipOptionalPartCharacter && null === n.fn ? I(r, n, !0) || n.def : i, l.remove !== re && (ne.isArray(l.remove) || (l.remove = [l.remove]), ne.each(l.remove.sort(function (e, t) {
                    return t - e
                  }), function (e, t) {
                    M({
                      begin: t,
                      end: t + 1
                    })
                  })), l.insert !== re && (ne.isArray(l.insert) || (l.insert = [l.insert]), ne.each(l.insert.sort(function (e, t) {
                    return e - t
                  }), function (e, t) {
                    j(t.pos, t.c, !0, u)
                  })), !0 !== l && l.pos !== re && l.pos !== r && (o = l.pos), (!0 === l || l.pos !== re || l.c !== re) && (M(c, ne.extend({}, t, {
                    input: function (e, t, n) {
                      switch (z.casing || t.casing) {
                        case "upper":
                          e = e.toUpperCase();
                          break;
                        case "lower":
                          e = e.toLowerCase();
                          break;
                        case "title":
                          var i = W().validPositions[n - 1];
                          e = 0 === n || i && i.input === String.fromCharCode(ce.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase();
                          break;
                        default:
                          if (ne.isFunction(z.casing)) {
                            var o = Array.prototype.slice.call(arguments);
                            o.push(W().validPositions), e = z.casing.apply(this, o)
                          }
                      }
                      return e
                    }(i, n, o)
                  }), u, o) || (l = !1), !1)
                }
              }), l
            }

            c.begin !== re && (o = v ? c.end : c.begin);
            var s = !0,
                a = ne.extend(!0, {}, W().validPositions);
            if (ne.isFunction(z.preValidation) && !t && !0 !== u && !0 !== i && (s = z.preValidation(E(), o, e, d(c), z, W())), !0 === s) {
              if (O(re, o, !0), (g === re || o < g) && (s = r(o, e, t), (!t || !0 === u) && !1 === s && !0 !== i)) {
                var l = W().validPositions[o];
                if (!l || null !== l.match.fn || l.match.def !== e && e !== z.skipOptionalPartCharacter) {
                  if ((z.insertMode || W().validPositions[L(o)] === re) && !N(o, !0))
                    for (var p = o + 1, f = L(o); p <= f; p++)
                      if (!1 !== (s = r(p, e, t))) {
                        s = O(o, s.pos !== re ? s.pos : p) || s, o = p;
                        break
                      }
                } else s = {
                  caret: L(o)
                }
              }
              !1 !== s || !1 === z.keepStatic || null != z.regex && !X(E()) || t || !0 === n || (s = D(o, e, t, u)), !0 === s && (s = {
                pos: o
              })
            }
            if (ne.isFunction(z.postValidation) && !1 !== s && !t && !0 !== u && !0 !== i) {
              var h = z.postValidation(E(!0), s, z);
              if (h !== re) {
                if (h.refreshFromBuffer && h.buffer) {
                  var m = h.refreshFromBuffer;
                  P(!0 === m ? m : m.start, m.end, h.buffer)
                }
                s = !0 === h ? s : h
              }
            }
            return s && s.pos === re && (s.pos = o), !1 !== s && !0 !== i || (w(!0), W().validPositions = ne.extend(!0, {}, a)), s
          }

          function O(e, t, n) {
            var i;
            if (e === re)
              for (e = t - 1; 0 < e && !W().validPositions[e]; e--) ;
            for (var o = e; o < t; o++)
              if (W().validPositions[o] === re && !N(o, !0)) {
                if (0 == o ? C(o) : W().validPositions[o - 1]) {
                  var r = $(o).slice();
                  "" === r[r.length - 1].match.def && r.pop();
                  var s = k(o, r);
                  if ((s = ne.extend({}, s, {
                    input: I(o, s.match, !0) || s.match.def
                  })).generatedInput = !0, M(o, s, !0), !0 !== n) {
                    var a = W().validPositions[t].input;
                    W().validPositions[t] = re, i = j(t, a, !0, !0)
                  }
                }
              }
            return i
          }

          function M(e, t, n, i) {
            function o(e, t, n) {
              var i = t[e];
              if (i !== re && (null === i.match.fn && !0 !== i.match.optionality || i.input === z.radixPoint)) {
                var o = (!(n.begin <= e - 1) || t[e - 1] && null === t[e - 1].match.fn) && t[e - 1],
                    r = (!(n.end > e + 1) || t[e + 1] && null === t[e + 1].match.fn) && t[e + 1];
                return o && r
              }
            }

            var r = e.begin !== re ? e.begin : e,
                s = e.end !== re ? e.end : e;
            if (e.begin > e.end && (r = e.end, s = e.begin), i = i !== re ? i : r, r !== s || z.insertMode && W().validPositions[i] !== re && n === re) {
              var a = ne.extend(!0, {}, W().validPositions),
                  l = S(re, !0);
              for (W().p = r, f = l; r <= f; f--) W().validPositions[f] && "+" === W().validPositions[f].match.nativeDef && (z.isNegative = !1), delete W().validPositions[f];
              var c = !0,
                  u = i,
                  d = (W().validPositions, !1),
                  p = u,
                  f = u;
              for (t && (W().validPositions[i] = ne.extend(!0, {}, t), p++, u++, r < s && f++); f <= l; f++) {
                var h = a[f];
                if (h !== re && (s <= f || r <= f && !0 !== h.generatedInput && o(f, a, {
                  begin: r,
                  end: s
                }))) {
                  for (;
                      "" !== C(p).match.def;) {
                    if (!1 === d && a[p] && a[p].match.nativeDef === h.match.nativeDef) W().validPositions[p] = ne.extend(!0, {}, a[p]), W().validPositions[p].input = h.input, O(re, p, !0), u = p + 1, c = !0;
                    else if (x(p, h.match.def)) {
                      var m = j(p, h.input, !0, !0);
                      c = !1 !== m, u = m.caret || m.insert ? S() : p + 1, d = !0
                    } else if (!(c = !0 === h.generatedInput || h.input === z.radixPoint && !0 === z.numericInput) && "" === C(p).match.def) break;
                    if (c) break;
                    p++
                  }
                  "" == C(p).match.def && (c = !1), p = u
                }
                if (!c) break
              }
              if (!c) return W().validPositions = ne.extend(!0, {}, a), w(!0), 0
            } else t && (W().validPositions[i] = ne.extend(!0, {}, t));
            return w(!0), 1
          }

          function N(e, t) {
            var n = b(e).match;
            if ("" === n.def && (n = C(e).match), null != n.fn) return n.fn;
            if (!0 !== t && -1 < e) {
              var i = $(e);
              return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0)
            }
          }

          function L(e, t) {
            for (var n = e + 1;
                 "" !== C(n).match.def && (!0 === t && (!0 !== C(n).match.newBlockMarker || !N(n)) || !0 !== t && !N(n));) n++;
            return n
          }

          function H(e, t) {
            var n, i = e;
            if (i <= 0) return 0;
            for (; 0 < --i && (!0 === t && !0 !== C(i).match.newBlockMarker || !0 !== t && !N(i) && ((n = $(i)).length < 2 || 2 === n.length && "" === n[1].match.def));) ;
            return i
          }

          function F(e, t, n, i, o) {
            if (i && ne.isFunction(z.onBeforeWrite)) {
              var r = z.onBeforeWrite.call(c, i, t, n, z);
              if (r) {
                if (r.refreshFromBuffer) {
                  var s = r.refreshFromBuffer;
                  P(!0 === s ? s : s.start, s.end, r.buffer || t), t = E(!0)
                }
                n !== re && (n = r.caret !== re ? r.caret : n)
              }
            }
            if (e !== re && (e.inputmask._valueSet(t.join("")), n === re || i !== re && "blur" === i.type ? Q(e, n, 0 === t.length) : G(e, n), !0 === o)) {
              var a = ne(e),
                  l = e.inputmask._valueGet();
              u = !0, a.trigger("input"), setTimeout(function () {
                l === A().join("") ? a.trigger("cleared") : !0 === X(t) && a.trigger("complete")
              }, 0)
            }
          }

          function I(e, t, n) {
            if ((t = t || C(e).match).placeholder !== re || !0 === n) return ne.isFunction(t.placeholder) ? t.placeholder(z) : t.placeholder;
            if (null !== t.fn) return z.placeholder.charAt(e % z.placeholder.length);
            if (-1 < e && W().validPositions[e] === re) {
              var i, o = $(e),
                  r = [];
              if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                for (var s = 0; s < o.length; s++)
                  if (!0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (null === o[s].match.fn || i === re || !1 !== o[s].match.fn.test(i.match.def, W(), e, !0, z)) && (r.push(o[s]), null === o[s].match.fn && (i = o[s]), 1 < r.length && /[0-9a-bA-Z]/.test(r[0].match.def))) return z.placeholder.charAt(e % z.placeholder.length)
            }
            return t.def
          }

          var i, l = {
                on: function (e, t, r) {
                  function n(e) {
                    var t = this;
                    if (t.inputmask === re && "FORM" !== this.nodeName) {
                      var n = ne.data(t, "_inputmask_opts");
                      n ? new ce(n).mask(t) : l.off(t)
                    } else {
                      if ("setvalue" === e.type || "FORM" === this.nodeName || !(t.disabled || t.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === z.tabThrough && e.keyCode === ce.keyCode.TAB))) {
                        switch (e.type) {
                          case "input":
                            if (!0 === u) return u = !1, e.preventDefault();
                            if (se) {
                              var i = arguments;
                              return setTimeout(function () {
                                r.apply(t, i), G(t, t.inputmask.caretPos, re, !0)
                              }, 0), !1
                            }
                            break;
                          case "keydown":
                            u = s = !1;
                            break;
                          case "keypress":
                            if (!0 === s) return e.preventDefault();
                            s = !0;
                            break;
                          case "click":
                            if (ae || le) {
                              i = arguments;
                              return setTimeout(function () {
                                r.apply(t, i)
                              }, 0), !1
                            }
                        }
                        var o = r.apply(t, arguments);
                        return !1 === o && (e.preventDefault(), e.stopPropagation()), o
                      }
                      e.preventDefault()
                    }
                  }

                  e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(n), -1 !== ne.inArray(t, ["submit", "reset"]) ? null !== e.form && ne(e.form).on(t, n) : ne(e).on(t, n)
                },
                off: function (i, e) {
                  var t;
                  i.inputmask && i.inputmask.events && (e ? (t = [])[e] = i.inputmask.events[e] : t = i.inputmask.events, ne.each(t, function (e, t) {
                    for (; 0 < t.length;) {
                      var n = t.pop();
                      -1 !== ne.inArray(e, ["submit", "reset"]) ? null !== i.form && ne(i.form).off(e, n) : ne(i).off(e, n)
                    }
                    delete i.inputmask.events[e]
                  }))
                }
              },
              q = {
                keydownEvent: function (e) {
                  var t = ne(this),
                      n = e.keyCode,
                      i = G(this);
                  if (n === ce.keyCode.BACKSPACE || n === ce.keyCode.DELETE || le && n === ce.keyCode.BACKSPACE_SAFARI || e.ctrlKey && n === ce.keyCode.X && !ue("cut")) e.preventDefault(), K(0, n, i), F(this, E(!0), W().p, e, this.inputmask._valueGet() !== E().join(""));
                  else if (n === ce.keyCode.END || n === ce.keyCode.PAGE_DOWN) {
                    e.preventDefault();
                    var o = L(S());
                    G(this, e.shiftKey ? i.begin : o, o, !0)
                  } else n === ce.keyCode.HOME && !e.shiftKey || n === ce.keyCode.PAGE_UP ? (e.preventDefault(), G(this, 0, e.shiftKey ? i.begin : 0, !0)) : (z.undoOnEscape && n === ce.keyCode.ESCAPE || 90 === n && e.ctrlKey) && !0 !== e.altKey ? (R(this, !0, !1, m.split("")), t.trigger("click")) : n !== ce.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === z.tabThrough && n === ce.keyCode.TAB && (!0 === e.shiftKey ? (null === C(i.begin).match.fn && (i.begin = L(i.begin)), i.end = H(i.begin, !0), i.begin = H(i.end, !0)) : (i.begin = L(i.begin, !0), i.end = L(i.begin, !0), i.end < W().maskLength && i.end--), i.begin < W().maskLength && (e.preventDefault(), G(this, i.begin, i.end))) : (z.insertMode = !z.insertMode, this.setAttribute("im-insert", z.insertMode));
                  z.onKeyDown.call(this, e, E(), G(this).begin, z), y = -1 !== ne.inArray(n, z.ignorables)
                },
                keypressEvent: function (e, t, n, i, o) {
                  var r = this,
                      s = ne(r),
                      a = e.which || e.charCode || e.keyCode;
                  if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || y)) return a === ce.keyCode.ENTER && m !== E().join("") && (m = E().join(""), setTimeout(function () {
                    s.trigger("change")
                  }, 0)), !0;
                  if (a) {
                    46 === a && !1 === e.shiftKey && "" !== z.radixPoint && (a = z.radixPoint.charCodeAt(0));
                    var l, c = t ? {
                          begin: o,
                          end: o
                        } : G(r),
                        u = String.fromCharCode(a),
                        d = 0;
                    if (z._radixDance && z.numericInput) {
                      var p = E().indexOf(z.radixPoint.charAt(0)) + 1;
                      c.begin <= p && (a === z.radixPoint.charCodeAt(0) && (d = 1), --c.begin, --c.end)
                    }
                    W().writeOutBuffer = !0;
                    var f = j(c, u, i);
                    if (!1 !== f && (w(!0), l = f.caret !== re ? f.caret : L(f.pos.begin ? f.pos.begin : f.pos), W().p = l), l = (z.numericInput && f.caret === re ? H(l) : l) + d, !1 !== n && (setTimeout(function () {
                      z.onKeyValidation.call(r, a, f, z)
                    }, 0), W().writeOutBuffer && !1 !== f)) {
                      var h = E();
                      F(r, h, l, e, !0 !== t)
                    }
                    if (e.preventDefault(), t) return !1 !== f && (f.forwardPosition = l), f
                  }
                },
                pasteEvent: function (e) {
                  var t, n = e.originalEvent || e,
                      i = (ne(this), this.inputmask._valueGet(!0)),
                      o = G(this);
                  v && (t = o.end, o.end = o.begin, o.begin = t);
                  var r = i.substr(0, o.begin),
                      s = i.substr(o.end, i.length);
                  if (r === (v ? A().reverse() : A()).slice(0, o.begin).join("") && (r = ""), s === (v ? A().reverse() : A()).slice(o.end).join("") && (s = ""), ie.clipboardData && ie.clipboardData.getData) i = r + ie.clipboardData.getData("Text") + s;
                  else {
                    if (!n.clipboardData || !n.clipboardData.getData) return !0;
                    i = r + n.clipboardData.getData("text/plain") + s
                  }
                  var a = i;
                  if (ne.isFunction(z.onBeforePaste)) {
                    if (!1 === (a = z.onBeforePaste.call(c, i, z))) return e.preventDefault();
                    a = a || i
                  }
                  return R(this, !1, !1, a.toString().split("")), F(this, E(), L(S()), e, m !== E().join("")), e.preventDefault()
                },
                inputFallBackEvent: function (e) {
                  var t, n, i = this,
                      o = i.inputmask._valueGet();
                  if (E().join("") !== o) {
                    var r = G(i);
                    if (o = function (e, t) {
                      if (ae) {
                        var n = e.replace(E().join(""), "");
                        if (1 === n.length) {
                          var i = e.split("");
                          i.splice(t.begin, 0, n), e = i.join("")
                        }
                      }
                      return e
                    }((n = r, "." === (t = o).charAt(n.begin - 1) && "" !== z.radixPoint && ((t = t.split(""))[n.begin - 1] = z.radixPoint.charAt(0), t = t.join("")), o = t), r), E().join("") !== o) {
                      var s = E().join(""),
                          a = !z.numericInput && o.length > s.length ? -1 : 0,
                          l = o.substr(0, r.begin),
                          c = o.substr(r.begin),
                          u = s.substr(0, r.begin + a),
                          d = s.substr(r.begin + a),
                          p = r,
                          f = "",
                          h = !1;
                      if (l !== u) {
                        var m, g = (h = l.length >= u.length) ? l.length : u.length;
                        for (m = 0; l.charAt(m) === u.charAt(m) && m < g; m++) ;
                        h && (p.begin = m - a, f += l.slice(m, p.end))
                      }
                      if (c !== d && (c.length > d.length ? f += c.slice(0, 1) : c.length < d.length && (p.end += d.length - c.length, h || "" === z.radixPoint || "" !== c || l.charAt(p.begin + a - 1) !== z.radixPoint || (p.begin--, f = z.radixPoint))), F(i, E(), {
                        begin: p.begin + a,
                        end: p.end + a
                      }), 0 < f.length) ne.each(f.split(""), function (e, t) {
                        var n = new ne.Event("keypress");
                        n.which = t.charCodeAt(0), y = !1, q.keypressEvent.call(i, n)
                      });
                      else {
                        p.begin === p.end - 1 && (p.begin = H(p.begin + 1), p.begin === p.end - 1 ? G(i, p.begin) : G(i, p.begin, p.end));
                        var v = new ne.Event("keydown");
                        v.keyCode = z.numericInput ? ce.keyCode.BACKSPACE : ce.keyCode.DELETE, q.keydownEvent.call(i, v)
                      }
                      e.preventDefault()
                    }
                  }
                },
                beforeInputEvent: function (e) {
                  if (e.cancelable) {
                    var i = this;
                    switch (e.inputType) {
                      case "insertText":
                        return ne.each(e.data.split(""), function (e, t) {
                          var n = new ne.Event("keypress");
                          n.which = t.charCodeAt(0), y = !1, q.keypressEvent.call(i, n)
                        }), e.preventDefault();
                      case "deleteContentBackward":
                        return (t = new ne.Event("keydown")).keyCode = ce.keyCode.BACKSPACE, q.keydownEvent.call(i, t), e.preventDefault();
                      case "deleteContentForward":
                        var t;
                        return (t = new ne.Event("keydown")).keyCode = ce.keyCode.DELETE, q.keydownEvent.call(i, t), e.preventDefault()
                    }
                  }
                },
                setValueEvent: function (e) {
                  this.inputmask.refreshValue = !1;
                  var t = (t = e && e.detail ? e.detail[0] : arguments[1]) || this.inputmask._valueGet(!0);
                  ne.isFunction(z.onBeforeMask) && (t = z.onBeforeMask.call(c, t, z) || t), R(this, !0, !1, t = t.split("")), m = E().join(""), (z.clearMaskOnLostFocus || z.clearIncomplete) && this.inputmask._valueGet() === A().join("") && this.inputmask._valueSet("")
                },
                focusEvent: function (e) {
                  var t = this.inputmask._valueGet();
                  z.showMaskOnFocus && (!z.showMaskOnHover || z.showMaskOnHover && "" === t) && (this.inputmask._valueGet() !== E().join("") ? F(this, E(), L(S())) : !1 === n && G(this, L(S()))), !0 === z.positionCaretOnTab && !1 === n && q.clickEvent.apply(this, [e, !0]), m = E().join("")
                },
                mouseleaveEvent: function (e) {
                  n = !1, z.clearMaskOnLostFocus && oe.activeElement !== this && (this.placeholder = a)
                },
                clickEvent: function (e, c) {
                  var u = this;
                  setTimeout(function () {
                    if (oe.activeElement === u) {
                      var e = G(u);
                      if (c && (v ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (z.positionCaretOnClick) {
                        case "none":
                          break;
                        case "select":
                          G(u, 0, E().length);
                          break;
                        case "ignore":
                          G(u, L(S()));
                          break;
                        case "radixFocus":
                          if (function (e) {
                            if ("" !== z.radixPoint) {
                              var t = W().validPositions;
                              if (t[e] === re || t[e].input === I(e)) {
                                if (e < L(-1)) return 1;
                                var n = ne.inArray(z.radixPoint, E());
                                if (-1 !== n) {
                                  for (var i in t)
                                    if (n < i && t[i].input !== I(i)) return;
                                  return 1
                                }
                              }
                            }
                          }(e.begin)) {
                            var t = E().join("").indexOf(z.radixPoint);
                            G(u, z.numericInput ? L(t) : t);
                            break
                          }
                        default:
                          var n = e.begin,
                              i = S(n, !0),
                              o = L(i);
                          if (n < o) G(u, N(n, !0) || N(n - 1, !0) ? n : L(n));
                          else {
                            var r = W().validPositions[i],
                                s = b(o, r ? r.match.locator : re, r),
                                a = I(o, s.match);
                            if ("" !== a && E()[o] !== a && !0 !== s.match.optionalQuantifier && !0 !== s.match.newBlockMarker || !N(o, z.keepStatic) && s.match.def === a) {
                              var l = L(o);
                              (l <= n || n === o) && (o = l)
                            }
                            G(u, o)
                          }
                      }
                    }
                  }, 0)
                },
                cutEvent: function (e) {
                  ne(this);
                  var t = G(this),
                      n = e.originalEvent || e,
                      i = ie.clipboardData || n.clipboardData,
                      o = v ? E().slice(t.end, t.begin) : E().slice(t.begin, t.end);
                  i.setData("text", v ? o.reverse().join("") : o.join("")), oe.execCommand && oe.execCommand("copy"), K(0, ce.keyCode.DELETE, t), F(this, E(), W().p, e, m !== E().join(""))
                },
                blurEvent: function (e) {
                  var t = ne(this);
                  if (this.inputmask) {
                    this.placeholder = a;
                    var n = this.inputmask._valueGet(),
                        i = E().slice();
                    "" === n && f === re || (z.clearMaskOnLostFocus && (-1 === S() && n === A().join("") ? i = [] : V(i)), !1 === X(i) && (setTimeout(function () {
                      t.trigger("incomplete")
                    }, 0), z.clearIncomplete && (w(), i = z.clearMaskOnLostFocus ? [] : A().slice())), F(this, i, re, e)), m !== E().join("") && (m = i.join(""), t.trigger("change"))
                  }
                },
                mouseenterEvent: function (e) {
                  n = !0, oe.activeElement !== this && z.showMaskOnHover && (this.placeholder = (v ? E().slice().reverse() : E()).join(""))
                },
                submitEvent: function (e) {
                  m !== E().join("") && o.trigger("change"), z.clearMaskOnLostFocus && -1 === S() && r.inputmask._valueGet && r.inputmask._valueGet() === A().join("") && r.inputmask._valueSet(""), z.clearIncomplete && !1 === X(E()) && r.inputmask._valueSet(""), z.removeMaskOnSubmit && (r.inputmask._valueSet(r.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                    F(r, E())
                  }, 0))
                },
                resetEvent: function (e) {
                  r.inputmask.refreshValue = !0, setTimeout(function () {
                    o.trigger("setvalue")
                  }, 0)
                }
              };

          function R(s, e, a, t, n) {
            var l = this || s.inputmask,
                c = t.slice(),
                u = "",
                d = -1,
                p = re;
            if (w(), a || !0 === z.autoUnmask) d = L(d);
            else {
              var i = A().slice(0, L(-1)).join(""),
                  o = c.join("").match(new RegExp("^" + ce.escapeRegex(i), "g"));
              o && 0 < o.length && (c.splice(0, o.length * i.length), d = L(d))
            }
            -1 === d ? (W().p = L(d), d = 0) : W().p = d, l.caretPos = {
              begin: d
            }, ne.each(c, function (e, t) {
              if (t !== re)
                if (W().validPositions[e] === re && c[e] === I(e) && N(e, !0) && !1 === j(e, c[e], !0, re, re, !0)) W().p++;
                else {
                  var n = new ne.Event("_checkval");
                  n.which = t.charCodeAt(0), u += t;
                  var i = S(re, !0);
                  o = d, r = u, -1 === h(!0, 0, !1).slice(o, L(o)).join("").replace(/'/g, "").indexOf(r) || N(o) || !(C(o).match.nativeDef === r.charAt(0) || null === C(o).match.fn && C(o).match.nativeDef === "'" + r.charAt(0) || " " === C(o).match.nativeDef && (C(o + 1).match.nativeDef === r.charAt(0) || null === C(o + 1).match.fn && C(o + 1).match.nativeDef === "'" + r.charAt(0))) ? (p = q.keypressEvent.call(s, n, !0, !1, a, l.caretPos.begin)) && (d = l.caretPos.begin + 1, u = "") : p = q.keypressEvent.call(s, n, !0, !1, a, i + 1), p && (F(re, E(), p.forwardPosition, n, !1), l.caretPos = {
                    begin: p.forwardPosition,
                    end: p.forwardPosition
                  })
                }
              var o, r
            }), e && F(s, E(), p ? p.forwardPosition : re, n || new ne.Event("checkval"), n && "input" === n.type)
          }

          function _(e) {
            if (e) {
              if (e.inputmask === re) return e.value;
              e.inputmask && e.inputmask.refreshValue && q.setValueEvent.call(e)
            }
            var t = [],
                n = W().validPositions;
            for (var i in n) n[i].match && null != n[i].match.fn && t.push(n[i].input);
            var o = 0 === t.length ? "" : (v ? t.reverse() : t).join("");
            if (ne.isFunction(z.onUnMask)) {
              var r = (v ? E().slice().reverse() : E()).join("");
              o = z.onUnMask.call(c, r, o, z)
            }
            return o
          }

          function B(e) {
            return !v || "number" != typeof e || z.greedy && "" === z.placeholder || !r || (e = r.inputmask._valueGet().length - e), e
          }

          function G(e, t, n, i) {
            var o;
            if (t === re) return "selectionStart" in e ? (t = e.selectionStart, n = e.selectionEnd) : ie.getSelection ? (o = ie.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, n = o.endOffset) : oe.selection && oe.selection.createRange && (n = (t = 0 - (o = oe.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length), {
              begin: i ? t : B(t),
              end: i ? n : B(n)
            };
            if (ne.isArray(t) && (n = v ? t[0] : t[1], t = v ? t[1] : t[0]), t.begin !== re && (n = v ? t.begin : t.end, t = v ? t.end : t.begin), "number" == typeof t) {
              t = i ? t : B(t), n = "number" == typeof (n = i ? n : B(n)) ? n : t;
              var r = parseInt(((e.ownerDocument.defaultView || ie).getComputedStyle ? (e.ownerDocument.defaultView || ie).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
              if (e.scrollLeft = r > e.scrollWidth ? r : 0, e.inputmask.caretPos = {
                begin: t,
                end: n
              }, "selectionStart" in e) e.selectionStart = t, e.selectionEnd = n;
              else if (ie.getSelection) {
                if (o = oe.createRange(), e.firstChild === re || null === e.firstChild) {
                  var s = oe.createTextNode("");
                  e.appendChild(s)
                }
                o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length), o.collapse(!0);
                var a = ie.getSelection();
                a.removeAllRanges(), a.addRange(o)
              } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", n), o.moveStart("character", t), o.select());
              Q(e, {
                begin: t,
                end: n
              })
            }
          }

          function U(e) {
            var t, n, i = h(!0, S(), !0, !0),
                o = i.length,
                r = S(),
                s = {},
                a = W().validPositions[r],
                l = a !== re ? a.locator.slice() : re;
            for (t = r + 1; t < i.length; t++) l = (n = b(t, l, t - 1)).locator.slice(), s[t] = ne.extend(!0, {}, n);
            var c = a && a.alternation !== re ? a.locator[a.alternation] : re;
            for (t = o - 1; r < t && ((n = s[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || c && (c !== s[t].locator[a.alternation] && null != n.match.fn || null === n.match.fn && n.locator[a.alternation] && p(n.locator[a.alternation].toString().split(","), c.toString().split(",")) && "" !== $(t)[0].def)) && i[t] === I(t, n.match); t--) o--;
            return e ? {
              l: o,
              def: s[o] ? s[o].match : re
            } : o
          }

          function V(e) {
            for (var t, n = h(!(e.length = 0), 0, !0, re, !0);
                 (t = n.shift()) !== re;) e.push(t);
            return e
          }

          function X(e) {
            if (ne.isFunction(z.isComplete)) return z.isComplete(e, z);
            if ("*" === z.repeat) return re;
            var t = !1,
                n = U(!0),
                i = H(n.l);
            if (n.def === re || n.def.newBlockMarker || n.def.optionality || n.def.optionalQuantifier) {
              t = !0;
              for (var o = 0; o <= i; o++) {
                var r = b(o).match;
                if (null !== r.fn && W().validPositions[o] === re && !0 !== r.optionality && !0 !== r.optionalQuantifier || null === r.fn && e[o] !== I(o, r)) {
                  t = !1;
                  break
                }
              }
            }
            return t
          }

          function K(e, t, n, i, o) {
            if ((z.numericInput || v) && (t === ce.keyCode.BACKSPACE ? t = ce.keyCode.DELETE : t === ce.keyCode.DELETE && (t = ce.keyCode.BACKSPACE), v)) {
              var r = n.end;
              n.end = n.begin, n.begin = r
            }
            if (t === ce.keyCode.BACKSPACE && n.end - n.begin < 1 ? (n.begin = H(n.begin), W().validPositions[n.begin] !== re && W().validPositions[n.begin].input === z.groupSeparator && n.begin--) : t === ce.keyCode.DELETE && n.begin === n.end && (n.end = N(n.end, !0) && W().validPositions[n.end] && W().validPositions[n.end].input !== z.radixPoint ? n.end + 1 : L(n.end) + 1, W().validPositions[n.begin] !== re && W().validPositions[n.begin].input === z.groupSeparator && n.end++), M(n), !0 !== i && !1 !== z.keepStatic || null !== z.regex) {
              var s = D(!0);
              if (s) {
                var a = s.caret !== re ? s.caret : s.pos ? L(s.pos.begin ? s.pos.begin : s.pos) : S(-1, !0);
                (t !== ce.keyCode.DELETE || n.begin > a) && n.begin
              }
            }
            var l = S(n.begin, !0);
            if (l < n.begin || -1 === n.begin) W().p = L(l);
            else if (!0 !== i && (W().p = n.begin, !0 !== o))
              for (; W().p < l && W().validPositions[W().p] === re;) W().p++
          }

          function Y(c) {
            var u = (c.ownerDocument.defaultView || ie).getComputedStyle(c, null),
                e = oe.createElement("div");
            e.style.width = u.width, e.style.textAlign = u.textAlign, f = oe.createElement("div"), (c.inputmask.colorMask = f).className = "im-colormask", c.parentNode.insertBefore(f, c), c.parentNode.removeChild(c), f.appendChild(c), f.appendChild(e), c.style.left = e.offsetLeft + "px", ne(f).on("mouseleave", function (e) {
              return q.mouseleaveEvent.call(c, [e])
            }), ne(f).on("mouseenter", function (e) {
              return q.mouseenterEvent.call(c, [e])
            }), ne(f).on("click", function (e) {
              return G(c, function (e) {
                var t, n = oe.createElement("span");
                for (var i in u) isNaN(i) && -1 !== i.indexOf("font") && (n.style[i] = u[i]);
                n.style.textTransform = u.textTransform, n.style.letterSpacing = u.letterSpacing, n.style.position = "absolute", n.style.height = "auto", n.style.width = "auto", n.style.visibility = "hidden", n.style.whiteSpace = "nowrap", oe.body.appendChild(n);
                var o, r = c.inputmask._valueGet(),
                    s = 0;
                for (t = 0, o = r.length; t <= o; t++) {
                  if (n.innerHTML += r.charAt(t) || "_", n.offsetWidth >= e) {
                    var a = e - s,
                        l = n.offsetWidth - e;
                    n.innerHTML = r.charAt(t), t = (a -= n.offsetWidth / 3) < l ? t - 1 : t;
                    break
                  }
                  s = n.offsetWidth
                }
                return oe.body.removeChild(n), t
              }(e.clientX)), q.clickEvent.call(c, [e])
            })
          }

          function Q(e, t, n) {
            var i, o, r, s = [],
                a = !1,
                l = 0;

            function c(e) {
              if (e === re && (e = ""), a || null !== i.fn && o.input !== re)
                if (a && (null !== i.fn && o.input !== re || "" === i.def)) {
                  a = !1;
                  var t = s.length;
                  s[t - 1] = s[t - 1] + "</span>", s.push(e)
                } else s.push(e);
              else a = !0, s.push("<span class='im-static'>" + e)
            }

            if (f !== re) {
              var u = E();
              if (t === re ? t = G(e) : t.begin === re && (t = {
                begin: t,
                end: t
              }), !0 !== n) {
                for (var d = S(); W().validPositions[l] ? (o = W().validPositions[l], i = o.match, r = o.locator.slice(), c(u[l])) : (o = b(l, r, l - 1), i = o.match, r = o.locator.slice(), !1 === z.jitMasking || l < d || "number" == typeof z.jitMasking && isFinite(z.jitMasking) && z.jitMasking > l ? c(I(l, i)) : a = !1), l++, (g === re || l < g) && (null !== i.fn || "" !== i.def) || l < d || a;) ;
                a && c(), oe.activeElement === e && (s.splice(t.begin, 0, t.begin === t.end || t.end > W().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), s.splice(t.end + 1, 0, "</mark>"))
              }
              var p = f.getElementsByTagName("div")[0];
              p.innerHTML = s.join(""), e.inputmask.positionColorMask(e, p)
            }
          }

          if (ce.prototype.positionColorMask = function (e, t) {
            e.style.left = t.offsetLeft + "px"
          }, e !== re) switch (e.action) {
            case "isComplete":
              return r = e.el, X(E());
            case "unmaskedvalue":
              return r !== re && e.value === re || (i = e.value, i = (ne.isFunction(z.onBeforeMask) && z.onBeforeMask.call(c, i, z) || i).split(""), R.call(this, re, !1, !1, i), ne.isFunction(z.onBeforeWrite) && z.onBeforeWrite.call(c, re, E(), 0, z)), _(r);
            case "mask":
              !function (e) {
                l.off(e);
                var t = function (e, a) {
                  var t = e.getAttribute("type"),
                      n = "INPUT" === e.tagName && -1 !== ne.inArray(t, a.supportsInputType) || e.isContentEditable || "TEXTAREA" === e.tagName;
                  if (!n)
                    if ("INPUT" === e.tagName) {
                      var i = oe.createElement("input");
                      i.setAttribute("type", t), n = "text" === i.type, i = null
                    } else n = "partial";
                  return !1 !== n ? function (e) {
                    var t, n, i;

                    function o() {
                      return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== S() || !0 !== a.nullable ? oe.activeElement === this && a.clearMaskOnLostFocus ? (v ? V(E().slice()).reverse() : V(E().slice())).join("") : t.call(this) : "" : t.call(this)
                    }

                    function r(e) {
                      n.call(this, e), this.inputmask && ne(this).trigger("setvalue", [e])
                    }

                    if (!e.inputmask.__valueGet) {
                      if (!0 !== a.noValuePatching) {
                        if (Object.getOwnPropertyDescriptor) {
                          "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === pe("test".__proto__) ? function (e) {
                            return e.__proto__
                          } : function (e) {
                            return e.constructor.prototype
                          });
                          var s = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : re;
                          s && s.get && s.set ? (t = s.get, n = s.set, Object.defineProperty(e, "value", {
                            get: o,
                            set: r,
                            configurable: !0
                          })) : "INPUT" !== e.tagName && (t = function () {
                            return this.textContent
                          }, n = function (e) {
                            this.textContent = e
                          }, Object.defineProperty(e, "value", {
                            get: o,
                            set: r,
                            configurable: !0
                          }))
                        } else oe.__lookupGetter__ && e.__lookupGetter__("value") && (t = e.__lookupGetter__("value"), n = e.__lookupSetter__("value"), e.__defineGetter__("value", o), e.__defineSetter__("value", r));
                        e.inputmask.__valueGet = t, e.inputmask.__valueSet = n
                      }
                      e.inputmask._valueGet = function (e) {
                        return v && !0 !== e ? t.call(this.el).split("").reverse().join("") : t.call(this.el)
                      }, e.inputmask._valueSet = function (e, t) {
                        n.call(this.el, null === e || e === re ? "" : !0 !== t && v ? e.split("").reverse().join("") : e)
                      }, t === re && (t = function () {
                        return this.value
                      }, n = function (e) {
                        this.value = e
                      }, function (e) {
                        if (ne.valHooks && (ne.valHooks[e] === re || !0 !== ne.valHooks[e].inputmaskpatch)) {
                          var n = ne.valHooks[e] && ne.valHooks[e].get ? ne.valHooks[e].get : function (e) {
                                return e.value
                              },
                              o = ne.valHooks[e] && ne.valHooks[e].set ? ne.valHooks[e].set : function (e, t) {
                                return e.value = t, e
                              };
                          ne.valHooks[e] = {
                            get: function (e) {
                              if (e.inputmask) {
                                if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                var t = n(e);
                                return -1 !== S(re, re, e.inputmask.maskset.validPositions) || !0 !== a.nullable ? t : ""
                              }
                              return n(e)
                            },
                            set: function (e, t) {
                              var n, i = ne(e);
                              return n = o(e, t), e.inputmask && i.trigger("setvalue", [t]), n
                            },
                            inputmaskpatch: !0
                          }
                        }
                      }(e.type), i = e, l.on(i, "mouseenter", function (e) {
                        var t = ne(this);
                        this.inputmask._valueGet() !== E().join("") && t.trigger("setvalue")
                      }))
                    }
                  }(e) : e.inputmask = re, n
                }(e, z);
                if (!1 !== t && (o = ne(r = e), a = r.placeholder, -1 === (g = r !== re ? r.maxLength : re) && (g = re), !0 === z.colorMask && Y(r), se && ("inputmode" in r && (r.inputmode = z.inputmode, r.setAttribute("inputmode", z.inputmode)), !0 === z.disablePredictiveText && ("autocorrect" in r ? r.autocorrect = !1 : (!0 !== z.colorMask && Y(r), r.type = "password"))), !0 === t && (r.setAttribute("im-insert", z.insertMode), l.on(r, "submit", q.submitEvent), l.on(r, "reset", q.resetEvent), l.on(r, "blur", q.blurEvent), l.on(r, "focus", q.focusEvent), !0 !== z.colorMask && (l.on(r, "click", q.clickEvent), l.on(r, "mouseleave", q.mouseleaveEvent), l.on(r, "mouseenter", q.mouseenterEvent)), l.on(r, "paste", q.pasteEvent), l.on(r, "cut", q.cutEvent), l.on(r, "complete", z.oncomplete), l.on(r, "incomplete", z.onincomplete), l.on(r, "cleared", z.oncleared), se || !0 === z.inputEventOnly ? r.removeAttribute("maxLength") : (l.on(r, "keydown", q.keydownEvent), l.on(r, "keypress", q.keypressEvent)), l.on(r, "input", q.inputFallBackEvent), l.on(r, "beforeinput", q.beforeInputEvent)), l.on(r, "setvalue", q.setValueEvent), m = A().join(""), "" !== r.inputmask._valueGet(!0) || !1 === z.clearMaskOnLostFocus || oe.activeElement === r)) {
                  var n = ne.isFunction(z.onBeforeMask) && z.onBeforeMask.call(c, r.inputmask._valueGet(!0), z) || r.inputmask._valueGet(!0);
                  "" !== n && R(r, !0, !1, n.split(""));
                  var i = E().slice();
                  m = i.join(""), !1 === X(i) && z.clearIncomplete && w(), z.clearMaskOnLostFocus && oe.activeElement !== r && (-1 === S() ? i = [] : V(i)), (!1 === z.clearMaskOnLostFocus || z.showMaskOnFocus && oe.activeElement === r || "" !== r.inputmask._valueGet(!0)) && F(r, i), oe.activeElement === r && G(r, L(S()))
                }
              }(r);
              break;
            case "format":
              return i = (ne.isFunction(z.onBeforeMask) && z.onBeforeMask.call(c, e.value, z) || e.value).split(""), R.call(this, re, !0, !1, i), e.metadata ? {
                value: v ? E().slice().reverse().join("") : E().join(""),
                metadata: de.call(this, {
                  action: "getmetadata"
                }, t, z)
              } : v ? E().slice().reverse().join("") : E().join("");
            case "isValid":
              e.value ? (i = e.value.split(""), R.call(this, re, !0, !0, i)) : e.value = E().join("");
              for (var J = E(), Z = U(), ee = J.length - 1; Z < ee && !N(ee); ee--) ;
              return J.splice(Z, ee + 1 - Z), X(J) && e.value === E().join("");
            case "getemptymask":
              return A().join("");
            case "remove":
              return r && r.inputmask && (ne.data(r, "_inputmask_opts", null), o = ne(r), r.inputmask._valueSet(z.autoUnmask ? _(r) : r.inputmask._valueGet(!0)), l.off(r), r.inputmask.colorMask && ((f = r.inputmask.colorMask).removeChild(r), f.parentNode.insertBefore(r, f), f.parentNode.removeChild(f)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), "value") && r.inputmask.__valueGet && Object.defineProperty(r, "value", {
                get: r.inputmask.__valueGet,
                set: r.inputmask.__valueSet,
                configurable: !0
              }) : oe.__lookupGetter__ && r.__lookupGetter__("value") && r.inputmask.__valueGet && (r.__defineGetter__("value", r.inputmask.__valueGet), r.__defineSetter__("value", r.inputmask.__valueSet)), r.inputmask = re), r;
            case "getmetadata":
              if (ne.isArray(t.metadata)) {
                var te = h(!0, 0, !1).join("");
                return ne.each(t.metadata, function (e, t) {
                  if (t.mask === te) return te = t, !1
                }), te
              }
              return t.metadata
          }
        }

        return ce.prototype = {
          dataAttribute: "data-inputmask",
          defaults: {
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: ne.noop,
            onincomplete: ne.noop,
            oncleared: ne.noop,
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: ne.noop,
            onBeforeMask: null,
            onBeforePaste: function (e, t) {
              return ne.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: ne.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password", "search"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: re,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            disablePredictiveText: !1,
            importDataAttributes: !0
          },
          definitions: {
            9: {
              validator: "[0-9１-９]",
              definitionSymbol: "*"
            },
            a: {
              validator: "[A-Za-zА-яЁёÀ-ÿµ]",
              definitionSymbol: "*"
            },
            "*": {
              validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"
            }
          },
          aliases: {},
          masksCache: {},
          mask: function (e) {
            var o = this;
            return "string" == typeof e && (e = oe.getElementById(e) || oe.querySelectorAll(e)), e = e.nodeName ? [e] : e, ne.each(e, function (e, t) {
              var n = ne.extend(!0, {}, o.opts);
              if (function (n, e, i, o) {
                if (!0 === e.importDataAttributes) {
                  var t, r, s, a, l = function (e, t) {
                        null !== (t = t !== re ? t : n.getAttribute(o + "-" + e)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = ie[t] : "false" === t ? t = !1 : "true" === t && (t = !0)), i[e] = t)
                      },
                      c = n.getAttribute(o);
                  if (c && "" !== c && (c = c.replace(/'/g, '"'), r = JSON.parse("{" + c + "}")), r)
                    for (a in s = re, r)
                      if ("alias" === a.toLowerCase()) {
                        s = r[a];
                        break
                      }
                  for (t in l("alias", s), i.alias && u(i.alias, i, e), e) {
                    if (r)
                      for (a in s = re, r)
                        if (a.toLowerCase() === t.toLowerCase()) {
                          s = r[a];
                          break
                        }
                    l(t, s)
                  }
                }
                return ne.extend(!0, e, i), "rtl" !== n.dir && !e.rightAlign || (n.style.textAlign = "right"), "rtl" !== n.dir && !e.numericInput || (n.dir = "ltr", n.removeAttribute("dir"), e.isRTL = !0), Object.keys(i).length
              }(t, n, ne.extend(!0, {}, o.userOptions), o.dataAttribute)) {
                var i = r(n, o.noMasksCache);
                i !== re && (t.inputmask !== re && (t.inputmask.opts.autoUnmask = !0, t.inputmask.remove()), t.inputmask = new ce(re, re, !0), t.inputmask.opts = n, t.inputmask.noMasksCache = o.noMasksCache, t.inputmask.userOptions = ne.extend(!0, {}, o.userOptions), t.inputmask.isRTL = n.isRTL || n.numericInput, (t.inputmask.el = t).inputmask.maskset = i, ne.data(t, "_inputmask_opts", n), de.call(t.inputmask, {
                  action: "mask"
                }))
              }
            }), e && e[0] && e[0].inputmask || this
          },
          option: function (e, t) {
            return "string" == typeof e ? this.opts[e] : "object" === (void 0 === e ? "undefined" : pe(e)) ? (ne.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0
          },
          unmaskedvalue: function (e) {
            return this.maskset = this.maskset || r(this.opts, this.noMasksCache), de.call(this, {
              action: "unmaskedvalue",
              value: e
            })
          },
          remove: function () {
            return de.call(this, {
              action: "remove"
            })
          },
          getemptymask: function () {
            return this.maskset = this.maskset || r(this.opts, this.noMasksCache), de.call(this, {
              action: "getemptymask"
            })
          },
          hasMaskedValue: function () {
            return !this.opts.autoUnmask
          },
          isComplete: function () {
            return this.maskset = this.maskset || r(this.opts, this.noMasksCache), de.call(this, {
              action: "isComplete"
            })
          },
          getmetadata: function () {
            return this.maskset = this.maskset || r(this.opts, this.noMasksCache), de.call(this, {
              action: "getmetadata"
            })
          },
          isValid: function (e) {
            return this.maskset = this.maskset || r(this.opts, this.noMasksCache), de.call(this, {
              action: "isValid",
              value: e
            })
          },
          format: function (e, t) {
            return this.maskset = this.maskset || r(this.opts, this.noMasksCache), de.call(this, {
              action: "format",
              value: e,
              metadata: t
            })
          },
          setValue: function (e) {
            this.el && ne(this.el).trigger("setvalue", [e])
          },
          analyseMask: function (e, r, s) {
            var t, n, i, o, a, l,
                c = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                u = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                d = !1,
                p = new m,
                f = [],
                h = [];

            function m(e, t, n, i) {
              this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
                min: 1,
                max: 1
              }
            }

            function g(n, e, i) {
              i = i !== re ? i : n.matches.length;
              var o = n.matches[i - 1];
              if (r) 0 === e.indexOf("[") || d && /\\d|\\s|\\w]/i.test(e) || "." === e ? n.matches.splice(i++, 0, {
                fn: new RegExp(e, s.casing ? "i" : ""),
                optionality: !1,
                newBlockMarker: o === re ? "master" : o.def !== e,
                casing: null,
                def: e,
                placeholder: re,
                nativeDef: e
              }) : (d && (e = e[e.length - 1]), ne.each(e.split(""), function (e, t) {
                o = n.matches[i - 1], n.matches.splice(i++, 0, {
                  fn: null,
                  optionality: !1,
                  newBlockMarker: o === re ? "master" : o.def !== t && null !== o.fn,
                  casing: null,
                  def: s.staticDefinitionSymbol || t,
                  placeholder: s.staticDefinitionSymbol !== re ? t : re,
                  nativeDef: (d ? "'" : "") + t
                })
              })), d = !1;
              else {
                var t = (s.definitions ? s.definitions[e] : re) || ce.prototype.definitions[e];
                t && !d ? n.matches.splice(i++, 0, {
                  fn: t.validator ? "string" == typeof t.validator ? new RegExp(t.validator, s.casing ? "i" : "") : new function () {
                    this.test = t.validator
                  } : new RegExp("."),
                  optionality: !1,
                  newBlockMarker: o === re ? "master" : o.def !== (t.definitionSymbol || e),
                  casing: t.casing,
                  def: t.definitionSymbol || e,
                  placeholder: t.placeholder,
                  nativeDef: e
                }) : (n.matches.splice(i++, 0, {
                  fn: null,
                  optionality: !1,
                  newBlockMarker: o === re ? "master" : o.def !== e && null !== o.fn,
                  casing: null,
                  def: s.staticDefinitionSymbol || e,
                  placeholder: s.staticDefinitionSymbol !== re ? e : re,
                  nativeDef: (d ? "'" : "") + e
                }), d = !1)
              }
            }

            function v() {
              if (0 < f.length) {
                if (g(o = f[f.length - 1], n), o.isAlternator) {
                  a = f.pop();
                  for (var e = 0; e < a.matches.length; e++) a.matches[e].isGroup && (a.matches[e].isGroup = !1);
                  0 < f.length ? (o = f[f.length - 1]).matches.push(a) : p.matches.push(a)
                }
              } else g(p, n)
            }

            function y(e) {
              var t = new m(!0);
              return t.openGroup = !1, t.matches = e, t
            }

            for (r && (s.optionalmarker[0] = re, s.optionalmarker[1] = re); t = r ? u.exec(e) : c.exec(e);) {
              if (n = t[0], r) switch (n.charAt(0)) {
                case "?":
                  n = "{0,1}";
                  break;
                case "+":
                case "*":
                  n = "{" + n + "}"
              }
              if (d) v();
              else switch (n.charAt(0)) {
                case "(?=":
                case "(?!":
                case "(?<=":
                case "(?<!":
                  break;
                case s.escapeChar:
                  d = !0, r && v();
                  break;
                case s.optionalmarker[1]:
                case s.groupmarker[1]:
                  if ((i = f.pop()).openGroup = !1, i !== re)
                    if (0 < f.length) {
                      if ((o = f[f.length - 1]).matches.push(i), o.isAlternator) {
                        a = f.pop();
                        for (var k = 0; k < a.matches.length; k++) a.matches[k].isGroup = !1, a.matches[k].alternatorGroup = !1;
                        0 < f.length ? (o = f[f.length - 1]).matches.push(a) : p.matches.push(a)
                      }
                    } else p.matches.push(i);
                  else v();
                  break;
                case s.optionalmarker[0]:
                  f.push(new m(!1, !0));
                  break;
                case s.groupmarker[0]:
                  f.push(new m(!0));
                  break;
                case s.quantifiermarker[0]:
                  var b = new m(!1, !1, !0),
                      x = (n = n.replace(/[{}]/g, "")).split("|"),
                      w = x[0].split(","),
                      S = isNaN(w[0]) ? w[0] : parseInt(w[0]),
                      T = 1 === w.length ? S : isNaN(w[1]) ? w[1] : parseInt(w[1]);
                  "*" !== S && "+" !== S || (S = "*" === T ? 0 : 1), b.quantifier = {
                    min: S,
                    max: T,
                    jit: x[1]
                  };
                  var C = 0 < f.length ? f[f.length - 1].matches : p.matches;
                  if ((t = C.pop()).isAlternator) {
                    C.push(t), C = t.matches;
                    var $ = new m(!0),
                        A = C.pop();
                    C.push($), C = $.matches, t = A
                  }
                  t.isGroup || (t = y([t])), C.push(t), C.push(b);
                  break;
                case s.alternatormarker:
                  var E = function (e) {
                    var t = e.pop();
                    return t.isQuantifier && (t = y([e.pop(), t])), t
                  };
                  if (0 < f.length) {
                    var P = (o = f[f.length - 1]).matches[o.matches.length - 1];
                    l = o.openGroup && (P.matches === re || !1 === P.isGroup && !1 === P.isAlternator) ? f.pop() : E(o.matches)
                  } else l = E(p.matches);
                  if (l.isAlternator) f.push(l);
                  else if (l.alternatorGroup ? (a = f.pop(), l.alternatorGroup = !1) : a = new m(!1, !1, !1, !0), a.matches.push(l), f.push(a), l.openGroup) {
                    var D = new m(!(l.openGroup = !1));
                    D.alternatorGroup = !0, f.push(D)
                  }
                  break;
                default:
                  v()
              }
            }
            for (; 0 < f.length;) i = f.pop(), p.matches.push(i);
            return 0 < p.matches.length && (function i(o) {
              o && o.matches && ne.each(o.matches, function (e, t) {
                var n = o.matches[e + 1];
                (n === re || n.matches === re || !1 === n.isQuantifier) && t && t.isGroup && (t.isGroup = !1, r || (g(t, s.groupmarker[0], 0), !0 !== t.openGroup && g(t, s.groupmarker[1]))), i(t)
              })
            }(p), h.push(p)), (s.numericInput || s.isRTL) && function e(t) {
              for (var n in t.matches = t.matches.reverse(), t.matches)
                if (t.matches.hasOwnProperty(n)) {
                  var i = parseInt(n);
                  if (t.matches[n].isQuantifier && t.matches[i + 1] && t.matches[i + 1].isGroup) {
                    var o = t.matches[n];
                    t.matches.splice(n, 1), t.matches.splice(i + 1, 0, o)
                  }
                  t.matches[n].matches !== re ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((r = t.matches[n]) === s.optionalmarker[0] ? r = s.optionalmarker[1] : r === s.optionalmarker[1] ? r = s.optionalmarker[0] : r === s.groupmarker[0] ? r = s.groupmarker[1] : r === s.groupmarker[1] && (r = s.groupmarker[0]), r)
                }
              var r;
              return t
            }(h[0]), h
          }
        }, ce.extendDefaults = function (e) {
          ne.extend(!0, ce.prototype.defaults, e)
        }, ce.extendDefinitions = function (e) {
          ne.extend(!0, ce.prototype.definitions, e)
        }, ce.extendAliases = function (e) {
          ne.extend(!0, ce.prototype.aliases, e)
        }, ce.format = function (e, t, n) {
          return ce(t).format(e, n)
        }, ce.unmask = function (e, t) {
          return ce(t).unmaskedvalue(e)
        }, ce.isValid = function (e, t) {
          return ce(t).isValid(e)
        }, ce.remove = function (e) {
          "string" == typeof e && (e = oe.getElementById(e) || oe.querySelectorAll(e)), e = e.nodeName ? [e] : e, ne.each(e, function (e, t) {
            t.inputmask && t.inputmask.remove()
          })
        }, ce.setValue = function (e, n) {
          "string" == typeof e && (e = oe.getElementById(e) || oe.querySelectorAll(e)), e = e.nodeName ? [e] : e, ne.each(e, function (e, t) {
            t.inputmask ? t.inputmask.setValue(n) : ne(t).trigger("setvalue", [n])
          })
        }, ce.escapeRegex = function (e) {
          return e.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
        }, ce.keyCode = {
          BACKSPACE: 8,
          BACKSPACE_SAFARI: 127,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          INSERT: 45,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
          X: 88,
          CONTROL: 17
        }, ce
      }) ? i.apply(t, o) : i) || (e.exports = r)
    }, function (e, t, n) {
      "use strict";
      var i;
      void 0 === (i = function () {
        return window
      }.call(t, n, t, e)) || (e.exports = i)
    }, function (e, t, n) {
      "use strict";
      var i;
      void 0 === (i = function () {
        return document
      }.call(t, n, t, e)) || (e.exports = i)
    }, function (e, t, n) {
      "use strict";
      var i, o, r;
      o = [n(2), n(4)], void 0 === (r = "function" == typeof (i = function (e, t) {
        return t.extendDefinitions({
          A: {
            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
            casing: "upper"
          },
          "&": {
            validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
            casing: "upper"
          },
          "#": {
            validator: "[0-9A-Fa-f]",
            casing: "upper"
          }
        }), t.extendAliases({
          cssunit: {
            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
          },
          url: {
            regex: "(https?|ftp)//.*",
            autoUnmask: !1
          },
          ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
              i: {
                validator: function (e, t, n, i, o) {
                  return e = -1 < n - 1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, -1 < n - 2 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                }
              }
            },
            onUnMask: function (e, t, n) {
              return e
            },
            inputmode: "numeric"
          },
          email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            casing: "lower",
            onBeforePaste: function (e, t) {
              return (e = e.toLowerCase()).replace("mailto:", "")
            },
            definitions: {
              "*": {
                validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
              },
              "-": {
                validator: "[0-9A-Za-z-]"
              }
            },
            onUnMask: function (e, t, n) {
              return e
            },
            inputmode: "email"
          },
          mac: {
            mask: "##:##:##:##:##:##"
          },
          vin: {
            mask: "V{13}9{4}",
            definitions: {
              V: {
                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                casing: "upper"
              }
            },
            clearIncomplete: !0,
            autoUnmask: !0
          }
        }), t
      }) ? i.apply(t, o) : i) || (e.exports = r)
    }, function (e, t, n) {
      "use strict";
      var i, o, r;
      o = [n(2), n(4)], void 0 === (r = "function" == typeof (i = function (m, g, v) {
        function s(e, t) {
          for (var n = "", i = 0; i < e.length; i++) g.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker.start === e.charAt(i) || t.optionalmarker.end === e.charAt(i) || t.quantifiermarker.start === e.charAt(i) || t.quantifiermarker.end === e.charAt(i) || t.groupmarker.start === e.charAt(i) || t.groupmarker.end === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
          return n
        }

        return g.extendAliases({
          numeric: {
            mask: function (e) {
              if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = v), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
                var t = Math.floor(e.integerDigits / e.groupSize),
                    n = e.integerDigits % e.groupSize;
                e.integerDigits = parseInt(e.integerDigits) + (0 == n ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*")
              }
              1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
              var i = "[+]";
              if (i += s(e.prefix, e), !0 === e.integerOptional ? i += "~{1," + e.integerDigits + "}" : i += "~{" + e.integerDigits + "}", e.digits !== v) {
                var o = e.decimalProtect ? ":" : e.radixPoint,
                    r = e.digits.toString().split(",");
                isFinite(r[0]) && r[1] && isFinite(r[1]) ? i += o + ";{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? i += "[" + o + ";{1," + e.digits + "}]" : i += o + ";{" + e.digits + "}")
              }
              return i += s(e.suffix, e), i += "[-]", e.greedy = !1, i
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            enforceDigitsOnBlur: !1,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowMinus: !0,
            negationSymbol: {
              front: "-",
              back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            inputmode: "numeric",
            preValidation: function (e, t, n, i, o, r) {
              if ("-" === n || n === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === v || !o.isNegative, "" === e.join("") || {
                caret: t,
                dopost: !0
              });
              if (!1 === i && n === o.radixPoint && o.digits !== v && (isNaN(o.digits) || 0 < parseInt(o.digits))) {
                var s = m.inArray(o.radixPoint, e);
                if (-1 !== s && r.validPositions[s] !== v) return !0 === o.numericInput ? t === s : {
                  caret: s + 1
                }
              }
              return !0
            },
            postValidation: function (e, t, n) {
              var i = n.suffix.split(""),
                  o = n.prefix.split("");
              if (t.pos === v && t.caret !== v && !0 !== t.dopost) return t;
              var r = t.caret !== v ? t.caret : t.pos,
                  s = e.slice();
              n.numericInput && (r = s.length - r - 1, s = s.reverse());
              var a = s[r];
              if (a === n.groupSeparator && (a = s[r += 1]), r === s.length - n.suffix.length - 1 && a === n.radixPoint) return t;
              a !== v && a !== n.radixPoint && a !== n.negationSymbol.front && a !== n.negationSymbol.back && (s[r] = "?", 0 < n.prefix.length && r >= (!1 === n.isNegative ? 1 : 0) && r < n.prefix.length - 1 + (!1 === n.isNegative ? 1 : 0) ? o[r - (!1 === n.isNegative ? 1 : 0)] = "?" : 0 < n.suffix.length && r >= s.length - n.suffix.length - (!1 === n.isNegative ? 1 : 0) && (i[r - (s.length - n.suffix.length - (!1 === n.isNegative ? 1 : 0))] = "?")), o = o.join(""), i = i.join("");
              var l = s.join("").replace(o, "");
              if (l = (l = (l = (l = l.replace(i, "")).replace(new RegExp(g.escapeRegex(n.groupSeparator), "g"), "")).replace(new RegExp("[-" + g.escapeRegex(n.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(g.escapeRegex(n.negationSymbol.back) + "$"), ""), isNaN(n.placeholder) && (l = l.replace(new RegExp(g.escapeRegex(n.placeholder), "g"), "")), 1 < l.length && 1 !== l.indexOf(n.radixPoint) && ("0" === a && (l = l.replace(/^\?/g, "")), l = l.replace(/^0/g, "")), l.charAt(0) === n.radixPoint && "" !== n.radixPoint && !0 !== n.numericInput && (l = "0" + l), "" !== l) {
                if (l = l.split(""), (!n.digitsOptional || n.enforceDigitsOnBlur && "blur" === t.event) && isFinite(n.digits)) {
                  var c = m.inArray(n.radixPoint, l),
                      u = m.inArray(n.radixPoint, s);
                  -1 === c && (l.push(n.radixPoint), c = l.length - 1);
                  for (var d = 1; d <= n.digits; d++) n.digitsOptional && (!n.enforceDigitsOnBlur || "blur" !== t.event) || l[c + d] !== v && l[c + d] !== n.placeholder.charAt(0) ? -1 !== u && s[u + d] !== v && (l[c + d] = l[c + d] || s[u + d]) : l[c + d] = t.placeholder || n.placeholder.charAt(0)
                }
                if (!0 !== n.autoGroup || "" === n.groupSeparator || a === n.radixPoint && t.pos === v && !t.dopost) l = l.join("");
                else {
                  var p = l[l.length - 1] === n.radixPoint && t.c === n.radixPoint;
                  l = g(function (e, t) {
                    var n = "";
                    if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                      var i = e.join("").split(t.radixPoint);
                      i[1] && (n += t.radixPoint + "*{" + i[1].match(/^\d*\??\d*/)[0].length + "}")
                    }
                    return n
                  }(l, n), {
                    numericInput: !0,
                    jitMasking: !0,
                    definitions: {
                      "*": {
                        validator: "[0-9?]",
                        cardinality: 1
                      }
                    }
                  }).format(l.join("")), p && (l += n.radixPoint), l.charAt(0) === n.groupSeparator && l.substr(1)
                }
              }
              if (n.isNegative && "blur" === t.event && (n.isNegative = "0" !== l), l = o + l, l += i, n.isNegative && (l = n.negationSymbol.front + l, l += n.negationSymbol.back), l = l.split(""), a !== v)
                if (a !== n.radixPoint && a !== n.negationSymbol.front && a !== n.negationSymbol.back) -1 < (r = m.inArray("?", l)) ? l[r] = a : r = t.caret || 0;
                else if (a === n.radixPoint || a === n.negationSymbol.front || a === n.negationSymbol.back) {
                  var f = m.inArray(a, l);
                  -1 !== f && (r = f)
                }
              n.numericInput && (r = l.length - r - 1, l = l.reverse());
              var h = {
                caret: a === v || t.pos !== v ? r + (n.numericInput ? -1 : 1) : r,
                buffer: l,
                refreshFromBuffer: t.dopost || e.join("") !== l.join("")
              };
              return h.refreshFromBuffer ? h : t
            },
            onBeforeWrite: function (e, t, n, i) {
              if (e) switch (e.type) {
                case "keydown":
                  return i.postValidation(t, {
                    caret: n,
                    dopost: !0
                  }, i);
                case "blur":
                case "checkval":
                  var o;
                  if ((r = i).parseMinMaxOptions === v && (null !== r.min && (r.min = r.min.toString().replace(new RegExp(g.escapeRegex(r.groupSeparator), "g"), ""), "," === r.radixPoint && (r.min = r.min.replace(r.radixPoint, ".")), r.min = isFinite(r.min) ? parseFloat(r.min) : NaN, isNaN(r.min) && (r.min = Number.MIN_VALUE)), null !== r.max && (r.max = r.max.toString().replace(new RegExp(g.escapeRegex(r.groupSeparator), "g"), ""), "," === r.radixPoint && (r.max = r.max.replace(r.radixPoint, ".")), r.max = isFinite(r.max) ? parseFloat(r.max) : NaN, isNaN(r.max) && (r.max = Number.MAX_VALUE)), r.parseMinMaxOptions = "done"), null !== i.min || null !== i.max) {
                    if (o = i.onUnMask(t.join(""), v, m.extend({}, i, {
                      unmaskAsNumber: !0
                    })), null !== i.min && o < i.min) return i.isNegative = i.min < 0, i.postValidation(i.min.toString().replace(".", i.radixPoint).split(""), {
                      caret: n,
                      dopost: !0,
                      placeholder: "0"
                    }, i);
                    if (null !== i.max && o > i.max) return i.isNegative = i.max < 0, i.postValidation(i.max.toString().replace(".", i.radixPoint).split(""), {
                      caret: n,
                      dopost: !0,
                      placeholder: "0"
                    }, i)
                  }
                  return i.postValidation(t, {
                    caret: n,
                    placeholder: "0",
                    event: "blur"
                  }, i);
                case "_checkval":
                  return {
                    caret: n
                  }
              }
              var r
            },
            regex: {
              integerPart: function (e, t) {
                return t ? new RegExp("[" + g.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + g.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
              },
              integerNPart: function (e) {
                return new RegExp("[\\d" + g.escapeRegex(e.groupSeparator) + g.escapeRegex(e.placeholder.charAt(0)) + "]+")
              }
            },
            definitions: {
              "~": {
                validator: function (e, t, n, i, o, r) {
                  var s;
                  if ("k" === e || "m" === e) {
                    s = {
                      insert: [],
                      c: 0
                    };
                    for (var a = 0, l = "k" === e ? 2 : 5; a < l; a++) s.insert.push({
                      pos: n + a,
                      c: 0
                    });
                    return s.pos = n + l, s
                  }
                  if (!0 === (s = i ? new RegExp("[0-9" + g.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e))) {
                    if (!0 !== o.numericInput && t.validPositions[n] !== v && "~" === t.validPositions[n].match.def && !r) {
                      var c = t.buffer.join(""),
                          u = (c = (c = c.replace(new RegExp("[-" + g.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(g.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
                      1 < u.length && (u[1] = u[1].replace(/0/g, o.placeholder.charAt(0))), "0" === u[0] && (u[0] = u[0].replace(/0/g, o.placeholder.charAt(0))), c = u[0] + o.radixPoint + u[1] || "";
                      var d = t._buffer.join("");
                      for (c === o.radixPoint && (c = d); null === c.match(g.escapeRegex(d) + "$");) d = d.slice(1);
                      s = (c = (c = c.replace(d, "")).split(""))[n] === v ? {
                        pos: n,
                        remove: n
                      } : {
                        pos: n
                      }
                    }
                  } else i || e !== o.radixPoint || t.validPositions[n - 1] !== v || (s = {
                    insert: {
                      pos: n,
                      c: 0
                    },
                    pos: n + 1
                  });
                  return s
                },
                cardinality: 1
              },
              "+": {
                validator: function (e, t, n, i, o) {
                  return o.allowMinus && ("-" === e || e === o.negationSymbol.front)
                },
                cardinality: 1,
                placeholder: ""
              },
              "-": {
                validator: function (e, t, n, i, o) {
                  return o.allowMinus && e === o.negationSymbol.back
                },
                cardinality: 1,
                placeholder: ""
              },
              ":": {
                validator: function (e, t, n, i, o) {
                  var r = "[" + g.escapeRegex(o.radixPoint) + "]",
                      s = new RegExp(r).test(e);
                  return s && t.validPositions[n] && t.validPositions[n].match.placeholder === o.radixPoint && (s = {
                    caret: n + 1
                  }), s
                },
                cardinality: 1,
                placeholder: function (e) {
                  return e.radixPoint
                }
              }
            },
            onUnMask: function (e, t, n) {
              if ("" === t && !0 === n.nullable) return t;
              var i = e.replace(n.prefix, "");
              return i = (i = i.replace(n.suffix, "")).replace(new RegExp(g.escapeRegex(n.groupSeparator), "g"), ""), "" !== n.placeholder.charAt(0) && (i = i.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== i.indexOf(n.radixPoint) && (i = i.replace(g.escapeRegex.call(this, n.radixPoint), ".")), i = (i = i.replace(new RegExp("^" + g.escapeRegex(n.negationSymbol.front)), "-")).replace(new RegExp(g.escapeRegex(n.negationSymbol.back) + "$"), ""), Number(i)) : i
            },
            isComplete: function (e, t) {
              var n = (t.numericInput ? e.slice().reverse() : e).join("");
              return n = (n = (n = (n = (n = n.replace(new RegExp("^" + g.escapeRegex(t.negationSymbol.front)), "-")).replace(new RegExp(g.escapeRegex(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp(g.escapeRegex(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace(g.escapeRegex(t.radixPoint), ".")), isFinite(n)
            },
            onBeforeMask: function (e, t) {
              if (t.isNegative = v, "number" == typeof e && "" !== t.radixPoint && (e = e.toString().replace(".", t.radixPoint)), e = e.toString().charAt(e.length - 1) === t.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== t.radixPoint && isFinite(e)) {
                var n = e.split("."),
                    i = "" !== t.groupSeparator ? parseInt(t.groupSize) : 0;
                2 === n.length && (n[0].length > i || n[1].length > i || n[0].length <= i && n[1].length < i) && (e = e.replace(".", t.radixPoint))
              }
              var o = e.match(/,/g),
                  r = e.match(/\./g);
              if (e = r && o ? r.length > o.length ? (e = e.replace(/\./g, "")).replace(",", t.radixPoint) : o.length > r.length ? (e = e.replace(/,/g, "")).replace(".", t.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(g.escapeRegex(t.groupSeparator), "g"), ""), 0 === t.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== t.radixPoint && isFinite(t.digits) && -1 !== e.indexOf(t.radixPoint)) {
                var s = e.split(t.radixPoint)[1].match(new RegExp("\\d*"))[0];
                if (parseInt(t.digits) < s.toString().length) {
                  var a = Math.pow(10, parseInt(t.digits));
                  e = e.replace(g.escapeRegex(t.radixPoint), "."), e = (e = Math.round(parseFloat(e) * a) / a).toString().replace(".", t.radixPoint)
                }
              }
              return function (e, t) {
                if (t.numericInput) {
                  var n = m.inArray(t.radixPoint, e);
                  -1 === n && (e.push(t.radixPoint), n = e.length - 1);
                  for (var i = 1; i <= t.digits; i++) e[n + i] = e[n + i] || "0"
                }
                return e
              }(e.toString().split(""), t).join("")
            },
            onKeyDown: function (e, t, n, i) {
              var o = m(this);
              if (e.ctrlKey) switch (e.keyCode) {
                case g.keyCode.UP:
                  o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), o.trigger("setvalue");
                  break;
                case g.keyCode.DOWN:
                  o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), o.trigger("setvalue")
              }
            }
          },
          currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
          },
          decimal: {
            alias: "numeric"
          },
          integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
          },
          percentage: {
            alias: "numeric",
            digits: 2,
            digitsOptional: !0,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowMinus: !1
          }
        }), g
      }) ? i.apply(t, o) : i) || (e.exports = r)
    }, function (e, t, n) {
      "use strict";
      var i, o, r;
      o = [n(2), n(4)], void 0 === (r = "function" == typeof (i = function (s, t) {
        function n(e, t) {
          var n = (e.mask || e).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, ""),
              i = (t.mask || t).replace(/#/g, "0").replace(/\)/, "0").replace(/[+()#-]/g, "");
          return n.localeCompare(i)
        }

        var i = t.prototype.analyseMask;
        return t.prototype.analyseMask = function (l, e, r) {
          var c = {};
          return r.phoneCodes && (r.phoneCodes && 1e3 < r.phoneCodes.length && (function e(t, n, i) {
            i = i || c, "" !== (n = n || "") && (i[n] = {});
            for (var o = "", r = i[n] || i, s = t.length - 1; 0 <= s; s--) r[o = (l = t[s].mask || t[s]).substr(0, 1)] = r[o] || [], r[o].unshift(l.substr(1)), t.splice(s, 1);
            for (var a in r) 500 < r[a].length && e(r[a].slice(), a, r)
          }((l = l.substr(1, l.length - 2)).split(r.groupmarker[1] + r.alternatormarker + r.groupmarker[0])), l = function e(t) {
            var n = "",
                i = [];
            for (var o in t) s.isArray(t[o]) ? 1 === t[o].length ? i.push(o + t[o]) : i.push(o + r.groupmarker[0] + t[o].join(r.groupmarker[1] + r.alternatormarker + r.groupmarker[0]) + r.groupmarker[1]) : i.push(o + e(t[o]));
            return 1 === i.length ? n += i[0] : n += r.groupmarker[0] + i.join(r.groupmarker[1] + r.alternatormarker + r.groupmarker[0]) + r.groupmarker[1], n
          }(c)), l = l.replace(/9/g, "\\9")), i.call(this, l, e, r)
        }, t.extendAliases({
          abstractphone: {
            groupmarker: ["<", ">"],
            countrycode: "",
            phoneCodes: [],
            keepStatic: "auto",
            mask: function (e) {
              return e.definitions = {
                "#": t.prototype.definitions[9]
              }, e.phoneCodes.sort(n)
            },
            onBeforeMask: function (e, t) {
              var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
              return (1 < n.indexOf(t.countrycode) || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n), n
            },
            onUnMask: function (e, t, n) {
              return e.replace(/[()#-]/g, "")
            },
            inputmode: "tel"
          }
        }), t
      }) ? i.apply(t, o) : i) || (e.exports = r)
    }, function (e, t, n) {
      "use strict";
      var i, o, r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      o = [n(3), n(4)], void 0 === (r = "function" == typeof (i = function (o, r) {
        return void 0 === o.fn.inputmask && (o.fn.inputmask = function (e, t) {
          var n, i = this[0];
          if (void 0 === t && (t = {}), "string" == typeof e) switch (e) {
            case "unmaskedvalue":
              return i && i.inputmask ? i.inputmask.unmaskedvalue() : o(i).val();
            case "remove":
              return this.each(function () {
                this.inputmask && this.inputmask.remove()
              });
            case "getemptymask":
              return i && i.inputmask ? i.inputmask.getemptymask() : "";
            case "hasMaskedValue":
              return !(!i || !i.inputmask) && i.inputmask.hasMaskedValue();
            case "isComplete":
              return !i || !i.inputmask || i.inputmask.isComplete();
            case "getmetadata":
              return i && i.inputmask ? i.inputmask.getmetadata() : void 0;
            case "setvalue":
              r.setValue(i, t);
              break;
            case "option":
              if ("string" != typeof t) return this.each(function () {
                if (void 0 !== this.inputmask) return this.inputmask.option(t)
              });
              if (i && void 0 !== i.inputmask) return i.inputmask.option(t);
              break;
            default:
              return t.alias = e, n = new r(t), this.each(function () {
                n.mask(this)
              })
          } else {
            if (Array.isArray(e)) return t.alias = e, n = new r(t), this.each(function () {
              n.mask(this)
            });
            if ("object" == (void 0 === e ? "undefined" : s(e))) return n = new r(e), void 0 === e.mask && void 0 === e.alias ? this.each(function () {
              if (void 0 !== this.inputmask) return this.inputmask.option(e);
              n.mask(this)
            }) : this.each(function () {
              n.mask(this)
            });
            if (void 0 === e) return this.each(function () {
              (n = new r(t)).mask(this)
            })
          }
        }), o.fn.inputmask
      }) ? i.apply(t, o) : i) || (e.exports = r)
    }]);

/**
 * SimpleBar.js - v3.1.3
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
      typeof define === 'function' && define.amd ? define(factory) :
          (global = global || self, global.SimpleBar = factory());
}(this, function () {
  'use strict';

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
          ? TO_STRING ? s.charAt(i) : a
          : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var at = _stringAt(true);

  // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var _advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {exports: {}}, fn(module, module.exports), module.exports;
  }

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = {version: '2.6.2'};
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math
        ? window : typeof self != 'undefined' && self.Math == Math ? self
            // eslint-disable-next-line no-new-func
            : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode: _library ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');

    var Symbol = _global.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] =
          USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */
    }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
            // builtinTag case
            : ARG ? _cof(O)
                // ES3 arguments fallback
                : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var builtinExec = RegExp.prototype.exec;

  // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var _regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
    f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  var SPECIES = _wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = {a: '7'};
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  })();

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);

    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () {
        execCalled = true;
        return null;
      };
      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () {
          return re;
        };
      }
      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (
        !DELEGATES_TO_SYMBOL ||
        !DELEGATES_TO_EXEC ||
        (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
        (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(
          _defined,
          SYMBOL,
          ''[KEY],
          function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === _regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {done: true, value: nativeRegExpMethod.call(regexp, str, arg2)};
              }
              return {done: true, value: nativeMethod.call(str, regexp, arg2)};
            }
            return {done: false};
          }
      );
      var strfn = fns[0];
      var rxfn = fns[1];

      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2
          // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
          ? function (string, arg) {
            return rxfn.call(string, this, arg);
          }
          // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
          : function (string) {
            return rxfn.call(string, this);
          }
      );
    }
  };

  var max = Math.max;
  var min$1 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined
            ? fn.call(searchValue, O, replaceValue)
            : $replace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);
        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = _regexpExecAbstract(rx, S);
          if (result === null) break;
          results.push(result);
          if (!global) break;
          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max(min$1(_toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$':
            return '$';
          case '&':
            return matched;
          case '`':
            return str.slice(0, position);
          case "'":
            return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  var dP$1 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // 19.2.4.2 name
  NAME in FProto || _descriptors && dP$1(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  // @@match logic
  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative($match, regexp, this);
        if (res.done) return res.value;
        var rx = _anObject(regexp);
        var S = String(this);
        if (!rx.global) return _regexpExecAbstract(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = _regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };

  var _iterStep = function (done, value) {
    return {value: value, done: !!done};
  };

  var _iterators = {};

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  var max$1 = Math.max;
  var min$2 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max$1(index + length, 0) : min$2(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes


  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)


  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */
  };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var def = _objectDp.f;

  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, {configurable: true, value: tag});
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, {next: _propertyDesc(1, next)});
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () {
    return this;
  };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    // Define iterator
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var ITERATOR$1 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME$1 = collections[i];
    var explicit = DOMIterables[NAME$1];
    var Collection = _global[NAME$1];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
      if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME$1);
      _iterators[NAME$1] = ArrayValues;
      if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
    }
  }

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {value: undefined, done: true};
    point = $at(O, index);
    this._i += point.length;
    return {value: point, done: false};
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$2 = _wks('iterator');
  var ArrayProto$1 = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  var ITERATOR$3 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$3]
        || it['@@iterator']
        || _iterators[_classof(it)];
  };

  var ITERATOR$4 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$4]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
  } catch (e) { /* empty */
  }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$4]();
      iter.next = function () {
        return {done: safe = true};
      };
      arr[ITERATOR$4] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) { /* empty */
    }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) {
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var scrollbarWidth = createCommonjsModule(function (module, exports) {
    /*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
    (function (root, factory) {
      {
        module.exports = factory();
      }
    }(commonjsGlobal, function () {

      function scrollbarWidth() {
        if (typeof document === 'undefined') {
          return 0
        }

        var
            body = document.body,
            box = document.createElement('div'),
            boxStyle = box.style,
            width;

        boxStyle.position = 'absolute';
        boxStyle.top = boxStyle.left = '-9999px';
        boxStyle.width = boxStyle.height = '100px';
        boxStyle.overflow = 'scroll';

        body.appendChild(box);

        width = box.offsetWidth - box.clientWidth;

        body.removeChild(box);

        return width;
      }

      return scrollbarWidth;
    }));
  });

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function () {
    return root.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_throttle = throttle;

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN$1 = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag$1 = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim$1 = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary$1 = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal$1 = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt$1 = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString$1 = objectProto$1.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max,
      nativeMin$1 = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now$1 = function () {
    return root$1.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce$1(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber$1(wait) || 0;
    if (isObject$1(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now$1());
    }

    function debounced() {
      var time = now$1(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$1(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike$1(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$1(value) {
    return typeof value == 'symbol' ||
        (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber$1(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol$1(value)) {
      return NAN$1;
    }
    if (isObject$1(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject$1(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim$1, '');
    var isBinary = reIsBinary$1.test(value);
    return (isBinary || reIsOctal$1.test(value))
        ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex$1.test(value) ? NAN$1 : +value);
  }

  var lodash_debounce = debounce$1;

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT$2 = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** `Object#toString` result references. */
  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal$2 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf$2 = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$2 = freeGlobal$2 || freeSelf$2 || Function('return this')();

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root$2['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString$2 = objectProto$2.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root$2, 'Map'),
      nativeCreate = getNative(Object, 'create');

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$1 || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject$2(value) || isMasked(value)) {
      return false;
    }
    var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return (func + '');
      } catch (e) {
      }
    }
    return '';
  }

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT$2);
    }
    var memoized = function () {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result);
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Assign cache to `_.memoize`.
  memoize.Cache = MapCache;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject$2(value) ? objectToString$2.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$2(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  var lodash_memoize = memoize;

  /**
   * A collection of shims that provide minimal functionality of the ES6 collections.
   *
   * These implementations are not meant to be used outside of the ResizeObserver
   * modules as they cover only a limited range of use cases.
   */
  /* eslint-disable require-jsdoc, valid-jsdoc */
  var MapShim = (function () {
    if (typeof Map !== 'undefined') {
      return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function (entry, index) {
        if (entry[0] === key) {
          result = index;
          return true;
        }
        return false;
      });
      return result;
    }

    return /** @class */ (function () {
      function class_1() {
        this.__entries__ = [];
      }

      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function () {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */
      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */
      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);
        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);
        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */
      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */
      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }());
  })();

  /**
   * Detects whether window and document objects are available in current environment.
   */
  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

  // Returns global object of a current environment.
  var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
      return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
      return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
      return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
  })();

  /**
   * A shim for the requestAnimationFrame which falls back to the setTimeout if
   * first one is not supported.
   *
   * @returns {number} Requests' identifier.
   */
  var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
      // It's required to use a bounded function because IE sometimes throws
      // an "Invalid calling object" error if rAF is invoked without the global
      // object on the left hand side.
      return requestAnimationFrame.bind(global$1);
    }
    return function (callback) {
      return setTimeout(function () {
        return callback(Date.now());
      }, 1000 / 60);
    };
  })();

  // Defines minimum timeout before adding a trailing call.
  var trailingTimeout = 2;

  /**
   * Creates a wrapper function which ensures that provided callback will be
   * invoked only once during the specified delay period.
   *
   * @param {Function} callback - Function to be invoked after the delay period.
   * @param {number} delay - Delay after which to invoke callback.
   * @returns {Function}
   */
  function throttle$1(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        // Reject immediately following calls.
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        // Schedule new call to be in invoked when the pending one is resolved.
        // This is important for "transitions" which never actually start
        // immediately so there is a chance that we might miss one if change
        // happens amids the pending invocation.
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }

    return proxy;
  }

  // Minimum delay before invoking the update of observers.
  var REFRESH_DELAY = 20;
  // A list of substrings of CSS properties used to find transition events that
  // might affect dimensions of observed elements.
  var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
  // Check if MutationObserver is available.
  var mutationObserverSupported = typeof MutationObserver !== 'undefined';
  /**
   * Singleton controller class which handles updates of ResizeObserver instances.
   */
  var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
      /**
       * Indicates whether DOM listeners have been added.
       *
       * @private {boolean}
       */
      this.connected_ = false;
      /**
       * Tells that controller has subscribed for Mutation Events.
       *
       * @private {boolean}
       */
      this.mutationEventsAdded_ = false;
      /**
       * Keeps reference to the instance of MutationObserver.
       *
       * @private {MutationObserver}
       */
      this.mutationsObserver_ = null;
      /**
       * A list of connected observers.
       *
       * @private {Array<ResizeObserverSPI>}
       */
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle$1(this.refresh.bind(this), REFRESH_DELAY);
    }

    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      // Add listeners if they haven't been added yet.
      if (!this.connected_) {
        this.connect_();
      }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
      var observers = this.observers_;
      var index = observers.indexOf(observer);
      // Remove observer if it's present in registry.
      if (~index) {
        observers.splice(index, 1);
      }
      // Remove listeners if controller has no connected observers.
      if (!observers.length && this.connected_) {
        this.disconnect_();
      }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
      var changesDetected = this.updateObservers_();
      // Continue running updates if changes have been detected as there might
      // be future ones caused by CSS transitions.
      if (changesDetected) {
        this.refresh();
      }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
      // Collect observers that have active observations.
      var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      // Deliver notifications in a separate cycle in order to avoid any
      // collisions between observers, e.g. when multiple instances of
      // ResizeObserver are tracking the same element and the callback of one
      // of them changes content dimensions of the observed target. Sometimes
      // this may result in notifications being blocked for the rest of observers.
      activeObservers.forEach(function (observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already added.
      if (!isBrowser || this.connected_) {
        return;
      }
      // Subscription to the "Transitionend" event is used as a workaround for
      // delayed transitions. This way it's possible to capture at least the
      // final state of an element.
      document.addEventListener('transitionend', this.onTransitionEnd_);
      window.addEventListener('resize', this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
      // Do nothing if running in a non-browser environment or if listeners
      // have been already removed.
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener('transitionend', this.onTransitionEnd_);
      window.removeEventListener('resize', this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
      // Detect whether transition may affect dimensions of an element.
      var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
      }
      return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
  }());

  /**
   * Defines non-writable/enumerable properties of the provided target object.
   *
   * @param {Object} target - Object for which to define properties.
   * @param {Object} props - Properties to be defined.
   * @returns {Object} Target object.
   */
  var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
      var key = _a[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  });

  /**
   * Returns the global object associated with provided element.
   *
   * @param {Object} target
   * @returns {Object}
   */
  var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
  });

  // Placeholder of an empty content rectangle.
  var emptyRect = createRectInit(0, 0, 0, 0);

  /**
   * Converts provided string to a number.
   *
   * @param {number|string} value
   * @returns {number}
   */
  function toFloat(value) {
    return parseFloat(value) || 0;
  }

  /**
   * Extracts borders size from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @param {...string} positions - Borders positions (top, right, ...)
   * @returns {number}
   */
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
      var value = styles['border-' + position + '-width'];
      return size + toFloat(value);
    }, 0);
  }

  /**
   * Extracts paddings sizes from provided styles.
   *
   * @param {CSSStyleDeclaration} styles
   * @returns {Object} Paddings box.
   */
  function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position = positions_1[_i];
      var value = styles['padding-' + position];
      paddings[position] = toFloat(value);
    }
    return paddings;
  }

  /**
   * Calculates content rectangle of provided SVG element.
   *
   * @param {SVGGraphicsElement} target - Element content rectangle of which needs
   *      to be calculated.
   * @returns {DOMRectInit}
   */
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }

  /**
   * Calculates content rectangle of provided HTMLElement.
   *
   * @param {HTMLElement} target - Element for which to calculate the content rectangle.
   * @returns {DOMRectInit}
   */
  function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
      // Following conditions are required to handle Internet Explorer which
      // doesn't include paddings and borders to computed CSS dimensions.
      //
      // We can say that if CSS dimensions + paddings are equal to the "client"
      // properties then it's either IE, and thus we don't need to subtract
      // anything, or an element merely doesn't have paddings/borders styles.
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, 'left', 'right') + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
      }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
      // In some browsers (only in Firefox, actually) CSS width & height
      // include scroll bars size which can be removed at this step as scroll
      // bars are the only difference between rounded dimensions + paddings
      // and "client" properties, though that is not always true in Chrome.
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      // Chrome has a rather weird rounding of "client" properties.
      // E.g. for an element with content width of 314.2px it sometimes gives
      // the client width of 315px and for the width of 314.7px it may give
      // 314px. And it doesn't happen all the time. So just ignore this delta
      // as a non-relevant.
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }

  /**
   * Checks whether provided element is an instance of the SVGGraphicsElement.
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
      return function (target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) {
      return (target instanceof getWindowOf(target).SVGElement &&
          typeof target.getBBox === 'function');
    };
  })();

  /**
   * Checks whether provided element is a document element (<html>).
   *
   * @param {Element} target - Element to be checked.
   * @returns {boolean}
   */
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }

  /**
   * Calculates an appropriate content rectangle for provided html or svg element.
   *
   * @param {Element} target - Element content rectangle of which needs to be calculated.
   * @returns {DOMRectInit}
   */
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }

  /**
   * Creates rectangle with an interface of the DOMRectReadOnly.
   * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
   *
   * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
   * @returns {DOMRectReadOnly}
   */
  function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
      x: x, y: y, width: width, height: height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }

  /**
   * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
   * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
   *
   * @param {number} x - X coordinate.
   * @param {number} y - Y coordinate.
   * @param {number} width - Rectangle's width.
   * @param {number} height - Rectangle's height.
   * @returns {DOMRectInit}
   */
  function createRectInit(x, y, width, height) {
    return {x: x, y: y, width: width, height: height};
  }

  /**
   * Class that is responsible for computations of the content rectangle of
   * provided DOM element and for keeping track of it's changes.
   */
  var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
      /**
       * Broadcasted width of content rectangle.
       *
       * @type {number}
       */
      this.broadcastWidth = 0;
      /**
       * Broadcasted height of content rectangle.
       *
       * @type {number}
       */
      this.broadcastHeight = 0;
      /**
       * Reference to the last observed content rectangle.
       *
       * @private {DOMRectInit}
       */
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }

    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return (rect.width !== this.broadcastWidth ||
          rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation;
  }());

  var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      // According to the specification following properties are not writable
      // and are also not enumerable in the native implementation.
      //
      // Property accessors are not being used as they'd require to define a
      // private WeakMap storage which may cause memory leaks in browsers that
      // don't support this type of collections.
      defineConfigurable(this, {target: target, contentRect: contentRect});
    }

    return ResizeObserverEntry;
  }());

  var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
      /**
       * Collection of resize observations that have detected changes in dimensions
       * of elements.
       *
       * @private {Array<ResizeObservation>}
       */
      this.activeObservations_ = [];
      /**
       * Registry of the ResizeObservation instances.
       *
       * @private {Map<Element, ResizeObservation>}
       */
      this.observations_ = new MapShim();
      if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }

    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      // Do nothing if element is already being observed.
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      // Force the update of observations.
      this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }
      // Do nothing if current environment doesn't have the Element interface.
      if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      // Do nothing if element is not being observed.
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
      // Do nothing if observer doesn't have active observations.
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      // Create ResizeObserverEntry instance for every active observation.
      var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
      this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
  }());

  // Registry of internal observers. If WeakMap is not available use current shim
  // for the Map collection as it has all required methods and because WeakMap
  // can't be fully polyfilled anyway.
  var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
  /**
   * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
   * exposing only those methods and properties that are defined in the spec.
   */
  var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
      if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
      }
      if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }

    return ResizeObserver;
  }());
  // Expose public methods of ResizeObserver.
  [
    'observe',
    'unobserve',
    'disconnect'
  ].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
      var _a;
      return (_a = observers.get(this))[method].apply(_a, arguments);
    };
  });

  var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
      return global$1.ResizeObserver;
    }
    return ResizeObserver;
  })();

  var canUseDOM = !!(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
  );

  var canUseDom = canUseDOM;

  var SimpleBar =
      /*#__PURE__*/
      function () {
        function SimpleBar(element, options) {
          var _this = this;

          _classCallCheck(this, SimpleBar);

          this.onScroll = function () {
            if (!_this.scrollXTicking) {
              window.requestAnimationFrame(_this.scrollX);
              _this.scrollXTicking = true;
            }

            if (!_this.scrollYTicking) {
              window.requestAnimationFrame(_this.scrollY);
              _this.scrollYTicking = true;
            }
          };

          this.scrollX = function () {
            if (_this.axis.x.isOverflowing) {
              _this.showScrollbar('x');

              _this.positionScrollbar('x');
            }

            _this.scrollXTicking = false;
          };

          this.scrollY = function () {
            if (_this.axis.y.isOverflowing) {
              _this.showScrollbar('y');

              _this.positionScrollbar('y');
            }

            _this.scrollYTicking = false;
          };

          this.onMouseEnter = function () {
            _this.showScrollbar('x');

            _this.showScrollbar('y');
          };

          this.onMouseMove = function (e) {
            _this.mouseX = e.clientX;
            _this.mouseY = e.clientY;

            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
              _this.onMouseMoveForAxis('x');
            }

            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
              _this.onMouseMoveForAxis('y');
            }
          };

          this.onMouseLeave = function () {
            _this.onMouseMove.cancel();

            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
              _this.onMouseLeaveForAxis('x');
            }

            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
              _this.onMouseLeaveForAxis('y');
            }

            _this.mouseX = -1;
            _this.mouseY = -1;
          };

          this.onWindowResize = function () {
            // Recalculate scrollbarWidth in case it's a zoom
            _this.scrollbarWidth = scrollbarWidth();

            _this.hideNativeScrollbar();
          };

          this.hideScrollbars = function () {
            _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
            _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

            if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
              _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

              _this.axis.y.isVisible = false;
            }

            if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
              _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

              _this.axis.x.isVisible = false;
            }
          };

          this.onPointerEvent = function (e) {
            var isWithinBoundsY, isWithinBoundsX;
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

            if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
              isWithinBoundsX = _this.isWithinBounds(_this.axis.x.scrollbar.rect);
            }

            if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
              isWithinBoundsY = _this.isWithinBounds(_this.axis.y.scrollbar.rect);
            } // If any pointer event is called on the scrollbar


            if (isWithinBoundsY || isWithinBoundsX) {
              // Preventing the event's default action stops text being
              // selectable during the drag.
              e.preventDefault(); // Prevent event leaking

              e.stopPropagation();

              if (e.type === 'mousedown') {
                if (isWithinBoundsY) {
                  _this.onDragStart(e, 'y');
                }

                if (isWithinBoundsX) {
                  _this.onDragStart(e, 'x');
                }
              }
            }
          };

          this.drag = function (e) {
            var eventOffset;
            var track = _this.axis[_this.draggedAxis].track;
            var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
            var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
            e.preventDefault();
            e.stopPropagation();

            if (_this.draggedAxis === 'y') {
              eventOffset = e.pageY;
            } else {
              eventOffset = e.pageX;
            } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


            var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

            var dragPerc = dragPos / track.rect[_this.axis[_this.draggedAxis].sizeAttr]; // Scroll the content by the same percentage.

            var scrollPos = dragPerc * _this.contentEl[_this.axis[_this.draggedAxis].scrollSizeAttr]; // Fix browsers inconsistency on RTL

            if (_this.draggedAxis === 'x') {
              scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
              scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
            }

            _this.contentEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
          };

          this.onEndDrag = function (e) {
            e.preventDefault();
            e.stopPropagation();
            document.removeEventListener('mousemove', _this.drag);
            document.removeEventListener('mouseup', _this.onEndDrag);
          };

          this.el = element;
          this.flashTimeout;
          this.contentEl;
          this.offsetEl;
          this.maskEl;
          this.globalObserver;
          this.mutationObserver;
          this.resizeObserver;
          this.scrollbarWidth;
          this.minScrollbarWidth = 20;
          this.options = _objectSpread({}, SimpleBar.defaultOptions, options);
          this.classNames = _objectSpread({}, SimpleBar.defaultOptions.classNames, this.options.classNames);
          this.isRtl;
          this.axis = {
            x: {
              scrollOffsetAttr: 'scrollLeft',
              sizeAttr: 'width',
              scrollSizeAttr: 'scrollWidth',
              offsetAttr: 'left',
              overflowAttr: 'overflowX',
              dragOffset: 0,
              isOverflowing: true,
              isVisible: false,
              forceVisible: false,
              track: {},
              scrollbar: {}
            },
            y: {
              scrollOffsetAttr: 'scrollTop',
              sizeAttr: 'height',
              scrollSizeAttr: 'scrollHeight',
              offsetAttr: 'top',
              overflowAttr: 'overflowY',
              dragOffset: 0,
              isOverflowing: true,
              isVisible: false,
              forceVisible: false,
              track: {},
              scrollbar: {}
            }
          };
          this.recalculate = lodash_throttle(this.recalculate.bind(this), 64);
          this.onMouseMove = lodash_throttle(this.onMouseMove.bind(this), 64);
          this.hideScrollbars = lodash_debounce(this.hideScrollbars.bind(this), this.options.timeout);
          this.onWindowResize = lodash_debounce(this.onWindowResize.bind(this), 64, {
            leading: true
          });
          SimpleBar.getRtlHelpers = lodash_memoize(SimpleBar.getRtlHelpers); // getContentElement is deprecated

          this.getContentElement = this.getScrollElement;
          this.init();
        }

        /**
         * Static properties
         */

        /**
         * Helper to fix browsers inconsistency on RTL:
         *  - Firefox inverts the scrollbar initial position
         *  - IE11 inverts both scrollbar position and scrolling offset
         * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
         */


        _createClass(SimpleBar, [{
          key: "init",
          value: function init() {
            // Save a reference to the instance, so we know this DOM node has already been instancied
            this.el.SimpleBar = this; // We stop here on server-side

            if (canUseDom) {
              this.initDOM();
              this.scrollbarWidth = scrollbarWidth();
              this.recalculate();
              this.initListeners();
            }
          }
        }, {
          key: "initDOM",
          value: function initDOM() {
            var _this2 = this;

            // make sure this element doesn't have the elements yet
            if (Array.from(this.el.children).filter(function (child) {
              return child.classList.contains(_this2.classNames.wrapper);
            }).length) {
              // assume that element has his DOM already initiated
              this.wrapperEl = this.el.querySelector(".".concat(this.classNames.wrapper));
              this.contentEl = this.el.querySelector(".".concat(this.classNames.content));
              this.offsetEl = this.el.querySelector(".".concat(this.classNames.offset));
              this.maskEl = this.el.querySelector(".".concat(this.classNames.mask));
              this.placeholderEl = this.el.querySelector(".".concat(this.classNames.placeholder));
              this.heightAutoObserverWrapperEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl));
              this.heightAutoObserverEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl));
              this.axis.x.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.horizontal));
              this.axis.y.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.vertical));
            } else {
              // Prepare DOM
              this.wrapperEl = document.createElement('div');
              this.contentEl = document.createElement('div');
              this.offsetEl = document.createElement('div');
              this.maskEl = document.createElement('div');
              this.placeholderEl = document.createElement('div');
              this.heightAutoObserverWrapperEl = document.createElement('div');
              this.heightAutoObserverEl = document.createElement('div');
              this.wrapperEl.classList.add(this.classNames.wrapper);
              this.contentEl.classList.add(this.classNames.content);
              this.offsetEl.classList.add(this.classNames.offset);
              this.maskEl.classList.add(this.classNames.mask);
              this.placeholderEl.classList.add(this.classNames.placeholder);
              this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
              this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

              while (this.el.firstChild) {
                this.contentEl.appendChild(this.el.firstChild);
              }

              this.offsetEl.appendChild(this.contentEl);
              this.maskEl.appendChild(this.offsetEl);
              this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
              this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
              this.wrapperEl.appendChild(this.maskEl);
              this.wrapperEl.appendChild(this.placeholderEl);
              this.el.appendChild(this.wrapperEl);
            }

            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var track = document.createElement('div');
              var scrollbar = document.createElement('div');
              track.classList.add(this.classNames.track);
              scrollbar.classList.add(this.classNames.scrollbar);

              if (!this.options.autoHide) {
                scrollbar.classList.add(this.classNames.visible);
              }

              track.appendChild(scrollbar);
              this.axis.x.track.el = track.cloneNode(true);
              this.axis.x.track.el.classList.add(this.classNames.horizontal);
              this.axis.y.track.el = track.cloneNode(true);
              this.axis.y.track.el.classList.add(this.classNames.vertical);
              this.el.appendChild(this.axis.x.track.el);
              this.el.appendChild(this.axis.y.track.el);
            }

            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar));
            this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar));
            this.el.setAttribute('data-simplebar', 'init');
          }
        }, {
          key: "initListeners",
          value: function initListeners() {
            var _this3 = this;

            // Event listeners
            if (this.options.autoHide) {
              this.el.addEventListener('mouseenter', this.onMouseEnter);
            }

            ['mousedown', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'].forEach(function (e) {
              _this3.el.addEventListener(e, _this3.onPointerEvent, true);
            });
            this.el.addEventListener('mousemove', this.onMouseMove);
            this.el.addEventListener('mouseleave', this.onMouseLeave);
            this.contentEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

            window.addEventListener('resize', this.onWindowResize); // MutationObserver is IE11+

            if (typeof MutationObserver !== 'undefined') {
              // create an observer instance
              this.mutationObserver = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                  if (mutation.target === _this3.el || !_this3.isChildNode(mutation.target) || mutation.addedNodes.length || mutation.removedNodes.length) {
                    _this3.recalculate();
                  }
                });
              }); // pass in the target node, as well as the observer options

              this.mutationObserver.observe(this.el, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
              });
            }

            this.resizeObserver = new index(this.recalculate);
            this.resizeObserver.observe(this.el);
          }
        }, {
          key: "recalculate",
          value: function recalculate() {
            var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
            this.elStyles = window.getComputedStyle(this.el);
            this.isRtl = this.elStyles.direction === 'rtl';
            this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
            this.contentEl.style.height = isHeightAuto ? 'auto' : '100%';
            this.placeholderEl.style.width = "".concat(this.contentEl.scrollWidth, "px");
            this.placeholderEl.style.height = "".concat(this.contentEl.scrollHeight, "px");
            this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
            this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect();
            this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

            this.axis.x.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollWidth : this.contentEl.scrollWidth - this.minScrollbarWidth) > Math.ceil(this.axis.x.track.rect.width);
            this.axis.y.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollHeight : this.contentEl.scrollHeight - this.minScrollbarWidth) > Math.ceil(this.axis.y.track.rect.height); // Set isOverflowing to false if user explicitely set hidden overflow

            this.axis.x.isOverflowing = this.elStyles.overflowX === 'hidden' ? false : this.axis.x.isOverflowing;
            this.axis.y.isOverflowing = this.elStyles.overflowY === 'hidden' ? false : this.axis.y.isOverflowing;
            this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
            this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
            this.axis.x.scrollbar.size = this.getScrollbarSize('x');
            this.axis.y.scrollbar.size = this.getScrollbarSize('y');
            this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
            this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
            this.positionScrollbar('x');
            this.positionScrollbar('y');
            this.toggleTrackVisibility('x');
            this.toggleTrackVisibility('y');
            this.hideNativeScrollbar();
          }
          /**
           * Calculate scrollbar size
           */

        }, {
          key: "getScrollbarSize",
          value: function getScrollbarSize() {
            var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
            var contentSize = this.scrollbarWidth ? this.contentEl[this.axis[axis].scrollSizeAttr] : this.contentEl[this.axis[axis].scrollSizeAttr] - this.minScrollbarWidth;
            var trackSize = this.axis[axis].track.rect[this.axis[axis].sizeAttr];
            var scrollbarSize;

            if (!this.axis[axis].isOverflowing) {
              return;
            }

            var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

            scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

            if (this.options.scrollbarMaxSize) {
              scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
            }

            return scrollbarSize;
          }
        }, {
          key: "positionScrollbar",
          value: function positionScrollbar() {
            var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
            var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
            var trackSize = this.axis[axis].track.rect[this.axis[axis].sizeAttr];
            var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
            var scrollbar = this.axis[axis].scrollbar;
            var scrollOffset = this.contentEl[this.axis[axis].scrollOffsetAttr];
            scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
            var scrollPourcent = scrollOffset / (contentSize - hostSize);
            var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
            handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
            scrollbar.el.style.transform = axis === 'x' ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
          }
        }, {
          key: "toggleTrackVisibility",
          value: function toggleTrackVisibility() {
            var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
            var track = this.axis[axis].track.el;
            var scrollbar = this.axis[axis].scrollbar.el;

            if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
              track.style.visibility = 'visible';
              this.contentEl.style[this.axis[axis].overflowAttr] = 'scroll';
            } else {
              track.style.visibility = 'hidden';
              this.contentEl.style[this.axis[axis].overflowAttr] = 'hidden';
            } // Even if forceVisible is enabled, scrollbar itself should be hidden


            if (this.axis[axis].isOverflowing) {
              scrollbar.style.visibility = 'visible';
            } else {
              scrollbar.style.visibility = 'hidden';
            }
          }
        }, {
          key: "hideNativeScrollbar",
          value: function hideNativeScrollbar() {
            this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0;
            this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0; // If floating scrollbar

            if (!this.scrollbarWidth) {
              var paddingDirection = [this.isRtl ? 'paddingLeft' : 'paddingRight'];
              this.contentEl.style[paddingDirection] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "calc(".concat(this.elStyles[paddingDirection], " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles[paddingDirection];
              this.contentEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "calc(".concat(this.elStyles.paddingBottom, " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles.paddingBottom;
            }
          }
          /**
           * On scroll event handling
           */

        }, {
          key: "onMouseMoveForAxis",
          value: function onMouseMoveForAxis() {
            var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
            this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
            this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
            var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

            if (isWithinScrollbarBoundsX) {
              this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
            } else {
              this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
            }

            if (this.isWithinBounds(this.axis[axis].track.rect)) {
              this.showScrollbar(axis);
              this.axis[axis].track.el.classList.add(this.classNames.hover);
            } else {
              this.axis[axis].track.el.classList.remove(this.classNames.hover);
            }
          }
        }, {
          key: "onMouseLeaveForAxis",
          value: function onMouseLeaveForAxis() {
            var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
            this.axis[axis].track.el.classList.remove(this.classNames.hover);
            this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
          }
        }, {
          key: "showScrollbar",

          /**
           * Show scrollbar
           */
          value: function showScrollbar() {
            var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
            var scrollbar = this.axis[axis].scrollbar.el;

            if (!this.axis[axis].isVisible) {
              scrollbar.classList.add(this.classNames.visible);
              this.axis[axis].isVisible = true;
            }

            if (this.options.autoHide) {
              this.hideScrollbars();
            }
          }
          /**
           * Hide Scrollbar
           */

        }, {
          key: "onDragStart",

          /**
           * on scrollbar handle drag movement starts
           */
          value: function onDragStart(e) {
            var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
            var scrollbar = this.axis[axis].scrollbar.el; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

            var eventOffset = axis === 'y' ? e.pageY : e.pageX;
            this.axis[axis].dragOffset = eventOffset - scrollbar.getBoundingClientRect()[this.axis[axis].offsetAttr];
            this.draggedAxis = axis;
            document.addEventListener('mousemove', this.drag);
            document.addEventListener('mouseup', this.onEndDrag);
          }
          /**
           * Drag scrollbar handle
           */

        }, {
          key: "getScrollElement",

          /**
           * Getter for original scrolling element
           */
          value: function getScrollElement() {
            return this.contentEl;
          }
        }, {
          key: "removeListeners",
          value: function removeListeners() {
            var _this4 = this;

            // Event listeners
            if (this.options.autoHide) {
              this.el.removeEventListener('mouseenter', this.onMouseEnter);
            }

            ['mousedown', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'].forEach(function (e) {
              _this4.el.removeEventListener(e, _this4.onPointerEvent);
            });
            this.el.removeEventListener('mousemove', this.onMouseMove);
            this.el.removeEventListener('mouseleave', this.onMouseLeave);
            this.contentEl.removeEventListener('scroll', this.onScroll);
            window.removeEventListener('resize', this.onWindowResize);
            this.mutationObserver && this.mutationObserver.disconnect();
            this.resizeObserver.disconnect(); // Cancel all debounced functions

            this.recalculate.cancel();
            this.onMouseMove.cancel();
            this.hideScrollbars.cancel();
            this.onWindowResize.cancel();
          }
          /**
           * UnMount mutation observer and delete SimpleBar instance from DOM element
           */

        }, {
          key: "unMount",
          value: function unMount() {
            this.removeListeners();
            this.el.SimpleBar = null;
          }
          /**
           * Recursively walks up the parent nodes looking for this.el
           */

        }, {
          key: "isChildNode",
          value: function isChildNode(el) {
            if (el === null) return false;
            if (el === this.el) return true;
            return this.isChildNode(el.parentNode);
          }
          /**
           * Check if mouse is within bounds
           */

        }, {
          key: "isWithinBounds",
          value: function isWithinBounds(bbox) {
            return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
          }
        }], [{
          key: "getRtlHelpers",
          value: function getRtlHelpers() {
            var dummyDiv = document.createElement('div');
            dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var scrollbarDummyEl = dummyDiv.firstElementChild;
            document.body.appendChild(scrollbarDummyEl);
            var dummyContainerChild = scrollbarDummyEl.firstElementChild;
            scrollbarDummyEl.scrollLeft = 0;
            var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
            var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
            scrollbarDummyEl.scrollLeft = 999;
            var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
            return {
              // determines if the scrolling is responding with negative values
              isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
              // determines if the origin scrollbar position is inverted or not (positioned on left or right)
              isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
            };
          }
        }, {
          key: "initHtmlApi",
          value: function initHtmlApi() {
            this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

            if (typeof MutationObserver !== 'undefined') {
              // Mutation observer to observe dynamically added elements
              this.globalObserver = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                  Array.from(mutation.addedNodes).forEach(function (addedNode) {
                    if (addedNode.nodeType === 1) {
                      if (addedNode.hasAttribute('data-simplebar')) {
                        !addedNode.SimpleBar && new SimpleBar(addedNode, SimpleBar.getElOptions(addedNode));
                      } else {
                        Array.from(addedNode.querySelectorAll('[data-simplebar]')).forEach(function (el) {
                          !el.SimpleBar && new SimpleBar(el, SimpleBar.getElOptions(el));
                        });
                      }
                    }
                  });
                  Array.from(mutation.removedNodes).forEach(function (removedNode) {
                    if (removedNode.nodeType === 1) {
                      if (removedNode.hasAttribute('data-simplebar')) {
                        removedNode.SimpleBar && removedNode.SimpleBar.unMount();
                      } else {
                        Array.from(removedNode.querySelectorAll('[data-simplebar]')).forEach(function (el) {
                          el.SimpleBar && el.SimpleBar.unMount();
                        });
                      }
                    }
                  });
                });
              });
              this.globalObserver.observe(document, {
                childList: true,
                subtree: true
              });
            } // Taken from jQuery `ready` function
            // Instantiate elements already present on the page


            if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
              // Handle it asynchronously to allow scripts the opportunity to delay init
              window.setTimeout(this.initDOMLoadedElements);
            } else {
              document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
              window.addEventListener('load', this.initDOMLoadedElements);
            }
          } // Helper function to retrieve options from element attributes

        }, {
          key: "getElOptions",
          value: function getElOptions(el) {
            var options = Array.from(el.attributes).reduce(function (acc, attribute) {
              var option = attribute.name.match(/data-simplebar-(.+)/);

              if (option) {
                var key = option[1].replace(/\W+(.)/g, function (x, chr) {
                  return chr.toUpperCase();
                });

                switch (attribute.value) {
                  case 'true':
                    acc[key] = true;
                    break;

                  case 'false':
                    acc[key] = false;
                    break;

                  case undefined:
                    acc[key] = true;
                    break;

                  default:
                    acc[key] = attribute.value;
                }
              }

              return acc;
            }, {});
            return options;
          }
        }, {
          key: "removeObserver",
          value: function removeObserver() {
            this.globalObserver.disconnect();
          }
        }, {
          key: "initDOMLoadedElements",
          value: function initDOMLoadedElements() {
            document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
            window.removeEventListener('load', this.initDOMLoadedElements);
            Array.from(document.querySelectorAll('[data-simplebar]')).forEach(function (el) {
              if (!el.SimpleBar) new SimpleBar(el, SimpleBar.getElOptions(el));
            });
          }
        }, {
          key: "getOffset",
          value: function getOffset(el) {
            var rect = el.getBoundingClientRect();
            return {
              top: rect.top + (window.pageYOffset || document.documentElement.scrollTop),
              left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft)
            };
          }
        }]);

        return SimpleBar;
      }();
  /**
   * HTML API
   * Called only in a browser env.
   */


  SimpleBar.defaultOptions = {
    autoHide: true,
    forceVisible: false,
    classNames: {
      content: 'simplebar-content',
      offset: 'simplebar-offset',
      mask: 'simplebar-mask',
      wrapper: 'simplebar-wrapper',
      placeholder: 'simplebar-placeholder',
      scrollbar: 'simplebar-scrollbar',
      track: 'simplebar-track',
      heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
      heightAutoObserverEl: 'simplebar-height-auto-observer',
      visible: 'simplebar-visible',
      horizontal: 'simplebar-horizontal',
      vertical: 'simplebar-vertical',
      hover: 'simplebar-hover'
    },
    scrollbarMinSize: 25,
    scrollbarMaxSize: 0,
    timeout: 1000
  };

  if (canUseDom) {
    SimpleBar.initHtmlApi();
  }

  return SimpleBar;

}));