(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animate1_atlas_1", frames: [[0,907,1099,836],[0,0,1244,905],[1246,597,656,589],[1101,1188,656,589],[1246,0,661,595]]},
		{name:"animate1_atlas_2", frames: [[610,0,415,894],[1027,0,415,894],[1444,0,415,894],[609,896,615,584],[1226,896,615,584],[0,617,607,604],[0,0,608,615]]}
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



(lib.CachedBmp_13 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(2);
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
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["animate1_atlas_2"]);
	this.gotoAndStop(4);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},40).to({state:[{t:this.shape_1},{t:this.shape}]},120).to({state:[{t:this.shape_1},{t:this.shape}]},30).to({state:[{t:this.shape_1},{t:this.shape}]},10).wait(115));

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
	this.shape.graphics.f().s("#ABABAB").ss(1,1,1).p("EhlagOrMDK1AAAIAAdXMjK1AAAg");
	this.shape.setTransform(641.275,604.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EhlaAOsIAA9XMDK1AAAIAAdXg");
	this.shape_1.setTransform(641.275,604.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#ABABAB").ss(1,1,1).p("EhlaAAAIAAAAMDK1AAAIAAAA");
	this.shape_2.setTransform(641.275,510.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("EhlaASwMAAAglfMDK1AAAMAAAAlfg");
	this.shape_3.setTransform(641.275,630.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).wait(36));

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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXCGQgdgHgfgdQgVgTgKgQQgFgIgIgVQgHgUgGgJIgNgQIgNgQQgOgXAJgRQAEgKAMgCQAMgDAGAIQAGAHACASQADAHAJAIQAMAKACAEQAHAJAFAUQAGAVAGAIQAEAGAKAHIAOAMIAKAOQAGAIAGAEQARAMAYgNQAHgDAMgJIATgLIAYgKQAPgFAHgIQAJgKAHgdIAVhrQADgPAHgIQAIgMAKADQALACADANQACALgDAOIgUBiQgIAkgLAVQgQAegZAGQgVACgJAFQgFADgGAGIgLALQgNAMgSADIgLABQgMAAgLgEg");
	this.shape.setTransform(196.2963,52.4693);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhWBYQhaiPgoh9Qgph9AogzQAngxBdApQBcAqBQDMQBQDLAuCTQAvCSgqAFQgpAGhWhOQhYhPhZiQg");
	this.shape_1.setTransform(162.7469,55.0036);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9C3B8").s().p("ABbE3QhYhPhZiQQhaiPgoh9Qgph9AogzQAngxBdApQBcAqBQDMQBQDLAuCTQAvCSgqAFIgGAAQgqAAhPhIg");
	this.shape_2.setTransform(162.7469,55.0036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// body
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(120.1,-219.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABJAgQgbgCg6gIIiegWQgGgBgFgCQgFgEABgIQAAgIAGgEQAHgGATgBQAygCBkASQBhARAzgDQAVAAAGADQAHABAFAHQADAHgBAGQgFAMgWACIggABQgZAAgdgDg");
	this.shape.setTransform(197.7,56.5541);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApBSQgXgBgMgCIgXgEIgKgDQgbgOgPgEIgSgEQgKgDgDgHIgBgJQgBgGgCgDQgDgDgIgBIgOgCQgIgEgEgMQgFgVgCgCQgCgFgGgGIgJgKIgBAAIgHgJQgEgJAEgIQADgHAJgCIAGABQAMAAAJAIIADAEIAJAPQAHAMAGAGQAEAEAKAIIAPAMIAHAKQAFAHAFACIANAEIANADIALAHQAHAGAEACQAIAEAOAAIAKABQAUABAMgBQAYgDAPgKQASgLAKgVQAHgNAGgcQAEgRAHgGIADgEQAEgDAEgBQAIgCAGADQAFACADAHQADAGAAAKIAAAFIgCALQgFAWgJARIgMAWQgXAqghALIgCABQgOAFgeAAIgFAAg");
	this.shape_1.setTransform(197.4308,62.2703);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArBSIgCAAQgXAAgMgCIAAAAIgXgEIgGgCIgEgBQgYgMgPgFIgEgBIgNgEIgFgBQgHgCgDgEIgCgEIgBgFIAAgEIgCgGIgBgCQgDgDgGgCIgCAAIgLgBIgDgBQgIgDgEgNIAAAAQgFgUgCgDIgBgDIgHgHIgBgCIgIgIIgBAAIgCgDIgFgHQgEgJAEgIQADgHAJgCIAGABQAMAAAJAIIABACIACACIAJAPIABACQAGALAGAFIADADQAEAEAHAGIADACIAMAJIACACIAFAJIACACQAEAFAEACIADABIAKACIADAAIAKADIADACIAIAFIACACQAFAFAEABIADACQAIADALAAIACAAIAIAAQAUABAMgBIACAAQAXgDAOgKIACgBQAQgLAKgUIABgCQAGgMAGgbIABgDQAEgOAGgGIACgDIABgBQAEgDAEgBIAEgBQAFAAAFACIADACQADACACAEQADAGAAAKIAAAFIgBAGIgBAGQgFAWgJARIgMAWIgCADQgWAoggALIgCAAIgBAAQgNAFgcAAIgFAAg");
	this.shape_2.setTransform(197.4308,62.2971);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AArBTIgCAAQgXgBgMgCIAAAAIgXgEIgGgCIgFgBQgXgMgPgFIgEgBIgNgEIgFgBQgHgCgDgEIgCgEIgBgGIAAgDQgBgEgBgDIgCgBQgCgDgGgCIgDAAIgLgBIgCgBQgIgEgEgMIAAAAQgFgUgCgDIgBgDIgGgIIgCgBIgIgJIAAAAIgDgCIgEgHQgFgJAEgIIAAAAQADgIAJgBIAGAAQAMABAJAIIABACIACACIAJAPIABACQAGALAGAFIADADQADAEAIAFIADACIAMAKIACACIAFAJIACACQAEAFAEACIADABIAKADIADAAIAKACIADACIAIAGIACABIAJAHIADABQAIADALAAIACAAIAIABQAUABANgBIABAAQAXgEAPgJIACgBQAQgMAJgUIABgCQAGgNAGgaIABgDQAEgOAFgHIADgCIABgBQADgDAFgBIAEgBQAFgBAEACIAEACQADADABAEQAEAGAAAKIAAAFIgBAGIgBAFQgFAWgJASIgMAWIgBADQgXAoggALIgCABIgBAAQgNAFgcAAIgFAAg");
	this.shape_3.setTransform(197.4359,62.3354);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AArBTIgCAAQgXAAgMgCIAAAAIgXgEIgHgCIgEgBQgXgNgPgEIgEgBIgOgEIgEgBQgHgCgDgFIgCgDIgBgGIgBgEIgBgGIgCgCQgCgDgGgBIgDAAIgLgCIgCgBQgIgDgEgNIAAAAQgFgUgCgDIgBgDIgGgHIgCgCIgIgIIAAAAIgCgDIgFgHQgFgJAEgIIAAAAQADgIAJgBIAGAAIAAAAQAMABAJAIIABACIACACIAJAPIABACQAGALAGAFIACADQAEAEAIAGIADACQAIAFAEAFIACACIAFAIIACACQAEAFAEACIADACIAKACIACAAIALADIACACIAJAFIACACQAFAFAEABIADACQAHADAMAAIACAAIAJAAQATABANgBIACAAQAWgDAPgKIACgBQAQgLAJgUIABgCQAGgNAGgbIABgDQAEgOAFgGIADgDIABgBQADgDAFgCIAEgBQAFAAAEACIAEACQADACABAEQAEAGAAAKIAAAFIgBAGIgBAGQgFAWgJARIgLAXIgCADQgXAoggAMIgCAAIgBAAQgNAFgcAAIgFAAg");
	this.shape_4.setTransform(197.4359,62.3471);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAqBUIgBAAQgXgBgMgCIAAAAIgXgEIgHgCIgEgBQgYgNgOgEIgEgBIgOgEIgEgBQgHgCgEgFIgBgEIgBgFIgBgEIgBgGIgCgCQgCgDgHgCIgCAAIgLgBIgCgBQgIgDgEgNIAAAAQgFgUgCgDIgBgDIgGgIIgCgBIgIgJIAAAAIgCgCIgFgHQgFgJAEgIIAAgBQAEgHAIgBIAGAAQAMABAJAIIABACIACACIAJAPIABABQAGAMAGAFIACADIAMAKIADACIAMAJIABACIAGAJIACACQAEAFAEADIADABIAJACIADAAIALADIACACIAJAFIACACQAFAFADABIAEACQAHADAMAAIACAAIAJABQATABANgBIACAAQAWgEAPgKIACgBQAQgLAJgVIABgCQAGgMAGgbIABgDQAEgPAFgGIADgDIABgBQADgDAFgBIADgBQAGgBAEACIAEACQADADABADQADAGABALIgBAFIAAAGIgBAFQgFAWgIASIgMAXIgCADQgWAoggAMIgCAAIgCAAQgNAGgdAAIgFAAg");
	this.shape_5.setTransform(197.4234,62.3957);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAqBUIgBAAQgXgBgMgCIAAAAIgYgEIgGgCIgEgBQgYgNgPgEIgEgBIgNgEIgFgBQgHgCgDgFIgBgEIgBgGIgBgDIgCgGIgBgCQgDgDgGgCIgCAAIgLgBIgDgBQgIgEgDgMIAAAAQgFgUgCgDIgBgDIgGgIIgCgCIgHgIIgBAAIgCgCIgFgIQgFgJAEgHIAAgBQAEgIAIgBIAGAAQAMABAJAIIABACIACACIAJAQIABABQAGALAGAGIACACQAEAFAIAFIADACIAMAKIABACIAGAJIACACQAEAFAEADIADABIAJACIADABIALACIACACIAJAGIACABIAIAHIAEABQAHADAMAAIACAAIAJABQATABANgBIACAAQAWgEAPgKIACgBQAQgLAJgVIABgCQAGgMAGgcIABgCQAEgPAFgGIADgDIABgBQADgDAFgCIADgBQAFgBAFACIADADQADACACAEQADAGABAKIgBAFIAAAGIgBAGQgFAWgIASIgMAXIgCADQgWAoggAMIgCABIgBAAQgOAFgcAAIgGAAg");
	this.shape_6.setTransform(197.4234,62.4104);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AApBUQgXAAgMgCQgNgCgLgDIgGgCIgFgBQgXgNgPgEIgEgBIgOgEIgEgBQgHgCgDgFIgCgEIgBgGIAAgDQAAgEgCgDIgBgBQgDgDgGgCIgCAAIgMgBIgCgBQgIgEgDgMIAAAAIgGgXIgCgDIgGgIIgCgCIgHgIIgBAAIgCgDIgFgHQgEgJADgIIAAgBQAEgHAIgBIAGAAQAMABAJAIIABACIACACIAJAPIABACQAGALAGAGIACACIAMAKIADACIALAKIACACIAGAJIACACQAEAFAEADIADABIAJADIADAAIAKACIADACIAJAGIABABIAJAHIAEABQAHADAMABIACAAIAJAAQAUABAMgBIACAAQAXgEAOgJIACgBQAQgMAJgVIABgCQAHgNAFgbIABgDQADgOAGgHIACgDIABgBQAEgDAFgBIADgBQAFgBAFACIADACQADACACAEQADAGAAAKIAAAFIgBAGIgBAGQgEAWgIATIgMAWIgCADQgWApggAMIgCABIgBAAQgPAFghAAIgBAAg");
	this.shape_7.setTransform(197.4275,62.4583);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAqBVIgBAAQgXgBgMgCIgYgEIgHgCIgEgBQgYgNgOgFIgEgBIgOgDIgEgBQgHgDgDgFIgCgDIgBgGIAAgDIgCgHIgBgCQgDgDgGgBIgDAAIgLgCIgCgBQgIgDgDgNIAAAAIgGgXIgCgDQgCgEgEgEIgCgCIgHgIIgBAAIgCgDIgFgHQgEgJADgIIAAgBQAEgHAIgBIAGAAIABAAQAMABAIAIIABACIACACIAJAQIABABQAGALAGAGIACACIAMALIACACQAIAFAEAFIACACIAGAJIACACIAHAHIADABQAEACAGABIADAAIAKADIADABIAJAGIABACQAGAFADABIADACQAIADAMAAIACAAIAJABQAUABAMgBIACAAQAXgEAOgKIACgBQAQgLAKgVIABgCQAGgNAFgcIABgDQADgOAGgHIACgDIABgBQAEgDAEgBIAEgBQAFgBAFABIADADQADACACADQADAGAAALIAAAFIgBAGIgBAGQgEAWgIASIgMAXIgCADQgWAqggAMIgCAAIgBAAQgNAGgeAAIgFAAg");
	this.shape_8.setTransform(197.4275,62.4819);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAqBVIgBAAQgXAAgMgCQgNgBgLgDIgHgDIgEgBQgYgNgPgEIgEgBIgNgEIgEgBQgIgCgCgFIgCgEIgBgGIAAgDIgCgHIgBgBQgDgDgGgCIgDAAIgLgBIgCgBQgIgEgDgNIAAAAIgGgWIgCgEIgGgIIgCgCIgHgIIgDgCIgFgHQgEgKADgIIAAgBQAEgHAIgBIAGAAIABAAQAMABAIAIIABACIACACIAJAQIABABQAGAMAGAFIACADIAMAKIACACQAIAGAEAEIACACIAGAJIACACIAHAIIADABQAEACAGABIADAAIAKADIADABIAJAGIABABQAGAFADACIADACQAIADAMAAIACAAIAJABQAUAAAMgBIACAAQAXgDAOgKIACgBQAQgMAKgVIABgCQAGgNAFgcIABgCQADgPAGgHIACgDIABgBQAEgDAEgBIAEgBQAFgCAFACIADACQADACACAEQADAGAAAKIAAAGIgBAFIgBAHQgEAWgIASIgMAXIgCADQgWAqggAMIgCABIgBAAQgNAFgdAAIgGAAg");
	this.shape_9.setTransform(197.4275,62.4949);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAqBWIgBAAQgXgBgMgCIgYgEIgHgCIgEgCQgYgNgPgEIgEgBIgOgEIgEgBQgHgCgDgGIgBgDIgBgGIAAgDIgCgHIgBgCQgDgDgHgBIgCAAIgLgBIgCgBQgIgEgEgNIAAAAIgFgXIgCgDQgCgEgEgEIgCgCIgHgIIAAAAIgDgDIgFgHQgEgJADgIIAAgBQAEgHAIgCIAGABIABAAQAMABAIAIIABABIADADIAJAQIAAABQAGALAGAGIACACQAEAFAIAGIACACIAMAKIACACIAGAJIACACQADAFAEADIADABIAKADIADAAIAKADIADABIAJAGIABABIAJAHIADACQAIADAMAAIACAAIAJABQAUABAMgBIACAAQAXgEAOgKIACgBQARgMAJgVIABgCQAGgNAFgcIABgDQADgOAGgHIACgDIABgBQAEgEAEgBIADgBQAGgBAEABIAEADQADACACADQADAGAAALIAAAFIgBAGIgBAGQgEAWgIATIgMAXIgCADQgVAqggAMIgCABIgCAAQgNAGgeAAIgFAAg");
	this.shape_10.setTransform(197.4275,62.5319);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAqBWIgBAAQgXgBgMgBQgNgCgLgDIgHgCIgFgCQgYgNgOgEIgEgBIgOgEIgEgBQgHgCgDgGIgBgDIgBgGIAAgDQgBgFgBgCIgCgCQgCgDgHgBIgCAAIgLgBIgCgBQgIgEgEgNIAAAAIgFgXIgCgDIgFgIIgDgCIgHgIIAAAAIgDgDIgEgHQgFgJADgIIAAgCQAEgHAIgBIAGAAIABAAQAMABAIAIIABACIADADIAJAPIAAABQAGAMAGAGIACACIAMALIACACQAIAGAEAEIACACIAGAJIACACQADAFAEADIADABIAKADIADAAIAKADIADABIAJAGIABACIAJAGIADACQAIADAMABIACAAIAJAAQAUABANgBIABAAQAXgEAPgKIACgBQAQgMAJgVIABgCQAGgNAFgcIABgDQADgPAFgGIADgEIABgBQADgDAFgCIADgBQAGgBAEACIAEACQADACABADQAEAGAAALIAAAFIgBAGIgBAGQgEAWgIATIgMAYIgBADQgWAqggANIgCAAIgCAAQgNAGgeAAIgFAAg");
	this.shape_11.setTransform(197.4313,62.5569);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AApBXQgXgBgMgCQgNgBgLgDIgIgDIgEgBQgYgNgOgEIgEgBIgOgEIgEgBQgHgDgDgFIgBgDIgBgHIAAgDQgBgEgBgDIgCgBQgDgDgGgBIgCAAIgMgCIgBgBQgIgEgEgNIAAAAIgFgWIgCgEIgFgIIgDgCIgHgIIgDgDIgEgHQgFgJADgIIAAgCQAEgHAIgBIAGAAIABAAQAMABAIAIIABACIADADIAJAQIAAABQAGALAGAGIACACQADAFAJAGIACACIAMALIACACIAGAJIACACQADAFAEACIADACIAKADIADAAIAKACIADACIAJAGIABABIAJAHIADACQAIADAMAAIACAAIAJABQAUABANgCIABAAQAXgDAPgKIACgBQAQgMAJgVIABgCQAGgOAFgcIABgDQADgOAFgHIADgEIABgBQADgDAFgCIADgBQAGgBAEACIADACQADACACADQAEAGAAAKIAAAGIgBAGIgBAGQgEAWgIATIgMAYIgBADQgWArggAMIgCABIgCAAQgOAGgiAAIgBAAg");
	this.shape_12.setTransform(197.4313,62.5929);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAqBXIgCAAQgXgBgLgBIgBAAQgMgCgMgDIgHgCIgEgCQgYgNgPgEIgEgBIgOgEIgDgBQgIgDgCgFIgBgEIgBgGIgBgDQAAgEgCgDIgBgBQgDgDgGgCIgDAAIgLgBIgCgBQgIgEgDgNIAAAAIgFgXIgBgDIgGgIIgCgCIgHgIIgBAAIgCgDIgFgHQgFgJADgIIABgCQADgHAIgBIAHAAIAAAAQAMABAJAIIABACIACACIAJAQIAAABQAGAMAFAGIACACIAMALIADACIAMAKIACACIAGAKIABACQAEAFAEADIADABQAEACAGABIADAAIAKADIADABIAJAGIABABIAJAHIADACQAIADAMABIACAAIAJAAQAUABANgBIABAAQAXgEAPgKIACgBQAQgMAJgWIABgCQAGgNAFgcIABgDQADgPAFgHIADgDIABgBQADgEAFgBIADgBQAFgCAFACIADACQADACACADQAEAGAAALIAAAFIgBAGIgBAGQgEAWgIATQgFANgHAMIgBADQgWAqggANIgCABIgBAAQgOAGgeAAIgFAAg");
	this.shape_13.setTransform(197.4188,62.6144);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAoBXQgXAAgLgCIgBAAQgMgCgMgCIgHgDIgEgCQgYgNgPgEIgEgBIgOgDIgEgCQgHgDgDgFIAAgEIgBgGIgBgDQAAgEgCgDIgBgBQgDgDgHgBIgCAAIgLgCIgCgBQgIgEgDgNIAAAAIgFgXIgBgDIgGgIIgCgDIgHgHIgDgDIgFgHQgFgKADgHIABgCQADgHAIgCIAHAAIAAAAQAMACAJAIIABACIACACIAJARIAAABQAGALAFAGIACACIAMALIADACIAMALIACACIAGAJIABACQAEAFAEADIADABQAEACAGABIADABIAKACIADABIAJAHIABABIAJAHIADACQAIADAMAAIACAAIAJAAQAUABANgBIABAAQAXgDAPgLIACgBQAQgMAJgVIABgCQAGgNAFgdIABgDQADgPAFgHIADgDIABgBQADgEAFgCIADgBQAFgBAFABIADACIAFAGQAEAGAAAKIAAAFIgBAHIgBAGQgEAVgIAUQgFANgHALIgBADQgWAsggANIgCABIgBAAQgPAGgigBIgCAAg");
	this.shape_14.setTransform(197.4188,62.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAoBYQgXgBgLgBIgBAAQgNgCgLgDIgHgDIgFgBQgYgNgOgFIgEgBIgOgDIgEgCQgHgDgDgFIgBgDIgBgHIAAgCQAAgFgCgDIgBgBQgDgDgHgBIgCAAIgLgCIgCgBQgIgEgDgNIAAAAIgFgWIgBgEIgGgIIgCgDIgHgHIgDgDIgFgHQgFgKADgIIABgBQADgIAIgBIAHAAIAAAAQAMABAJAJIABABIACADIAJAQIAAABQAGAMAFAGIACACIAMALIADACIAMALIACACIAGAJIABACQAEAGAEACIADABIAKAEIADAAIAKACIADABIAJAHIABABIAJAHIADACQAIADAMABIACAAIAJAAQAVABAMgCIABAAQAYgDAOgKIACgBQAQgMAJgWIABgCQAGgOAFgdIABgCQADgPAFgHIACgDIABgBQAEgEAFgCIADgBQAFgCAFACIADACQADACACADQAEAGAAAKIAAAGIgBAGIgBAGQgEAWgIAUQgFAMgHAMIgBADQgWAsggANIgCABIgBAAQgPAGgiAAIgCAAg");
	this.shape_15.setTransform(197.4221,62.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAoBYQgXAAgLgCIgBAAQgNgCgLgDIgIgCIgEgCQgYgNgOgEIgEgBIgPgEIgDgCQgHgDgDgFIgBgDIgBgHIAAgDQAAgEgCgDIgBgBQgDgDgHgBIgCAAIgMgCIgBgBQgIgEgDgNIgFgXIgBgDIgGgIIgCgDIgHgHIAAAAIgDgEIgFgGQgFgKADgIIABgCQADgHAIgBIAHAAIAAAAQAMABAJAIIABACIACADIAJAQIAAABQAGAMAFAGIACACQAEAEAIAHIADACIAMALIACACIAGAJIABACQAEAGAEACIADACIAKADIACAAIALACIACACIAKAGIABABIAJAHIADACQAHAEANAAIACAAIAKAAQAUABAMgBIACAAQAXgEAOgKIACgBQARgMAIgWIABgCQAGgOAFgdIABgDQADgOAFgHIACgEIABgBQAEgEAFgCIACgBQAGgBAEABIAEACIAFAFQAEAGAAALIAAAFIgBAGIgBAGQgEAWgIAUIgLAZIgCADQgVAsggANIgCABIgCAAQgPAGgiAAIgCAAg");
	this.shape_16.setTransform(197.4221,62.7125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAoBZQgXgBgLgBIgBAAQgNgCgLgDIgIgDIgEgCQgYgNgPgEIgEgBIgOgEIgDgBQgIgDgCgGIgBgDIgBgHIAAgCQAAgFgCgCIgBgCQgEgDgGgBIgCAAIgMgBIgBgBQgIgFgDgNIAAAAIgFgWIgBgEIgGgIIgCgDIgHgHIgDgDIgFgHQgFgKADgIIABgCQADgHAIgBIAHAAIAAAAQAMABAJAIIABACIACADIAJAQIAAABQAGAMAFAGIACACIAMALIADACIAMALIACACIAGAKIABACQAEAFAEADIADABIAKADIACABIALACIACABIAKAHIABABIAJAHIADACQAHADANABIACAAIAKAAQAUABAMgCIACAAQAXgDAOgLIACgBQARgMAIgWIABgCQAGgNAFgeIABgCQADgPAFgHIACgEIABgBQAEgEAFgCIACgBQAGgCAEACIADACIAGAFQAEAGAAAKIAAAGIgBAGIgBAGQgEAWgIAUIgLAZIgCADQgVAsggAOIgCABIgCAAQgPAGgiAAIgCAAg");
	this.shape_17.setTransform(197.4221,62.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAqBZIgCAAQgXAAgLgCIgBAAQgNgBgLgDIgIgDIgEgCQgZgNgOgEIgEgBIgOgEIgEgCQgHgDgCgFIgBgDIgBgHIAAgDQgBgEgBgDIgBgBQgEgDgGgBIgDAAIgLgCIgBgBQgIgEgDgOIAAAAIgFgWIgBgDQgCgEgEgFIgCgCIgHgIIgDgDIgFgHQgFgJADgJIABgCQADgHAIgBIAHAAIABAAQAMABAIAJIABABIACADIAJARIAAAAQAGAMAFAGIACACIAMAMIACACQAJAGAEAFIACACIAGAJIABACQAEAGADACIADACQAEACAHABIACAAIALADIACABIAKAGIABABIAJAHIACACQAIAEANAAIACAAIAKABQAUAAAMgBIACAAQAXgDAOgLIACgBQARgMAJgWIABgCQAFgOAFgdIABgDQADgPAFgHIACgEIABgBQAEgEAEgCIADgBQAGgCAEACIADACQADABADAEQAEAFAAALIAAAGIgBAFIgBAHQgEAWgIAUQgFANgGAMIgCADQgVAtggANIgCABIgCABQgNAFgfAAIgFAAg");
	this.shape_18.setTransform(197.4221,62.7448);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAoBaQgXgBgMgBQgNgCgLgDIgIgDIgFgCQgYgNgOgEIgEgBIgPgEIgDgBQgHgEgDgFIAAgDIgBgHIAAgDQgBgFgBgCIgCgBQgDgDgHgBIgCAAIgLgCIgBgBQgIgEgDgOIgFgWIgBgDIgFgJIgDgDIgHgHIgDgEIgEgGQgGgKADgIIABgCQADgHAJgCIAGABIABAAQAMABAIAIIABABIACAEIAJAQIABABQAFAMAFAGIACACIAMAMIACACQAJAGAEAFIACACIAGAJIABACQAEAGADACIADACIALADIACAAIALADIACABIAKAGIABACIAJAGIACACQAIAEAOABIABAAIAKAAQAUABANgCIABAAQAXgDAPgLIACgBQAQgMAJgWIABgCQAFgOAFgeIABgDQADgOAEgIIADgDIABgBQADgFAFgBIADgBQAGgCAEABIADACIAFAFQAFAFAAALIAAAGIgBAGIgBAGQgEAWgIAUQgFANgGANIgBADQgWAtggAOIgCAAIgCABQgOAGgjAAIgCAAg");
	this.shape_19.setTransform(197.4234,62.7929);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAoBaQgXgBgMgBQgNgCgMgDIgIgDIgEgCQgYgNgPgEIgEgBIgOgEIgDgBQgIgEgCgFIAAgDIgBgIIAAgCQgBgFgCgCIgBgBQgDgDgHgBIgCAAIgLgCIgCgBQgIgFgCgNIAAAAIgFgWIgBgEIgFgIIgDgDIgGgHIgEgEIgEgGQgGgKADgIIABgDQADgHAJgBIAGAAIABAAQAMABAIAJIABABIACADIAJARIABABQAFAMAFAGIACACQADAEAJAHIACACQAJAHAEAFIACACIAGAJIABACQAEAGADACIADACIALADIACABIALACIACABQAEACAGAFIABABIAJAHIACACQAIAEAOAAIABAAIAKAAQAUABANgCIABAAQAXgDAPgLIACgBQAQgMAJgWIABgCQAFgOAFgeIABgDQADgOAEgIIADgEIABgBQADgEAFgCIADgBQAFgCAFACIADABQADACACADQAFAGAAAKIAAAGIgBAGIgBAHQgEAWgIAUQgFANgGANIgBADQgWAtggAOIgCABIgBAAQgPAGgjAAIgCAAg");
	this.shape_20.setTransform(197.4234,62.8056);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAoBbQgXgBgMgBQgNgCgMgDIgIgDIgEgCQgZgOgOgEIgEgBIgOgDIgDgCQgIgDgCgGIAAgDIgBgHIAAgCQgBgFgCgDIgBgBQgDgDgHgBIgCAAIgMgCIgBgBQgIgEgCgOIgFgWIgBgDIgFgJIgDgDIgGgHIgEgEIgEgGQgGgKADgIIABgDQAEgHAIgBIAGAAIABAAQAMABAIAJIABABIACADIAJARIABABQAFAMAFAGIACACIAMAMIACACIANALIABACIAHAKIABACIAHAIIADABIAKAEIADAAIALACIACABIAKAHIABABIAIAHIADACQAIAEAOABIABAAIAKAAQAUABANgCIABAAQAXgDAPgLIACgBQAQgMAJgXIABgCQAFgOAFgeIABgDQADgOAEgIIADgEIABgBQADgEAFgCIACgBQAGgCAFABIADACIAFAFQAEAFABALIgBAGIAAAGIgBAGQgEAWgHAVIgMAaIgBADQgVAtggAOIgCABIgCABQgPAGgkAAIgBAAg");
	this.shape_21.setTransform(197.4109,62.8469);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAoBbQgXgBgMgBQgNgCgMgDIgIgDIgEgCQgZgOgOgDIgEgBIgPgEIgDgCQgHgDgCgGIAAgDIgBgHIgBgDQAAgEgCgDIgBgBQgDgDgHgBIgCAAIgMgCIgBgBQgIgEgDgOIgEgWIgBgDQgBgEgEgFIgDgDIgGgHIgDgEIgFgGQgGgKADgJIABgCQAEgHAIgBIAGAAIABAAQAMABAIAJIABABIADADIAJARQAFANAFAGIABACIANAMIACACQAIAGAFAFIABACIAHAKIABACQADAFAEADIADACQAEACAGABIADAAIALADIACABIAKAGIABABIAIAHIADACQAIAFAOAAIABAAIAKAAQAUABANgCIABAAQAXgDAPgLIACgBQAQgMAJgXIABgCQAFgOAFgeIABgDQADgPAEgHIADgEIABgBQADgFAFgCIACgBQAGgCAFACIADABIAFAFQAEAFABALIgBAGIAAAGIgBAHQgEAWgHAUQgFANgHANIgBADQgVAuggAOIgCABIgCABQgPAGgkAAIgBAAg");
	this.shape_22.setTransform(197.4109,62.8679);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAoBcQgXgBgMgBQgOgCgLgDIgIgDIgFgCQgYgOgOgEIgEgBIgPgEIgDgBQgHgEgDgGIAAgDIgBgHIAAgCQAAgFgCgDIgBgBQgEgDgHgBIgCAAIgLgCIgBgBQgIgEgDgOIgEgWIgBgDIgFgJIgDgDIgGgHIgDgEIgFgGQgGgKADgIIABgDQAEgHAIgBIAGAAIABAAQAMABAIAJIABABIADADIAJARIAAABQAFAMAFAGIABACIANAMIACACQAIAGAFAFIABACIAHAKIABACQADAGAEADIADABIAKAEIADAAIALACIACABIAKAHIABABIAIAHIADACQAIAEAOABIABAAIAKAAQAVABAMgCIABAAQAYgDAOgLIACgBQARgNAIgXIABgCQAFgOAFgeIABgDQADgOAEgIIACgEIABgBQAEgFAFgCIACgBQAGgCAEABIADACIAGAFQAEAFABALIgBAGIAAAGIgBAGQgEAWgHAVQgFANgHAOIgBADQgVAuggAOIgCABIgCABQgPAGgkAAIgBAAg");
	this.shape_23.setTransform(197.4132,62.8969);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAFBaQgTgCgPgGQgcgQgPgEIgSgFQgKgDgDgIIgBgKQAAgHgCgDQgDgEgJgBIgNgCQgJgEgDgPIgFgZQgCgGgGgGIgJgLQgNgQAGgMQAFgKAOACQANACAIAJQAFAGAHAPQAGAPAFAGQAEAFALAJQAKAIAEAFIAIAMQAFAIAFACQAEADAJABIANADQAEACAHAGIALAJQAIAFAPAAQAcABAQgCQAZgDAPgMQARgNAJgZQAGgPAFggQADgTAGgIQAFgGAHgCQAHgDAGADQANAHgDAaQgHArgSAkQgWAygjANQgPAGgkAAQgYgBgMgBg");
	this.shape_24.setTransform(197.4067,62.9308);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},7).to({state:[]},1).to({state:[]},11).wait(5));

	// Layer_3
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AuUmGQDVUGGl0GAgblsQJHXnFp3n");
	this.shape_25.setTransform(214,18.7124);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmiLIgFAAQAaikBuh8QBuh7CQgdIBhgKIBfAKQCRAdBvB7QBuB8AbCkIgaAAQi0LzjtAAQjsAAkjrzgAufilIgEAAQASikBKh8QBLh7BggdIBBgKIBBAKQBhAdBKB7QBLB8ARCkIgRAAQjTKCifAAQieAAhrqCg");
	this.shape_26.setTransform(215.1,-3.7876);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AgbitQI6LrF2rrAuUjHQCIKdHyqd");
	this.shape_27.setTransform(214,-0.3968);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmAzIgFAAQAaijBuh8QBuh7CQgdIBhgKIBfAKQCRAdBvB7QBuB8AbCjIgaAAQi7F2jsAAQjsAAkdl2gAufAZIgEAAQASijBKh8QBLh7BggdIBBgKIBBAKQBhAdBKB7QBLB8ARCjIgRAAQj6FPieAAQifAAhElPg");
	this.shape_28.setTransform(215.1,-22.8968);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AgbANIOwAAAuUgMIJ6AA");
	this.shape_29.setTransform(214,-19.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AOKDuIuwAAIgFAAQAaikBuh6QBuh7CQgeIBhgKIBfAKQCRAeBvB7QBuB6AbCkgAkkDUIp7AAIgEAAQASikBKh6QBLh7BggeIBBgKIBBAKQBhAeBKB7QBLB6ARCkg");
	this.shape_30.setTransform(215.1,-41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},16).to({state:[{t:this.shape_30},{t:this.shape_29}]},2).to({state:[]},2).wait(36));

	// body
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(120.1,-219.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(120.1,-219.5,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},25).to({state:[]},1).to({state:[{t:this.instance_1}]},12).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(29).to({_off:true},1).wait(12).to({_off:false},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-219.5,327.6,447);


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
	this.shape_28.graphics.f("#EC782C").s().p("Ag8WuIgcAAIgOAAIgNAAQgIAAAAgDQgLgUgkAKIAAgHQgdABACgWQgHAAgGgDQgPgKgbgBQgHAAgGgCQgegRgogIIAAgOQgGAAgGgCQgegRgogIQAAgHgDgFQgEgIgGgHQgIAAgFgDQgPgKgbgBQAAgHgCAAQgagHgOgNQgGAAgHgCQgvgNgWgoQgHAAgFgCQgugPgKgzQAAgHgDgGQgEgIgHgHQgHAAgCgDQgSgYgOgbQgHAAgFgDQgkgSAHg9QgHAAgBgDQgYgpAFhCIAAgNIAAgcIgHAAQgHhfAAhgIAOAAIAAgOIAAgNIAAgOIAAgpQAWgFgIgkQgBgHAAgHIAAgNIAAgcQAWACgGgdQgCgHAAgHIAAgNQAYg6AKhOQAAgBAHAAQAHgHAEgIQACgGABgGIAAgOIAAgpQAWgFgHgkQgCgHAAgHIABgNQAGg+gUgiIAAgOQgHAAgGgDQgIgDgGgHIgPAAIgNAAQgHAAgGADQgjAKgiAOIAAANQgBAHgDAFQgOATglgDQAAAHgEADQgDADgHAAQAAAHgDAEQgZAegpAOIgNAAQAAAHgDACQgzAggqgbQgHAAgEgDQgQgKgcgBQgGAAgGgCQgngPgEgzIAAgOIAAhfIAOAAIAAgNIAAgpQAVgOAMgYQACgDAGAAIAAgOIAAgbQAOgOAQgKQAEgEAIAAIAAgNIAAgOQApgvAsgtQAEgEAGAAIAAgNIAAgOQAqgMAdgaQAFgDAGAAQA0glBIgQQAGgCAIAAIAAAOIBfAAIAOAAIA3AAIANAAQAcAHAYAMQADACABAGQAQAgAnAIQAGABAHAAIAOAAQApAOAMAqQACAGAAAHQgBANAGALQABADAHAAQAmAKgKA7IgBANIANBSIABAOIAAEQIAAAOIAOAAIABANQAJA6gYAZIAAAbIAAAOIABANQAJBcgYA7IAAAbIAAAOIAAEsIAAAOQgEAuAPAYQADAFAAAHIAAAbIAAAOQAHAcAMAYQABADAIAAIAAAbIAAAOQAGAAAEADQADAEAAAGQAHAHAEAIQADAGAAAHIAAANQAsBCA/AwQACADAAAGQCOA6AlCUIgLAFQgDABAAAHIgNAAgAgrpJQgcgbgEg0QAAgHgBgGQgJgmgRgfIgGAAQgIhtABhtQAGgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB0AWQABAAAAAHQAugFATAWQAEADgBAHIgNAAQAOAOgDAJQgcBig2CPQgsBxg+AUIAAANQgHAAgDgDgAFCvtIgOABQgkAHAJgkQAagcAngSQADgCABgGIAAgOQAvgiA/gTQAGgCAGAAIAAgNQApgIAegRQAFgDAHAAIBSAAIAOAAIAAgNIAOAAIAAgOICxAAIAOAAIAAAOQAAAGgCACQgMAFgNAAQAAAHADADQBuBsg6COQgOANgDgBQiGheiXhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgANYzIIAAgOIAAgbQAbgcAUgmQABgDAHAAIAAgNIAAgOQAegLAQgbQACgDAHAAQAAAHgCAGQgRAlgkASQAAAHgBAHQgGAbgUAOIAAAOIAAAOIgIAAQACAbgUAAIgCAAgANYzIIAAAAgASy0rQgfgfgbgiQAzAKAPAtQACAGAAAHQgGAAgEgDgARt1vQgtgfhRAGIgOAAIgNAAIAAgNQBLgyA6A1QADAEABAGQANAHAKALQAEADAAAHQgHAAgEgDg");
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
	this.shape_51.graphics.f("#EC782C").s().p("AkKWuIgIAAIgIAAIgLAAIgGAAIgJAAIgJAAQgEAAgBgDQgGgUgXAKIAAgHQgTABACgWQgFAAgDgDQgKgKgRgBQgEAAgDgCQgTgRgagIIAAgOQgEAAgDgCQgTgRgZgIQAAgHgCgFIgHgPQgEAAgDgDQgLgKgRgBIAAgHQgQgHgJgNQgFAAgEgCQgegNgNgoQgEAAgEgCQgcgPgHgzQAAgHgCgGQgCgIgFgHQgEAAgBgDQgMgYgJgbQgEAAgDgDQgWgSAEg9QgFAAgBgDQgOgpAChCIAAgNIAAgcIgEAAQgEhfAAhgIAIAAIAAgOIAAgNIAAgOIAAgpQAPgFgFgkIgBgOIAAgNIAAgcQAOACgEgdIgBgOIAAgNQAPg6AGhOQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAFgHACgIQACgGAAgGIAAgOIAAgpQAOgFgEgkIgBgOIAAgNQAEg+gNgiIAAgOQgEAAgEgDQgFgDgEgHIgJAAIgIAAQgFAAgEADQgWAKgVAOIAAANQAAAHgCAFQgJATgYgDQAAAHgCADQgCADgEAAQAAAHgCAEQgQAegZAOIgJAAQAAAHgCACQggAggagbQgFAAgDgDQgKgKgRgBQgEAAgEgCQgYgPgCgzIAAgOIAAhfIAIAAIAAgNIAAgpQANgOAIgYQABgDAEAAIAAgOIAAgbQAJgOAKgKQADgEAEAAIAAgNIAAgOIA2hcQACgEAFAAIAAgNIAAgOQAagMASgaQADgDAEAAQAhglAtgQQAEgCAEAAIAAAOIA9AAIAIAAIAjAAIAIAAQASAHAPAMQACACAAAGQAKAgAZAIIAIABIAIAAQAaAOAIAqQABAGAAAHQAAANAEALQAAADAFAAQAXAKgFA7IgBANIAIBSIAAAOIAAEQIAAAOIAJAAIABANQAFA6gPAZIAAAbIAAAOIABANQAGBcgPA7IAAAbIAAAOIAABOIAADeIAAAOQgDAuAJAYQACAFAAAHIAAAbIAAAOQAFAcAIAYQAAADAFAAIAAAbIAAAOQAEAAACADQACAEAAAGQAFAHACAIQACAGAAAHIAAANQAcBCAnAwQACADAAAGQAoAbAbAtQAzA2AUBQIgLAFQgCABAAAHIgOAAgAj5pJQgcgbgDg0QAAgHgBgGQgJgmgRgfIgHAAQgHhtAAhtQAHgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB1AWQABAAAAAHQAugFATAWQADADAAAHIgNAAQANAOgCAJQgcBig3CPQgrBxhAAUIAAANQgGAAgEgDgAB1vtIgOABQgkAHAJgkQAagcAngSQADgCAAgGIAAgOQAwgiA+gTQAGgCAHAAIAAgNQAogIAegRQAGgDAHAAIBSAAIANAAIAAgNIAOAAIAAgOICyAAIAOAAIAAAOQAAAGgDACQgLAFgNAAQAAAHADADQBuBsg7COQgNANgDgBQiHheiWhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgAKLzIIAAgOIAAgbQAagcAUgmQACgDAHAAIAAgNIAAgOQAdgLARgbQACgDAHAAQAAAHgDAGQgQAlgkASQAAAHgCAHQgFAbgVAOIAAAOIAAAOIgHAAQACAbgUAAIgCAAgAPl0rQgfgfgbgiQAzAKAPAtQACAGAAAHQgHAAgDgDgAOf1vQgsgfhRAGIgOAAIgOAAIAAgNQBMgyA6A1QADAEAAAGQAOAHAKALQAEADAAAHQgHAAgFgDg");
	this.shape_51.setTransform(141.775,145.4173);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F49C59").s().p("ABeM/QgnhBgihFQAAAHgBAAQjnAmkFg6QgHAAgBgDQgihEhegnQAtAAgdgSQgDgCAAgHQgbgBgJgQIgFgLQg7AggXgtQAvgfgRg0QgDgGAAgHIAOAAQAiA+AtAyQADAEAAAHQA6AzBQAdQAGACAHAAQBFA2BtAOIANABQBXAXB2gQQABgBAAgGQA1AGAegRQAFgDAHAAIANAAQAMBNAbA9QADAFAAAHIAAAOQgHAAgCgDgAg8JaIhTAAIgOgBQhNgEhJgJIgNgBQhEgOgqgoQgHAAgHgCQgOgFgOgHQgGAAgGgCQgIgEgHgHQgHAAgDgEIhjhcQgIAAAAgCQgQgkgfgRIgBgNQgEgYgXgEIgOAAQAAgGgBgHQgMgpgOgpQgHAAgDgEQgDgDAAgHIgOAAQAAgHgDgFQgSgdAHg3IgHAAQAAg+gVghIgGAAQgChQgTg4IAAgOIAAgNQBAgUArhxQA3iPAbhiQADgJgOgOIAOAAIANAAIAPAAQBJgxBPgsQAFgCAHAAQAAAGgDACQgoASgaAcQgIAkAkgHIANgBQCaBxChBiIAAgGQBMgBgGhRIgBgOQhFhYg0hpQgCgFAAgHQCWBSCGBeQADABANgNQA6iOhthsQgEgDAAgHQAOAAALgFQACgCAAgGIAAgOQAXABgCgcIAHAAQA0BOCKANQA/AFA5AjQCDBPg6icQAAgHgCgFQgRgegIgoQBKA/AICBIAAANQAIAOAJAKQAEAEAHAAQBHAeAkBDQACAFAAAHQAHAHAFAIQACAFAAAHQAmASADAzIAAANIA3AAIAOAAQAAAHgDAEQgLAKgOAHQAAAGgCACQgMAFgNAAQAAAHgCABQgZAGgOAOIAAANQgHAAgFADQhHAthEAwQA9AgBWhNQAEgDAAgHQAdAJAFgVQAAgBAHAAQAHgHAIgEQAGgDAGAAIAAgOQAeAJAEgVQAAgBAIAAIAAANQABAWgdgIQgFAoAugLQAHgCAHAAQAAAHgEAFQgLAPgaABQAAAGgDAEQgEADgHAAQAAAHgCABQhoAdhWAtQAyBBBnhLQAFgDAGAAIAOAAIAAANQgFBvgxBCIgCANQgFAcgVAOIAAANQAAAHgCAGQgYArgPA2QgHAAgCADQgrA9g6AtQAAAHgDADQgRASgUANIAAAOQgIAAAAABQgEAVgegJQAAAHgDADQgiAdgtAQQAAAHgEADQgmAeg2APQAAAHgCABQgLAFgOAAQgHAAgBACQgEAVgdgJQgHAAgHACIgcAMIAAAbIAAAOIgNAAIAAgOIAAgNQgHAAgFADQgYAPgvgFQgGAAgCADQgKAUgkgJIgNAAQgbAAgOAOIgNAAgAkMFCQACgBAAgHQAGAAAGgCQB1g8BNhmQgHAAgHADQh4AqhjBBIAAANIgOAAIgOAAQgQBHBFgWgAhmBTQiMAXh4AsIAAAOQgHAAgGACQgPAFgNAHQAWA9BUg0QAEgCAAgHQAGAAAHgCQBzgbBNhDIgOABgAk2ibQggAMgUAVIAAAOIAAANQgLA7AmAIQAHACAHAAQAXgZgCg5IAHAAIAAgOQBfAHAogNQABgBAAgHQgHAAgBgCQgKgVgXgEIgNAAIhgAAQAAAHgDABgADiiVIAAANIA3AAIANAAQABgHgEgEQgLgOgRAAQgQAAgVAMgAGUndQgHAAgDADQgSARgbAHIAAAOQgCB+AXhGQAAgCAHAAIAAgNQAGgHAJgEQAFgDAHAAIAAgOQBkAnAigdQADgDAAgHQgGAAgCgDQgdg0hPAAIgVABg");
	this.shape_52.setTransform(200.7,100.825);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EC782C").s().p("Ag8WuIgcAAIgOAAIgNAAQgIAAAAgDQgLgUgkAKIAAgHQgdABACgWQgHAAgGgDQgPgKgbgBQgHAAgGgCQgegRgogIIAAgOQgGAAgGgCQgegRgogIQAAgHgDgFQgEgIgGgHQgIAAgFgDQgPgKgbgBQAAgHgCAAQgagHgOgNQgGAAgHgCQgvgNgWgoQgHAAgFgCQgugPgKgzQAAgHgDgGQgEgIgHgHQgHAAgCgDQgSgYgOgbQgHAAgFgDQgkgSAHg9QgHAAgBgDQgYgpAFhCIAAgNIAAgcIgHAAQgHhfAAhgIAOAAIAAgOIAAgNIAAgOIAAgpQAWgFgIgkQgBgHAAgHIAAgNIAAgcQAWACgGgdQgCgHAAgHIAAgNQAYg6AKhOQAAgBAHAAQAHgHAEgIQACgGABgGIAAgOIAAgpQAWgFgHgkQgCgHAAgHIABgNQAGg+gUgiIAAgOQgHAAgGgDQgIgDgGgHIgPAAIgNAAQgHAAgGADQgjAKgiAOIAAANQgBAHgDAFQgOATglgDQAAAHgEADQgDADgHAAQAAAHgDAEQgZAegpAOIgNAAQAAAHgDACQgzAggqgbQgHAAgEgDQgQgKgcgBQgGAAgGgCQgngPgEgzIAAgOIAAhfIAOAAIAAgNIAAgpQAVgOAMgYQACgDAGAAIAAgOIAAgbQAOgOAQgKQAEgEAIAAIAAgNIAAgOQApgvAsgtQAEgEAGAAIAAgNIAAgOQAqgMAdgaQAFgDAGAAQA0glBIgQQAGgCAIAAIAAAOIBfAAIAOAAIA3AAIANAAQAcAHAYAMQADACABAGQAQAgAnAIQAGABAHAAIAOAAQApAOAMAqQACAGAAAHQgBANAGALQABADAHAAQAmAKgKA7IgBANIANBSIABAOIAAEQIAAAOIAOAAIABANQAJA6gYAZIAAAbIAAAOIABANQAJBcgYA7IAAAbIAAAOIAAEsIAAAOQgEAuAPAYQADAFAAAHIAAAbIAAAOQAHAcAMAYQABADAIAAIAAAbIAAAOQAGAAAEADQADAEAAAGQAHAHAEAIQADAGAAAHIAAANQAsBCA/AwQACADAAAGQCOA6AlCUIgLAFQgDABAAAHIgNAAgAgrpJQgcgbgEg0QAAgHgBgGQgJgmgRgfIgGAAQgIhtABhtQAGgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB0AWQABAAAAAHQAugFATAWQAEADgBAHIgNAAQAOAOgDAJQgcBig2CPQgsBxg+AUIAAANQgHAAgDgDgAFCvtIgOABQgkAHAJgkQAagcAngSQADgCABgGIAAgOQAvgiA/gTQAGgCAGAAIAAgNQApgIAegRQAFgDAHAAIBSAAIAOAAIAAgNIAOAAIAAgOICxAAIAOAAIAAAOQAAAGgCACQgMAFgNAAQAAAHADADQBuBsg6COQgOANgDgBQiGheiXhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgANYzIIAAgOIAAgbQAbgcAUgmQABgDAHAAIAAgNIAAgOQAegLAQgbQACgDAHAAQAAAHgCAGQgRAlgkASQAAAHgBAHQgGAbgUAOIAAAOIAAAOIgIAAQACAbgUAAIgCAAgANYzIIAAAAgASy0rQgfgfgbgiQgHAAgEgDQgtgfhRAGIgOAAIgNAAIAAgNQBLgyA6A1QADAEABAGQANAHAKALQAEADAAAHQAzAKAPAtQACAGAAAHQgGAAgEgDg");
	this.shape_53.setTransform(121.25,145.4173);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EC782C").s().p("AkKWuIgIAAIgIAAIgLAAIgGAAIgJAAIgJAAQgEAAgBgDQgGgUgXAKIAAgHQgTABACgWQgFAAgDgDQgKgKgRgBQgEAAgDgCQgTgRgagIIAAgOQgEAAgDgCQgTgRgZgIQAAgHgCgFIgHgPQgEAAgDgDQgLgKgRgBIAAgHQgQgHgJgNQgFAAgEgCQgegNgNgoQgEAAgEgCQgcgPgHgzQAAgHgCgGQgCgIgFgHQgEAAgBgDQgMgYgJgbQgEAAgDgDQgWgSAEg9QgFAAgBgDQgOgpAChCIAAgNIAAgcIgEAAQgEhfAAhgIAIAAIAAgOIAAgNIAAgOIAAgpQAPgFgFgkIgBgOIAAgNIAAgcQAOACgEgdIgBgOIAAgNQAPg6AGhOQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAFgHACgIQACgGAAgGIAAgOIAAgpQAOgFgEgkIgBgOIAAgNQAEg+gNgiIAAgOQgEAAgEgDQgFgDgEgHIgJAAIgIAAQgFAAgEADQgWAKgVAOIAAANQAAAHgCAFQgJATgYgDQAAAHgCADQgCADgEAAQAAAHgCAEQgQAegZAOIgJAAQAAAHgCACQggAggagbQgFAAgDgDQgKgKgRgBQgEAAgEgCQgYgPgCgzIAAgOIAAhfIAIAAIAAgNIAAgpQANgOAIgYQABgDAEAAIAAgOIAAgbQAJgOAKgKQADgEAEAAIAAgNIAAgOIA2hcQACgEAFAAIAAgNIAAgOQAagMASgaQADgDAEAAQAhglAtgQQAEgCAEAAIAAAOIA9AAIAIAAIAjAAIAIAAQASAHAPAMQACACAAAGQAKAgAZAIIAIABIAIAAQAaAOAIAqQABAGAAAHQAAANAEALQAAADAFAAQAXAKgFA7IgBANIAIBSIAAAOIAAEQIAAAOIAJAAIABANQAFA6gPAZIAAAbIAAAOIABANQAGBcgPA7IAAAbIAAAOIAABOIAADeIAAAOQgDAuAJAYQACAFAAAHIAAAbIAAAOQAFAcAIAYQAAADAFAAIAAAbIAAAOQAEAAACADQACAEAAAGQAFAHACAIQACAGAAAHIAAANQAcBCAnAwQACADAAAGQAoAbAbAtQAzA2AUBQIgLAFQgCABAAAHIgOAAgAj5pJQgcgbgDg0QAAgHgBgGQgJgmgRgfIgHAAQgHhtAAhtQAHgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB1AWQABAAAAAHQAugFATAWQADADAAAHIgNAAQANAOgCAJQgcBig3CPQgrBxhAAUIAAANQgGAAgEgDgAB1vtIgOABQgkAHAJgkQAagcAngSQADgCAAgGIAAgOQAwgiA+gTQAGgCAHAAIAAgNQAogIAegRQAGgDAHAAIBSAAIANAAIAAgNIAOAAIAAgOICyAAIAOAAIAAAOQAAAGgDACQgLAFgNAAQAAAHADADQBuBsg7COQgNANgDgBQiHheiWhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgAKLzIIAAgOIAAgbQAagcAUgmQACgDAHAAQAAAHgCAHQgFAbgVAOIAAAOIAAAOIgHAAQACAbgUAAIgCAAgAKLzIIAAAAgAPl0rQgfgfgbgiQAzAKAPAtQACAGAAAHQgHAAgDgDgALC1DIAAgOQAdgLARgbQACgDAHAAQAAAHgDAGQgQAlgkASIAAgNgAOf1vQgsgfhRAGIgOAAIgOAAIAAgNQBMgyA6A1QADAEAAAGQAOAHAKALQAEADAAAHQgHAAgFgDg");
	this.shape_54.setTransform(141.775,145.4173);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EC782C").s().p("Ag8WuIgcAAIgOAAIgNAAQgIAAAAgDQgLgUgkAKIAAgHQgdABACgWQgHAAgGgDQgPgKgbgBQgHAAgGgCQgegRgogIIAAgOQgGAAgGgCQgegRgogIQAAgHgDgFQgEgIgGgHQgIAAgFgDQgPgKgbgBQAAgHgCAAQgagHgOgNQgGAAgHgCQgvgNgWgoQgHAAgFgCQgugPgKgzQAAgHgDgGQgEgIgHgHQgHAAgCgDQgSgYgOgbQgHAAgFgDQgkgSAHg9QgHAAgBgDQgYgpAFhCIAAgNIAAgcIgHAAQgHhfAAhgIAOAAIAAgOIAAgNIAAgOIAAgpQAWgFgIgkQgBgHAAgHIAAgNIAAgcQAWACgGgdQgCgHAAgHIAAgNQAYg6AKhOQAAgBAHAAQAHgHAEgIQACgGABgGIAAgOIAAgpQAWgFgHgkQgCgHAAgHIABgNQAGg+gUgiIAAgOQgHAAgGgDQgIgDgGgHIgPAAIgNAAQgHAAgGADQgjAKgiAOIAAANQgBAHgDAFQgOATglgDQAAAHgEADQgDADgHAAQAAAHgDAEQgZAegpAOIgNAAQAAAHgDACQgzAggqgbQgHAAgEgDQgQgKgcgBQgGAAgGgCQgngPgEgzIAAgOIAAhfIAOAAIAAgNIAAgpQAVgOAMgYQACgDAGAAIAAgOIAAgbQAOgOAQgKQAEgEAIAAIAAgNIAAgOQApgvAsgtQAEgEAGAAIAAgNIAAgOQAqgMAdgaQAFgDAGAAQA0glBIgQQAGgCAIAAIAAAOIBfAAIAOAAIA3AAIANAAQAcAHAYAMQADACABAGQAQAgAnAIQAGABAHAAIAOAAQApAOAMAqQACAGAAAHQgBANAGALQABADAHAAQAmAKgKA7IgBANIANBSIABAOIAAEQIAAAOIAOAAIABANQAJA6gYAZIAAAbIAAAOIABANQAJBcgYA7IAAAbIAAAOIAAEsIAAAOQgEAuAPAYQADAFAAAHIAAAbIAAAOQAHAcAMAYQABADAIAAIAAAbIAAAOQAGAAAEADQADAEAAAGQAHAHAEAIQADAGAAAHIAAANQAsBCA/AwQACADAAAGQCOA6AlCUIgLAFQgDABAAAHIgNAAgAgrpJQgcgbgEg0QAAgHgBgGQgJgmgRgfIgGAAQgIhtABhtQAGgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB0AWQABAAAAAHQAugFATAWQAEADgBAHIgNAAQAOAOgDAJQgcBig2CPQgsBxg+AUIAAANQgHAAgDgDgAFCvtIgOABQgkAHAJgkQAagcAngSQADgCABgGIAAgOQAvgiA/gTQAGgCAGAAIAAgNQApgIAegRQAFgDAHAAIBSAAIAOAAIAAgNIAOAAIAAgOICxAAIAOAAIAAAOQAAAGgCACQgMAFgNAAQAAAHADADQBuBsg6COQgOANgDgBQiGheiXhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgANYzIIAAgOIAAgbQAbgcAUgmQABgDAHAAQAAAHgBAHQgGAbgUAOIAAAOIAAAOIgIAAQACAbgUAAIgCAAgANYzIIAAAAgASy0rQgfgfgbgiQAzAKAPAtQACAGAAAHQgGAAgEgDgAOP1DIAAgOQAegLAQgbQACgDAHAAQAAAHgCAGQgRAlgkASIAAgNgARt1vQgtgfhRAGIgOAAIgNAAIAAgNQBLgyA6A1QADAEABAGQANAHAKALQAEADAAAHQgHAAgEgDg");
	this.shape_55.setTransform(121.25,145.4173);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EC782C").s().p("AkKWuIgIAAIgIAAIgLAAIgGAAIgJAAIgJAAQgEAAgBgDQgGgUgXAKIAAgHQgTABACgWQgFAAgDgDQgKgKgRgBQgEAAgDgCQgTgRgagIIAAgOQgEAAgDgCQgTgRgZgIQAAgHgCgFIgHgPQgEAAgDgDQgLgKgRgBIAAgHQgQgHgJgNQgFAAgEgCQgegNgNgoQgEAAgEgCQgcgPgHgzQAAgHgCgGQgCgIgFgHQgEAAgBgDQgMgYgJgbQgEAAgDgDQgWgSAEg9QgFAAgBgDQgOgpAChCIAAgNIAAgcIgEAAQgEhfAAhgIAIAAIAAgOIAAgNIAAgOIAAgpQAPgFgFgkIgBgOIAAgNIAAgcQAOACgEgdIgBgOIAAgNQAPg6AGhOQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAFgHACgIQACgGAAgGIAAgOIAAgpQAOgFgEgkIgBgOIAAgNQAEg+gNgiIAAgOQgEAAgEgDQgFgDgEgHIgJAAIgIAAQgFAAgEADQgWAKgVAOIAAANQAAAHgCAFQgJATgYgDQAAAHgCADQgCADgEAAQAAAHgCAEQgQAegZAOIgJAAQAAAHgCACQggAggagbQgFAAgDgDQgKgKgRgBQgEAAgEgCQgYgPgCgzIAAgOIAAhfIAIAAIAAgNIAAgpQANgOAIgYQABgDAEAAIAAgOIAAgbQAJgOAKgKQADgEAEAAIAAgNIAAgOIA2hcQACgEAFAAIAAgNIAAgOQAagMASgaQADgDAEAAQAhglAtgQQAEgCAEAAIAAAOIA9AAIAIAAIAjAAIAIAAQASAHAPAMQACACAAAGQAKAgAZAIIAIABIAIAAQAaAOAIAqQABAGAAAHQAAANAEALQAAADAFAAQAXAKgFA7IgBANIAIBSIAAAOIAAEQIAAAOIAJAAIABANQAFA6gPAZIAAAbIAAAOIABANQAGBcgPA7IAAAbIAAAOIAABOIAADeIAAAOQgDAuAJAYQACAFAAAHIAAAbIAAAOQAFAcAIAYQAAADAFAAIAAAbIAAAOQAEAAACADQACAEAAAGQAFAHACAIQACAGAAAHIAAANQAcBCAnAwQACADAAAGQAoAbAbAtQAzA2AUBQIgLAFQgCABAAAHIgOAAgAj5pJQgcgbgDg0QAAgHgBgGQgJgmgRgfIgHAAQgHhtAAhtQAHgHAIgEQAGgDAHAAIAAgOIAAgNQA8grB1AWQABAAAAAHQAugFATAWQADADAAAHIgNAAQANAOgCAJQgcBig3CPQgrBxhAAUIAAANQgGAAgEgDgAB1vtIgOABQgkAHAJgkQAagcAngSQADgCAAgGIAAgOQAwgiA+gTQAGgCAHAAIAAgNQAogIAegRQAGgDAHAAIBSAAIANAAIAAgNIAOAAIAAgOICyAAIAOAAIAAAOQAAAGgDACQgLAFgNAAQAAAHADADQBuBsg7COQgNANgDgBQiHheiWhSQAAAHADAFQAzBpBFBYIABAOQAGBRhLABIAAAGQiihiiZhxgAKLzIIAAgOIAAgbQAagcAUgmQACgDAHAAIAAgNIAAgOQAdgLARgbQACgDAHAAQAAAHgDAGQgQAlgkASQAAAHgCAHQgFAbgVAOIAAAOIAAAOIgHAAQACAbgUAAIgCAAgAKLzIIAAAAgAPl0rQgfgfgbgiQgHAAgFgDQgsgfhRAGIgOAAIgOAAIAAgNQBMgyA6A1QADAEAAAGQAOAHAKALQAEADAAAHQAzAKAPAtQACAGAAAHQgHAAgDgDg");
	this.shape_56.setTransform(141.775,145.4173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_51},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_53},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_54},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_55},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_54},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_55},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_56},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_53},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_52},{t:this.shape_48},{t:this.shape_46},{t:this.shape_43},{t:this.shape_54},{t:this.shape_45},{t:this.shape_44},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_49},{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_31},{t:this.shape_32},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_48},{t:this.shape_52},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_50},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_53},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).wait(5));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regX:1165.7,x:632.9},0).wait(1).to({x:639.3},0).wait(1).to({x:645.75},0).wait(1).to({x:652.15},0).wait(1).to({x:658.6},0).wait(1).to({x:665},0).wait(1).to({x:671.45},0).wait(1).to({x:677.85},0).wait(1).to({x:684.3},0).wait(1).to({x:690.7},0).wait(1).to({x:697.15},0).wait(1).to({x:703.55},0).wait(1).to({x:710},0).wait(1).to({x:716.4},0).wait(1).to({x:722.85},0).wait(1).to({x:729.25},0).wait(1).to({x:735.7},0).wait(1).to({x:742.1},0).wait(1).to({x:748.55},0).wait(1).to({x:754.95},0).wait(1).to({x:761.4},0).wait(1).to({x:767.8},0).wait(1).to({x:774.25},0).wait(1).to({x:780.65},0).wait(1).to({x:787.1},0).wait(1).to({x:793.5},0).wait(1).to({x:799.95},0).wait(1).to({x:806.35},0).wait(1).to({x:812.8},0).wait(1).to({x:819.2},0).wait(1).to({x:825.65},0).wait(1).to({x:832.05},0).wait(1).to({x:838.5},0).wait(1).to({x:844.9},0).wait(1).to({x:851.35},0).wait(1).to({x:857.75},0).wait(1).to({x:864.2},0).wait(1).to({x:870.6},0).wait(1).to({x:877.05},0).wait(1).to({x:883.45},0).wait(1).to({x:889.9},0).wait(1).to({x:896.3},0).wait(1).to({x:902.75},0).wait(1).to({x:909.15},0).wait(1).to({x:915.6},0).wait(1).to({x:922},0).wait(1).to({x:928.45},0).wait(1).to({x:934.85},0).wait(1).to({x:941.3},0).wait(1).to({x:947.7},0).wait(1).to({x:954.15},0).wait(1).to({x:960.55},0).wait(1).to({x:967},0).wait(1).to({x:973.4},0).wait(1).to({x:979.85},0).wait(1).to({x:986.25},0).wait(1).to({x:992.7},0).wait(1).to({x:999.1},0).wait(1).to({x:1005.55},0).wait(1).to({x:1011.95},0).wait(1).to({x:1018.4},0).wait(1).to({x:1024.8},0).wait(1).to({x:1031.25},0).wait(1).to({x:1037.65},0).wait(1).to({x:1044.1},0).wait(1).to({x:1050.5},0).wait(1).to({x:1056.95},0).wait(1).to({x:1063.35},0).wait(1).to({x:1069.8},0).wait(1).to({x:1076.2},0).wait(1).to({x:1082.65},0).wait(1).to({x:1089.05},0).wait(1).to({x:1095.5},0).wait(1).to({x:1101.9},0).wait(1).to({x:1108.35},0).wait(1).to({x:1114.75},0).wait(1).to({x:1121.2},0).wait(1).to({x:1127.6},0).wait(1).to({x:1134.05},0).wait(1).to({x:1140.45},0).wait(195));

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
	this.instance.setTransform(1116.35,100.05,0.5564,0.5706,-90,0,0,84.7,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regX:223.9,scaleX:0.5555,scaleY:0.5695,rotation:-90.3781,x:1109.7,y:21.15},0).wait(1).to({scaleX:0.5547,scaleY:0.5685,rotation:-90.7562,x:1102.95,y:19.8},0).wait(1).to({scaleX:0.5538,scaleY:0.5675,rotation:-91.1343,x:1096.3,y:18.65},0).wait(1).to({scaleX:0.553,scaleY:0.5664,rotation:-91.5124,x:1089.65,y:17.45},0).wait(1).to({scaleX:0.5521,scaleY:0.5654,rotation:-91.8905,x:1082.9,y:16.3},0).wait(1).to({scaleX:0.5513,scaleY:0.5644,rotation:-92.2686,x:1076.2,y:15.15},0).wait(1).to({scaleX:0.5504,scaleY:0.5633,rotation:-92.6466,x:1069.5,y:14.15},0).wait(1).to({scaleX:0.5496,scaleY:0.5623,rotation:-93.0247,x:1062.8,y:13.25},0).wait(1).to({scaleX:0.5487,scaleY:0.5612,rotation:-93.4028,x:1056.1,y:12.25},0).wait(1).to({scaleX:0.5479,scaleY:0.5602,rotation:-93.7809,x:1049.35,y:11.4},0).wait(1).to({scaleX:0.547,scaleY:0.5591,rotation:-94.159,x:1042.6,y:10.6},0).wait(1).to({scaleX:0.5462,scaleY:0.5581,rotation:-94.5371,x:1035.95,y:9.75},0).wait(1).to({scaleX:0.5453,scaleY:0.5571,rotation:-94.9152,x:1029.1,y:9.05},0).wait(1).to({scaleX:0.5445,scaleY:0.556,rotation:-95.2933,x:1022.35,y:8.35},0).wait(1).to({scaleX:0.5436,scaleY:0.555,rotation:-95.6714,x:1015.6,y:7.8},0).wait(1).to({scaleX:0.5428,scaleY:0.554,rotation:-96.0495,x:1008.85,y:7.15},0).wait(1).to({scaleX:0.5419,scaleY:0.5529,rotation:-96.4276,x:1002.1,y:6.6},0).wait(1).to({scaleX:0.5411,scaleY:0.5519,rotation:-96.8057,x:995.35,y:6.1},0).wait(1).to({scaleX:0.5402,scaleY:0.5508,rotation:-97.1838,x:988.6,y:5.6},0).wait(1).to({scaleX:0.5394,scaleY:0.5498,rotation:-97.5618,x:981.8,y:5.2},0).wait(1).to({scaleX:0.5385,scaleY:0.5487,rotation:-97.9399,x:975,y:4.85},0).wait(1).to({scaleX:0.5377,scaleY:0.5477,rotation:-98.318,x:968.25,y:4.5},0).wait(1).to({scaleX:0.5368,scaleY:0.5467,rotation:-98.6961,x:961.5,y:4.15},0).wait(1).to({scaleX:0.5359,scaleY:0.5456,rotation:-99.0742,x:954.75,y:3.9},0).wait(1).to({scaleX:0.5351,scaleY:0.5446,rotation:-99.4523,x:947.95,y:3.7},0).wait(1).to({scaleX:0.5342,scaleY:0.5436,rotation:-99.8304,x:941.2,y:3.55},0).wait(1).to({scaleX:0.5334,scaleY:0.5425,rotation:-100.2085,x:934.45,y:3.3},0).wait(1).to({scaleX:0.5325,scaleY:0.5415,rotation:-100.5866,x:927.65,y:3.2},0).wait(1).to({scaleX:0.5317,scaleY:0.5404,rotation:-100.9647,x:920.85,y:3.15},0).wait(1).to({scaleX:0.5308,scaleY:0.5394,rotation:-101.3428,x:914.05,y:3.1},0).wait(1).to({scaleX:0.53,scaleY:0.5384,rotation:-101.7209,x:907.3,y:3},0).wait(1).to({scaleX:0.5291,scaleY:0.5373,rotation:-102.099,x:900.55,y:3.05},0).wait(1).to({scaleX:0.5283,scaleY:0.5363,rotation:-102.4771,x:893.8,y:3.1},0).wait(1).to({scaleX:0.5274,scaleY:0.5353,rotation:-102.8551,x:887.05,y:3.15},0).wait(1).to({scaleX:0.5266,scaleY:0.5342,rotation:-103.2332,x:880.25,y:3.3},0).wait(1).to({scaleX:0.5257,scaleY:0.5332,rotation:-103.6113,x:873.5,y:3.4},0).wait(1).to({scaleX:0.5249,scaleY:0.5321,rotation:-103.9894,x:866.75,y:3.55},0).wait(1).to({scaleX:0.524,scaleY:0.5311,rotation:-104.3675,x:860,y:3.75},0).wait(1).to({scaleX:0.5232,scaleY:0.53,rotation:-104.7456,x:853.25,y:3.95},0).wait(1).to({scaleX:0.5223,scaleY:0.529,rotation:-105.1237,x:846.5,y:4.25},0).wait(1).to({scaleX:0.5215,scaleY:0.528,rotation:-105.5018,x:839.75,y:4.55},0).wait(1).to({scaleX:0.5206,scaleY:0.5269,rotation:-105.8799,x:833,y:4.8},0).wait(1).to({scaleX:0.5198,scaleY:0.5259,rotation:-106.258,x:823.55,y:4.9},0).wait(1).to({scaleX:0.5189,scaleY:0.5249,rotation:-106.6361,x:813.8,y:5},0).wait(1).to({scaleX:0.5181,scaleY:0.5238,rotation:-107.0142,x:804.2,y:5.1},0).wait(1).to({scaleX:0.5172,scaleY:0.5228,rotation:-107.3923,x:794.65,y:5.2},0).wait(1).to({scaleX:0.5164,scaleY:0.5217,rotation:-107.7703,x:785.05},0).wait(1).to({scaleX:0.5155,scaleY:0.5207,rotation:-108.1484,x:775.5,y:5.3},0).wait(1).to({scaleX:0.5147,scaleY:0.5197,rotation:-108.5265,x:765.9,y:5.4},0).wait(1).to({scaleX:0.5138,scaleY:0.5186,rotation:-108.9046,x:756.35,y:5.5},0).wait(1).to({scaleX:0.513,scaleY:0.5176,rotation:-109.2827,x:746.75,y:5.55},0).wait(1).to({scaleX:0.5121,scaleY:0.5165,rotation:-109.6608,x:737.2,y:6.15},0).wait(1).to({scaleX:0.5113,scaleY:0.5155,rotation:-110.0389,x:727.7,y:7.15},0).wait(1).to({scaleX:0.5104,scaleY:0.5145,rotation:-110.417,x:718.2,y:8.3},0).wait(1).to({scaleX:0.5096,scaleY:0.5134,rotation:-110.7951,x:708.65,y:9.75},0).wait(1).to({scaleX:0.5087,scaleY:0.5124,rotation:-111.1732,x:699.2,y:11.6},0).wait(1).to({scaleX:0.5079,scaleY:0.5113,rotation:-111.5513,x:690,y:14.25},0).wait(1).to({scaleX:0.507,scaleY:0.5103,rotation:-111.9294,x:681.4,y:18.6},0).wait(1).to({scaleX:0.5062,scaleY:0.5093,rotation:-112.3075,x:673.6,y:22.6},0).wait(1).to({scaleX:0.5053,scaleY:0.5082,rotation:-112.6855,x:663.35,y:23.05},0).wait(1).to({scaleX:0.5045,scaleY:0.5072,rotation:-113.0636,x:653.8,y:22.55},0).wait(1).to({scaleX:0.5036,scaleY:0.5061,rotation:-113.4417,x:644.95,y:21.65},0).wait(1).to({scaleX:0.5027,scaleY:0.5051,rotation:-113.8198,x:634.85,y:21.6},0).wait(1).to({scaleX:0.5019,scaleY:0.5041,rotation:-114.1979,x:625.35,y:21.45},0).wait(1).to({scaleX:0.5011,scaleY:0.503,rotation:-114.576,x:615.85,y:21.25},0).wait(1).to({scaleX:0.5002,scaleY:0.502,rotation:-114.9541,x:606.3,y:20.95},0).wait(1).to({scaleX:0.4994,scaleY:0.501,rotation:-115.3322,x:596.75,y:21.15},0).wait(1).to({scaleX:0.4985,scaleY:0.4999,rotation:-115.7103,x:587.25,y:21.65},0).wait(1).to({scaleX:0.4976,scaleY:0.4989,rotation:-116.0884,x:577.75,y:22.3},0).wait(1).to({scaleX:0.4968,scaleY:0.4978,rotation:-116.4665,x:568.25,y:23.15},0).wait(1).to({scaleX:0.4959,scaleY:0.4968,rotation:-116.8446,x:558.7,y:24.35},0).wait(1).to({scaleX:0.4951,scaleY:0.4958,rotation:-117.2227,x:549.3,y:25.85},0).wait(1).to({scaleX:0.4942,scaleY:0.4947,rotation:-117.6007,x:540,y:28.05},0).wait(1).to({scaleX:0.4934,scaleY:0.4937,rotation:-117.9788,x:531.1,y:31.55},0).wait(1).to({scaleX:0.4925,scaleY:0.4926,rotation:-118.3569,x:522.75,y:36.35},0).wait(1).to({scaleX:0.4917,scaleY:0.4916,rotation:-118.735,x:515.2,y:42.3},0).wait(1).to({scaleX:0.4908,scaleY:0.4906,rotation:-119.1131,x:508.6,y:49.35},0).wait(1).to({scaleX:0.49,scaleY:0.4895,rotation:-119.4912,x:503.1,y:57.2},0).wait(1).to({scaleX:0.4891,scaleY:0.4885,rotation:-119.8693,x:498.7,y:65.8},0).wait(1).to({scaleX:0.4883,scaleY:0.4874,rotation:-120.2474,x:495.55,y:74.75},0).wait(1).to({scaleX:0.4874,scaleY:0.4864,rotation:-120.6255,x:492.75,y:83.75},0).wait(1).to({scaleX:0.4866,scaleY:0.4854,rotation:-121.0036,x:485.05,y:89.5},0).wait(1).to({scaleX:0.4857,scaleY:0.4843,rotation:-121.3817,x:477.8,y:95.85},0).wait(1).to({scaleX:0.4849,scaleY:0.4833,rotation:-121.7598,x:470.95,y:102.6},0).wait(1).to({scaleX:0.484,scaleY:0.4823,rotation:-122.1379,x:464.5,y:109.7},0).wait(1).to({scaleX:0.4832,scaleY:0.4812,rotation:-122.5159,x:458.4,y:117.15},0).wait(1).to({scaleX:0.4823,scaleY:0.4802,rotation:-122.894,x:452.8,y:124.95},0).wait(1).to({scaleX:0.4815,scaleY:0.4791,rotation:-123.2721,x:447.85,y:133.2},0).wait(1).to({scaleX:0.4806,scaleY:0.4781,rotation:-123.6502,x:443.75,y:141.9},0).wait(1).to({scaleX:0.4798,scaleY:0.477,rotation:-124.0283,x:440.95,y:151.05},0).wait(1).to({scaleX:0.4789,scaleY:0.476,rotation:-124.4064,x:439.15,y:160.45},0).wait(1).to({scaleX:0.4781,scaleY:0.475,rotation:-124.7845,x:437.15,y:169.75},0).wait(1).to({scaleX:0.4772,scaleY:0.4739,rotation:-125.1626,x:434.8,y:179.05},0).wait(1).to({scaleX:0.4764,scaleY:0.4729,rotation:-125.5407,x:432.4,y:188.3},0).wait(1).to({scaleX:0.4755,scaleY:0.4719,rotation:-125.9188,x:429.85,y:197.55},0).wait(1).to({scaleX:0.4747,scaleY:0.4708,rotation:-126.2969,x:427.15,y:206.75},0).wait(1).to({scaleX:0.4738,scaleY:0.4698,rotation:-126.675,x:424.4,y:215.95},0).wait(1).to({scaleX:0.473,scaleY:0.4687,rotation:-127.0531,x:421.6,y:225.1},0).wait(1).to({scaleX:0.4721,scaleY:0.4677,rotation:-127.4312,x:418.75,y:234.25},0).wait(1).to({scaleX:0.4713,scaleY:0.4667,rotation:-127.8092,x:415.7,y:243.55},0).wait(1).to({scaleX:0.4704,scaleY:0.4656,rotation:-128.1873,x:411.9,y:251.9},0).wait(1).to({scaleX:0.4696,scaleY:0.4646,rotation:-128.5654,x:405,y:258.85},0).wait(1).to({scaleX:0.4687,scaleY:0.4635,rotation:-128.9435,x:398.35,y:265.75},0).wait(1).to({scaleX:0.4679,scaleY:0.4625,rotation:-129.3216,x:391.7,y:272.65},0).wait(1).to({scaleX:0.467,scaleY:0.4615,rotation:-129.6997,x:385.05,y:279.6},0).wait(1).to({scaleX:0.4662,scaleY:0.4604,rotation:-130.0778,x:378.5,y:286.6},0).wait(1).to({scaleX:0.4653,scaleY:0.4594,rotation:-130.4559,x:372,y:293.7},0).wait(1).to({scaleX:0.4645,scaleY:0.4583,rotation:-130.834,x:365.55,y:300.75},0).wait(1).to({scaleX:0.4636,scaleY:0.4573,rotation:-131.2121,x:359.15,y:307.9},0).wait(1).to({scaleX:0.4628,scaleY:0.4563,rotation:-131.5902,x:352.8,y:315.15},0).wait(1).to({scaleX:0.4619,scaleY:0.4552,rotation:-131.9683,x:346.55,y:322.45},0).wait(1).to({scaleX:0.4611,scaleY:0.4542,rotation:-132.3464,x:340.4,y:329.85},0).wait(1).to({scaleX:0.4602,scaleY:0.4531,rotation:-132.7244,x:334.5,y:337.35},0).wait(1).to({scaleX:0.4593,scaleY:0.4521,rotation:-133.1025,x:329.25,y:345.4},0).wait(1).to({scaleX:0.4585,scaleY:0.4511,rotation:-133.4806,x:326.4,y:354.5},0).wait(1).to({scaleX:0.4576,scaleY:0.45,rotation:-133.8587,y:364.05},0).wait(1).to({scaleX:0.4568,scaleY:0.449,rotation:-134.2368,x:328.95,y:373.15},0).wait(1).to({scaleX:0.4559,scaleY:0.4479,rotation:-134.6149,x:333.7,y:381.2},0).wait(1).to({scaleX:0.4551,scaleY:0.4469,rotation:-134.993,x:341.3,y:385.25},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-133.4413,x:336.35,y:389.35},0).wait(1).to({rotation:-131.8896,x:331.35,y:393.6},0).wait(1).to({rotation:-130.3379,x:326.4,y:397.85},0).wait(1).to({rotation:-128.7862,x:321.45,y:402.1},0).wait(1).to({rotation:-127.2345,x:316.55,y:406.4},0).wait(1).to({rotation:-125.6828,x:311.7,y:410.75},0).wait(1).to({rotation:-124.1311,x:306.95,y:415.1},0).wait(1).to({rotation:-122.5795,x:302.1,y:419.55},0).wait(1).to({rotation:-121.0278,x:297.35,y:424.05},0).wait(1).to({rotation:-119.4761,x:292.55,y:428.45},0).wait(1).to({rotation:-117.9244,x:287.85,y:433},0).wait(1).to({rotation:-116.3727,x:283.1,y:437.6},0).wait(1).to({rotation:-114.821,x:278.4,y:442.2},0).wait(1).to({rotation:-113.2693,x:273.75,y:446.9},0).wait(1).to({rotation:-111.7176,x:269.05,y:451.6},0).wait(1).to({rotation:-110.1659,x:264.45,y:456.35},0).wait(1).to({rotation:-108.6142,x:259.8,y:461.15},0).wait(1).to({rotation:-107.0625,x:255.15,y:465.95},0).wait(1).to({rotation:-105.5108,x:250.55,y:470.75},0).wait(1).to({rotation:-103.9591,x:246,y:475.65},0).wait(1).to({rotation:-102.4074,x:241.4,y:480.65},0).wait(1).to({rotation:-100.8558,x:236.8,y:485.65},0).wait(1).to({rotation:-99.3041,x:232.3,y:490.7},0).wait(1).to({rotation:-97.7524,x:227.7,y:495.8},0).wait(1).to({rotation:-96.2007,x:223.15,y:500.9},0).wait(1).to({rotation:-94.649,x:218.6,y:506.1},0).wait(1).to({rotation:-93.0973,x:214.05,y:511.25},0).wait(1).to({rotation:-91.5456,x:209.45,y:516.5},0).wait(1).to({rotation:-89.9939,x:204.75,y:521.65},0).wait(1).to({startPosition:0},0).wait(1).to({x:204.4,y:522.1},0).wait(1).to({x:204,y:522.5},0).wait(1).to({x:203.6,y:522.95},0).wait(1).to({x:203.2,y:523.35},0).wait(1).to({x:202.85,y:523.75},0).wait(1).to({x:203.15,y:523.45},0).wait(1).to({x:203.3,y:523.3},0).wait(1).to({x:203.5,y:523.05},0).wait(1).to({x:203.8,y:522.75},0).wait(1).to({x:204.75,y:521.65},0).wait(1).to({scaleY:0.4232,x:204.65,y:521.75},0).wait(1).to({scaleY:0.3996,x:204.55,y:521.9},0).wait(1).to({scaleY:0.3759,x:204.45,y:522},0).wait(1).to({scaleY:0.3522,x:204.35,y:522.1},0).wait(1).to({scaleY:0.3285,x:204.25,y:522.2},0).wait(1).to({scaleY:0.3049,x:204.15,y:522.3},0).wait(1).to({scaleY:0.2812,x:204.05,y:522.45},0).wait(1).to({scaleY:0.2575,x:203.95,y:522.55},0).wait(1).to({scaleY:0.2338,x:203.85,y:522.65},0).wait(1).to({scaleY:0.2102,x:203.75,y:522.75},0).wait(1).to({scaleY:0.1865,x:203.65,y:522.9},0).wait(1).to({scaleY:0.1628,x:203.55,y:523},0).wait(1).to({scaleY:0.1391,x:203.45,y:523.1},0).wait(1).to({scaleY:0.1155,x:203.35,y:523.2},0).wait(1).to({scaleY:0.0918,x:203.25,y:523.35},0).wait(1).to({scaleY:0.0681,x:203.1,y:523.45},0).wait(1).to({scaleY:0.0444,x:203.05,y:523.55},0).wait(1).to({scaleY:0.0207,x:202.95,y:523.65},0).wait(1).to({scaleY:0.0029,rotation:0,skewX:90.0061,skewY:-89.9939,x:202.85,y:523.8},0).wait(1).to({scaleY:0.0266,x:202.95,y:523.65},0).wait(1).to({scaleY:0.0503,x:203.05,y:523.55},0).wait(1).to({scaleY:0.074,x:203.15,y:523.45},0).wait(1).to({scaleY:0.0976,x:203.25,y:523.35},0).wait(1).to({scaleY:0.1213,x:203.35,y:523.25},0).wait(1).to({scaleY:0.145,x:203.45,y:523.1},0).wait(1).to({scaleY:0.1687,x:203.55,y:523},0).wait(1).to({scaleY:0.1923,x:203.65,y:522.9},0).wait(1).to({scaleY:0.216,x:203.8,y:522.8},0).wait(1).to({scaleY:0.2397,y:522.75},0).wait(1).to({scaleY:0.2634,x:203.85,y:522.7},0).wait(1).to({scaleY:0.287,x:203.9,y:522.65},0).wait(1).to({scaleY:0.3107,x:203.95,y:522.55},0).wait(1).to({scaleY:0.3344,x:204,y:522.5},0).wait(1).to({scaleY:0.3581,x:204.1,y:522.4},0).wait(1).to({scaleY:0.3817,x:204.15,y:522.3},0).wait(1).to({scaleY:0.4054,x:204.3,y:522.2},0).wait(1).to({scaleY:0.4291,x:204.45,y:522.05},0).wait(1).to({x:204.8,y:521.65},0).wait(1).to({x:212.35,y:517.95},0).wait(1).to({x:219.85,y:514.25},0).wait(1).to({x:227.35,y:510.55},0).wait(1).to({x:234.85,y:506.85},0).wait(1).to({x:242.35,y:503.1},0).wait(1).to({x:249.9,y:499.4},0).wait(1).to({x:257.4,y:495.7},0).wait(1).to({x:264.9,y:492},0).wait(1).to({x:272.4,y:488.3},0).wait(1).to({x:279.9,y:484.6},0).wait(1).to({x:287.45,y:480.85},0).wait(1).to({x:294.95,y:477.15},0).wait(1).to({x:302.45,y:473.45},0).wait(1).to({x:309.95,y:469.75},0).wait(1).to({x:317.45,y:466.05},0).wait(1).to({x:324.95,y:462.3},0).wait(1).to({x:332.5,y:458.6},0).wait(1).to({x:340,y:454.9},0).wait(1).to({x:347.5,y:451.2},0).wait(1).to({x:355,y:447.45},0).wait(1).to({x:362.5,y:443.75},0).wait(1).to({x:370,y:440.05},0).wait(1).to({x:377.55,y:436.35},0).wait(1).to({x:385.05,y:432.6},0).wait(1).to({x:392.55,y:428.9},0).wait(1).to({x:400.05,y:425.2},0).wait(1).to({x:407.55,y:421.5},0).wait(1).to({x:415.05,y:417.75},0).wait(1).to({x:422.55,y:414.05},0).wait(1).to({x:430.05,y:410.35},0).wait(1).to({x:437.6,y:406.6},0).wait(1).to({x:445.1,y:402.9},0).wait(1).to({x:452.6,y:399.2},0).wait(1).to({x:460.1,y:395.45},0).wait(1).to({x:467.6,y:391.75},0).wait(1).to({x:475.1,y:388.05},0).wait(1).to({x:482.6,y:384.3},0).wait(1).to({x:490.1,y:380.6},0).wait(1).to({x:497.6,y:376.85},0).wait(1).to({x:505.1,y:373.15},0).wait(1).to({x:512.65,y:369.45},0).wait(1).to({x:520.15,y:365.7},0).wait(1).to({x:527.65,y:362},0).wait(1).to({x:535.15,y:358.25},0).wait(1).to({x:542.65,y:354.55},0).wait(1).to({x:550.15,y:350.8},0).wait(1).to({x:557.65,y:347.1},0).wait(1).to({x:565.15,y:343.35},0).wait(1).to({x:572.65,y:339.65},0).wait(1).to({x:580.15,y:335.9},0).wait(1).to({x:587.65,y:332.2},0).wait(1).to({x:595.15,y:328.45},0).wait(1).to({x:602.65,y:324.75},0).wait(1).to({x:610.15,y:321},0).wait(1).to({x:617.65,y:317.25},0).wait(1).to({x:625.15,y:313.55},0).wait(1).to({x:632.65,y:309.8},0).wait(1).to({x:640.15,y:306.05},0).wait(1).to({x:647.65,y:302.35},0).wait(1).to({x:655.15,y:298.6},0).wait(1).to({x:662.6,y:294.85},0).wait(1).to({x:670.1,y:291.1},0).wait(1).to({x:677.6,y:287.35},0).wait(1).to({x:685.1,y:283.6},0).wait(1).to({x:692.6,y:279.9},0).wait(1).to({x:700.1,y:276.15},0).wait(1).to({x:707.55,y:272.35},0).wait(1).to({x:715.05,y:268.6},0).wait(1).to({x:722.55,y:264.85},0).wait(1).to({x:730,y:261.1},0).wait(1).to({x:737.5,y:257.3},0).wait(1).to({x:744.95,y:253.5},0).wait(1).to({x:752.4,y:249.7},0).wait(1).to({x:759.85,y:245.9},0).wait(1).to({x:767.3,y:242.05},0).wait(1).to({x:774.6,y:237.95},0).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({x:470.7},0).wait(1).to({x:476.2},0).wait(1).to({x:481.7},0).wait(1).to({x:487.2},0).wait(1).to({x:492.7},0).wait(1).to({x:498.2},0).wait(1).to({x:503.7},0).wait(1).to({x:509.2},0).wait(1).to({x:514.7},0).wait(1).to({x:520.2},0).wait(1).to({x:525.7},0).wait(1).to({x:531.2},0).wait(1).to({x:536.7},0).wait(1).to({x:542.2},0).wait(1).to({x:547.7},0).wait(1).to({x:553.2},0).wait(1).to({x:558.7},0).wait(1).to({x:564.2},0).wait(1).to({x:569.7},0).wait(1).to({x:575.2},0).wait(1).to({x:580.7},0).wait(1).to({x:586.2},0).wait(1).to({x:591.7},0).wait(1).to({x:597.2},0).wait(1).to({x:602.7},0).wait(1).to({x:608.2},0).wait(1).to({x:613.7},0).wait(1).to({x:619.2},0).wait(1).to({x:624.7},0).wait(1).to({x:630.2},0).wait(1).to({x:635.7},0).wait(1).to({x:641.2},0).wait(1).to({x:646.7},0).wait(1).to({x:652.2},0).wait(1).to({x:657.7},0).wait(1).to({x:663.2},0).wait(1).to({x:668.7},0).wait(1).to({x:674.2},0).wait(1).to({x:679.7},0).wait(1).to({x:685.2},0).wait(1).to({x:690.7},0).wait(1).to({x:696.2},0).wait(1).to({x:701.7},0).wait(1).to({x:707.2},0).wait(1).to({x:712.7},0).wait(1).to({x:718.2},0).wait(1).to({x:723.7},0).wait(1).to({x:729.2},0).wait(1).to({x:734.7},0).wait(1).to({x:740.2},0).wait(1).to({x:745.7},0).wait(1).to({x:751.2},0).wait(1).to({x:756.7},0).wait(1).to({x:762.2},0).wait(1).to({x:767.7},0).wait(1).to({x:773.2},0).wait(1).to({x:778.7},0).wait(1).to({x:784.2},0).wait(1).to({x:789.7},0).wait(1).to({x:795.2},0).wait(1).to({x:800.7},0).wait(1).to({x:806.2},0).wait(1).to({x:811.7},0).wait(1).to({x:817.2},0).wait(1).to({x:822.7},0).wait(1).to({x:828.2},0).wait(1).to({x:833.7},0).wait(1).to({x:839.2},0).wait(1).to({x:844.7},0).wait(1).to({x:850.2},0).wait(1).to({x:855.7},0).wait(1).to({x:861.2},0).wait(1).to({x:866.7},0).wait(1).to({x:872.2},0).wait(1).to({x:877.7},0).wait(1).to({x:883.2},0).wait(1).to({x:888.7},0).wait(1).to({x:894.2},0).wait(1).to({x:899.7},0).wait(1).to({x:905.2},0).wait(195));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).wait(1).to({regX:145.1,regY:153.6,x:-68.95,y:452.2,startPosition:1},0).wait(1).to({x:-61.9,startPosition:2},0).wait(1).to({x:-54.9,startPosition:3},0).wait(1).to({x:-47.9,startPosition:4},0).wait(1).to({x:-40.9,startPosition:5},0).wait(1).to({x:-33.9,startPosition:6},0).wait(1).to({x:-26.9,startPosition:7},0).wait(1).to({x:-19.9,startPosition:8},0).wait(1).to({x:-12.9,startPosition:9},0).wait(1).to({x:-5.9,startPosition:10},0).wait(1).to({x:1.1,startPosition:11},0).wait(1).to({x:8.1,startPosition:12},0).wait(1).to({x:15.1,startPosition:13},0).wait(1).to({x:22.1,startPosition:14},0).wait(1).to({x:29.1,startPosition:15},0).wait(1).to({x:36.1,startPosition:16},0).wait(1).to({x:43.1,startPosition:17},0).wait(1).to({x:50.05,startPosition:18},0).wait(1).to({x:57.05,startPosition:19},0).wait(1).to({x:64.05,startPosition:20},0).wait(1).to({x:71.05,startPosition:21},0).wait(1).to({x:78.05,startPosition:22},0).wait(1).to({x:85.05,startPosition:23},0).wait(1).to({x:92.05,startPosition:24},0).wait(1).to({x:99.05,startPosition:25},0).wait(1).to({x:106.05,startPosition:26},0).wait(1).to({x:113.05,startPosition:27},0).wait(1).to({x:120.05,startPosition:28},0).wait(1).to({x:127.05,startPosition:29},0).wait(1).to({x:134.05,startPosition:30},0).wait(1).to({x:141.05,startPosition:31},0).wait(1).to({x:148.05,startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({x:156.95,y:455.1,startPosition:48},0).wait(1).to({x:165.85,y:458,startPosition:49},0).wait(1).to({x:174.75,y:460.9,startPosition:50},0).wait(1).to({x:183.65,y:463.8,startPosition:51},0).wait(1).to({x:192.5,y:466.65,startPosition:52},0).wait(1).to({x:201.4,y:469.55,startPosition:53},0).wait(1).to({x:210.3,y:472.45,startPosition:54},0).wait(1).to({x:219.2,y:475.35,startPosition:0},0).wait(1).to({x:228.05,y:478.2,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({scaleX:0.2804,x:226.9,startPosition:3},0).wait(1).to({scaleX:0.2635,x:225.75,startPosition:4},0).wait(1).to({scaleX:0.2466,x:224.6,startPosition:5},0).wait(1).to({scaleX:0.2297,x:223.45,startPosition:6},0).wait(1).to({scaleX:0.2128,x:222.3,startPosition:7},0).wait(1).to({scaleX:0.1959,x:221.1,startPosition:8},0).wait(1).to({scaleX:0.179,x:219.95,startPosition:9},0).wait(1).to({scaleX:0.1621,x:218.8,startPosition:10},0).wait(1).to({scaleX:0.1452,x:217.65,startPosition:11},0).wait(1).to({scaleX:0.1283,x:216.5,startPosition:12},0).wait(1).to({scaleX:0.1114,x:215.35,startPosition:13},0).wait(1).to({scaleX:0.0945,x:214.2,startPosition:14},0).wait(1).to({scaleX:0.0776,x:213.05,startPosition:15},0).wait(1).to({scaleX:0.0606,x:211.9,startPosition:16},0).wait(1).to({scaleX:0.0437,x:210.7,startPosition:17},0).wait(1).to({scaleX:0.0268,x:209.55,startPosition:18},0).wait(1).to({scaleX:0.0099,x:208.4,startPosition:19},0).wait(1).to({scaleX:0.007,skewY:180,x:207.25,startPosition:20},0).wait(1).to({scaleX:0.0239,x:206.1,startPosition:21},0).wait(1).to({scaleX:0.0408,x:204.95,startPosition:22},0).wait(1).to({scaleX:0.0577,x:203.8,startPosition:23},0).wait(1).to({scaleX:0.0746,x:202.65,startPosition:24},0).wait(1).to({scaleX:0.0915,x:201.45,startPosition:25},0).wait(1).to({scaleX:0.1084,x:200.3,startPosition:26},0).wait(1).to({scaleX:0.1253,x:199.15,startPosition:27},0).wait(1).to({scaleX:0.1422,x:198,startPosition:28},0).wait(1).to({scaleX:0.1591,x:196.85,startPosition:29},0).wait(1).to({scaleX:0.1761,x:195.7,startPosition:30},0).wait(1).to({scaleX:0.193,x:194.55,startPosition:31},0).wait(1).to({scaleX:0.2099,x:193.4,startPosition:32},0).wait(1).to({scaleX:0.2268,x:192.2,startPosition:33},0).wait(1).to({scaleX:0.2437,x:191.05,startPosition:34},0).wait(1).to({scaleX:0.2606,x:189.9,startPosition:35},0).wait(1).to({scaleX:0.2775,x:188.75,startPosition:36},0).wait(1).to({scaleX:0.2944,x:187.6,startPosition:37},0).wait(1).to({scaleX:0.3113,x:186.45,startPosition:38},0).wait(1).to({scaleX:0.3282,x:185.3,startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({x:192.4,y:474.45,startPosition:41},0).wait(1).to({x:199.55,y:470.65,startPosition:42},0).wait(1).to({x:206.65,y:466.85,startPosition:43},0).wait(1).to({x:213.8,y:463.05,startPosition:44},0).wait(1).to({x:220.9,y:459.25,startPosition:45},0).wait(1).to({x:228,y:455.5,startPosition:46},0).wait(1).to({x:235.15,y:451.7,startPosition:47},0).wait(1).to({x:242.25,y:447.9,startPosition:48},0).wait(1).to({x:249.35,y:444.1,startPosition:49},0).wait(1).to({x:256.5,y:440.3,startPosition:50},0).wait(1).to({x:263.6,y:436.55,startPosition:51},0).wait(1).to({x:270.7,y:432.75,startPosition:52},0).wait(1).to({x:277.85,y:428.95,startPosition:53},0).wait(1).to({x:284.95,y:425.15,startPosition:54},0).wait(1).to({x:292.05,y:421.35,startPosition:0},0).wait(1).to({x:299.2,y:417.6,startPosition:1},0).wait(1).to({x:306.3,y:413.8,startPosition:2},0).wait(1).to({x:313.4,y:410,startPosition:3},0).wait(1).to({x:320.55,y:406.2,startPosition:4},0).wait(1).to({x:327.65,y:402.4,startPosition:5},0).wait(1).to({x:334.8,y:398.65,startPosition:6},0).wait(1).to({x:341.9,y:394.85,startPosition:7},0).wait(1).to({x:349,y:391.05,startPosition:8},0).wait(1).to({x:356.15,y:387.25,startPosition:9},0).wait(1).to({x:363.25,y:383.45,startPosition:10},0).wait(1).to({x:370.35,y:379.7,startPosition:11},0).wait(1).to({x:377.5,y:375.9,startPosition:12},0).wait(1).to({x:384.6,y:372.1,startPosition:13},0).wait(1).to({x:391.7,y:368.3,startPosition:14},0).wait(1).to({x:398.85,y:364.5,startPosition:15},0).wait(1).to({x:405.95,y:360.75,startPosition:16},0).wait(1).to({x:413.05,y:356.95,startPosition:17},0).wait(1).to({x:420.2,y:353.15,startPosition:18},0).wait(1).to({x:427.3,y:349.35,startPosition:19},0).wait(1).to({x:434.45,y:345.55,startPosition:20},0).wait(1).to({x:441.55,y:341.8,startPosition:21},0).wait(1).to({x:448.65,y:338,startPosition:22},0).wait(1).to({x:455.8,y:334.2,startPosition:23},0).wait(1).to({x:462.9,y:330.4,startPosition:24},0).wait(1).to({x:470,y:326.6,startPosition:25},0).wait(1).to({x:477.15,y:322.85,startPosition:26},0).wait(1).to({x:484.25,y:319.05,startPosition:27},0).wait(1).to({x:491.35,y:315.25,startPosition:28},0).wait(1).to({x:498.5,y:311.45,startPosition:29},0).wait(1).to({x:505.6,y:307.65,startPosition:30},0).wait(1).to({x:512.7,y:303.9,startPosition:31},0).wait(1).to({x:519.85,y:300.1,startPosition:32},0).wait(1).to({x:526.95,y:296.3,startPosition:33},0).wait(1).to({x:534.1,y:292.5,startPosition:34},0).wait(1).to({x:541.2,y:288.7,startPosition:35},0).wait(1).to({x:548.3,y:284.95,startPosition:36},0).wait(1).to({x:555.45,y:281.15,startPosition:37},0).wait(1).to({x:562.55,y:277.35,startPosition:38},0).wait(1).to({x:569.65,y:273.55,startPosition:39},0).wait(1).to({x:576.8,y:269.75,startPosition:40},0).wait(1).to({x:583.9,y:266,startPosition:41},0).wait(1).to({x:591,y:262.2,startPosition:42},0).wait(1).to({x:598.15,y:258.4,startPosition:43},0).wait(1).to({x:605.25,y:254.6,startPosition:44},0).wait(1).to({x:612.35,y:250.8,startPosition:45},0).wait(1).to({x:619.5,y:247.05,startPosition:46},0).wait(1).to({x:626.6,y:243.25,startPosition:47},0).wait(1).to({x:633.7,y:239.45,startPosition:48},0).wait(1).to({x:640.85,y:235.65,startPosition:49},0).wait(1).to({x:647.95,y:231.85,startPosition:50},0).wait(1).to({x:655.1,y:228.1,startPosition:51},0).wait(1).to({x:662.2,y:224.3,startPosition:52},0).wait(1).to({x:669.3,y:220.5,startPosition:53},0).wait(1).to({x:676.45,y:216.7,startPosition:54},0).wait(1).to({x:683.55,y:212.9,startPosition:0},0).wait(1).to({x:690.65,y:209.15,startPosition:1},0).wait(1).to({x:697.8,y:205.35,startPosition:2},0).wait(1).to({x:704.9,y:201.55,startPosition:3},0).wait(1).to({x:712,y:197.75,startPosition:4},0).wait(1).to({x:719.15,y:193.95,startPosition:5},0).wait(1).to({x:726.25,y:190.15,startPosition:6},0).wait(1));

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

	this.actionFrames = [314];
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
	this.frame_314 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(314).call(this.frame_314).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(111).to({scaleX:0.9924,scaleY:0.9924,x:635.5174,y:361.9449},0).wait(1).to({scaleX:0.9848,scaleY:0.9848,x:631.0347,y:363.8898},0).wait(1).to({scaleX:0.9772,scaleY:0.9772,x:626.552,y:365.8347},0).wait(1).to({scaleX:0.9696,scaleY:0.9696,x:622.0694,y:367.7796},0).wait(1).to({scaleX:0.962,scaleY:0.962,x:617.5867,y:369.7245},0).wait(1).to({scaleX:0.9544,scaleY:0.9544,x:613.1041,y:371.6694},0).wait(1).to({scaleX:0.9468,scaleY:0.9468,x:608.6214,y:373.6143},0).wait(1).to({scaleX:0.9392,scaleY:0.9392,x:604.1388,y:375.5592},0).wait(1).to({scaleX:0.9316,scaleY:0.9316,x:599.6561,y:377.5041},0).wait(1).to({scaleX:0.924,scaleY:0.924,x:595.1735,y:379.449},0).wait(1).to({scaleX:0.9164,scaleY:0.9164,x:590.6908,y:381.3939},0).wait(1).to({scaleX:0.9087,scaleY:0.9087,x:586.2082,y:383.3388},0).wait(1).to({scaleX:0.9011,scaleY:0.9011,x:581.7255,y:385.2837},0).wait(1).to({scaleX:0.8935,scaleY:0.8935,x:577.2429,y:387.2286},0).wait(1).to({scaleX:0.8859,scaleY:0.8859,x:572.7602,y:389.1735},0).wait(1).to({scaleX:0.8783,scaleY:0.8783,x:568.2776,y:391.1184},0).wait(1).to({scaleX:0.8707,scaleY:0.8707,x:563.7949,y:393.0633},0).wait(1).to({scaleX:0.8631,scaleY:0.8631,x:559.3122,y:395.0082},0).wait(1).to({scaleX:0.8555,scaleY:0.8555,x:554.8296,y:396.9531},0).wait(1).to({scaleX:0.8479,scaleY:0.8479,x:550.3469,y:398.898},0).wait(1).to({scaleX:0.8403,scaleY:0.8403,x:545.8643,y:400.8429},0).wait(1).to({scaleX:0.8327,scaleY:0.8327,x:541.3816,y:402.7878},0).wait(1).to({scaleX:0.8251,scaleY:0.8251,x:536.899,y:404.7327},0).wait(1).to({scaleX:0.8175,scaleY:0.8175,x:532.4163,y:406.6776},0).wait(1).to({scaleX:0.8099,scaleY:0.8099,x:527.9337,y:408.6225},0).wait(1).to({scaleX:0.8023,scaleY:0.8023,x:523.451,y:410.5673},0).wait(1).to({scaleX:0.7947,scaleY:0.7947,x:518.9684,y:412.5122},0).wait(1).to({scaleX:0.7871,scaleY:0.7871,x:514.4857,y:414.4571},0).wait(1).to({scaleX:0.7795,scaleY:0.7795,x:510.0031,y:416.402},0).wait(1).to({scaleX:0.7719,scaleY:0.7719,x:505.5204,y:418.3469},0).wait(1).to({scaleX:0.7643,scaleY:0.7643,x:501.0378,y:420.2918},0).wait(1).to({scaleX:0.7567,scaleY:0.7567,x:496.5551,y:422.2367},0).wait(1).to({scaleX:0.7491,scaleY:0.7491,x:492.0725,y:424.1816},0).wait(1).to({scaleX:0.7414,scaleY:0.7414,x:487.5898,y:426.1265},0).wait(1).to({scaleX:0.7338,scaleY:0.7338,x:483.1071,y:428.0714},0).wait(1).to({scaleX:0.7262,scaleY:0.7262,x:478.6245,y:430.0163},0).wait(1).to({scaleX:0.7186,scaleY:0.7186,x:474.1418,y:431.9612},0).wait(1).to({scaleX:0.711,scaleY:0.711,x:469.6592,y:433.9061},0).wait(1).to({scaleX:0.7034,scaleY:0.7034,x:465.1765,y:435.851},0).wait(1).to({scaleX:0.6958,scaleY:0.6958,x:460.6939,y:437.7959},0).wait(1).to({scaleX:0.6882,scaleY:0.6882,x:456.2112,y:439.7408},0).wait(1).to({scaleX:0.6806,scaleY:0.6806,x:451.7286,y:441.6857},0).wait(1).to({scaleX:0.673,scaleY:0.673,x:447.2459,y:443.6306},0).wait(1).to({scaleX:0.6654,scaleY:0.6654,x:442.7633,y:445.5755},0).wait(1).to({scaleX:0.6578,scaleY:0.6578,x:438.2806,y:447.5204},0).wait(1).to({scaleX:0.6502,scaleY:0.6502,x:433.798,y:449.4653},0).wait(1).to({scaleX:0.6426,scaleY:0.6426,x:429.3153,y:451.4102},0).wait(1).to({scaleX:0.635,scaleY:0.635,x:424.8327,y:453.3551},0).wait(1).to({scaleX:0.6274,scaleY:0.6274,x:420.35,y:455.3},0).wait(156));

	// power_puff_obj_
	this.power_puff = new lib.Scene_1_power_puff();
	this.power_puff.name = "power_puff";
	this.power_puff.depth = 0;
	this.power_puff.isAttachedToCamera = 0
	this.power_puff.isAttachedToMask = 0
	this.power_puff.layerDepth = 0
	this.power_puff.layerIndex = 0
	this.power_puff.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.power_puff).wait(41).to({regX:673.4,regY:244.1,x:673.4,y:244.1},0).wait(274));

	// cat_obj_
	this.cat = new lib.Scene_1_cat();
	this.cat.name = "cat";
	this.cat.depth = 0;
	this.cat.isAttachedToCamera = 0
	this.cat.isAttachedToMask = 0
	this.cat.layerDepth = 0
	this.cat.layerIndex = 1
	this.cat.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cat).wait(89).to({regX:327.4,regY:334.2,x:327.4,y:334.2},0).wait(226));

	// clouds_obj_
	this.clouds = new lib.Scene_1_clouds();
	this.clouds.name = "clouds";
	this.clouds.depth = 0;
	this.clouds.isAttachedToCamera = 0
	this.clouds.isAttachedToMask = 0
	this.clouds.layerDepth = 0
	this.clouds.layerIndex = 2
	this.clouds.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(41).to({regX:685.2,regY:147.7,x:685.2,y:147.7},0).wait(274));

	// trees_obj_
	this.trees = new lib.Scene_1_trees();
	this.trees.name = "trees";
	this.trees.depth = 0;
	this.trees.isAttachedToCamera = 0
	this.trees.isAttachedToMask = 0
	this.trees.layerDepth = 0
	this.trees.layerIndex = 3
	this.trees.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.trees).wait(41).to({regX:883.5,regY:463.5,x:883.5,y:463.5},0).wait(274));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 4
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(160).to({regX:18.8,regY:229.5,scaleX:1.594,scaleY:1.594,x:-0.05,y:0.1},0).wait(155));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.setTransform(295.7,372.8,1,1,0,0,0,295.7,372.8);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 5
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).to({_off:true},40).wait(275));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.setTransform(904.8,371.2,1,1,0,0,0,904.8,371.2);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 6
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).to({_off:true},40).wait(275));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.setTransform(643.6,375,1,1,0,0,0,643.6,375);
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 7
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).to({_off:true},40).wait(275));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.setTransform(641.3,604.5,1,1,0,0,0,641.3,604.5);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 8
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(4).to({_off:true},36).wait(275));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(100.5,277.1,2206.1,473.5);
// library properties:
lib.properties = {
	id: 'ED4C99C5B21B8843967D36BA4AAFAB9B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animate1_atlas_1.png?1598121444954", id:"animate1_atlas_1"},
		{src:"images/animate1_atlas_2.png?1598121444954", id:"animate1_atlas_2"}
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