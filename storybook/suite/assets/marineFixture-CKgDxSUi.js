import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, gn as handler } from "./iframe-Dd4aRJs7.js";
import { n as init_marine_data, r as marineYaml } from "./marine-data-BdXyCeGK.js";
// ../../demo/blong-marine/meta/fixture/marineFixture.ts
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
init_marineFixture();
export { marineFixture_default as default };
