(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1500,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ananas.png", id:"ananas"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/botton.png", id:"botton"},
		{src:"images/bru_1.png", id:"bru_1"},
		{src:"images/bru_2.png", id:"bru_2"},
		{src:"images/bru_3.png", id:"bru_3"},
		{src:"images/brusnika.png", id:"brusnika"},
		{src:"images/c1.png", id:"c1"},
		{src:"images/c2.png", id:"c2"},
		{src:"images/c3.png", id:"c3"},
		{src:"images/c4.png", id:"c4"},
		{src:"images/c5.png", id:"c5"},
		{src:"images/c6.png", id:"c6"},
		{src:"images/can_1.png", id:"can_1"},
		{src:"images/can_2.png", id:"can_2"},
		{src:"images/can_3.png", id:"can_3"},
		{src:"images/canabis.png", id:"canabis"},
		{src:"images/dop_golos.png", id:"dop_golos"},
		{src:"images/eondarit.png", id:"eondarit"},
		{src:"images/kiwi.png", id:"kiwi"},
		{src:"images/kiwi_1.png", id:"kiwi_1"},
		{src:"images/kiwi_2.png", id:"kiwi_2"},
		{src:"images/kiwi_3.png", id:"kiwi_3"},
		{src:"images/kiwi_4.png", id:"kiwi_4"},
		{src:"images/pe_1.png", id:"pe_1"},
		{src:"images/pe_10.png", id:"pe_10"},
		{src:"images/pe_11.png", id:"pe_11"},
		{src:"images/pe_12.png", id:"pe_12"},
		{src:"images/pe_2.png", id:"pe_2"},
		{src:"images/pe_3.png", id:"pe_3"},
		{src:"images/pe_5.png", id:"pe_5"},
		{src:"images/pe_7.png", id:"pe_7"},
		{src:"images/pe_8.png", id:"pe_8"},
		{src:"images/pe_9.png", id:"pe_9"},
		{src:"images/plus_1.png", id:"plus_1"},
		{src:"images/txt_bot.png", id:"txt_bot"},
		{src:"images/white_botton.png", id:"white_botton"},
		{src:"images/zalubimogo.png", id:"zalubimogo"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.ananas = function() {
	this.initialize(img.ananas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,340);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2500,669);


(lib.botton = function() {
	this.initialize(img.botton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,625,193);


(lib.bru_1 = function() {
	this.initialize(img.bru_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,34);


(lib.bru_2 = function() {
	this.initialize(img.bru_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.bru_3 = function() {
	this.initialize(img.bru_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,53);


(lib.brusnika = function() {
	this.initialize(img.brusnika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,263);


(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,26);


(lib.c2 = function() {
	this.initialize(img.c2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.c3 = function() {
	this.initialize(img.c3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,28);


(lib.c4 = function() {
	this.initialize(img.c4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,100);


(lib.c5 = function() {
	this.initialize(img.c5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,146);


(lib.c6 = function() {
	this.initialize(img.c6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,317,120);


(lib.can_1 = function() {
	this.initialize(img.can_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,379);


(lib.can_2 = function() {
	this.initialize(img.can_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,380);


(lib.can_3 = function() {
	this.initialize(img.can_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,380);


(lib.canabis = function() {
	this.initialize(img.canabis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,192);


(lib.dop_golos = function() {
	this.initialize(img.dop_golos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,467,35);


(lib.eondarit = function() {
	this.initialize(img.eondarit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,28);


(lib.kiwi = function() {
	this.initialize(img.kiwi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,123);


(lib.kiwi_1 = function() {
	this.initialize(img.kiwi_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,110);


(lib.kiwi_2 = function() {
	this.initialize(img.kiwi_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,119);


(lib.kiwi_3 = function() {
	this.initialize(img.kiwi_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,48);


(lib.kiwi_4 = function() {
	this.initialize(img.kiwi_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,102);


(lib.pe_1 = function() {
	this.initialize(img.pe_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,98);


(lib.pe_10 = function() {
	this.initialize(img.pe_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,27);


(lib.pe_11 = function() {
	this.initialize(img.pe_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,82);


(lib.pe_12 = function() {
	this.initialize(img.pe_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,80);


(lib.pe_2 = function() {
	this.initialize(img.pe_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,88);


(lib.pe_3 = function() {
	this.initialize(img.pe_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,60);


(lib.pe_5 = function() {
	this.initialize(img.pe_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,103);


(lib.pe_7 = function() {
	this.initialize(img.pe_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,93);


(lib.pe_8 = function() {
	this.initialize(img.pe_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,68);


(lib.pe_9 = function() {
	this.initialize(img.pe_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,68);


(lib.plus_1 = function() {
	this.initialize(img.plus_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,25);


(lib.txt_bot = function() {
	this.initialize(img.txt_bot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,20);


(lib.white_botton = function() {
	this.initialize(img.white_botton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,55);


(lib.zalubimogo = function() {
	this.initialize(img.zalubimogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,23);


(lib.button_url = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("EjDTBdvMAAAi7eMGGnAAAMAAAC7eg");
	this.shape.setTransform(1250,600);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],46.1,26.6,-46,-26.5).s().p("EgLRAhiIsHnAQhJgqAqhJMAhVg5wQAqhKBJAqIMIHBQBJAqgqBJMghVA5xQgbAtgnAAQgXAAgbgPg");
	this.shape.setTransform(91.5,128.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-88.1,308.8,432.4);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.botton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,625,193);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_botton();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,55);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eondarit();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304,28);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dop_golos();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,467,35);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zalubimogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,488,23);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.plus_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,25);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.txt_bot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,20);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.can_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192,380);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ananas();
	this.instance.parent = this;
	this.instance.setTransform(0,101,1,1,-36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338.7,373.6);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kiwi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,123);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kiwi_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,110);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kiwi_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,119);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kiwi_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,48);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kiwi_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,102);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,26);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c4();
	this.instance.parent = this;
	this.instance.setTransform(101.8,172.5,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.5,172.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,28);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c5();
	this.instance.parent = this;
	this.instance.setTransform(165.5,103.3,1,1,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.5,165.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,80);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,82);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,27);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,68);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,68);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,93);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,103);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,60);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,88);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pe_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178,98);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.canabis();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,192);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.canabis();
	this.instance.parent = this;
	this.instance.setTransform(123.2,0,0.835,0.835,50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.5,245.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brusnika();
	this.instance.parent = this;
	this.instance.setTransform(201.4,0,1,1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294,279.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.can_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,379);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bru_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,34);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bru_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bru_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,53);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,26);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,28);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,100);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,146);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.c6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317,120);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.can_2();
	this.instance.parent = this;
	this.instance.setTransform(-95,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-190,190,380);


(lib.__Camera__ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ButtonURL_actions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener('click', clickBtnHandler);
		function clickBtnHandler(e)
		{
			window.callClick();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.instance = new lib.button_url();
	this.instance.parent = this;
	this.instance.setTransform(465,150,1,1,0,0,0,465,150);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button_url(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2500,1200);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglgAEYQgyAAAAgyIAAnLQAAgyAyAAMBLBAAAQAyAAAAAyIAAHLQAAAygyAAg");
	mask.setTransform(245.2,28);

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.parent = this;
	this.instance.setTransform(-84.2,35.7,1,1,0,0,0,91.5,128.1);
	this.instance.alpha = 0.621;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:445.8,alpha:0},35,cjs.Ease.get(1)).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.2,56.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_67 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(15));

	// eondarit
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(97,-431,1,1,0,0,0,152,14);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-451,alpha:1},14,cjs.Ease.get(1)).wait(68));

	// dop_golos
	this.instance_1 = new lib.Символ40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.5,-396.5,1,1,0,0,0,233.5,17.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:-416.5,alpha:1},14,cjs.Ease.get(1)).wait(64));

	// zalubimogo
	this.instance_2 = new lib.Символ39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187,-356.5,1,1,0,0,0,244,11.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:-376.5,alpha:1},14,cjs.Ease.get(1)).wait(60));

	// txt_bot
	this.instance_3 = new lib.Символ37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(162,-298,1,1,0,0,0,177,10);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({alpha:1},11).wait(50));

	// plus_1
	this.instance_4 = new lib.Символ38();
	this.instance_4.parent = this;
	this.instance_4.setTransform(401,-297.5,1,1,0,0,0,15,12.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({alpha:1},10).wait(31));

	// Слой 9
	this.instance_5 = new lib.Символ44();
	this.instance_5.parent = this;
	this.instance_5.setTransform(187.2,-296.2,1,1,0,0,0,245.2,28);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).wait(18));

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_33 = new cjs.Graphics().p("AvTOEIAA8HIenAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_graphics_33,x:475.4,y:-295.9}).wait(49));

	// white_botton
	this.instance_6 = new lib.Символ42();
	this.instance_6.parent = this;
	this.instance_6.setTransform(294.5,-296.5,1,1,0,0,0,27.5,27.5);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({x:404.5},9,cjs.Ease.get(1)).wait(40));

	// botton
	this.instance_7 = new lib.Символ43();
	this.instance_7.parent = this;
	this.instance_7.setTransform(186.6,-296.5,0.129,0.129,0,0,0,312.5,96.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({regX:312.4,regY:96.5,scaleX:1.16,scaleY:1.16,x:186.4,y:-296.4},8).to({scaleX:0.81,scaleY:0.81,x:186.5,y:-296.5},4).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:0.97,scaleY:0.97},3).to({regX:312.5,scaleX:1,scaleY:1},3).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-445,304,28);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camera
	this.___camera___instance = new lib.__Camera__();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(1100,600);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({_off:true},1).wait(284));

	// Слой 21
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(1263.8,613.8,1,1,0,0,0,13.8,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(285));

	// kiwi_3
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(948.6,335.1,0.245,0.245,0,0,0,75.5,51);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).to({regY:51.1,scaleX:0.89,scaleY:0.89,x:820.5,y:343.7},14,cjs.Ease.get(1)).to({regY:51,scaleX:1,scaleY:1,x:798.5,y:345},73).to({regY:51.1,scaleX:1.67,scaleY:1.67,x:666.5,y:382.2,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// kiwi_2
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;
	this.instance_2.setTransform(947.1,333.1,0.341,0.341,0,0,0,41,24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).to({regY:24.1,scaleX:0.9,scaleY:0.9,x:861.8,y:154},14,cjs.Ease.get(1)).to({regY:24,scaleX:1,scaleY:1,x:847,y:123},73).to({regX:41.1,scaleX:2.47,scaleY:2.47,x:808.1,y:8,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// kiwi_1
	this.instance_3 = new lib.Символ31();
	this.instance_3.parent = this;
	this.instance_3.setTransform(941.6,346.6,0.26,0.26,0,0,0,63.6,59.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(188).to({_off:false},0).to({scaleX:0.89,scaleY:0.89,x:1069.6,y:201.5},14,cjs.Ease.get(1)).to({regX:63.5,scaleX:1,scaleY:1,x:1091.5,y:176.5},73).to({regY:59.6,scaleX:1.69,scaleY:1.69,x:1214.6,y:61.7,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// kiwi
	this.instance_4 = new lib.Символ32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(951,336,0.306,0.306,0,0,0,62,55);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(188).to({_off:false},0).to({regX:62.1,scaleX:0.9,scaleY:0.9,x:1113.1,y:344.6},14,cjs.Ease.get(1)).to({regX:62,scaleX:1,scaleY:1,x:1141,y:346},73).to({scaleX:1.8,scaleY:1.8,x:1244,y:387.1,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// ananas
	this.instance_5 = new lib.Символ33();
	this.instance_5.parent = this;
	this.instance_5.setTransform(953.6,345.6,0.445,0.445,0,0,0,68.5,61.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(188).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,x:1030.2,y:302.9},14,cjs.Ease.get(1)).to({regY:61.5,scaleX:1,scaleY:1,x:1043.5,y:295.5},73).to({regY:61.6,scaleX:1.52,scaleY:1.52,x:1196.6,y:194.7,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// can_3
	this.instance_6 = new lib.Символ34();
	this.instance_6.parent = this;
	this.instance_6.setTransform(913.7,303.7,0.362,0.362,0,0,0,169.3,186.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(188).to({_off:false},0).to({regX:169.4,regY:186.7,scaleX:0.91,scaleY:0.91,x:765.1,y:166.7},14,cjs.Ease.get(1)).to({regX:169.3,regY:186.8,scaleX:1,scaleY:1,x:739.5,y:143},73).to({scaleX:1.54,scaleY:1.54,x:630.5,y:-6,alpha:0},9,cjs.Ease.get(-1)).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_188 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(188).to({graphics:mask_graphics_188,x:963.1,y:146.7}).wait(97));

	// can_3
	this.instance_7 = new lib.Символ35();
	this.instance_7.parent = this;
	this.instance_7.setTransform(865.1,635.1,1,1,0,0,0,96,190);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(188).to({_off:false},0).to({x:939,y:267},14,cjs.Ease.get(1)).to({x:952,y:227},73).to({x:1036.4,y:-197.1},9,cjs.Ease.get(-1)).wait(1));

	// c15
	this.instance_8 = new lib.Символ28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(934.1,281.1,0.583,0.583,0,0,0,18,13.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,x:977.5,y:321.2},14,cjs.Ease.get(1)).to({regY:13,scaleX:1,scaleY:1,x:985,y:328},73).to({regX:18.1,regY:13.1,scaleX:1.94,scaleY:1.94,x:1025.3,y:345.4,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// c14
	this.instance_9 = new lib.Символ27();
	this.instance_9.parent = this;
	this.instance_9.setTransform(923.6,273.5,0.586,0.586,0,0,0,14.5,15);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,x:986.6,y:85.5},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:997.5,y:53},73).to({regX:14.6,regY:15.1,scaleX:1.9,scaleY:1.9,x:1047.8,y:-6.7,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// c13
	this.instance_10 = new lib.Символ26();
	this.instance_10.parent = this;
	this.instance_10.setTransform(931.3,281.1,0.316,0.316,0,0,0,86.3,86.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,x:773.1,y:169.5},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:745.8,y:150.3},73).to({scaleX:1.7,scaleY:1.7,x:493.9,y:53.8,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// c12
	this.instance_11 = new lib.Символ25();
	this.instance_11.parent = this;
	this.instance_11.setTransform(934.1,280.3,0.6,0.6,0,0,0,10,14.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({regX:10.1,regY:14.2,scaleX:0.94,scaleY:0.94,x:732.8,y:255.4},14,cjs.Ease.get(1)).to({regX:10,regY:14,scaleX:1,scaleY:1,x:698,y:251},73).to({scaleX:2.29,scaleY:2.29,x:585,y:232,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// c11
	this.instance_12 = new lib.Символ24();
	this.instance_12.parent = this;
	this.instance_12.setTransform(932.7,279.7,0.346,0.346,0,0,0,82.7,82.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({_off:false},0).to({regY:82.8,scaleX:0.9,scaleY:0.9,x:1106.1,y:196.4},14,cjs.Ease.get(1)).to({regX:82.8,regY:82.7,scaleX:1,scaleY:1,x:1136,y:182},73).to({regY:82.8,scaleX:1.38,scaleY:1.38,x:1234.1,y:128.1,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_5
	this.instance_13 = new lib.Символ17();
	this.instance_13.parent = this;
	this.instance_13.setTransform(932.6,284.1,0.376,0.376,0,0,0,46.5,51.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(94).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:840.4,y:324.6},14,cjs.Ease.get(1)).to({regY:51.5,scaleX:1,scaleY:1,x:824.5,y:331.5},73).to({scaleX:1.3,scaleY:1.3,x:730.5,y:360.5,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_2
	this.instance_14 = new lib.Символ15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(934.6,282,0.392,0.392,0,0,0,39.5,44);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(94).to({_off:false},0).to({regX:39.6,scaleX:0.91,scaleY:0.91,x:795.6,y:357.1},14,cjs.Ease.get(1)).to({regX:39.5,scaleX:1,scaleY:1,x:771.5,y:370},73).to({regX:39.6,regY:44.1,scaleX:1.66,scaleY:1.66,x:651.7,y:450.3,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_8
	this.instance_15 = new lib.Символ19();
	this.instance_15.parent = this;
	this.instance_15.setTransform(934.1,281.3,0.39,0.39,0,0,0,41,34);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).to({regX:41.1,scaleX:0.91,scaleY:0.91,x:1040.7,y:171.1},14,cjs.Ease.get(1)).to({regX:41,scaleX:1,scaleY:1,x:1059,y:152},73).to({regX:41.1,scaleX:1.42,scaleY:1.42,x:1276.9,y:36.1,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_11
	this.instance_16 = new lib.Символ22();
	this.instance_16.parent = this;
	this.instance_16.setTransform(932.6,279.8,0.215,0.215,0,0,0,81.5,41);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(94).to({_off:false},0).to({regY:41.1,scaleX:0.88,scaleY:0.88,x:1040,y:304.8},14,cjs.Ease.get(1)).to({regY:41,scaleX:1,scaleY:1,x:1058.5,y:309},73).to({regY:41.1,scaleX:1.82,scaleY:1.82,x:1224.6,y:389.6,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_94 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(94).to({graphics:mask_1_graphics_94,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_95,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_96,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_97,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_98,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_99,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_100,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_101,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_102,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_103,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_104,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_105,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_106,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_107,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_108,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_109,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_110,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_111,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_112,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_113,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_114,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_115,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_116,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_117,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_118,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_119,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_120,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_121,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_122,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_123,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_124,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_125,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_126,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_127,x:963.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_128,x:963.1,y:146.7}).wait(157));

	// can_2
	this.instance_17 = new lib.Анимация2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(866.4,639.1);
	this.instance_17._off = true;

	this.instance_17.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(94).to({_off:false},0).to({x:948.1,y:261.4},14,cjs.Ease.get(1)).to({x:953,y:225},73).to({x:1043.7,y:-200},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_12
	this.instance_18 = new lib.Символ23();
	this.instance_18.parent = this;
	this.instance_18.setTransform(931,283,0.455,0.455,0,0,0,44,40.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(94).to({_off:false},0).to({regX:44.1,scaleX:0.92,scaleY:0.92,x:1084.6,y:83.5},14,cjs.Ease.get(1)).to({regX:44,regY:40,scaleX:1,scaleY:1,x:1111,y:49},73).to({scaleX:1.53,scaleY:1.53,x:1179.6,y:-59,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_10
	this.instance_19 = new lib.Символ21();
	this.instance_19.parent = this;
	this.instance_19.setTransform(935.6,283.1,0.409,0.409,0,0,0,11,13.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(94).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:1085.2,y:371.4},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1111,y:386.5},73).to({regY:13.6,scaleX:1.59,scaleY:1.59,x:1182,y:438.2,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_9
	this.instance_20 = new lib.Символ20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(932.5,283.2,0.333,0.333,0,0,0,64.5,34);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(94).to({_off:false},0).to({regY:34.1,scaleX:0.9,scaleY:0.9,x:791.7,y:46.8},14,cjs.Ease.get(1)).to({regY:34,scaleX:1,scaleY:1,x:767.5,y:6},73).to({scaleX:1.39,scaleY:1.39,x:743.6,y:-50.3,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_7
	this.instance_21 = new lib.Символ18();
	this.instance_21.parent = this;
	this.instance_21.setTransform(932.1,283.8,0.275,0.275,0,0,0,45.5,46.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(94).to({_off:false},0).to({regY:46.5,scaleX:0.89,scaleY:0.89,x:869.3,y:193.3},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:858.5,y:177.5},73).to({regY:46.6,scaleX:1.68,scaleY:1.68,x:764.6,y:92.6,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_3
	this.instance_22 = new lib.Символ16();
	this.instance_22.parent = this;
	this.instance_22.setTransform(933.4,280.5,0.233,0.233,0,0,0,28.5,30);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(94).to({_off:false},0).to({regY:30.1,scaleX:0.89,scaleY:0.89,x:890.1,y:70.4},14,cjs.Ease.get(1)).to({regY:30,scaleX:1,scaleY:1,x:882.5,y:34},73).to({regX:28.6,regY:29.9,scaleX:1.53,scaleY:1.53,x:867.7,y:-42.1,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// pe_1
	this.instance_23 = new lib.Символ14();
	this.instance_23.parent = this;
	this.instance_23.setTransform(931.1,282.1,0.225,0.225,0,0,0,89,49.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(94).to({_off:false},0).to({scaleX:0.89,scaleY:0.89,x:911.4,y:145.6},14,cjs.Ease.get(1)).to({regY:49,scaleX:1,scaleY:1,x:908,y:122},73).to({regY:49.1,scaleX:1.41,scaleY:1.41,x:813.3,y:-80.8,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(94));

	// c6
	this.instance_24 = new lib.Символ1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(945.1,249,0.315,0.315,0,0,0,155,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({scaleX:0.9,scaleY:0.9,x:1020,y:144.1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1033,y:126},73).to({regY:107.9,scaleX:1.54,scaleY:1.54,x:1093.1,y:105.9,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// c5
	this.instance_25 = new lib.Символ2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(951.1,282.1,0.364,0.364,0,0,0,44,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:0.91,scaleY:0.91,x:1121.7,y:316.1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:1151,y:322},73).to({regX:44.1,scaleX:1.44,scaleY:1.44,x:1269.3,y:370.1,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// c4
	this.instance_26 = new lib.Символ3();
	this.instance_26.parent = this;
	this.instance_26.setTransform(945,288,0.46,0.46,0,0,0,72,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({scaleX:0.92,scaleY:0.92,x:842.7,y:330.7},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:825,y:338},73).to({regX:72.1,regY:50.1,scaleX:2.29,scaleY:2.29,x:756.2,y:379.9,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// c3
	this.instance_27 = new lib.Символ4();
	this.instance_27.parent = this;
	this.instance_27.setTransform(940.1,277.7,0.4,0.4,0,0,0,10,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({regX:10.1,regY:14.1,scaleX:0.91,scaleY:0.91,x:1052.7,y:189.4},14,cjs.Ease.get(1)).to({regX:10,regY:14,scaleX:1,scaleY:1,x:1072,y:174},73).to({scaleX:2.79,scaleY:2.79,x:1409.1,y:77,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// c2
	this.instance_28 = new lib.Символ5();
	this.instance_28.parent = this;
	this.instance_28.setTransform(927.4,275.3,0.533,0.533,0,0,0,14.6,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({regY:15.2,scaleX:0.93,scaleY:0.93,x:1029.9,y:148},14,cjs.Ease.get(1)).to({regX:14.5,regY:15,scaleX:1,scaleY:1,x:1047.5,y:126},73).to({regX:14.6,regY:15.1,scaleX:2.38,scaleY:2.38,x:1106.3,y:80.5,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// c1
	this.instance_29 = new lib.Символ6();
	this.instance_29.parent = this;
	this.instance_29.setTransform(926.1,264.1,0.222,0.222,0,0,0,18,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({scaleX:0.89,scaleY:0.89,x:787.9,y:216.3},14,cjs.Ease.get(1)).to({regY:13,scaleX:1,scaleY:1,x:764,y:208},73).to({regX:18.1,regY:13.1,scaleX:2.83,scaleY:2.83,x:659.3,y:153.1,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// bru_3
	this.instance_30 = new lib.Символ7();
	this.instance_30.parent = this;
	this.instance_30.setTransform(927.1,275.6,0.268,0.268,0,0,0,30,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({regX:30.1,scaleX:0.89,scaleY:0.89,x:863.1,y:129.6},14,cjs.Ease.get(1)).to({regX:30,regY:26.5,scaleX:1,scaleY:1,x:852,y:104.5},73).to({regY:26.6,scaleX:2.26,scaleY:2.26,x:752,y:-48.3,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// bru_2
	this.instance_31 = new lib.Символ8();
	this.instance_31.parent = this;
	this.instance_31.setTransform(950.5,298.5,1,1,0,0,0,10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({x:1071.6,y:329.2},14,cjs.Ease.get(1)).to({x:1092.5,y:334.5},73).to({regX:10.6,regY:10.6,scaleX:2.71,scaleY:2.71,x:1220.8,y:371.8,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// bru_1
	this.instance_32 = new lib.Символ9();
	this.instance_32.parent = this;
	this.instance_32.setTransform(928.5,294,1,1,0,0,0,11.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({x:821.9,y:245.4},14,cjs.Ease.get(1)).to({x:803.5,y:237},73).to({regY:17.1,scaleX:1.71,scaleY:1.71,x:641.5,y:173.7,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_1 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_3 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_4 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_5 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_6 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_7 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_8 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_9 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_10 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_11 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_12 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_13 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_14 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_15 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_16 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_17 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_19 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_21 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_23 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_25 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_26 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_27 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_29 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_30 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_31 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_32 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_33 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_34 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_35 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_36 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_37 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_38 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_39 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_40 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_41 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_42 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_43 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_44 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_45 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_46 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_47 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_48 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_49 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_50 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_51 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_52 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_53 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_54 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_55 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_56 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_57 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_58 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_59 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_60 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_61 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_63 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_64 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_65 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_66 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_67 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_68 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_69 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_70 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_71 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_73 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_74 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_75 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_76 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_77 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_78 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_79 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_80 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_81 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_82 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_83 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_84 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_85 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_86 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_87 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_88 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_90 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_91 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_92 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_93 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_94 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A+Hm8MgMggkSMBNLgCgMAIEBQSI6cIPIkWCqIzdASg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_1,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_2,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_3,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_4,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_5,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_6,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_7,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_8,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_9,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_10,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_11,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_12,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_13,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_14,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_15,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_16,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_17,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_18,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_19,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_20,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_21,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_22,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_23,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_24,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_25,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_26,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_27,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_28,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_29,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_30,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_31,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_32,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_33,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_34,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_35,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_36,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_37,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_38,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_39,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_40,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_41,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_42,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_43,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_44,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_45,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_46,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_47,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_48,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_49,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_50,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_51,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_52,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_53,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_54,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_55,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_56,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_57,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_58,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_59,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_60,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_61,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_62,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_63,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_64,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_65,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_66,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_67,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_68,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_69,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_70,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_71,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_72,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_73,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_74,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_75,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_76,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_77,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_78,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_79,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_80,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_81,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_82,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_83,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_84,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_85,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_86,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_87,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_88,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_89,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_90,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_91,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_92,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_93,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_94,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_95,x:963.1,y:146.7}).wait(1).to({graphics:mask_2_graphics_96,x:963.1,y:146.7}).wait(189));

	// can1
	this.instance_33 = new lib.Символ10();
	this.instance_33.parent = this;
	this.instance_33.setTransform(859.4,650.7,1,1,0,0,0,97,189.5);

	this.instance_33.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({x:942.6,y:253.1},14,cjs.Ease.get(1)).to({x:949,y:222.5},73).to({x:1036,y:-192.6},9,cjs.Ease.get(-1)).to({_off:true},1).wait(188));

	// brusnika
	this.instance_34 = new lib.Символ11();
	this.instance_34.parent = this;
	this.instance_34.setTransform(953.6,330.9,0.425,0.425,0,0,0,107,172.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({scaleX:0.92,scaleY:0.92,y:331},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:330.9},73).to({regY:172.8,scaleX:1.14,scaleY:1.14,x:1071.6,y:229.1,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},3).wait(188));

	// canabis
	this.instance_35 = new lib.Символ12();
	this.instance_35.parent = this;
	this.instance_35.setTransform(892,201.1,0.558,0.558,0,0,0,117.7,159.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({regX:117.8,scaleX:0.94,scaleY:0.94,x:883.6,y:141.4},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:882.1,y:131},73).to({scaleX:1.17,scaleY:1.17,x:915.1,y:33.1,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},3).wait(188));

	// canabis
	this.instance_36 = new lib.Символ13();
	this.instance_36.parent = this;
	this.instance_36.setTransform(907.6,230.1,0.438,0.438,0,0,0,111.6,96.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({regX:111.7,scaleX:0.92,scaleY:0.92,x:864.9,y:204.5},14,cjs.Ease.get(1)).to({regX:111.5,regY:96,scaleX:1,scaleY:1,x:857.5,y:200},73).to({regX:111.6,scaleX:1.19,scaleY:1.19,x:802.6,y:125.5,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},3).wait(188));

	// bg
	this.instance_37 = new lib.bg();
	this.instance_37.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(285));

	// Слой 44
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("EjCkBdvQguABAAgsMAAAi6HQAAgrAugBMGFJAAAQAuABAAArMAAAC6HQAAAsgugBg");
	this.shape.setTransform(1250,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(285));

	// btn
	this.instance_38 = new lib.ButtonURL_actions();
	this.instance_38.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1250,600,2500,1200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;