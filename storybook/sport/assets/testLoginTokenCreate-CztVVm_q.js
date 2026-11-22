import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { Et as init_types, Tt as handler } from "./iframe-DzCJG9bn.js";
// ../../core/blong-gogo/src/codec/test/test/testLoginTokenCreate.ts
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
init_testLoginTokenCreate();
export { testLoginTokenCreate_default as default };
