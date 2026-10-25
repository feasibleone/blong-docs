import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { S as init_default_module, _ as init_file_system_provider, b as createDefaultCoreModule, c as PacketGrammarGeneratedModule, g as EmptyFileSystem, h as init_chunk_K5T4RW27, i as CommonValueConverter, m as __name, s as MermaidGeneratedSharedModule, t as AbstractMermaidTokenBuilder, v as init_dependency_injection, x as createDefaultSharedCoreModule, y as inject } from "./chunk-K5T4RW27-DXbIW-NN.js";
//#region ../../common/temp/node_modules/.pnpm/@mermaid-js+parser@1.1.0/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-FOC6F5B3.mjs
function createPacketServices(context = EmptyFileSystem) {
	const shared = inject(createDefaultSharedCoreModule(context), MermaidGeneratedSharedModule);
	const Packet = inject(createDefaultCoreModule({ shared }), PacketGrammarGeneratedModule, PacketModule);
	shared.ServiceRegistry.register(Packet);
	return {
		shared,
		Packet
	};
}
var PacketTokenBuilder, PacketModule;
function init_chunk_FOC6F5B3() {
	return (init_chunk_FOC6F5B3 = __esmMin((() => {
		init_chunk_K5T4RW27();
		init_file_system_provider(), init_default_module(), init_dependency_injection();
		PacketTokenBuilder = class extends AbstractMermaidTokenBuilder {
			static {
				__name(this, "PacketTokenBuilder");
			}
			constructor() {
				super(["packet"]);
			}
		};
		PacketModule = { parser: {
			TokenBuilder: /* @__PURE__ */ __name(() => new PacketTokenBuilder(), "TokenBuilder"),
			ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
		} };
		__name(createPacketServices, "createPacketServices");
	})))();
}
//#endregion
export { createPacketServices as n, init_chunk_FOC6F5B3 as r, PacketModule as t };
