import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { n as init_BlongContext, r as useBlong } from "./BlongContext-B_6NAJve.js";
//#region ../../core/blong-realm/pages/useRealmData.ts
function caller(handler) {
	return async (method, params) => {
		const call = handler?.[method];
		if (typeof call !== "function") throw new Error(`the ${method} method is not available in this portal`);
		return call(params, {});
	};
}
/** Read one `blong.*` method, re-reading when the parameters change. */
function useRealmRead(method, params = {}) {
	const { handler } = useBlong();
	const key = JSON.stringify(params);
	const [state, setState] = (0, import_react.useState)({});
	const [nonce, setNonce] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			try {
				const data = await caller(handler)(method, JSON.parse(key));
				if (!cancelled) setState({
					key,
					data
				});
			} catch (error) {
				if (!cancelled) setState({
					key,
					error: String(error)
				});
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [
		handler,
		method,
		key,
		nonce
	]);
	return {
		data: state.key === key ? state.data : void 0,
		error: state.key === key ? state.error : void 0,
		loading: state.key !== key,
		reload: (0, import_react.useCallback)(() => setNonce((value) => value + 1), [])
	};
}
/** Call one `blong.*` method when something happens, rather than when a page renders. */
function useRealmCall() {
	const { handler } = useBlong();
	return (0, import_react.useCallback)(async (method, params) => {
		try {
			return { data: await caller(handler)(method, params) };
		} catch (error) {
			return { error: String(error) };
		}
	}, [handler]);
}
var import_react;
function init_useRealmData() {
	return (init_useRealmData = __esmMin((() => {
		import_react = require_react();
		init_BlongContext();
	})))();
}
//#endregion
export { useRealmCall as n, useRealmRead as r, init_useRealmData as t };
