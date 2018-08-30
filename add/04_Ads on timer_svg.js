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


(lib.txt_your_app = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIBDQgMgGgIgLQgGgKgBgPIAAheIAhAAIAABbQAAAIAEAGQAFAGAMgBQANABAFgGQAEgGABgIIAAhbIAfAAIAABeQAAAPgGAKQgIALgMAGQgMAFgQABQgPgBgMgFgAl/A/QgRgJgJgRQgKgQAAgVQAAgUAKgQQAJgQARgKQARgJAUgBQAUABAQAJQARAKAJAQQALAQgBAUQABAVgLAQQgJARgRAJQgQAJgUABQgUgBgRgJgAlvgjQgJAFgGAJQgFAKAAALQAAAMAFAKQAGAJAJAGQAKAEALAAQALAAAJgEQAKgGAFgJQAGgKAAgMQAAgLgGgKQgFgJgKgFQgJgGgLAAQgLAAgKAGgAHgBGIAAiLIA1AAQAOAAALAHQALAGAHALQAGAKAAAOQAAAOgGAJQgHALgLAGQgLAHgOAAIgVAAIAAAsgAIAgDIAVAAQAHAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgHAAIgVAAgAFNBGIAAiLIA0AAQAOAAALAHQALAGAHALQAGAKABAOQgBAOgGAJQgHALgLAGQgLAHgOAAIgVAAIAAAsgAFsgDIAVAAQAIAAAFgFQAEgFAAgIQAAgIgEgFQgFgFgIAAIgVAAgAEABGIgIgWIg0AAIgGAWIgjAAIAviLIApAAIAwCLgADvASIgRgzIgQAzIAhAAgAAHBGIgaguIgOAAIAAAuIghAAIAAiLIA4AAQANAAALAHQAKAGAHALQAGAKABAOQAAANgHAKQgIAKgLAHIAdAzgAghgDIAXAAQAIAAADgFQAFgFgBgIQABgIgFgFQgDgFgIAAIgXAAgAoWBGIAAg2IgvhVIAkAAIAbA2IAbg2IAkAAIgvBVIAAA2g");
	this.shape.setTransform(-1.7,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-14.2,123.9,28.5);


(lib.tank_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 119
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15131E").s().p("AByApQhSgFibgIIABgcQABgcgCAAID3gMIgKBRg");
	this.shape.setTransform(7.3,-53);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Символ 118
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393938").s().p("ABIBUIi9AAQgDAAg0gpIAKhSIAUgVQAUgTAAgBQDIgCAAgBQAaAhgCgBIAAAAIAAAAIBGAMQACBXgCAAIhMADQgBAAgLARQgLARgBAAIAAgBgABOhUIAAABIAAgBg");
	this.shape_1.setTransform(36,-53.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Символ 115
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0B6C28").s().p("AlTBmQACgBBGhjQBIhjACAAQITgpACABQgjDrACAAIheAUQhfATACABIAAAAInLgkgAlTBmIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-44.3,-14);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Символ 114
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20A848").s().p("AptAwIAAg2QAAg5ACAAITZgSIgVCiIAAABIzGgig");
	this.shape_3.setTransform(-125.9,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Символ 120
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C7129").s().p("AYJCkMgwRgAIQgBAAAhg8QAig9gBAAIApgrIAogsMAhWgBvIKhADQBBAzgBAAQgBAAAlCIQAlCJgBAAIAAAAgAWBihIAAABIAAgBg");
	this.shape_4.setTransform(33.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Символ 116
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#128F36").s().p("AtUDIIABAAIgBAAIAAAAgAsvAyQAjiVABAAICsgTIA1gcIA0gdIKXgYICGAxIG1gJQABAAA8ByIA7ByQACABnCA/IznBDQABgBAjiVg");
	this.shape_5.setTransform(66.8,-21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Символ 113
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#151515").ss(4.4,1,1).p("A3HjAQgBAAArA+QAqA+gBAAQIhEAgCgBQb/AHgCgBQIilygCAAUgACgABguNgAOg");
	this.shape_6.setTransform(33.8,42.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Символ 121
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063815").s().p("ApSAhIAMg7ISlhCQABAAgNA5IgMA4IylBJQABAAALg9g");
	this.shape_7.setTransform(48,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Символ 112
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#151515").s().p("AhaBbQglglAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAlIgBAAQglAmg1AAQg1gBglglg");
	this.shape_8.setTransform(159.7,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAlQAlAlA1ABQA1AAAlgmIABAAQAlglAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_9.setTransform(159.7,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Символ 117
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1A1A").s().p("Ag3BXQgBAAgChYQgBhTgBgFIB5gJQgBDGgCAAgAA9hiIAAAAIAAAAg");
	this.shape_10.setTransform(34,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Символ 112
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#151515").s().p("AhaBaQglgkAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAkIgBABQglAmg1AAQg1gBglgmg");
	this.shape_11.setTransform(117.3,42.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAkQAlAmA1ABQA1AAAlgmIABgBQAlgkAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_12.setTransform(117.3,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Символ 112
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#151515").s().p("AhaBaQglgkAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAkIgBABQglAmg1AAQg1gBglgmg");
	this.shape_13.setTransform(83.1,42.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAkQAlAmA1ABQA1AAAlgmIABgBQAlgkAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_14.setTransform(83.1,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Символ 112
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#151515").s().p("AhaBaQglgkAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAkIgBABQglAmg1AAQg1gBglgmg");
	this.shape_15.setTransform(50.2,42.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAkQAlAmA1ABQA1AAAlgmIABgBQAlgkAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_16.setTransform(50.2,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Символ 112
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#151515").s().p("AhaBaQglgkAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAkIgBABQglAmg1AAQg1gBglgmg");
	this.shape_17.setTransform(17,42.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAkQAlAmA1ABQA1AAAlgmIABgBQAlgkAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_18.setTransform(17,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// Символ 112
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#151515").s().p("AhaBaQglgkAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAkIgBABQglAmg1AAQg1gBglgmg");
	this.shape_19.setTransform(-17.2,42.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAkQAlAmA1ABQA1AAAlgmIABgBQAlgkAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_20.setTransform(-17.2,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Символ 112
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#151515").s().p("AhaBbQglglAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAlIgBAAQglAmg1AAQg1gBglglg");
	this.shape_21.setTransform(-95,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAlQAlAlA1ABQA1AAAlgmIABAAQAlglAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_22.setTransform(-95,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Символ 112
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#151515").s().p("AhaBaQglgkAAg2QgBg0AmgmQAlglA1AAQA1gBAlAmQAmAmAAA0QAAA2glAkIgBABQglAmg1AAQg1gBglgmg");
	this.shape_23.setTransform(-49.5,42.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#37363B").s().p("Ah5B6QgygzAAhHQAAhGAygyIAAgBQAygyBHAAQBHAAAyAzQAzAyAABGQgBBHgyAzQgyAyhHAAQhHAAgygygAAAh/Qg1AAglAlQgmAmABA0QAAA2AlAkQAlAmA1ABQA1AAAlgmIABgBQAlgkAAg2QAAg0gmgmQgkgmg1AAIgBABg");
	this.shape_24.setTransform(-49.5,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Символ 122
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#343434").s().p("AtVC7Iofj/QABAAgqg+Qgrg+ABAAMAuPAAPQACAAoiFyIgJAAI70gGgAtVC7IAAAAIAAAAIAAAAg");
	this.shape_25.setTransform(33.8,42.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.1,-61.6,376.3,125.4);


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


(lib.black_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgVPAl0MAAAhLnMAqfAAAMAAABLng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-242,272,484);


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


(lib.Символ111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 103
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323036").s().p("AieCfQhDhCABhdQgBhcBDhDIAAAAQBChBBcAAQBcAABCBBQBDBCAABdQAABdhCBCIgBAAQhCBChcAAQhcAAhChCgAhKAAQAAAeAWAXQAWAVAeAAQAeAAAWgVIAAgBQAWgWABgeQgBgegWgWQgWgWgeABQgeAAgWAVIAAAAQgWAWAAAeg");
	this.shape.setTransform(92.5,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262229").s().p("Ag0A1QgWgWAAgfQAAgeAWgWIAAAAQAWgVAeAAQAegBAWAWQAWAWABAeQgBAegWAWIAAABQgWAVgeABQgegBgWgVg");
	this.shape_1.setTransform(92.5,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Символ 103
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323036").s().p("AieCfQhDhCABhdQgBhcBDhDIAAAAQBChBBcAAQBcAABCBBQBDBCAABdQAABdhCBCIgBAAQhCBChcAAQhcAAhChCgAhKAAQAAAeAWAXQAWAVAeAAQAeAAAWgVIAAgBQAWgWABgeQgBgegWgWQgWgWgeABQgeAAgWAVIAAAAQgWAWAAAeg");
	this.shape_2.setTransform(37.4,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#262229").s().p("Ag0A1QgWgWAAgfQAAgeAWgWIAAAAQAWgVAeAAQAegBAWAWQAWAWABAeQgBAegWAWIAAABQgWAVgeABQgegBgWgVg");
	this.shape_3.setTransform(37.4,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Символ 103
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323036").s().p("AieCfQhDhCABhdQgBhcBDhDIAAAAQBChBBcAAQBcAABCBBQBDBCAABdQAABdhCBCIgBAAQhCBChcAAQhcAAhChCgAhKAAQAAAeAWAXQAWAVAeAAQAeAAAWgVIAAgBQAWgWABgeQgBgegWgWQgWgWgeABQgeAAgWAVIAAAAQgWAWAAAeg");
	this.shape_4.setTransform(-28.8,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#262229").s().p("Ag0A1QgWgWAAgfQAAgeAWgWIAAAAQAWgVAeAAQAegBAWAWQAWAWABAeQgBAegWAWIAAABQgWAVgeABQgegBgWgVg");
	this.shape_5.setTransform(-28.8,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Символ 103
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323036").s().p("AieCfQhDhCABhdQgBhcBDhDIAAAAQBChBBcAAQBcAABCBBQBDBCAABdQAABdhCBCIgBAAQhCBChcAAQhcAAhChCgAhKAAQAAAeAWAXQAWAVAeAAQAeAAAWgVIAAgBQAWgWABgeQgBgegWgWQgWgWgeABQgeAAgWAVIAAAAQgWAWAAAeg");
	this.shape_6.setTransform(-84.3,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#262229").s().p("Ag0A1QgWgWAAgfQAAgeAWgWIAAAAQAWgVAeAAQAegBAWAWQAWAWABAeQgBAegWAWIAAABQgWAVgeABQgegBgWgVg");
	this.shape_7.setTransform(-84.3,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Символ 108
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#118F36").s().p("A4KCNIAwhoQF1ADAcADIB2hXIB2haQAAACR9gEIR9gEQgBACA4CLIA3CMg");
	this.shape_8.setTransform(0.4,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Символ 107
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C7129").s().p("A02AGIjXjGIAHgNMAwUAAAIhPCjIhQChQAAADiOBTIyggBQyfAAgBABIAAABIjXjIgA4NjAIAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(0,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Символ 109
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C722A").s().p("Ak8CKIB3kTQGTgCAAADQBvEQAAACg");
	this.shape_10.setTransform(-17.9,-43.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Символ 110
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#262229").s().p("AkHAzIAAhhIIPgWIAACJg");
	this.shape_11.setTransform(-57.6,-48);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Слой 10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#212429").s().p("Ag0A1QgWgWAAgfQAAgeAWgWIAAAAQAWgVAeAAQAegBAWAWQAWAWABAeQgBAegWAWIAAABQgWAVgeABQgegBgWgVg");
	this.shape_12.setTransform(-84.3,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-57.1,310.1,114.4);


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
	this.shape.graphics.f("#F4C922").s().p("A1PPfIAA+9MAqfAAAIAAe9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ78, new cjs.Rectangle(-136,-99.1,272,198.3), null);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1PDgIAAm/MAqfAAAIAAG/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ71, new cjs.Rectangle(-136,-22.4,272,44.8), null);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008D8F").s().rr(-67,-18,134,36,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ68, new cjs.Rectangle(-67,-18,134,36), null);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AAAirIAACjABUBYQAAAjgYAYQgZAZgjAAQgiAAgZgZQgYgYAAgjQAAgjAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6A7QgZgYAAgjQAAgiAZgZQAYgYAiAAQAjAAAYAYQAZAZAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_1.setTransform(0,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-19.2,20.8,38.5);


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


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKCBEQgMgIgHgLQgHgMAAgPQAAgPAHgKQAHgMALgHQAMgHAPAAQAPAAALAIQAMAGAFAMQAHAMAAAOIgBACIAAACIhaAAQABALAGAJQAFAIAKAFQAJAFALAAQANgBAIgFQAJgEAFgIIAJAEQgHALgLAGQgLAGgPAAQgQAAgLgGgALDARQgBgMgGgIQgFgIgJgEQgIgEgKgBQgLAAgJAGQgJAEgGAIQgFAIgBALIBQAAIAAAAgAG2BDQgMgGgHgMQgGgMgBgPQABgPAGgKQAHgMAMgHQAMgHAOAAQAPAAALAHQALAGAGAMIAAgXIAKAAIAABjIgKAAIAAgWQgGALgLAHQgLAGgPAAQgOAAgMgHgAG7gOQgJAGgGAIQgFAKAAAMQAAAMAFAJQAGALAJAFQAKAGAMAAQAMAAAJgGQAKgFAGgLQAFgJAAgMQAAgMgFgKQgGgIgKgGQgJgFgMgBQgMABgKAFgADwBEQgKgHgDgJIAIgFQADAIAIAFQAHAFAMAAQAHgBAGgCQAFgCAEgDQAEgFAAgGQgBgIgGgEQgGgEgJgDIgSgEQgJgDgGgGQgGgFAAgKQAAgIAEgGQAEgGAIgFQAIgDAKAAQAMAAAJAFQAJAGAEAJIgIAFQgEgIgHgEQgHgDgIgBQgHAAgFACQgFADgEAEQgDAEAAAGQAAAHAGAEQAGAEAJACIASAFQAJADAGAGQAGAFABALQgBANgJAHQgKAIgQAAQgPAAgKgGgACGBEQgMgIgGgLQgHgMAAgPQAAgPAGgKQAHgMAMgHQALgHAQAAQAPAAALAIQALAGAGAMQAGAMAAAOIAAACIAAACIhbAAQACALAFAJQAGAIAJAFQAJAFAMAAQAMgBAJgFQAJgEAEgIIAJAEQgGALgLAGQgMAGgPAAQgPAAgMgGgADIARQgCgMgFgIQgGgIgIgEQgIgEgKgBQgMAAgJAGQgJAEgFAIQgGAIgBALIBRAAIAAAAgAhAA/QgKgKAAgTIAAg9IAKAAIAAA9QAAAOAIAJQAHAHAPABQAKgBAHgEQAIgEAFgJQAEgJAAgNIAAg0IAKAAIAABjIgKAAIAAgTQgFALgJAFQgKAFgLAAQgSAAgLgLgAolBEQgMgIgHgLQgHgMAAgPQAAgPAHgKQAHgMALgHQAMgHAPAAQAPAAALAIQAMAGAFAMQAHAMAAAOIgBACIAAACIhaAAQABALAGAJQAFAIAKAFQAJAFALAAQANgBAIgFQAJgEAFgIIAJAEQgHALgLAGQgLAGgPAAQgQAAgLgGgAnkARQgBgMgGgIQgFgIgJgEQgIgEgKgBQgLAAgJAGQgJAEgGAIQgFAIgBALIBQAAIAAAAgAI6BFQgLgFAAgRIAAhAIgWAAIAAgKIAWAAIAAgZIALgDIAAAcIAdAAIAAAKIgdAAIAABAQAAAJADADQADAEAHAAIAQAAIAAAJIgMABQgLAAgGgEgAA+BFQgKgFAAgRIAAhAIgWAAIAAgKIAWAAIAAgZIAKgDIAAAcIAeAAIAAAKIgeAAIAABAQAAAJADADQADAEAHAAIARAAIAAAJIgNABQgKAAgHgEgALlBIIAAhjIAKAAIAAATQAFgLAJgFQAJgEAKgBIAAAKQgJAAgHAEQgIADgEAJQgFAGAAANIAAA4gAF6BIIAAiRIAKAAIAACRgAhuBIIAAg+QAAgNgIgJQgHgIgOAAQgKAAgIAFQgIAEgFAJQgEAHAAAOIAAA1IgKAAIAAhjIAKAAIAAATQAFgLAKgFQAJgFALAAQASAAALAKQAKAMAAARIAAA+gAjhBIIAAhjIAKAAIAABjgAkIBIIAAhAQAAgNgHgHQgHgHgMgBQgJABgHADQgGAEgEAIQgEAIAAAMIAAA4IgKAAIAAhAQAAgNgHgHQgHgHgMgBQgIABgHADQgHAEgEAIQgFAIAAAMIAAA4IgKAAIAAhjIAKAAIAAARQAGgKAIgEQAJgFAJAAQALAAAJAFQAIAGAEAJQAFgLAJgEQAJgFAKAAQALAAAIAFQAIADAFAJQAEAJAAALIAABAgAqABIIgrhjIALAAIAmBYIAmhYIAKAAIgqBjgArHBIIAAhjIAKAAIAABjgAr+BIIAAhZIgRAAIAAgKIARAAIAAgFQAAgTAKgKQAKgKAUACIAAAKQgPgCgIAHQgHAHAAAPIAAAFIAeAAIAAAKIgeAAIAABZgAjig2QgCgCAAgDQAAgEACgCQACgCAEAAQADAAACACQADACAAAEQAAADgDACQgCACgDABQgEgBgCgCgArIg2QgCgCAAgDQAAgEACgCQADgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEABQgDgBgDgCg");
	this.shape.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-14,162,27.1);


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


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZA/QgQgKgKgQQgJgRAAgUQAAgTAJgQQAKgRAQgJQAQgKAVAAQAUAAARAKQAPAJAJARQAKAQAAATQAAAUgKARQgJAQgPAKQgRAJgUAAQgVAAgQgJgAhTg0QgOAHgIAOQgJAOAAARQAAASAJANQAIAOAOAJQANAIASAAQARAAAOgIQAOgJAHgOQAIgNAAgSQAAgRgIgOQgHgOgOgHQgOgJgRAAQgSAAgNAJgADkBGIAAiLIBQAAIAAAKIhFAAIAAA2IBAAAIAAAJIhAAAIAAA4IBGAAIAAAKgACkBGIgig6IgsAAIAAA6IgKAAIAAiLIA3AAQALAAAKAGQAJAFAGAJQAFAKAAAMQAAAJgEAIQgEAIgHAFQgHAGgJACIAjA7gABWADIAtAAQAIAAAHgDQAHgFAEgHQAFgHAAgIQAAgKgFgGQgEgIgHgDQgHgFgIAAIgtAAgAjABGIAAh7Ig0BUIgBAAIg0hUIAAB7IgLAAIAAiLIANAAIAyBSIAyhSIAOAAIAACLg");
	this.shape.setTransform(-1.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-13.5,71.5,27.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00371C").s().p("AskA9QgYAAgTgSQgRgSAAgZQAAgYARgSQATgSAYAAIZJAAQAYAAATASQARASAAAYQAAAZgRASQgTASgYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-6.1,173,12.2);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00371C").s().p("At5A9QgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAIbzAAQAYAAASASQASASAAAYQAAAZgSASQgSASgYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-6.1,190,12.2);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00371C").s().p("At5A9QgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAIbzAAQAYAAASASQASASAAAYQAAAZgSASQgSASgYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-6.1,190,12.2);


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
	this.instance.setTransform(3.9,4.6);
	this.instance.alpha = 0.199;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 153, 153, 0)];
	this.instance.cache(-92,-25,184,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-23.3,184.1,51.2);


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


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.4,7.1,1,1,0,0,0,-0.4,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.1,y:-1.6},0).wait(1).to({rotation:1.9,x:0.3},0).wait(1).to({rotation:4.6,x:0.7},0).wait(1).to({rotation:8.6,x:1.3,y:-1.5},0).wait(1).to({rotation:13.7,x:2.1,y:-1.3},0).wait(1).to({rotation:19.2,x:2.9,y:-1.1},0).wait(1).to({rotation:24.1,x:3.5,y:-0.8},0).wait(1).to({rotation:27.6,x:4,y:-0.5},0).wait(1).to({rotation:29.5,x:4.3,y:-0.4},0).wait(1).to({rotation:30,y:-0.3},0).wait(1).to({rotation:29.9},0).wait(1).to({rotation:29.6,y:-0.4},0).wait(1).to({rotation:29.1,x:4.2},0).wait(1).to({rotation:28.7},0).wait(1).to({rotation:28.3,x:4.1,y:-0.5},0).wait(1).to({rotation:28},0).wait(1).to({rotation:27.9},0).wait(1).to({rotation:28.2},0).wait(1).to({rotation:28.8,x:4.2,y:-0.4},0).wait(1).to({regX:0.1,regY:8.4,rotation:30,x:-0.2,y:7},0).wait(169));

	// Слой 2
	this.instance_1 = new lib.Символ56("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,7.1,1,1,0,0,0,-0.4,8.7);
	this.instance_1.alpha = 0.199;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.1,y:-1.6,alpha:0.211},0).wait(1).to({rotation:1.9,x:0.3,alpha:0.25},0).wait(1).to({rotation:4.6,x:0.7,alpha:0.322},0).wait(1).to({rotation:8.6,x:1.3,y:-1.5,alpha:0.428},0).wait(1).to({rotation:13.7,x:2.1,y:-1.3,alpha:0.564},0).wait(1).to({rotation:19.2,x:2.9,y:-1.1,alpha:0.712},0).wait(1).to({rotation:24.1,x:3.5,y:-0.8,alpha:0.843},0).wait(1).to({rotation:27.6,x:4,y:-0.5,alpha:0.937},0).wait(1).to({rotation:29.5,x:4.3,y:-0.4,alpha:0.988},0).wait(1).to({rotation:30,y:-0.3,alpha:1},0).wait(1).to({rotation:29.9,alpha:0.996},0).wait(1).to({rotation:29.6,y:-0.4,alpha:0.988},0).wait(1).to({rotation:29.1,x:4.2,alpha:0.977},0).wait(1).to({rotation:28.7,alpha:0.965},0).wait(1).to({rotation:28.3,x:4.1,y:-0.5,alpha:0.954},0).wait(1).to({rotation:28,alpha:0.947},0).wait(1).to({rotation:27.9,alpha:0.945},0).wait(1).to({rotation:28.2,alpha:0.951},0).wait(1).to({rotation:28.8,x:4.2,y:-0.4,alpha:0.968},0).wait(1).to({regX:0.1,regY:8.4,rotation:30,x:-0.2,y:7,alpha:0.199},0).to({_off:true},1).wait(162));

	// Слой 3
	this.instance_2 = new lib.Символ56("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,7.1,1,1,0,0,0,-0.4,8.7);
	this.instance_2.alpha = 0.398;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.1,y:-1.6,alpha:0.407},0).wait(1).to({rotation:1.9,x:0.3,alpha:0.437},0).wait(1).to({rotation:4.6,x:0.7,alpha:0.49},0).wait(1).to({rotation:8.6,x:1.3,y:-1.5,alpha:0.57},0).wait(1).to({rotation:13.7,x:2.1,y:-1.3,alpha:0.673},0).wait(1).to({rotation:19.2,x:2.9,y:-1.1,alpha:0.784},0).wait(1).to({rotation:24.1,x:3.5,y:-0.8,alpha:0.882},0).wait(1).to({rotation:27.6,x:4,y:-0.5,alpha:0.953},0).wait(1).to({rotation:29.5,x:4.3,y:-0.4,alpha:0.991},0).wait(1).to({rotation:30,y:-0.3,alpha:1},0).wait(1).to({rotation:29.9,alpha:0.997},0).wait(1).to({rotation:29.6,y:-0.4,alpha:0.991},0).wait(1).to({rotation:29.1,x:4.2,alpha:0.983},0).wait(1).to({rotation:28.7,alpha:0.974},0).wait(1).to({rotation:28.3,x:4.1,y:-0.5,alpha:0.966},0).wait(1).to({rotation:28,alpha:0.96},0).wait(1).to({rotation:27.9,alpha:0.959},0).wait(1).to({rotation:28.2,alpha:0.963},0).wait(1).to({rotation:28.8,x:4.2,y:-0.4,alpha:0.976},0).wait(1).to({regX:0.1,regY:8.4,rotation:30,x:-0.2,y:7,alpha:0.398},0).to({_off:true},1).wait(163));

	// Слой 4
	this.instance_3 = new lib.Символ56("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.4,7.1,1,1,0,0,0,-0.4,8.7);
	this.instance_3.alpha = 0.602;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.1,y:-1.6,alpha:0.608},0).wait(1).to({rotation:1.9,x:0.3,alpha:0.627},0).wait(1).to({rotation:4.6,x:0.7,alpha:0.662},0).wait(1).to({rotation:8.6,x:1.3,y:-1.5,alpha:0.715},0).wait(1).to({rotation:13.7,x:2.1,y:-1.3,alpha:0.783},0).wait(1).to({rotation:19.2,x:2.9,y:-1.1,alpha:0.857},0).wait(1).to({rotation:24.1,x:3.5,y:-0.8,alpha:0.922},0).wait(1).to({rotation:27.6,x:4,y:-0.5,alpha:0.969},0).wait(1).to({rotation:29.5,x:4.3,y:-0.4,alpha:0.994},0).wait(1).to({rotation:30,y:-0.3,alpha:1},0).wait(1).to({rotation:29.9,alpha:0.998},0).wait(1).to({rotation:29.6,y:-0.4,alpha:0.994},0).wait(1).to({rotation:29.1,x:4.2,alpha:0.989},0).wait(1).to({rotation:28.7,alpha:0.983},0).wait(1).to({rotation:28.3,x:4.1,y:-0.5,alpha:0.977},0).wait(1).to({rotation:28,alpha:0.974},0).wait(1).to({rotation:27.9,alpha:0.973},0).wait(1).to({rotation:28.2,alpha:0.976},0).wait(1).to({rotation:28.8,x:4.2,y:-0.4,alpha:0.984},0).wait(1).to({regX:0.1,regY:8.4,rotation:30,x:-0.2,y:7,alpha:0.602},0).to({_off:true},1).wait(164));

	// Слой 5
	this.instance_4 = new lib.Символ56("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.4,7.1,1,1,0,0,0,-0.4,8.7);
	this.instance_4.alpha = 0.801;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).wait(1).to({regX:0,regY:0,rotation:0.4,x:0.1,y:-1.6,alpha:0.804},0).wait(1).to({rotation:1.9,x:0.3,alpha:0.813},0).wait(1).to({rotation:4.6,x:0.7,alpha:0.831},0).wait(1).to({rotation:8.6,x:1.3,y:-1.5,alpha:0.858},0).wait(1).to({rotation:13.7,x:2.1,y:-1.3,alpha:0.892},0).wait(1).to({rotation:19.2,x:2.9,y:-1.1,alpha:0.928},0).wait(1).to({rotation:24.1,x:3.5,y:-0.8,alpha:0.961},0).wait(1).to({rotation:27.6,x:4,y:-0.5,alpha:0.984},0).wait(1).to({rotation:29.5,x:4.3,y:-0.4,alpha:0.997},0).wait(1).to({rotation:30,y:-0.3,alpha:1},0).wait(1).to({rotation:29.9,alpha:0.999},0).wait(1).to({rotation:29.6,y:-0.4,alpha:0.997},0).wait(1).to({rotation:29.1,x:4.2,alpha:0.994},0).wait(1).to({rotation:28.7,alpha:0.991},0).wait(1).to({rotation:28.3,x:4.1,y:-0.5,alpha:0.989},0).wait(1).to({rotation:28,alpha:0.987},0).wait(1).to({rotation:27.9,alpha:0.986},0).wait(1).to({rotation:28.2,alpha:0.988},0).wait(1).to({rotation:28.8,x:4.2,y:-0.4,alpha:0.992},0).wait(1).to({regX:0.1,regY:8.4,rotation:30,x:-0.2,y:7,alpha:0.801},0).to({_off:true},1).wait(166));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHG1QiWAAhrhqQhqhrAAiWQAAiVBqhrIAAAAQAvgvA3gaIAAh5QAAg8A8AAIC9AAQA8AAAAA8IAAB5IAaAOIAxgyIAAAAQArgqAqAqIAqAqQArArgqArIgwAvQA1BVAABpQAACWhqBrQhqBqiWAAIAAAAgAlKBKQAACFBfBfQBeBfCGAAQCFAABehfQBfhfAAiFQAAhlg2hPIgBgBIAAAAIgBgCQgRgYgWgVIAAAAQgZgZgcgTIgCgBQgVgOgWgKIgDgBIgBAAIAAAAQg6gZhDAAQhDAAg6AZIgEABQg2AYgtAtIAAAAQhfBfAACFg");
	this.shape.setTransform(0.8,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-43.9,74.2,87.4);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-110.3,-212);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-9,-4,19,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({startPosition:0},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:4.8,x:-110.7,y:-212.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:20.6,x:-112,y:-213.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:38.6,x:-113.5,y:-214.4},0).wait(1).to({regX:-0.1,scaleX:0.69,scaleY:0.69,rotation:45,x:-113.9,y:-214.8},0).wait(106).to({startPosition:0},0).wait(1).to({regX:0,scaleX:0.72,scaleY:0.72,rotation:40.1,x:-113.5,y:-214.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:24.4,x:-112.2,y:-213.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:6.4,x:-110.8,y:-212.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-110.3,y:-212},0).to({_off:true},41).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-110.3,-217.8);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-9,-4,19,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(106).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},41).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110.3,-223.5);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-9,-4,19,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({startPosition:0},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-4.8,x:-110.7,y:-223.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-20.6,x:-111.9,y:-222.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-38.6,x:-113.3,y:-221.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-45,x:-113.8,y:-220.8},0).wait(106).to({startPosition:0},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-40.1,x:-113.5,y:-221.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-24.4,x:-112.2,y:-222.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-6.4,x:-110.8,y:-223.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-110.3,y:-223.5},0).to({_off:true},41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.8,-225.1,15,14.7);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zvezda_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.4,15.5,0.463,0.463);

	this.instance_1 = new lib.zvezda_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.4,15.5,0.463,0.463);

	this.instance_2 = new lib.zvezda_01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.2,15.5,0.463,0.463);

	this.instance_3 = new lib.zvezda_01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47.9,15.5,0.463,0.463);

	this.instance_4 = new lib.zvezda_01("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-64.7,15.5,0.463,0.463);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().rr(-55.6,-4.75,111.2,9.5,4.75);
	this.shape_1.setTransform(0.1,-15,1.269,1.288);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().rr(-36.65,-2.75,73.3,5.5,2.75);
	this.shape_2.setTransform(-24.1,1.5,1.27,1.288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-21.1,141.2,42.2);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.9,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tank_3
	this.instance_1 = new lib.tank_3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-7.6,0.691,0.691,0,0,0,-1.3,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-49.2,260,98.4);


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


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 111
	this.instance = new lib.Символ111("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.7,-6.5,0.51,0.509,0,0,0,1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-35.3,173,70.7);


(lib.sprite600000vassa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/////* i = Math.ceil(Math.random() * 21);
		////gotoAndPlay(i);
		////*/
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


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.Символ34("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,79.3);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(1).to({regY:-1,y:78.3,alpha:0.231},0).wait(1).to({alpha:0.335},0).wait(1).to({alpha:0.506},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.97},0).wait(1).to({regY:0,y:79.3,alpha:1},0).wait(282));

	// Слой 2
	this.instance_1 = new lib.Символ35("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-3.1,1.306,1.306);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(311));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-60.5,96.9,114.1);


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


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-75.1);

	this.instance_1 = new lib.Символ6_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-96.2,260,192.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.zvezda_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-31.2,-59.6,0.463,0.463);

	this.instance_1 = new lib.zvezda_01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.9,-59.6,0.463,0.463);

	this.instance_2 = new lib.zvezda_01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-64.7,-59.6,0.463,0.463);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-55.6,-4.75,111.2,9.5,4.75);
	this.shape.setTransform(0.1,-90.1,1.269,1.288);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().rr(-36.65,-2.75,73.3,5.5,2.75);
	this.shape_1.setTransform(-24.1,-73.7,1.27,1.288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-96.2,173,192.5);


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


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ47("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.7,0.1,1.261,1.26,0,0,0,0.1,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:5},5).wait(190));

	// bg
	this.instance_1 = new lib.black_bg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1.186);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-287,272,574);


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
	this.shape_122.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAAAIAhAhAAAAAIAhggAggAhIAgghAggggIAgAg");
	this.shape_122.setTransform(-120,-224.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("Ag7A8QgZgYAAgkQAAgiAZgaQAYgYAjAAQAkAAAYAYQAZAaAAAiQAAAkgZAYQgYAZgkAAQgjAAgYgZgAAfAgIgfggIAfggIgfAgIghggIAhAgIghAgIAhgggAAAAAg");
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
	this.instance_8.setTransform(0.1,-242,1.08,1.195,0,0,0,0.1,-239.9);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 230, 230, 230, 0)];
	this.instance_8.cache(-138,-242,276,484);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-242.1,293.8,573.7);


(lib.priloj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon_pod_priloj
	this.instance = new lib.icon_pod_priloj("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-40.4,278.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},232).wait(1));

	// txt
	this.instance_1 = new lib.txt_your_app("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.2,-218.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},232).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ33("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},232).wait(1));

	// podlojka
	this.instance_3 = new lib.Символ71("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-242,1,1,0,0,0,0,-22.4);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 55, 28, 0)];
	this.instance_3.cache(-138,-24,276,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},232).wait(1));

	// podlojka
	this.instance_4 = new lib.Символ71("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-239,1,1,0,0,0,0,-22.4);
	this.instance_4.alpha = 0.199;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_4.cache(-138,-24,276,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(233));

	// Символ 7
	this.instance_5 = new lib.Символ9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(260,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({startPosition:0},0).wait(1).to({x:371},0).wait(1).to({x:451.1},0).wait(1).to({x:507.6},0).wait(1).to({x:544.7},0).wait(1).to({x:565.5},0).wait(1).to({x:572},0).wait(13).to({x:-242.9},0).wait(1).to({x:-156.5},0).wait(1).to({x:-94.1},0).wait(1).to({x:-50.1},0).wait(1).to({x:-21.2},0).wait(1).to({x:-5.1},0).wait(1).to({x:0},0).wait(18).to({startPosition:0},0).wait(1).to({x:-212.4},0).wait(1).to({x:-366},0).wait(1).to({x:-474.1},0).wait(1).to({x:-545.2},0).wait(1).to({x:-584.9},0).wait(1).to({x:-597.4},0).to({_off:true},144).wait(1));

	// Символ 7
	this.instance_6 = new lib.Символ10("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-310,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({startPosition:0},0).wait(1).to({x:-199},0).wait(1).to({x:-118.9},0).wait(1).to({x:-62.4},0).wait(1).to({x:-25.3},0).wait(1).to({x:-4.5},0).wait(1).to({x:2},0).wait(13).to({startPosition:0},0).wait(1).to({x:104.1},0).wait(1).to({x:177.9},0).wait(1).to({x:229.8},0).wait(1).to({x:264},0).wait(1).to({x:283.1},0).wait(1).to({x:289.1},0).wait(18).to({startPosition:0},0).wait(1).to({x:76.7},0).wait(1).to({x:-76.9},0).wait(1).to({x:-185},0).wait(1).to({x:-256.1},0).wait(1).to({x:-295.8},0).wait(1).to({x:-308.3},0).to({_off:true},144).wait(1));

	// Символ 7
	this.instance_7 = new lib.Символ8_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-142.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).wait(1).to({y:-139.7},0).wait(1).to({y:-128.6},0).wait(1).to({y:-105.8},0).wait(1).to({y:-75.5},0).wait(1).to({y:-58.9},0).wait(1).to({y:-58.2},0).wait(1).to({y:-60.4},0).wait(1).to({y:-62.9},0).wait(1).to({startPosition:0},0).wait(1).to({y:-57.7},0).wait(22).to({startPosition:0},0).wait(1).to({x:111},0).wait(1).to({x:191.1},0).wait(1).to({x:247.6},0).wait(1).to({x:284.7},0).wait(1).to({x:305.5},0).wait(1).to({x:312},0).wait(13).to({startPosition:0},0).wait(1).to({x:414.1},0).wait(1).to({x:487.9},0).wait(1).to({x:539.8},0).wait(1).to({x:574},0).wait(1).to({x:593.1},0).wait(1).to({x:599.1},0).wait(18).to({startPosition:0},0).wait(1).to({x:386},0).wait(1).to({x:232.1},0).wait(1).to({x:123.6},0).wait(1).to({x:52.4},0).wait(1).to({x:12.5},0).wait(1).to({x:0},0).to({_off:true},144).wait(1));

	// podlojka
	this.instance_8 = new lib.Символ78("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-241.8,1,1.012,0,0,0,0,-98.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 155, 78, 0)];
	this.instance_8.cache(-138,-101,276,202);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).wait(1).to({regY:0,scaleY:1.03,y:-139.8,alpha:0.036},0).wait(1).to({scaleY:1.11,y:-132.6,alpha:0.166},0).wait(1).to({scaleY:1.25,y:-117.7,alpha:0.434},0).wait(1).to({scaleY:1.46,y:-98,alpha:0.79},0).wait(1).to({scaleY:1.57,y:-87.1,alpha:0.986},0).wait(1).to({scaleY:1.57,y:-86.6,alpha:0.995},0).wait(1).to({scaleY:1.56,y:-88.1,alpha:0.968},0).wait(1).to({scaleY:1.54,y:-89.7,alpha:0.938},0).wait(1).to({startPosition:0},0).wait(1).to({regY:-98.8,scaleY:1.57,y:-241.8,alpha:1},0).to({_off:true},217).wait(1));

	// Символ 124
	this.instance_9 = new lib.Символ124("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,84.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},0).wait(1).to({regX:1.9,regY:2.3,x:1.9,y:88.3},0).wait(1).to({y:94.9},0).wait(1).to({y:108.6},0).wait(1).to({y:126.7},0).wait(1).to({y:136.7},0).wait(1).to({y:137.2},0).wait(1).to({y:135.8},0).wait(1).to({y:134.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:0,y:135.2},0).to({_off:true},215).wait(1));

	// Символ 123
	this.instance_10 = new lib.Символ123("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,146.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).wait(1).to({regX:1.7,regY:2.2,x:1.7,y:150.4},0).wait(1).to({y:157.1},0).wait(1).to({y:170.7},0).wait(1).to({y:188.9},0).wait(1).to({y:198.9},0).wait(1).to({y:199.3},0).wait(1).to({y:198},0).wait(1).to({y:196.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:0,y:197.4},0).wait(217).to({regX:-0.1,regY:0.2,scaleX:1.11,scaleY:1.11,x:-0.1,y:197.6},0).wait(1));

	// bg
	this.instance_11 = new lib.bg_rabstol("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-242,1,1.16,0,0,0,0,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},232).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440,-242,786.5,627.3);


(lib.super_cont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.najimalka("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,222.6,0.681,0.681);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({y:147},0).wait(1).to({y:89.3},0).wait(1).to({y:44.8},0).wait(1).to({y:10.4},0).wait(1).to({y:-15.6},0).wait(1).to({y:-34.7},0).wait(1).to({y:-47.6},0).wait(1).to({y:-55},0).wait(1).to({y:-57.4},0).wait(3).to({regX:0.1,scaleX:0.49,scaleY:0.49},0).wait(3).to({startPosition:0},0).to({regX:0.2,regY:0.1,x:121.5,y:-57.3},1).wait(5).to({scaleX:0.68,scaleY:0.68,x:121.6,y:-57.4},0).wait(1).to({regX:0,regY:0,x:68.1},0).wait(1).to({x:34.9},0).wait(1).to({x:14.5},0).wait(1).to({x:3.4},0).wait(1).to({regX:0.2,regY:0.1,x:0.2},0).wait(5).to({regX:0.1,regY:0,scaleX:0.49,scaleY:0.49,x:0},0).wait(3).to({startPosition:0},0).to({regX:0.2,regY:0.1,x:121.5,y:-57.3},1).wait(3).to({scaleX:0.68,scaleY:0.68,x:121.6,y:-57.4},0).wait(1).to({regX:0,regY:0,x:68.1},0).wait(1).to({x:34.9},0).wait(1).to({x:14.5},0).wait(1).to({x:3.4},0).wait(1).to({regX:0.2,regY:0.1,x:0.2},0).wait(14).to({regX:0.3,regY:0.2,scaleX:0.49,scaleY:0.49,x:0.1},0).to({_off:true},3).wait(219));

	// blick
	this.instance_1 = new lib.blick_obshee("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.2,1.001,0.998);
	this.instance_1.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(286));

	// contur
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222930").ss(3,1,1).rr(-134.5,-279.45,269,558.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(286));

	// but
	this.instance_2 = new lib.menu_button("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.3,263.1,0.77,0.75,0,0,0,0.7,0.6);
	this.instance_2.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(286));

	// MASK+++++++ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgRuArrQhbAAhBhBQhAhAAAhcMAAAhQbQAAhcBAhAQBBhBBbAAMAjdAAAQBbAABBBBQBABAAABcMAAABQbQAABchABAQhBBBhbAAg");
	mask.setTransform(0,-0.5);

	// ad
	this.instance_3 = new lib.reklama("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.3,-41.9,0.977,0.977,0,0,0,0.3,0.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134).to({_off:false},0).wait(122).to({startPosition:122},0).wait(1).to({regX:2.5,regY:44.7,x:2.4,y:5.3,alpha:0.994,startPosition:123},0).wait(1).to({y:16.4,alpha:0.975,startPosition:124},0).wait(1).to({y:35.3,alpha:0.943,startPosition:125},0).wait(1).to({y:62.5,alpha:0.897,startPosition:126},0).wait(1).to({y:99.1,alpha:0.835,startPosition:127},0).wait(1).to({y:146.7,alpha:0.755,startPosition:128},0).wait(1).to({y:208.3,alpha:0.651,startPosition:129},0).wait(1).to({y:289.3,alpha:0.514,startPosition:130},0).wait(1).to({y:402.1,alpha:0.323,startPosition:131},0).wait(1).to({regX:0.3,regY:0.2,x:0.3,y:549.7,alpha:0,startPosition:132},0).to({_off:true},1).wait(19));

	// timer
	this.instance_4 = new lib.timer("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,-5.3,1,1,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off:false},0).wait(1).to({regX:0,regY:0,x:0,y:-5.4,alpha:0.066,startPosition:1},0).wait(1).to({alpha:0.295,startPosition:2},0).wait(1).to({alpha:0.652,startPosition:3},0).wait(1).to({alpha:0.92,startPosition:4},0).wait(1).to({regX:0.1,regY:0.1,x:0.1,y:-5.3,alpha:1,startPosition:5},0).to({_off:true},66).wait(148));

	// prilojenie
	this.instance_5 = new lib.priloj("synched",17);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-37.3,0.999,0.999);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},138).wait(118).to({_off:false,regX:0.1,regY:0.1,x:0.1,y:-37.2,startPosition:0},0).wait(30));

	// bg_fon
	this.instance_6 = new lib.Символ23("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(286));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgRNgvaMAibAAAQApAAAmALQAmAKAhAUQAiATAbAbQAbAbATAiQAUAhAKAmQALAmAAApMAAABVhQAAApgLAmQgKAmgUAhQgTAigbAbQgbAbgiATQghAUgmAKQgmALgpAAMgibAAAQg+AAg2gXQg2gXgpgpQgpgpgXg2QgXg2AAg+MAAAhVhQAAgpALgmQAKgmAUghQATgiAbgbQAbgbAigTQAhgUAmgKQAmgLApAAg");
	mask_1.setTransform(0,-3.1);

	// phone
	this.instance_7 = new lib.phone_new();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-160,-326);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(286));

	// button
	this.instance_8 = new lib.but_phone("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(133.1,-113.8);

	this.instance_9 = new lib.but_phone("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-133.8,-180.1,1,1.767);

	this.instance_10 = new lib.but_phone("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-133.6,-79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,-306.6,284.1,607);


// stage content:
(lib._04_Adsontimer_svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.super_cont("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170,337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286));

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