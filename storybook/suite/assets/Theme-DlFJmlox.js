import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { n as init_appStore, r as useAppStore } from "./appStore-8DTFQjf-.js";
import { G as locale, H as addLocale } from "./inputtext.esm-BsWCZcbt.js";
import { $ as init_primereact, a as loadThemeCss, c as themeOptionByFolder, i as init_themeRegistry, l as themeOptionById, n as FALLBACK_THEME_OPTION, o as paletteOfFolder, s as resolveThemeFolder, u as themeOptionByName } from "./iframe-jjCxrJpo.js";
//#endregion
//#region ../../core/blong-browser/src/components/Theme/glassReflection.ts
/** Build the per-panel geometry needed to place edges. */
function collectPanels(scope) {
	const rect = scope.getBoundingClientRect();
	const left = rect.left;
	const top = rect.top;
	const result = [];
	for (const element of Array.from(scope.querySelectorAll(GLASS_PANEL_SELECTOR))) {
		const b = element.getBoundingClientRect();
		const w = b.width;
		const h = b.height;
		const span = w * AXIS_X + h * AXIS_Y;
		if (!Number.isFinite(span) || span <= 0) continue;
		const x = b.left - left;
		const y = b.top - top;
		result.push({
			element,
			x,
			y,
			w,
			h,
			span,
			s: x * AXIS_X + y * AXIS_Y,
			isHeader: element.classList.contains("p-toolbar") && w >= rect.width * HEADER_TOOLBAR_MIN_WIDTH,
			isInspector: element.matches(INSPECTOR_SELECTOR)
		});
	}
	return result;
}
/** Group flow panels (cards + inner toolbars) into columns by centre x. */
function clusterColumns(panels) {
	const sorted = [...panels].sort((a, b) => a.x + a.w / 2 - (b.x + b.w / 2));
	const clusters = [];
	let lastCentre = Number.NEGATIVE_INFINITY;
	for (const p of sorted) {
		const centre = p.x + p.w / 2;
		if (clusters.length === 0 || centre - lastCentre > COLUMN_GAP) clusters.push([p]);
		else clusters[clusters.length - 1].push(p);
		lastCentre = centre;
	}
	return clusters;
}
/** Anchor of a lane = its top-most card (a full-width header skews the span). */
function laneAnchor(lane) {
	const candidates = lane.filter((p) => !p.isHeader);
	const pool = candidates.length > 0 ? candidates : lane;
	let anchor = pool[0];
	for (const p of pool) if (p.y < anchor.y) anchor = p;
	return anchor;
}
/** Set every member of a lane on one straight edge; far-side members fall back. */
function placeLane(lane) {
	const anchor = laneAnchor(lane);
	const edgeC = anchor.s + ANCHOR_FRACTION * anchor.span;
	let minS = lane[0].s;
	let maxS = lane[0].s;
	for (const p of lane) {
		if (p.s < minS) minS = p.s;
		if (p.s > maxS) maxS = p.s;
	}
	const spanS = maxS - minS || 1;
	for (const p of lane) {
		let fraction = (edgeC - p.s) / p.span;
		if (fraction < MIN_FRACTION) {
			const ratio = (p.s - minS) / spanS;
			fraction = FALLOFF_TOP - ratio * .30000000000000004;
		} else if (fraction > MAX_FRACTION) fraction = MAX_FRACTION;
		p.element.style.setProperty("--glare-shift", `${(fraction * 100).toFixed(2)}%`);
	}
}
/**
* Recompute `--glare-shift` per lane so each lane's silver→black edges lie on
* ONE straight line, pin the shared `--glare-angle`, and give the Form
* Inspector its independent centered gradient. Runs on every size change, so
* the lanes follow the responsive single / two column layout automatically.
*/
function updateGlassReflections(scope) {
	if (!scope || typeof scope.getBoundingClientRect !== "function") return;
	scope.style.setProperty("--glare-angle", `103deg`);
	const all = collectPanels(scope);
	if (all.length === 0) return;
	const header = all.find((p) => p.isHeader);
	const columns = clusterColumns(all.filter((p) => !p.isInspector && !p.isHeader));
	if (columns.length === 0) {
		if (header) placeLane([header]);
	} else {
		const leftLane = columns[0];
		if (header) leftLane.push(header);
		placeLane(leftLane);
		for (const column of columns.slice(1)) placeLane(column);
	}
	for (const p of all) {
		if (!p.isInspector) continue;
		p.element.style.setProperty("--glare-shift", `${(INSPECTOR_FRACTION * 100).toFixed(2)}%`);
	}
}
var GLASS_PANEL_SELECTOR, HEADER_TOOLBAR_MIN_WIDTH, INSPECTOR_SELECTOR, ANCHOR_FRACTION, MIN_FRACTION, MAX_FRACTION, FALLOFF_TOP, INSPECTOR_FRACTION, COLUMN_GAP, RAD, AXIS_X, AXIS_Y;
function init_glassReflection() {
	return (init_glassReflection = __esmMin((() => {
		GLASS_PANEL_SELECTOR = ".p-card, .p-toolbar, .blong-property-editor.blong-inspector";
		HEADER_TOOLBAR_MIN_WIDTH = .6;
		INSPECTOR_SELECTOR = ".blong-property-editor.blong-inspector";
		ANCHOR_FRACTION = .5;
		MIN_FRACTION = .06;
		MAX_FRACTION = .94;
		FALLOFF_TOP = .4;
		INSPECTOR_FRACTION = .5;
		COLUMN_GAP = 120;
		RAD = 103 * Math.PI / 180;
		AXIS_X = Math.sin(RAD);
		AXIS_Y = -Math.cos(RAD);
	})))();
}
//#endregion
//#region ../../core/blong-browser/src/components/Theme/Theme.tsx
/**
* Access the effective theme and the switcher setters from any descendant of
* `<Theme>` (e.g. the portal menubar's theme switcher).
*/
function useTheme() {
	const context = (0, import_react.use)(ThemeContext);
	if (!context) throw new Error("useTheme must be used within <Theme>");
	return context;
}
/**
* The palette in force, for a component that may be rendered outside `<Theme>`.
*
* `useTheme` throws where there is no provider, which is right for a component that
* *needs* the theme: without one it is being used wrongly, and a crash names the
* mistake. A viewer is not such a component — it draws what it is handed, and which
* colours it draws in is an appearance rather than a requirement — so it reads the
* palette when one is in force and gets `undefined` when none is, leaving the
* meaning of "no theme" to the caller.
*/
function useThemePalette() {
	return (0, import_react.use)(ThemeContext)?.palette;
}
function Theme({ theme, children }) {
	const appRef = (0, import_react.useRef)(null);
	const language = useAppStore((s) => s.language);
	(0, import_react.useEffect)(() => {
		if (theme.languages) for (const [lang, options] of Object.entries(theme.languages)) addLocale(lang, options);
	}, [theme.languages]);
	(0, import_react.useEffect)(() => {
		locale(language && language !== "en" ? language : "en");
	}, [language]);
	const palette = theme.palette ?? "dark";
	const type = theme.type ?? "compact";
	const selection = useAppStore((s) => s.theme);
	const setTheme = useAppStore((s) => s.setTheme);
	const direction = selection.direction ?? theme.direction;
	const defaultFolder = PRIMEREACT_PALETTE_THEMES[type][palette];
	const named = theme.name ? themeOptionByName(theme.name) : void 0;
	const baseFolder = named && !named.option.variant ? resolveThemeFolder(named.option, named.palette) : defaultFolder;
	const basePalette = named?.palette ?? paletteOfFolder(defaultFolder) ?? palette;
	const configOption = named?.option ?? (theme.variant && theme.variant !== "standard" ? themeOptionById(theme.variant) : void 0) ?? themeOptionByFolder(baseFolder) ?? FALLBACK_THEME_OPTION;
	const option = (selection.themeId ? themeOptionById(selection.themeId) : void 0) ?? configOption;
	const isBlongVariant = option.variant !== void 0;
	const paletteToggle = Boolean(option.light && option.dark);
	const preferredPalette = selection.palette ?? basePalette;
	const activePalette = isBlongVariant ? basePalette : option.light && option.dark ? preferredPalette : option.dark ? "dark" : "light";
	const variant = option.variant ?? "standard";
	const folder = isBlongVariant ? baseFolder : resolveThemeFolder(option, activePalette);
	const selectTheme = (0, import_react.useCallback)((themeId) => {
		const next = themeOptionById(themeId);
		if (!next) return;
		if (next.variant) {
			setTheme({ themeId });
			return;
		}
		const nextPalette = next.light && next.dark ? activePalette : next.dark ? "dark" : "light";
		setTheme({
			themeId,
			palette: nextPalette
		});
	}, [setTheme, activePalette]);
	const selectPalette = (0, import_react.useCallback)((nextPalette) => setTheme({
		themeId: option.id,
		palette: nextPalette
	}), [setTheme, option.id]);
	const rootMarker = variant === "standard" ? null : `blong-theme-${variant}`;
	(0, import_react.useEffect)(() => {
		if (!rootMarker) return void 0;
		const root = document.documentElement;
		root.classList.add(rootMarker);
		return () => root.classList.remove(rootMarker);
	}, [rootMarker]);
	const glassActive = variant === "glass";
	(0, import_react.useEffect)(() => {
		if (!glassActive) return void 0;
		const node = appRef.current;
		if (!node) return void 0;
		updateGlassReflections(node);
		const refresh = () => updateGlassReflections(node);
		const interval = window.setInterval(refresh, 250);
		window.addEventListener("resize", refresh);
		window.addEventListener("load", refresh);
		return () => {
			window.clearInterval(interval);
			window.removeEventListener("resize", refresh);
			window.removeEventListener("load", refresh);
		};
	}, [glassActive]);
	(0, import_react.useEffect)(() => {
		const fontSize = theme.fontSize ?? PALETTE_FONT_SIZES[type];
		document.documentElement.dir = direction ?? "ltr";
		document.documentElement.lang = direction === "rtl" ? "ar" : "en";
		document.documentElement.style.fontSize = `${fontSize}px`;
		if (theme.primary) document.documentElement.style.setProperty("--p-primary-color", theme.primary);
	}, [
		direction,
		theme.fontSize,
		theme.primary,
		type
	]);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		loadThemeCss(folder).then((css) => {
			if (cancelled || !css || typeof document === "undefined") return;
			let element = document.getElementById("blong-prime-theme");
			if (!element) {
				element = document.createElement("style");
				element.id = "blong-prime-theme";
				document.head.appendChild(element);
			}
			element.textContent = css;
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [folder]);
	const contextValue = {
		config: {
			...theme,
			palette: activePalette,
			variant,
			direction
		},
		optionId: option.id,
		option,
		palette: activePalette,
		paletteToggle,
		switcher: theme.switcher ?? true,
		selectTheme,
		selectPalette
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: appRef,
			className: [
				"blong-app",
				`blong-app-${activePalette}`,
				`blong-app-${type}`,
				variant !== "standard" ? VARIANT_CSS_CLASS[variant] : "",
				direction === "rtl" ? "blong-app-rtl" : ""
			].filter(Boolean).join(" "),
			dir: direction ?? "ltr",
			children
		})
	});
}
var import_react, import_jsx_runtime, VARIANT_CSS_CLASS, PRIMEREACT_PALETTE_THEMES, PALETTE_FONT_SIZES, ThemeContext;
function init_Theme() {
	return (init_Theme = __esmMin((() => {
		init_primereact();
		init_glassReflection();
		init_themeRegistry();
		import_react = require_react();
		init_appStore();
		import_jsx_runtime = require_jsx_runtime();
		VARIANT_CSS_CLASS = {
			glass: "blong-app-glass",
			wood: "blong-app-wood"
		};
		PRIMEREACT_PALETTE_THEMES = {
			big: {
				light: "lara-light-blue",
				dark: "lara-dark-blue"
			},
			compact: {
				light: "saga-blue",
				dark: "vela-blue"
			}
		};
		PALETTE_FONT_SIZES = {
			big: 16,
			compact: 14
		};
		ThemeContext = (0, import_react.createContext)(null);
	})))();
}
//#endregion
export { useThemePalette as i, init_Theme as n, useTheme as r, Theme as t };
