import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { _n as init_types, gn as handler } from "./iframe-Dd4aRJs7.js";
// ../../realm/blong-kustomize/meta/fixture/kustomizeFixture.ts
var kustomizeFixture_default;
function init_kustomizeFixture() {
	return (init_kustomizeFixture = __esmMin((() => {
		init_types();
		kustomizeFixture_default = handler(() => async function kustomizeFixture() {
			return { "kustomize.deployment": [{
				deploymentId: 101,
				deploymentName: "Sample Deployment One (fixture)",
				deploymentStatus: "ready",
				createdAt: "2026-10-04T09:12:00Z"
			}, {
				deploymentId: 102,
				deploymentName: "Sample Deployment Two (fixture)",
				deploymentStatus: "pending",
				createdAt: "2026-10-04T09:15:00Z"
			}] };
		});
	})))();
}
init_kustomizeFixture();
export { kustomizeFixture_default as default };
