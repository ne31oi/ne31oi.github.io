(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.phone_new = function() {
	this.initialize(img.phone_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,652);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zvezda_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC32D").s().p("AAuB0IguggIgtAhQgIAEgIAAQgJAAgGgFQgGgFgDgIQgDgIACgHIARg3IgughQgGgGgDgHQgCgIACgIQADgIAHgFQAGgFAJAAIA5gCIASg2QADgIAHgEQAGgFAIAAQAIgBAHAFQAHAFADAIIATA2IA4ACQAIAAAIAFQAGAFADAIQACAIgCAIQgDAIgGAFIgtAhIAQA2QACAIgCAIQgEAIgGAFQgHAFgIAAQgJAAgHgFg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-12.1,25.2,24.3);


(lib.your_app_plashka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00371C").s().p("A1PDgIAAm/MAqfAAAIAAG/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-22.4,272,44.8);


(lib.txt_your_app = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIBDQgMgGgIgLQgGgKgBgPIAAheIAhAAIAABbQAAAIAEAGQAFAGAMgBQANABAFgGQAEgGABgIIAAhbIAfAAIAABeQAAAPgGAKQgIALgMAGQgMAFgQABQgPgBgMgFgAl/A/QgRgJgJgRQgKgQAAgVQAAgUAKgQQAJgQARgKQARgJAUgBQAUABAQAJQARAKAJAQQALAQgBAUQABAVgLAQQgJARgRAJQgQAJgUABQgUgBgRgJgAlvgjQgJAFgGAJQgFAKAAALQAAAMAFAKQAGAJAJAGQAKAEALAAQALAAAJgEQAKgGAFgJQAGgKAAgMQAAgLgGgKQgFgJgKgFQgJgGgLAAQgLAAgKAGgAHgBGIAAiLIA1AAQAOAAALAHQALAGAHALQAGAKAAAOQAAAOgGAJQgHALgLAGQgLAHgOAAIgVAAIAAAsgAIAgDIAVAAQAHAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgHAAIgVAAgAFNBGIAAiLIA0AAQAOAAALAHQALAGAHALQAGAKABAOQgBAOgGAJQgHALgLAGQgLAHgOAAIgVAAIAAAsgAFsgDIAVAAQAIAAAFgFQAEgFAAgIQAAgIgEgFQgFgFgIAAIgVAAgAEABGIgIgWIg0AAIgGAWIgjAAIAviLIApAAIAwCLgADvASIgRgzIgQAzIAhAAgAAHBGIgaguIgOAAIAAAuIghAAIAAiLIA4AAQANAAALAHQAKAGAHALQAGAKABAOQAAANgHAKQgIAKgLAHIAdAzgAghgDIAXAAQAIAAADgFQAFgFgBgIQABgIgFgFQgDgFgIAAIgXAAgAoWBGIAAg2IgvhVIAkAAIAbA2IAbg2IAkAAIgvBVIAAA2g");
	this.shape.setTransform(-1.7,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-14.2,123.9,28.5);


(lib.ten_your_app = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A1PDgIAAm/MAqfAAAIAAG/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-22.4,272,44.8);


(lib.super_bg_fon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#455964").s().p("Arj1hIDMAAIT7T8I3HXHg");
	this.shape.setTransform(-95.1,-199.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D6979").s().p("A5xXUIV212IYx4xIE8E8MAAAAprg");
	this.shape_1.setTransform(4.1,188.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00968A").s().p("EgaaA0xMAAAgs/IXIXII12V3gAVhGHIE6k6IAAJ1gEgXOg0wMAn3AAAIz7T8g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00C7B6").s().p("A6aStIAAxeIXI3IIT7z8IJvAAIADAEMAAAA15Ik6E6IgCABI4xYyg");
	this.shape_3.setTransform(0,-69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.1,-337.6,338.3,675.3);


(lib.yourapp_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("AiCDNQhKAAAAhKIAAkFQAAhKBKAAIEFAAQBKAAAABKIAAEFQAABKhKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


(lib.tank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 106
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C7129").s().p("Al3C0QAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBAAIAAABIAAgBIgEgFIgRgVIgRgVIgFgFIgBgBIgBgBIAAhLIgBg5IABgOIAAgEIAAgBIABAAIAAAAIAYgTQAXgUAEADQABABGng/IFyg3Ig7FmIofAAIiVABIglAAIgJAAIgCAAIAAAAg");
	this.shape.setTransform(-43.7,-23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 33
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#109236").s().p("AwnC3IABAAIAAAAIgBAAgAhqC2QuygBgKACIgWgbQgXgcAAABIgBhLQgBhNACACIAXgTQAYgTACACQACABGog/IGog/ITRAAQABABAqB8IApB8QADACkHByIu7gBg");
	this.shape_1.setTransform(25,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Символ 99
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#233218").s().p("AjDB+QgDgCADi8QACgBAFguQAGgqgBgEIBGgBIBIA6IAAAAIAAAAQDsAhACgCIAADkgADFhFIAAAAg");
	this.shape_2.setTransform(24.6,-51);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Символ 100
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#074118").s().p("AkCAzIAAhlIIFAAIAABlg");
	this.shape_3.setTransform(-8.2,-52.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Символ 102
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C7129").s().p("AhwBgQgdAAAAgeIAAiDQAAgeAdAAIDgAAQAeAAAAAeIAACDQAAAegeAAg");
	this.shape_4.setTransform(-116.9,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Символ 101
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#074118").s().p("AnBAzIAAhlIODgbIh0Cbg");
	this.shape_5.setTransform(-119.3,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Символ 96
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C7129").s().p("Ay3CYQj7hvgBACIgCguQAAgxACABIJVjRMAiGAAAQBPA4ACADQAEAHAbBbQAdBiABABIj6ASQj7ASABACQADAChXDhI8tAAIAAAAIj4htg");
	this.shape_6.setTransform(18.1,25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Символ 94
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#021407").s().p("AiSCTIgBAAQg9g9ABhWQgBhWA9g9IABAAQA8g9BWABQBXgBA8A9QA+A9gBBWQABBWg+A9Qg8A9hXAAQhWAAg8g9gAhqhpQgrArAAA+QAAA+ArAsQAsArA+ABQA+gBAsgrQAsgsAAg+QAAg+gsgrQgsgsg+AAQg+AAgsAsg");
	this.shape_7.setTransform(135,27.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2F2B").s().p("AhqBqQgrgsAAg+QAAg+ArgrQAsgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsArg+ABQg+gBgsgrg");
	this.shape_8.setTransform(135.1,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Символ 94
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#021407").s().p("AhtBuIAAAAQguguABhAQgBhAAugtIAAAAQAuguA/ABQBBgBAtAuQAuAtAABAQAABAguAuQgtAthBAAQg/AAgugtgAhOhOQghAgAAAuQAAAuAhAhQAgAgAuABQAugBAhggQAhghAAguQAAgughggQghghguAAQguAAggAhg");
	this.shape_9.setTransform(100.2,50.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2F2B").s().p("AhOBPQghghAAguQAAguAhggQAgghAuAAQAuAAAhAhQAgAgABAuQgBAuggAhQghAgguABQgugBggggg");
	this.shape_10.setTransform(100.3,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Символ 94
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#021407").s().p("AhtBuIgBAAQgtguAAhAQAAhAAtgtIABAAQAtguBAABQBBgBAtAuQAuAtAABAQAABAguAuQgtAthBAAQhAAAgtgtgAhOhOQghAgAAAuQAAAuAhAhQAhAgAtABQAvgBAgggQAhghAAguQAAgughggQggghgvAAQgtAAghAhg");
	this.shape_11.setTransform(66.3,51.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2F2B").s().p("AhOBPQghghAAguQAAguAhggQAgghAuAAQAvAAAgAhQAgAgABAuQgBAuggAhQggAggvABQgugBggggg");
	this.shape_12.setTransform(66.4,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Символ 94
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#021407").s().p("AhtBuIAAAAQguguABhAQgBhAAugtIAAAAQAuguA/ABQBBgBAtAuQAuAtAABAQAABAguAuQgtAthBAAQg/AAgugtgAhOhOQghAgAAAuQAAAuAhAhQAgAgAuABQAugBAhggQAhghAAguQAAgughggQghghguAAQguAAggAhg");
	this.shape_13.setTransform(33.2,51.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2F2B").s().p("AhOBPQghghAAguQAAguAhggQAgghAuAAQAuAAAhAhQAgAgABAuQgBAuggAhQghAgguABQgugBggggg");
	this.shape_14.setTransform(33.2,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Символ 94
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#021407").s().p("AhtBuIAAAAQguguABhAQgBhAAugtIAAAAQAuguA/ABQBBgBAtAuQAuAtAABAQAABAguAuQgtAthBAAQg/AAgugtgAhOhOQghAgAAAuQAAAuAhAhQAgAgAuABQAugBAhggQAhghAAguQAAgughggQghghguAAQguAAggAhg");
	this.shape_15.setTransform(-0.1,51.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2F2B").s().p("AhOBPQghghAAguQAAguAhggQAgghAuAAQAuAAAhAhQAgAgABAuQgBAuggAhQghAgguABQgugBggggg");
	this.shape_16.setTransform(-0.1,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Символ 94
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#021407").s().p("AhtBuIAAAAQguguABhAQgBhAAugtIAAAAQAuguA/ABQBBgBAtAuQAtAtAABAQAABAgtAuQgtAthBAAQg/AAgugtgAhPhOQggAgAAAuQAAAuAgAhQAiAgAtABQAvgBAgggQAhghAAguQAAgughggQggghgvAAQgtAAgiAhg");
	this.shape_17.setTransform(-33.2,51.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B2F2B").s().p("AhPBPQggghAAguQAAguAgggQAhghAuAAQAuAAAhAhQAhAgAAAuQAAAughAhQghAgguABQgugBghggg");
	this.shape_18.setTransform(-33.1,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Символ 94
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#021407").s().p("AhtBuIAAAAQguguABhAQgBhAAugtIAAAAQAtguBAABQBBgBAtAuQAuAtAABAQAABAguAuQgtAthBAAQhAAAgtgtgAhOhOQghAgAAAuQAAAuAhAhQAhAgAtABQAugBAhggQAgghABguQgBguggggQghghguAAQgtAAghAhg");
	this.shape_19.setTransform(-66.6,51.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B2F2B").s().p("AhOBPQghghAAguQAAguAhggQAhghAtAAQAuAAAhAhQAgAgABAuQgBAuggAhQghAgguABQgtgBghggg");
	this.shape_20.setTransform(-66.6,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Символ 95
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#131513").s().p("A02hOIAVhqMApSgAKIAGBmImQEbI9hADg");
	this.shape_21.setTransform(20.2,44.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#021407").s().p("AvNDqImNkcQgFgEgCgGQgDgGACgGIAbiJQABgIAGgFQAGgFAIAAMAqAgAKQAJAAAGAGQAHAHAAAJQAAAJgHAGIAAABIAHB1QAAAFgDAFQgCAFgFAEImfElQgGAEgHAAI9vAEQgHAAgFgEgA0gi3IgVBqIF8EQIdhgEIGPkbIgGhlg");
	this.shape_22.setTransform(20.1,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Символ 97
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#052C10").s().p("AsWBDIAAiFIYtAAIAACFg");
	this.shape_23.setTransform(33,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.3,-66.8,328.7,135.5);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQCLQAAgygkgkQgkgkgzAAIAAghQAzAAAkgkQAkgkAAgzIAhAAQAAAzAkAkQAkAkAyAAIAAAhQgyAAgkAkQgkAkAAAyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-13.9,27.9,27.9);


(lib.podlojka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1PFbIAAq1MAqfAAAIAAK1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-34.7,272,69.5);


(lib.oval_v_galochke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// $
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE358").s().p("AgSEtQgMAAgGgEQgFgGAAgLIAAglQg3gIgkgcQgkgegQgtQgFgNAEgIQAEgIANgEIAjgOQAOgEAHADQAHADAGAOQALAdAYAQQAXAQAnAAQAwAAAagPQAZgPAAghQAAgXgOgLQgOgNgXgFQgXgFgbgCQgfgDgfgHQgfgGgagPQgagOgQgbQgQgagBgsQAAg5AkglQAjgmBGgJIAAgjQAAgMAFgGQAGgFAMAAIAmAAQANAAAFAFQAEAGAAAMIAAAjQAzAIAfAZQAfAaAUApQAGAMgDAJQgDAIgPAHIgjAPQgMAGgIgDQgHgCgHgOQgNgagUgOQgVgPglAAQgugBgWAOQgWAOABAfQAAAWAOALQAOALAXAFQAXAFAaADQAeACAfAHQAfAFAaAPQAaAOARAaQAPAbABAuQgBA7glAlQglAmhHALIAAAmQAAALgEAGQgFAEgNAAg");
	this.shape.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// $
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D59600").s().p("AgSEtQgMAAgGgEQgFgGAAgLIAAglQg3gIgkgcQgkgegQgtQgFgNAEgIQAEgIANgEIAjgOQAOgEAHADQAHADAGAOQALAdAYAQQAXAQAnAAQAwAAAagPQAZgPAAghQAAgXgOgMQgOgMgXgFQgXgFgbgCQgfgDgfgHQgfgGgagPQgagOgQgbQgQgagBgsQAAg5AkglQAjgmBGgJIAAgjQAAgMAFgGQAGgFAMAAIAmAAQANAAAFAFQAEAGAAAMIAAAjQAzAIAfAZQAfAaAUApQAGAMgDAJQgDAIgPAHIgjAPQgMAGgIgDQgHgCgHgOQgNgagUgOQgVgPglAAQgugBgWAOQgWAOABAfQAAAWAOALQAOALAXAFQAXAFAaADQAeACAfAHQAfAFAaAPQAaAOARAaQAPAbABAuQgBA7glAlQglAmhHALIAAAmQAAALgEAGQgFAEgNAAg");
	this.shape_1.setTransform(1.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D59600").s().p("AAAH7QjRAAiViUQiViUAAjTQAAjRCViVQCViUDRAAQDSAACVCUQCVCVAADRQAADTiVCUQiVCUjSAAIAAAAgAlClDQiGCHAAC8QAAC+CGCFQCFCGC9AAQC+AACFiGQCGiFAAi+QAAi8iGiHQiFiFi+AAQi9AAiFCFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// krug_ad
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC32D").s().p("AmnGoQiviwAAj4QAAj3CviwQCwivD3AAQD4AACwCvQCvCwAAD3QAAD4ivCwQiwCvj4AAQj3AAiwivg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-59.9,119.9,119.9);


(lib.oval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAWQgIgJAAgNQAAgMAIgJQAJgIAMAAQANAAAJAIQAIAJAAAMQAAANgIAJQgJAIgNAAQgMAAgJgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,6,6);


(lib.mic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgHBTQgDgDAAgDIAAgUQgUgDgPgPQgSgTAAgaQAAgEACgDQADgDAFAAQAEAAADADIAAAAQADACABACIAAACIAAABQAAASAMAMQAMANASAAQASAAANgNQAMgMAAgSIAAgBIABgCIACgEQADgDAFAAQADAAADADIABAAIAAAAQADADAAAEQAAAagTATQgOAPgVADIAAAUQAAADgDADIAAABIgBAAQgDADgDAAQgEAAgDgEgAgZATQgKgLAAgOIAAgsQAAgPAKgLQALgKAOAAQAPAAAKAKQALALAAAPIAAAsQAAAOgLALQgKAKgPAAQgOAAgLgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-8.7,12.9,17.4);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAD3D0").s().p("AiCDNQhKAAAAhKIAAkFQAAhKBKAAIEFAAQBKAAAABKIAAEFQAABKhKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


(lib.bg_rabstol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("EgVQAl0MAAAhLnMAqhAAAMAAABLng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.1,-242,272.2,484.1);


(lib.bg_ad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EgVPAlgMAAAhK/MAqfAAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-240,272,480);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBaQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIBSAAQAZAAAAgZIAAhWQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABWQAAAtgtAAgAhWBXQgDgDAAgEIAAh8QAAgtAtAAIB8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIh8AAQgZAAAAAZIAAB8QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-9,18,18.1);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBRIgsgsQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADIAsAsQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAhUAKIgBAAIgCAAQgEAAgDgDQgDgDAAgEQAAgDADgDIBKhKQAEgDADAAQAEAAAEADQACADAAAEQAAAEgCADIg6A5ICXAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(5.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-8.4,19.6,16.9);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWBbQgDgDgBgEIAAgYQABgxAvAAIB6AAQAFABACADQADACAAAEQAAAFgDACQgCADgFABIh6AAQgbAAAAAcIAAAYQgBAEgDADQgCADgFAAQgEAAgCgDgAhQgMQgEgBgCgDQgDgCgBgFQABgEADgCQACgDAEgBIB7AAQAcAAgBgbIAAgXQABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAAXQAAAvgvABg");
	this.shape.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-9.3,18.1,18.8);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009B4E").s().p("A1PPfIAA+9MAqfAAAIAAe9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-136,-99.1,272,198.3), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008D8F").s().rr(-67,-18,134,36,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-67,-18,134,36), null);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAD3D0").s().p("Ap7DNQhJAAgBhKIAAkFQABhKBJAAIEGAAQBLAAAABKIAAEFQAABKhLAAgAigBJQgeAAgUgUQgVgVAAgdIAAgBQAAgbAVgVQAUgUAegBIMgAAQAcABAVAUQAUAVABAbIAAABQgBAdgUAVQgVAUgcAAg");
	this.shape.setTransform(-2.4,72.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,51.8,141.9,41);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BDFEA").s().rr(-7.5,-1.65,15,3.3,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-1.6,15,3.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BDFEA").s().rr(-7.5,-1.65,15,3.3,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-1.6,15,3.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BDFEA").s().rr(-7.5,-1.65,15,3.3,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-1.6,15,3.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F4F9").s().p("ApRJpII/zRIJjAAIo/TRg");
	this.shape.setTransform(1.3,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.1,-64.4,118.7,123.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA694A").s().p("AgVJdIo6y5IJsAAIIzS5g");
	this.shape.setTransform(-3.5,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.7,-67,118.5,121);


(lib.konf_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5870A").s().p("AhxhDQACACAggYQAjgZAAAAICeCiQhGA+gCAFg");
	this.shape.setTransform(-59.1,124.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4E40F").s().p("AhkgsQCjgSgBgCQApA8gCgBQhfBAgJAGg");
	this.shape_1.setTransform(-119.7,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5C20A").s().p("AAPA6IAAAAgAgjAOQAGgGAlhBIAbAsQAAAGgJAcIgLAlIgygsg");
	this.shape_2.setTransform(-94.9,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7B537").s().p("AhpgBIANgfQAOgfAAgCQAAgBBcAaIBcAYIgXBSgABqgQIAAAAIAAAAg");
	this.shape_3.setTransform(-58.7,76.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2413F").s().p("AhKAdQgMAEAigwQAigxADADQBcASABADQABADgoAsQgnAsgCALg");
	this.shape_4.setTransform(-81.5,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE7E7F").s().p("AggALQABAAArhDIALAXQAMAagDABQg2A+gEABIAAAAQgDAAgDgug");
	this.shape_5.setTransform(-17.8,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6990C").s().p("AhfAnIBNg0QBDguAJgFQAEADAiALQACABhPA4IhNA6IAAAAQgCAAgjgag");
	this.shape_6.setTransform(-65.3,-70.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE508B").s().p("AhTAfQACgEAMgeQAMghADgDIBEALQBFAKABABQABACgrAbQgpAcACAAIAAAAIhWgJg");
	this.shape_7.setTransform(-46.7,-75.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6AE95").s().p("AKXH2IBUgkIAFgCQBOghAAgBIAeBjQioBAgTAFgAM+GuIAAAAgAtboNIBTgkIAFgCQBOghAAgBIAfBjQioBAgUAFgAq1pVIAAAAg");
	this.shape_8.setTransform(-34.8,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA47D8").s().p("AAFA5QhfgQAAABIgKhxIBaAXIBXAWQATBVAFANIgBAAQgHAAhYgPg");
	this.shape_9.setTransform(-146,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3C49B").s().p("AhLAnQgCACABhLQAKACBCgFIBNgDQgkBRgCABg");
	this.shape_10.setTransform(-148.3,-92.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5D31D").s().p("AgigvIA2gCQABACAHAuQAFAtACAAIg9AGgAAjAsIAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(-126.2,-80);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5AF3B").s().p("AAYByQgpgDgCABQABgFgwjdIBQACIA1DjIgCAAIgpgBgAgTBwIAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(-88.2,-41);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E93E26").s().p("AMoH6IAigCIAkgBIgUBGQgUBHgDAAQgBACgkAAQgkAAgDABgAs8qDIAigCIAkgBIgVBGQgTBHgCAAQgCACgkAAQgkAAgDABg");
	this.shape_13.setTransform(-29.6,-35.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E33C59").s().p("AgKADQgBAAgXguIgZgwQBfBJANALIAAACQgBAHAFAoIAHAyg");
	this.shape_14.setTransform(-114.7,-167);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E65B5E").s().p("AhEAzIgbguICgg3IAfAhQgDgBhQAjQhMAigFAAIAAAAg");
	this.shape_15.setTransform(-38.5,-127);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2B179").s().p("AhoAxQgRgjABAAQABABCohSIAhgQQADADASAhIAFAKIAOAbQgDAAjOBeIgRgjgAB6gKIAAAAIAAAAg");
	this.shape_16.setTransform(-81.9,-97.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7291E").s().p("AgbBdQgSghgDgDIggAQIgXgVIBKhOIBGhMIA/BZQhiBXgbAdIgGgKg");
	this.shape_17.setTransform(-68.8,-111.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DC77A3").s().p("AAUB5QgBAAAIhpIAHhnIA3AUQgBAAgEBhQgEBigCAAgAlfBeIAzgeQAbgRAZgFQgIAtABABQACABgxADIguACIgDAAgAohgaQAEAAA0g9IAdBYQg1A7gGAKgAEig3IARgVIAIgKQDigqAEABQADAAgMAcQgMAcABAAQg6AFg7AEIh2AHIAAAAgABZhDIAAAAg");
	this.shape_18.setTransform(-80.4,-138);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E35D4D").s().p("AhVhPICqB1QADABgLAVQgIAQgBAEg");
	this.shape_19.setTransform(-10.2,-157);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DEAE93").s().p("AgxAjIgOgrQAHgDA5gLIA/gMIg2AiQg5AjgCAAIAAAAg");
	this.shape_20.setTransform(-9.1,-191.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3837B").s().p("AAUBaQgjgMgEgFQgDgIgjiqIBMApIAnCqQgBgEglgMg");
	this.shape_21.setTransform(-13.8,-207.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E19ABE").s().p("AALAvIhRgvQAJgnAAgHIA+ALQBIBSgCAAg");
	this.shape_22.setTransform(-37.8,-221);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7E1C5").s().p("AgZAAQAQg2AFgHQA5AZgMgEIAABlIhSAAIAAABQgDAAATg+g");
	this.shape_23.setTransform(-66.4,-273.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E62C2D").s().p("Ag1gDIgYgbQgXgcABAAICpA0QAEAFAMAaIAPAiQgLgFiPg5g");
	this.shape_24.setTransform(-63.8,-283.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E32351").s().p("AhLg4QACADAtgVQAsgVABAEIAfBMIAcBJIgwAPQgqAOgFAGQgIgRgwiEg");
	this.shape_25.setTransform(-34.8,-249.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DE6D73").s().p("Ahug4IAggQQC+B2AAABIgtAZg");
	this.shape_26.setTransform(-103.3,-239);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DA816B").s().p("AgZggQgBgBgIg1QBIBlgDgCQgJBDgCAGg");
	this.shape_27.setTransform(-105.2,-197.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DB2B34").s().p("AhchDIAbg3IBPBfIBPBfIgoA3g");
	this.shape_28.setTransform(-136.7,-266.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E5B579").s().p("AhGAIQANhRABAAIB/AfIgeB0g");
	this.shape_29.setTransform(-82.2,-299.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DF80C5").s().p("AhfBWQgCgBAHgiQAEgVAAgFQCnhuAPAAQADgGgLAoIgMAqQgBADhTAvQhRAtgGAAIAAAAg");
	this.shape_30.setTransform(6.6,116.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E4721E").s().p("AANAkIgYAKIgdgxIAIgwQAIgsAAgEIAgA1IAhA1IgTBcg");
	this.shape_31.setTransform(12.1,56.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DC6A3E").s().p("AgpgKQAAABAzgUIAYgKIAKA+IgBAEIhWANIACgyg");
	this.shape_32.setTransform(9.9,64);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E3C63A").s().p("AgyBrIgvgsIB5ipQBLAvgBABQiSClgCAAIAAAAgAhhA/IAAAAIAAAAIAAAAg");
	this.shape_33.setTransform(26.8,56.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EC2C94").s().p("AhggRIDGgeQADABgBAnQAAAmACAEIjTANg");
	this.shape_34.setTransform(1.6,19.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E9E4CC").s().p("AgfAsQABAAAfhYQADAJANAiQASAugDAAg");
	this.shape_35.setTransform(70.1,21.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F67762").s().p("Ag4AtQAAgCBvhXQAEgDgDAYIgDAVQhrAvgCAAIAAAAg");
	this.shape_36.setTransform(90.7,38.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E4CC6F").s().p("AAAAsQh5gMAAgCQABgGABhPIDxASIAABdIh6gMg");
	this.shape_37.setTransform(130,-26.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E636B8").s().p("AgChBIAiAzQABADhABNg");
	this.shape_38.setTransform(101.5,-75.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E73B08").s().p("AgqgHQAAgBAUgyQARgqACgHQAvBygCgCQgjBggEAIg");
	this.shape_39.setTransform(40,-15.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E6AE9F").s().p("AhageQABgCBVACQBTACAAgBIAMA7IizACgABPgdIAAAAIAAAAg");
	this.shape_40.setTransform(16.4,-58);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E59D6C").s().p("AhpABQCfhMACAAQADACAZAlIAWAiQAFAEhVAjQhLAfgIAIIgwhLg");
	this.shape_41.setTransform(47.5,-123.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DF9987").s().p("AhOgvICcA4QACAAgDAUIgCATg");
	this.shape_42.setTransform(23.8,-138.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E5CF0A").s().p("AgUB2IgYhwQgXhsgBAAIBVgPQAAAFAaBvQAcB2gCgCIgsACIgmABIgHAAg");
	this.shape_43.setTransform(8.2,-139);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DDB681").s().p("AgVAGQACg7gBgBQABgIAVAAIAVACIAAABIgEA6IgCA5IgnAHIABg5g");
	this.shape_44.setTransform(143.2,-111.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E5E430").s().p("AhTA9QAEABgQhaIAzgJIAogHIBbgQQACACADAiIAEAkQAAABhaAYIhYAYIgBAAg");
	this.shape_45.setTransform(145.4,-101.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E18E43").s().p("AgFAaQgrgggJgDQAdgzACgFQACAEAoAeQAqAfAAADQgCAEgDAcQgEAZgCAGIg0gog");
	this.shape_46.setTransform(96.4,-184);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E5AB01").s().p("AAAA2QiDgKACgCIADg5QADgyADgBID1AaIADA3QABAtABAHQgJgEh5gJg");
	this.shape_47.setTransform(139.8,-196.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E63892").s().p("AiBXfQgqgDgCABQABgFgwjeIBRACIA1DkIgCAAIgpgBgAitXdIAAAAIAAAAIAAAAgAAVz4QCOjYANgPIAXAcQAXAagBAFQglA5gmA3QhMBwgDADg");
	this.shape_48.setTransform(102.5,-57.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E4DC64").s().p("AiBAYIBthIQBuhLAAADQAAADAVAuQAUAugBABQgxAkgzAkQhhBEgGAGgAiBAYIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(93.5,-277.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E6C7A4").s().p("AB6A7IAAABgAAAArQh5gPAAgCQABgHADhNIDpAcIAGBZQgBgDh5gNg");
	this.shape_50.setTransform(131.5,-273.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E6BFC2").s().p("AggBDIAAAAIAAAAgAglgCIBFhAQACAHABAjQACAhABAIQgDAAhDAyQABgCgGhDg");
	this.shape_51.setTransform(45.4,-218.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E4A417").s().p("AgyATQACABAXgqQAXgrAAAEQABAFAaAVQAaATAAADQABAFghAhQgfAhAAAFgAgyATIAAAAIAAAAg");
	this.shape_52.setTransform(17,-242.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3E554").s().p("AgBBdQACgCgkhEQglhFACgEIA8grQAGAFAiAyQAhAvAIAIIgjAmQgkAngBAAIAAgBg");
	this.shape_53.setTransform(25.7,-232.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E270DC").s().p("AglgDIgDgKQgRgxgIgKQAUAGBNgCIgFAGQgCAEAFAAQgJAMAKAUQAiBKACAMIgoAGQgiAEgGADIgYhMg");
	this.shape_54.setTransform(37.3,-229);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E61C17").s().p("AhwBkQABAAgHhuQgCgFBzgrIBxgqQANCCgCgLQgCgDhyAtQhlAogMAAIgCgBg");
	this.shape_55.setTransform(7,-252.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E4237E").s().p("Ah6gcIAshMIBkA8QBmA5gBABIg6BbgAh6gdIAAABIAAAAIAAgBg");
	this.shape_56.setTransform(41.4,-259.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2961C").s().p("AgdBXQgZgJABgEQABABAuisQACgGAeANIAcAOIgeBYQgbBQgCAIQgBgEgXgJg");
	this.shape_57.setTransform(76.8,-242.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E12108").s().p("AgMAoQhggcgBgDIAUhMIDHBFIgaBCIhggcg");
	this.shape_58.setTransform(51.1,-270.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D927B7").s().p("AhGAAIgchEIDFAGQAAAChHA/IhEBCQgEgIgag9g");
	this.shape_59.setTransform(11.2,-296.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E58602").s().p("AgRAAQhFhpAAgCICtALQgEAQgfC8QABgChGhqg");
	this.shape_60.setTransform(147.4,-294.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E13331").s().p("AAKBTQgvgVADgHQACgIgOhCQgOhEADgBIAigFQAggFATgGQAaC9AFAUQgBgCgwgUg");
	this.shape_61.setTransform(124.1,-297.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E4D925").s().p("AgkAAQgvhNgLgQICsAFQACgUAIBRIAGBAIABAEQgBAKgIAJQgJAIgSAIIgpASg");
	this.shape_62.setTransform(78.5,-296.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-308,312.2,444.4);


(lib.click_oval_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019393").s().p("AnvHwQjNjOAAkiQAAkhDNjOQDOjNEhAAQEiAADODNQDNDOAAEhQAAEijNDOQjODNkiAAQkhAAjOjNgAkHkHQhuBtAACaQAACbBuBtQBtBuCaAAQCbAABthuQBuhtAAibQAAiahuhtQhthuibAAQiaAAhtBug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-70.1,140.3,140.3);


(lib.but_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVD8IAAn3ICrAAIAAH3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-25.2,17.2,50.4);


(lib.blick_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,1],7.4,-282,28.4,-282).s().rc(-28,-303,56,606,0,28,28,0);
	this.shape.setTransform(-17.4,0,1.001,0.997);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-302,56,604);


(lib.ad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABIBxQgUgMgKgWQgLgUgBgbQABgaALgTQAKgWAUgMQASgMAYAAQARAAAOAGQAMAFAJAKIAAhWIA0AAIAAD0Ig0AAIAAgRQgJALgMAFQgOAGgRAAQgYAAgSgMgABeABQgLAMgBATQABAVALALQAMALASAAQATAAALgLQALgLABgVQgBgTgLgMQgLgKgTAAQgSAAgMAKgAgpB4IgMgmIhbAAIgNAmIg8AAIBTj0IBHAAIBSD0gAhGAdIgchZIgdBZIA5AAg");
	this.shape.setTransform(-0.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-12.5,43.7,25);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgRuArrQhbAAhBhAQhAhBAAhbMAAAhQdQAAhbBAhBQBBhABbAAMAjdAAAQBbAABBBAQBABBAABbMAAABQdQAABbhABBQhBBAhbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-279.5,271,559);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1C2QhLhMAAhqQAAhqBLhLQBLhLBqAAQBqAABMBLQBLBLAABqQAABqhLBMQhMBLhqAAQhqAAhLhLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-25.7,51.4,51.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("ArmDpQhBAAgvguQguguAAhBIAAiXQAAhBAuguQAvguBBAAIXNAAQBBAAAuAuQAvAuAABBIAACXQAABBgvAuQguAuhBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-23.3,180.1,46.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009B4E").s().p("AjMBrIAAjVIGZAAIAADVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-10.7,41,21.4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009B4E").s().p("AiBBoQhLAAAAhLIAAiEIGZAAIAACEQAABLhLAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-10.3,41,20.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009B4E").s().p("AjMBlIAAh+QAAhLBLAAIEDAAQBLAAAABLIAAB+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-10.1,41,20.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZA/QgQgKgKgQQgJgRAAgUQAAgTAJgQQAKgRAQgJQAQgKAVAAQAUAAARAKQAPAJAJARQAKAQAAATQAAAUgKARQgJAQgPAKQgRAJgUAAQgVAAgQgJgAhTg0QgOAHgIAOQgJAOAAARQAAASAJANQAIAOAOAJQANAIASAAQARAAAOgIQAOgJAHgOQAIgNAAgSQAAgRgIgOQgHgOgOgHQgOgJgRAAQgSAAgNAJgADkBGIAAiLIBQAAIAAAKIhFAAIAAA2IBAAAIAAAJIhAAAIAAA4IBGAAIAAAKgACkBGIgig6IgsAAIAAA6IgKAAIAAiLIA3AAQALAAAKAGQAJAFAGAJQAFAKAAAMQAAAJgEAIQgEAIgHAFQgHAGgJACIAjA7gABWADIAtAAQAIAAAHgDQAHgFAEgHQAFgHAAgIQAAgKgFgGQgEgIgHgDQgHgFgIAAIgtAAgAjABGIAAh7Ig0BUIgBAAIg0hUIAAB7IgLAAIAAiLIANAAIAyBSIAyhSIAOAAIAACLg");
	this.shape.setTransform(-1.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-13.5,71.5,27.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgRuArrQhbAAhBhAQhAhBAAhbMAAAhQdQAAhbBAhBQBBhABbAAMAjdAAAQBbAABBBAQBABBAABbMAAABQdQAABbhABBQhBBAhbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-279.5,271,559);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00371C").s().p("At5A9QgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAIbzAAQAYAAASASQASASAAAYQAAAZgSASQgSASgYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-6.1,190,12.2);


(lib.menu_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ84("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.9,0);

	this.instance_1 = new lib.Символ83("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(87.5,0);

	this.instance_2 = new lib.Символ82("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-87.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-9.3,199.4,18.8);


(lib.icon_pod_priloj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-8.3,-4.3,1.186,1.185,0,0,0,-0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,58,168.3,48.6);


(lib.google_search = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mic
	this.instance = new lib.mic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(92.7,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwzDCQhLAAABhKIAAjvQgBhKBLAAMAhnAAAQBLAAgBBKIAADvQABBKhLAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-19.4,230.1,38.8);


(lib.Символ124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-55.6,-4.75,111.2,9.5,4.75);
	this.shape.setTransform(0.1,-7,1.269,1.288);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().rr(-36.65,-2.75,73.3,5.5,2.75);
	this.shape_1.setTransform(-24.1,9.4,1.27,1.288);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00371C").s().p("ArmDpQhBAAgvguQguguAAhBIAAiXQAAhBAuguQAvguBBAAIXNAAQBBAAAuAuQAvAuAABBIAACXQAABBgvAuQguAuhBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 5
	this.instance = new lib.Символ21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.9,3.6);
	this.instance.alpha = 0.102;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance.cache(-92,-25,184,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-23.3,184.1,50.2);


(lib.Символ123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00371C").s().rr(-41.4,-4.75,82.8,9.5,4.75);
	this.shape.setTransform(0,-7.7,1.269,1.288);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().rr(-36.65,-2.75,73.3,5.5,2.75);
	this.shape_1.setTransform(0,8.8,1.27,1.288);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArmDpQhBAAgvguQguguAAhBIAAiXQAAhBAuguQAvguBBAAIXNAAQBBAAAuAuQAvAuAABBIAACXQAABBgvAuQguAuhBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 1
	this.instance = new lib.Символ21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.4,4.3);
	this.instance.alpha = 0.199;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance.cache(-92,-25,184,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-23.3,183.6,51);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.oval("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5,0);
	this.instance.alpha = 0.25;

	this.instance_1 = new lib.oval("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-3,15.9,6);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.super_bg_fon("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-58.9,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ81, new cjs.Rectangle(-228,-307.9,338.3,675.3), null);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.icon("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(30.9,156.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 172, 134, 209, 0)];
	this.instance.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.icon("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31,156.4);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 34, 118, 244, 0)];
	this.instance_1.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// icon
	this.instance_2 = new lib.icon("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,156.4);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 253, 187, 3, 0)];
	this.instance_2.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// icon
	this.instance_3 = new lib.icon("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-93,156.4);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 210, 106, 0)];
	this.instance_3.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// icon
	this.instance_4 = new lib.icon("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(30.9,54);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 210, 106, 0)];
	this.instance_4.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// icon
	this.instance_5 = new lib.icon("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-31,54);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_5.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// icon
	this.instance_6 = new lib.icon("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(93,54);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_6.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// icon
	this.instance_7 = new lib.icon("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-93,54);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 80, 110, 220, 0)];
	this.instance_7.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// icon
	this.instance_8 = new lib.icon("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(30.9,-14.4);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_8.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// icon
	this.instance_9 = new lib.icon("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-31,-14.4);
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_9.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// icon
	this.instance_10 = new lib.icon("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(93,-14.4);
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 172, 134, 209, 0)];
	this.instance_10.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// icon
	this.instance_11 = new lib.icon("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-93,-14.4);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_11.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// icon
	this.instance_12 = new lib.icon("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-31,-87.8);
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_12.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// icon
	this.instance_13 = new lib.icon("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(93,-87.8);
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_13.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// icon
	this.instance_14 = new lib.icon("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-93,-87.8);
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 139, 158, 0)];
	this.instance_14.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ69, new cjs.Rectangle(-113.5,-108.3,227,285.2), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.oval_v_galochke("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.1,62.5,1.334,1.334);

	this.instance_1 = new lib.Символ1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.4,-55.8,1.27,1.27,0,0,0,0,-0.1);

	this.instance_2 = new lib.Символ2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(26.2,-60.8,1.27,1.27,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-142.4,206.2,284.9);


(lib.najimalka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AEBAAQAABrhLBLQhLBLhrAAQhqAAhLhLQhLhLAAhrQAAhqBLhLQBLhLBqAAQBrAABLBLQBLBLAABqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance = new lib.Символ22("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-27.2,54.4,54.4);


(lib.click_oval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.click_oval_1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.click_oval, new cjs.Rectangle(-70.1,-70.1,140.3,140.3), null);


(lib.blick_obshee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blick_phone("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-127.2,-3,1,1,180);

	this.instance_1 = new lib.blick_phone("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.2,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.8,-305,275.7,604.2);


(lib.asvasvasvasv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.star("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.asvasvasvasv, new cjs.Rectangle(-13.9,-13.9,27.9,27.9), null);


(lib.anim_click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.click_oval();
	this.instance.parent = this;
	this.instance.setTransform(123,198,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,alpha:0.91},1).to({scaleX:1.54,scaleY:1.54,alpha:0.73},1).to({scaleX:1.97,scaleY:1.97,alpha:0.66},1).to({scaleX:2.76,scaleY:2.76,alpha:0.512},1).to({scaleX:3.12,scaleY:3.12,alpha:0.449},1).to({scaleX:3.76,scaleY:3.76,alpha:0.328},1).to({scaleX:4.04,scaleY:4.04,alpha:0.27},1).to({scaleX:4.53,scaleY:4.53,alpha:0.18},1).to({scaleX:4.74,scaleY:4.74,alpha:0.141},1).to({scaleX:5.09,scaleY:5.09,alpha:0.078},1).to({scaleX:5.22,scaleY:5.22,alpha:0.059},1).to({scaleX:5.42,scaleY:5.42,alpha:0.02},1).to({scaleX:5.48,scaleY:5.48,alpha:0.012},1).to({scaleX:5.53,scaleY:5.53,alpha:0},1).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_1 = new lib.click_oval();
	this.instance_1.parent = this;
	this.instance_1.setTransform(123,198,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.09,scaleY:1.09,alpha:0.82},1).to({scaleX:1.54,scaleY:1.54,alpha:0.73},1).to({scaleX:2.38,scaleY:2.38,alpha:0.578},1).to({scaleX:2.76,scaleY:2.76,alpha:0.512},1).to({scaleX:3.45,scaleY:3.45,alpha:0.379},1).to({scaleX:3.76,scaleY:3.76,alpha:0.328},1).to({scaleX:4.3,scaleY:4.3,alpha:0.23},1).to({scaleX:4.53,scaleY:4.53,alpha:0.18},1).to({scaleX:4.93,scaleY:4.93,alpha:0.109},1).to({scaleX:5.09,scaleY:5.09,alpha:0.078},1).to({scaleX:5.34,scaleY:5.34,alpha:0.039},1).to({scaleX:5.42,scaleY:5.42,alpha:0.02},1).to({scaleX:5.51,scaleY:5.51,alpha:0.012},1).to({scaleX:5.53,scaleY:5.53,alpha:0},1).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116,191,14,14);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.yourapp_icon("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 155, 78, 0)];
	this.instance.cache(-22,-22,45,45);

	this.instance_1 = new lib.yourapp_icon("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1.2);
	this.instance_1.alpha = 0.398;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 20, 140, 130, 0)];
	this.instance_1.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-21.6,41,43.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// google_search
	this.instance = new lib.google_search("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-226.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// google_search
	this.instance_1 = new lib.google_search("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.6,-222.2);
	this.instance_1.alpha = 0.441;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_1.cache(-117,-21,234,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 69
	this.instance_2 = new lib.Символ69();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 69
	this.instance_3 = new lib.Символ69();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.3,56);
	this.instance_3.alpha = 0.398;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 20, 140, 130, 0)];
	this.instance_3.cache(-115,-110,231,289);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// podlojka
	this.instance_4 = new lib.podlojka("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,210.9);
	this.instance_4.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 85
	this.instance_5 = new lib.Символ85("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,156.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-245.5,272,491.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tank
	this.instance = new lib.tank("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-5.8,0.651,0.651,0,0,0,-0.3,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-50.3,214,100.7);


(lib.sprite600000vassa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* i = Math.ceil(Math.random() * 21);
		gotoAndPlay(i);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(51));

	// Layer 1
	this.instance = new lib.asvasvasvasv();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,rotation:35.9},2).to({scaleX:0.69,scaleY:0.69,rotation:67.9},2).to({scaleX:0.73,scaleY:0.73,rotation:82.4},1).to({scaleX:0.8,scaleY:0.8,rotation:108.1},2).to({scaleX:0.86,scaleY:0.86,rotation:130.1},2).to({scaleX:0.91,scaleY:0.91,rotation:148.2},2).to({scaleX:0.95,scaleY:0.95,rotation:162.2},2).to({scaleX:0.98,scaleY:0.98,rotation:172.2},2).to({scaleX:0.99,scaleY:0.99,rotation:178.2},2).to({scaleX:1,scaleY:1,rotation:179.7},1).to({scaleX:1,scaleY:1,rotation:180},1).to({scaleX:0.9,scaleY:0.9,rotation:197},1).to({scaleX:0.82,scaleY:0.82,rotation:212.3},1).to({scaleX:0.74,scaleY:0.74,rotation:225.9},1).to({scaleX:0.68,scaleY:0.68,rotation:237.7},1).to({scaleX:0.62,scaleY:0.62,rotation:247.7},1).to({scaleX:0.58,scaleY:0.58,rotation:255.7},1).to({scaleX:0.55,scaleY:0.55,rotation:262},1).to({scaleX:0.52,scaleY:0.52,rotation:266.5},1).to({scaleX:0.5,scaleY:0.5,rotation:270},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.rab_stol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{najal:9,otkr:16,reklama:37,zakr_reklama:210,zakr_priloj:229});

	// icon_pod_priloj
	this.instance = new lib.icon_pod_priloj("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-40.4,278.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(591));

	// bar
	this.instance_1 = new lib.podlojka("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-234,1,0.216,0,0,0,0,-0.5);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(591));

	// bg
	this.instance_2 = new lib.Символ13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.4,3.5,0.269,0.269);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:24.3,y:11.3},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:18.8,y:17.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:14.3,y:22.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:10.7,y:26.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:7.8,y:29.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:5.5,y:32.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:3.6,y:34.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:2.2,y:36.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:1.2,y:37.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:0.5,y:38},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0.1,y:38.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:0,y:38.6},0).wait(9).to({startPosition:0},0).to({_off:true},112).wait(438));

	// Символ 69
	this.instance_3 = new lib.yourapp_icon("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(30.6,3.9);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-22,-22,45,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({_off:true},4).wait(574));

	// yourapp_icon
	this.instance_4 = new lib.Символ24("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(30.7,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},41).wait(550));

	// Слой 25
	this.instance_5 = new lib.Символ12("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({startPosition:0},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-12.6,y:42.8},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-22.6,y:46.5},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:-30.6,y:49.4},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:-37,y:51.8},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:-42.2,y:53.7},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:-46.4,y:55.2},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:-49.7,y:56.5},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:-52.2,y:57.4},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:-54.1,y:58.1},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-55.3,y:58.5},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:-56,y:58.8},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1.79,scaleY:1.79,x:-56.3},0).to({_off:true},9).wait(151).to({_off:false,alpha:0},0).wait(1).to({regX:0,regY:0,scaleX:1.78,scaleY:1.78,x:-55.4,y:58.3,alpha:0.014},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:-53.7,y:57.7,alpha:0.044},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:-51,y:56.7,alpha:0.092},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:-47.3,y:55.3,alpha:0.158},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:-42.7,y:53.7,alpha:0.24},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-37.3,y:51.7,alpha:0.335},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:-31.5,y:49.5,alpha:0.439},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-25.5,y:47.4,alpha:0.546},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-19.7,y:45.2,alpha:0.649},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-14.4,y:43.3,alpha:0.743},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-9.9,y:41.6,alpha:0.823},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-6.2,y:40.3,alpha:0.889},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-3.4,y:39.3,alpha:0.939},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-1.4,y:38.5,alpha:0.974},0).wait(1).to({scaleX:1,scaleY:1,x:-0.3,y:38.1,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:38.2,alpha:1},0).wait(383));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgVQAuEMAAAhcHMAqhAAAMAAABcHg");
	mask.setTransform(0,51);

	// Слой 2
	this.instance_6 = new lib.Символ81("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(58.9,9.6);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(591));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.1,-243.7,272.2,629);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sprite600000vassa("synched",19);
	this.instance.parent = this;
	this.instance.setTransform(82.2,96.9,0.731,0.731);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245));

	// Слой 1
	this.instance_1 = new lib.sprite600000vassa("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.336,1.336);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.zvezda_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-14.4,-59.6,0.463,0.463);

	this.instance_1 = new lib.zvezda_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.2,-59.6,0.463,0.463);

	this.instance_2 = new lib.zvezda_01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.9,-59.6,0.463,0.463);

	this.instance_3 = new lib.zvezda_01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-64.7,-59.6,0.463,0.463);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().rr(-55.6,-4.75,111.2,9.5,4.75);
	this.shape_1.setTransform(0.1,-90.1,1.269,1.288);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().rr(-36.65,-2.75,73.3,5.5,2.75);
	this.shape_2.setTransform(-24.1,-73.7,1.27,1.288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 5
	this.instance_4 = new lib.Символ5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-96.2,214,192.5);


(lib.reklama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgxAAIBjAA");
	this.shape.setTransform(-130.6,286.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("Ag9AAIB7AA");
	this.shape_1.setTransform(-129.5,286.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AhIAAICRAA");
	this.shape_2.setTransform(-128.3,286.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AhUAAICpAA");
	this.shape_3.setTransform(-127.2,286.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AhgAAIDBAA");
	this.shape_4.setTransform(-126.1,286.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AhrAAIDXAA");
	this.shape_5.setTransform(-124.9,286.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("Ah3AAIDvAA");
	this.shape_6.setTransform(-123.8,286.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AiDAAIEHAA");
	this.shape_7.setTransform(-122.7,286.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AiOAAIEdAA");
	this.shape_8.setTransform(-121.5,286.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AiaAAIE1AA");
	this.shape_9.setTransform(-120.4,286.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("AimAAIFNAA");
	this.shape_10.setTransform(-119.2,286.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("AixAAIFjAA");
	this.shape_11.setTransform(-118.1,286.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("Ai9AAIF7AA");
	this.shape_12.setTransform(-117,286.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,1,1).p("AjJAAIGSAA");
	this.shape_13.setTransform(-115.8,286.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AjUAAIGpAA");
	this.shape_14.setTransform(-114.7,286.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("AjgAAIHBAA");
	this.shape_15.setTransform(-113.6,286.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("AjsAAIHYAA");
	this.shape_16.setTransform(-112.4,286.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,1,1).p("Aj3AAIHvAA");
	this.shape_17.setTransform(-111.3,286.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("AkDAAIIHAA");
	this.shape_18.setTransform(-110.2,286.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,1,1).p("AkOAAIIdAA");
	this.shape_19.setTransform(-109,286.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("AkaAAII1AA");
	this.shape_20.setTransform(-107.9,286.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3,1,1).p("AkmAAIJNAA");
	this.shape_21.setTransform(-106.8,286.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AkyAAIJlAA");
	this.shape_22.setTransform(-105.6,286.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3,1,1).p("Ak9AAIJ7AA");
	this.shape_23.setTransform(-104.5,286.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3,1,1).p("AlJAAIKTAA");
	this.shape_24.setTransform(-103.4,286.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,1,1).p("AlVAAIKrAA");
	this.shape_25.setTransform(-102.2,286.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3,1,1).p("AlgAAILBAA");
	this.shape_26.setTransform(-101.1,286.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3,1,1).p("AlsAAILZAA");
	this.shape_27.setTransform(-100,286.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3,1,1).p("Al4AAILwAA");
	this.shape_28.setTransform(-98.8,286.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3,1,1).p("AmDAAIMHAA");
	this.shape_29.setTransform(-97.7,286.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3,1,1).p("AmPAAIMfAA");
	this.shape_30.setTransform(-96.6,286.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,1,1).p("AmbAAIM2AA");
	this.shape_31.setTransform(-95.4,286.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AmmAAINNAA");
	this.shape_32.setTransform(-94.3,286.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("AmyAAINlAA");
	this.shape_33.setTransform(-93.2,286.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("Am9AAIN8AA");
	this.shape_34.setTransform(-92,286.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3,1,1).p("AnJAAIOTAA");
	this.shape_35.setTransform(-90.9,286.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AnVAAIOrAA");
	this.shape_36.setTransform(-89.8,286.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3,1,1).p("AnhAAIPDAA");
	this.shape_37.setTransform(-88.6,286.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("AnsAAIPZAA");
	this.shape_38.setTransform(-87.5,286.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3,1,1).p("An4AAIPxAA");
	this.shape_39.setTransform(-86.4,286.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3,1,1).p("AoEAAIQJAA");
	this.shape_40.setTransform(-85.2,286.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3,1,1).p("AoPAAIQfAA");
	this.shape_41.setTransform(-84.1,286.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(3,1,1).p("AobAAIQ3AA");
	this.shape_42.setTransform(-83,286.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3,1,1).p("AonAAIROAA");
	this.shape_43.setTransform(-81.8,286.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(3,1,1).p("AoyAAIRlAA");
	this.shape_44.setTransform(-80.7,286.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3,1,1).p("Ao+AAIR9AA");
	this.shape_45.setTransform(-79.6,286.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(3,1,1).p("ApJAAISUAA");
	this.shape_46.setTransform(-78.4,286.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3,1,1).p("ApVAAISrAA");
	this.shape_47.setTransform(-77.3,286.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(3,1,1).p("AphAAITDAA");
	this.shape_48.setTransform(-76.2,286.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3,1,1).p("ApsAAITaAA");
	this.shape_49.setTransform(-75,286.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3,1,1).p("Ap4AAITxAA");
	this.shape_50.setTransform(-73.9,286.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(3,1,1).p("AqEAAIUJAA");
	this.shape_51.setTransform(-72.8,286.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(3,1,1).p("AqQAAIUhAA");
	this.shape_52.setTransform(-71.6,286.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,1,1).p("AqbAAIU3AA");
	this.shape_53.setTransform(-70.5,286.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3,1,1).p("AqnAAIVPAA");
	this.shape_54.setTransform(-69.4,286.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(3,1,1).p("AqzAAIVnAA");
	this.shape_55.setTransform(-68.2,286.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(3,1,1).p("Aq+AAIV9AA");
	this.shape_56.setTransform(-67.1,286.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(3,1,1).p("ArKAAIWVAA");
	this.shape_57.setTransform(-65.9,286.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(3,1,1).p("ArWAAIWtAA");
	this.shape_58.setTransform(-64.8,286.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(3,1,1).p("ArhAAIXDAA");
	this.shape_59.setTransform(-63.7,286.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(3,1,1).p("ArtAAIXbAA");
	this.shape_60.setTransform(-62.5,286.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(3,1,1).p("Ar5AAIXyAA");
	this.shape_61.setTransform(-61.4,286.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(3,1,1).p("AsEAAIYJAA");
	this.shape_62.setTransform(-60.3,286.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(3,1,1).p("AsQAAIYhAA");
	this.shape_63.setTransform(-59.2,286.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(3,1,1).p("AscAAIY5AA");
	this.shape_64.setTransform(-58,286.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(3,1,1).p("AsnAAIZPAA");
	this.shape_65.setTransform(-56.9,286.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(3,1,1).p("AszAAIZnAA");
	this.shape_66.setTransform(-55.7,286.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(3,1,1).p("As/AAIZ/AA");
	this.shape_67.setTransform(-54.6,286.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(3,1,1).p("AtKAAIaVAA");
	this.shape_68.setTransform(-53.5,286.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(3,1,1).p("AtWAAIatAA");
	this.shape_69.setTransform(-52.3,286.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(3,1,1).p("AtiAAIbFAA");
	this.shape_70.setTransform(-51.2,286.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(3,1,1).p("AttAAIbbAA");
	this.shape_71.setTransform(-50.1,286.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(3,1,1).p("At5AAIbzAA");
	this.shape_72.setTransform(-48.9,286.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(3,1,1).p("AuEAAIcKAA");
	this.shape_73.setTransform(-47.8,286.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(3,1,1).p("AuQAAIchAA");
	this.shape_74.setTransform(-46.7,286.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(3,1,1).p("AucAAIc5AA");
	this.shape_75.setTransform(-45.5,286.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(3,1,1).p("AuoAAIdRAA");
	this.shape_76.setTransform(-44.4,286.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(3,1,1).p("AuzAAIdnAA");
	this.shape_77.setTransform(-43.3,286.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(3,1,1).p("Au/AAId/AA");
	this.shape_78.setTransform(-42.1,286.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(3,1,1).p("AvLAAIeXAA");
	this.shape_79.setTransform(-41,286.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(3,1,1).p("AvWAAIetAA");
	this.shape_80.setTransform(-39.9,286.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(3,1,1).p("AviAAIfFAA");
	this.shape_81.setTransform(-38.7,286.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(3,1,1).p("AvuAAIfdAA");
	this.shape_82.setTransform(-37.6,286.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(3,1,1).p("Av5AAIfzAA");
	this.shape_83.setTransform(-36.5,286.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(3,1,1).p("AwFAAMAgLAAA");
	this.shape_84.setTransform(-35.3,286.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(3,1,1).p("AwRAAMAgjAAA");
	this.shape_85.setTransform(-34.2,286.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(3,1,1).p("AwcAAMAg5AAA");
	this.shape_86.setTransform(-33.1,286.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(3,1,1).p("AwoAAMAhRAAA");
	this.shape_87.setTransform(-31.9,286.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(3,1,1).p("Aw0AAMAhpAAA");
	this.shape_88.setTransform(-30.8,286.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(3,1,1).p("Aw/AAMAh/AAA");
	this.shape_89.setTransform(-29.7,286.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(3,1,1).p("AxLAAMAiXAAA");
	this.shape_90.setTransform(-28.5,286.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(3,1,1).p("AxXAAMAivAAA");
	this.shape_91.setTransform(-27.4,286.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(3,1,1).p("AxiAAMAjFAAA");
	this.shape_92.setTransform(-26.3,286.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(3,1,1).p("AxuAAMAjdAAA");
	this.shape_93.setTransform(-25.1,286.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(3,1,1).p("Ax6AAMAj1AAA");
	this.shape_94.setTransform(-24,286.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(3,1,1).p("AyFAAMAkLAAA");
	this.shape_95.setTransform(-22.9,286.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(3,1,1).p("AyRAAMAkjAAA");
	this.shape_96.setTransform(-21.7,286.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(3,1,1).p("AydAAMAk7AAA");
	this.shape_97.setTransform(-20.6,286.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(3,1,1).p("AyoAAMAlRAAA");
	this.shape_98.setTransform(-19.5,286.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(3,1,1).p("Ay0AAMAlpAAA");
	this.shape_99.setTransform(-18.3,286.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(3,1,1).p("AzAAAMAmBAAA");
	this.shape_100.setTransform(-17.2,286.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(3,1,1).p("AzLAAMAmXAAA");
	this.shape_101.setTransform(-16.1,286.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(3,1,1).p("AzXAAMAmvAAA");
	this.shape_102.setTransform(-14.9,286.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(3,1,1).p("AzjAAMAnHAAA");
	this.shape_103.setTransform(-13.8,286.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(3,1,1).p("AzuAAMAndAAA");
	this.shape_104.setTransform(-12.7,286.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(3,1,1).p("Az6AAMAn1AAA");
	this.shape_105.setTransform(-11.5,286.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(3,1,1).p("A0GAAMAoNAAA");
	this.shape_106.setTransform(-10.4,286.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(3,1,1).p("A0RAAMAojAAA");
	this.shape_107.setTransform(-9.3,286.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(3,1,1).p("A0dAAMAo7AAA");
	this.shape_108.setTransform(-8.1,286.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(3,1,1).p("A0pAAMApTAAA");
	this.shape_109.setTransform(-7,286.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(3,1,1).p("A00AAMAppAAA");
	this.shape_110.setTransform(-5.9,286.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(3,1,1).p("A1AAAMAqBAAA");
	this.shape_111.setTransform(-4.7,286.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(3,1,1).p("A1MAAMAqZAAA");
	this.shape_112.setTransform(-3.6,286.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(3,1,1).p("A1XAAMAqvAAA");
	this.shape_113.setTransform(-2.4,286.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(3,1,1).p("A1jAAMArHAAA");
	this.shape_114.setTransform(-1.3,286.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(3,1,1).p("A1uAAMArdAAA");
	this.shape_115.setTransform(-0.2,286.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(3,1,1).p("A16AAMAr1AAA");
	this.shape_116.setTransform(1,286.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(3,1,1).p("A2GAAMAsNAAA");
	this.shape_117.setTransform(2.1,286.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(3,1,1).p("A2RAAMAsjAAA");
	this.shape_118.setTransform(3.2,286.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(3,1,1).p("A2dAAMAs7AAA");
	this.shape_119.setTransform(4.4,286.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(3,1,1).p("A2pAAMAtTAAA");
	this.shape_120.setTransform(5.5,286.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).wait(13));

	// Слой 3
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("A1uAPQgHAAgEgFQgEgEgBgGQABgFAEgFQAEgEAHAAMArdAAAQAHAAAEAEQAEAFABAFQgBAGgEAEQgEAFgHAAg");
	this.shape_121.setTransform(0,286.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(133));

	// Слой 6
	this.instance = new lib.Символ16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133));

	// Слой 7
	this.instance_1 = new lib.Символ68("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,216.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133));

	// Слой 9
	this.instance_2 = new lib.Символ68("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.1,219.5);
	this.instance_2.alpha = 0.441;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_2.cache(-69,-20,138,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(133));

	// Слой 8
	this.instance_3 = new lib.Символ25("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47.9,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(133));

	// Слой 2
	this.instance_4 = new lib.ad("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,75.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAAAIAhggAAAAAIAhAhAggggIAgAgAggAhIAggh");
	this.shape_122.setTransform(-120,-224.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("Ag7A8QgZgYAAgkQAAgiAZgaQAYgYAjAAQAkAAAYAYQAZAaAAAiQAAAkgZAYQgYAZgkAAQgjAAgYgZgAAAAAIAfAgIgfggIAfggIgfAgIghggIAhAggAghAgIAhggg");
	this.shape_123.setTransform(-119.9,-224.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.instance_4}]}).wait(133));

	// bg (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgRuArrQhbAAhBhAQhAhBAAhcMAAAhQcQAAhbBAhAQBBhBBbAAMAjdAAAQBbAABBBBQBABAAABbMAAABQcQAABchABBQhBBAhbAAg");
	mask.setTransform(0,37.5);

	// medal
	this.instance_5 = new lib.Символ32("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1,-111.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(133));

	// Слой 10
	this.instance_6 = new lib.Символ32("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.9,-107.9);
	this.instance_6.alpha = 0.441;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 102, 102, 102, 0)];
	this.instance_6.cache(-105,-144,210,289);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(133));

	// Слой 13
	this.instance_7 = new lib.konf_static("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,43);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(133));

	// bg
	this.instance_8 = new lib.bg_ad("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.1,-241.9,1.08,1.195,0,0,0,0.1,-239.9);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 230, 230, 230, 0)];
	this.instance_8.cache(-138,-242,276,484);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-242,293.8,573.7);


(lib.priloj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon_pod_priloj
	this.instance = new lib.icon_pod_priloj("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-40.4,278.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},53).wait(81));

	// txt
	this.instance_1 = new lib.txt_your_app("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.2,-218.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},53).wait(81));

	// buter
	this.instance_2 = new lib.Символ8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110.3,-212);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-9,-4,19,7);

	this.instance_3 = new lib.Символ7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-110.3,-217.8);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_3.cache(-9,-4,19,7);

	this.instance_4 = new lib.Символ6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-110.3,-223.5);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_4.cache(-9,-4,19,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},53).to({state:[]},76).wait(5));

	// podlojka
	this.instance_5 = new lib.your_app_plashka("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-219.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},53).wait(81));

	// podlojka
	this.instance_6 = new lib.ten_your_app("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-216.4);
	this.instance_6.alpha = 0.199;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 242, 254, 0)];
	this.instance_6.cache(-138,-24,276,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},53).wait(81));

	// Символ 7
	this.instance_7 = new lib.Символ8_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-142.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(1).to({y:-139.7},0).wait(1).to({y:-128.6},0).wait(1).to({y:-105.8},0).wait(1).to({y:-75.5},0).wait(1).to({y:-58.9},0).wait(1).to({y:-58.2},0).wait(1).to({y:-60.4},0).wait(1).to({y:-62.9},0).wait(1).to({startPosition:0},0).wait(1).to({y:-57.7},0).to({_off:true},36).wait(81));

	// podlojka
	this.instance_8 = new lib.Символ78();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-241.8,1,1.012,0,0,0,0,-98.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).wait(1).to({regY:0,scaleY:1.03,y:-139.8,alpha:0.036},0).wait(1).to({scaleY:1.11,y:-132.6,alpha:0.166},0).wait(1).to({scaleY:1.25,y:-117.7,alpha:0.434},0).wait(1).to({scaleY:1.46,y:-98,alpha:0.79},0).wait(1).to({scaleY:1.57,y:-87.1,alpha:0.986},0).wait(1).to({scaleY:1.57,y:-86.6,alpha:0.995},0).wait(1).to({scaleY:1.56,y:-88.1,alpha:0.968},0).wait(1).to({scaleY:1.54,y:-89.7,alpha:0.938},0).wait(2).to({regY:-98.7,scaleY:1.57,y:-241.6,alpha:1},0).to({_off:true},38).wait(81));

	// Символ 124
	this.instance_9 = new lib.Символ124("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,84.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},0).wait(1).to({regX:1.9,regY:1.8,x:1.9,y:87.8},0).wait(1).to({y:94.4},0).wait(1).to({y:108.1},0).wait(1).to({y:126.2},0).wait(1).to({y:136.2},0).wait(1).to({y:136.7},0).wait(1).to({y:135.3},0).wait(1).to({y:133.8},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:0,y:135.2},0).to({_off:true},36).wait(81));

	// Символ 123
	this.instance_10 = new lib.Символ123("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,146.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).wait(1).to({regX:1.7,regY:2.2,x:1.7,y:150.4},0).wait(1).to({y:157.1},0).wait(1).to({y:170.7},0).wait(1).to({y:188.9},0).wait(1).to({y:198.9},0).wait(1).to({y:199.3},0).wait(1).to({y:198},0).wait(1).to({y:196.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:0,y:197.4},0).to({_off:true},38).wait(81));

	// bg
	this.instance_11 = new lib.bg_rabstol("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-242,1,1.16,0,0,0,0,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},53).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440,-242,786.5,627.3);


(lib.cont_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.najimalka("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1,78.5,0.681,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0,y:74.9},0).wait(1).to({x:3.3,y:63.3},0).wait(1).to({x:8.9,y:43.5},0).wait(1).to({x:15.9,y:19.1},0).wait(1).to({x:22.4,y:-3.8},0).wait(1).to({x:27.1,y:-20.4},0).wait(1).to({x:29.7,y:-29.7},0).wait(1).to({x:30.6,y:-32.5},0).wait(5).to({regY:0.1,scaleX:0.49,scaleY:0.49},0).wait(4).to({regY:0,scaleX:0.68,scaleY:0.68,x:30.5},0).to({_off:true},4).wait(154).to({_off:false,x:0},0).wait(1).to({y:-27},0).wait(1).to({y:-8.8},0).wait(1).to({y:24.6},0).wait(1).to({y:73.9},0).wait(1).to({y:133.4},0).wait(1).to({y:190.1},0).wait(1).to({y:232},0).wait(1).to({y:255.5},0).wait(1).to({y:262.6},0).wait(5).to({regX:0.2,regY:0.1,scaleX:0.49,scaleY:0.49,x:-0.4},0).to({_off:true},4).wait(24));

	// Слой 2
	this.instance_1 = new lib.anim_click("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.6,-32.4,0.113,0.113,0,0,0,123.3,199.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({_off:true},18).wait(186));

	// blick
	this.instance_2 = new lib.blick_obshee("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.1,1,0.997);
	this.instance_2.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(217));

	// contur
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222930").ss(3,1,1).rr(-134.5,-279.45,269,558.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(217));

	// but
	this.instance_3 = new lib.menu_button("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.3,263.1,0.77,0.75,0,0,0,0.7,0.6);
	this.instance_3.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(217));

	// MASK+++++++ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgRuArrQhbAAhBhBQhAhAAAhcMAAAhQbQAAhcBAhAQBBhBBbAAMAjdAAAQBbAABBBBQBABAAABcMAAABQbQAABchABAQhBBBhbAAg");
	mask.setTransform(0,-0.5);

	// ad
	this.instance_4 = new lib.reklama("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.3,-41.9,0.977,0.977,0,0,0,0.3,0.2);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).wait(122).to({startPosition:122},0).wait(1).to({regX:2.5,regY:44.9,x:2.4,y:5.5,alpha:0.994,startPosition:123},0).wait(1).to({y:16.6,alpha:0.975,startPosition:124},0).wait(1).to({y:35.5,alpha:0.943,startPosition:125},0).wait(1).to({y:62.7,alpha:0.897,startPosition:126},0).wait(1).to({y:99.3,alpha:0.835,startPosition:127},0).wait(1).to({y:146.9,alpha:0.755,startPosition:128},0).wait(1).to({y:208.5,alpha:0.651,startPosition:129},0).wait(1).to({y:289.5,alpha:0.514,startPosition:130},0).wait(1).to({y:402.3,alpha:0.323,startPosition:131},0).wait(1).to({regX:0.3,regY:0.2,x:0.3,y:549.7,alpha:0,startPosition:132},0).to({_off:true},1).wait(47));

	// icon_pril
	this.instance_5 = new lib.Символ19("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.8,225.9,6.678,6.678);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(193).to({_off:false},0).wait(1).to({scaleX:5.98,scaleY:5.98,x:2.1,y:195.4,alpha:0.122},0).wait(1).to({scaleX:5.31,scaleY:5.31,x:6,y:165.8,alpha:0.241},0).wait(1).to({scaleX:4.66,scaleY:4.66,x:9.7,y:137.4,alpha:0.355},0).wait(1).to({scaleX:4.05,scaleY:4.05,x:13.2,y:110.8,alpha:0.462},0).wait(1).to({scaleX:3.5,scaleY:3.5,x:16.4,y:86.2,alpha:0.561},0).wait(1).to({scaleX:2.99,scaleY:2.99,x:19.3,y:64,alpha:0.65},0).wait(1).to({scaleX:2.54,scaleY:2.54,x:21.9,y:44.4,alpha:0.728},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:24.1,y:27.5,alpha:0.796},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:25.9,y:13.2,alpha:0.854},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:27.5,y:1.4,alpha:0.901},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:28.7,y:-7.9,alpha:0.938},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:29.6,y:-14.8,alpha:0.966},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:30.2,y:-19.6,alpha:0.985},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:30.6,y:-22.4,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,x:30.7,y:-23.2,alpha:1},0).to({_off:true},1).wait(8));

	// icon_pril
	this.instance_6 = new lib.Символ18("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.8,-232.6,6.678,6.678);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(193).to({_off:false},0).wait(1).to({scaleX:5.98,scaleY:5.98,x:2.1,y:-209.5,alpha:0.122},0).wait(1).to({scaleX:5.31,scaleY:5.31,x:6,y:-187.1,alpha:0.241},0).wait(1).to({scaleX:4.66,scaleY:4.66,x:9.7,y:-165.6,alpha:0.355},0).wait(1).to({scaleX:4.05,scaleY:4.05,x:13.2,y:-145.4,alpha:0.462},0).wait(1).to({scaleX:3.5,scaleY:3.5,x:16.4,y:-126.8,alpha:0.561},0).wait(1).to({scaleX:2.99,scaleY:2.99,x:19.3,y:-110,alpha:0.65},0).wait(1).to({scaleX:2.54,scaleY:2.54,x:21.9,y:-95.2,alpha:0.728},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:24.1,y:-82.4,alpha:0.796},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:25.9,y:-71.5,alpha:0.854},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:27.5,y:-62.6,alpha:0.901},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:28.7,y:-55.6,alpha:0.938},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:29.6,y:-50.3,alpha:0.966},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:30.2,y:-46.7,alpha:0.985},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:30.6,y:-44.6,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,x:30.7,y:-43.9,alpha:1},0).to({_off:true},1).wait(8));

	// icon_pril
	this.instance_7 = new lib.Символ20("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(3.4,-6.6,6.678,15.162,0,0,0,0.5,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(193).to({_off:false},0).wait(1).to({regX:0,scaleX:5.98,scaleY:13.35,x:3.7,y:-9.9,alpha:0.122},0).wait(1).to({scaleX:5.31,scaleY:11.58,x:7.3,y:-13.1,alpha:0.241},0).wait(1).to({scaleX:4.66,scaleY:9.89,x:10.8,y:-16.1,alpha:0.355},0).wait(1).to({scaleX:4.05,scaleY:8.3,x:14,y:-19,alpha:0.462},0).wait(1).to({scaleX:3.5,scaleY:6.83,x:17,y:-21.7,alpha:0.561},0).wait(1).to({scaleX:2.99,scaleY:5.51,x:19.7,y:-24,alpha:0.65},0).wait(1).to({scaleX:2.54,scaleY:4.34,x:22.1,y:-26.2,alpha:0.728},0).wait(1).to({scaleX:2.16,scaleY:3.33,x:24.1,y:-28,alpha:0.796},0).wait(1).to({scaleX:1.83,scaleY:2.48,x:25.9,y:-29.5,alpha:0.854},0).wait(1).to({scaleX:1.56,scaleY:1.78,x:27.3,y:-30.8,alpha:0.901},0).wait(1).to({scaleX:1.35,scaleY:1.23,x:28.4,y:-31.8,alpha:0.938},0).wait(1).to({scaleX:1.19,scaleY:0.81,x:29.3,y:-32.5,alpha:0.966},0).wait(1).to({scaleX:1.08,scaleY:0.53,x:29.9,y:-33.1,alpha:0.985},0).wait(1).to({scaleX:1.02,scaleY:0.36,x:30.2,y:-33.4,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:0.31,x:30.8,alpha:1},0).to({_off:true},1).wait(8));

	// icon_pril
	this.instance_8 = new lib.Символ24("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-2.1,-32.5,6.585,6.585,0,0,0,0,0.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(193).to({_off:false},0).wait(1).to({regY:0,scaleX:5.9,scaleY:5.9,x:1.9,y:-34.9,alpha:0.122},0).wait(1).to({scaleX:5.24,scaleY:5.24,x:5.8,y:-34.6,alpha:0.241},0).wait(1).to({scaleX:4.6,scaleY:4.6,x:9.5,y:-34.3,alpha:0.355},0).wait(1).to({scaleX:4,scaleY:4,x:13,y:-34.1,alpha:0.462},0).wait(1).to({scaleX:3.45,scaleY:3.45,x:16.3,y:-33.9,alpha:0.561},0).wait(1).to({scaleX:2.96,scaleY:2.96,x:19.2,y:-33.6,alpha:0.65},0).wait(1).to({scaleX:2.52,scaleY:2.52,x:21.8,y:-33.5,alpha:0.728},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:24,y:-33.3,alpha:0.796},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:25.9,y:-33.2,alpha:0.854},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:27.4,y:-33,alpha:0.901},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:28.6,y:-32.9,alpha:0.938},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:29.5,alpha:0.966},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:30.2,y:-32.8,alpha:0.985},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:30.5,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,x:30.7,y:-32.4,alpha:1},0).wait(9));

	// prilojenie
	this.instance_9 = new lib.priloj("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-37.3,0.999,0.999);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(159).to({_off:false},0).wait(34).to({startPosition:29},0).wait(1).to({regY:71.4,scaleX:0.9,scaleY:0.9,x:3.6,y:27.2,alpha:0.878,startPosition:30},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:7.2,y:20.5,alpha:0.759,startPosition:31},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:10.6,y:14.1,alpha:0.645,startPosition:32},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:13.8,y:8.1,alpha:0.538,startPosition:33},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:16.8,y:2.5,alpha:0.439,startPosition:34},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:19.5,y:-2.5,alpha:0.35,startPosition:35},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:21.8,y:-6.9,alpha:0.272,startPosition:36},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:23.9,y:-10.7,alpha:0.204,startPosition:37},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:25.6,y:-13.9,alpha:0.146,startPosition:38},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:27,y:-16.6,alpha:0.099,startPosition:39},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:28.1,y:-18.7,alpha:0.062,startPosition:40},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:29,y:-20.2,alpha:0.034,startPosition:41},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:29.6,y:-21.3,alpha:0.015,startPosition:42},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:29.9,y:-21.9,alpha:0.004,startPosition:43},0).wait(1).to({regX:0.7,regY:0.3,scaleX:0.16,scaleY:0.16,x:30,y:-33.4,alpha:0,startPosition:44},0).wait(9));

	// rab_stol
	this.instance_10 = new lib.rab_stol("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.1,-37.2,0.999,0.999,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(217));

	// bg_fon
	this.instance_11 = new lib.Символ23("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(217));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgRNgvaMAibAAAQApAAAmALQAmAKAhAUQAiATAbAbQAbAbATAiQAUAhAKAmQALAmAAApMAAABVhQAAApgLAmQgKAmgUAhQgTAigbAbQgbAbgiATQghAUgmAKQgmALgpAAMgibAAAQg+AAg2gXQg2gXgpgpQgpgpgXg2QgXg2AAg+MAAAhVhQAAgpALgmQAKgmAUghQATgiAbgbQAbgbAigTQAhgUAmgKQAmgLApAAg");
	mask_1.setTransform(0,-3.1);

	// phone
	this.instance_12 = new lib.phone_new();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-160,-326);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(217));

	// button
	this.instance_13 = new lib.but_phone("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(133.1,-113.8);

	this.instance_14 = new lib.but_phone("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-133.8,-180.1,1,1.767);

	this.instance_15 = new lib.but_phone("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-133.6,-79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,-306.6,284.1,607);


// stage content:
(lib._01_Adsonstartup_svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cont_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170,337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197.6,367.4,284,607);
// library properties:
lib.properties = {
	width: 340,
	height: 674,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"img/phone_new.png", id:"phone_new"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;