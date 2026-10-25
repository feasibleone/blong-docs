import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { T as init_chunk_AGHRB4JF, w as __name } from "./src-sxmhTtP3.js";
import { A as init_chunk_ICPOFSXX, b as getConfig2, d as defaultConfig_default } from "./chunk-ICPOFSXX-BJUpm1HO.js";
import { p as parseFontSize, u as init_chunk_5PVQY5BW } from "./chunk-5PVQY5BW-BNrAsxxX.js";
//#region ../../common/temp/node_modules/.pnpm/mermaid@11.14.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-ZZ45TVLE.mjs
async function configureLabelImages(container, labelText) {
	const images = container.getElementsByTagName("img");
	if (!images || images.length === 0) return;
	const noImgText = labelText.replace(/<img[^>]*>/g, "").trim() === "";
	await Promise.all([...images].map((img) => new Promise((res) => {
		function setupImage() {
			img.style.display = "flex";
			img.style.flexDirection = "column";
			if (noImgText) {
				const bodyFontSize = getConfig2().fontSize ? getConfig2().fontSize : window.getComputedStyle(document.body).fontSize;
				const enlargingFactor = 5;
				const [parsedBodyFontSize = defaultConfig_default.fontSize] = parseFontSize(bodyFontSize);
				const width = parsedBodyFontSize * enlargingFactor + "px";
				img.style.minWidth = width;
				img.style.maxWidth = width;
			} else img.style.width = "100%";
			res(img);
		}
		__name(setupImage, "setupImage");
		setTimeout(() => {
			if (img.complete) setupImage();
		});
		img.addEventListener("error", setupImage);
		img.addEventListener("load", setupImage);
	})));
}
var getSubGraphTitleMargins;
function init_chunk_ZZ45TVLE() {
	return (init_chunk_ZZ45TVLE = __esmMin((() => {
		init_chunk_5PVQY5BW();
		init_chunk_ICPOFSXX();
		init_chunk_AGHRB4JF();
		getSubGraphTitleMargins = /* @__PURE__ */ __name(({ flowchart }) => {
			const subGraphTitleTopMargin = flowchart?.subGraphTitleMargin?.top ?? 0;
			const subGraphTitleBottomMargin = flowchart?.subGraphTitleMargin?.bottom ?? 0;
			return {
				subGraphTitleTopMargin,
				subGraphTitleBottomMargin,
				subGraphTitleTotalMargin: subGraphTitleTopMargin + subGraphTitleBottomMargin
			};
		}, "getSubGraphTitleMargins");
		__name(configureLabelImages, "configureLabelImages");
	})))();
}
//#endregion
export { getSubGraphTitleMargins as n, init_chunk_ZZ45TVLE as r, configureLabelImages as t };
