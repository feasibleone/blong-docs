import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { V as init_primereact, r as Button } from "./primereact-_rYrCq5a.js";
//#endregion
//#region ../../core/blong-browser/src/components/SocialLoginButton/SocialLoginButton.tsx
function GoogleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "blong-social-login__mark",
		viewBox: "0 0 48 48",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
			})
		]
	});
}
function SocialLoginButton({ onClick, label = "Continue with Google", loading, disabled, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		outlined: true,
		label,
		loading,
		disabled,
		className: `blong-social-login__button ${className ?? ""}`,
		onClick,
		"data-testid": "google-login-button",
		children: !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleMark, {})
	});
}
var import_jsx_runtime;
function init_SocialLoginButton$1() {
	return (init_SocialLoginButton$1 = __esmMin((() => {
		init_primereact();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
export { init_SocialLoginButton$1 as n, SocialLoginButton as t };
