import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
//#region ../../core/blong-gogo/src/codec/test/test/testLoginTokenCreate.ts
var testLoginTokenCreate_default;
function init_testLoginTokenCreate() {
	return (init_testLoginTokenCreate = __esmMin((() => {
		init_types();
		testLoginTokenCreate_default = handler(({ handler: { loginTokenCreate } }) => ({ testLoginTokenCreate: (_params, _$meta) => [function login(assert, { $meta }) {
			return loginTokenCreate({
				username: "test",
				password: "test"
			}, $meta);
		}] }));
	})))();
}
//#endregion
init_testLoginTokenCreate();
export { testLoginTokenCreate_default as default };
