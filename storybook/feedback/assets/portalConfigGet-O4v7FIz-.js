import { n as __esmMin } from "./rolldown-runtime-DpEnGzO4.js";
import { at as init_types, it as handler } from "./iframe-DRWtcwdA.js";
// ../../core/blong-realm/browser/orchestrator/portal/portalConfigGet.ts
var portalConfigGet_default;
function init_portalConfigGet() {
	return (init_portalConfigGet = __esmMin((() => {
		init_types();
		portalConfigGet_default = handler(({ config }) => async function portalConfigGet() {
			const portal = config.portal ?? {};
			return {
				name: "blong-realm",
				...portal,
				menu: portal.menu ?? [{
					title: "Observe",
					items: [
						{
							title: "Flows",
							method: "blong.flow.browse",
							icon: "pi pi-sitemap"
						},
						{
							title: "Templates",
							method: "blong.template.browse",
							icon: "pi pi-clone"
						},
						{
							title: "Search",
							method: "blong.search.browse",
							icon: "pi pi-search"
						},
						{
							title: "Digest",
							method: "blong.digest.browse",
							icon: "pi pi-chart-line"
						}
					]
				}]
			};
		});
	})))();
}
init_portalConfigGet();
export { portalConfigGet_default as default };
