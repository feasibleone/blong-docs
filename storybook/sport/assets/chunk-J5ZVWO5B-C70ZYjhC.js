import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { n as __name, r as init_chunk_Y2CYZVJY } from "./chunk-Y2CYZVJY-BI3ITEPM.js";
// ../../common/temp/node_modules/.pnpm/mermaid@12.3.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-J5ZVWO5B.mjs
var COLOR_THEMES, DEFAULT_COLOR_SLOTS, MAX_COLOR_SLOTS, hasPalette, isColorTheme, SAFE_LOOK, safeLook, paletteSlotCount, colorSlotCount, stampColorSlot;
function init_chunk_J5ZVWO5B() {
	return (init_chunk_J5ZVWO5B = __esmMin((() => {
		init_chunk_Y2CYZVJY();
		COLOR_THEMES = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]);
		DEFAULT_COLOR_SLOTS = 12;
		MAX_COLOR_SLOTS = 64;
		hasPalette = /* @__PURE__ */ __name((palette) => Array.isArray(palette) && palette.length > 0, "hasPalette");
		isColorTheme = /* @__PURE__ */ __name((theme, palette) => theme != null && COLOR_THEMES.has(theme) && hasPalette(palette), "isColorTheme");
		SAFE_LOOK = /^[\w-]+$/;
		safeLook = /* @__PURE__ */ __name((look) => {
			const s = typeof look === "string" || typeof look === "number" ? String(look) : "";
			return SAFE_LOOK.test(s) ? s : "classic";
		}, "safeLook");
		paletteSlotCount = /* @__PURE__ */ __name((palette) => hasPalette(palette) ? palette.length : 0, "paletteSlotCount");
		colorSlotCount = /* @__PURE__ */ __name((themeColorLimit, palette) => {
			if (hasPalette(palette)) return paletteSlotCount(palette);
			return typeof themeColorLimit === "number" && Number.isInteger(themeColorLimit) && themeColorLimit > 0 && themeColorLimit <= MAX_COLOR_SLOTS ? themeColorLimit : DEFAULT_COLOR_SLOTS;
		}, "colorSlotCount");
		stampColorSlot = /* @__PURE__ */ __name((shapeSvg, colorIndex, theme, palette) => {
			if (colorIndex === void 0 || !isColorTheme(theme, palette)) return;
			const slot = colorIndex % paletteSlotCount(palette);
			shapeSvg.attr("data-color-id", `color-${slot}`);
		}, "stampColorSlot");
	})))();
}
export { isColorTheme as a, stampColorSlot as c, init_chunk_J5ZVWO5B as i, colorSlotCount as n, paletteSlotCount as o, hasPalette as r, safeLook as s, COLOR_THEMES as t };
