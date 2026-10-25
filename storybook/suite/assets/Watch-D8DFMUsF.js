const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chain-CmZbr48Y.js","./rolldown-runtime-V4kyJ4NV.js","./preload-helper-C3TOwP4X.js","./__vite-browser-external-bwQQhMfC.js","./iframe-DXhqEaHK.js","./react-DUVFSkmT.js","./build-BIfDqKqb.js","./browser-BpY8-_Cx.js","./browser-vpOcWc6g.js","./attachable-B3-ly0Fu.js","./jsx-runtime-C3rgXVcg.js","./appStore-Cfk3hkpQ.js","./primereact-B8YiuDoh.js","./inputtext.esm-DVdHXlQv.js","./react-dom--p2_7awc.js","./datatable.esm-CRrgT_ub.js","./Editor-CXwS--8T.js","./BlongContext-B_6NAJve.js","./Editor-NYbxgPCc.css","./iframe-Dy8lWZD5.css"])))=>i.map(i=>d[i]);
import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-C3TOwP4X.js";
import { Kn as require_ut_function_merge } from "./build-BIfDqKqb.js";
import { C as withStep, G as Internal, H as withProgress, J as init_types, S as runInFlow, Y as kind, _ as init_layerProxy, b as init_semanticContext, q as handler, v as layerProxy, z as init_blong_lib } from "./iframe-DXhqEaHK.js";
//#region ../../core/blong-gogo/src/Watch.ts
/**
* The name a test group is displayed by: `test.meter.flow` reads as `meter flow`.
*
* The group's handler may name itself instead (`group("gateway meter flow")`), which
* is what the handler's own reader sees; this is the name to fall back to.
*/
function groupName(method) {
	return method.replace(/^test\./, "").replace(/\./g, " ");
}
/**
* Given a diff and the set of known port names (e.g. `"realm.adapter.db"`),
* return the subset of port names whose config sub-tree changed.
*
* A port named `"realm.adapter.db"` is considered affected if any diff key
* starts with `"realm.adapter.db."` or equals `"realm.adapter.db"`.
*/
function affectedNamespaces(diff, portNames) {
	const affected = /* @__PURE__ */ new Set();
	for (const portName of portNames) for (const diffKey of diff.keys()) if (diffKey === portName || diffKey.startsWith(portName + ".")) {
		affected.add(portName);
		break;
	}
	return affected;
}
/**
* Apply a config reload to the ports the diff affects.
*
* A port that implements `configChanged` is asked to reconfigure itself — the
* zero-downtime path, which is what keeps an in-flight request or an expensive
* connection alive. A port that does not is stopped and started again with the
* current override. A port the diff does not name is not touched at all, which is
* the property that makes a log-level change safe: it must not cost a database
* pool.
*
* Returns the number of ports the loop reached, and reports each one through
* `onReloaded` so the caller's progress view can follow it.
*/
async function applyConfigReload(registry, affected, diff, next, prev, configOverride, onPortError = () => void 0, onReloaded) {
	const total = [...affected].length;
	let reloaded = 0;
	for (const portId of affected) {
		const portInstance = await registry.getPort(portId);
		if (portInstance) {
			if (typeof portInstance.configChanged === "function") try {
				await portInstance.configChanged(diff, next, prev);
			} catch (error) {
				onPortError(error);
			}
			else {
				await portInstance.stop();
				const fresh = await registry.createPort(portId);
				if (fresh) {
					await fresh.start(configOverride);
					await fresh.ready();
				}
			}
		}
		reloaded += 1;
		onReloaded?.(reloaded, total);
	}
	return reloaded;
}
var import_ut_function_merge, isYaml, isJSON, isCode, isLayerActivation, isConfig, isPlay, isTest, isHandlerGroup, prefixRE, Watch;
function init_Watch() {
	return (init_Watch = __esmMin((() => {
		init_blong_lib();
		init_types();
		import_ut_function_merge = /* @__PURE__ */ __toESM(require_ut_function_merge(), 1);
		init_layerProxy();
		init_semanticContext();
		init_preload_helper();
		isYaml = (filename) => /\.ya?ml$/i.test(filename);
		isJSON = (filename) => /\.jsonl?$/i.test(filename);
		isCode = (filename) => /(?<!\.d)\.m?(t|j)sx?$/i.test(filename);
		isLayerActivation = (filename) => /^layer\.(server|browser)\.[mc]?[tj]sx?$/i.test(filename);
		isConfig = (filename) => /^config\.[mc]?[tj]sx?$/i.test(filename);
		isPlay = (filename) => /\.play\.[mc]?[tj]sx?$/i.test(filename);
		isTest = (filename) => /\.test\.[mc]?[tj]sx?$/i.test(filename);
		isHandlerGroup = (filename) => /^handlerGroup\.[mc]?[tj]sx?$/i.test(filename);
		prefixRE = /(?:\d+-)?(.*)/;
		Watch = class extends Internal {
			#config = {
				enabled: false,
				test: "",
				ignored: [],
				configs: [],
				logLevel: "debug",
				allure: void 0
			};
			#handlerFolders = /* @__PURE__ */ new Map();
			#handlerFiles = /* @__PURE__ */ new Map();
			#layerFiles = /* @__PURE__ */ new Map();
			/**
			* Every code file discovered inside a handler folder, mapped to its realm.
			* Kept separate from `#handlerFiles` (which drives hot-reload decisions and
			* is deliberately populated only for single-file loads) so introspection can
			* report the full file set without changing reload behaviour.
			*/
			#discoveredFiles = /* @__PURE__ */ new Map();
			#watchers = [];
			#port;
			#error;
			#objectSchema;
			#apiSchema;
			#emit = new EventTarget();
			#configRuntime = null;
			#platform;
			constructor(config, { error, log, port, apiSchema, objectSchema, platform }) {
				super({ log });
				this.merge(this.#config, config);
				this.#port = port;
				this.#error = error;
				this.#apiSchema = apiSchema;
				this.#objectSchema = objectSchema;
				this.#platform = platform;
			}
			/** Attach the registry objectSchema so hot-reload paths can pass it to layerProxy */
			setObjectSchema(schema) {
				this.#objectSchema = schema;
			}
			/**
			* Structural snapshot of what is loaded from disk.
			*
			* Group ids follow the same convention the loader registers with
			* (`<realm>.<folder>`, see `_loadHandlers`). Paths are made relative to the
			* process cwd so the result is stable across machines.
			*/
			describe() {
				const relative = (file) => this.#platform.relative(".", file);
				const folderEntries = Array.from(this.#handlerFolders.entries()).map(([dir, config]) => ({
					group: `${config.name}.${this.#platform.basename(dir)}`,
					realm: config.name,
					dir: relative(dir)
				}));
				const toFiles = (map) => Array.from(map.entries()).map(([file, config]) => ({
					file: relative(file),
					realm: config.name
				}));
				return {
					folders: folderEntries,
					files: Array.from(this.#discoveredFiles.entries()).map(([file, realm]) => ({
						file: relative(file),
						realm
					})),
					layerFiles: toFiles(this.#layerFiles)
				};
			}
			/** Attach a ConfigRuntime so config-file changes trigger in-process reloads */
			setConfigRuntime(configRuntime) {
				this.#configRuntime = configRuntime;
			}
			/**
			* Validates handler name matches filename and sets name property for anonymous handlers
			* @param item The handler item to validate
			* @param filename The file path
			* @param expectedName The expected handler name based on filename
			* @returns The handler name (either explicit or derived from filename)
			*/
			_validateAndSetHandlerName(item, filename, expectedName) {
				const actualName = item["name"] && item["name"] !== "default" ? item["name"] : null;
				if (kind(item) === "handler" && actualName && actualName !== expectedName) throw new Error(`Handler name mismatch in '${filename}': function is named '${actualName}' but file is named '${expectedName}.ts'. Either rename the function to '${expectedName}' or rename the file to '${actualName}.ts'.`);
				const name = actualName || expectedName;
				if (kind(item) === "handler" && !actualName) Object.defineProperty(item, "name", {
					value: name,
					configurable: true,
					enumerable: false
				});
				return name;
			}
			async _generate(files, dir) {
				const [schema, names] = files.reduce((prev, { filename, name }) => {
					const schema = this.#platform.readFileSync(filename).toString().match(/^(\/\*\*((?!\*\/\n).)*\*\/\n)?type Handler = \(((?!(>|}|>});?\n).)*(>|}|>});?\n/ms)?.[0];
					return schema ? [[...prev[0], schema.replace("type Handler = (", `type ${name} = (`)], [...prev[1], name]] : prev;
				}, [[], []]);
				const codeGen = "@sinclair/typebox-codegen";
				const { Formatter, TypeScriptToTypeBox } = await __vitePreload(async () => {
					const { Formatter, TypeScriptToTypeBox } = await import(
						/* @vite-ignore */
						codeGen
);
					return {
						Formatter,
						TypeScriptToTypeBox
					};
				}, [], import.meta.url);
				if (schema.length) this.#platform.writeFileSync(this.#platform.join(dir, "~.schema.ts"), Formatter.Format(`import {validationHandlers} from '@feasibleone/blong';
            import { Type, type Static } from 'typebox';

            ${TypeScriptToTypeBox.Generate(schema.sort().join("\n"), { useTypeBoxImport: false }).trim()}

            export default validationHandlers({
                ${names.sort().join(",\n")}
            });

            declare module '@feasibleone/blong' {
                interface ISchema {
                    ${names.map((name) => `${name}(params: Parameters<${name}>[0], $meta: IMeta): ReturnType<${name}>;`).join("\n")}
                }
            }

        `));
			}
			async _loadHandlers(directory, config, ...path) {
				const dir = this.#platform.join(...path);
				const handlers = [];
				const validations = [];
				const apis = [];
				const libs = [];
				const assets = [];
				const handlerFilenames = [];
				let latest = 0;
				const isFile = () => true;
				const isDirectory = () => false;
				const allFiles = directory === true ? await this.#platform.scan(dir) : Object.keys(directory ?? {}).map((path) => ({
					name: this.#platform.basename(path),
					isFile,
					isDirectory
				}));
				const configFile = allFiles.find((entry) => entry.isFile() && isConfig(entry.name));
				if (configFile) {
					const configFilePath = this.#platform.join(dir, configFile.name);
					const loaded = (await __vitePreload(async () => {
						const { default: __vite_default__ } = await (this.#config.enabled ? import(configFilePath + "?" + Date.now()) : import(configFilePath));
						return { default: __vite_default__ };
					}, [], import.meta.url)).default;
					const folderName = this.#platform.basename(dir);
					const mutableConfig = config;
					const configNames = mutableConfig.configNames ?? [];
					const folderConfig = loaded && typeof loaded === "object" && typeof loaded.default === "object" && loaded.default !== null ? (0, import_ut_function_merge.default)({}, ...["default", ...configNames].map((name) => loaded[name]).filter(Boolean)) : loaded ?? {};
					const namespaceOverride = mutableConfig?.namespace?.[folderName] ?? {};
					mutableConfig[folderName] = (0, import_ut_function_merge.default)({}, folderConfig, namespaceOverride);
				}
				const handlerFiles = allFiles.sort().filter((entry) => entry.isFile() && isCode(entry.name) && !isLayerActivation(entry.name) && !isConfig(entry.name) && !isHandlerGroup(entry.name) && !isPlay(entry.name) && !isTest(entry.name));
				await this.#apiSchema?.generateDir(dir, handlerFiles);
				for (const handlerEntry of handlerFiles) {
					const filename = this.#platform.join(dir, handlerEntry.name);
					if (directory === true && handlerEntry.name === "~.schema.ts" && this.#platform.statSync(filename).mtime.getTime() < latest && handlerFilenames.length) await this._generate(handlerFilenames, dir);
					if (directory === true && await this.#apiSchema.generateFile(filename)) continue;
					const item = directory === true ? (await __vitePreload(async () => {
						const { default: __vite_default__ } = await (this.#config.enabled ? import(filename + "?" + Date.now()) : import(filename));
						return { default: __vite_default__ };
					}, [], import.meta.url)).default : (await directory[filename]()).default;
					if (!item) {
						this.log?.error?.("Error loading " + filename + " ; probably a generic source code was put in a handler group folder");
						continue;
					}
					const expectedName = this.#platform.basename(filename, this.#platform.extname(filename));
					this.#discoveredFiles.set(filename, config.name);
					const name = expectedName;
					(kind(item) === "validation" ? validations : kind(item) === "api" ? apis : kind(item) === "lib" ? libs : handlers).push(item);
					if (kind(item) === "handler") {
						if (directory === true) latest = Math.max(latest, this.#platform.statSync(filename).mtime.getTime());
						handlerFilenames.push({
							name,
							filename
						});
					}
				}
				const assetFiles = allFiles.filter((entry) => entry.isFile() && (isYaml(entry.name) || isJSON(entry.name)));
				for (const assetFile of assetFiles) {
					const filename = this.#platform.join(dir, assetFile.name);
					assets.push(handler(() => ({ assets: { [this.#platform.basename(filename)]: `file://${filename}` } })));
				}
				this.#handlerFolders.set(dir, config);
				return (api) => {
					const apiAny = api;
					if (validations.length) apiAny[this.#platform.basename(dir) + ".validation"]([...libs, ...validations], config.name + "." + this.#platform.basename(dir) + ".validation", this.#platform.relative(".", dir));
					if (apis.length) apiAny[this.#platform.basename(dir) + ".api"]([...libs, ...apis], config.name + "." + this.#platform.basename(dir) + ".api", this.#platform.relative(".", dir));
					if (assets.length) apiAny[this.#platform.basename(dir) + ".asset"](assets, config.name + "." + this.#platform.basename(dir) + ".asset", this.#platform.relative(".", dir));
					if (handlers.length) apiAny[this.#platform.basename(dir)]([...libs, ...handlers], config.name + "." + this.#platform.basename(dir), this.#platform.relative(".", dir));
					return api;
				};
			}
			async load(config, isDirectory, isFile, ...path) {
				if (isDirectory) return this._loadHandlers(isDirectory === true ? true : isDirectory, config, ...path);
				else if (isFile) {
					const filename = this.#platform.join(...path);
					if (isCode(filename) && !isLayerActivation(this.#platform.basename(filename)) && !isHandlerGroup(this.#platform.basename(filename)) && !isPlay(this.#platform.basename(filename)) && !isTest(this.#platform.basename(filename))) {
						const item = typeof isFile === "function" ? (await isFile()).default : (await __vitePreload(async () => {
							const { default: __vite_default__ } = await (this.#config.enabled ? import(filename + "?" + Date.now()) : import(filename));
							return { default: __vite_default__ };
						}, [], import.meta.url)).default;
						if (!item) return (api) => api;
						const expectedName = this.#platform.basename(filename, this.#platform.extname(filename)).match(prefixRE)?.[1];
						const itemName = this._validateAndSetHandlerName(item, filename, expectedName);
						if (kind(item) === "handler") {
							this.#handlerFiles.set(filename, config);
							return Object.defineProperty((api) => {
								api[itemName]([item], config.name + "." + itemName, this.#platform.relative(".", filename));
								return api;
							}, "name", { value: itemName });
						} else {
							this.#layerFiles.set(filename, config);
							return Object.defineProperty((api) => {
								api[itemName](typeof item === "function" && !["adapter", "orchestrator"].includes(kind(item)) ? item(api) : item, config.name + "." + itemName, this.#platform.relative(".", filename));
								return api;
							}, "name", { value: itemName });
						}
					}
				}
				return (api) => api;
			}
			/**
			* In-process config reload pipeline:
			*  1. Ask ConfigRuntime to reload and compute the diff
			*  2. Emit a structured log event with the diff scope
			*  3. For each affected port: call configChanged if present, else stop+start
			*  4. Trigger test re-run
			*/
			async _reloadConfig(registry, configOverride) {
				if (!this.#configRuntime) {
					this.log?.warn?.({
						$meta: {
							mtid: "event",
							method: "watch.config.reload"
						},
						message: "ConfigRuntime not attached; config change ignored"
					});
					return;
				}
				const prev = this.#configRuntime.rawSnapshot;
				const diff = await this.#configRuntime.reload();
				this.log?.info?.({
					$meta: {
						mtid: "event",
						method: "watch.config.reload"
					},
					changed: Array.from(diff.keys())
				});
				if (diff.size === 0) return;
				const affected = affectedNamespaces(diff, registry.ports.keys());
				const next = this.#configRuntime.snapshot;
				let reloaded = 0;
				await withProgress(this.log, "reload config", (async () => {
					await applyConfigReload(registry, affected, diff, next, prev, configOverride, (error) => this.log?.error?.(error), (done) => {
						reloaded = done;
					});
				})(), { getProgress: () => ({
					done: reloaded,
					total: affected.size
				}) });
				this.#emit.dispatchEvent(new Event("test"));
			}
			/**
			* Common reload unit: re-import a changed file, re-wrap via layerProxy,
			* replace in registry, and signal tests.
			*
			* This unifies the three reload paths (layer file, single handler file,
			* handler folder) into a single abstraction.
			*/
			async _reloadUnit(registry, configOverride, filename) {
				const layerConfig = this.#layerFiles.get(filename);
				if (layerConfig) {
					const id = this.#platform.basename(filename, this.#platform.extname(filename));
					const proxy = layerProxy(this.#error, this.#objectSchema, this.#apiSchema, this.#port, layerConfig);
					const item = (await this.load(layerConfig, false, true, filename))(proxy).result[id];
					registry.ports.set(layerConfig.name + "." + id, item.port);
					const port = await registry.createPort(layerConfig.name + "." + id);
					if (!port) return;
					await port.start(configOverride);
					await port.ready();
					await registry.connected();
					this.#emit.dispatchEvent(new Event("test"));
					return;
				}
				if (this.#config.configs.includes(filename)) {
					await this._reloadConfig(registry, configOverride);
					return;
				}
				let config = this.#handlerFiles.get(filename);
				if (config) {
					const importProxyCallback = await this.load(config, false, true, filename);
					const name = importProxyCallback.name;
					const cbResult = importProxyCallback(layerProxy(this.#error, this.#objectSchema, this.#apiSchema, this.#port, config));
					await registry.replaceHandlers(config.name + "." + name, cbResult.result[name].methods);
				} else {
					const dir = this.#platform.dirname(filename);
					config = this.#handlerFolders.get(dir);
					if (config) {
						const handlers = (await this._loadHandlers(true, config, dir))(layerProxy(this.#error, this.#objectSchema, this.#apiSchema, this.#port, config));
						await registry.replaceHandlers(config.name + "." + this.#platform.basename(dir), handlers.result[this.#platform.basename(dir)].methods);
						if (handlers.result[this.#platform.basename(dir) + ".validation"]) await registry.replaceHandlers(config.name + "." + this.#platform.basename(dir) + ".validation", handlers.result[this.#platform.basename(dir) + ".validation"].methods);
					}
				}
				await registry.connected();
				this.#emit.dispatchEvent(new Event("test"));
			}
			_watch(registry, configOverride) {
				const fsWatcher = this.#platform.watch?.(Array.from(this.#handlerFolders.keys()).map((folder) => [
					`${folder}/*.ts`,
					`${folder}/*.yaml`,
					`${folder}/*.sql`,
					`${folder}/*.html`
				]).flat().concat(Array.from(this.#handlerFiles.keys())).concat(Array.from(this.#layerFiles.keys())).concat(this.#config.configs), {
					cwd: ".",
					ignoreInitial: true,
					ignored: [
						".git/**",
						"node_modules/**",
						"dist/**",
						...this.#config.ignored || []
					]
				});
				if (!fsWatcher) return;
				this.#watchers.push(fsWatcher);
				fsWatcher.on("error", (error) => this.log?.error?.(error));
				fsWatcher.on("all", async (event, filename) => {
					try {
						filename = this.#platform.resolve(filename);
						this.log?.info?.({ $meta: {
							mtid: "event",
							method: `watch.reload.${event}`
						} }, filename);
						await this._reloadUnit(registry, configOverride, filename);
					} catch (error) {
						this.log?.error?.(error);
					}
				});
			}
			async start(registry, remote, configOverride) {
				if (this.#config.enabled) this.log?.debug?.({
					$meta: {
						mtid: "event",
						method: "watch.start"
					},
					dir: Array.from(this.#handlerFolders.keys()).concat(Array.from(this.#handlerFiles.keys())).concat(Array.from(this.#layerFiles.keys())).map((folder) => this.#platform.relative(".", folder))
				});
				if (this.#config.test) this.#emit.addEventListener("test", async (event) => {
					const { done, test } = event.detail ?? {};
					try {
						const groups = [].concat(this.#config.test);
						let executed = 0;
						await withProgress(this.log, "run test groups", Promise.all(groups.map(async (method) => {
							const meta = {
								mtid: "event",
								method
							};
							const chain = await (await __vitePreload(async () => {
								const { default: __vite_default__ } = await import("./chain-CmZbr48Y.js");
								return { default: __vite_default__ };
							}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)).default(test, this.log, {
								method,
								allure: this.#config.allure,
								platform: this.#platform.platform
							});
							await runInFlow(meta, method, async () => {
								const steps = await remote.remote(method)({}, meta);
								if (Array.isArray(steps) && !("name" in steps)) Object.defineProperty(steps, "name", {
									value: groupName(method),
									configurable: true
								});
								const named = typeof steps === "object" && steps !== null ? steps : void 0;
								const phase = typeof named?.name === "string" ? named.name : groupName(method);
								await withStep(phase, () => chain(steps));
							});
							executed += 1;
						})), { getProgress: () => ({
							done: executed,
							total: groups.length
						}) });
					} catch (error) {
						this.log?.error?.(error);
						done?.(error);
						return;
					} finally {
						await (await __vitePreload(async () => {
							const { endAllureSession } = await import("./chain-CmZbr48Y.js");
							return { endAllureSession };
						}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), import.meta.url)).endAllureSession().catch((error) => this.log?.error?.(error));
					}
					done?.();
				});
				if (this.#config.enabled) this._watch(registry, configOverride);
				await registry.connected();
			}
			async test(framework) {
				if ([].concat(this.#config.test ?? []).length === 0) {
					this.log?.info?.({ $meta: {
						mtid: "event",
						method: "watch.test.none"
					} }, "no test groups configured on this platform; nothing to run");
					return;
				}
				return new Promise((resolve, reject) => {
					this.#emit.dispatchEvent(new CustomEvent("test", { detail: {
						done: (error) => error ? reject(error) : resolve(),
						test: framework
					} }));
				});
			}
			async stop() {
				while (this.#watchers.length) await this.#watchers.pop()?.close();
			}
		};
	})))();
}
//#endregion
init_Watch();
export { affectedNamespaces, applyConfigReload, Watch as default, isHandlerGroup };
