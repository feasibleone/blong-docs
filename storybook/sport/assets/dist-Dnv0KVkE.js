import { n as __esmMin, t as __commonJSMin } from "./rolldown-runtime-V4kyJ4NV.js";
//#region ../../common/temp/node_modules/.pnpm/d3-shape@3.2.0/node_modules/d3-shape/src/math.js
function acos(x) {
	return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
	return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
var abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau;
function init_math() {
	return (init_math = __esmMin((() => {
		abs = Math.abs;
		atan2 = Math.atan2;
		cos = Math.cos;
		max = Math.max;
		min = Math.min;
		sin = Math.sin;
		sqrt = Math.sqrt;
		epsilon = 1e-12;
		pi = Math.PI;
		halfPi = pi / 2;
		tau = 2 * pi;
	})))();
}
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@braintree+sanitize-url@7.1.2/node_modules/@braintree/sanitize-url/dist/constants.js
var require_constants = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BLANK_URL = exports.relativeFirstCharacters = exports.whitespaceEscapeCharsRegex = exports.urlSchemeRegex = exports.ctrlCharactersRegex = exports.htmlCtrlEntityRegex = exports.htmlEntitiesRegex = exports.invalidProtocolRegex = void 0;
	exports.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
	exports.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
	exports.htmlCtrlEntityRegex = /&(newline|tab);/gi;
	exports.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
	exports.urlSchemeRegex = /^.+(:|&colon;)/gim;
	exports.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g;
	exports.relativeFirstCharacters = [".", "/"];
	exports.BLANK_URL = "about:blank";
}));
//#endregion
//#region ../../common/temp/node_modules/.pnpm/@braintree+sanitize-url@7.1.2/node_modules/@braintree/sanitize-url/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sanitizeUrl = sanitizeUrl;
	var constants_1 = require_constants();
	function isRelativeUrlWithoutProtocol(url) {
		return constants_1.relativeFirstCharacters.indexOf(url[0]) > -1;
	}
	function decodeHtmlCharacters(str) {
		return str.replace(constants_1.ctrlCharactersRegex, "").replace(constants_1.htmlEntitiesRegex, function(match, dec) {
			return String.fromCharCode(dec);
		});
	}
	function isValidUrl(url) {
		return URL.canParse(url);
	}
	function decodeURI(uri) {
		try {
			return decodeURIComponent(uri);
		} catch (e) {
			return uri;
		}
	}
	function sanitizeUrl(url) {
		if (!url) return constants_1.BLANK_URL;
		var charsToDecode;
		var decodedUrl = decodeURI(url.trim());
		do {
			decodedUrl = decodeHtmlCharacters(decodedUrl).replace(constants_1.htmlCtrlEntityRegex, "").replace(constants_1.ctrlCharactersRegex, "").replace(constants_1.whitespaceEscapeCharsRegex, "").trim();
			decodedUrl = decodeURI(decodedUrl);
			charsToDecode = decodedUrl.match(constants_1.ctrlCharactersRegex) || decodedUrl.match(constants_1.htmlEntitiesRegex) || decodedUrl.match(constants_1.htmlCtrlEntityRegex) || decodedUrl.match(constants_1.whitespaceEscapeCharsRegex);
		} while (charsToDecode && charsToDecode.length > 0);
		var sanitizedUrl = decodedUrl;
		if (!sanitizedUrl) return constants_1.BLANK_URL;
		if (isRelativeUrlWithoutProtocol(sanitizedUrl)) return sanitizedUrl;
		var trimmedUrl = sanitizedUrl.trimStart();
		var urlSchemeParseResults = trimmedUrl.match(constants_1.urlSchemeRegex);
		if (!urlSchemeParseResults) return sanitizedUrl;
		var urlScheme = urlSchemeParseResults[0].toLowerCase().trim();
		if (constants_1.invalidProtocolRegex.test(urlScheme)) return constants_1.BLANK_URL;
		var backSanitized = trimmedUrl.replace(/\\/g, "/");
		if (urlScheme === "mailto:" || urlScheme.includes("://")) return backSanitized;
		if (urlScheme === "http:" || urlScheme === "https:") {
			if (!isValidUrl(backSanitized)) return constants_1.BLANK_URL;
			var url_1 = new URL(backSanitized);
			url_1.protocol = url_1.protocol.toLowerCase();
			url_1.hostname = url_1.hostname.toLowerCase();
			return url_1.toString();
		}
		return backSanitized;
	}
}));
//#endregion
export { atan2 as a, halfPi as c, min as d, pi as f, tau as h, asin as i, init_math as l, sqrt as m, abs as n, cos as o, sin as p, acos as r, epsilon as s, require_dist as t, max as u };
