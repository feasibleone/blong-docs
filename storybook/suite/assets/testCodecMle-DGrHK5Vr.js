import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-BfCOoPG7.js";
//#region ../../core/blong-gogo/src/codec/test/test/testCodecMle.ts
var DAY, testCodecMle_default;
function init_testCodecMle() {
	return (init_testCodecMle = __esmMin((() => {
		init_types();
		DAY = 864e5;
		testCodecMle_default = handler(({ lib: { group }, handler: { testLoginTokenCreate, subjectAge } }) => ({ testCodecMle: ({ name = "Message Level Encryption" }, $meta) => group(name)([testLoginTokenCreate({}, $meta), async function mle(assert, { $meta }) {
			assert.deepStrictEqual(await subjectAge({ birthDate: /* @__PURE__ */ new Date(Date.now() - DAY) }, $meta), { age: 0 }, "Return age");
			assert.deepStrictEqual(await subjectAge({ birthDate: /* @__PURE__ */ new Date(Date.now() - 367 * DAY) }, $meta), { age: 1 }, "Return age");
		}]) }));
	})))();
}
//#endregion
init_testCodecMle();
export { testCodecMle_default as default };
