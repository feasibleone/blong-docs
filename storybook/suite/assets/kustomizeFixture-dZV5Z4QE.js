import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DXhqEaHK.js";
//#region ../../realm/blong-kustomize/meta/fixture/kustomizeFixture.ts
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
//#endregion
init_kustomizeFixture();
export { kustomizeFixture_default as default };
