(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animate1_atlas_1", frames: [[0,907,1099,836],[0,0,1244,905],[1246,597,656,589],[1101,1188,656,589],[1246,0,661,595]]},
		{name:"animate1_atlas_2", frames: [[0,617,415,894],[417,617,415,894],[834,0,415,894],[834,896,415,894],[1251,0,415,894],[1251,896,607,604],[0,0,608,615]]},
		{name:"animate1_atlas_3", frames: [[0,0,615,584],[617,0,615,584]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_15 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["animate1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["animate1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["animate1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["animate1_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["animate1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["animate1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animate1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("AAntRMAxFAAAIAANvIAANxMgxFAAAMgxDAAAIAAtxMAxDAAAMAxFAAAEg2EgThMBsJAAAMAAAAnDIAAAAMhsJAAAIAAAAgAAntRIAANvIAANxEgwcAAeIAAtvMAxDAAA");
	this.shape.setTransform(346.1,125.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg2EAAAIAAAAMBsJAAAIAAAAg");
	this.shape_1.setTransform(346.1,250.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3F3FF").s().p("AAANwIAAtwMAxFAAAIAANwgEgxEANwIAAtwMAxEAAAIAANwgAAAAAIAAtvMAxFAAAIAANvgAAAAAgEgxEAAAIAAtvMAxEAAAIAANvg");
	this.shape_2.setTransform(350.075,128.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C07B52").s().p("Eg2EATiMAAAgnDMBsJAAAMAAAAnDgEgwcAAfIAANwMAxDAAAMAxFAAAIAAtwIAAtwMgxFAAAMgxDAAAg");
	this.shape_3.setTransform(346.1,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,694.2,252.1);


(lib.tree_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(1,1,1).p("EggTgEwQAFpkFymyQF3m4ITAAQITAAF2G4QAMAOAMAPQAfgsAlgrQFlmmH6AAQH5AAFlGmQDdEEBUFFQCzBVCTDCQEFFaAAHoQAAHpkFFaQkFFalxAAQlxAAkFlaQgggrgcgsQgvAHgwADQgnADgnAAQgiAAghgCQkHgPjciFQhSgyhNhBQhLhBhGhSQgvBEg2BAQitDLjOBtQhPAqhTAcQhkAhhrAPQhNAKhQAAQhxAAhpgUQgkgHgkgJQg6DdiuCuQkEEFlxAAQlwAAkFkFQkFkFAAlwQAAlxDzn7QDzn6ESCJgEggTgEhQAAgIAAgH");
	this.shape.setTransform(282.75,183.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336600").s().p("EgoGAYiQkFkFAAlwQAAlxDzn6QD0n7ERCJQAFpkFymyQF4m4ISAAQITAAF1G4IAZAdQAfgsAlgqQFlmmH5gBQH6ABFlGmQDcEDBVFGQC0BUCRDCQEGFagBHoQABHpkGFZQkEFblxAAQlxAAkFlbQgggqgcgsQgvAHgwADQgnADgogBQghAAghgBQkHgPjdiGQhRgxhNhBQhLhBhGhSQgvBEg3BAQisDLjOBtQhPAqhUAcQhjAhhrAPQhNAKhQAAQhxgBhpgTQgkgHgjgJQg7DditCuQkFEElwABQlxgBkFkEgEggTgEhIAAgPIAAAPg");
	this.shape_1.setTransform(282.75,183.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Ao7WkQgcgDgUgVQgVgWAGgZQADgOAOgPIAZgZQAlgkAuhuQArhmAugkQARgNArgVQAogUATgQQApgjARhAQANguAChKQAIkBgqk/QgajAhIl7QgKg1gKgcQgPgrgagaQgfghg4gQQgWgGhRgOQijgciUhRQiThRhvh7QgggjgLgkQgFgTABgPQBqAUBwAAQBRAABMgKQB3AlByA2IgaiLQBTgcBPgqQArBaA+BPQAxA9AtAPQBBAVBZgwQCPhOBMicQBEiKgPiPQBNBBBSAyQABAygDAzQgKCNgvCEQA9giBogVICugjQBegaBAg5QAcgaARgbQAhACAiAAQAnAAAngDQgRCHgqCBQgUBAgXAuQgcA5glApQgqAtg1AZQg6Aag4gGQBlANA0ACQBVAEBCgQQBPgTA6gxQBAg1ARhHQADgNAFgsQAFgjAHgUQALgdAYgRQAagSAaAHQAiAKAJArQAHAigIAvIgqDpQgOBVgQAtQgYBFgrApQg8A4hjAHQhSAGhjgcQhyglg6gQQhlgbhLAHIBCJKQATCrASBUQAdB+BDCgQBbDaB9DOQBLB7g0A3QgOAPgYAJQgQAFgdAGQisAhhbANQiTAUh3gDQhEgBhrgMIiugRQjQgQiGAsIgzAQQgVAFgSAAIgNAAg");
	this.shape_2.setTransform(305.0338,406.0429);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,567.5,551.5);


(lib.tree_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Aftl2QhlGjspjBQnahykZhVQg8gSgzgRQh2gnhHggQiOhAk6BNQglAJgpALQjLA6kKBtQr2E2mhnxQminyKIqRQKHqSUlCSQUlCTFvJHQFuJHhlGkgEAyJARUQgdG5lrEwQlrExnNgZQnNgaganAQgMjZiQiUQhLhMhtg5Qg7gfhGgaQhDgZhNgTQgEgBgDgBQpEiYAhnBQAinESogNQSogPDwFZQDwFagcG4gAmGL7QAAEunWCKQhlAehpAbQg7APg9AOQhEAQhGAPQg1ALg2ALQjRApjcAeQoTBImajSQmajSAAkwQgBkwFilKQFjlKKEB2QKDB2GdDVQGdDWAAEvg");
	this.shape.setTransform(321.2011,213.4395);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("EAfJAhVQnNgaganAQgMjZiQiUQhLhMhtg5Qg7gfhGgaQhDgZhNgTIgHgCQpEiYAhnBQAinESogNQSogPDwFZQDwFagcG4QgdG5lrEwQlPEamiAAQgjAAgkgCgEgrxAT7QmajSAAkwQgBkwFilKQFjlKKEB2QKDB2GdDVQGdDWAAEvQAAEunWCKQhlAehpAbIh4AdIiKAfIhrAWQjRApjcAeQiIASiAAAQlzAAkyicgARfiUQnahykZhVIhvgjQh2gnhHggQiOhAk6BNIhOAUQjLA6kKBtQr2E2mhnxQminyKIqRQKHqSUlCSQUlCTFvJHQFuJHhlGkQhFEfmRAAQi4AAkAg9g");
	this.shape_1.setTransform(321.2011,213.4395);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("EgJSAorIgFgDQgQAFgSgHQgWgJgMgUQgRgdADg7QAHiVA2ixQAihvBSjNQBWjXAghmQA5iyAMiUQAHhZgHh+IgOjYQgLi+gFgrQgSiDgxhXQghg5g6g7QgjgkhLhAImAlJQidiGhKhUQh0iEgpiGQgWhIAbglIBrgWQAPAFAPAJQAWALApAbQAmAWAdAEQgVgugDglQAAgOACgMIB4gdQAYARAXAcIKDLpQBOgQAjhgQAahKgChuIgUw0QgCiUgIhNQgMh9giheQgUg2grhXQg1hsgOggQhIimAeh3IADgJQgFglAJgYQAEgKAGgIIBOgVQAOAKAKATQAJATAHAkQAoC1BwCTQBDgSBUg/ICLhpIBMgwQApgeARgiIAOggQAHgPAIgIIBvAjQADAMABAPQABAbgLAaQgJAWgSAZIgiAqQhJBZgiA/QgqBKgaBgQgVBNgNBnQgSCDgFCkQgDBnAADCIABFeQAAAsABAWQACAlAIAcQAHAcASAoIAeBBQAcBHAHBOIADgDQBDg9Cfg3QCrg7A/gwQBWhABKiJQA6h5AohJIAHACQBNAUBEAZIgIATQgTAzgEARICfgfQBuA6BKBMQhyBwhDA6Qh8BrhxBDIh8BFQhLAqguAiQiUBwhTDEQhJCrgNDWQgFBKACCXQABCVgFBMQgFBgglDvQghDVAAB7QgBDjBSEHQA8DBCBESQALAZAEAPQAFAWgHARQgOAnhDAJQhgANiPgeQjggvgQgCQiRgSiTAhQiTAih8BQQgbASgRAGQgNAFgLAAQgMAAgKgFg");
	this.shape_2.setTransform(316.3727,430.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,644.4,691.9);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("AM+AAQAAFYjzDzQjzDzlYAAQlXAAjzjzQjzjzAAlYQAAlXDzjzQDzjzFXAAQFYAADzDzQDzDzAAFXg");
	this.shape.setTransform(428.4,354.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("EAZWAsQQrHy4hMgHQhMgIg2gvQg1gvgQhIQgRhJAahBQAchDBBgoQBBgoBIAGQBHAGA6AyQA6AyFcLBQFbLCEgKoQBnD0gaAAQgtAAnHsFgEgVCAr7QJdsOEdmBQEdmCAQgrQAQgsAeghQApgtA8gSQA7gTA6AOQBDAQAyA2QAxA2AIBFQAJBEghBBQgiBBg9AgQg9AhhIgJQhIgJu7QSQoiJUgkAAQgcAAEElPgEAkWAcJQv5r3hYgGQhXgGg6g5QgzgygMhLQgMhLAghAQASgmAhgdQAggdAogPQBMgdBSAeQBSAeGYGAQGXGAI2JFQD2D8g1AAQhEAApAmtgEgnDAeAQCXisLCnmQLCnmAghAQATgmAhgdQAggdAogPQBMgcBTAeQBSAfAnBIQAnBHgTBWQgSBWhCAxQhBAxvzIKQr4GJhnAAQghAAAlgqgEAurALmQvxnKhpAdQhoAcg9AgQg8AghJgIQhIgIg0guQgigegUgqQgUgpgDgtQgCgtAPgsQAQgsAeghQApgsA8gSQA7gTA7AOQBDAPRzJoQKNFig2AAQgoAAmujDgAjbIQQjzjzAAlXQAAlYDzjzQDyjzFYAAQFYAADzDzQDzDzAAFYQAAFXjzDzQjzDzlYAAQlYAAjyjzgAuMDYQhJgIg0guQghgej4hAQj5hA5GjIQ5GjJc4CGQc4CGAeghQApgsA8gSQA8gTA7AOQBDAQAxA2QAxA2AJBEQAIBEghBBQgiBBg9AgQgvAZg3AAQgPAAgQgCgAWVmnQhJgJgzguQgigegUgqQgUgqgCgtQgCguAQgrQAQgsAeghQApgsA8gSQA8gTCdgTQCdgUWhnJQWhnJ3FJmQ3GJnghBAQgiBBg9AgQgwAag3AAQgPAAgQgCgArvofQhIgJg0guQghgegUgqQgUgqgDgtQgCguyn2mQyo2mS7UuQS7UuBdAUQBcATA6AOQBEAQAwA2QAxA3AJBEQAJBFgiBBQgiBAg9AhQgwAZg2AAQgQAAgQgCgANqu9QhJgJgzguQgigfgUgqQgUgqgCgtQgCgtAQgsQARgsAfghQApgsA7gSQA8gSOHpjQOGpjoTHnQoTHnj7EGQj8EGgiBBQgiBAg9AhQgvAZg3AAQgPAAgQgCgAhtwqQgugZgggrQgggsgJg0QgJgzAQg0QAQg0AjgnQAggiATivQATiwiGzLQiFzLEUWQQESWQAZBAQAZBBgRBHQgRBHgzAuQg0AuhIAJQgQACgOAAQg3AAgwgZg");
	this.shape_1.setTransform(391.6697,360.5409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,783.4,721.1);


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("EhkXg29MDIvAAAMAAABt7MjIvAAAg");
	this.shape.setTransform(639.875,352.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("EhkXA2+MAAAht7MDIvAAAMAAABt7g");
	this.shape_1.setTransform(639.875,352.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},40).to({state:[{t:this.shape_1},{t:this.shape}]},120).to({state:[{t:this.shape_1},{t:this.shape}]},30).to({state:[{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_1},{t:this.shape}]},162).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("EhlaAAAIAAAAMDK1AAAIAAAA");
	this.shape.setTransform(641.275,510.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EhlaARLMAAAgiVMDK1AAAMAAAAiVg");
	this.shape_1.setTransform(641.275,620.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("EhlaASwMAAAglfMDK1AAAMAAAAlfg");
	this.shape_2.setTransform(641.275,630.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},4).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.powerpafflying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lips
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXCGQgdgHgfgdQgVgTgKgQQgFgIgIgVQgHgUgGgJIgNgQIgNgQQgOgXAJgRQAEgKAMgCQAMgDAGAIQAGAHACASQADAHAJAIQAMAKACAEQAHAJAFAUQAGAVAGAIQAEAGAKAHIAOAMIAKAOQAGAIAGAEQARAMAYgNQAHgDAMgJIATgLIAYgKQAPgFAHgIQAJgKAHgdIAVhrQADgPAHgIQAIgMAKADQALACADANQACALgDAOIgUBiQgIAkgLAVQgQAegZAGQgVACgJAFQgFADgGAGIgLALQgNAMgSADIgLABQgMAAgLgEg");
	this.shape.setTransform(196.2963,52.4693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.502)").ss(0.5,1,1).p("Aibg7QACgJAGgFQAOgFADAEQADABAGABQAHABADgBQAGAAAHAGQACACAEABQAEADAEAAQAEABAHACQAHADAFAAQAEgBAHAFQAGADAFABQARADAUgIQAGgCALgEQALgEAHgBQAIgBANgCQAMgCAIgCQALgCAJgLQAIgHAHgFQANgHAIgGQADgEAFAAQAFgCAGAGQAGAFACALQABAGAAAGQgHA1gQAnQgGASgIAOQgEAHgFAFQgPAWgWAHQgPADgLAEQgFACgFAEQgGAEgEACQgIAEgKACQgFABgFAAQgOABgPgEQgagGgagWQgOgLgKgMQgCgCgCgDQgGgIgHgPQgHgOgFgKQgDgFgGgIQgGgJgDgHQgIgSADgRg");
	this.shape_1.setTransform(198.174,57.3689);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcBtQgagGgagWQgOgLgKgMIgEgFQgGgIgHgPIgMgYIgJgNQgGgJgDgHQgIgSADgRIABgBQACgJAGgFQAOgFADAEIAJACQAHABADgBQAGAAAHAGIAGADQAEADAEAAIALADQAHADAFAAQAEgBAHAFQAGADAFABQARADAUgIIARgGIASgFIAVgDIAUgEQALgCAJgLIAPgMIAVgNQADgEAFAAQAFgCAGAGQAGAFACALIABAMQgHA1gQAnQgGASgIAOIgJAMQgPAWgWAHQgPADgLAEIgKAGIgKAGQgIAEgKACIgKABIgFABQgMAAgMgEg");
	this.shape_2.setTransform(198.174,57.3689);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgpgpQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5g");
	this.shape_3.setTransform(200,57.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	this.shape_4.setTransform(200,57.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.667)").ss(0.7,1,1).p("AiahNQAAgHADgFQAJgMABACQADgCAKgBQAIgEAPABQAoABAdADQAYAGAXADQAEABAEAAQATACARgCQASgBAOgCQATgDAMgEQAEAAAEgBQAHACADgCQAFgCACAFQABgBACACQABABADADQACADABAEQABAEABAFQAAADAAADQABA2gQAiQgGAQgKAOQgPAXgVAPQgTAOgWAFQgRAEgRgBQgGAAgGgCQgOgCgOgHQgNgGgPgKQgXgRgUgWQgUgVgOgXQgLgSgGgRQgGgTABgTg");
	this.shape_5.setTransform(199.2713,61.0838);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANBqIgMgCQgOgCgOgHQgNgGgPgKQgXgRgUgWQgUgVgOgXQgLgSgGgRQgGgTABgTIAAAAQAAgHADgFQAJgMABACQADgCAKgBQAIgEAPABQAoABAdADQAYAGAXADIAIABQATACARgCIAggDQATgDAMgEIAIgBQAHACADgCQAFgCACAFQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAIAEAEIADAHIACAJIAAAGQABA2gQAiQgGAQgKAOQgPAXgVAPQgTAOgWAFQgNADgNAAIgIAAg");
	this.shape_6.setTransform(199.2713,61.0838);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.333)").ss(0.4,1,1).p("AiphnQABgIAEgHQAQgFABALQABALANANQAJAHATAPQAvAiAcAPQAcASAYAFQAEABAFABQAVADAWgHQAUgFAPgNQASgPAJgWQAEgHACgIQADgHABgTQABgSACgGQAAgHADAAQAEgCAEACQAEACACAFQACAEABAIQABADAAADQAEBEgLAlQgGAVgIASQgPAegXAUQgUASgbAHQgUAFgTgCQgHgBgGgBQgQgFgRgLQgNgIgRgQQgZgXgXgZQgWgagTgaQgPgWgHgTQgJgWACgWg");
	this.shape_7.setTransform(198.5852,59.8714);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZB8IgNgCQgQgFgRgLQgNgIgRgQQgZgXgXgZQgWgagTgaQgPgWgHgTQgJgWACgWQABgIAEgHQAQgFABALQABALANANIAcAWQAvAiAcAPQAcASAYAFIAJACQAVADAWgHQAUgFAPgNQASgPAJgWQAEgHACgIQADgHABgTQABgSACgGQAAgHADAAQAEgCAEACQAEACACAFQACAEABAIIABAGQAEBEgLAlQgGAVgIASQgPAegXAUQgUASgbAHQgOAEgOAAIgLgBg");
	this.shape_8.setTransform(198.5852,59.8714);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVCPQgTgGgSgPQgNgKgUgVQg2g7gtg8QgUgagJgUQgMgbADgXQACgKAGgHQAIgIAHAEQAIAEAAAUQABAZAPAbQAKARAXAcQA0BAAdAeQAkAmAfAFQAYAEAZgMQAXgMAPgWQAZgkACg9QABgRgCgiIgCg0QAAgMAFgEQAFgDAGABQAFACAEAFQAEAFACAQQAGBSgGAoQgKBGgoAnQgXAXgeAJQgPAEgPAAQgPAAgPgFg");
	this.shape_9.setTransform(197.9515,58.2214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},79).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},69).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).wait(123));

	// hand
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AhWBYQhaiPgoh9Qgph9AogzQAngxBdApQBcAqBQDMQBQDLAuCTQAvCSgqAFQgpAGhWhOQhYhPhZiQg");
	this.shape_10.setTransform(162.7469,55.0036);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9C3B8").s().p("ABbE3QhYhPhZiQQhaiPgoh9Qgph9AogzQAngxBdApQBcAqBQDMQBQDLAuCTQAvCSgqAFIgGAAQgqAAhPhIg");
	this.shape_11.setTransform(162.7469,55.0036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},81).to({state:[{t:this.shape_11},{t:this.shape_10}]},69).wait(126));

	// body
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(120.1,-219.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(120.1,-219.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(120.1,-219.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},81).to({state:[{t:this.instance_2}]},69).wait(126));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.1,-219.5,207.50000000000003,447);


(lib.powerpaf_waiking_up = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lips
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABJAgQgbgCg6gIIiegWQgGgBgFgCQgFgEABgIQAAgIAGgEQAHgGATgBQAygCBkASQBhARAzgDQAVAAAGADQAHABAFAHQADAHgBAGQgFAMgWACIggABQgZAAgdgDg");
	this.shape.setTransform(197.7,56.5541);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABLAmIgCAAIgpgDIgdgEIgPgCIgFgBIgIgCIgkgGIgOgCIgLgDIgFgCIgGgCIgIgBIgLgBIgPgEIgRgFIgJgBIgJgCIAAAAIgEgBIgGgCIgEgCQgEgEAAgHIAAgBQABgHAFgEIABgBIADgCQAHgDAMAAIAFAAIAMACIATACIAQADIAOACIAJADIAJACIALABIALACIALACIAKACIAUAEIAHABIABAAIAZADIAgADQASABAQgBQAQAAAOgDIAUgDIAEAAIAGAAQAHgBAFABIAJADIABAAQAGADADAFIABABIABADQACAFgCAEIAAABQgEANgSAEIgDAAIgSADQgWAEgZAAIgTAAg");
	this.shape_1.setTransform(197.6794,57.1267);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABLArQgPAAgagDQgQgBgOgCIgQgCIgFgBIgIgCIglgIIgOgCIgLgEIgFgDIgGgDIgIgBIgLgCQgIgBgHgEQgIgEgIgCIgJgDIgJgDIgDgBIgHgDIgDgDQgEgEABgHIAAgBQABgGAFgEIACgBIADgBQAHgDAMABIAEAAIABABIALADIASAEIAQAEIAPAEIAIADIAKADIALABIALADIALACIAJADIAVAEIAHABIABAAIAaADQASABAPAAQASgBAPgEQAPgBAOgGIASgFIAEgBIAGgBQAHgBAGACQAFABADACIABABQAFADAEAGIAAABIABADQABAEgBAFIAAABQgEANgRAGIgDABIgRAFQgdAKgkAAIgCAAg");
	this.shape_2.setTransform(197.64,57.7875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiAuQgQgBgOgCIgQgDIgFgBIgJgBQgUgHgRgDIgPgCQgHgCgEgDQgDgBgCgDIgFgDIgJgCIgLgCQgIgCgHgFQgHgGgHgCIgJgEIgJgEIAAAAIgDgBIgGgEIgEgDQgDgEABgHIAAgBQABgHAGgDIABgBIAEgBQAIgCALABIAEACIABAAIALAFQAIAEAJACIAQAFIAOAFIAJAEIAJAEIALACIAMACIALAEIAKADIAVAEIAHAAIABAAIAbADQASAAAQgCQASgBAOgGQAOgDAMgJQAJgGAJgCIADgBIAHgCQAHAAAFABQAGABADADIABABQAFAEACAGIABABIABADQABAGgCADIAAABQgEAPgQAHIgCACIgQAGQgcAPgkABIgCABIgHAAIgkgCg");
	this.shape_3.setTransform(197.6089,58.4479);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkA0QgSgBgOgDIgPgCIgGgBIgJgCQgVgIgRgDIgPgDQgIgCgEgEQgCgBgCgDQgCgDgDgBQgDgCgGgBIgMgBQgIgDgGgGQgHgJgGgCIgIgFIgKgFIgDgBIgGgFIgDgCQgDgFABgHIAAgBQACgHAGgDIACAAIADgBQAJgCALADIAEACIAAAAIALAGQAIAGAJACIAPAHIAPAGQADABAFAEIAJAFIAMACIAMACIALAEQAFADAFABQAJACAMACIAHAAIABAAIAcADQATAAAQgEQASgDANgIQANgFALgMQAJgHAIgDIADgCIAHgCQAHgBAGACQAFABADAEIABABQAFAEACAGIAAACIABADQABAFgCAFIAAABQgEAPgPAJIgCACIgPAIQgbATgkAEIgCAAIgSABIgZgBg");
	this.shape_4.setTransform(197.5725,59.1094);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAlA5IgggDIgQgCIgGgBIgJgCQgXgJgQgEIgQgDQgHgCgFgEIgDgGQgCgDgCgCQgEgCgGgBIgMgCQgIgCgGgIQgHgLgFgCIgIgGIgJgGIgBAAIgCgBIgGgFIgDgEQgDgFACgGIAAgBQACgHAHgDIABAAIAEgBQAJgBALAEIAEACIAAABIAKAHQAIAHAIADIAPAIIAPAHIAIAHQAFAEAFABIALADIAMACQAFABAGADIAKAFQAKADAMABIAHABIABAAIAdABQAVAAAPgFQASgFANgKQALgHALgPQAHgJAIgEIADgCIAHgCQAIgCAFACQAGACACAEIABACQAEAEACAHIAAABIABADIgBAKIAAACQgEAQgOAKIgCACIgOALQgbAXgiAFIgDABQgIABgNAAIgXgBg");
	this.shape_5.setTransform(197.5469,59.774);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAmA/QgUgBgNgCIgQgCIgGgBIgKgDQgXgKgQgDIgRgEQgIgCgEgFIgDgHQgBgEgDgCQgDgCgHgBIgMgCQgIgCgFgKQgHgNgEgCIgIgHIgKgHIgCgBIgGgGIgDgEQgCgFACgHIAAAAQACgHAHgDIACAAIAEAAQAKgBAKAFIAEACIAAACIAKAIQAIAIAHAEIAPAJIAPAIIAIAIQAEAFAFABIAMADIAMACIALAFIALAGQAJADAMABIAIABIABAAIAeABQAVgBAPgGQASgHAMgNQALgIAJgTQAHgKAHgFIAEgCQADgCAEgBQAHgCAGADQAGACACAEIABACQAEAEABAIIAAABIABADIgBALIgBACQgEARgMAMIgDACIgMANQgaAbgjAHIgCAAQgKADgSAAIgRgBg");
	this.shape_6.setTransform(197.5056,60.4392);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAnBFQgVgBgNgCIgQgDIgGgBIgKgCQgYgMgQgDIgRgEQgJgDgDgFQgCgCgBgGQgBgEgCgCQgEgDgHgBIgMgCQgJgDgEgKQgGgQgEgCIgIgIIgJgIIgBAAIgBgBIgGgHIgDgEQgCgGACgGIAAAAQADgIAIgCIABAAIAEAAQALAAAKAFIADAEIABABIAJAKQAHAKAHAEIAPAKIAPAJIAIAJQAFAGAEABIAMADIANACIALAGQAGAFAFACQAIADANABIAJABIABAAIAeABQAWgCAQgIQARgIAMgPQAJgKAIgWQAGgNAHgFIAEgCQADgDAEgBQAIgBAFACQAGACADAFIABADQADAEAAAIIABABIAAADQAAAGgCAFIAAACQgEATgLANIgCADIgMAOQgZAggiAJIgCAAQgMADgXAAIgMAAg");
	this.shape_7.setTransform(197.4875,61.085);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAoBLQgWgBgNgCIgQgDIgGgBIgKgCQgagNgPgEIgSgEQgJgDgDgGIgCgIQgBgGgDgCQgDgDgHgBIgNgCQgJgDgEgLQgFgTgDgCQgDgFgFgFIgKgJIgBgBIgGgHIgCgEQgCgGACgGIAAgBQADgHAIgCIACAAIAEAAQAMAAAJAHIADAEIABACIAJALQAHALAGAFIAPALIAPALIAHAKQAFAFAFACIAMADIANADQAFACAGAEQAHAGAEACQAJADANABIAJABIABAAIAfAAQAXgCAPgJQASgJAKgTQAJgLAHgZQAFgPAHgFIADgEQAEgCAEgBQAHgCAGACQAGADACAGIABACQADAFAAAIIAAACIABADIgCALIgBACQgEAUgKAOIgCADIgLARQgYAkgiALIgCAAQgMAEgZAAIgKAAg");
	this.shape_8.setTransform(197.4556,61.7333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AApBSQgXgBgMgCIgXgEIgKgDQgbgOgPgEIgSgEQgKgDgDgHIgBgJQgBgGgCgDQgDgDgIgBIgOgCQgIgEgEgMQgFgVgCgCQgCgFgGgGIgJgKIgBAAIgHgJQgEgJAEgIQADgHAJgCIAGABQAMAAAJAIIADAEIAJAPQAHAMAGAGQAEAEAKAIIAPAMIAHAKQAFAHAFACIANAEIANADIALAHQAHAGAEACQAIAEAOAAIAKABQAUABAMgBQAYgDAPgKQASgLAKgVQAHgNAGgcQAEgRAHgGIADgEQAEgDAEgBQAIgCAGADQAFACADAHQADAGAAAKIAAAFIgCALQgFAWgJARIgMAWQgXAqghALIgCABQgOAFgeAAIgFAAg");
	this.shape_9.setTransform(197.4308,62.2703);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(25,14,16,0.102)").ss(0.1,1,1).p("AimhGQADgIAIgCQAQgBAIAGQAGAHAFAHQAHAKAFAEQAEADAKAGQAJAFAEADQAMAPAFABQAHACAFAAQAIABAEABQAFABAGAEQAHAFAEAAQAIADANgBQAGABAFgBQAGABAGAAQAMAAAIAAQAXgCAQgGQAMgGAJgLQADgEADgEQAHgKAGgWQAEgOAGgEQACgCACgBQADgCAEAAQAHgCAFAEQAFADADAGQACAGAAAKQABADgBACQAAAFgBAEQAAABAAACQgFAWgIASQgFALgGALQgVApgfAOQgCACgBAAQgPAIggABQgXABgMgCQgDAAgCAAQgKgBgIgDQgGgBgFgCQgZgOgQgGQgPgEgCgCQgJgDgDgHQgBgCAAgHQgBgGgCgDQgDgDgIgCQgJgBgDgCQgIgEgDgNQgFgTgCgEQgCgFgFgFQgGgHgDgEQgEgFgDgEQgDgJADgIg");
	this.shape_10.setTransform(197.3307,62.9475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010101").s().p("AAGBWIgFAAQgKgBgIgDIgLgDQgZgOgQgGQgPgEgCgCQgJgDgDgHIgBgJQgBgGgCgDQgDgDgIgCQgJgBgDgCQgIgEgDgNQgFgTgCgEQgCgFgFgFIgJgLIgHgJQgDgJADgIIAAAAQADgIAIgCQAQgBAIAGIALAOQAHAKAFAEIAOAJIANAIQAMAPAFABIAMACIAMACQAFABAGAEQAHAFAEAAQAIADANgBIALAAIAMABIAUAAQAXgCAQgGQAMgGAJgLIAGgIQAHgKAGgWQAEgOAGgEIAEgDQADgCAEAAQAHgCAFAEQAFADADAGQACAGAAAKIAAAFIgBAJIAAADQgFAWgIASIgLAWQgVApgfAOIgDACQgPAIggABIgRAAIgSgBg");
	this.shape_11.setTransform(197.3307,62.9475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(49,28,31,0.2)").ss(0.2,1,1).p("AifhIQADgIAGgCQAPgDAHAEQAGAFAEAFQAGAHAGACQADABAJAFQAJADAEACQALALAFABQAHAAAEAAQAIAAAEAAQAEAAAGADQAHAEAEAAQAIABANAAQAGAAAFgBQAGAAAGAAQAMAAAJABQAWgBAPgDQANgEAIgIQADgDADgDQAHgGAHgSQADgKAGgCQABgBACgBQADgBAEAAQAGAAAFAEQAEADACAGQADAHAAAKQAAACAAADQAAAEgBAEQAAACgBABQgDAWgIATQgFALgFAMQgUApgdARQgCACgBAAQgPAKgeADQgWADgNgBQgDAAgDgBQgJgBgJgDQgFgBgFgCQgZgOgPgIQgOgFgCgCQgJgEgDgHQgBgCAAgHQgBgGgCgCQgDgFgHgBQgJgDgCgBQgIgFgDgNQgEgTgCgEQgCgFgFgGQgFgHgDgEQgEgFgCgFQgDgJADgHg");
	this.shape_12.setTransform(197.2057,63.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#030202").s().p("AAGBdIgGgBQgJgBgJgCIgKgEIgogVQgOgFgCgDQgJgEgDgHIgBgJQgBgFgCgDQgDgFgHgBQgJgDgCgBQgIgGgDgMIgGgXQgCgFgFgGIgIgKQgEgGgCgEQgDgJADgIIAAgBQADgHAGgDQAPgDAHAEIAKAKQAGAIAGACIAMAFIANAFQALALAFABIALAAIAMAAQAEAAAGAEQAHADAEAAQAIACANgBIALgBIAMAAIAVABQAWgBAPgDQANgEAIgIIAGgFQAHgHAHgSQADgKAGgCIADgBQADgCAEAAQAGAAAFAEQAEADACAHQADAGAAAKIAAAFIgBAIIgBAEQgDAVgIATIgKAXQgUApgdARIgDACQgPAKgeADQgOACgLAAIgKAAg");
	this.shape_13.setTransform(197.2057,63.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(74,43,47,0.302)").ss(0.3,1,1).p("AiYhJQACgIAGgDQANgFAHACQAFACAEAEQAFAFAFAAQAEAAAIACQAIACAEAAQALAHAEAAQAGAAAEgBQAHgBAEAAQAFgBAFACQAHADAEgBQAJAAANgCQAEAAAGgBQAGAAAGAAQAMAAAJACQAWAAAPAAQAMgCAJgFQADgBACgCQAHgDAHgMQAEgIAFAAQABAAABAAQADgBADABQAGABAEAEQAEAEACAGQACAHABAJQAAADAAADQgBAEAAAEQgBABAAACQgDAWgHATQgFAMgFAMQgSAqgbATQgDADAAAAQgPAMgcAEQgVAFgOgBQgDAAgDAAQgJgBgJgDQgFgCgFgCQgYgNgQgLQgMgFgDgDQgIgFgDgHQgBgCgBgHQAAgFgDgDQgCgEgGgCQgIgDgDgDQgGgGgDgMQgEgRgCgGQgCgGgEgFQgFgHgCgEQgEgFgCgFQgCgJACgJg");
	this.shape_14.setTransform(197.1056,64.365);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#040303").s().p("AAGBjIgGAAQgJgBgJgDIgKgEQgYgNgQgLQgMgFgDgDQgIgFgDgHIgCgJQAAgFgDgDQgCgEgGgCQgIgDgDgDQgGgGgDgMIgGgXQgCgGgEgFIgHgLIgGgKQgCgJACgJIAAAAQACgIAGgDQANgFAHACQAFACAEAEQAFAFAFAAIAMACIAMACQALAHAEAAIAKgBIALgBQAFgBAFACQAHADAEgBIAWgCIAKgBIAMAAQAMAAAJACIAlAAQAMgCAJgFIAFgDQAHgDAHgMQAEgIAFAAIACAAIAGAAQAGABAEAEQAEAEACAGQACAHABAJIAAAGIgBAIIgBADQgDAWgHATIgKAYQgSAqgbATIgDADQgPAMgcAEQgTAEgNAAIgDAAg");
	this.shape_15.setTransform(197.1056,64.365);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(99,57,62,0.4)").ss(0.4,1,1).p("AiRhKQACgHAFgEQALgHAGAAQAFAAAEACQAFACAEgBQAEgCAHAAQAHAAAEgBQAKAEAEgBQAGgBAEgBQAGgCAEgCQAFgBAFAAQAGACAEgBQAJgCANgCQAFgBAFAAQAGgBAGAAQAMAAAJACQAWACAPADQAMAAAIgBQADgBADAAQAHAAAGgHQAEgEAFACQABAAABAAQADAAADACQAEACAEAFQAEADABAHQACAHABAJQAAADAAADQgBAEAAAEQAAABgBACQgCAWgGAUQgFAMgEAMQgRAqgaAXQgCACgBABQgOAOgbAGQgUAGgPAAQgDAAgDgBQgJAAgJgDQgFgCgFgCQgXgNgQgNQgLgGgDgEQgHgFgDgHQgBgDgBgGQgBgFgCgEQgDgEgFgCQgHgEgCgDQgHgHgCgMQgEgQgCgHQgCgGgDgGQgFgGgCgFQgDgFgBgFQgDgJACgJg");
	this.shape_16.setTransform(196.9806,64.9685);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#060404").s().p("AAGBrIgGgBQgJAAgJgDIgKgEQgXgNgQgNQgLgGgDgEQgHgFgDgHIgCgJIgDgJQgDgEgFgCQgHgEgCgDQgHgHgCgMIgGgXQgCgGgDgGQgFgGgCgFIgEgKQgDgJACgJIAAgBQACgHAFgEQALgHAGAAQAFAAAEACQAFACAEgBQAEgCAHAAIALgBQAKAEAEgBIAKgCIAKgEQAFgBAFAAQAGACAEgBIAWgEIAKgBIAMgBQAMAAAJACQAWACAPADQAMAAAIgBIAGgBQAHAAAGgHQAEgEAFACIACAAIAGACQAEACAEAFQAEADABAHQACAHABAJIAAAGIgBAIIgBADQgCAWgGAUIgJAYQgRAqgaAXIgDADQgOAOgbAGQgTAGgOAAIgCAAg");
	this.shape_17.setTransform(196.9806,64.9685);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(124,71,78,0.502)").ss(0.5,1,1).p("AiKg/QACgIAEgEQAKgJAFgCQAEgCADAAQAFgBAEgDQADgEAHgBQAGgBAEgDQAJAAAEgCQAFgCAEgCQAGgCAEgDQAEgCAGAAQAFAAAEgBQAJgEANgCQAGgCAEAAQAGgBAGAAQAMAAAKACQAUADAQAGQALADAIACQADAAADABQAIAEAGgCQADgBAFAEQABABABABQACAAACACQAFADADAGQADAEABAGQACAHAAAKQABADgBACQAAAEAAAEQAAACgBACQgCAWgFAUQgEAMgEANQgPArgZAZQgCADgBAAQgOARgZAHQgTAIgQAAQgDAAgDAAQgJgBgJgDQgGgCgFgCQgWgNgPgPQgKgGgDgGQgHgFgDgHQgBgDgBgGQgBgFgCgEQgCgEgFgDQgGgEgDgEQgFgHgDgMQgDgQgCgHQgCgGgDgGQgDgGgCgFQgDgGgBgFQgCgKABgJg");
	this.shape_18.setTransform(196.8804,64.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#070606").s().p("AAAB9QgJgBgJgDIgLgEQgWgNgPgPQgKgGgDgGQgHgFgDgHIgCgJQgBgFgCgEQgCgEgFgDQgGgEgDgEQgFgHgDgMIgFgXIgFgMIgFgLIgEgLQgCgKABgJIAAAAQACgIAEgEQAKgJAFgCQAEgCADAAQAFgBAEgDQADgEAHgBQAGgBAEgDQAJAAAEgCIAJgEIAKgFQAEgCAGAAQAFAAAEgBQAJgEANgCIAKgCIAMgBQAMAAAKACQAUADAQAGIATAFIAGABQAIAEAGgCQADgBAFAEIACACIAEACQAFADADAGQADAEABAGQACAHAAAKIAAAFIAAAIIgBAEQgCAWgFAUIgIAZQgPArgZAZIgDADQgOARgZAHQgTAIgQAAIgGAAg");
	this.shape_19.setTransform(196.8804,64.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(148,85,94,0.6)").ss(0.6,1,1).p("AiDgyQACgHADgFQAIgLAEgEQADgFADgCQAEgDAEgFQADgFAGgDQAGgDADgFQAJgDAEgDQAFgDADgCQAGgEADgDQAEgDAGgCQAFgBAEgBQAJgFANgEQAFgBAGgBQAFAAAGAAQAMAAAKACQAUAEAPAJQALAFAIAFQADACADACQAIAIAGADQADABAEAGQABACABACQACABACACQAEAEACAHQADAEABAGQACAHAAAKQAAADAAACQAAAFgBADQAAACAAACQgCAXgFATQgDANgEANQgNAsgXAbQgCAEgBABQgOASgXAJQgTAJgQAAQgDAAgDAAQgKAAgJgDQgFgCgFgDQgVgMgPgRQgKgIgDgFQgGgGgDgIQgBgDgBgFQgBgFgCgEQgCgEgFgEQgFgEgCgFQgFgHgDgMQgDgQgBgJQgCgFgDgGQgCgGgCgFQgCgGgBgFQgCgKABgKg");
	this.shape_20.setTransform(196.7675,63.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#080707").s().p("AAACSQgKgBgJgEQgFgBgFgDQgVgMgPgSQgKgHgDgFQgGgHgDgHIgCgIQgBgFgCgEQgCgFgFgDQgFgFgCgEQgFgHgDgNIgEgYIgFgLIgEgMIgDgKQgCgLABgJIAAAAQACgHADgGIAMgOQADgFADgCQAEgDAEgFQADgFAGgEQAGgDADgEQAJgDAEgDIAIgFIAJgHQAEgDAGgBIAJgEQAJgEANgDIALgDIALgBQAMABAKACQAUAEAPAJIATAKIAGAEQAIAHAGAEQADABAEAHIACADIAEADQAEAEACAGIAEALQACAHAAAKIAAAFIgBAIIAAADQgCAYgFASIgHAbQgNAsgXAbIgDAEQgOATgXAJQgTAJgQABIgGAAg");
	this.shape_21.setTransform(196.7675,63.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(173,99,109,0.698)").ss(0.7,1,1).p("Ah7gmQABgHACgFQAGgNADgGQADgHADgEQAEgFADgHQADgHAFgFQAFgFAEgGQAIgGADgEQAFgEACgDQAGgEADgEQAEgEAGgDQAEgCAEgCQAKgHAMgDQAGgCAFgBQAFgBAHAAQALAAAKADQAUAFAPAMQALAHAIAJQADADADADQAIALAFAIQAEAFADAIQABACABACQABACACADQADAFACAHQACAFABAGQACAHAAAKQAAADAAADQAAAEAAADQAAACgBACQgBAXgEATQgDAOgDAOQgMAsgWAeQgCADgBABQgNAVgWALQgSALgRAAQgCABgEgBQgJAAgKgEQgFgBgFgDQgUgNgPgTQgIgHgEgHQgFgHgDgHQgCgEgBgEQgBgFgCgEQgCgFgDgEQgFgFgCgFQgEgIgDgMQgDgPgBgKQgCgGgCgGQgCgFgBgGQgCgFgBgGQgBgKABgKg");
	this.shape_22.setTransform(196.6425,63.0875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0A0808").s().p("AAACmQgJAAgKgEQgFgBgFgDQgUgNgPgTQgIgHgEgHQgFgHgDgHIgDgIIgDgJQgCgFgDgEQgFgFgCgFQgEgIgDgMIgEgZIgEgMIgDgLIgDgLQgBgKABgKIAAgBQABgHACgFIAJgTIAGgLIAHgMQADgHAFgFIAJgLIALgKIAHgHIAJgIQAEgEAGgDIAIgEQAKgHAMgDIALgDIAMgBQALAAAKADQAUAFAPAMQALAHAIAJIAGAGIANATQAEAFADAIIACAEIADAFQADAFACAHIADALQACAHAAAKIAAAGIAAAHIgBAEQgBAXgEATIgGAcQgMAsgWAeIgDAEQgNAVgWALQgSALgRAAIgDAAIgDAAg");
	this.shape_23.setTransform(196.6425,63.0875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(198,114,125,0.8)").ss(0.8,1,1).p("Ah0gZQAAgHACgGQAEgOADgIQACgKADgGQADgIADgJQADgIAEgHQAEgGADgHQAIgLADgFQAEgEADgEQAEgFAEgEQAEgGAFgDQAEgDAEgDQAKgIAMgFQAFgCAGgBQAGgBAGAAQALAAAKAEQAUAFAPAQQAKAKAIALQADAEADAFQAIAOAFANQAEAIADALQABACAAADQACADABADQACAGACAIQABAFABAFQABAIABAKQAAADAAADQgBADAAAEQAAACAAACQgBAWgDAUQgDAPgDAOQgKAtgUAgQgCAEgBABQgNAXgUAMQgRANgSABQgDAAgDAAQgKAAgJgEQgFgCgFgDQgUgMgPgWQgHgHgDgIQgFgHgDgIQgCgDgBgFQgBgFgCgEQgCgEgDgFQgDgFgCgGQgEgJgCgMQgDgOgBgLQgCgGgBgGQgCgGgBgGQgBgGgBgEQgBgLABgLg");
	this.shape_24.setTransform(196.5417,62.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0B0909").s().p("AAAC7QgKAAgJgEIgKgFQgUgMgPgWQgHgHgDgIQgFgHgDgIIgDgIIgDgJIgFgJQgDgFgCgGQgEgJgCgMIgEgZIgDgMIgDgMIgCgKQgBgLABgLQAAgHACgGIAHgWIAFgQIAGgRIAHgPIAHgNIALgQIAHgIIAIgJQAEgGAFgDIAIgGQAKgIAMgFQAFgCAGgBIAMgBQALAAAKAEQAUAFAPAQQAKAKAIALIAGAJQAIAOAFANQAEAIADALIABAFIADAGIAEAOIACAKIACASIAAAGIgBAHIAAAEQgBAWgDAUIgGAdQgKAtgUAgIgDAFQgNAXgUAMQgRANgSABIgGAAg");
	this.shape_25.setTransform(196.5417,62.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(222,128,140,0.898)").ss(0.9,1,1).p("AhtgMQAAgHABgHQACgQACgKQACgMACgIQACgKADgLQADgKADgIQADgJAEgIQAHgOADgGQADgFADgEQAEgHADgFQAEgGAFgEQAEgFAEgEQAKgJAMgFQAFgDAGgBQAGgBAGAAQALAAALAEQASAHAQATQAJAMAIAOQADAGADAGQAIARAGASQADALADANQAAADABADQABAEABAEQABAHABAIQABAFABAGQABAIAAAKQAAADAAADQAAADAAAEQAAACAAACQAAAWgDAVQgCAPgDAOQgJAtgSAjQgCAFgBABQgNAZgSAOQgQAOgTACQgDAAgDAAQgKAAgKgEQgFgCgFgEQgSgLgPgYQgGgIgEgJQgEgIgDgHQgCgEgBgEQgCgFgBgEQgCgFgCgFQgDgGgBgHQgEgJgCgMQgCgNgCgMQgBgGgBgHQgBgGgBgGQgBgFAAgGQgBgKABgLg");
	this.shape_26.setTransform(196.4167,61.6625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0D0A0A").s().p("AAADQQgKAAgKgEIgKgGQgSgLgPgYQgGgIgEgJIgHgPIgDgIIgDgJIgEgKIgEgNQgEgJgCgMIgEgZIgCgNIgCgMIgBgLQgBgKABgLIAAAAIABgOIAEgaIAEgUIAFgVIAGgSIAHgRIAKgUIAGgJIAHgMQAEgGAFgEIAIgJQAKgJAMgFQAFgDAGgBQAGgBAGAAQALAAALAEQASAHAQATQAJAMAIAOIAGAMQAIARAGASIAGAYIABAGIACAIIACAPIACALIABASIAAAGIAAAHIAAAEQAAAWgDAVIgFAdQgJAtgSAjIgDAGQgNAZgSAOQgQAOgTACIgDAAIgDAAg");
	this.shape_27.setTransform(196.4167,61.6625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F78E9C").ss(1,1,1).p("ABnAAQAABfgeBDQgeBDgrAAQgqAAgehDQgehDAAhfQAAheAehDQAehDAqAAQArAAAeBDQAeBDAABeg");
	this.shape_28.setTransform(196.3,60.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0E0B0B").s().p("AhICiQgehDAAhfQAAheAehDQAehDAqAAQAqAAAfBDQAeBDAABeQAABfgeBDQgfBDgqAAQgqAAgehDg");
	this.shape_29.setTransform(196.3,60.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(227,130,143,0.918)").ss(1,1,1).p("AhsgKQABgHAAgHQAFgjACgIQACgJACgKQADgJADgJQACgHADgIQAFgLADgHQADgGADgEQADgGADgGQAEgGADgDQADgEAEgEQAIgMALgIQAEgDAFgDQAGgDAGgCQAMgEAMACQAWAEAQARQALALAJAPQADAFADAFQACAEACAFQAFALAFALQADALADAMQABACABADQABAEABADQACAHABAIQABAGABAFQABAJABAJQAAAEABADQAAAEAAADQAAADAAACQAAARgBAPQAAAHgBAHQgBAQgCAPQgIAvgRAlQgBAEgBADQgEAHgEAHQgJAQgLALQgQARgRAFQgDABgDABQgIABgIAAQgDgBgDgBQgGgBgFgDQgVgKgRgaQgFgIgEgIQgDgEgBgEQgDgEgBgFQgCgDgBgEQgCgFgBgFQgCgEgCgFQgDgGgBgGQgDgKgDgLQgCgOgCgNQgBgGgBgGQgBgHgBgGQgBgGAAgGQgBgLAAgLg");
	this.shape_30.setTransform(196.375,61.5979);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0D0A0A").s().p("AgGDTIgGgCIgLgEQgVgKgRgaQgFgIgEgIIgEgIIgEgJIgDgHIgDgKIgEgJIgEgMIgGgVIgEgbIgCgMIgCgNIgBgMIgBgWIAAgBIABgOIAHgrIAEgTIAGgSIAFgPIAIgSIAGgKIAGgMIAHgJIAHgIQAIgMALgIIAJgGQAGgDAGgCQAMgEAMACQAWAEAQARQALALAJAPIAGAKIAEAJIAKAWIAGAXIACAFIACAHIADAPIACALIACASIABAHIAAAHIAAAFIgBAgIgBAOIgDAfQgIAvgRAlIgCAHIgIAOQgJAQgLALQgQARgRAFIgGACIgMABIgEAAg");
	this.shape_31.setTransform(196.375,61.5979);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(206,118,130,0.831)").ss(0.9,1,1).p("AhygUQABgHABgHQAEgPACgIQACgLACgGQADgJADgKQADgIAEgIQAEgHADgIQAIgLADgFQAEgFACgEQAFgFADgFQAEgGAFgDQAFgEAEgDQAJgJAMgEQAFgDAGgBQAGgBAGAAQAMAAAKAEQATAGAPARQAKAKAIANQADAEADAFQAIAQAFAOQAEAJADAMQAAACABADQABADABAEQACAGACAIQABAFABAGQABAIAAAJQAAADAAADQAAAEAAADQAAACAAACQgBAWgDAVQgCAPgDAOQgKAtgUAhQgCAEAAABQgOAYgSAMQgSAOgRABQgDAAgEAAQgKAAgJgEQgFgCgFgDQgTgMgPgWQgHgIgEgIQgFgIgDgHQgBgEgBgEQgCgFgBgEQgCgFgDgEQgDgGgCgGQgDgKgDgLQgCgOgCgLQgBgGgBgHQgCgGgBgGQgBgFAAgGQgBgJAAgLg");
	this.shape_32.setTransform(196.4917,62.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0C0909").s().p("AAADCQgKAAgJgEIgKgFQgTgMgPgWQgHgIgEgIQgFgIgDgHIgCgIIgDgJIgFgJQgDgGgCgGIgGgVIgEgZIgCgNIgDgMIgBgLQgBgJAAgLIACgOIAGgXIAEgRIAGgTIAHgQIAHgPIALgQIAGgJIAIgKQAEgGAFgDIAJgHQAJgJAMgEQAFgDAGgBQAGgBAGAAQAMAAAKAEQATAGAPARQAKAKAIANIAGAJQAIAQAFAOIAHAVIABAFIACAHIAEAOIACALIABARIAAAGIAAAHIAAAEQgBAWgDAVIgFAdQgKAtgUAhIgCAFQgOAYgSAMQgSAOgRABIgHAAg");
	this.shape_33.setTransform(196.4917,62.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(185,106,117,0.749)").ss(0.8,1,1).p("Ah4gfQABgHACgGQAJgeADgFQADgIADgIQADgHAEgGQAEgFADgHQAIgKADgEQAFgDADgDQAEgFAEgDQAEgFAFgDQAEgDAFgDQAJgHALgEQAFgCAGAAQAGgBAGAAQALAAALAEQARAGAPAPQAKAJAJAMQAFADAEAEQAJANAGAKQAEAHADAIQAEAFABADQACAFACAIQACAEABAFQABAIABAJQAAADAAAEQAAADAAAEQAAACAAACQgBAWgEAVQgDAOgDAOQgLAsgVAfQgCAEgBABQgNAWgUALQgSAMgRABQgEAAgEAAQgKAAgJgEQgHgDgGgEQgTgKgOgVQgHgHgDgIQgFgHgDgIQgBgDgBgFQgCgEgCgEQgDgEgDgEQgEgGgBgHQgEgLgCgKQgDgNgCgLQgBgGgCgGQgBgFgBgGQgCgEAAgGQgCgKABgLg");
	this.shape_34.setTransform(196.58,62.6917);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0B0808").s().p("AgBCxQgKAAgJgEIgNgHQgTgKgOgVQgHgHgDgIQgFgHgDgIIgCgIIgEgIIgGgIQgEgGgBgHIgGgVIgFgYIgDgMIgCgLIgCgKQgCgKABgLIADgNQAJgeADgFIAGgQIAHgNIAHgMIALgOIAIgGIAIgIQAEgFAFgDIAJgGQAJgHALgEQAFgCAGAAQAGgBAGAAQALAAALAEQARAGAPAPQAKAJAJAMIAJAHQAJANAGAKIAHAPIAFAIIAEANIADAJIACARIAAAHIAAAHIAAAEQgBAWgEAVIgGAcQgLAsgVAfIgDAFQgNAWgUALQgSAMgRABIgIAAg");
	this.shape_35.setTransform(196.58,62.6917);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(103,59,65,0.416)").ss(0.4,1,1).p("AiPhIQACgHAFgDQALgJAFgBQAIgCACAAQACgBACgBQADgBADgBQAFgBAFgCQACgBACgBQAFgBADAAQADAAACAAQABAAACAAQACAAACABQACgBABAAQAEAAAEgBQAFgBAFgCQABAAABAAQAHgBAFgBQADgBAEABQACAAADAAQADABADABQADABACAAQADABAFAAQAGABAIABQADABAEABQACAAABAAQARAEAMAGQACAAACABQAOADALADQAAAAABAAQAEABAEAAQAKADAGgBQABABABABQACABADAAQACABACgBQACAAACAAQABAAABAAQAAABABAAQACABABACQABAAABABIABAAQAAABABAAQABABABAAQAAABABABIABAAQACADADAFQACADABAGQABAHgBAIQAAADgBADQgBAFgBAGQgCAJgCAJQgDAJgEAKQgFALgFALQgJATgMAOQgCADgCACQgKANgMAHQgBABgCAAQgGAEgHACQgOAGgQACQgEAAgEAAQgEAAgEAAQgKgBgGgCQgCAAgCgBQgHgCgHgDQgCAAgCgBQgFgCgEgCQgPgKgKgKQgFgDgEgDQgDgCgCgDQgGgDgCgDQgDgCgBgCQgDgDgBgFQAAAAAAgBQgCgCgBgFIAAgBQgCgEgCgEQgBAAAAAAQgDgEgEgDQgBgBgBgBQgEgDgCgDQgEgFgCgGQgBgDgBgDQgCgJgCgHQgBgEgBgCQgBgEgCgDQgBgCgBgCQgCgDgBgDQgBgCgBgCQgCgEgBgEQgBgBAAgCQgDgIACgIg");
	this.shape_36.setTransform(196.8639,64.8667);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#060404").s().p("AALBvQgKgBgGgCIgEgBIgOgFIgEgBIgJgEQgPgKgKgKIgJgGIgFgFQgGgDgCgDIgEgEQgDgDgBgFIAAgBQgCgCgBgFIAAgBIgEgIIgBAAQgDgEgEgDIgCgCIgGgGQgEgFgCgGIgCgGIgEgQIgCgGIgDgHIgCgEIgDgGIgCgEIgDgIIgBgDQgDgIACgIIAAgBQACgHAFgDQALgJAFgBIAKgCIAEgCIAGgCIAKgDIAEgCIAIgBIAFAAIADAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIADgBIAIgBIAKgDIACAAIAMgCIAHAAIAFAAIAGACIAFABIAIABIAOACIAHACIADAAQARAEAMAGIAEABIAZAGIABAAIAIABQAKADAGgBIACACIAFABQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAIAEAAIACAAIABABQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAIACABIABAAIABABIACABIABACIABAAIAFAIQACADABAGQABAHgBAIIgBAGIgCALIgEASIgHATIgKAWQgJATgMAOIgEAFQgKANgMAHIgDABQgGAEgHACQgOAGgQACIgIAAIgIAAg");
	this.shape_37.setTransform(196.8639,64.8667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},13).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[]},1).wait(16));

	// eyes
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AuUmGQDVUGGl0GAgblsQJHXnFp3n");
	this.shape_38.setTransform(214,18.7124);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgmiLIgFAAQAaikBuh8QBuh7CQgdIBhgKIBfAKQCRAdBvB7QBuB8AbCkIgaAAQi0LzjtAAQjsAAkjrzgAufilIgEAAQASikBKh8QBLh7BggdIBBgKIBBAKQBhAdBKB7QBLB8ARCkIgRAAQjTKCifAAQieAAhrqCg");
	this.shape_39.setTransform(215.1,-3.7876);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AgbitQI6LrF2rrAuUjHQCIKdHyqd");
	this.shape_40.setTransform(214,-0.3968);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgmAzIgFAAQAaijBuh8QBuh7CQgdIBhgKIBfAKQCRAdBvB7QBuB8AbCjIgaAAQi7F2jsAAQjsAAkdl2gAufAZIgEAAQASijBKh8QBLh7BggdIBBgKIBBAKQBhAdBKB7QBLB8ARCjIgRAAQj6FPieAAQifAAhElPg");
	this.shape_41.setTransform(215.1,-22.8968);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgbANIOwAAAuUgMIJ6AA");
	this.shape_42.setTransform(214,-19.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AOKDuIuwAAIgFAAQAaikBuh6QBuh7CQgeIBhgKIBfAKQCRAeBvB7QBuB6AbCkgAkkDUIp7AAIgEAAQASikBKh6QBLh7BggeIBBgKIBBAKQBhAeBKB7QBLB6ARCkg");
	this.shape_43.setTransform(215.1,-41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_41},{t:this.shape_40}]},16).to({state:[{t:this.shape_43},{t:this.shape_42}]},2).to({state:[]},2).wait(36));

	// body
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(120.1,-219.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(120.1,-219.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},25).to({state:[]},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-219.5,327.6,447);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("Play", "56px 'Segoe UI Emoji'", "#FFFFFF");
	this.text.lineHeight = 77;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(-186,-41.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F78E9C").ss(1,1,1).p("AOOAAQAAF5kKELQkLEKl5AAQl4AAkLkKQkKkLAAl5QAAl4EKkLQELkKF4AAQF5AAELEKQEKELAAF4g");
	this.shape.setTransform(-137,3.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqCKEQkLkLAAl5QAAl4ELkKQEKkLF4AAQF5AAELELQEKEKAAF4QAAF5kKELQkLEKl5AAQl4AAkKkKg");
	this.shape_1.setTransform(-137,3.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229,-88.9,184,184);


(lib.dresser = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,549.5,418);


(lib.cloudReplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Replay", "56px 'Segoe UI Emoji'", "#FFFFFF");
	this.text.lineHeight = 77;
	this.text.lineWidth = 169;
	this.text.parent = this;
	this.text.setTransform(192,65.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("Az/MXQosAAmIj3QmJj2AAlbQAAlcGJj2QGIj3IsAAQFFAAEOBVQA3hSBNhIQEMj7F6AAQF7AAEMD7QBdBXA9BkQEijGGLAAQGvAAExDrQExDrAAFLQAAFKkxDrQkxDrmvAAQiOAAiAgaQhIBgh3BSQkuDQmrAAQkDAAjUhNQglBShEBEQiTCTjPAAQjPAAiSiTQh6h6gVikQh1ANh+AAg");
	this.shape.setTransform(262.075,121.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("At9QoQh6h6gVikQh1AMh+AAQosABmIj3QmJj2AAlbQAAlcGJj2QGIj2IsAAQFFAAEOBUQA3hRBNhJQEMj6F6gBQF7ABEMD6QBdBXA9BlQEijGGLAAQGvAAExDqQExDrAAFLQAAFLkxDqQkxDqmvABQiOAAiAgaQhIBfh3BSQkuDRmrAAQkDgBjUhMQglBShEBEQiTCSjPAAQjPAAiSiSg");
	this.shape_1.setTransform(262.075,121.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,526.2,244.1);


(lib.cloud_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("AsuJ1QkkAAjPjPQjOjOAAkjQAAkkDOjPQDPjOEkAAQDBAACcBaQArheBQhQQCxixD6AAQD7AACxCxQCACAAkCnQBfg0B0AAQC5AACDCDQBWBWAdBsQAVARATAUQChChAADjQAADkihChQihChjkAAQiUAAh3hEQgjCWh0B0QilCljpAAQjoAAililQididgHjbQixCAjmAAg");
	this.shape.setTransform(152.025,104.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzNtQididgHjbQixCAjmAAQkkAAjPjPQjOjOAAkjQAAkkDOjPQDPjOEkAAQDBAACcBaQArheBQhQQCxixD6AAQD7AACxCxQCACAAkCnQBfg0B0AAQC5AACDCDQBWBWAdBsQAVARATAUQChChAADjQAADkihChQihChjkAAQiUAAh3hEQgjCWh0B0QilCljpAAQjoAAililg");
	this.shape_1.setTransform(152.025,104.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,306.1,210.4);


(lib.cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("Az/MXQosAAmIj3QmJj2AAlbQAAlcGJj2QGIj3IsAAQFFAAEOBVQA3hSBNhIQEMj7F6AAQF7AAEMD7QBdBXA9BkQEijGGLAAQGvAAExDrQExDrAAFLQAAFKkxDrQkxDrmvAAQiOAAiAgaQhIBgh3BSQkuDQmrAAQkDAAjUhNQglBShEBEQiTCTjPAAQjPAAiSiTQh6h6gVikQh1ANh+AAg");
	this.shape.setTransform(262.075,121.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("At9QoQh6h6gVikQh1AMh+AAQosABmIj3QmJj2AAlbQAAlcGJj2QGIj2IsAAQFFAAEOBUQA3hRBNhJQEMj6F6gBQF7ABEMD6QBdBXA9BlQEijGGLAAQGvAAExDqQExDrAAFLQAAFLkxDqQkxDqmvABQiOAAiAgaQhIBfh3BSQkuDRmrAAQkDgBjUhMQglBShEBEQiTCSjPAAQjPAAiSiSg");
	this.shape_1.setTransform(262.075,121.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,526.2,244.1);


(lib.cat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lips
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgMAjQgPgDgMgHQgRgKAAgPQAAgNARgLQARgKAWAAQAXAAARAKQARALAAANQAAAPgRAKQgDACgDAB");
	this.shape.setTransform(221.4,97.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AitBcQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgNQAFgKAAgPIgCgaQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEACQgGAHgJAEQgKAFgMACIgXABIgBAFQgMgEgQACIgHACIAEgFIgRgBQgdgDgcgPIgGgDQABARgDAMQgDAQgJALQgKAIgFAFQgIAIgCAIIgJgEIgFADQgHAEgHACQgHACgNABIhCACIgLgBg");
	this.shape_1.setTransform(224.2972,103.255);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwB1QgLgEgOgHIgqgcQgMgIgIgHQgEgEgGgHIgBgBIgHgDIgFACQgHAEgHACQgHACgNABQgzACgaAAQgMAAgFgEQgEgEgBgGQAAgGAEgEQAFgGAPAAIBEgDQALAAAFgBIAOgGQAWgLAHgMQAFgKAAgPIgCgbQgPgCgMgIQgQgKAAgOQAAgPAQgKQARgKAXAAQAYAAAPAKQARAKAAAPQAAAOgRAKIgGAEIAEACQAUAMAbADQAQACAhgBQARAAAKgDQAHgCADgFIADgIQAFgGACgDIADgMIAGgHIADgOQACgMAKgFQAFgCAFABQAGACADAEQADAFgDAOIgFATIgQAeQgHANgEAEQgGAHgJADQgKAFgMADIgJAAIADAEQADAHAAAOIAABAQAAANgCAGQgDAHgGAGQgFAHgGADQgIAEgMAAQgQAAgRgHgAgLgEQgDAQgJALIgHAFIACACIANANIAoAcQAPALALAEQAKAFAMABQAOACAEgIQACgCAAgGIAAg4QAAgLgCgFIgJgNIAAgBIgIABIgHABIAEgFIgRgBQgdgDgcgPIgGgDQABASgDALg");
	this.shape_2.setTransform(224.2972,106.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AitBcQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgNQAFgKAAgPIgCgaQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEACQgGAHgJAEQgKAFgMACIgXABIAAAAQgRgDgSAAIgQACQgcgDgbgPIgGgDQABARgDAMQgEASgKALIgLAGQgMAJgCAMIgHgEIgFADQgHAEgHACQgHACgNABIhCACIgLgBg");
	this.shape_3.setTransform(224.2972,103.255);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA+B8IgdgFQghgKgMgIQgUgNgXgmIAAgBIgCgBIgFADQgHAEgHACQgHACgNABQgzACgagBQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgMQAFgKAAgPIgCgbQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEADQgGAHgJAEQgKAFgMACIgEAAIABAJIAAA8QAAAQgCAHQgCAIgFAIQgGAKgIAGQgKAHgLADIgNABIgEAAgAgLgDQgEARgKALIgHADIADAFQAEAJAMAQQAJALAGAFQAGAFAMAEQARAGATADQAJABAEgBIAOgEQAAgDADgDIAEgFQADgDAAgIIAAg8IgBgNIgCgFIgWgBIgQABQgcgDgbgOIgGgEQABASgDAMg");
	this.shape_4.setTransform(224.2972,106.3813);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AitBcQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgNQAFgKAAgPIgCgaQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEACQgGAHgJAEQgKAFgMACIgXABIgBADIgKgBIgWAAIgBAAIACgCIgRgBQgdgDgcgPIgGgDQABARgDAMQgDAOgGAKIgFAEIgNAOIgOAMIgBAAIgEgCIgFADQgHAEgHACQgHACgNABIhCACIgLgBg");
	this.shape_5.setTransform(224.2972,103.255);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AApB7QgPgBgMgFQgUgIgYgYQgUgTgHgQIgBgCIgEADQgHAEgHACQgHACgNABQgzACgagBQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgMQAFgKAAgPIgCgbQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEADQgGAHgJAEQgJAEgJACIACAEQAEAIgBARIgCAiQgBAOgCAHIgHANIgFAJQgIAQgKAHQgJAGgSABIgOAAIgSgBgAgLgDQgDAMgGAKIgFAFIgHAHIACAEQAEAKAOAPQAHAHADABIAIAFQADACADAGQAFAGANADQASAEATgBQAHAAAEgCQAGgCAIgMQAIgNACgIIABgTQAEgTgCgJQgBgDgHgOIgFAAIgWAAIgBAAIACgDIgRAAQgdgDgcgPIgGgEQABASgDAMg");
	this.shape_6.setTransform(224.2972,106.395);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AitBcQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgNQAFgKAAgPIgCgaQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEACQgGAHgJAEQgKAFgMACIgXABIAAABIgEAAIgQABIgOAAIACgCIgRgBQgdgDgcgPIgGgDQABARgDAMQgDANgFAJIgBABIgKAGIgMAHIgLAJQgKAHgBACIgBACIgLAFQgHACgNABIhCACIgLgBg");
	this.shape_7.setTransform(224.2972,103.255);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAyCCQgJgDgLgJIgRgPIgUgOIgxgmIgIgHIgBAAIgLAFQgHACgNABQgzACgaAAQgMAAgFgEQgEgEgBgGQAAgGAEgEQAFgGAPAAIBEgDQALAAAFgBIAOgGQAWgLAHgMQAFgKAAgPIgCgbQgPgDgMgHQgQgKAAgOQAAgPAQgKQARgKAXAAQAYAAAPAKQARAKAAAPQAAAOgRAKIgGADIAEADQAUAMAbADQAQACAhgBQARAAAKgDQAHgCADgFIADgIQAFgGACgDIADgMIAGgHIADgOQACgMAKgFQAFgCAFABQAGACADAEQADAFgDAOIgFATIgQAeQgHANgEAEQgGAHgJADIgOAFIACAFQAEANAAAWQABAkgEASQgEATgLAOQgMAQgQAFQgIADgNABIgIAAQgJAAgGgBgAgLgLQgDAMgFAKIgBAAIgKAHIgIAEIACAEQADAEAIAGIBFA1QANALAJABQAQACANgNQAJgJAEgSQADgMAAgeQAAgNgDgIIgFgKIgCgHIgCAAIgQABIgOAAIACgCIgRgBQgdgDgcgPIgGgDQABARgDAMg");
	this.shape_8.setTransform(224.2972,107.1393);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AitBcQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgNQAFgKAAgPIgCgaQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEACQgGAHgJAEQgKAFgMACIgvgBQgHgBgEACIgBABIgNgBQgdgDgcgPIgGgDQABARgDAMQgEASgJALIgJAFIgOAOIgFAHIgFgDIgFADQgHAEgHACQgHACgNABIhCACIgLgBg");
	this.shape_9.setTransform(224.2972,103.255);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABFCIIgOAAQgJAAgFgBQgHgDgJgGIghgcIgTgUIgjgnIgBgBQgHAEgGACQgHACgNABQgzACgagBQgMAAgFgDQgEgEgBgGQAAgGAEgFQAFgFAPAAIBEgDQALAAAFgCIAOgFIAFgDIABgBQARgIAGgLQAFgLAAgPIgCgbQgPgCgMgHQgQgKAAgPQAAgOAQgKQARgLAXAAQAYAAAPALQARAKAAAOQAAAPgRAKIgGADIAEADQAUAMAbADQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFATIgQAeQgHANgEAEQgGAGgJAEIgJAEIACAHQAHAngEAVQgCAJgFAOQgCAJgEAGIgJANIgHAPIgKAPQgGAKgFADQgFACgHABIgNgBgAgLgQQgEARgJALIgJAFIgCACIAAABIAqA0IARANIAUAQQADADAEABIAHAAIAPAAIAHgBQADgDACgFIAQgdQAKgSACgMQAFgUgIghIgBgIIgeAAQgHgBgEACIgBAAIgNgBQgdgDgcgPIgGgEQABASgDAMg");
	this.shape_10.setTransform(224.2972,107.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AitBcQgMAAgFgDQgEgEgBgGQAAgHAEgEQAFgGAPAAIBEgCQALAAAFgCIAOgFQAWgMAHgNQAFgKAAgPIgCgaQgPgCgMgHQgQgKAAgPQAAgOAQgLQARgKAXAAQAYAAAPAKQARALAAAOQAAAPgRAKIgGADIAEADQAUALAbAEQAQACAhgBQARAAAKgDQAHgDADgFIADgIQAFgFACgEIADgLIAGgIIADgNQACgMAKgFQAFgDAFACQAGABADAFQADAFgDAOIgFASIgQAfQgHANgEACQgGAHgJAEQgKAFgMACIgXABQgBAKgHALQgFAHgFAFIgGAGQgLAKgNAIIgHAEIgGAGQgDADgKAAIggAAIgXgBQgRgCgOgIIgFADQgHAEgHACQgHACgNABIhCACIgLgBgAgLAbQgEATgKALQAJACAPAAIAUAAIAFgBIAGgCQAUgNAFgEQAHgHAEgFIAFgHIgRgBQgdgDgcgPIgGgDQABARgDAMg");
	this.shape_11.setTransform(224.2972,103.255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},5).to({state:[{t:this.shape_3},{t:this.shape}]},5).to({state:[{t:this.shape_4},{t:this.shape}]},5).to({state:[{t:this.shape_5},{t:this.shape}]},5).to({state:[{t:this.shape_6},{t:this.shape}]},5).to({state:[{t:this.shape_7},{t:this.shape}]},5).to({state:[{t:this.shape_8},{t:this.shape}]},5).to({state:[{t:this.shape_9},{t:this.shape}]},5).to({state:[{t:this.shape_10},{t:this.shape}]},5).to({state:[{t:this.shape_11},{t:this.shape}]},5).wait(5));

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F59A57").s().p("Ag2AbQAqgnA2gZQAGgDAHAAQAAAGgCAHQgPAmhcAeIAAgOg");
	this.shape_12.setTransform(186.325,229.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F39A56").s().p("AghAUIAAgaQAbgOAbgLQAGgCAHAAQAAAHgDADQgfAeghAbIAAgOg");
	this.shape_13.setTransform(170.575,234.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F69A57").s().p("AgYAUIAAgaQAHgGAEgJQADgGAAgGQAHAAADADQA7AzhTANIAAgOg");
	this.shape_14.setTransform(194.2585,213.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F29A55").s().p("AAzBBQhBg5gvhMQBPAsApBQQADAFAAAIQgHAAgEgEg");
	this.shape_15.setTransform(195.225,203.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F59B58").s().p("AAOCXQAAgIgDgFQgdhBgkg7QBfgvgphnIALgFQADgBAAgIQAgBVAIBqIABANIgHAAQACAlgWAFIAAAbIAAANIAAAPIgOAAg");
	this.shape_16.setTransform(235.625,255.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F69957").s().p("AghgTQAdALAkAIQACABAAAGQgHAAgEAEQgOAJgKAAQgWAAgKgng");
	this.shape_17.setTransform(221.275,223.1225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F17626").s().p("AgcgCQBzgBhzAHg");
	this.shape_18.setTransform(254.9875,277.4944);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F17527").s().p("AgUgIQgDgCAAgHQAxAjgCAAQgDAAgpgag");
	this.shape_19.setTransform(258.5756,270.7332);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA7A31").s().p("AjFB0QBLhZAuh0QACgGAAgHIAAgOQAXgEAKgUQABgDAHAAIAOAAIA2AAIANAAIBgAAIAOAAQAHAHAIAEQAFADAHAAQAAAHADAFQAgBDgwAsIAAAMIAAAOQgHAAgGADQgIAEgHAHIAAANQgHAAgFADQgeARgoAIQgHAAgGACQgqALgoAOIAAAOQgHAAgGACQg2AThGAGIgOABIgBAAQgUAAAIgcgAA+giIAAAHQBngHhQAAIgXAAgABqhrQBbA6hehDQAAAHADACg");
	this.shape_20.setTransform(245.8716,280.6142);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F79D56").s().p("AgXACIAAgGQBAAJgXAAIgpgDg");
	this.shape_21.setTransform(133.9188,283.1056);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F79C58").s().p("AB1HZQCChPgZBGIgSAHQgbANgXAAQgVAAgQgLgAjJhTQgVgTgDgnQAwhIgNCLIgBAAQgBAAgJgJgAhQmuQgIgZAAgcQBGA3g4AOg");
	this.shape_22.setTransform(119.8443,248.9511);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F79C59").s().p("AiODOQgCgFAAgHQAnBQgBAAQAAAAgkhEgABYkOQBzgJhzAQg");
	this.shape_23.setTransform(120.025,203.1066);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F69D58").s().p("AgjgKQgCgBAAgGQBPAjgEAAQgDAAhGgcg");
	this.shape_24.setTransform(133.969,162.8366);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F79C57").s().p("ABhJeQgDgDAAgHQB7hCgHA0QAAABgHAAQgSAyghAAQgYAAgfgbgAHrDVQBWABhWAUgAIGAkQBXAQhBAUIgGABQgSAAACglgAFylAQgCgGAAgGQAeA5gBAAQgBAAgagtgAozpeQCHg/iDBaIgEACQgHAAAHgdg");
	this.shape_25.setTransform(174.2348,231.222);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F79D57").s().p("AAEKXQBSASg8AGgAgyqjQA5gdg5Axg");
	this.shape_26.setTransform(125.676,221.7643);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E04E3C").s().p("ABnB/QhPgcg5gzQgBgHgDgEQgsgxgig+IAAgOIAAgpIANAAQAgARAPAjQABADAHAAIBiBbQAEAEAGgBQAAAIgCAAQgSAGgUAAQAhA3A7AgQADACABAHQgHAAgHgDg");
	this.shape_27.setTransform(144.55,149.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EC782C").s().p("Ag8WuIgcAAIgOAAIgNAAQgIAAAAgDQgLgUgkAKIAAgHQgdABACgWQgHAAgGgDQgPgKgbgBQgHAAgGgCQgegRgogIIAAgOQgGAAgGgCQgegRgogIQAAgHgDgFQgEgIgGgHQgIAAgFgDQgPgKgbgBQAAgHgCAAQgagHgOgNQgGAAgHgCQgvgNgWgoQgHAAgFgCQgugPgKgzQAAgHgDgGQgEgIgHgHQgHAAgCgDQgSgYgOgbQgHAAgFgDQgkgSAHg9QgHAAgBgDQgYgpAFhCIAAgNIAAgcIgHAAQgHhfAAhgIAOAAIAAgOIAAgNIAAgOIAAgpQAWgFgIgkQgBgHAAgHIAAgNIAAgcQAWACgGgdQgCgHAAgHIAAgNQAYg6AKhOQAAgBAHAAQAHgHAEgIQACgGABgGIAAgOIAAgpQAWgFgHgkQgCgHAAgHIABgNQAGg+gUgiIAAgOQgHAAgGgDQgIgDgGgHIgPAAIgNAAQgHAAgGADQgjAKgiAOIAAANQgBAHgDAFQgOATglgDQAAAHgEADQgDADgHAAQAAAHgDAEQgZAegpAOIgNAAQAAAHgDACQgzAggqgbQgHAAgEgDQgQgKgcgBQgGAAgGgCQgngPgEgzIAAgOIAAhfIAOAAIAAgNIAAgpQAVgOAMgYQACgDAGAAIAAgOIAAgbQAOgOAQgKQAEgEAIAAIAAgNIAAgOQApgvAsgtQAEgEAGAAIAAgNIAAgOQAqgMAdgaQAFgDAGAAQA0glBIgQQAGgCAIAAIAAAOIBfAAIAOAAIA3AAIANAAQAcAHAYAMQADACABAGQAQAgAnAIQAGABAHAAIAOAAQApAOAMAqQACAGAAAHQgBANAGALQABADAHAAQAmAKgKA7IgBANIANBSIABAOIAAEQIAAAOIAOAAIABANQAJA6gYAZIAAAbIAAAOIABANQAJBcgYA7IAAAbIAAAOIAAEsIAAAOQgEAuAPAYQADAFAAAHIAAAbIAAAOQAHAcAMAYQABADAIAAIAAAbIAAAOQAGAAAEADQADAEAAAGQAHAHAEAIQADAGAAAHIAAANQAsBCA/AwQACADAAAGQCOA6AlCUIgLAFQgDABAAAHIgNAAgAgrpJQgcgbgEg0QAAgHgBgGQgJgmgRgfIgGAAQgIhtABhtQAGgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB0AWQABAAAAAHQAugFATAWQAEADgBAHIgNAAQAOAOgDAJQgcBig2CPQgsBxg+AUIAAANQgHAAgDgDgAFCvtIgOABQgkAHAJgkQAagcAngSQADgCABgGIAAgOQAvgiA/gTQAGgCAGAAIAAgNQApgIAegRQAFgDAHAAIBSAAIAOAAIAAgNIAOAAIAAgOICxAAIAOAAIAAAOQAAAGgCACQgMAFgNAAQAAAHADADQBuBsg6COQgOANgDgBQiGheiXhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgANYzIIAAgOIAAgbQAbgcAUgmQABgDAHAAQAAAHgBAHQgGAbgUAOIAAAOIAAAOIgIAAQACAbgUAAIgCAAgANYzIIAAAAgASy0rQgfgfgbgiQAzAKAPAtQACAGAAAHQgGAAgEgDgAOP1DIAAgOQAegLAQgbQACgDAHAAQAAAHgCAGQgRAlgkASIAAgNgARt1vQgtgfhRAGIgOAAIgNAAIAAgNQBLgyA6A1QADAEABAGQANAHAKALQAEADAAAHQgHAAgEgDg");
	this.shape_28.setTransform(121.25,145.4173);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EF7625").s().p("AgNAOQgQgNgEgWQBhABgsAjQgHAHgJAAQgHAAgKgIg");
	this.shape_29.setTransform(262.321,150.8504);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F07626").s().p("AgUgJQgEgCAAgHQAzAlgDAAQgCAAgqgcg");
	this.shape_30.setTransform(270.9571,146.4451);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EF7526").s().p("AgXgJQgDgCAAgHQA4AlgDAAQgDAAgvgcg");
	this.shape_31.setTransform(215.0505,177.8507);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E08A51").s().p("ABLAHIgNAAIgOAAIh7AAIgNAAIAAgNICjAAIAOAAIAAANIgOAAg");
	this.shape_32.setTransform(219.9,183.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EF7527").s().p("AgUAAQBTgOhTAUg");
	this.shape_33.setTransform(213.1,167.858);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EF7525").s().p("AgogjQCeA9iPAKIgBAAQgUAAAGhHg");
	this.shape_34.setTransform(239.7588,163.2265);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F17525").s().p("AgZgIQgCgBAAgHQA6AhgDAAQgDAAgygZg");
	this.shape_35.setTransform(235.7316,172.2567);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F07625").s().p("AiPAuQgEgDAAgHQAtAzgBAAQgCAAgmgpgABIhPQgBAAAAgHQBbANgRAAQgMAAg9gGg");
	this.shape_36.setTransform(240.825,160.1138);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EB792F").s().p("ABKMoIg3AAQgHAAgFgCQgHgEgHgHQBihqBMiAQADgGAAgGIAOAAQAAAGgDAGQguB1hLBZQgIAdAWgBIAOAAIAAANIgOAAgADgLyQAqgOApgMQAHgCAHAAIAAAOQgHAAgFADQghAVg0ADIAAgNgAC4IJIAAgbQAWgFgCgkIAHAAIgBgOQgIhrgghUIgCgNQgehqhbgtQAAgHgDAAQgkgJgdgMQAAgGgBAAQhRgHhSAAIAAANQgIAAgGACQgpAMgpAOIAAAOQgHAAgGACQg3AagqAoIAAAOQgHAAgDADQhFBEg6BPIAAAOQgHAAgBACQgPAkggAQIAAAOIgNAAIgOAAQAAgHgDgFQgEgJgHgGQAdgoAXgsQADgFAAgHIAAgOQAegLAJgeQACgHAAgGQAigcAfgfQAEgDAAgHQBHhPBogxQADgCAAgHQBUgMg8gzQgEgEgHAAQAAgHgDgDQhohlg5iVQA/A2AzBCQACADAHAAQAvBNBCA5QAEADAHAAQCJAiB7AtQAGACAHAAIAAAOQAkASAXAhQACAEAHAAQAAAGAEAEQADADAHAAIAAAOQARAlAVAhQADAFAAAHIANAAQAAAbALAQQADAFAAAHIAAANIAAAOIAAAOIAAANQAYAmgJBIIgBANQgRBBA6gJIAOgBQA3AAA2AHIAAAHIgNAAIhgAAIgOAAIg3AAIgOAAQgGAAgBACQgKAVgXAEIAAgOgABKlFIikAAQAAgHgCgGQgbg9gMhNQAtgDAJgmQABgGAAgHQANgHALgKQAEgEAAgHIANAAIBEAAIAOAAQA4gEAkgbQADgDAAgHIAAgNQA2gPAngfQADgCAAgHQA6gRAegwQABgDAHAAQAogPAZgdQAEgEAAgHQBqgoBKAyQAFAEAHAAQgJAdAVAEQABABAAAHQAXAYgIA6IgBANQAAAHgEAEQgDADgHAAQgHAAgCADQgfAng4ANIAAANIgNAAQgHAAgHACQhBAXhIAQQgHAAgDAEQhoBziSBJIgOAAgAhJmBQBmA9hphGQAAAHADACgACDm4QBuA4hwhAQAAAHACABgABAn6QBSBWhWhhQAAAHAEAEgAhancIAAAHQAzgMgKAAQgHAAgiAFgACrnlQCRgLigg+QgGBKAVgBgAGZp3QASAPAQgOQArgkhhgBQAEAXAQANgAEYp5QCXAPiYgWQAAAHABAAgAHoq7QBdA+hghHQAAAHADACg");
	this.shape_37.setTransform(220.0496,215.4534);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F69D57").s().p("AHzHTQgCgCAAgGQBSAngEAAQgEAAhIgfgAAGHgQgDgBAAgHQBBAagFAAQgEAAg1gSgAo7BaQAzAKgrASIgFACQgKAAAHgegAFNnqQgBAAAAgHQBEAPgKAAQgHAAgygIg");
	this.shape_38.setTransform(158.5644,240.8931);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F49D5B").s().p("Aj9NCQABgHgDgBQgrgQgygDQgBgHgDgCQgzggg3gcQgHAAgEgDQgRgRgNgVIAcAAIANAAQAAgHADgBIALgFQgliUiOg6QAAgGgCgDQg/gwgshCIAAgNQAAgHgDgGQgEgIgHgHQAYgYgJg6IgBgNIAAgOIAAhtQAYgtgJhNIgCgOIAAgOQAYgRgJgzIgBgOQAfgzAJhIIACgNIAAgOQBWiSBLicQADgGAAgGQA5gvAXhNQACgGAAgHQA6gmAXhIQABgGAAgHIAOAAIAMA3IABANQABAHACAGQASA0gwAfQAYAtA6ggIAGALQAJAQAbABQAAAHACACQAdASgtAAQBeAnAjBEQABADAHAAQEEA6DngmQABAAAAgHQAjBFAmBBQADADAGAAIAOAAQAAAbAHAaQAAACAGAAQAOAvAUAuQABACAHAAQAGAHAEAIQADAGABAHQAZBMAvA5QADADAHAAQgBAHAEAEQAEADAGAAIAAAOQgGAAgGgDQh8guiJghQAAgHgEgGQgohRhQgrQgHAAgDgDQgyhCg/g2QA4CVBpBlQADADAAAHQAAAGgDAGQgDAIgIAHIAAAbIAAAOQABAHgDABQhoAxhIBPQgHAAgFACQgdALgbAOIAAAbIAAAOQAAAHgCAGQgKAegdAMIAAANQAAAHgDAGQgWAsgdAnQAHAHAEAIQADAGAAAGIANAAIAOAAIAAgNQAegRAQgjQABgDAHAAIAAgOQA6hOBFhFQADgDAHAAQBdgeAPgnQABgGAAgHIAAgOQAqgNApgMQAGgCAIAAIAAgNQBRAABSAHQABAAAAAGQAPA8AqgdQAEgEAIAAQBbAtAeBqIABANQAAAHgCACIgLAFQApBmhgAwQAkA8AeBBQACAFAAAHQAAAHgDAFQhLCAhjBqQAHAHAHAEQAGADAHAAIA3AAIANAAQAAAHgBAAQhrAOhTAiQgIAAgGABQgqAMgpAOIgNABIjAAaIgNAAIgtAAQjFAAipgbgAk0LwQAkAVA0gXIASgIQALghgWAAQgZAAhGArgADUK5QAAAHADADQBLA/AghWQAGAAABgBQADgXgWAAQgcAAhGAlgAHOKYQCYBEibhMQAAAHADABgAgfKlQBzAph1gwQAAAHACAAgAlTK1QA7gGhSgRgAkzJuQBgAHhhgOIABAHgAJhFPQBWgUhWgBgApYE8QAqgSgygLQgKAlASgIgAqKCJQADAmAVAUQAKAKABgCQAIhbgRAAQgKAAgQAZgAKTCtQBBgUhXgQQgDArAZgHgAo1AaQBJCOhMiaQABAHACAFgAn5iYIAGARQA4gOhGg3QAAAbAIAZgAHpjbQA4Bgg7hsQAAAGADAGgAEnklQB2AVh3gcQAAAHABAAgAlPnCIAAAHQBKgLgUAAIg2AEgAm8n5QgKAlAOgKQBNg1gPAAQgLAAg3AagAk+pRQCUA+iXhFQAAAGADABgAmhqdIAAAVQAlgggKAAQgFAAgWALg");
	this.shape_39.setTransform(162.35,221.1428);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E88139").s().p("AgZgaIAOAAIANAAQAAAHgDAEQgDADgHAAQgJAjAkgHQAGgCAHAAQAAAHgCABQgRAFgKAAQglAAAMg1g");
	this.shape_40.setTransform(171.0994,130.8457);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA7E36").s().p("Ag2gJQAOgHAOgEQAGgCAHAAQALAWArgIIAOgBQAAAHgDACQgnAXgZAAQgeAAgMggg");
	this.shape_41.setTransform(165.775,119.5839);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E15240").s().p("AAbCyIgNgBQhsgOhFg2QAAgHgDgBQg7ghgig3QAUABATgHQACAAAAgHQAHAHAIAEQAFACAHAAQAOAHAOAFQAGACAHAAQArAoBDAOIAOABQBIAJBNAEIAOABIBSAAIAOAAQAOgOAbAAIAOAAQAkAJAKgUQACgDAGAAQAuAFAZgPQAFgDAHAAIAAANIAAAOQAAAHgEADQgKAKgOAHQAAAHgBAGQgJAmgtAEIgNAAQgHAAgFADQgeARg2gGQAAAGgBABQgxAHgrAAQg+AAgzgOgAmahfIgBgNIgNg3IAAgOIAAgOIAOAAQAXAEADAYIABANIgNAAIAAApIAAAOIgOAAg");
	this.shape_42.setTransform(172.625,151.4153);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#322314").s().p("AmeDXQgUgbgRgfIAAgNIAAgOQAUgVAggMQADgBAAgHIBgAAIANAAQAXAEAKAVQABACAHAAQAAAHgBABQgoANhfgHIAAAOIgHAAQACA5gXAZQAAgHgEgEgAEgicIAAgbQAXgEADgYIABgNQBggIAhA7QACADAGAAQAAAHgDADQgiAdhkgnIAAAOQgHAAgFADQgJAEgGAHIAAgOg");
	this.shape_43.setTransform(209.6,75.5077);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3C230F").s().p("AgagTIAAgOQAagHARgRQAEgDAGAAIAAANQgEAYgXAEIAAAaIAAAOIAAANQgGAAAAACQgIAZgFAAQgIAAABhQg");
	this.shape_44.setTransform(238.3667,59.1104);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#361F0E").s().p("AAIAhQglgJALg5QARAfATAZQAEAEAAAHQgHAAgHgBg");
	this.shape_45.setTransform(166.3363,94.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA7E37").s().p("Ao9FUQAGAAAEgEQADgDAAgHIAAgOQBkhAB4grQAGgCAHAAQhMBlh1A8QgGADgGAAQgHAAgHABIgLACQgYAAAIgegAp0DZIAAgOQB4gsCMgXIAOgBQhNBDhzAbQgHABgHAAIgNABQgMADgKAAQgZAAgIgRgAE8hTQBVgtBpgeQACAAAAgHQAHAAADgEQAEgDAAgHQAaAAALgQQAEgEAAgHIANAAIAAgOQBGgIgVBLQgBABgHAAIgNAAQAAAHgDACQgoAYg1AIIgOAAIAAAOIgOAAQgGAAgFADQg4ApgoAAQgiAAgXgegAETiYQBEgvBHgtQAFgDAHAAIAAgOQAOgNAZgHQACAAAAgHQANAAALgGQADgBAAgHQAOgHAKgKQAEgDAAgHIAAgOQBZhHAAB+IgHAAQgHAAgDADQgTAXgoABQgHAAAAACQgFAUgdgIIAAANQgHAAgFADQgIAEgHAHQgHAAAAACQgFAUgdgIQAAAHgEADQg9A2gwAAQgVAAgRgKg");
	this.shape_46.setTransform(227.3436,95.5704);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F49C59").s().p("ABeM/QgnhBgihFQAAAHgBAAQjnAmkFg6QgHAAgBgDQgihEhegnQAtAAgdgSQgDgCAAgHQgbgBgJgQIgFgLQg7AggXgtQAvgfgRg0QgDgGAAgHIAOAAQAiA+AtAyQADAEAAAHQA6AzBQAdQAGACAHAAQBFA2BtAOIANABQBXAXB2gQQABgBAAgGQA1AGAegRQAFgDAHAAIANAAQAMBNAbA9QADAFAAAHIAAAOQgHAAgCgDgAg8JaIhTAAIgOgBQhNgEhJgJIgNgBQhEgOgqgoQgHAAgHgCQgOgFgOgHQgGAAgGgCQgIgEgHgHQgHAAgDgEIhjhcQgIAAAAgCQgQgkgfgRIgBgNQgEgYgXgEIgOAAQAAgGgBgHQgMgpgOgpQgHAAgDgEQgDgDAAgHIgOAAQAAgHgDgFQgSgdAHg3IgHAAQAAg+gVghIgGAAQgChQgTg4IAAgOIAAgNQBAgUArhxQA3iPAbhiQADgJgOgOIAOAAIANAAIAPAAQBJgxBPgsQAFgCAHAAQAAAGgDACQgoASgaAcQgIAkAkgHIANgBQCaBxChBiIAAgGQBMgBgGhRIgBgOQhFhYg0hpQgCgFAAgHQCWBSCGBeQADABANgNQA6iOhthsQgEgDAAgHQAOAAALgFQACgCAAgGIAAgOQAXABgCgcIAHAAQA0BOCKANQA/AFA5AjQCDBPg6icQAAgHgCgFQgRgegIgoQBKA/AICBIAAANQAIAOAJAKQAEAEAHAAQBHAeAkBDQACAFAAAHQAHAHAFAIQACAFAAAHQAmASADAzIAAANIA3AAIAOAAQAAAHgDAEQgLAKgOAHQAAAGgCACQgMAFgNAAQAAAHgCABQgZAGgOAOIAAANQgHAAgFADQhHAthEAwQA9AgBWhNQAEgDAAgHQAdAJAFgVQAAgBAHAAQAHgHAIgEQAGgDAGAAIAAgOQAeAJAEgVQAAgBAIAAIAAANQABAWgdgIQgFAoAugLQAHgCAHAAQAAAHgEAFQgLAPgaABQAAAGgDAEQgEADgHAAQAAAHgCABQhoAdhWAtQAyBBBnhLQAFgDAGAAIAOAAIAAANQgFBvgxBCIgCANQgFAcgVAOIAAANQAAAHgCAGQgYArgPA2QgHAAgCADQgrA9g6AtQAAAHgDADQgRASgUANIAAAOQgIAAAAABQgEAVgegJQAAAHgDADQgiAdgtAQQAAAHgEADQgmAeg2APQAAAHgCABQgLAFgOAAQgHAAgBACQgEAVgdgJQgHAAgHACIgcAMIAAAbIAAAOIgNAAIAAgOIAAgNQgHAAgFADQgYAPgvgFQgGAAgCADQgKAUgkgJIgNAAQgbAAgOAOIgNAAgAkMFCQACgBAAgHQAGAAAGgCQB1g8BNhmQgHAAgHADQh4AqhjBBIAAANIgOAAIgOAAQgQBHBFgWgAhmBTQiMAXh4AsIAAAOQgHAAgGACQgPAFgNAHQAWA9BUg0QAEgCAAgHQAGAAAHgCQBzgbBNhDIgOABgAk2ibQggAMgUAVIAAAOIAAANQgLA7AmAIQAHACAHAAQAXgZgCg5IAHAAIAAgOQBfAHAogNQABgBAAgHQgHAAgBgCQgKgVgXgEIgNAAIhgAAQAAAHgDABgAGUndQgHAAgDADQgSARgbAHIAAAOQgCB+AXhGQAAgCAHAAIAAgNQAGgHAJgEQAFgDAHAAIAAgOQBkAnAigdQADgDAAgHQgGAAgCgDQgdg0hPAAIgVABg");
	this.shape_47.setTransform(200.7,100.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EB7A2F").s().p("ABtCHQg5gjg+gFQiKgNg0hOIAAgNIAAgOQAVgOAFgbQACgHAAgHQAkgSAQglQADgGAAgHQAGAAAEgDQADgEAAgHIAOAAIAOAAQBQgGAsAfQAFADAHAAQAbAiAfAfQADADAHAAQANAOAHAZQABACAHAAQAHAnARAeQADAFAAAHQAmBogtAAQgWAAgtgbg");
	this.shape_48.setTransform(229.6626,19.8286);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F49D5B").s().p("AkVNCQAAgHgDgBQgqgQgzgDQAAgHgDgCQg0ggg3gcQgHAAgDgDQgRgRgOgVIALAAIAJAAIAIAAIANAAQAAgHADgBIALgFQgVhRgyg1QgbgtgpgbQAAgGgCgDQgngwgchCIAAgNQAAgHgBgGQgDgIgEgHQAAgGgCgEQgCgDgFAAIAAgOIAAgbQgEAAgBgDQgIgYgEgcIAAgOIAAgbQAAgHgCgFQgKgYADguIAAgOIAAjdQAXguAIg8IABgNIAAgOQBWiSBLicQADgGAAgGQA5gvAXhNQACgGAAgHQA6gmAXhIQACgGAAgHIANAAIANA3IABANQAAAHACAGQASA0gvAfQAXAtA7ggIAFALQAJAQAbABQAAAHADACQAdASguAAQBfAnAiBEQABADAHAAQEEA6DngmQABAAAAgHQAjBFAnBBQACADAHAAIANAAQAAAbAHAaQAAACAHAAQAOAvATAuQABACAHAAQAHAHAEAIQADAGAAAHQAaBMAuA5QADADAHAAQAAAHADAEQAEADAHAAIAAAOQgHAAgGgDQh8guiJghQAAgHgDgGQgphRhQgrQgHAAgCgDQgzhCg/g2QA5CVBoBlQADADAAAHQAAAGgCAGQgEAIgHAHIAAAbIAAAOQAAAHgDABQhoAxhHBPQgHAAgGACQgcALgcAOIAAAbIAAAOQAAAHgCAGQgJAegdAMIAAANQAAAHgDAGQgXAsgdAnQAHAHAEAIQADAGAAAGIAOAAIANAAIAAgNQAfgRAPgjQABgDAHAAIAAgOQA6hOBFhFQADgDAHAAQBdgeAPgnQACgGAAgHIAAgOQApgNApgMQAHgCAHAAIAAgNQBSAABRAHQABAAAAAGQAPA8AqgdQAFgEAHAAQBbAtAeBqIACANQAAAHgDACIgLAFQApBmhgAwQAkA8AeBBQADAFAAAHQAAAHgDAFQhMCAhjBqQAHAHAIAEQAFADAHAAIA3AAIAOAAQAAAHgBAAQhsAOhTAiQgHAAgGABQgqAMgpAOIgOABIjAAaIgNAAIgtAAQjEAAipgbgAlMLwQAjAVA0gXIASgIQAMghgXAAQgZAAhFArgAC8K5QAAAHADADQBLA/AfhWQAHAAAAgBQADgXgWAAQgcAAhFAlgAG1KYQCYBEibhMQAAAHADABgAg4KlQBzAph1gwQAAAHACAAgAlsK1QA7gGhSgRgAlMJuQBgAHhggOIAAAHgAJJFPQBWgUhWgBgApxE8QAqgSgygLQgKAlASgIgAqjCJQADAmAVAUQALAKAAgCQAIhbgRAAQgJAAgRAZgAJ6CtQBBgUhXgQQgCArAYgHgApOAaQBKCOhMiaQAAAHACAFgAoSiYIAGARQA4gOhGg3QAAAbAIAZgAHQjbQA4Bgg6hsQAAAGACAGgAEPklQB1AVh2gcQAAAHABAAgAlnnCIAAAHQBJgLgUAAIg1AEgAnVn5QgJAlANgKQBNg1gPAAQgLAAg3AagAlXpRQCVA+iYhFQAAAGADABgAm6qdIAAAVQAlgggKAAQgFAAgWALg");
	this.shape_49.setTransform(164.839,221.1428);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ED9F62").s().p("AAVAMIg2AAIAAgMQArgYAVAZQADAEAAAHIgNAAg");
	this.shape_50.setTransform(226.725,85.9047);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EC782C").s().p("AkKWuIgIAAIgIAAIgLAAIgGAAIgJAAIgJAAQgEAAgBgDQgGgUgXAKIAAgHQgTABACgWQgFAAgDgDQgKgKgRgBQgEAAgDgCQgTgRgagIIAAgOQgEAAgDgCQgTgRgZgIQAAgHgCgFIgHgPQgEAAgDgDQgLgKgRgBIAAgHQgQgHgJgNQgFAAgEgCQgegNgNgoQgEAAgEgCQgcgPgHgzQAAgHgCgGQgCgIgFgHQgEAAgBgDQgMgYgJgbQgEAAgDgDQgWgSAEg9QgFAAgBgDQgOgpAChCIAAgNIAAgcIgEAAQgEhfAAhgIAIAAIAAgOIAAgNIAAgOIAAgpQAPgFgFgkIgBgOIAAgNIAAgcQAOACgEgdIgBgOIAAgNQAPg6AGhOQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAFgHACgIQACgGAAgGIAAgOIAAgpQAOgFgEgkIgBgOIAAgNQAEg+gNgiIAAgOQgEAAgEgDQgFgDgEgHIgJAAIgIAAQgFAAgEADQgWAKgVAOIAAANQAAAHgCAFQgJATgYgDQAAAHgCADQgCADgEAAQAAAHgCAEQgQAegZAOIgJAAQAAAHgCACQggAggagbQgFAAgDgDQgKgKgRgBQgEAAgEgCQgYgPgCgzIAAgOIAAhfIAIAAIAAgNIAAgpQANgOAIgYQABgDAEAAIAAgOIAAgbQAJgOAKgKQADgEAEAAIAAgNIAAgOIA2hcQACgEAFAAIAAgNIAAgOQAagMASgaQADgDAEAAQAhglAtgQQAEgCAEAAIAAAOIA9AAIAIAAIAjAAIAIAAQASAHAPAMQACACAAAGQAKAgAZAIIAIABIAIAAQAaAOAIAqQABAGAAAHQAAANAEALQAAADAFAAQAXAKgFA7IgBANIAIBSIAAAOIAAEQIAAAOIAJAAIABANQAFA6gPAZIAAAbIAAAOIABANQAGBcgPA7IAAAbIAAAOIAABOIAADeIAAAOQgDAuAJAYQACAFAAAHIAAAbIAAAOQAFAcAIAYQAAADAFAAIAAAbIAAAOQAEAAACADQACAEAAAGQAFAHACAIQACAGAAAHIAAANQAcBCAnAwQACADAAAGQAoAbAbAtQAzA2AUBQIgLAFQgCABAAAHIgOAAgAj5pJQgcgbgDg0QAAgHgBgGQgJgmgRgfIgHAAQgHhtAAhtQAHgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB1AWQABAAAAAHQAugFATAWQADADAAAHIgNAAQANAOgCAJQgcBig3CPQgrBxhAAUIAAANQgGAAgEgDgAB1vtIgOABQgkAHAJgkQAagcAngSQADgCAAgGIAAgOQAwgiA+gTQAGgCAHAAIAAgNQAogIAegRQAGgDAHAAIBSAAIANAAIAAgNIAOAAIAAgOICyAAIAOAAIAAAOQAAAGgDACQgLAFgNAAQAAAHADADQBuBsg7COQgNANgDgBQiHheiWhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgAKLzIIAAgOIAAgbQAagcAUgmQACgDAHAAIAAgNIAAgOQAdgLARgbQACgDAHAAQAAAHgDAGQgQAlgkASQAAAHgCAHQgFAbgVAOIAAAOIAAAOIgHAAQACAbgUAAIgCAAgAKLzIIAAAAgAPl0rQgfgfgbgiQgHAAgFgDQgsgfhRAGIgOAAIgOAAIAAgNQBMgyA6A1QADAEAAAGQAOAHAKALQAEADAAAHQAzAKAPAtQACAGAAAHQgHAAgDgDg");
	this.shape_51.setTransform(141.775,145.4173);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F49C59").s().p("ABeM/QgnhBgihFQAAAHgBAAQjnAmkFg6QgHAAgBgDQgihEhegnQAtAAgdgSQgDgCAAgHQgbgBgJgQIgFgLQg7AggXgtQAvgfgRg0QgDgGAAgHIAOAAQAiA+AtAyQADAEAAAHQA6AzBQAdQAGACAHAAQBFA2BtAOIANABQBXAXB2gQQABgBAAgGQA1AGAegRQAFgDAHAAIANAAQAMBNAbA9QADAFAAAHIAAAOQgHAAgCgDgAg8JaIhTAAIgOgBQhNgEhJgJIgNgBQhEgOgqgoQgHAAgHgCQgOgFgOgHQgGAAgGgCQgIgEgHgHQgHAAgDgEIhjhcQgIAAAAgCQgQgkgfgRIgBgNQgEgYgXgEIgOAAQAAgGgBgHQgMgpgOgpQgHAAgDgEQgDgDAAgHIgOAAQAAgHgDgFQgSgdAHg3IgHAAQAAg+gVghIgGAAQgChQgTg4IAAgOIAAgNQBAgUArhxQA3iPAbhiQADgJgOgOIAOAAIANAAIAPAAQBJgxBPgsQAFgCAHAAQAAAGgDACQgoASgaAcQgIAkAkgHIANgBQCaBxChBiIAAgGQBMgBgGhRIgBgOQhFhYg0hpQgCgFAAgHQCWBSCGBeQADABANgNQA6iOhthsQgEgDAAgHQAOAAALgFQACgCAAgGIAAgOQAXABgCgcIAHAAQA0BOCKANQA/AFA5AjQCDBPg6icQAAgHgCgFQgRgegIgoQBKA/AICBIAAANQAIAOAJAKQAEAEAHAAQBHAeAkBDQACAFAAAHQAHAHAFAIQACAFAAAHQAmASADAzIAAANIA3AAIAOAAQAAAHgDAEQgLAKgOAHQAAAGgCACQgMAFgNAAQAAAHgCABQgZAGgOAOIAAANQgHAAgFADQhHAthEAwQA9AgBWhNQAEgDAAgHQAdAJAFgVQAAgBAHAAQAHgHAIgEQAGgDAGAAIAAgOQAeAJAEgVQAAgBAIAAIAAANQABAWgdgIQgFAoAugLQAHgCAHAAQAAAHgEAFQgLAPgaABQAAAGgDAEQgEADgHAAQAAAHgCABQhoAdhWAtQAyBBBnhLQAFgDAGAAIAOAAIAAANQgFBvgxBCIgCANQgFAcgVAOIAAANQAAAHgCAGQgYArgPA2QgHAAgCADQgrA9g6AtQAAAHgDADQgRASgUANIAAAOQgIAAAAABQgEAVgegJQAAAHgDADQgiAdgtAQQAAAHgEADQgmAeg2APQAAAHgCABQgLAFgOAAQgHAAgBACQgEAVgdgJQgHAAgHACIgcAMIAAAbIAAAOIgNAAIAAgOIAAgNQgHAAgFADQgYAPgvgFQgGAAgCADQgKAUgkgJIgNAAQgbAAgOAOIgNAAgAkMFCQACgBAAgHQAGAAAGgCQB1g8BNhmQgHAAgHADQh4AqhjBBIAAANIgOAAIgOAAQgQBHBFgWgAhmBTQiMAXh4AsIAAAOQgHAAgGACQgPAFgNAHQAWA9BUg0QAEgCAAgHQAGAAAHgCQBzgbBNhDIgOABgAk2ibQggAMgUAVIAAAOIAAANQgLA7AmAIQAHACAHAAQAXgZgCg5IAHAAIAAgOQBfAHAogNQABgBAAgHQgHAAgBgCQgKgVgXgEIgNAAIhgAAQAAAHgDABgADiiVIAAANIA3AAIANAAQABgHgEgEQgLgOgRAAQgQAAgVAMgAGUndQgHAAgDADQgSARgbAHIAAAOQgCB+AXhGQAAgCAHAAIAAgNQAGgHAJgEQAFgDAHAAIAAgOQBkAnAigdQADgDAAgHQgGAAgCgDQgdg0hPAAIgVABg");
	this.shape_52.setTransform(200.7,100.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EC782C").s().p("AkKWuIgIAAIgIAAIgLAAIgGAAIgJAAIgJAAQgEAAgBgDQgGgUgXAKIAAgHQgTABACgWQgFAAgDgDQgKgKgRgBQgEAAgDgCQgTgRgagIIAAgOQgEAAgDgCQgTgRgZgIQAAgHgCgFIgHgPQgEAAgDgDQgLgKgRgBIAAgHQgQgHgJgNQgFAAgEgCQgegNgNgoQgEAAgEgCQgcgPgHgzQAAgHgCgGQgCgIgFgHQgEAAgBgDQgMgYgJgbQgEAAgDgDQgWgSAEg9QgFAAgBgDQgOgpAChCIAAgNIAAgcIgEAAQgEhfAAhgIAIAAIAAgOIAAgNIAAgOIAAgpQAPgFgFgkIgBgOIAAgNIAAgcQAOACgEgdIgBgOIAAgNQAPg6AGhOQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAFgHACgIQACgGAAgGIAAgOIAAgpQAOgFgEgkIgBgOIAAgNQAEg+gNgiIAAgOQgEAAgEgDQgFgDgEgHIgJAAIgIAAQgFAAgEADQgWAKgVAOIAAANQAAAHgCAFQgJATgYgDQAAAHgCADQgCADgEAAQAAAHgCAEQgQAegZAOIgJAAQAAAHgCACQggAggagbQgFAAgDgDQgKgKgRgBQgEAAgEgCQgYgPgCgzIAAgOIAAhfIAIAAIAAgNIAAgpQANgOAIgYQABgDAEAAIAAgOIAAgbQAJgOAKgKQADgEAEAAIAAgNIAAgOIA2hcQACgEAFAAIAAgNIAAgOQAagMASgaQADgDAEAAQAhglAtgQQAEgCAEAAIAAAOIA9AAIAIAAIAjAAIAIAAQASAHAPAMQACACAAAGQAKAgAZAIIAIABIAIAAQAaAOAIAqQABAGAAAHQAAANAEALQAAADAFAAQAXAKgFA7IgBANIAIBSIAAAOIAAEQIAAAOIAJAAIABANQAFA6gPAZIAAAbIAAAOIABANQAGBcgPA7IAAAbIAAAOIAABOIAADeIAAAOQgDAuAJAYQACAFAAAHIAAAbIAAAOQAFAcAIAYQAAADAFAAIAAAbIAAAOQAEAAACADQACAEAAAGQAFAHACAIQACAGAAAHIAAANQAcBCAnAwQACADAAAGQAoAbAbAtQAzA2AUBQIgLAFQgCABAAAHIgOAAgAj5pJQgcgbgDg0QAAgHgBgGQgJgmgRgfIgHAAQgHhtAAhtQAHgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB1AWQABAAAAAHQAugFATAWQADADAAAHIgNAAQANAOgCAJQgcBig3CPQgrBxhAAUIAAANQgGAAgEgDgAB1vtIgOABQgkAHAJgkQAagcAngSQADgCAAgGIAAgOQAwgiA+gTQAGgCAHAAIAAgNQAogIAegRQAGgDAHAAIBSAAIANAAIAAgNIAOAAIAAgOICyAAIAOAAIAAAOQAAAGgDACQgLAFgNAAQAAAHADADQBuBsg7COQgNANgDgBQiHheiWhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgAKLzIIAAgOIAAgbQAagcAUgmQACgDAHAAQAAAHgCAHQgFAbgVAOIAAAOIAAAOIgHAAQACAbgUAAIgCAAgAKLzIIAAAAgAPl0rQgfgfgbgiQAzAKAPAtQACAGAAAHQgHAAgDgDgALC1DIAAgOQAdgLARgbQACgDAHAAQAAAHgDAGQgQAlgkASIAAgNgAOf1vQgsgfhRAGIgOAAIgOAAIAAgNQBMgyA6A1QADAEAAAGQAOAHAKALQAEADAAAHQgHAAgFgDg");
	this.shape_53.setTransform(141.775,145.4173);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EC782C").s().p("Ag8WuIgcAAIgOAAIgNAAQgIAAAAgDQgLgUgkAKIAAgHQgdABACgWQgHAAgGgDQgPgKgbgBQgHAAgGgCQgegRgogIIAAgOQgGAAgGgCQgegRgogIQAAgHgDgFQgEgIgGgHQgIAAgFgDQgPgKgbgBQAAgHgCAAQgagHgOgNQgGAAgHgCQgvgNgWgoQgHAAgFgCQgugPgKgzQAAgHgDgGQgEgIgHgHQgHAAgCgDQgSgYgOgbQgHAAgFgDQgkgSAHg9QgHAAgBgDQgYgpAFhCIAAgNIAAgcIgHAAQgHhfAAhgIAOAAIAAgOIAAgNIAAgOIAAgpQAWgFgIgkQgBgHAAgHIAAgNIAAgcQAWACgGgdQgCgHAAgHIAAgNQAYg6AKhOQAAgBAHAAQAHgHAEgIQACgGABgGIAAgOIAAgpQAWgFgHgkQgCgHAAgHIABgNQAGg+gUgiIAAgOQgHAAgGgDQgIgDgGgHIgPAAIgNAAQgHAAgGADQgjAKgiAOIAAANQgBAHgDAFQgOATglgDQAAAHgEADQgDADgHAAQAAAHgDAEQgZAegpAOIgNAAQAAAHgDACQgzAggqgbQgHAAgEgDQgQgKgcgBQgGAAgGgCQgngPgEgzIAAgOIAAhfIAOAAIAAgNIAAgpQAVgOAMgYQACgDAGAAIAAgOIAAgbQAOgOAQgKQAEgEAIAAIAAgNIAAgOQApgvAsgtQAEgEAGAAIAAgNIAAgOQAqgMAdgaQAFgDAGAAQA0glBIgQQAGgCAIAAIAAAOIBfAAIAOAAIA3AAIANAAQAcAHAYAMQADACABAGQAQAgAnAIQAGABAHAAIAOAAQApAOAMAqQACAGAAAHQgBANAGALQABADAHAAQAmAKgKA7IgBANIANBSIABAOIAAEQIAAAOIAOAAIABANQAJA6gYAZIAAAbIAAAOIABANQAJBcgYA7IAAAbIAAAOIAAEsIAAAOQgEAuAPAYQADAFAAAHIAAAbIAAAOQAHAcAMAYQABADAIAAIAAAbIAAAOQAGAAAEADQADAEAAAGQAHAHAEAIQADAGAAAHIAAANQAsBCA/AwQACADAAAGQCOA6AlCUIgLAFQgDABAAAHIgNAAgAgrpJQgcgbgEg0QAAgHgBgGQgJgmgRgfIgGAAQgIhtABhtQAGgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB0AWQABAAAAAHQAugFATAWQAEADgBAHIgNAAQAOAOgDAJQgcBig2CPQgsBxg+AUIAAANQgHAAgDgDgAFCvtIgOABQgkAHAJgkQAagcAngSQADgCABgGIAAgOQAvgiA/gTQAGgCAGAAIAAgNQApgIAegRQAFgDAHAAIBSAAIAOAAIAAgNIAOAAIAAgOICxAAIAOAAIAAAOQAAAGgCACQgMAFgNAAQAAAHADADQBuBsg6COQgOANgDgBQiGheiXhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgANYzIIAAgOIAAgbQAbgcAUgmQABgDAHAAQAAAHgBAHQgGAbgUAOIAAAOIAAAOIgIAAQACAbgUAAIgCAAgANYzIIAAAAgASy0rQgfgfgbgiQgHAAgEgDQgtgfhRAGIgOAAIgNAAIAAgNQBLgyA6A1QADAEABAGQANAHAKALQAEADAAAHQAzAKAPAtQACAGAAAHQgGAAgEgDgAOP1DIAAgOQAegLAQgbQACgDAHAAQAAAHgCAGQgRAlgkASIAAgNg");
	this.shape_54.setTransform(121.25,145.4173);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EC782C").s().p("AkKWuIgIAAIgIAAIgLAAIgGAAIgJAAIgJAAQgEAAgBgDQgGgUgXAKIAAgHQgTABACgWQgFAAgDgDQgKgKgRgBQgEAAgDgCQgTgRgagIIAAgOQgEAAgDgCQgTgRgZgIQAAgHgCgFIgHgPQgEAAgDgDQgLgKgRgBIAAgHQgQgHgJgNQgFAAgEgCQgegNgNgoQgEAAgEgCQgcgPgHgzQAAgHgCgGQgCgIgFgHQgEAAgBgDQgMgYgJgbQgEAAgDgDQgWgSAEg9QgFAAgBgDQgOgpAChCIAAgNIAAgcIgEAAQgEhfAAhgIAIAAIAAgOIAAgNIAAgOIAAgpQAPgFgFgkIgBgOIAAgNIAAgcQAOACgEgdIgBgOIAAgNQAPg6AGhOQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAFgHACgIQACgGAAgGIAAgOIAAgpQAOgFgEgkIgBgOIAAgNQAEg+gNgiIAAgOQgEAAgEgDQgFgDgEgHIgJAAIgIAAQgFAAgEADQgWAKgVAOIAAANQAAAHgCAFQgJATgYgDQAAAHgCADQgCADgEAAQAAAHgCAEQgQAegZAOIgJAAQAAAHgCACQggAggagbQgFAAgDgDQgKgKgRgBQgEAAgEgCQgYgPgCgzIAAgOIAAhfIAIAAIAAgNIAAgpQANgOAIgYQABgDAEAAIAAgOIAAgbQAJgOAKgKQADgEAEAAIAAgNIAAgOIA2hcQACgEAFAAIAAgNIAAgOQAagMASgaQADgDAEAAQAhglAtgQQAEgCAEAAIAAAOIA9AAIAIAAIAjAAIAIAAQASAHAPAMQACACAAAGQAKAgAZAIIAIABIAIAAQAaAOAIAqQABAGAAAHQAAANAEALQAAADAFAAQAXAKgFA7IgBANIAIBSIAAAOIAAEQIAAAOIAJAAIABANQAFA6gPAZIAAAbIAAAOIABANQAGBcgPA7IAAAbIAAAOIAABOIAADeIAAAOQgDAuAJAYQACAFAAAHIAAAbIAAAOQAFAcAIAYQAAADAFAAIAAAbIAAAOQAEAAACADQACAEAAAGQAFAHACAIQACAGAAAHIAAANQAcBCAnAwQACADAAAGQAoAbAbAtQAzA2AUBQIgLAFQgCABAAAHIgOAAgAj5pJQgcgbgDg0QAAgHgBgGQgJgmgRgfIgHAAQgHhtAAhtQAHgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB1AWQABAAAAAHQAugFATAWQADADAAAHIgNAAQANAOgCAJQgcBig3CPQgrBxhAAUIAAANQgGAAgEgDgAB1vtIgOABQgkAHAJgkQAagcAngSQADgCAAgGIAAgOQAwgiA+gTQAGgCAHAAIAAgNQAogIAegRQAGgDAHAAIBSAAIANAAIAAgNIAOAAIAAgOICyAAIAOAAIAAAOQAAAGgDACQgLAFgNAAQAAAHADADQBuBsg7COQgNANgDgBQiHheiWhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgAKLzIIAAgOIAAgbQAagcAUgmQACgDAHAAIAAgNIAAgOQAdgLARgbQACgDAHAAQAAAHgDAGQgQAlgkASQAAAHgCAHQgFAbgVAOIAAAOIAAAOIgHAAQACAbgUAAIgCAAgAKLzIIAAAAgAPl0rQgfgfgbgiQAzAKAPAtQACAGAAAHQgHAAgDgDgAOf1vQgsgfhRAGIgOAAIgOAAIAAgNQBMgyA6A1QADAEAAAGQAOAHAKALQAEADAAAHQgHAAgFgDg");
	this.shape_55.setTransform(141.775,145.4173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_51},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_53},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_54},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_53},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_54},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_53},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_55},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,290.3,307.3);


(lib.bed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.4026,0.4026);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500.9,364.4);


(lib.alarm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.4237,0.4237);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(22.75,8,0.4237,0.4237);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-4.3,6.05,0.4237,0.4237);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(13.7,16.45,0.4237,0.4237);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(-8.75,8.75,0.4237,0.4237);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(13.6,11.8,0.4237,0.4237);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(13.6,11.8,0.4237,0.4237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,0,289.09999999999997,272.4);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cloud_2("synched",0);
	this.instance.setTransform(1190.3,281.05,1,1,0,0,0,152,104.2);

	this.instance_1 = new lib.cloud("synched",0);
	this.instance_1.setTransform(1572.4,133,0.8935,1.099,0,0,0,262.1,121);

	this.instance_2 = new lib.cloud("synched",0);
	this.instance_2.setTransform(790.2,200.95,0.6414,0.653,0,0,0,262,121);

	this.instance_3 = new lib.cloud_2("synched",0);
	this.instance_3.setTransform(500.1,359.2,1,0.7505,0,0,0,152,104.2);

	this.instance_4 = new lib.cloud("synched",0);
	this.instance_4.setTransform(205.95,167.9,0.7863,0.7191,0,0,0,261.9,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,1808.5,439.4), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tree_1("synched",0);
	this.instance.setTransform(1615.55,237.25,0.4893,0.6871,0,0,0,321.2,345.3);

	this.instance_1 = new lib.tree_1("synched",0);
	this.instance_1.setTransform(1377.05,347.55,0.371,0.4136,0,0,0,321.2,345.2);

	this.instance_2 = new lib.tree_2("synched",0);
	this.instance_2.setTransform(501.35,355.35,0.4483,0.4907,0,0,0,282.8,275);

	this.instance_3 = new lib.tree_1("synched",0);
	this.instance_3.setTransform(793.4,315.2,0.3959,0.4378,0,0,0,321.2,345.2);

	this.instance_4 = new lib.tree_2("synched",0);
	this.instance_4.setTransform(1051.25,271.15,0.731,0.7964,0,0,0,282.8,275);

	this.instance_5 = new lib.tree_1("synched",0);
	this.instance_5.setTransform(201.25,243.2,0.6264,0.6232,0,0,0,321.3,345.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("EBkCAFyMjICAAAEhkAgFxMDICAAA");
	this.shape.setTransform(1179.45,476.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B448").s().p("EBkBAFyMjICAAAMhQBAAAIAArjMBQBAAAMDICAAAMBQCAAAIAALjg");
	this.shape_1.setTransform(1179.525,476.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,2332.8,515.5), null);


(lib.Scene_1_trees = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// trees
	this.instance = new lib.Symbol1();
	this.instance.setTransform(626.55,463.55,1,1,0,0,0,1165.8,256.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regX:1165.7,x:632.9},0).wait(1).to({x:639.3},0).wait(1).to({x:645.75},0).wait(1).to({x:652.15},0).wait(1).to({x:658.6},0).wait(1).to({x:665},0).wait(1).to({x:671.45},0).wait(1).to({x:677.85},0).wait(1).to({x:684.3},0).wait(1).to({x:690.7},0).wait(1).to({x:697.15},0).wait(1).to({x:703.55},0).wait(1).to({x:710},0).wait(1).to({x:716.4},0).wait(1).to({x:722.85},0).wait(1).to({x:729.25},0).wait(1).to({x:735.7},0).wait(1).to({x:742.1},0).wait(1).to({x:748.55},0).wait(1).to({x:754.95},0).wait(1).to({x:761.4},0).wait(1).to({x:767.8},0).wait(1).to({x:774.25},0).wait(1).to({x:780.65},0).wait(1).to({x:787.1},0).wait(1).to({x:793.5},0).wait(1).to({x:799.95},0).wait(1).to({x:806.35},0).wait(1).to({x:812.8},0).wait(1).to({x:819.2},0).wait(1).to({x:825.65},0).wait(1).to({x:832.05},0).wait(1).to({x:838.5},0).wait(1).to({x:844.9},0).wait(1).to({x:851.35},0).wait(1).to({x:857.75},0).wait(1).to({x:864.2},0).wait(1).to({x:870.6},0).wait(1).to({x:877.05},0).wait(1).to({x:883.45},0).wait(1).to({x:889.9},0).wait(1).to({x:896.3},0).wait(1).to({x:902.75},0).wait(1).to({x:909.15},0).wait(1).to({x:915.6},0).wait(1).to({x:922},0).wait(1).to({x:928.45},0).wait(1).to({x:934.85},0).wait(1).to({x:941.3},0).wait(1).to({x:947.7},0).wait(1).to({x:954.15},0).wait(1).to({x:960.55},0).wait(1).to({x:967},0).wait(1).to({x:973.4},0).wait(1).to({x:979.85},0).wait(1).to({x:986.25},0).wait(1).to({x:992.7},0).wait(1).to({x:999.1},0).wait(1).to({x:1005.55},0).wait(1).to({x:1011.95},0).wait(1).to({x:1018.4},0).wait(1).to({x:1024.8},0).wait(1).to({x:1031.25},0).wait(1).to({x:1037.65},0).wait(1).to({x:1044.1},0).wait(1).to({x:1050.5},0).wait(1).to({x:1056.95},0).wait(1).to({x:1063.35},0).wait(1).to({x:1069.8},0).wait(1).to({x:1076.2},0).wait(1).to({x:1082.65},0).wait(1).to({x:1089.05},0).wait(1).to({x:1095.5},0).wait(1).to({x:1101.9},0).wait(1).to({x:1108.35},0).wait(1).to({x:1114.75},0).wait(1).to({x:1121.2},0).wait(1).to({x:1127.6},0).wait(1).to({x:1134.05},0).wait(1).to({x:1140.45},0).wait(244));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_power_puff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// power_puff
	this.instance = new lib.powerpafflying("synched",0);
	this.instance.setTransform(1092.6,91.45,0.5564,0.5706,-90,0,0,223.7,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regX:223.9,rotation:-90.0773,x:1085.7,y:92.05,startPosition:1},0).wait(1).to({rotation:-90.1547,x:1078.75,y:92.75,startPosition:2},0).wait(1).to({rotation:-90.232,x:1071.85,y:93.45,startPosition:3},0).wait(1).to({rotation:-90.3094,x:1064.95,y:94.2,startPosition:4},0).wait(1).to({rotation:-90.3867,x:1058,y:94.9,startPosition:5},0).wait(1).to({rotation:-90.4641,x:1051.15,y:95.6,startPosition:6},0).wait(1).to({rotation:-90.5414,x:1044.2,y:96.3,startPosition:7},0).wait(1).to({rotation:-90.6188,x:1037.3,y:97,startPosition:8},0).wait(1).to({rotation:-90.6961,x:1030.4,y:97.7,startPosition:9},0).wait(1).to({rotation:-90.7735,x:1023.5,y:98.4,startPosition:10},0).wait(1).to({rotation:-90.8508,x:1016.6,y:99.1,startPosition:11},0).wait(1).to({rotation:-90.9282,x:1009.7,y:99.8,startPosition:12},0).wait(1).to({rotation:-91.0055,x:1002.75,y:100.5,startPosition:13},0).wait(1).to({rotation:-91.0828,x:995.85,y:101.25,startPosition:14},0).wait(1).to({rotation:-91.1602,x:989,y:101.95,startPosition:15},0).wait(1).to({rotation:-91.2375,x:982.05,y:102.65,startPosition:16},0).wait(1).to({rotation:-91.3149,x:975.15,y:103.35,startPosition:17},0).wait(1).to({rotation:-91.3922,x:968.25,y:104.05,startPosition:18},0).wait(1).to({rotation:-91.4696,x:961.3,y:104.8,startPosition:19},0).wait(1).to({rotation:-91.5469,x:954.45,y:105.55,startPosition:20},0).wait(1).to({rotation:-91.6243,x:947.5,y:106.25,startPosition:21},0).wait(1).to({rotation:-91.7016,x:940.6,y:106.95,startPosition:22},0).wait(1).to({rotation:-91.779,x:933.7,y:107.65,startPosition:23},0).wait(1).to({rotation:-91.8563,x:926.75,y:108.35,startPosition:24},0).wait(1).to({rotation:-91.9337,x:919.9,y:109.05,startPosition:25},0).wait(1).to({rotation:-92.011,x:913,y:109.75,startPosition:26},0).wait(1).to({rotation:-92.0883,x:906.05,y:110.45,startPosition:27},0).wait(1).to({rotation:-92.1657,x:899.15,y:111.15,startPosition:28},0).wait(1).to({rotation:-92.243,x:892.2,y:111.9,startPosition:29},0).wait(1).to({rotation:-92.3204,x:885.35,y:112.6,startPosition:30},0).wait(1).to({rotation:-92.3977,x:878.45,y:113.3,startPosition:31},0).wait(1).to({rotation:-92.4751,x:871.5,y:114,startPosition:32},0).wait(1).to({rotation:-92.5524,x:864.6,y:114.75,startPosition:33},0).wait(1).to({rotation:-92.6298,x:857.7,y:115.45,startPosition:34},0).wait(1).to({rotation:-92.7071,x:850.75,y:116.15,startPosition:35},0).wait(1).to({rotation:-92.7845,x:843.9,y:116.9,startPosition:36},0).wait(1).to({rotation:-92.8618,x:837,y:117.6,startPosition:37},0).wait(1).to({rotation:-92.9392,x:830.05,y:118.3,startPosition:38},0).wait(1).to({rotation:-93.0165,x:823.15,y:119,startPosition:39},0).wait(1).to({rotation:-93.0938,x:816.25,y:119.7,startPosition:40},0).wait(1).to({rotation:-93.1712,x:809.35,y:120.35,startPosition:41},0).wait(1).to({rotation:-93.2485,x:802.45,y:121.1,startPosition:42},0).wait(1).to({rotation:-93.3259,x:795.5,y:121.8,startPosition:43},0).wait(1).to({rotation:-93.4032,x:788.6,y:122.55,startPosition:44},0).wait(1).to({rotation:-93.4806,x:781.7,y:123.25,startPosition:45},0).wait(1).to({rotation:-93.5579,x:774.8,y:123.95,startPosition:46},0).wait(1).to({rotation:-93.6353,x:767.9,y:124.7,startPosition:47},0).wait(1).to({rotation:-93.7126,x:761,y:125.4,startPosition:48},0).wait(1).to({rotation:-93.79,x:754.05,y:126.1,startPosition:49},0).wait(1).to({rotation:-93.8673,x:747.15,y:126.8,startPosition:50},0).wait(1).to({rotation:-93.9447,x:740.3,y:127.55,startPosition:51},0).wait(1).to({rotation:-94.022,x:733.35,y:128.25,startPosition:52},0).wait(1).to({rotation:-94.0984,x:726.45,y:128.95,startPosition:53},0).wait(1).to({rotation:-94.1749,x:719.55,y:129.65,startPosition:54},0).wait(1).to({rotation:-94.2513,x:712.6,y:130.35,startPosition:55},0).wait(1).to({rotation:-94.3278,x:705.7,y:131.1,startPosition:56},0).wait(1).to({rotation:-94.4042,x:698.85,y:131.75,startPosition:57},0).wait(1).to({rotation:-94.4807,x:691.9,y:132.45,startPosition:58},0).wait(1).to({rotation:-94.5571,x:685,y:133.2,startPosition:59},0).wait(1).to({rotation:-94.6336,x:678.05,y:133.9,startPosition:60},0).wait(1).to({rotation:-94.71,x:671.1,y:134.6,startPosition:61},0).wait(1).to({rotation:-94.7865,x:664.2,y:135.3,startPosition:62},0).wait(1).to({rotation:-94.8629,x:657.35,y:136.05,startPosition:63},0).wait(1).to({rotation:-94.9394,x:650.45,y:136.75,startPosition:64},0).wait(1).to({rotation:-95.0158,x:643.5,y:137.45,startPosition:65},0).wait(1).to({rotation:-95.0923,x:636.6,y:138.15,startPosition:66},0).wait(1).to({rotation:-95.1687,x:629.7,y:138.9,startPosition:67},0).wait(1).to({rotation:-95.2452,x:622.75,y:139.6,startPosition:68},0).wait(1).to({rotation:-95.3216,x:615.85,y:140.3,startPosition:69},0).wait(1).to({rotation:-95.3981,x:609,y:141.05,startPosition:70},0).wait(1).to({rotation:-95.4745,x:602.05,y:141.75,startPosition:71},0).wait(1).to({rotation:-97.7038,x:595.15,y:142.4,startPosition:72},0).wait(1).to({rotation:-99.9331,x:588.25,y:143.15,startPosition:73},0).wait(1).to({rotation:-102.1625,x:581.35,y:143.85,startPosition:74},0).wait(1).to({rotation:-104.3918,x:574.45,y:144.6,startPosition:75},0).wait(1).to({rotation:-106.6211,x:567.5,y:145.3,startPosition:76},0).wait(1).to({rotation:-108.8504,x:560.6,y:145.95,startPosition:77},0).wait(1).to({rotation:-111.0797,x:553.7,y:146.7,startPosition:78},0).wait(1).to({rotation:-113.309,x:546.8,y:147.4,startPosition:79},0).wait(1).to({rotation:-115.5384,x:539.85,y:148.1,startPosition:80},0).wait(1).to({rotation:-117.7677,x:532.95,y:148.85,startPosition:81},0).wait(1).to({rotation:-119.997,y:148.8,startPosition:82},0).wait(1).to({rotation:-119.5558,x:527.9,y:154.55,startPosition:83},0).wait(1).to({rotation:-119.1147,x:522.85,y:160.35,startPosition:84},0).wait(1).to({rotation:-118.6735,x:517.8,y:166.05,startPosition:85},0).wait(1).to({rotation:-118.2324,x:512.7,y:171.8,startPosition:86},0).wait(1).to({rotation:-117.7912,x:507.65,y:177.6,startPosition:87},0).wait(1).to({rotation:-117.35,x:502.6,y:183.35,startPosition:88},0).wait(1).to({rotation:-116.9089,x:497.6,y:189.05,startPosition:89},0).wait(1).to({rotation:-116.4677,x:492.55,y:194.85,startPosition:90},0).wait(1).to({rotation:-116.0266,x:487.45,y:200.55,startPosition:91},0).wait(1).to({rotation:-115.5854,x:482.4,y:206.35,startPosition:92},0).wait(1).to({rotation:-115.1443,x:477.3,y:212.1,startPosition:93},0).wait(1).to({rotation:-114.7031,x:472.25,y:217.85,startPosition:94},0).wait(1).to({rotation:-114.2619,x:467.2,y:223.6,startPosition:95},0).wait(1).to({rotation:-113.8208,x:462.2,y:229.35,startPosition:96},0).wait(1).to({rotation:-113.3796,x:457.1,y:235.1,startPosition:97},0).wait(1).to({rotation:-112.9385,x:452.05,y:240.85,startPosition:98},0).wait(1).to({rotation:-112.4973,x:447,y:246.6,startPosition:99},0).wait(1).to({rotation:-112.0561,x:441.9,y:252.35,startPosition:100},0).wait(1).to({rotation:-111.615,x:436.85,y:258.1,startPosition:101},0).wait(1).to({rotation:-111.1738,x:431.85,y:263.85,startPosition:102},0).wait(1).to({rotation:-110.7327,x:426.8,y:269.6,startPosition:103},0).wait(1).to({rotation:-110.2915,x:421.7,y:275.3,startPosition:104},0).wait(1).to({rotation:-109.8503,x:416.65,y:281.15,startPosition:105},0).wait(1).to({rotation:-109.4092,x:411.6,y:286.85,startPosition:106},0).wait(1).to({rotation:-108.968,x:406.5,y:292.6,startPosition:107},0).wait(1).to({rotation:-108.5269,x:401.45,y:298.35,startPosition:108},0).wait(1).to({rotation:-108.0857,x:396.45,y:304.1,startPosition:109},0).wait(1).to({rotation:-107.6446,x:391.35,y:309.85,startPosition:110},0).wait(1).to({rotation:-107.2034,x:386.35,y:315.6,startPosition:111},0).wait(1).to({rotation:-106.7622,x:381.3,y:321.4,startPosition:112},0).wait(1).to({rotation:-106.3211,x:376.2,y:327.1,startPosition:113},0).wait(1).to({rotation:-105.8799,x:371.15,y:332.9,startPosition:114},0).wait(1).to({rotation:-105.4388,x:366.1,y:338.6,startPosition:115},0).wait(1).to({rotation:-104.9976,x:361,y:344.35,startPosition:116},0).wait(1).to({rotation:-104.5564,x:355.95,y:350.15,startPosition:117},0).wait(1).to({rotation:-104.1153,x:350.9,y:355.85,startPosition:118},0).wait(1).to({rotation:-103.6741,x:345.85,y:361.55,startPosition:119},0).wait(1).to({rotation:-103.233,x:340.8,y:367.4,startPosition:120},0).wait(1).to({rotation:-102.7918,x:335.75,y:373.1,startPosition:121},0).wait(1).to({rotation:-102.3506,x:330.7,y:378.8,startPosition:122},0).wait(1).to({rotation:-101.9095,x:325.65,y:384.6,startPosition:123},0).wait(1).to({rotation:-101.4683,x:320.6,y:390.35,startPosition:124},0).wait(1).to({rotation:-101.0272,x:315.5,y:396.1,startPosition:125},0).wait(1).to({rotation:-100.586,x:310.45,y:401.85,startPosition:126},0).wait(1).to({rotation:-100.1449,x:305.4,y:407.6,startPosition:127},0).wait(1).to({rotation:-99.7037,x:300.35,y:413.3,startPosition:128},0).wait(1).to({rotation:-99.2625,x:295.3,y:419.1,startPosition:129},0).wait(1).to({rotation:-98.8214,x:290.25,y:424.85,startPosition:130},0).wait(1).to({rotation:-98.3802,x:285.2,y:430.55,startPosition:131},0).wait(1).to({rotation:-97.9391,x:280.1,y:436.4,startPosition:132},0).wait(1).to({rotation:-97.4979,x:275.05,y:442.1,startPosition:133},0).wait(1).to({rotation:-97.0567,x:270,y:447.85,startPosition:134},0).wait(1).to({rotation:-96.6156,x:264.95,y:453.6,startPosition:135},0).wait(1).to({rotation:-96.1744,x:259.9,y:459.35,startPosition:136},0).wait(1).to({rotation:-95.7333,x:254.8,y:465.05,startPosition:137},0).wait(1).to({rotation:-95.2921,x:249.75,y:470.85,startPosition:138},0).wait(1).to({rotation:-94.8509,x:244.7,y:476.6,startPosition:139},0).wait(1).to({rotation:-94.4098,x:239.65,y:482.35,startPosition:140},0).wait(1).to({rotation:-93.9686,x:234.65,y:488.15,startPosition:141},0).wait(1).to({rotation:-93.5275,x:229.6,y:493.85,startPosition:142},0).wait(1).to({rotation:-93.0863,x:224.55,y:499.6,startPosition:143},0).wait(1).to({rotation:-92.6452,x:219.45,y:505.35,startPosition:144},0).wait(1).to({rotation:-92.204,x:214.4,y:511.05,startPosition:145},0).wait(1).to({rotation:-91.7628,x:209.35,y:516.9,startPosition:146},0).wait(1).to({rotation:-91.3217,x:204.3,y:522.6,startPosition:147},0).wait(1).to({rotation:-90.8805,x:199.25,y:528.35,startPosition:148},0).wait(1).to({rotation:-90.4394,x:194.2,y:534.15,startPosition:149},0).wait(1).to({rotation:-89.9982,x:189.1,y:539.85,startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({scaleY:0.5425,x:189.45,startPosition:161},0).wait(1).to({scaleY:0.5144,x:189.85,startPosition:162},0).wait(1).to({scaleY:0.4862,x:190.25,startPosition:163},0).wait(1).to({scaleY:0.4581,x:190.65,startPosition:164},0).wait(1).to({scaleY:0.43,x:191,startPosition:165},0).wait(1).to({scaleY:0.4019,x:191.4,startPosition:166},0).wait(1).to({scaleY:0.3738,x:191.8,startPosition:167},0).wait(1).to({scaleY:0.3457,x:192.15,startPosition:168},0).wait(1).to({scaleY:0.3176,x:192.5,startPosition:169},0).wait(1).to({scaleY:0.2895,x:192.9,startPosition:170},0).wait(1).to({scaleY:0.2614,x:193.3,startPosition:171},0).wait(1).to({scaleY:0.2333,x:193.7,startPosition:172},0).wait(1).to({scaleY:0.2052,x:194.05,startPosition:173},0).wait(1).to({scaleY:0.1771,x:194.45,startPosition:174},0).wait(1).to({scaleY:0.1489,x:194.8,startPosition:175},0).wait(1).to({scaleY:0.1208,x:195.2,startPosition:176},0).wait(1).to({scaleY:0.0927,x:195.55,startPosition:177},0).wait(1).to({scaleY:0.0646,x:195.95,startPosition:178},0).wait(1).to({scaleY:0.0365,x:196.35,y:539.9,startPosition:179},0).wait(1).to({scaleY:0.0084,x:196.75,startPosition:180},0).wait(1).to({scaleY:0.0197,rotation:0,skewX:90.0018,skewY:-89.9982,x:197.1,startPosition:181},0).wait(1).to({scaleY:0.0478,x:197.5,startPosition:182},0).wait(1).to({scaleY:0.0759,x:197.85,startPosition:183},0).wait(1).to({scaleY:0.104,x:198.25,startPosition:184},0).wait(1).to({scaleY:0.1321,x:198.6,startPosition:185},0).wait(1).to({scaleY:0.1602,x:199,startPosition:186},0).wait(1).to({scaleY:0.1884,x:199.4,startPosition:187},0).wait(1).to({scaleY:0.2165,x:199.8,startPosition:188},0).wait(1).to({scaleY:0.2446,x:200.15,startPosition:189},0).wait(1).to({scaleY:0.2727,x:200.55,startPosition:190},0).wait(1).to({scaleY:0.3008,x:200.9,startPosition:191},0).wait(1).to({scaleY:0.3289,x:201.3,startPosition:192},0).wait(1).to({scaleY:0.357,x:201.65,startPosition:193},0).wait(1).to({scaleY:0.3851,x:202.05,startPosition:194},0).wait(1).to({scaleY:0.4132,x:202.45,startPosition:195},0).wait(1).to({scaleY:0.4413,x:202.85,startPosition:196},0).wait(1).to({scaleY:0.4694,x:203.2,startPosition:197},0).wait(1).to({x:210.55,y:536.05,startPosition:198},0).wait(1).to({x:217.9,y:532.25,startPosition:199},0).wait(1).to({x:225.3,y:528.45,startPosition:200},0).wait(1).to({x:232.65,y:524.65,startPosition:201},0).wait(1).to({x:240,y:520.85,startPosition:202},0).wait(1).to({x:247.4,y:517.05,startPosition:203},0).wait(1).to({x:254.75,y:513.25,startPosition:204},0).wait(1).to({x:262.1,y:509.45,startPosition:205},0).wait(1).to({x:269.45,y:505.65,startPosition:206},0).wait(1).to({x:276.85,y:501.85,startPosition:207},0).wait(1).to({x:284.2,y:498.05,startPosition:208},0).wait(1).to({x:291.55,y:494.25,startPosition:209},0).wait(1).to({x:298.95,y:490.45,startPosition:210},0).wait(1).to({x:306.3,y:486.65,startPosition:211},0).wait(1).to({x:313.65,y:482.85,startPosition:212},0).wait(1).to({x:321.05,y:479.05,startPosition:213},0).wait(1).to({x:328.4,y:475.25,startPosition:214},0).wait(1).to({x:335.75,y:471.45,startPosition:215},0).wait(1).to({x:343.15,y:467.65,startPosition:216},0).wait(1).to({x:350.5,y:463.8,startPosition:217},0).wait(1).to({x:357.85,y:460,startPosition:218},0).wait(1).to({x:365.25,y:456.2,startPosition:219},0).wait(1).to({x:372.6,y:452.4,startPosition:220},0).wait(1).to({x:379.95,y:448.6,startPosition:221},0).wait(1).to({x:387.3,y:444.8,startPosition:222},0).wait(1).to({x:394.7,y:441,startPosition:223},0).wait(1).to({x:402.05,y:437.2,startPosition:224},0).wait(1).to({x:409.4,y:433.4,startPosition:225},0).wait(1).to({x:416.8,y:429.6,startPosition:226},0).wait(1).to({x:424.15,y:425.8,startPosition:227},0).wait(1).to({x:431.5,y:422,startPosition:228},0).wait(1).to({x:438.9,y:418.2,startPosition:229},0).wait(1).to({x:446.25,y:414.4,startPosition:230},0).wait(1).to({x:453.6,y:410.6,startPosition:231},0).wait(1).to({x:461,y:406.8,startPosition:232},0).wait(1).to({x:468.35,y:403,startPosition:233},0).wait(1).to({x:475.7,y:399.2,startPosition:234},0).wait(1).to({x:483.1,y:395.4,startPosition:235},0).wait(1).to({x:490.45,y:391.55,startPosition:236},0).wait(1).to({x:497.8,y:387.75,startPosition:237},0).wait(1).to({x:505.15,y:383.95,startPosition:238},0).wait(1).to({x:512.55,y:380.15,startPosition:239},0).wait(1).to({x:519.9,y:376.35,startPosition:240},0).wait(1).to({x:527.25,y:372.55,startPosition:241},0).wait(1).to({x:534.65,y:368.75,startPosition:242},0).wait(1).to({x:542,y:364.95,startPosition:243},0).wait(1).to({x:549.35,y:361.15,startPosition:244},0).wait(1).to({x:556.75,y:357.35,startPosition:245},0).wait(1).to({x:564.1,y:353.55,startPosition:246},0).wait(1).to({x:571.45,y:349.75,startPosition:247},0).wait(1).to({x:578.85,y:345.95,startPosition:248},0).wait(1).to({x:586.2,y:342.15,startPosition:249},0).wait(1).to({x:593.55,y:338.35,startPosition:250},0).wait(1).to({x:600.9,y:334.55,startPosition:251},0).wait(1).to({x:608.3,y:330.75,startPosition:252},0).wait(1).to({x:615.65,y:326.95,startPosition:253},0).wait(1).to({x:623,y:323.15,startPosition:254},0).wait(1).to({x:630.4,y:319.3,startPosition:255},0).wait(1).to({x:637.75,y:315.5,startPosition:256},0).wait(1).to({x:645.1,y:311.7,startPosition:257},0).wait(1).to({x:652.5,y:307.9,startPosition:258},0).wait(1).to({x:659.85,y:304.1,startPosition:259},0).wait(1).to({x:667.2,y:300.3,startPosition:260},0).wait(1).to({x:674.6,y:296.5,startPosition:261},0).wait(1).to({x:681.95,y:292.7,startPosition:262},0).wait(1).to({x:689.3,y:288.9,startPosition:263},0).wait(1).to({x:696.7,y:285.1,startPosition:264},0).wait(1).to({x:704.05,y:281.3,startPosition:265},0).wait(1).to({x:711.4,y:277.5,startPosition:266},0).wait(1).to({x:718.75,y:273.7,startPosition:267},0).wait(1).to({x:726.15,y:269.9,startPosition:268},0).wait(1).to({x:733.5,y:266.1,startPosition:269},0).wait(1).to({x:740.85,y:262.3,startPosition:270},0).wait(1).to({x:748.25,y:258.5,startPosition:271},0).wait(1).to({x:755.6,y:254.7,startPosition:272},0).wait(1).to({x:762.95,y:250.9,startPosition:273},0).wait(1).to({x:770.35,y:247.1,startPosition:274},0).wait(1).to({x:779,y:243.75,startPosition:275},0).wait(1).to({x:787.7,y:240.45,startPosition:0},0).wait(1).to({x:796.4,y:237.15,startPosition:1},0).wait(1).to({x:805.1,y:233.85,startPosition:2},0).wait(1).to({x:813.8,y:230.5,startPosition:3},0).wait(1).to({x:822.45,y:227.2,startPosition:4},0).wait(1).to({x:831.15,y:223.9,startPosition:5},0).wait(1).to({x:839.85,y:220.6,startPosition:6},0).wait(1).to({x:848.55,y:217.3,startPosition:7},0).wait(1).to({x:857.2,y:213.95,startPosition:8},0).wait(1).to({x:865.9,y:210.65,startPosition:9},0).wait(1).to({x:874.6,y:207.35,startPosition:10},0).wait(1).to({x:883.3,y:204.05,startPosition:11},0).wait(1).to({x:891.95,y:200.75,startPosition:12},0).wait(1).to({x:900.65,y:197.4,startPosition:13},0).wait(1).to({x:909.35,y:194.1,startPosition:14},0).wait(1).to({x:918.05,y:190.8,startPosition:15},0).wait(1).to({x:926.75,y:187.5,startPosition:16},0).wait(1).to({x:935.4,y:184.2,startPosition:17},0).wait(1).to({x:944.1,y:180.85,startPosition:18},0).wait(1).to({x:952.8,y:177.55,startPosition:19},0).wait(1).to({x:961.5,y:174.25,startPosition:20},0).wait(1).to({x:970.15,y:170.95,startPosition:21},0).wait(1).to({x:978.85,y:167.65,startPosition:22},0).wait(1).to({x:987.55,y:164.3,startPosition:23},0).wait(1).to({x:996.25,y:161,startPosition:24},0).wait(1).to({x:1004.9,y:157.7,startPosition:25},0).wait(1).to({x:1013.6,y:154.4,startPosition:26},0).wait(1).to({x:1022.3,y:151.05,startPosition:27},0).wait(1).to({x:1031,y:147.75,startPosition:28},0).wait(1).to({x:1039.7,y:144.45,startPosition:29},0).wait(1).to({x:1048.35,y:141.15,startPosition:30},0).wait(1).to({x:1057.05,y:137.85,startPosition:31},0).wait(1).to({x:1065.75,y:134.5,startPosition:32},0).wait(1).to({x:1074.45,y:131.2,startPosition:33},0).wait(1).to({x:1083.1,y:127.9,startPosition:34},0).wait(1).to({x:1091.8,y:124.6,startPosition:35},0).wait(1).to({x:1100.5,y:121.3,startPosition:36},0).wait(1).to({x:1109.2,y:117.95,startPosition:37},0).wait(1).to({x:1117.85,y:114.65,startPosition:38},0).wait(1).to({x:1126.55,y:111.35,startPosition:39},0).wait(1).to({x:1135.25,y:108.05,startPosition:40},0).wait(1).to({x:1143.95,y:104.75,startPosition:41},0).wait(1).to({x:1152.65,y:101.4,startPosition:42},0).wait(1).to({x:1161.3,y:98.1,startPosition:43},0).wait(1).to({x:1170,y:94.8,startPosition:44},0).wait(1).to({x:1178.7,y:91.5,startPosition:45},0).wait(1).to({x:1187.4,y:88.2,startPosition:46},0).wait(1).to({startPosition:47},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.window("synched",0);
	this.instance.setTransform(898.25,177.1,1,1,0,0,0,346.1,125);

	this.instance_1 = new lib.bed("synched",0);
	this.instance_1.setTransform(298.15,472.2,1.0203,1.2418,0,0,180,250.3,182.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.powerpaf_waiking_up("synched",0);
	this.instance.setTransform(341.6,428.4,0.7918,0.7138,-39.257,0,0,224.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.alarm("synched",0);
	this.instance.setTransform(866,297.6,1.1802,1.1526,0,0,0,135.8,157.3);

	this.instance_1 = new lib.dresser("synched",0);
	this.instance_1.setTransform(876.25,532.25,1,0.5693,0,0,0,274.6,209);

	this.instance_2 = new lib.sun("synched",0);
	this.instance_2.setTransform(1126.35,157.7,0.2084,0.1843,0,0,0,391.8,360.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.instance = new lib.Symbol2();
	this.instance.setTransform(465.2,147.7,1,1,0,0,0,903.3,218.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({x:470.7},0).wait(1).to({x:476.2},0).wait(1).to({x:481.7},0).wait(1).to({x:487.2},0).wait(1).to({x:492.7},0).wait(1).to({x:498.2},0).wait(1).to({x:503.7},0).wait(1).to({x:509.2},0).wait(1).to({x:514.7},0).wait(1).to({x:520.2},0).wait(1).to({x:525.7},0).wait(1).to({x:531.2},0).wait(1).to({x:536.7},0).wait(1).to({x:542.2},0).wait(1).to({x:547.7},0).wait(1).to({x:553.2},0).wait(1).to({x:558.7},0).wait(1).to({x:564.2},0).wait(1).to({x:569.7},0).wait(1).to({x:575.2},0).wait(1).to({x:580.7},0).wait(1).to({x:586.2},0).wait(1).to({x:591.7},0).wait(1).to({x:597.2},0).wait(1).to({x:602.7},0).wait(1).to({x:608.2},0).wait(1).to({x:613.7},0).wait(1).to({x:619.2},0).wait(1).to({x:624.7},0).wait(1).to({x:630.2},0).wait(1).to({x:635.7},0).wait(1).to({x:641.2},0).wait(1).to({x:646.7},0).wait(1).to({x:652.2},0).wait(1).to({x:657.7},0).wait(1).to({x:663.2},0).wait(1).to({x:668.7},0).wait(1).to({x:674.2},0).wait(1).to({x:679.7},0).wait(1).to({x:685.2},0).wait(1).to({x:690.7},0).wait(1).to({x:696.2},0).wait(1).to({x:701.7},0).wait(1).to({x:707.2},0).wait(1).to({x:712.7},0).wait(1).to({x:718.2},0).wait(1).to({x:723.7},0).wait(1).to({x:729.2},0).wait(1).to({x:734.7},0).wait(1).to({x:740.2},0).wait(1).to({x:745.7},0).wait(1).to({x:751.2},0).wait(1).to({x:756.7},0).wait(1).to({x:762.2},0).wait(1).to({x:767.7},0).wait(1).to({x:773.2},0).wait(1).to({x:778.7},0).wait(1).to({x:784.2},0).wait(1).to({x:789.7},0).wait(1).to({x:795.2},0).wait(1).to({x:800.7},0).wait(1).to({x:806.2},0).wait(1).to({x:811.7},0).wait(1).to({x:817.2},0).wait(1).to({x:822.7},0).wait(1).to({x:828.2},0).wait(1).to({x:833.7},0).wait(1).to({x:839.2},0).wait(1).to({x:844.7},0).wait(1).to({x:850.2},0).wait(1).to({x:855.7},0).wait(1).to({x:861.2},0).wait(1).to({x:866.7},0).wait(1).to({x:872.2},0).wait(1).to({x:877.7},0).wait(1).to({x:883.2},0).wait(1).to({x:888.7},0).wait(1).to({x:894.2},0).wait(1).to({x:899.7},0).wait(1).to({x:905.2},0).wait(244));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cat
	this.instance = new lib.cat("synched",0);
	this.instance.setTransform(-76.05,452.15,0.2973,0.3102,0,0,0,144.8,153.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).wait(1).to({regX:145.1,regY:153.6,x:-68.95,y:452.2,startPosition:1},0).wait(1).to({x:-61.9,startPosition:2},0).wait(1).to({x:-54.9,startPosition:3},0).wait(1).to({x:-47.9,startPosition:4},0).wait(1).to({x:-40.9,startPosition:5},0).wait(1).to({x:-33.9,startPosition:6},0).wait(1).to({x:-26.9,startPosition:7},0).wait(1).to({x:-19.9,startPosition:8},0).wait(1).to({x:-12.9,startPosition:9},0).wait(1).to({x:-5.9,startPosition:10},0).wait(1).to({x:1.1,startPosition:11},0).wait(1).to({x:8.1,startPosition:12},0).wait(1).to({x:15.1,startPosition:13},0).wait(1).to({x:22.1,startPosition:14},0).wait(1).to({x:29.1,startPosition:15},0).wait(1).to({x:36.1,startPosition:16},0).wait(1).to({x:43.1,startPosition:17},0).wait(1).to({x:50.05,startPosition:18},0).wait(1).to({x:57.05,startPosition:19},0).wait(1).to({x:64.05,startPosition:20},0).wait(1).to({x:71.05,startPosition:21},0).wait(1).to({x:78.05,startPosition:22},0).wait(1).to({x:85.05,startPosition:23},0).wait(1).to({x:92.05,startPosition:24},0).wait(1).to({x:99.05,startPosition:25},0).wait(1).to({x:106.05,startPosition:26},0).wait(1).to({x:113.05,startPosition:27},0).wait(1).to({x:120.05,startPosition:28},0).wait(1).to({x:127.05,startPosition:29},0).wait(1).to({x:134.05,startPosition:30},0).wait(1).to({x:141.05,startPosition:31},0).wait(1).to({x:148.05,startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({x:156.95,y:455.1,startPosition:48},0).wait(1).to({x:165.85,y:458,startPosition:49},0).wait(1).to({x:174.75,y:460.9,startPosition:50},0).wait(1).to({x:183.65,y:463.8,startPosition:51},0).wait(1).to({x:192.5,y:466.65,startPosition:52},0).wait(1).to({x:201.4,y:469.55,startPosition:53},0).wait(1).to({x:210.3,y:472.45,startPosition:54},0).wait(1).to({x:219.2,y:475.35,startPosition:0},0).wait(1).to({x:228.05,y:478.2,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({scaleX:0.2804,x:226.9,startPosition:3},0).wait(1).to({scaleX:0.2635,x:225.75,startPosition:4},0).wait(1).to({scaleX:0.2466,x:224.6,startPosition:5},0).wait(1).to({scaleX:0.2297,x:223.45,startPosition:6},0).wait(1).to({scaleX:0.2128,x:222.3,startPosition:7},0).wait(1).to({scaleX:0.1959,x:221.1,startPosition:8},0).wait(1).to({scaleX:0.179,x:219.95,startPosition:9},0).wait(1).to({scaleX:0.1621,x:218.8,startPosition:10},0).wait(1).to({scaleX:0.1452,x:217.65,startPosition:11},0).wait(1).to({scaleX:0.1283,x:216.5,startPosition:12},0).wait(1).to({scaleX:0.1114,x:215.35,startPosition:13},0).wait(1).to({scaleX:0.0945,x:214.2,startPosition:14},0).wait(1).to({scaleX:0.0776,x:213.05,startPosition:15},0).wait(1).to({scaleX:0.0606,x:211.9,startPosition:16},0).wait(1).to({scaleX:0.0437,x:210.7,startPosition:17},0).wait(1).to({scaleX:0.0268,x:209.55,startPosition:18},0).wait(1).to({scaleX:0.0099,x:208.4,startPosition:19},0).wait(1).to({scaleX:0.007,skewY:180,x:207.25,startPosition:20},0).wait(1).to({scaleX:0.0239,x:206.1,startPosition:21},0).wait(1).to({scaleX:0.0408,x:204.95,startPosition:22},0).wait(1).to({scaleX:0.0577,x:203.8,startPosition:23},0).wait(1).to({scaleX:0.0746,x:202.65,startPosition:24},0).wait(1).to({scaleX:0.0915,x:201.45,startPosition:25},0).wait(1).to({scaleX:0.1084,x:200.3,startPosition:26},0).wait(1).to({scaleX:0.1253,x:199.15,startPosition:27},0).wait(1).to({scaleX:0.1422,x:198,startPosition:28},0).wait(1).to({scaleX:0.1591,x:196.85,startPosition:29},0).wait(1).to({scaleX:0.1761,x:195.7,startPosition:30},0).wait(1).to({scaleX:0.193,x:194.55,startPosition:31},0).wait(1).to({scaleX:0.2099,x:193.4,startPosition:32},0).wait(1).to({scaleX:0.2268,x:192.2,startPosition:33},0).wait(1).to({scaleX:0.2437,x:191.05,startPosition:34},0).wait(1).to({scaleX:0.2606,x:189.9,startPosition:35},0).wait(1).to({scaleX:0.2775,x:188.75,startPosition:36},0).wait(1).to({scaleX:0.2944,x:187.6,startPosition:37},0).wait(1).to({scaleX:0.3113,x:186.45,startPosition:38},0).wait(1).to({scaleX:0.3282,x:185.3,startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({x:192.4,y:474.45,startPosition:41},0).wait(1).to({x:199.55,y:470.65,startPosition:42},0).wait(1).to({x:206.65,y:466.85,startPosition:43},0).wait(1).to({x:213.8,y:463.05,startPosition:44},0).wait(1).to({x:220.9,y:459.25,startPosition:45},0).wait(1).to({x:228,y:455.5,startPosition:46},0).wait(1).to({x:235.15,y:451.7,startPosition:47},0).wait(1).to({x:242.25,y:447.9,startPosition:48},0).wait(1).to({x:249.35,y:444.1,startPosition:49},0).wait(1).to({x:256.5,y:440.3,startPosition:50},0).wait(1).to({x:263.6,y:436.55,startPosition:51},0).wait(1).to({x:270.7,y:432.75,startPosition:52},0).wait(1).to({x:277.85,y:428.95,startPosition:53},0).wait(1).to({x:284.95,y:425.15,startPosition:54},0).wait(1).to({x:292.05,y:421.35,startPosition:0},0).wait(1).to({x:299.2,y:417.6,startPosition:1},0).wait(1).to({x:306.3,y:413.8,startPosition:2},0).wait(1).to({x:313.4,y:410,startPosition:3},0).wait(1).to({x:320.55,y:406.2,startPosition:4},0).wait(1).to({x:327.65,y:402.4,startPosition:5},0).wait(1).to({x:334.8,y:398.65,startPosition:6},0).wait(1).to({x:341.9,y:394.85,startPosition:7},0).wait(1).to({x:349,y:391.05,startPosition:8},0).wait(1).to({x:356.15,y:387.25,startPosition:9},0).wait(1).to({x:363.25,y:383.45,startPosition:10},0).wait(1).to({x:370.35,y:379.7,startPosition:11},0).wait(1).to({x:377.5,y:375.9,startPosition:12},0).wait(1).to({x:384.6,y:372.1,startPosition:13},0).wait(1).to({x:391.7,y:368.3,startPosition:14},0).wait(1).to({x:398.85,y:364.5,startPosition:15},0).wait(1).to({x:405.95,y:360.75,startPosition:16},0).wait(1).to({x:413.05,y:356.95,startPosition:17},0).wait(1).to({x:420.2,y:353.15,startPosition:18},0).wait(1).to({x:427.3,y:349.35,startPosition:19},0).wait(1).to({x:434.45,y:345.55,startPosition:20},0).wait(1).to({x:441.55,y:341.8,startPosition:21},0).wait(1).to({x:448.65,y:338,startPosition:22},0).wait(1).to({x:455.8,y:334.2,startPosition:23},0).wait(1).to({x:462.9,y:330.4,startPosition:24},0).wait(1).to({x:470,y:326.6,startPosition:25},0).wait(1).to({x:477.15,y:322.85,startPosition:26},0).wait(1).to({x:484.25,y:319.05,startPosition:27},0).wait(1).to({x:491.35,y:315.25,startPosition:28},0).wait(1).to({x:498.5,y:311.45,startPosition:29},0).wait(1).to({x:505.6,y:307.65,startPosition:30},0).wait(1).to({x:512.7,y:303.9,startPosition:31},0).wait(1).to({x:519.85,y:300.1,startPosition:32},0).wait(1).to({x:526.95,y:296.3,startPosition:33},0).wait(1).to({x:534.1,y:292.5,startPosition:34},0).wait(1).to({x:541.2,y:288.7,startPosition:35},0).wait(1).to({x:548.3,y:284.95,startPosition:36},0).wait(1).to({x:555.45,y:281.15,startPosition:37},0).wait(1).to({x:562.55,y:277.35,startPosition:38},0).wait(1).to({x:569.65,y:273.55,startPosition:39},0).wait(1).to({x:576.8,y:269.75,startPosition:40},0).wait(1).to({x:583.9,y:266,startPosition:41},0).wait(1).to({x:591,y:262.2,startPosition:42},0).wait(1).to({x:598.15,y:258.4,startPosition:43},0).wait(1).to({x:605.25,y:254.6,startPosition:44},0).wait(1).to({x:612.35,y:250.8,startPosition:45},0).wait(1).to({x:619.5,y:247.05,startPosition:46},0).wait(1).to({x:626.6,y:243.25,startPosition:47},0).wait(1).to({x:633.7,y:239.45,startPosition:48},0).wait(1).to({x:640.85,y:235.65,startPosition:49},0).wait(1).to({x:647.95,y:231.85,startPosition:50},0).wait(1).to({x:655.1,y:228.1,startPosition:51},0).wait(1).to({x:662.2,y:224.3,startPosition:52},0).wait(1).to({x:669.3,y:220.5,startPosition:53},0).wait(1).to({x:676.45,y:216.7,startPosition:54},0).wait(1).to({x:683.55,y:212.9,startPosition:0},0).wait(1).to({x:690.65,y:209.15,startPosition:1},0).wait(1).to({x:697.8,y:205.35,startPosition:2},0).wait(1).to({x:704.9,y:201.55,startPosition:3},0).wait(1).to({x:712,y:197.75,startPosition:4},0).wait(1).to({x:719.15,y:193.95,startPosition:5},0).wait(1).to({x:726.25,y:190.15,startPosition:6},0).wait(1).to({x:734.95,y:186.85,startPosition:7},0).wait(1).to({x:743.65,y:183.55,startPosition:8},0).wait(1).to({x:752.35,y:180.25,startPosition:9},0).wait(1).to({x:761,y:176.95,startPosition:10},0).wait(1).to({x:769.7,y:173.65,startPosition:11},0).wait(1).to({x:778.4,y:170.3,startPosition:12},0).wait(1).to({x:787.1,y:167,startPosition:13},0).wait(1).to({x:795.8,y:163.7,startPosition:14},0).wait(1).to({x:804.45,y:160.4,startPosition:15},0).wait(1).to({x:813.15,y:157.1,startPosition:16},0).wait(1).to({x:821.85,y:153.75,startPosition:17},0).wait(1).to({x:830.55,y:150.45,startPosition:18},0).wait(1).to({x:839.25,y:147.15,startPosition:19},0).wait(1).to({x:847.9,y:143.85,startPosition:20},0).wait(1).to({x:856.6,y:140.55,startPosition:21},0).wait(1).to({x:865.3,y:137.2,startPosition:22},0).wait(1).to({x:874,y:133.9,startPosition:23},0).wait(1).to({x:882.7,y:130.6,startPosition:24},0).wait(1).to({x:891.4,y:127.3,startPosition:25},0).wait(1).to({x:900.05,y:124,startPosition:26},0).wait(1).to({x:908.75,y:120.7,startPosition:27},0).wait(1).to({x:917.45,y:117.35,startPosition:28},0).wait(1).to({x:926.15,y:114.05,startPosition:29},0).wait(1).to({x:934.85,y:110.75,startPosition:30},0).wait(1).to({x:943.5,y:107.45,startPosition:31},0).wait(1).to({x:952.2,y:104.15,startPosition:32},0).wait(1).to({x:960.9,y:100.8,startPosition:33},0).wait(1).to({x:969.6,y:97.5,startPosition:34},0).wait(1).to({x:978.3,y:94.2,startPosition:35},0).wait(1).to({x:986.95,y:90.9,startPosition:36},0).wait(1).to({x:995.65,y:87.6,startPosition:37},0).wait(1).to({x:1004.35,y:84.25,startPosition:38},0).wait(1).to({x:1013.05,y:80.95,startPosition:39},0).wait(1).to({x:1021.75,y:77.65,startPosition:40},0).wait(1).to({x:1030.45,y:74.35,startPosition:41},0).wait(1).to({x:1039.1,y:71.05,startPosition:42},0).wait(1).to({x:1047.8,y:67.75,startPosition:43},0).wait(1).to({x:1056.5,y:64.4,startPosition:44},0).wait(1).to({x:1065.2,y:61.1,startPosition:45},0).wait(1).to({x:1073.9,y:57.8,startPosition:46},0).wait(1).to({x:1082.55,y:54.5,startPosition:47},0).wait(1).to({x:1091.25,y:51.2,startPosition:48},0).wait(1).to({x:1099.95,y:47.85,startPosition:49},0).wait(1).to({x:1108.65,y:44.6,startPosition:50},0).wait(1).to({x:1117.35,y:41.3,startPosition:51},0).wait(1).to({x:1126,y:38,startPosition:52},0).wait(1).to({x:1134.7,y:34.7,startPosition:53},0).wait(1).to({x:1143.4,y:31.35,startPosition:54},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_actions = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// actions
	this.start = new lib.play();
	this.start.name = "start";
	this.start.setTransform(880.55,279.05,1.1418,1,0,0,0,-137,3.1);

	this.replay = new lib.cloudReplay();
	this.replay.name = "replay";
	this.replay.setTransform(217.6,95.45,0.8715,0.7845,0,0,0,261.9,121.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start}]}).to({state:[]},1).to({state:[{t:this.replay}]},362).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.animate1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,40,94,219,363];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.actions.start;
		var self=this;
		self.stop();
		
		self.start.addEventListener("click",startPlaying);
		
		function startPlaying() {
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.start = undefined;
		playSound("alarmNEWwav");
	}
	this.frame_40 = function() {
		playSound("PowerpuffNEW2wav");
	}
	this.frame_94 = function() {
		playSound("catNEWwav");
	}
	this.frame_219 = function() {
		playSound("endNEWwav");
	}
	this.frame_363 = function() {
		this.replay = this.actions.replay;
		this.___loopingOver___ = true;
		var self=this;
		self.stop();
		createjs.Sound.stop();
		
		self.replay.addEventListener("click",playAgain);
		
		function playAgain(){
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(39).call(this.frame_40).wait(54).call(this.frame_94).wait(125).call(this.frame_219).wait(144).call(this.frame_363).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(111).to({scaleX:0.9924,scaleY:0.9924,x:635.5174,y:361.9449},0).wait(1).to({scaleX:0.9848,scaleY:0.9848,x:631.0347,y:363.8898},0).wait(1).to({scaleX:0.9772,scaleY:0.9772,x:626.552,y:365.8347},0).wait(1).to({scaleX:0.9696,scaleY:0.9696,x:622.0694,y:367.7796},0).wait(1).to({scaleX:0.962,scaleY:0.962,x:617.5867,y:369.7245},0).wait(1).to({scaleX:0.9544,scaleY:0.9544,x:613.1041,y:371.6694},0).wait(1).to({scaleX:0.9468,scaleY:0.9468,x:608.6214,y:373.6143},0).wait(1).to({scaleX:0.9392,scaleY:0.9392,x:604.1388,y:375.5592},0).wait(1).to({scaleX:0.9316,scaleY:0.9316,x:599.6561,y:377.5041},0).wait(1).to({scaleX:0.924,scaleY:0.924,x:595.1735,y:379.449},0).wait(1).to({scaleX:0.9164,scaleY:0.9164,x:590.6908,y:381.3939},0).wait(1).to({scaleX:0.9087,scaleY:0.9087,x:586.2082,y:383.3388},0).wait(1).to({scaleX:0.9011,scaleY:0.9011,x:581.7255,y:385.2837},0).wait(1).to({scaleX:0.8935,scaleY:0.8935,x:577.2429,y:387.2286},0).wait(1).to({scaleX:0.8859,scaleY:0.8859,x:572.7602,y:389.1735},0).wait(1).to({scaleX:0.8783,scaleY:0.8783,x:568.2776,y:391.1184},0).wait(1).to({scaleX:0.8707,scaleY:0.8707,x:563.7949,y:393.0633},0).wait(1).to({scaleX:0.8631,scaleY:0.8631,x:559.3122,y:395.0082},0).wait(1).to({scaleX:0.8555,scaleY:0.8555,x:554.8296,y:396.9531},0).wait(1).to({scaleX:0.8479,scaleY:0.8479,x:550.3469,y:398.898},0).wait(1).to({scaleX:0.8403,scaleY:0.8403,x:545.8643,y:400.8429},0).wait(1).to({scaleX:0.8327,scaleY:0.8327,x:541.3816,y:402.7878},0).wait(1).to({scaleX:0.8251,scaleY:0.8251,x:536.899,y:404.7327},0).wait(1).to({scaleX:0.8175,scaleY:0.8175,x:532.4163,y:406.6776},0).wait(1).to({scaleX:0.8099,scaleY:0.8099,x:527.9337,y:408.6225},0).wait(1).to({scaleX:0.8023,scaleY:0.8023,x:523.451,y:410.5673},0).wait(1).to({scaleX:0.7947,scaleY:0.7947,x:518.9684,y:412.5122},0).wait(1).to({scaleX:0.7871,scaleY:0.7871,x:514.4857,y:414.4571},0).wait(1).to({scaleX:0.7795,scaleY:0.7795,x:510.0031,y:416.402},0).wait(1).to({scaleX:0.7719,scaleY:0.7719,x:505.5204,y:418.3469},0).wait(1).to({scaleX:0.7643,scaleY:0.7643,x:501.0378,y:420.2918},0).wait(1).to({scaleX:0.7567,scaleY:0.7567,x:496.5551,y:422.2367},0).wait(1).to({scaleX:0.7491,scaleY:0.7491,x:492.0725,y:424.1816},0).wait(1).to({scaleX:0.7414,scaleY:0.7414,x:487.5898,y:426.1265},0).wait(1).to({scaleX:0.7338,scaleY:0.7338,x:483.1071,y:428.0714},0).wait(1).to({scaleX:0.7262,scaleY:0.7262,x:478.6245,y:430.0163},0).wait(1).to({scaleX:0.7186,scaleY:0.7186,x:474.1418,y:431.9612},0).wait(1).to({scaleX:0.711,scaleY:0.711,x:469.6592,y:433.9061},0).wait(1).to({scaleX:0.7034,scaleY:0.7034,x:465.1765,y:435.851},0).wait(1).to({scaleX:0.6958,scaleY:0.6958,x:460.6939,y:437.7959},0).wait(1).to({scaleX:0.6882,scaleY:0.6882,x:456.2112,y:439.7408},0).wait(1).to({scaleX:0.6806,scaleY:0.6806,x:451.7286,y:441.6857},0).wait(1).to({scaleX:0.673,scaleY:0.673,x:447.2459,y:443.6306},0).wait(1).to({scaleX:0.6654,scaleY:0.6654,x:442.7633,y:445.5755},0).wait(1).to({scaleX:0.6578,scaleY:0.6578,x:438.2806,y:447.5204},0).wait(1).to({scaleX:0.6502,scaleY:0.6502,x:433.798,y:449.4653},0).wait(1).to({scaleX:0.6426,scaleY:0.6426,x:429.3153,y:451.4102},0).wait(1).to({scaleX:0.635,scaleY:0.635,x:424.8327,y:453.3551},0).wait(1).to({scaleX:0.6274,scaleY:0.6274,x:420.35,y:455.3},0).wait(80).to({scaleX:0.6323,scaleY:0.6323,x:423.3387,y:453.9933},0).wait(1).to({scaleX:0.6371,scaleY:0.6371,x:426.3273,y:452.6867},0).wait(1).to({scaleX:0.642,scaleY:0.642,x:429.316,y:451.38},0).wait(1).to({scaleX:0.6469,scaleY:0.6469,x:432.3047,y:450.0733},0).wait(1).to({scaleX:0.6518,scaleY:0.6518,x:435.2933,y:448.7667},0).wait(1).to({scaleX:0.6566,scaleY:0.6566,x:438.282,y:447.46},0).wait(1).to({scaleX:0.6615,scaleY:0.6615,x:441.2707,y:446.1533},0).wait(1).to({scaleX:0.6664,scaleY:0.6664,x:444.2593,y:444.8467},0).wait(1).to({scaleX:0.6713,scaleY:0.6713,x:447.248,y:443.54},0).wait(1).to({scaleX:0.6762,scaleY:0.6762,x:450.2367,y:442.2333},0).wait(1).to({scaleX:0.681,scaleY:0.681,x:453.2253,y:440.9267},0).wait(1).to({scaleX:0.6859,scaleY:0.6859,x:456.214,y:439.62},0).wait(1).to({scaleX:0.6908,scaleY:0.6908,x:459.2027,y:438.3133},0).wait(1).to({scaleX:0.6957,scaleY:0.6957,x:462.1913,y:437.0067},0).wait(1).to({scaleX:0.7005,scaleY:0.7005,x:465.18,y:435.7},0).wait(1).to({scaleX:0.7054,scaleY:0.7054,x:468.1687,y:434.3933},0).wait(1).to({scaleX:0.7103,scaleY:0.7103,x:471.1573,y:433.0867},0).wait(1).to({scaleX:0.7152,scaleY:0.7152,x:474.146,y:431.78},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:477.1347,y:430.4733},0).wait(1).to({scaleX:0.7249,scaleY:0.7249,x:480.1233,y:429.1667},0).wait(1).to({scaleX:0.7298,scaleY:0.7298,x:483.112,y:427.86},0).wait(1).to({scaleX:0.7347,scaleY:0.7347,x:486.1007,y:426.5533},0).wait(1).to({scaleX:0.7396,scaleY:0.7396,x:489.0893,y:425.2467},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,x:492.078,y:423.94},0).wait(1).to({scaleX:0.7493,scaleY:0.7493,x:495.0667,y:422.6333},0).wait(1).to({scaleX:0.7542,scaleY:0.7542,x:498.0553,y:421.3267},0).wait(1).to({scaleX:0.7591,scaleY:0.7591,x:501.044,y:420.02},0).wait(1).to({scaleX:0.7639,scaleY:0.7639,x:504.0327,y:418.7133},0).wait(1).to({scaleX:0.7688,scaleY:0.7688,x:507.0213,y:417.4067},0).wait(1).to({scaleX:0.7737,scaleY:0.7737,x:510.01,y:416.1},0).wait(1).to({scaleX:0.7786,scaleY:0.7786,x:512.9987,y:414.7933},0).wait(1).to({scaleX:0.7835,scaleY:0.7835,x:515.9873,y:413.4867},0).wait(1).to({scaleX:0.7883,scaleY:0.7883,x:518.976,y:412.18},0).wait(1).to({scaleX:0.7932,scaleY:0.7932,x:521.9647,y:410.8733},0).wait(1).to({scaleX:0.7981,scaleY:0.7981,x:524.9533,y:409.5667},0).wait(1).to({scaleX:0.803,scaleY:0.803,x:527.942,y:408.26},0).wait(1).to({scaleX:0.8078,scaleY:0.8078,x:530.9307,y:406.9533},0).wait(1).to({scaleX:0.8127,scaleY:0.8127,x:533.9193,y:405.6467},0).wait(1).to({scaleX:0.8176,scaleY:0.8176,x:536.908,y:404.34},0).wait(1).to({scaleX:0.8225,scaleY:0.8225,x:539.8967,y:403.0333},0).wait(1).to({scaleX:0.8274,scaleY:0.8274,x:542.8853,y:401.7267},0).wait(1).to({scaleX:0.8322,scaleY:0.8322,x:545.874,y:400.42},0).wait(1).to({scaleX:0.8371,scaleY:0.8371,x:548.8627,y:399.1133},0).wait(1).to({scaleX:0.842,scaleY:0.842,x:551.8513,y:397.8067},0).wait(1).to({scaleX:0.8469,scaleY:0.8469,x:554.84,y:396.5},0).wait(1).to({scaleX:0.8517,scaleY:0.8517,x:557.8287,y:395.1933},0).wait(1).to({scaleX:0.8566,scaleY:0.8566,x:560.8173,y:393.8867},0).wait(1).to({scaleX:0.8615,scaleY:0.8615,x:563.806,y:392.58},0).wait(1).to({scaleX:0.8664,scaleY:0.8664,x:566.7947,y:391.2733},0).wait(1).to({scaleX:0.8712,scaleY:0.8712,x:569.7833,y:389.9667},0).wait(1).to({scaleX:0.8761,scaleY:0.8761,x:572.772,y:388.66},0).wait(1).to({scaleX:0.881,scaleY:0.881,x:575.7607,y:387.3533},0).wait(1).to({scaleX:0.8859,scaleY:0.8859,x:578.7493,y:386.0467},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,x:581.738,y:384.74},0).wait(1).to({scaleX:0.8956,scaleY:0.8956,x:584.7267,y:383.4333},0).wait(1).to({scaleX:0.9005,scaleY:0.9005,x:587.7153,y:382.1267},0).wait(1).to({scaleX:0.9054,scaleY:0.9054,x:590.704,y:380.82},0).wait(1).to({scaleX:0.9103,scaleY:0.9103,x:593.6927,y:379.5133},0).wait(1).to({scaleX:0.9151,scaleY:0.9151,x:596.6813,y:378.2067},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:599.67,y:376.9},0).wait(1).to({scaleX:0.9249,scaleY:0.9249,x:602.6587,y:375.5933},0).wait(1).to({scaleX:0.9298,scaleY:0.9298,x:605.6473,y:374.2867},0).wait(1).to({scaleX:0.9347,scaleY:0.9347,x:608.636,y:372.98},0).wait(1).to({scaleX:0.9395,scaleY:0.9395,x:611.6247,y:371.6733},0).wait(1).to({scaleX:0.9444,scaleY:0.9444,x:614.6133,y:370.3667},0).wait(1).to({scaleX:0.9493,scaleY:0.9493,x:617.602,y:369.06},0).wait(1).to({scaleX:0.9542,scaleY:0.9542,x:620.5907,y:367.7533},0).wait(1).to({scaleX:0.959,scaleY:0.959,x:623.5793,y:366.4467},0).wait(1).to({scaleX:0.9639,scaleY:0.9639,x:626.568,y:365.14},0).wait(1).to({scaleX:0.9688,scaleY:0.9688,x:629.5567,y:363.8333},0).wait(1).to({scaleX:0.9737,scaleY:0.9737,x:632.5453,y:362.5267},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:635.534,y:361.22},0).wait(1).to({scaleX:0.9834,scaleY:0.9834,x:638.5227,y:359.9133},0).wait(1).to({scaleX:0.9883,scaleY:0.9883,x:641.5113,y:358.6067},0).wait(1).to({scaleX:0.9932,scaleY:0.9932,x:644.5,y:357.3},0).wait(51));

	// actions_obj_
	this.actions = new lib.Scene_1_actions();
	this.actions.name = "actions";
	this.actions.setTransform(880.5,279,1,1,0,0,0,880.5,279);
	this.actions.depth = 0;
	this.actions.isAttachedToCamera = 0
	this.actions.isAttachedToMask = 0
	this.actions.layerDepth = 0
	this.actions.layerIndex = 0
	this.actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.actions).wait(363).to({regX:883.4,regY:276.9,scaleX:1.0069,scaleY:1.0069},0).wait(1));

	// power_puff_obj_
	this.power_puff = new lib.Scene_1_power_puff();
	this.power_puff.name = "power_puff";
	this.power_puff.depth = 0;
	this.power_puff.isAttachedToCamera = 0
	this.power_puff.isAttachedToMask = 0
	this.power_puff.layerDepth = 0
	this.power_puff.layerIndex = 1
	this.power_puff.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.power_puff).wait(41).to({regX:677,regY:314.1,x:677,y:314.1},0).wait(323));

	// cat_obj_
	this.cat = new lib.Scene_1_cat();
	this.cat.name = "cat";
	this.cat.depth = 0;
	this.cat.isAttachedToCamera = 0
	this.cat.isAttachedToMask = 0
	this.cat.layerDepth = 0
	this.cat.layerIndex = 2
	this.cat.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cat).wait(89).to({regX:536,regY:254.8,x:536,y:254.8},0).wait(275));

	// clouds_obj_
	this.clouds = new lib.Scene_1_clouds();
	this.clouds.name = "clouds";
	this.clouds.depth = 0;
	this.clouds.isAttachedToCamera = 0
	this.clouds.isAttachedToMask = 0
	this.clouds.layerDepth = 0
	this.clouds.layerIndex = 3
	this.clouds.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(41).to({regX:685.2,regY:147.7,x:685.2,y:147.7},0).wait(323));

	// trees_obj_
	this.trees = new lib.Scene_1_trees();
	this.trees.name = "trees";
	this.trees.depth = 0;
	this.trees.isAttachedToCamera = 0
	this.trees.isAttachedToMask = 0
	this.trees.layerDepth = 0
	this.trees.layerIndex = 4
	this.trees.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.trees).wait(41).to({regX:883.5,regY:463.5,x:883.5,y:463.5},0).wait(323));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 5
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(160).to({regX:18.8,regY:229.5,scaleX:1.594,scaleY:1.594,x:-0.05,y:0.1},0).wait(202).to({regX:8.9,regY:-0.2,scaleX:1.0069,scaleY:1.0069,x:0,y:0},0).wait(2));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.setTransform(295.7,372.8,1,1,0,0,0,295.7,372.8);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 6
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).to({_off:true},40).wait(324));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.setTransform(904.8,371.2,1,1,0,0,0,904.8,371.2);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 7
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).to({_off:true},40).wait(324));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.setTransform(643.6,375,1,1,0,0,0,643.6,375);
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 8
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).to({_off:true},40).wait(324));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.setTransform(641.3,620.1,1,1,0,0,0,641.3,620.1);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 9
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(4).to({_off:true},36).wait(324));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(100.5,288.1,2206.1,462.5);
// library properties:
lib.properties = {
	id: 'ED4C99C5B21B8843967D36BA4AAFAB9B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animate1_atlas_1.png?1598459046455", id:"animate1_atlas_1"},
		{src:"images/animate1_atlas_2.png?1598459046456", id:"animate1_atlas_2"},
		{src:"images/animate1_atlas_3.png?1598459046456", id:"animate1_atlas_3"},
		{src:"sounds/alarmNEWwav.mp3?1598459046718", id:"alarmNEWwav"},
		{src:"sounds/catNEWwav.mp3?1598459046718", id:"catNEWwav"},
		{src:"sounds/endNEWwav.mp3?1598459046718", id:"endNEWwav"},
		{src:"sounds/PowerpuffNEW2wav.mp3?1598459046718", id:"PowerpuffNEW2wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ED4C99C5B21B8843967D36BA4AAFAB9B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;