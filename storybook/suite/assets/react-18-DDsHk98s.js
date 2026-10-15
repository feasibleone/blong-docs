import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { t as require_client } from "./client-RGl1_N_7.js";
//#region ../../common/temp/node_modules/.pnpm/@storybook+react-dom-shim@10.3.6_react-dom@19.2.4_react@19.2.4__react@19.2.4_storybook@_ba1515901909f9d99d6bc95d9af864ee/node_modules/@storybook/react-dom-shim/dist/react-18.js
function getIsReactActEnvironment() {
	return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var import_react, import_client, nodes, WithCallback, renderElement, unmountElement, getReactRoot;
function init_react_18() {
	return (init_react_18 = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_client = /* @__PURE__ */ __toESM(require_client(), 1);
		nodes = /* @__PURE__ */ new Map();
		WithCallback = ({ callback, children }) => {
			let once = import_react.useRef();
			return import_react.useLayoutEffect(() => {
				once.current !== callback && (once.current = callback, callback());
			}, [callback]), children;
		};
		typeof Promise.withResolvers > "u" && (Promise.withResolvers = () => {
			let resolve = null, reject = null;
			return {
				promise: new Promise((res, rej) => {
					resolve = res, reject = rej;
				}),
				resolve,
				reject
			};
		});
		renderElement = async (node, el, rootOptions) => {
			let root = await getReactRoot(el, rootOptions);
			if (getIsReactActEnvironment()) {
				root.render(node);
				return;
			}
			let { promise, resolve } = Promise.withResolvers();
			return root.render(import_react.createElement(WithCallback, { callback: resolve }, node)), promise;
		};
		unmountElement = (el, shouldUseNewRootApi) => {
			let root = nodes.get(el);
			root && (root.unmount(), nodes.delete(el));
		};
		getReactRoot = async (el, rootOptions) => {
			let root = nodes.get(el);
			return root || (root = import_client.createRoot(el, rootOptions), nodes.set(el, root)), root;
		};
	})))();
}
//#endregion
init_react_18();
export { renderElement, unmountElement };
