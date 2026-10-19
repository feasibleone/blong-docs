import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-browser/orchestrator/portal/portalDropdownList.ts
var pending, portalDropdownList_default;
function init_portalDropdownList() {
	return (init_portalDropdownList = __esmMin((() => {
		init_types();
		pending = /* @__PURE__ */ new Map();
		portalDropdownList_default = handler(({ handler }) => async function portalDropdownList({ names }, $meta) {
			const subjects = Array.from(new Set(names.map((n) => n.split(".")[0])));
			const results = await Promise.all(subjects.map((subject) => {
				const method = `${subject}.dropdown.list`;
				if (!pending.has(method)) {
					const methodHandler = handler[method];
					if (!methodHandler) return Promise.resolve({});
					const promise = methodHandler({}, {
						...$meta,
						method
					}).then((raw) => {
						const out = {};
						for (const [k, v] of Object.entries(raw)) out[k] = v;
						return out;
					}).catch(() => {
						pending.delete(method);
						return {};
					});
					pending.set(method, promise);
				}
				return pending.get(method);
			}));
			return Object.assign({}, ...results);
		});
	})))();
}
//#endregion
init_portalDropdownList();
export { portalDropdownList_default as default };
