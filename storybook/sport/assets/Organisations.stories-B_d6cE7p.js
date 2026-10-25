import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-_Rs1rrEY.js";
//#region src/stories/Organisations.stories.tsx
var meta, FederationBrowse, FederationNew, FederationOpen, ClubBrowse, ClubNew, ClubOpen, __namedExportsOrder;
function init_Organisations_stories() {
	return (init_Organisations_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Sport/Organisations",
			parameters: { layout: "fullscreen" }
		};
		FederationBrowse = page("sport.federation.browse");
		FederationNew = page("sport.federation.new");
		FederationOpen = page("sport.federation.open", { federationId: "f1" });
		ClubBrowse = page("sport.club.browse");
		ClubNew = page("sport.club.new");
		ClubOpen = page("sport.club.open", { clubId: "k1" });
		FederationBrowse.parameters = {
			...FederationBrowse.parameters,
			docs: {
				...FederationBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.federation.browse')",
					...FederationBrowse.parameters?.docs?.source
				}
			}
		};
		FederationNew.parameters = {
			...FederationNew.parameters,
			docs: {
				...FederationNew.parameters?.docs,
				source: {
					originalSource: "page('sport.federation.new')",
					...FederationNew.parameters?.docs?.source
				}
			}
		};
		FederationOpen.parameters = {
			...FederationOpen.parameters,
			docs: {
				...FederationOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.federation.open', {\n  federationId: 'f1'\n})",
					...FederationOpen.parameters?.docs?.source
				}
			}
		};
		ClubBrowse.parameters = {
			...ClubBrowse.parameters,
			docs: {
				...ClubBrowse.parameters?.docs,
				source: {
					originalSource: "page('sport.club.browse')",
					...ClubBrowse.parameters?.docs?.source
				}
			}
		};
		ClubNew.parameters = {
			...ClubNew.parameters,
			docs: {
				...ClubNew.parameters?.docs,
				source: {
					originalSource: "page('sport.club.new')",
					...ClubNew.parameters?.docs?.source
				}
			}
		};
		ClubOpen.parameters = {
			...ClubOpen.parameters,
			docs: {
				...ClubOpen.parameters?.docs,
				source: {
					originalSource: "page('sport.club.open', {\n  clubId: 'k1'\n})",
					...ClubOpen.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"FederationBrowse",
			"FederationNew",
			"FederationOpen",
			"ClubBrowse",
			"ClubNew",
			"ClubOpen"
		];
	})))();
}
//#endregion
init_Organisations_stories();
export { ClubBrowse, ClubNew, ClubOpen, FederationBrowse, FederationNew, FederationOpen, __namedExportsOrder, meta as default };
