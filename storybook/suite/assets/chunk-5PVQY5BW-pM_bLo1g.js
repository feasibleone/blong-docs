import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { $ as init__root, A as isObjectLike, C as init__isIndex, D as init_isArguments, E as isBuffer, F as Stack, G as init_isFunction, H as init__getNative, I as init__Stack, J as isObject, K as isFunction, M as isArray, N as Uint8Array, O as isArguments, P as init__Uint8Array, T as init_isBuffer, V as getNative, X as init__baseGetTag, Y as baseGetTag, a as init_memoize, c as isArrayLike, d as init__isPrototype, et as root, f as isPrototype, g as isTypedArray, h as init_isTypedArray, i as init_identity, j as init_isArray, k as init_isObjectLike, l as init__overArg, m as init__arrayLikeKeys, n as init__baseFor, nt as init_eq, o as memoize, p as arrayLikeKeys, q as init_isObject, r as identity, s as init_isArrayLike, t as baseFor, tt as eq, u as overArg, w as isIndex } from "./_baseFor-B9y9xzaI.js";
import { E as log, S as select_default, T as init_chunk_AGHRB4JF, t as init_src, w as __name } from "./src-D4MYY-mY.js";
import { A as init_chunk_ICPOFSXX, L as sanitizeDirective, f as detectType, m as directiveRegex, r as assignWithDepth_default, s as common_default } from "./chunk-ICPOFSXX-7_BdXDsq.js";
import { l as init_math, t as require_dist } from "./dist-Dnv0KVkE.js";
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
	this._context = context;
}
function linear_default(context) {
	return new Linear(context);
}
function init_linear() {
	return (init_linear = __esmMin((() => {
		Linear.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: this._context.lineTo(x, y);
				}
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bump.js
function bumpX(context) {
	return new Bump(context, true);
}
function bumpY(context) {
	return new Bump(context, false);
}
var Bump;
function init_bump() {
	return (init_bump = __esmMin((() => {
		Bump = class {
			constructor(context, x) {
				this._context = context;
				this._x = x;
			}
			areaStart() {
				this._line = 0;
			}
			areaEnd() {
				this._line = NaN;
			}
			lineStart() {
				this._point = 0;
			}
			lineEnd() {
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			}
			point(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						if (this._line) this._context.lineTo(x, y);
						else this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
					else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
				}
				this._x0 = x, this._y0 = y;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/noop.js
function noop_default() {}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basis.js
function point$3(that, x, y) {
	that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function Basis(context) {
	this._context = context;
}
function basis_default(context) {
	return new Basis(context);
}
function init_basis() {
	return (init_basis = __esmMin((() => {
		Basis.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 3: point$3(this, this._x1, this._y1);
					case 2: this._context.lineTo(this._x1, this._y1);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
					default: point$3(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
	this._context = context;
}
function basisClosed_default(context) {
	return new BasisClosed(context);
}
function init_basisClosed() {
	return (init_basisClosed = __esmMin((() => {
		init_basis();
		BasisClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x2, this._y2);
						this._context.closePath();
						break;
					case 2:
						this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
						this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x2, this._y2);
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x2 = x, this._y2 = y;
						break;
					case 1:
						this._point = 2;
						this._x3 = x, this._y3 = y;
						break;
					case 2:
						this._point = 3;
						this._x4 = x, this._y4 = y;
						this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
						break;
					default: point$3(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
	this._context = context;
}
function basisOpen_default(context) {
	return new BasisOpen(context);
}
function init_basisOpen() {
	return (init_basisOpen = __esmMin((() => {
		init_basis();
		BasisOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
						this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
						break;
					case 3: this._point = 4;
					default: point$3(this, x, y);
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
	this._basis = new Basis(context);
	this._beta = beta;
}
var bundle_default;
function init_bundle() {
	return (init_bundle = __esmMin((() => {
		init_basis();
		Bundle.prototype = {
			lineStart: function() {
				this._x = [];
				this._y = [];
				this._basis.lineStart();
			},
			lineEnd: function() {
				var x = this._x, y = this._y, j = x.length - 1;
				if (j > 0) {
					var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
					while (++i <= j) {
						t = i / j;
						this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
					}
				}
				this._x = this._y = null;
				this._basis.lineEnd();
			},
			point: function(x, y) {
				this._x.push(+x);
				this._y.push(+y);
			}
		};
		bundle_default = (function custom(beta) {
			function bundle(context) {
				return beta === 1 ? new Basis(context) : new Bundle(context, beta);
			}
			bundle.beta = function(beta) {
				return custom(+beta);
			};
			return bundle;
		})(.85);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinal.js
function point$2(that, x, y) {
	that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function Cardinal(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
var cardinal_default;
function init_cardinal() {
	return (init_cardinal = __esmMin((() => {
		Cardinal.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3: point$2(this, this._x1, this._y1);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						this._x1 = x, this._y1 = y;
						break;
					case 2: this._point = 3;
					default: point$2(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		cardinal_default = (function custom(tension) {
			function cardinal(context) {
				return new Cardinal(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
var cardinalClosed_default;
function init_cardinalClosed() {
	return (init_cardinalClosed = __esmMin((() => {
		init_cardinal();
		CardinalClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
						this.point(this._x5, this._y5);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x3 = x, this._y3 = y;
						break;
					case 1:
						this._point = 2;
						this._context.moveTo(this._x4 = x, this._y4 = y);
						break;
					case 2:
						this._point = 3;
						this._x5 = x, this._y5 = y;
						break;
					default: point$2(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		cardinalClosed_default = (function custom(tension) {
			function cardinal(context) {
				return new CardinalClosed(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
var cardinalOpen_default;
function init_cardinalOpen() {
	return (init_cardinalOpen = __esmMin((() => {
		init_cardinal();
		CardinalOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3: this._point = 4;
					default: point$2(this, x, y);
				}
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		cardinalOpen_default = (function custom(tension) {
			function cardinal(context) {
				return new CardinalOpen(context, tension);
			}
			cardinal.tension = function(tension) {
				return custom(+tension);
			};
			return cardinal;
		})(0);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRom.js
function point$1(that, x, y) {
	var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
	if (that._l01_a > 1e-12) {
		var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
		x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
		y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	}
	if (that._l23_a > 1e-12) {
		var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
		x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
		y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	}
	that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
var catmullRom_default;
function init_catmullRom() {
	return (init_catmullRom = __esmMin((() => {
		init_math();
		init_cardinal();
		CatmullRom.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x2, this._y2);
						break;
					case 3: this.point(this._x2, this._y2);
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2: this._point = 3;
					default: point$1(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		catmullRom_default = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
var catmullRomClosed_default;
function init_catmullRomClosed() {
	return (init_catmullRomClosed = __esmMin((() => {
		init_cardinalClosed();
		init_catmullRom();
		CatmullRomClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 1:
						this._context.moveTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 2:
						this._context.lineTo(this._x3, this._y3);
						this._context.closePath();
						break;
					case 3:
						this.point(this._x3, this._y3);
						this.point(this._x4, this._y4);
						this.point(this._x5, this._y5);
				}
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						this._x3 = x, this._y3 = y;
						break;
					case 1:
						this._point = 2;
						this._context.moveTo(this._x4 = x, this._y4 = y);
						break;
					case 2:
						this._point = 3;
						this._x5 = x, this._y5 = y;
						break;
					default: point$1(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		catmullRomClosed_default = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
var catmullRomOpen_default;
function init_catmullRomOpen() {
	return (init_catmullRomOpen = __esmMin((() => {
		init_cardinalOpen();
		init_catmullRom();
		CatmullRomOpen.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
				this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
			},
			lineEnd: function() {
				if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) {
					var x23 = this._x2 - x, y23 = this._y2 - y;
					this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
				}
				switch (this._point) {
					case 0:
						this._point = 1;
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
						break;
					case 3: this._point = 4;
					default: point$1(this, x, y);
				}
				this._l01_a = this._l12_a, this._l12_a = this._l23_a;
				this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
				this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
				this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
			}
		};
		catmullRomOpen_default = (function custom(alpha) {
			function catmullRom(context) {
				return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
			}
			catmullRom.alpha = function(alpha) {
				return custom(+alpha);
			};
			return catmullRom;
		})(.5);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
	this._context = context;
}
function linearClosed_default(context) {
	return new LinearClosed(context);
}
function init_linearClosed() {
	return (init_linearClosed = __esmMin((() => {
		LinearClosed.prototype = {
			areaStart: noop_default,
			areaEnd: noop_default,
			lineStart: function() {
				this._point = 0;
			},
			lineEnd: function() {
				if (this._point) this._context.closePath();
			},
			point: function(x, y) {
				x = +x, y = +y;
				if (this._point) this._context.lineTo(x, y);
				else this._point = 1, this._context.moveTo(x, y);
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/monotone.js
function sign(x) {
	return x < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
	var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
	return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), .5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
	var h = that._x1 - that._x0;
	return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t0, t1) {
	var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
	that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
	this._context = context;
}
function MonotoneY(context) {
	this._context = new ReflectContext(context);
}
function ReflectContext(context) {
	this._context = context;
}
function monotoneX(context) {
	return new MonotoneX(context);
}
function monotoneY(context) {
	return new MonotoneY(context);
}
function init_monotone() {
	return (init_monotone = __esmMin((() => {
		MonotoneX.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				switch (this._point) {
					case 2:
						this._context.lineTo(this._x1, this._y1);
						break;
					case 3: point(this, this._t0, slope2(this, this._t0));
				}
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				this._line = 1 - this._line;
			},
			point: function(x, y) {
				var t1 = NaN;
				x = +x, y = +y;
				if (x === this._x1 && y === this._y1) return;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1:
						this._point = 2;
						break;
					case 2:
						this._point = 3;
						point(this, slope2(this, t1 = slope3(this, x, y)), t1);
						break;
					default: point(this, this._t0, t1 = slope3(this, x, y));
				}
				this._x0 = this._x1, this._x1 = x;
				this._y0 = this._y1, this._y1 = y;
				this._t0 = t1;
			}
		};
		(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
			MonotoneX.prototype.point.call(this, y, x);
		};
		ReflectContext.prototype = {
			moveTo: function(x, y) {
				this._context.moveTo(y, x);
			},
			closePath: function() {
				this._context.closePath();
			},
			lineTo: function(x, y) {
				this._context.lineTo(y, x);
			},
			bezierCurveTo: function(x1, y1, x2, y2, x, y) {
				this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
	this._context = context;
}
function controlPoints(x) {
	var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
	a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	a[n - 1] = r[n - 1] / b[n - 1];
	for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	b[n - 1] = (x[n] + a[n - 1]) / 2;
	for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	return [a, b];
}
function natural_default(context) {
	return new Natural(context);
}
function init_natural() {
	return (init_natural = __esmMin((() => {
		Natural.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x = [];
				this._y = [];
			},
			lineEnd: function() {
				var x = this._x, y = this._y, n = x.length;
				if (n) {
					this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
					if (n === 2) this._context.lineTo(x[1], y[1]);
					else {
						var px = controlPoints(x), py = controlPoints(y);
						for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
					}
				}
				if (this._line || this._line !== 0 && n === 1) this._context.closePath();
				this._line = 1 - this._line;
				this._x = this._y = null;
			},
			point: function(x, y) {
				this._x.push(+x);
				this._y.push(+y);
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
	this._context = context;
	this._t = t;
}
function step_default(context) {
	return new Step(context, .5);
}
function stepBefore(context) {
	return new Step(context, 0);
}
function stepAfter(context) {
	return new Step(context, 1);
}
function init_step() {
	return (init_step = __esmMin((() => {
		Step.prototype = {
			areaStart: function() {
				this._line = 0;
			},
			areaEnd: function() {
				this._line = NaN;
			},
			lineStart: function() {
				this._x = this._y = NaN;
				this._point = 0;
			},
			lineEnd: function() {
				if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
				if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
				if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
			},
			point: function(x, y) {
				x = +x, y = +y;
				switch (this._point) {
					case 0:
						this._point = 1;
						this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
						break;
					case 1: this._point = 2;
					default: if (this._t <= 0) {
						this._context.lineTo(this._x, y);
						this._context.lineTo(x, y);
					} else {
						var x1 = this._x * (1 - this._t) + x * this._t;
						this._context.lineTo(x1, this._y);
						this._context.lineTo(x1, y);
					}
				}
				this._x = x, this._y = y;
			}
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_defineProperty.js
var defineProperty;
function init__defineProperty() {
	return (init__defineProperty = __esmMin((() => {
		init__getNative();
		defineProperty = function() {
			try {
				var func = getNative(Object, "defineProperty");
				func({}, "", {});
				return func;
			} catch (e) {}
		}();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseAssignValue.js
/**
* The base implementation of `assignValue` and `assignMergeValue` without
* value checks.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && defineProperty) defineProperty(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
function init__baseAssignValue() {
	return (init__baseAssignValue = __esmMin((() => {
		init__defineProperty();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignMergeValue.js
/**
* This function is like `assignValue` except that it doesn't assign
* `undefined` values.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignMergeValue(object, key, value) {
	if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
}
function init__assignMergeValue() {
	return (init__assignMergeValue = __esmMin((() => {
		init__baseAssignValue();
		init_eq();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneBuffer.js
/**
* Creates a clone of  `buffer`.
*
* @private
* @param {Buffer} buffer The buffer to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Buffer} Returns the cloned buffer.
*/
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
var freeExports, freeModule, Buffer, allocUnsafe;
function init__cloneBuffer() {
	return (init__cloneBuffer = __esmMin((() => {
		init__root();
		freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
		freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
		Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
		allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneArrayBuffer.js
/**
* Creates a clone of `arrayBuffer`.
*
* @private
* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
* @returns {ArrayBuffer} Returns the cloned array buffer.
*/
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	return result;
}
function init__cloneArrayBuffer() {
	return (init__cloneArrayBuffer = __esmMin((() => {
		init__Uint8Array();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cloneTypedArray.js
/**
* Creates a clone of `typedArray`.
*
* @private
* @param {Object} typedArray The typed array to clone.
* @param {boolean} [isDeep] Specify a deep clone.
* @returns {Object} Returns the cloned typed array.
*/
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function init__cloneTypedArray() {
	return (init__cloneTypedArray = __esmMin((() => {
		init__cloneArrayBuffer();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyArray.js
/**
* Copies the values of `source` to `array`.
*
* @private
* @param {Array} source The array to copy values from.
* @param {Array} [array=[]] The array to copy values to.
* @returns {Array} Returns `array`.
*/
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
function init__copyArray() {
	return (init__copyArray = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseCreate.js
var objectCreate, baseCreate;
function init__baseCreate() {
	return (init__baseCreate = __esmMin((() => {
		init_isObject();
		objectCreate = Object.create;
		baseCreate = function() {
			function object() {}
			return function(proto) {
				if (!isObject(proto)) return {};
				if (objectCreate) return objectCreate(proto);
				object.prototype = proto;
				var result = new object();
				object.prototype = void 0;
				return result;
			};
		}();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getPrototype.js
var getPrototype;
function init__getPrototype() {
	return (init__getPrototype = __esmMin((() => {
		init__overArg();
		getPrototype = overArg(Object.getPrototypeOf, Object);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_initCloneObject.js
/**
* Initializes an object clone.
*
* @private
* @param {Object} object The object to clone.
* @returns {Object} Returns the initialized clone.
*/
function initCloneObject(object) {
	return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
function init__initCloneObject() {
	return (init__initCloneObject = __esmMin((() => {
		init__baseCreate();
		init__getPrototype();
		init__isPrototype();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLikeObject.js
/**
* This method is like `_.isArrayLike` except that it also checks if `value`
* is an object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array-like object,
*  else `false`.
* @example
*
* _.isArrayLikeObject([1, 2, 3]);
* // => true
*
* _.isArrayLikeObject(document.body.children);
* // => true
*
* _.isArrayLikeObject('abc');
* // => false
*
* _.isArrayLikeObject(_.noop);
* // => false
*/
function isArrayLikeObject(value) {
	return isObjectLike(value) && isArrayLike(value);
}
function init_isArrayLikeObject() {
	return (init_isArrayLikeObject = __esmMin((() => {
		init_isArrayLike();
		init_isObjectLike();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isPlainObject.js
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject(value) {
	if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
	var proto = getPrototype(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var objectTag, funcProto, objectProto, funcToString, hasOwnProperty$2, objectCtorString;
function init_isPlainObject() {
	return (init_isPlainObject = __esmMin((() => {
		init__baseGetTag();
		init__getPrototype();
		init_isObjectLike();
		objectTag = "[object Object]";
		funcProto = Function.prototype;
		objectProto = Object.prototype;
		funcToString = funcProto.toString;
		hasOwnProperty$2 = objectProto.hasOwnProperty;
		objectCtorString = funcToString.call(Object);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_safeGet.js
/**
* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the property to get.
* @returns {*} Returns the property value.
*/
function safeGet(object, key) {
	if (key === "constructor" && typeof object[key] === "function") return;
	if (key == "__proto__") return;
	return object[key];
}
function init__safeGet() {
	return (init__safeGet = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_assignValue.js
/**
* Assigns `value` to `key` of `object` if the existing value is not equivalent
* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* for equality comparisons.
*
* @private
* @param {Object} object The object to modify.
* @param {string} key The key of the property to assign.
* @param {*} value The value to assign.
*/
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$1.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
}
var hasOwnProperty$1;
function init__assignValue() {
	return (init__assignValue = __esmMin((() => {
		init__baseAssignValue();
		init_eq();
		hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_copyObject.js
/**
* Copies properties of `source` to `object`.
*
* @private
* @param {Object} source The object to copy properties from.
* @param {Array} props The property identifiers to copy.
* @param {Object} [object={}] The object to copy properties to.
* @param {Function} [customizer] The function to customize copied values.
* @returns {Object} Returns `object`.
*/
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) baseAssignValue(object, key, newValue);
		else assignValue(object, key, newValue);
	}
	return object;
}
function init__copyObject() {
	return (init__copyObject = __esmMin((() => {
		init__assignValue();
		init__baseAssignValue();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeysIn.js
/**
* This function is like
* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* except that it includes inherited enumerable properties.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
function init__nativeKeysIn() {
	return (init__nativeKeysIn = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeysIn.js
/**
* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeysIn(object) {
	if (!isObject(object)) return nativeKeysIn(object);
	var isProto = isPrototype(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
	return result;
}
var hasOwnProperty;
function init__baseKeysIn() {
	return (init__baseKeysIn = __esmMin((() => {
		init_isObject();
		init__isPrototype();
		init__nativeKeysIn();
		hasOwnProperty = Object.prototype.hasOwnProperty;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keysIn.js
/**
* Creates an array of the own and inherited enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keysIn(new Foo);
* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
*/
function keysIn(object) {
	return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function init_keysIn() {
	return (init_keysIn = __esmMin((() => {
		init__arrayLikeKeys();
		init__baseKeysIn();
		init_isArrayLike();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toPlainObject.js
/**
* Converts `value` to a plain object flattening inherited enumerable string
* keyed properties of `value` to own properties of the plain object.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {Object} Returns the converted plain object.
* @example
*
* function Foo() {
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.assign({ 'a': 1 }, new Foo);
* // => { 'a': 1, 'b': 2 }
*
* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
* // => { 'a': 1, 'b': 2, 'c': 3 }
*/
function toPlainObject(value) {
	return copyObject(value, keysIn(value));
}
function init_toPlainObject() {
	return (init_toPlainObject = __esmMin((() => {
		init__copyObject();
		init_keysIn();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMergeDeep.js
/**
* A specialized version of `baseMerge` for arrays and objects which performs
* deep merges and tracks traversed objects enabling objects with circular
* references to be merged.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @param {string} key The key of the value to merge.
* @param {number} srcIndex The index of `source`.
* @param {Function} mergeFunc The function to merge values.
* @param {Function} [customizer] The function to customize assigned values.
* @param {Object} [stack] Tracks traversed source values and their merged
*  counterparts.
*/
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
	if (stacked) {
		assignMergeValue(object, key, stacked);
		return;
	}
	var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
	var isCommon = newValue === void 0;
	if (isCommon) {
		var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
		newValue = srcValue;
		if (isArr || isBuff || isTyped) {
			if (isArray(objValue)) newValue = objValue;
			else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
			else if (isBuff) {
				isCommon = false;
				newValue = cloneBuffer(srcValue, true);
			} else if (isTyped) {
				isCommon = false;
				newValue = cloneTypedArray(srcValue, true);
			} else newValue = [];
		} else if (isPlainObject(srcValue) || isArguments(srcValue)) {
			newValue = objValue;
			if (isArguments(objValue)) newValue = toPlainObject(objValue);
			else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
		} else isCommon = false;
	}
	if (isCommon) {
		stack.set(srcValue, newValue);
		mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
		stack["delete"](srcValue);
	}
	assignMergeValue(object, key, newValue);
}
function init__baseMergeDeep() {
	return (init__baseMergeDeep = __esmMin((() => {
		init__assignMergeValue();
		init__cloneBuffer();
		init__cloneTypedArray();
		init__copyArray();
		init__initCloneObject();
		init_isArguments();
		init_isArray();
		init_isArrayLikeObject();
		init_isBuffer();
		init_isFunction();
		init_isObject();
		init_isPlainObject();
		init_isTypedArray();
		init__safeGet();
		init_toPlainObject();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMerge.js
/**
* The base implementation of `_.merge` without support for multiple sources.
*
* @private
* @param {Object} object The destination object.
* @param {Object} source The source object.
* @param {number} srcIndex The index of `source`.
* @param {Function} [customizer] The function to customize merged values.
* @param {Object} [stack] Tracks traversed source values and their merged
*  counterparts.
*/
function baseMerge(object, source, srcIndex, customizer, stack) {
	if (object === source) return;
	baseFor(source, function(srcValue, key) {
		stack || (stack = new Stack());
		if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
		else {
			var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
			if (newValue === void 0) newValue = srcValue;
			assignMergeValue(object, key, newValue);
		}
	}, keysIn);
}
function init__baseMerge() {
	return (init__baseMerge = __esmMin((() => {
		init__Stack();
		init__assignMergeValue();
		init__baseFor();
		init__baseMergeDeep();
		init_isObject();
		init_keysIn();
		init__safeGet();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_apply.js
/**
* A faster alternative to `Function#apply`, this function invokes `func`
* with the `this` binding of `thisArg` and the arguments of `args`.
*
* @private
* @param {Function} func The function to invoke.
* @param {*} thisArg The `this` binding of `func`.
* @param {Array} args The arguments to invoke `func` with.
* @returns {*} Returns the result of `func`.
*/
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
function init__apply() {
	return (init__apply = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overRest.js
/**
* A specialized version of `baseRest` which transforms the rest array.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @param {Function} transform The rest array transform.
* @returns {Function} Returns the new function.
*/
function overRest(func, start, transform) {
	start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
	return function() {
		var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
		while (++index < length) array[index] = args[start + index];
		index = -1;
		var otherArgs = Array(start + 1);
		while (++index < start) otherArgs[index] = args[index];
		otherArgs[start] = transform(array);
		return apply(func, this, otherArgs);
	};
}
var nativeMax;
function init__overRest() {
	return (init__overRest = __esmMin((() => {
		init__apply();
		nativeMax = Math.max;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/constant.js
/**
* Creates a function that returns `value`.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {*} value The value to return from the new function.
* @returns {Function} Returns the new constant function.
* @example
*
* var objects = _.times(2, _.constant({ 'a': 1 }));
*
* console.log(objects);
* // => [{ 'a': 1 }, { 'a': 1 }]
*
* console.log(objects[0] === objects[1]);
* // => true
*/
function constant(value) {
	return function() {
		return value;
	};
}
function init_constant() {
	return (init_constant = __esmMin((() => {})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseSetToString.js
var baseSetToString;
function init__baseSetToString() {
	return (init__baseSetToString = __esmMin((() => {
		init_constant();
		init__defineProperty();
		init_identity();
		baseSetToString = !defineProperty ? identity : function(func, string) {
			return defineProperty(func, "toString", {
				"configurable": true,
				"enumerable": false,
				"value": constant(string),
				"writable": true
			});
		};
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_shortOut.js
/**
* Creates a function that'll short out and invoke `identity` instead
* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
* milliseconds.
*
* @private
* @param {Function} func The function to restrict.
* @returns {Function} Returns the new shortable function.
*/
function shortOut(func) {
	var count = 0, lastCalled = 0;
	return function() {
		var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
		lastCalled = stamp;
		if (remaining > 0) {
			if (++count >= HOT_COUNT) return arguments[0];
		} else count = 0;
		return func.apply(void 0, arguments);
	};
}
var HOT_COUNT, HOT_SPAN, nativeNow;
function init__shortOut() {
	return (init__shortOut = __esmMin((() => {
		HOT_COUNT = 800;
		HOT_SPAN = 16;
		nativeNow = Date.now;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToString.js
var setToString;
function init__setToString() {
	return (init__setToString = __esmMin((() => {
		init__baseSetToString();
		init__shortOut();
		setToString = shortOut(baseSetToString);
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseRest.js
/**
* The base implementation of `_.rest` which doesn't validate or coerce arguments.
*
* @private
* @param {Function} func The function to apply a rest parameter to.
* @param {number} [start=func.length-1] The start position of the rest parameter.
* @returns {Function} Returns the new function.
*/
function baseRest(func, start) {
	return setToString(overRest(func, start, identity), func + "");
}
function init__baseRest() {
	return (init__baseRest = __esmMin((() => {
		init_identity();
		init__overRest();
		init__setToString();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isIterateeCall.js
/**
* Checks if the given arguments are from an iteratee call.
*
* @private
* @param {*} value The potential iteratee value argument.
* @param {*} index The potential iteratee index or key argument.
* @param {*} object The potential iteratee object argument.
* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
*  else `false`.
*/
function isIterateeCall(value, index, object) {
	if (!isObject(object)) return false;
	var type = typeof index;
	if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
	return false;
}
function init__isIterateeCall() {
	return (init__isIterateeCall = __esmMin((() => {
		init_eq();
		init_isArrayLike();
		init__isIndex();
		init_isObject();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_createAssigner.js
/**
* Creates a function like `_.assign`.
*
* @private
* @param {Function} assigner The function to assign values.
* @returns {Function} Returns the new assigner function.
*/
function createAssigner(assigner) {
	return baseRest(function(object, sources) {
		var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
		customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
		if (guard && isIterateeCall(sources[0], sources[1], guard)) {
			customizer = length < 3 ? void 0 : customizer;
			length = 1;
		}
		object = Object(object);
		while (++index < length) {
			var source = sources[index];
			if (source) assigner(object, source, index, customizer);
		}
		return object;
	});
}
function init__createAssigner() {
	return (init__createAssigner = __esmMin((() => {
		init__baseRest();
		init__isIterateeCall();
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/merge.js
var merge;
function init_merge() {
	return (init_merge = __esmMin((() => {
		init__baseMerge();
		init__createAssigner();
		merge = createAssigner(function(object, source, srcIndex) {
			baseMerge(object, source, srcIndex);
		});
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-5PVQY5BW.mjs
function interpolateToCurve(interpolate, defaultCurve) {
	if (!interpolate) return defaultCurve;
	return d3CurveTypes[`curve${interpolate.charAt(0).toUpperCase() + interpolate.slice(1)}`] ?? defaultCurve;
}
function formatUrl(linkStr, config) {
	const url = linkStr.trim();
	if (!url) return;
	if (config.securityLevel !== "loose") return (0, import_dist.sanitizeUrl)(url);
	return url;
}
function distance(p1, p2) {
	if (!p1 || !p2) return 0;
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function traverseEdge(points) {
	let prevPoint;
	let totalDistance = 0;
	points.forEach((point) => {
		totalDistance += distance(point, prevPoint);
		prevPoint = point;
	});
	return calculatePoint(points, totalDistance / 2);
}
function calcLabelPosition(points) {
	if (points.length === 1) return points[0];
	return traverseEdge(points);
}
function calcTerminalLabelPosition(terminalMarkerSize, position, _points) {
	const points = structuredClone(_points);
	log.info("our points", points);
	if (position !== "start_left" && position !== "start_right") points.reverse();
	const center = calculatePoint(points, 25 + terminalMarkerSize);
	const d = 10 + terminalMarkerSize * .5;
	const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
	const cardinalityPosition = {
		x: 0,
		y: 0
	};
	if (position === "start_left") {
		cardinalityPosition.x = Math.sin(angle + Math.PI) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle + Math.PI) * d + (points[0].y + center.y) / 2;
	} else if (position === "end_right") {
		cardinalityPosition.x = Math.sin(angle - Math.PI) * d + (points[0].x + center.x) / 2 - 5;
		cardinalityPosition.y = -Math.cos(angle - Math.PI) * d + (points[0].y + center.y) / 2 - 5;
	} else if (position === "end_left") {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2 - 5;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2 - 5;
	} else {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	}
	return cardinalityPosition;
}
function getStylesFromArray(arr) {
	let style = "";
	let labelStyle = "";
	for (const element of arr) if (element !== void 0) {
		if (element.startsWith("color:") || element.startsWith("text-align:")) labelStyle = labelStyle + element + ";";
		else style = style + element + ";";
	}
	return {
		style,
		labelStyle
	};
}
function makeRandomHex(length) {
	let result = "";
	const characters = "0123456789abcdef";
	const charactersLength = 16;
	for (let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}
function calculateTextHeight(text, config) {
	return calculateTextDimensions(text, config).height;
}
function calculateTextWidth(text, config) {
	return calculateTextDimensions(text, config).width;
}
function isDetailedError(error) {
	return "str" in error;
}
function cleanAndMerge(defaultData, data) {
	return merge({}, defaultData, data);
}
function handleUndefinedAttr(attrValue) {
	return attrValue ?? null;
}
function isLabelCoordinateInPath(point, dAttr) {
	const roundedX = Math.round(point.x);
	const roundedY = Math.round(point.y);
	const sanitizedD = dAttr.replace(/(\d+\.\d+)/g, (match) => Math.round(parseFloat(match)).toString());
	return sanitizedD.includes(roundedX.toString()) || sanitizedD.includes(roundedY.toString());
}
var import_dist, d3CurveTypes, directiveWithoutOpen, detectInit, detectDirective, removeDirectives, isSubstringInArray, runFunc, roundNumber, calculatePoint, calcCardinalityPosition, cnt, generateId, random, getTextObj, drawSimpleText, wrapLabel, breakString, calculateTextDimensions, InitIDGenerator, decoder, entityDecode, insertTitle, parseFontSize, utils_default, encodeEntities, decodeEntities, getEdgeId;
function init_chunk_5PVQY5BW() {
	return (init_chunk_5PVQY5BW = __esmMin((() => {
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		import_dist = require_dist();
		init_src();
		init_memoize();
		init_merge();
		d3CurveTypes = {
			curveBasis: basis_default,
			curveBasisClosed: basisClosed_default,
			curveBasisOpen: basisOpen_default,
			curveBumpX: bumpX,
			curveBumpY: bumpY,
			curveBundle: bundle_default,
			curveCardinalClosed: cardinalClosed_default,
			curveCardinalOpen: cardinalOpen_default,
			curveCardinal: cardinal_default,
			curveCatmullRomClosed: catmullRomClosed_default,
			curveCatmullRomOpen: catmullRomOpen_default,
			curveCatmullRom: catmullRom_default,
			curveLinear: linear_default,
			curveLinearClosed: linearClosed_default,
			curveMonotoneX: monotoneX,
			curveMonotoneY: monotoneY,
			curveNatural: natural_default,
			curveStep: step_default,
			curveStepAfter: stepAfter,
			curveStepBefore: stepBefore
		};
		directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
		detectInit = /* @__PURE__ */ __name(function(text, config) {
			const inits = detectDirective(text, /(?:init\b)|(?:initialize\b)/);
			let results = {};
			if (Array.isArray(inits)) {
				const args = inits.map((init) => init.args);
				sanitizeDirective(args);
				results = assignWithDepth_default(results, [...args]);
			} else results = inits.args;
			if (!results) return;
			let type = detectType(text, config);
			const prop = "config";
			if (results[prop] !== void 0) {
				if (type === "flowchart-v2") type = "flowchart";
				results[type] = results[prop];
				delete results[prop];
			}
			return results;
		}, "detectInit");
		detectDirective = /* @__PURE__ */ __name(function(text, type = null) {
			try {
				const commentWithoutDirectives = new RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
				text = text.trim().replace(commentWithoutDirectives, "").replace(/'/gm, "\"");
				log.debug(`Detecting diagram directive${type !== null ? " type:" + type : ""} based on the text:${text}`);
				let match;
				const result = [];
				while ((match = directiveRegex.exec(text)) !== null) {
					if (match.index === directiveRegex.lastIndex) directiveRegex.lastIndex++;
					if (match && !type || type && match[1]?.match(type) || type && match[2]?.match(type)) {
						const type2 = match[1] ? match[1] : match[2];
						const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
						result.push({
							type: type2,
							args
						});
					}
				}
				if (result.length === 0) return {
					type: text,
					args: null
				};
				return result.length === 1 ? result[0] : result;
			} catch (error) {
				log.error(`ERROR: ${error.message} - Unable to parse directive type: '${type}' based on the text: '${text}'`);
				return {
					type: void 0,
					args: null
				};
			}
		}, "detectDirective");
		removeDirectives = /* @__PURE__ */ __name(function(text) {
			return text.replace(directiveRegex, "");
		}, "removeDirectives");
		isSubstringInArray = /* @__PURE__ */ __name(function(str, arr) {
			for (const [i, element] of arr.entries()) if (element.match(str)) return i;
			return -1;
		}, "isSubstringInArray");
		__name(interpolateToCurve, "interpolateToCurve");
		__name(formatUrl, "formatUrl");
		runFunc = /* @__PURE__ */ __name((functionName, ...params) => {
			const arrPaths = functionName.split(".");
			const len = arrPaths.length - 1;
			const fnName = arrPaths[len];
			let obj = window;
			for (let i = 0; i < len; i++) {
				obj = obj[arrPaths[i]];
				if (!obj) {
					log.error(`Function name: ${functionName} not found in window`);
					return;
				}
			}
			obj[fnName](...params);
		}, "runFunc");
		__name(distance, "distance");
		__name(traverseEdge, "traverseEdge");
		__name(calcLabelPosition, "calcLabelPosition");
		roundNumber = /* @__PURE__ */ __name((num, precision = 2) => {
			const factor = Math.pow(10, precision);
			return Math.round(num * factor) / factor;
		}, "roundNumber");
		calculatePoint = /* @__PURE__ */ __name((points, distanceToTraverse) => {
			let prevPoint = void 0;
			let remainingDistance = distanceToTraverse;
			for (const point of points) {
				if (prevPoint) {
					const vectorDistance = distance(point, prevPoint);
					if (vectorDistance === 0) return prevPoint;
					if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
					else {
						const distanceRatio = remainingDistance / vectorDistance;
						if (distanceRatio <= 0) return prevPoint;
						if (distanceRatio >= 1) return {
							x: point.x,
							y: point.y
						};
						if (distanceRatio > 0 && distanceRatio < 1) return {
							x: roundNumber((1 - distanceRatio) * prevPoint.x + distanceRatio * point.x, 5),
							y: roundNumber((1 - distanceRatio) * prevPoint.y + distanceRatio * point.y, 5)
						};
					}
				}
				prevPoint = point;
			}
			throw new Error("Could not find a suitable point for the given distance");
		}, "calculatePoint");
		calcCardinalityPosition = /* @__PURE__ */ __name((isRelationTypePresent, points, initialPosition) => {
			log.info(`our points ${JSON.stringify(points)}`);
			if (points[0] !== initialPosition) points = points.reverse();
			const center = calculatePoint(points, 25);
			const d = isRelationTypePresent ? 10 : 5;
			const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
			const cardinalityPosition = {
				x: 0,
				y: 0
			};
			cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
			cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
			return cardinalityPosition;
		}, "calcCardinalityPosition");
		__name(calcTerminalLabelPosition, "calcTerminalLabelPosition");
		__name(getStylesFromArray, "getStylesFromArray");
		cnt = 0;
		generateId = /* @__PURE__ */ __name(() => {
			cnt++;
			return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
		}, "generateId");
		__name(makeRandomHex, "makeRandomHex");
		random = /* @__PURE__ */ __name((options) => {
			return makeRandomHex(options.length);
		}, "random");
		getTextObj = /* @__PURE__ */ __name(function() {
			return {
				x: 0,
				y: 0,
				fill: void 0,
				anchor: "start",
				style: "#666",
				width: 100,
				height: 100,
				textMargin: 0,
				rx: 0,
				ry: 0,
				valign: void 0,
				text: ""
			};
		}, "getTextObj");
		drawSimpleText = /* @__PURE__ */ __name(function(elem, textData) {
			const nText = textData.text.replace(common_default.lineBreakRegex, " ");
			const [, _fontSizePx] = parseFontSize(textData.fontSize);
			const textElem = elem.append("text");
			textElem.attr("x", textData.x);
			textElem.attr("y", textData.y);
			textElem.style("text-anchor", textData.anchor);
			textElem.style("font-family", textData.fontFamily);
			textElem.style("font-size", _fontSizePx);
			textElem.style("font-weight", textData.fontWeight);
			textElem.attr("fill", textData.fill);
			if (textData.class !== void 0) textElem.attr("class", textData.class);
			const span = textElem.append("tspan");
			span.attr("x", textData.x + textData.textMargin * 2);
			span.attr("fill", textData.fill);
			span.text(nText);
			return textElem;
		}, "drawSimpleText");
		wrapLabel = memoize((label, maxWidth, config) => {
			if (!label) return label;
			config = Object.assign({
				fontSize: 12,
				fontWeight: 400,
				fontFamily: "Arial",
				joinWith: "<br/>"
			}, config);
			if (common_default.lineBreakRegex.test(label)) return label;
			const words = label.split(" ").filter(Boolean);
			const completedLines = [];
			let nextLine = "";
			words.forEach((word, index) => {
				const wordLength = calculateTextWidth(`${word} `, config);
				const nextLineLength = calculateTextWidth(nextLine, config);
				if (wordLength > maxWidth) {
					const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth, "-", config);
					completedLines.push(nextLine, ...hyphenatedStrings);
					nextLine = remainingWord;
				} else if (nextLineLength + wordLength >= maxWidth) {
					completedLines.push(nextLine);
					nextLine = word;
				} else nextLine = [nextLine, word].filter(Boolean).join(" ");
				if (index + 1 === words.length) completedLines.push(nextLine);
			});
			return completedLines.filter((line) => line !== "").join(config.joinWith);
		}, (label, maxWidth, config) => `${label}${maxWidth}${config.fontSize}${config.fontWeight}${config.fontFamily}${config.joinWith}`);
		breakString = memoize((word, maxWidth, hyphenCharacter = "-", config) => {
			config = Object.assign({
				fontSize: 12,
				fontWeight: 400,
				fontFamily: "Arial",
				margin: 0
			}, config);
			const characters = [...word];
			const lines = [];
			let currentLine = "";
			characters.forEach((character, index) => {
				const nextLine = `${currentLine}${character}`;
				if (calculateTextWidth(nextLine, config) >= maxWidth) {
					const currentCharacter = index + 1;
					const isLastLine = characters.length === currentCharacter;
					const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
					lines.push(isLastLine ? nextLine : hyphenatedNextLine);
					currentLine = "";
				} else currentLine = nextLine;
			});
			return {
				hyphenatedStrings: lines,
				remainingWord: currentLine
			};
		}, (word, maxWidth, hyphenCharacter = "-", config) => `${word}${maxWidth}${hyphenCharacter}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
		__name(calculateTextHeight, "calculateTextHeight");
		__name(calculateTextWidth, "calculateTextWidth");
		calculateTextDimensions = memoize((text, config) => {
			const { fontSize = 12, fontFamily = "Arial", fontWeight = 400 } = config;
			if (!text) return {
				width: 0,
				height: 0
			};
			const [, _fontSizePx] = parseFontSize(fontSize);
			const fontFamilies = ["sans-serif", fontFamily];
			const lines = text.split(common_default.lineBreakRegex);
			const dims = [];
			const body = select_default("body");
			if (!body.remove) return {
				width: 0,
				height: 0,
				lineHeight: 0
			};
			const g = body.append("svg");
			for (const fontFamily2 of fontFamilies) {
				let cHeight = 0;
				const dim = {
					width: 0,
					height: 0,
					lineHeight: 0
				};
				for (const line of lines) {
					const textObj = getTextObj();
					textObj.text = line || "​";
					const textElem = drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
					const bBox = (textElem._groups || textElem)[0][0].getBBox();
					if (bBox.width === 0 && bBox.height === 0) throw new Error("svg element not in render tree");
					dim.width = Math.round(Math.max(dim.width, bBox.width));
					cHeight = Math.round(bBox.height);
					dim.height += cHeight;
					dim.lineHeight = Math.round(Math.max(dim.lineHeight, cHeight));
				}
				dims.push(dim);
			}
			g.remove();
			return dims[isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1];
		}, (text, config) => `${text}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
		InitIDGenerator = class {
			constructor(deterministic = false, seed) {
				this.count = 0;
				this.count = seed ? seed.length : 0;
				this.next = deterministic ? () => this.count++ : () => Date.now();
			}
			static {
				__name(this, "InitIDGenerator");
			}
		};
		entityDecode = /* @__PURE__ */ __name(function(html) {
			decoder = decoder || document.createElement("div");
			html = escape(html).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
			decoder.innerHTML = html;
			return unescape(decoder.textContent);
		}, "entityDecode");
		__name(isDetailedError, "isDetailedError");
		insertTitle = /* @__PURE__ */ __name((parent, cssClass, titleTopMargin, title) => {
			if (!title) return;
			const bounds = parent.node()?.getBBox();
			if (!bounds) return;
			parent.append("text").text(title).attr("text-anchor", "middle").attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
		}, "insertTitle");
		parseFontSize = /* @__PURE__ */ __name((fontSize) => {
			if (typeof fontSize === "number") return [fontSize, fontSize + "px"];
			const fontSizeNumber = parseInt(fontSize ?? "", 10);
			if (Number.isNaN(fontSizeNumber)) return [void 0, void 0];
			else if (fontSize === String(fontSizeNumber)) return [fontSizeNumber, fontSize + "px"];
			else return [fontSizeNumber, fontSize];
		}, "parseFontSize");
		__name(cleanAndMerge, "cleanAndMerge");
		utils_default = {
			assignWithDepth: assignWithDepth_default,
			wrapLabel,
			calculateTextHeight,
			calculateTextWidth,
			calculateTextDimensions,
			cleanAndMerge,
			detectInit,
			detectDirective,
			isSubstringInArray,
			interpolateToCurve,
			calcLabelPosition,
			calcCardinalityPosition,
			calcTerminalLabelPosition,
			formatUrl,
			getStylesFromArray,
			generateId,
			random,
			runFunc,
			entityDecode,
			insertTitle,
			isLabelCoordinateInPath,
			parseFontSize,
			InitIDGenerator
		};
		encodeEntities = /* @__PURE__ */ __name(function(text) {
			let txt = text;
			txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
				return s.substring(0, s.length - 1);
			});
			txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
				return s.substring(0, s.length - 1);
			});
			txt = txt.replace(/#\w+;/g, function(s) {
				const innerTxt = s.substring(1, s.length - 1);
				if (/^\+?\d+$/.test(innerTxt)) return "ﬂ°°" + innerTxt + "¶ß";
				else return "ﬂ°" + innerTxt + "¶ß";
			});
			return txt;
		}, "encodeEntities");
		decodeEntities = /* @__PURE__ */ __name(function(text) {
			return text.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
		}, "decodeEntities");
		getEdgeId = /* @__PURE__ */ __name((from, to, { counter = 0, prefix, suffix }, id) => {
			if (id) return id;
			return `${prefix ? `${prefix}_` : ""}${from}_${to}_${counter}${suffix ? `_${suffix}` : ""}`;
		}, "getEdgeId");
		__name(handleUndefinedAttr, "handleUndefinedAttr");
		__name(isLabelCoordinateInPath, "isLabelCoordinateInPath");
	})))();
}
//#endregion
export { stepAfter as $, init_keysIn as A, getPrototype as B, init__baseRest as C, init_bump as Ct, init_constant as D, constant as E, init__assignValue as F, init__cloneTypedArray as G, copyArray as H, init_isArrayLikeObject as I, cloneBuffer as J, cloneArrayBuffer as K, isArrayLikeObject as L, copyObject as M, init__copyObject as N, init__overRest as O, assignValue as P, init_step as Q, initCloneObject as R, baseRest as S, bumpY as St, setToString as T, linear_default as Tt, init__copyArray as U, init__getPrototype as V, cloneTypedArray as W, baseAssignValue as X, init__cloneBuffer as Y, init__baseAssignValue as Z, wrapLabel as _, init_basisOpen as _t, encodeEntities as a, monotoneX as at, init__isIterateeCall as b, init_basis as bt, getStylesFromArray as c, init_catmullRomOpen as ct, interpolateToCurve as d, init_catmullRom as dt, stepBefore as et, isDetailedError as f, init_cardinalOpen as ft, utils_default as g, init_bundle as gt, removeDirectives as h, init_cardinal as ht, decodeEntities as i, init_monotone as it, keysIn as j, overRest as k, handleUndefinedAttr as l, init_catmullRomClosed as lt, random as m, cardinal_default as mt, calculateTextWidth as n, init_natural as nt, generateId as o, monotoneY as ot, parseFontSize as p, init_cardinalClosed as pt, init__cloneArrayBuffer as q, cleanAndMerge as r, natural_default as rt, getEdgeId as s, init_linearClosed as st, calculateTextHeight as t, step_default as tt, init_chunk_5PVQY5BW as u, catmullRom_default as ut, init_merge as v, init_basisClosed as vt, init__setToString as w, init_linear as wt, isIterateeCall as x, bumpX as xt, merge as y, basis_default as yt, init__initCloneObject as z };
