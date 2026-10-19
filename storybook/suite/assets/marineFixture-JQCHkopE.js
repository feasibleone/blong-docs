import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { Kt as handler, qt as init_types } from "./iframe-jjCxrJpo.js";
import { n as init_marine_data, r as marineYaml } from "./marine-data-BrdnYbhJ.js";
//#region ../../demo/blong-marine/meta/fixture/marineFixture.ts
var marineFixture_default;
function init_marineFixture() {
	return (init_marineFixture = __esmMin((() => {
		init_types();
		init_marine_data();
		marineFixture_default = handler(({ lib: { yaml } }) => async function marineFixture() {
			return yaml.parse(marineYaml);
		});
	})))();
}
//#endregion
init_marineFixture();
export { marineFixture_default as default };
