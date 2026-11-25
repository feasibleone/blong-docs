import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { Ct as handler, wt as init_types } from "./iframe-Na9SG7k6.js";
import { n as init_marine_data, r as marineYaml } from "./marine-data-BPqwT9Fr.js";
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
