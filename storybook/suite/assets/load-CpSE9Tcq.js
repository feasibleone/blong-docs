import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, X as library } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-gogo/src/codec/adapter/openapi/load.ts
var httpVerbs, responseTypes, load_default;
function init_load() {
	return (init_load = __esmMin((() => {
		init_types();
		httpVerbs = [
			"post",
			"put",
			"patch",
			"get",
			"delete",
			"options",
			"head",
			"trace"
		];
		responseTypes = {
			"application/json": "json",
			"text/plain": "text",
			"text/html": "text"
		};
		load_default = library(({ lib: { request }, apiSchema }) => async function load(config, pattern, source) {
			const test = pattern instanceof RegExp ? (key) => pattern.test(key) : (key) => key.includes(pattern);
			const handlers = {};
			for (const [namespace, locations] of Object.entries(config)) {
				const bundle = await apiSchema.loadApi(locations, source);
				Object.entries(bundle.paths ?? {}).forEach(([path, methods]) => Object.entries(methods).filter(([method, def]) => (def.operationId || def["x-blong-method"]) && httpVerbs.includes(method)).forEach(([method, def]) => {
					const name = `${namespace}${def["x-blong-method"] || def.operationId}`.toLowerCase();
					if (!test(name)) return;
					const formatProps = {
						method,
						path,
						url: "",
						requestBody: void 0,
						responseType: void 0,
						schemas: [].concat(methods.parameters).concat(def.parameters).concat("requestBody" in def && def.requestBody && "content" in def.requestBody && def.requestBody.content?.["application/json"]?.schema && {
							name: "body",
							in: "body",
							schema: def.requestBody.content["application/json"].schema
						}).filter(Boolean)
					};
					switch (true) {
						case "swagger" in bundle:
							formatProps.url += [
								bundle.schemes && bundle.schemes[0] || "http",
								"://",
								bundle.host,
								bundle.basePath,
								path
							].filter(Boolean).join("");
							break;
						case "openapi" in bundle: {
							const defUrl = "servers" in def && def.servers && def.servers[0] && def.servers[0].url || "";
							const docUrl = bundle.servers && bundle.servers[0] && bundle.servers[0].url || "";
							formatProps.url = (defUrl.startsWith("/") ? docUrl + defUrl : defUrl || docUrl) + path;
							if ("requestBody" in def) formatProps.requestBody = def.requestBody;
							break;
						}
					}
					const responseTypeSet = /* @__PURE__ */ new Set();
					Object.values(def.responses || {}).forEach((response) => {
						if (response.content) Object.entries(response.content).forEach(([type, content]) => content.schema && responseTypes[type] && responseTypeSet.add(responseTypes[type]));
					});
					if (responseTypeSet.size === 1) formatProps.responseType = responseTypeSet.values().next().value;
					else formatProps.responseType = "json";
					handlers[name] = request(formatProps);
				}));
			}
			return handlers;
		});
	})))();
}
//#endregion
init_load();
export { load_default as default };
