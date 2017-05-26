(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 100,
	color: "#A0BADD",
	manifest: []
};



// symbols:



(lib.Bitmap = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1txt = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2txt = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4txt = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.border = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.diskl = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logowite = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ocean = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sea = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ship = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.text3pngкопия = function() {
	this.spriteSheet = ss["240_400_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.text3pngкопия();
	this.instance.setTransform(0,0,0.401,0.401);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,671.1);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ocean();
	this.instance.setTransform(0,0,0.241,0.241);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,462.2);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logowite();
	this.instance.setTransform(0,0,1.395,1.395);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,837.2);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib._4txt();
	this.instance.setTransform(0,0,0.302,0.302);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,208,580.5);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib._1txt();
	this.instance.setTransform(0,0,0.349,0.349);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,669.8);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib._2txt();
	this.instance.setTransform(0,0,0.349,0.349);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,669.8);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib._2txt();
	this.instance.setTransform(0,0,0.349,0.349);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,669.8);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib._1txt();
	this.instance.setTransform(25,28,0.318,0.318);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25,28,219,611.2);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(0,0,0.185,0.185);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,355.6);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ocean();
	this.instance.setTransform(0,0,0.243,0.243);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,262,465.7);


// stage content:
(lib._240_400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// diskl
	this.instance = new lib.diskl();
	this.instance.setTransform(19,18,0.34,0.34);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgS5ggcMAlzAAAMAAABA5MglzAAAg");
	this.shape.setTransform(119.6,204.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgS4AgcMAAAhA3MAlyAAAMAAABA3g");
	this.shape_1.setTransform(119.6,204.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},230).wait(26));

	// logo
	this.instance_1 = new lib.logowite();
	this.instance_1.setTransform(-9,0,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},181).wait(75));

	// logo big
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(152.3,371.2,0.673,0.673,0,0,0,150.2,419);
	this.instance_2._off = true;

	this.instance_3 = new lib.logowite();
	this.instance_3.setTransform(20,57,1.395,1.395);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},181).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},40).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).wait(1).to({regX:150,regY:418.6,x:152.1,y:370.9},0).wait(7).to({_off:true},1).wait(66));

	// Слой 15
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(136,263.2,1,1,0,0,0,104,290.2);
	this.instance_4._off = true;

	this.instance_5 = new lib._4txt();
	this.instance_5.setTransform(32,-10,0.302,0.302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},190).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},33).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(190).to({_off:false},0).wait(1).to({y:267.2},0).wait(1).to({y:271.2},0).wait(1).to({y:275.2},0).wait(1).to({y:279.2},0).wait(2).to({_off:true},1).wait(59));

	// text3
	this.instance_6 = new lib.Символ12();
	this.instance_6.setTransform(150,434.5,1,1,0,0,0,120,335.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.text3pngкопия();
	this.instance_7.setTransform(5,-147,0.467,0.467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},143).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},24).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(143).to({_off:false},0).wait(1).to({x:149.1,y:419.4},0).wait(1).to({x:148.2,y:404.4},0).wait(1).to({x:147.3,y:389.3},0).wait(1).to({x:146.4,y:374.3},0).wait(1).to({x:145.4,y:359.2},0).wait(1).to({x:144.5,y:344.1},0).wait(1).to({x:143.6,y:329.1},0).wait(1).to({x:142.7,y:314.1},0).wait(1).to({x:141.8,y:299},0).wait(1).to({x:140.9,y:283.9},0).wait(1).to({x:140,y:268.9},0).wait(1).to({x:139.1,y:253.8},0).wait(1).to({x:138.2,y:238.7},0).to({_off:true},1).wait(99));

	// text2
	this.instance_8 = new lib.Символ5();
	this.instance_8.setTransform(120,728.9,1,1,0,0,0,120,334.9);
	this.instance_8._off = true;

	this.instance_9 = new lib._2txt();
	this.instance_9.setTransform(0,-119,0.349,0.349);

	this.instance_10 = new lib.Символ6();
	this.instance_10.setTransform(120,182.9,1,1,0,0,0,120,334.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},94).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},16).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({_off:false},0).wait(1).to({y:694.5},0).wait(1).to({y:660.2},0).wait(1).to({y:625.8},0).wait(1).to({y:591.4},0).wait(1).to({y:557.1},0).wait(1).to({y:522.7},0).wait(1).to({y:488.3},0).wait(1).to({y:453.9},0).wait(1).to({y:419.6},0).wait(1).to({y:385.2},0).wait(1).to({y:350.9},0).wait(1).to({y:316.5},0).wait(1).to({y:282.1},0).wait(1).to({y:247.8},0).wait(1).to({y:213.4},0).wait(7).to({_off:true},1).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(133).to({_off:false},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(113));

	// Hand
	this.instance_11 = new lib.Символ2();
	this.instance_11.setTransform(33,336.8,1,1,0,0,0,100,177.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({x:43.1,y:334},0).wait(1).to({x:53.2,y:331.5},0).wait(1).to({x:63.4,y:329.2},0).wait(1).to({x:73.6,y:327.4},0).wait(1).to({x:83.4,y:324.9},0).wait(1).to({x:93.5,y:321.8},0).wait(1).to({x:97.6,y:312.5},0).wait(1).to({x:94.6,y:302.8},0).wait(1).to({x:87.3,y:294.1},0).wait(1).to({x:84.7,y:285.9},0).wait(1).to({x:82.4,y:275.4},0).wait(1).to({x:80.2,y:265.1},0).wait(1).to({x:78,y:254.9},0).wait(1).to({x:75.8,y:244.7},0).wait(1).to({x:73.7,y:234.5},0).wait(1).to({x:71.6,y:224.3},0).wait(1).to({x:69.5,y:214.1},0).wait(1).to({x:67.4,y:203.9},0).wait(1).to({x:65.3,y:193.7},0).wait(1).to({x:63.3,y:183.5},0).wait(1).to({x:61.2,y:173.3},0).wait(1).to({x:59.2,y:163.1},0).wait(1).to({x:57.2,y:152.9},0).wait(1).to({x:55.2,y:142.7},0).wait(1).to({x:53.2,y:132.4},0).wait(1).to({x:51.2,y:122.2},0).wait(1).to({x:49.2,y:112},0).wait(1).to({x:47.3,y:101.8},0).wait(1).to({x:45.3,y:91.6},0).wait(1).to({x:43.4,y:81.3},0).wait(1).to({x:41.3,y:70.3},0).wait(1).to({x:38.6,y:59.5},0).wait(1).to({x:37.6,y:66},0).wait(1).to({x:38.1,y:77},0).wait(1).to({x:38.8,y:87.5},0).wait(1).to({x:39.6,y:97.9},0).wait(1).to({x:40.4,y:108.3},0).wait(1).to({x:41.3,y:118.7},0).wait(1).to({x:42.1,y:129.1},0).wait(1).to({x:43,y:139.5},0).wait(1).to({x:43.9,y:149.8},0).wait(1).to({x:44.8,y:160.2},0).wait(1).to({x:45.7,y:170.6},0).wait(1).to({x:46.6,y:180.9},0).wait(1).to({x:47.5,y:191.3},0).wait(1).to({x:48.3,y:201.6},0).wait(1).to({x:49.2,y:212},0).wait(1).to({x:50,y:222.4},0).wait(1).to({x:50.7,y:232.8},0).wait(1).to({x:51.3,y:243.2},0).wait(1).to({x:51.6,y:253.5},0).wait(1).to({x:44.1,y:252.9},0).wait(1).to({x:36.5,y:252.3},0).wait(1).to({x:29,y:251.8},0).wait(1).to({x:21.5,y:251.2},0).wait(1).to({x:13.9,y:250.6},0).wait(1).to({x:6.4,y:250},0).wait(1).to({x:-1.1,y:249.5},0).wait(1).to({x:-8.7,y:248.9},0).to({_off:true},1).wait(196));

	// text1
	this.instance_12 = new lib.Символ4();
	this.instance_12.setTransform(120,567.7,1,1,0,0,0,120,334.9);
	this.instance_12._off = true;

	this.instance_13 = new lib._1txt();
	this.instance_13.setTransform(3,-147,0.349,0.349);

	this.instance_14 = new lib.Символ7();
	this.instance_14.setTransform(120,189.2,1,1,0,0,0,120,334.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},22).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},33).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({_off:false},0).wait(1).to({regX:134.5,regY:333.6,x:134.5,y:539.1},0).wait(1).to({y:511.8},0).wait(1).to({y:484.6},0).wait(1).to({y:457.3},0).wait(1).to({y:430.1},0).wait(1).to({y:402.8},0).wait(1).to({y:375.6},0).wait(1).to({y:348.3},0).wait(1).to({y:321.1},0).wait(1).to({y:293.8},0).wait(1).to({y:266.6},0).wait(1).to({y:239.3},0).wait(1).to({y:212},0).wait(1).to({y:184.8},0).wait(1).to({y:157.5},0).wait(1).to({x:133.8,y:158.4},0).wait(1).to({x:133,y:159.2},0).wait(1).to({x:132.3,y:160.1},0).wait(1).to({x:131.5,y:160.9},0).wait(1).to({x:130.8,y:161.8},0).wait(1).to({x:130,y:162.7},0).wait(1).to({x:129.3,y:163.5},0).wait(1).to({x:128.5,y:164.4},0).wait(1).to({x:127.8,y:165.2},0).wait(1).to({x:127,y:166.1},0).wait(1).to({x:126.3,y:166.9},0).wait(1).to({x:125.5,y:167.8},0).wait(1).to({x:124.8,y:168.7},0).wait(1).to({x:124,y:169.5},0).to({_off:true},1).wait(204));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(85).to({_off:false},0).wait(1).to({x:122.3,alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(162));

	// sip
	this.instance_15 = new lib.ship();
	this.instance_15.setTransform(39,106,0.186,0.186);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},94).wait(162));

	// lodka
	this.instance_16 = new lib.border();
	this.instance_16.setTransform(0,0,0.222,0.222);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},94).wait(162));

	// Слой 21
	this.instance_17 = new lib.Символ11();
	this.instance_17.setTransform(121,195.6,1,1,0,0,0,130,231.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({x:121.1},0).wait(6).to({x:121.2},0).wait(6).to({y:195.5},0).wait(1).to({x:121.3},0).wait(7).to({x:121.4},0).wait(4).to({y:195.4},0).wait(3).to({x:121.5},0).wait(7).to({x:121.6},0).wait(2).to({y:195.3},0).wait(5).to({x:121.7},0).wait(7).to({x:121.8},0).wait(1).to({y:195.2},0).wait(6).to({x:121.9},0).wait(6).to({y:195.1},0).wait(1).to({x:122},0).wait(7).to({x:122.1},0).wait(4).to({y:195},0).wait(3).to({x:122.2},0).wait(7).to({x:122.3},0).wait(2).to({y:194.9},0).wait(5).to({x:122.4},0).wait(7).to({x:122.5},0).wait(1).to({y:194.8},0).wait(6).to({x:122.6},0).wait(6).to({x:122.7,y:194.7},0).wait(7).to({x:122.8},0).wait(5).to({y:194.6},0).wait(2).to({x:122.9},0).wait(7).to({x:123},0).wait(4).to({y:194.5},0).wait(3).to({x:123.1},0).wait(7).to({x:123.2},0).wait(2).to({y:194.4},0).wait(5).to({x:123.3},0).wait(7).to({x:123.4,y:194.3},0).wait(7).to({x:123.5},0).wait(5).to({y:194.2},0).wait(2).to({x:123.6},0).wait(2).to({_off:true},1).wait(79));

	// Слой 19
	this.instance_18 = new lib.Символ1();
	this.instance_18.setTransform(121.9,193.8,1,1,0,0,0,130.9,232.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:131,x:122.1},0).wait(2).to({x:122.2},0).wait(3).to({x:122.3},0).wait(2).to({y:193.7},0).wait(1).to({x:122.4},0).wait(3).to({x:122.5},0).wait(3).to({x:122.6},0).wait(1).to({y:193.6},0).wait(2).to({x:122.7},0).wait(3).to({x:122.8},0).wait(2).to({y:193.5},0).wait(1).to({x:122.9},0).wait(3).to({x:123},0).wait(3).to({x:123.1},0).wait(1).to({y:193.4},0).wait(2).to({x:123.2},0).wait(3).to({x:123.3},0).wait(2).to({y:193.3},0).wait(1).to({x:123.4},0).wait(3).to({x:123.5},0).wait(3).to({x:123.6},0).wait(1).to({y:193.2},0).wait(2).to({x:123.7},0).wait(3).to({x:123.8},0).wait(2).to({y:193.1},0).wait(1).to({x:123.9},0).wait(4).to({x:124},0).wait(2).to({x:124.1},0).wait(1).to({y:193},0).wait(2).to({x:124.2},0).wait(3).to({x:124.3},0).wait(2).to({y:192.9},0).wait(1).to({x:124.4},0).wait(3).to({x:124.5},0).wait(3).to({x:124.6},0).wait(1).to({y:192.8},0).wait(2).to({x:124.7},0).wait(3).to({x:124.8},0).wait(2).to({y:192.7},0).wait(1).to({x:124.9},0).wait(3).to({x:125},0).wait(3).to({x:125.1},0).wait(1).to({y:192.6},0).wait(2).to({x:125.2},0).wait(3).to({x:125.3},0).wait(2).to({y:192.5},0).wait(1).to({x:125.4},0).wait(3).to({x:125.5},0).wait(3).to({x:125.6},0).wait(1).to({y:192.4},0).wait(2).to({x:125.7},0).wait(3).to({x:125.8},0).wait(2).to({y:192.3},0).wait(2).to({x:125.9},0).wait(2).to({x:126},0).wait(3).to({x:126.1},0).wait(1).to({y:192.2},0).wait(2).to({x:126.2},0).wait(3).to({x:126.3},0).wait(2).to({y:192.1},0).wait(1).to({x:126.4},0).wait(3).to({x:126.5},0).wait(3).to({x:126.6},0).wait(1).to({y:192},0).wait(2).to({x:126.7},0).wait(3).to({x:126.8},0).wait(2).to({y:191.9},0).wait(1).to({x:126.9},0).wait(3).to({x:127},0).wait(3).to({x:127.1},0).wait(1).to({y:191.8},0).wait(2).to({x:127.2},0).wait(3).to({x:127.3},0).wait(2).to({y:191.7},0).wait(1).to({x:127.4},0).wait(3).to({x:127.5},0).wait(3).to({x:127.6},0).wait(1).to({y:191.6},0).wait(2).to({x:127.7},0).wait(3).to({x:127.8},0).wait(2).to({y:191.5},0).wait(1).to({x:127.9},0).wait(2).to({_off:true},1).wait(79));

	// fon
	this.instance_19 = new lib.Bitmap();
	this.instance_19.setTransform(0,-18,0.222,0.222);

	this.instance_20 = new lib.sea();
	this.instance_20.setTransform(0,0,0.222,0.222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19}]}).to({state:[]},177).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,161,320,553.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;