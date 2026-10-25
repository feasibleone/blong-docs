import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, Z as model } from "./iframe-DXhqEaHK.js";
//#region ../../realm/blong-kustomize/meta/model/kustomizeDeploymentModel.ts
var kustomizeDeploymentModel_default;
function init_kustomizeDeploymentModel() {
	return (init_kustomizeDeploymentModel = __esmMin((() => {
		init_types();
		kustomizeDeploymentModel_default = model(() => async function kustomizeDeploymentModel() {
			return {
				subject: "kustomize",
				object: "deployment",
				objectTitle: "Deployment",
				public: true,
				nameField: "deployment.deploymentName",
				schema: { properties: { deployment: {
					properties: {
						deploymentName: {
							title: "Name",
							filter: true,
							sort: true
						},
						deploymentStatus: {
							title: "Status",
							widget: { options: [{
								value: "ready",
								label: "Ready"
							}, {
								value: "pending",
								label: "Pending"
							}] }
						},
						createdAt: { title: "Created" }
					},
					widget: { columns: [
						"deploymentName",
						"deploymentStatus",
						"createdAt"
					] }
				} } },
				cards: {
					browse: {
						label: "Deployments",
						widgets: ["deployment"]
					},
					edit: {
						label: "Deployment Details",
						widgets: [
							"deployment.deploymentName",
							"deployment.deploymentStatus",
							"deployment.createdAt"
						]
					}
				},
				browser: {
					title: "Deployments",
					icon: "pi pi-cloud",
					toolbar: [{
						label: "Reconcile",
						icon: "pi pi-refresh",
						confirm: "Run a reconcile pass now? Objects the plan wants and the cluster lacks are created, and changed ones are updated. Nothing is deleted.",
						method: "kustomize.reconcile.run",
						params: {
							apply: true,
							from: "cr"
						},
						refresh: true
					}]
				}
			};
		});
	})))();
}
//#endregion
init_kustomizeDeploymentModel();
export { kustomizeDeploymentModel_default as default };
