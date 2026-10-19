import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { Bt as type, Ct as PQueue, Lt as blong_lib_exports, Mt as init_lib, Nt as methodId, Pt as methodParts, Rt as init_blong_lib, St as renderAll, Vt as withProgress, Wt as Internal, bt as require___vite_browser_external, en as require_ut_function_merge, qt as init_types, vt as init_attachable, wt as init_dist, xt as init_browser, yt as vocabulary } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-gogo/src/checkpoint.ts
/**
* Attach the framework's progress-point handles to a dispatch's `$meta`.
*
* `decide` is attached in **every** mode: it selects a branch, so a missing one would skip
* the work rather than cost a note. `checkpoint` is attached only where points are
* recorded, which is what keeps its `?.` call free in production.
*/
function createAttachCheckpoint(mode) {
	const recording = mode !== "production";
	return (meta) => {
		meta.decide ??= decide;
		if (recording) meta.checkpoint ??= checkpoint;
	};
}
var regionMarks, checkpoint, decide;
function init_checkpoint() {
	return (init_checkpoint = __esmMin((() => {
		init_attachable();
		regionMarks = () => {
			const chain = vocabulary.currentRegions();
			if (chain === void 0 || chain.length === 0) return;
			return chain.map((region) => ({
				discriminator: region.discriminator,
				candidates: region.candidates,
				chosen: region.chosen
			}));
		};
		checkpoint = function(name, data) {
			const regions = regionMarks();
			const entry = {
				kind: "point",
				name,
				...data === void 0 ? {} : { data },
				timestamp: Date.now(),
				...regions === void 0 ? {} : { regions }
			};
			(this.progress ??= []).push(entry);
			vocabulary.point(name, data);
		};
		decide = function(discriminator, values, branches) {
			let chosen;
			const wrapped = branches.map((branch) => ({
				...branch,
				run: () => {
					chosen = branch.name;
					return branch.run();
				}
			}));
			const outer = regionMarks();
			const entry = {
				kind: "region",
				discriminator,
				candidates: branches.map((branch) => branch.name),
				chosen: "",
				values,
				...outer === void 0 ? {} : { regions: outer }
			};
			const held = this.progress;
			const progress = this.progress ??= [];
			progress.push(entry);
			try {
				const result = vocabulary.decide(discriminator, values, wrapped);
				entry.chosen = chosen ?? "none";
				return result;
			} catch (error) {
				const at = progress.lastIndexOf(entry);
				if (at !== -1) progress.splice(at, 1);
				if (held === void 0 && progress.length === 0) delete this.progress;
				throw error;
			}
		};
	})))();
}
//#endregion
//#region ../../core/blong-gogo/src/Registry.ts
var import___vite_browser_external, import_ut_function_merge, API, SCHEMA, Registry;
function init_Registry() {
	return (init_Registry = __esmMin((() => {
		init_types();
		import___vite_browser_external = /* @__PURE__ */ __toESM(require___vite_browser_external(), 1);
		init_dist();
		import_ut_function_merge = /* @__PURE__ */ __toESM(require_ut_function_merge(), 1);
		init_blong_lib();
		init_browser();
		init_attachable();
		init_checkpoint();
		init_lib();
		API = /\.validation$|\.api$|^validation$|^api$/;
		SCHEMA = /\.type$/;
		Registry = class extends Internal {
			modules = /* @__PURE__ */ new Map();
			ports = /* @__PURE__ */ new Map();
			methods = /* @__PURE__ */ new Map();
			objectSchema = {};
			#stopped = false;
			#logger = void 0;
			#reload = new PQueue({ concurrency: 1 });
			#ports = /* @__PURE__ */ new Map();
			#error;
			#portAttachments = /* @__PURE__ */ new Map();
			#validations = {};
			#resolution;
			#rpcServer;
			#remote;
			#gateway;
			#local;
			#watch;
			#log;
			#apiSchema;
			#platform;
			#config = {};
			/**
			* What each realm declares about itself, keyed by realm name.
			*
			* Handed over by {@link setRealmConfig} rather than read from this component's config, because
			* a realm loads *after* the config of the realm whose child it is has merged: a copy taken while
			* any config is built holds the realms loaded up to that moment and nothing more (D-433).
			*/
			#realmConfig = {};
			#attachCheckpoint;
			#manifest;
			constructor(config, { log, error, rpcServer, remote, gateway, local, resolution, watch, apiSchema, platform, manifest }) {
				super({ log });
				this.merge(this.#config, config);
				this.#resolution = resolution;
				this.#rpcServer = rpcServer;
				this.#error = error;
				this.#remote = remote;
				this.#gateway = gateway;
				this.#local = local;
				this.#log = log;
				this.#watch = watch;
				this.#apiSchema = apiSchema;
				this.#platform = platform;
				this.#manifest = manifest;
				this.#attachCheckpoint = createAttachCheckpoint(this.#config.checkpointMode ?? "production");
				this.#rpcServer?.setAttachCheckpoint?.(this.#attachCheckpoint);
				watch?.setObjectSchema?.(this.objectSchema);
			}
			getPort(id) {
				return this.#ports.get(id);
			}
			async createPort(id) {
				const port = this.ports.get(id);
				await this.#ports.get(id)?.stop();
				if (port.config === false) {
					this.#ports.delete(id);
					return;
				}
				const api = {
					id,
					type,
					schema: this.objectSchema,
					adapter: (id) => this.ports.get(id),
					utError: {
						register: this.#error.register.bind(this.#error),
						defineError: this.#error.define.bind(this.#error),
						getError: this.#error.get.bind(this.#error),
						fetchErrors: this.#error.fetch.bind(this.#error)
					},
					errors: this.#error,
					gateway: this.#gateway,
					remote: this.#remote,
					rpc: this.#rpcServer,
					local: this.#local,
					registry: this,
					register: (methods, namespace, port, pkg) => {
						if (!this.#config.localOnly?.[namespace]) this.#rpcServer?.register(methods, namespace, true, pkg);
						this.#local?.register(methods, namespace, true, pkg);
					},
					unregister: (methods, namespace) => {
						if (!this.#config.localOnly?.[namespace]) this.#rpcServer?.unregister(methods, namespace, true);
						this.#local?.unregister(methods, namespace);
					},
					subscribe: (methods, namespace, port, pkg) => {
						if (!this.#config.localOnly?.[namespace]) this.#rpcServer?.register(methods, namespace, false, pkg);
						this.#local?.register(methods, namespace, false, pkg);
					},
					unsubscribe: (methods, namespace) => {
						if (!this.#config.localOnly?.[namespace]) this.#rpcServer?.unregister(methods, namespace, false);
						this.#local?.unregister(methods, namespace);
					},
					getPath(method) {
						return method.match(/^[^[#?]*/)?.[0] || method;
					},
					methodId,
					importMethod: (methodName, options) => this.#remote.remote(methodName, options),
					dispatch: (...params) => this.#remote.dispatch(...params),
					attachHandlers: void 0,
					attach: void 0,
					createLog: (level, bindings) => this.#log?.logger(level, bindings) || {},
					attachCheckpoint: this.#attachCheckpoint,
					manifest: this.#manifest,
					render: (what) => renderAll(Array.isArray(what) ? (0, import_ut_function_merge.default)(...what) : what, this.#platform.context),
					platform: this.#platform
				};
				const result = await port(api);
				this.#ports.set(id, result);
				api.attach = this._attach.bind(this);
				api.attachHandlers = this._attachHandlers(result);
				return result;
			}
			async _matchMethods(mode, patterns, port, callback) {
				if (typeof port === "function" && !callback) {
					callback = port;
					port = void 0;
				}
				const log = this.#log.logger("info", { name: "registry" });
				for (const [name, value] of this.methods.entries()) if ([].concat(patterns).some((pattern) => pattern instanceof RegExp && pattern.test(name) || pattern === name)) {
					if (mode === "merge") for (const item of value) {
						const started = Date.now();
						const { local, literals } = await this._createHandlers([item], port);
						const elapsed = Date.now() - started;
						if (elapsed > 3e3) log.warn?.(`registry handler factory for '${name}' took ${elapsed}ms — a hanging dependency (e.g. an unresolvable remote method) is likely`);
						callback(name, local, literals);
					}
					else {
						const { local, literals } = await this._createHandlers(value, port);
						callback(name, local, literals);
					}
				}
			}
			async _collectObjectSchema() {
				for (const [name, handlers] of this.methods) if (SCHEMA.test(name)) await this._createHandlers(handlers, void 0);
			}
			async _validations() {
				await this._matchMethods("merge", API, (name, local) => {
					Object.entries(local).forEach(([name, validation]) => {
						const schema = typeof validation === "function" ? validation() : typeof validation === "object" ? validation : {};
						if (typeof validation === "function") name = validation.name;
						this.#validations[methodParts(name)] = schema;
					});
				});
				return this.#validations;
			}
			async _attach(target, patterns) {
				await this._matchMethods("merge", patterns, (name, local) => Array.isArray(target) ? target.push(local) : (0, import_ut_function_merge.default)(target, local));
				return target;
			}
			_attachHandlers(port) {
				return (target, patterns, adapter) => {
					target.imported = {};
					Object.setPrototypeOf(target.imported, target);
					if (patterns && (!Array.isArray(patterns) || patterns.length)) {
						target.importedMap = /* @__PURE__ */ new Map();
						return this._matchMethods("extend", patterns, port, (name, local, literals) => {
							const ports = this.#portAttachments.get(name);
							const info = {
								port,
								target,
								parent: target.imported,
								pointer: {}
							};
							if (ports) ports.push(info);
							else this.#portAttachments.set(name, [info]);
							target.importedMap.set(name, local);
							if (adapter) {
								if (local.config) (0, import_ut_function_merge.default)(target.config, local.config);
								if (local.namespace) target.config.namespace = target.config.namespace ? [].concat(target.config.namespace, local.namespace) : [].concat(local.namespace);
							}
							literals.forEach((literal) => Object.setPrototypeOf(literal, target.imported));
							Object.setPrototypeOf(local, info.parent);
							Object.setPrototypeOf(info.pointer, local);
							target.imported = info.pointer;
						});
					}
				};
			}
			async replaceHandlers(id, handlers) {
				const attachments = this.#portAttachments.get(id);
				if (attachments) for (const { port, target, parent, pointer } of attachments) {
					const { local, literals } = await this._createHandlers(handlers, port);
					target.importedMap.set(id, local);
					literals.forEach((literal) => Object.setPrototypeOf(literal, parent));
					Object.setPrototypeOf(local, parent);
					Object.setPrototypeOf(pointer, local);
				}
				if (API.test(id)) await this.#reload.add(async () => {
					this.methods.set(id, handlers);
					this.#validations = {};
					this.#gateway?.route(await this._validations(), {
						name: "",
						version: ""
					});
					await this.#gateway?.start();
				});
			}
			async _createHandlers(handlers, port) {
				const attachCheckpoint = this.#attachCheckpoint;
				const recording = (this.#config.checkpointMode ?? "production") !== "production";
				const lib = {
					...blong_lib_exports,
					error: this.#error.register.bind(this.#error),
					assert: recording ? import___vite_browser_external.default : void 0,
					checkpoint: recording ? vocabulary.point : void 0,
					decide: vocabulary.decide,
					render: (what) => renderAll(Array.isArray(what) ? (0, import_ut_function_merge.default)(...what) : what, this.#platform.context),
					timing: this.#platform.timing,
					platform: this.#platform,
					registry: this
				};
				const local = {};
				const literals = [];
				for (const fn of handlers) await fn({
					lib,
					local,
					literals,
					gateway: this.#gateway,
					remote: (name) => this.#remote.remote(methodParts(name)),
					port,
					attachCheckpoint,
					apiSchema: this.#apiSchema
				});
				return {
					local,
					literals
				};
			}
			async init() {
				for (const [id, { source, def }] of Object.entries(this.#config.api || {})) await this.loadApi(id, def, source);
				return this;
			}
			async start(configOverride) {
				this.#stopped = false;
				await this._collectObjectSchema();
				this.#logger = this.#log.logger("info", { name: "registry" });
				let created = 0;
				const portIds = Array.from(this.ports.keys());
				await withProgress(this.#logger, "create ports", (async () => {
					for (const id of portIds) {
						await this.createPort(id);
						created += 1;
					}
				})(), { getProgress: () => ({
					done: created,
					total: portIds.length
				}) });
				let started = 0;
				const startPorts = Array.from(this.#ports.values());
				await withProgress(this.#logger, "start ports", (async () => {
					for (const port of startPorts) {
						await port.start(configOverride);
						started += 1;
					}
				})(), { getProgress: () => ({
					done: started,
					total: startPorts.length
				}) });
				let ready = 0;
				const readyPorts = Array.from(this.#ports.values());
				await withProgress(this.#logger, "ready ports", (async () => {
					for (const port of readyPorts) {
						await port.ready();
						ready += 1;
					}
				})(), { getProgress: () => ({
					done: ready,
					total: readyPorts.length
				}) });
				this.#gateway?.route(await this._validations(), {
					name: "",
					version: ""
				});
				await this.#resolution?.start();
				await this.#rpcServer?.start();
				await this.#remote?.start();
				await this.#gateway?.start();
				await this.#watch?.start(this, this.#remote, configOverride);
				return this;
			}
			async connected() {
				return (await Promise.all(Array.from(this.#ports.values()).reverse().map((port) => port.connected?.() ?? port.isConnected))).every((item) => item);
			}
			async test(framework) {
				return await this.#watch.test(framework);
			}
			/**
			* Structural snapshot of the loaded realm graph.
			*
			* Combines the live registry (realms, ports, registered method groups) with
			* the on-disk view owned by `Watch` (handler folders and files). This is the
			* runtime source of truth that tooling and agents should query instead of
			* re-deriving layout from conventions.
			*/
			describe() {
				const disk = this.#watch?.describe?.();
				return {
					realms: Array.from(this.modules.keys()).filter((key) => typeof key === "string"),
					ports: Array.from(this.ports.keys()),
					groups: Array.from(this.methods.entries()).map(([name, handlers]) => ({
						name,
						handlerCount: handlers.length
					})),
					folders: disk?.folders ?? [],
					files: disk?.files ?? [],
					layerFiles: disk?.layerFiles ?? [],
					realmConfig: this.#realmConfig
				};
			}
			/**
			* Publish the per-realm config map.
			*
			* The map is taken by reference, and the loader keeps adding to it as realms load, so a caller
			* that asks later sees the realms that were not loaded yet when the registry was created.
			*/
			setRealmConfig(realmConfig) {
				this.#realmConfig = realmConfig;
			}
			async stop() {
				if (this.#stopped) return this;
				await this.#watch?.stop();
				await this.#gateway?.stop();
				await this.#remote?.stop();
				await this.#rpcServer?.stop();
				await this.#resolution?.stop();
				let stopped = 0;
				const ports = Array.from(this.#ports.values());
				await withProgress(this.#logger, "stop ports", (async () => {
					for (const port of ports) {
						await port.stop();
						stopped += 1;
					}
				})(), { getProgress: () => ({
					done: stopped,
					total: ports.length
				}) });
				this.#stopped = true;
				this.#logger = void 0;
				await this.#log?.stop?.();
				return this;
			}
			async loadApi(id, def, source) {
				const api = await this.#apiSchema.schema(def, source);
				this.methods.set(id, [({ local }) => (0, import_ut_function_merge.default)(local, api)]);
			}
		};
	})))();
}
//#endregion
init_Registry();
export { Registry as default };
