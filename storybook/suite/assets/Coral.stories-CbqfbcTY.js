import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { n as page, t as init_storyHelper } from "./storyHelper-CkeVvDJb.js";
//#region ../../demo/blong-marine/src/stories/Coral.stories.tsx
var meta, Browse, Open, OpenSplit, OpenThumbIndex, New, NewHard, NewSoft, NewSplit, NewThumbIndex, Report, __namedExportsOrder;
function init_Coral_stories() {
	return (init_Coral_stories = __esmMin((() => {
		init_storyHelper();
		meta = {
			title: "Marine/Coral",
			parameters: { layout: "fullscreen" }
		};
		Browse = page("marine.coral.browse");
		Open = page("marine.coral.open", 1);
		OpenSplit = page("marine.coral.open", 1, { layout: "editSplit" });
		OpenThumbIndex = page("marine.coral.open", 1, { layout: "editThumbIndex" });
		New = page("marine.coral.new");
		NewHard = page("marine.coral.new", { value: { coral: { coralType: "hard" } } });
		NewSoft = page("marine.coral.new", { value: { coral: { coralType: "soft" } } });
		NewSoft.play = async ({ canvasElement, userEvent }) => {
			const nameInput = await new Promise((resolve, reject) => {
				const deadline = Date.now() + 3e4;
				const check = () => {
					const el = canvasElement.querySelector("input[name=\"coral.coralName\"]");
					if (el) {
						resolve(el);
						return;
					}
					if (Date.now() >= deadline) {
						reject(/* @__PURE__ */ new Error("Name input not found within 30 s"));
						return;
					}
					setTimeout(check, 200);
				};
				check();
			});
			await userEvent.clear(nameInput);
			await userEvent.type(nameInput, "Pink Soft Coral");
			await new Promise((resolve) => setTimeout(resolve, 200));
			const saveBtn = canvasElement.querySelector("button[aria-label=\"Save\"]:not([disabled])");
			if (!saveBtn) throw new Error("Save button not enabled after typing name");
			await userEvent.click(saveBtn);
			await new Promise((resolve) => setTimeout(resolve, 800));
		};
		NewSplit = page("marine.coral.new", { layout: "editSplit" });
		NewThumbIndex = page("marine.coral.new", { layout: "editThumbIndex" });
		Report = page("marine.coral.report");
		Browse.parameters = {
			...Browse.parameters,
			docs: {
				...Browse.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.browse')",
					...Browse.parameters?.docs?.source
				},
				description: {
					story: "3-panel browse with tree navigator (family hierarchy)",
					...Browse.parameters?.docs?.description
				}
			}
		};
		Open.parameters = {
			...Open.parameters,
			docs: {
				...Open.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.open', 1)",
					...Open.parameters?.docs?.source
				},
				description: {
					story: "Open coral record #1 — default single-card layout",
					...Open.parameters?.docs?.description
				}
			}
		};
		OpenSplit.parameters = {
			...OpenSplit.parameters,
			docs: {
				...OpenSplit.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.open', 1, {\n  layout: 'editSplit'\n})",
					...OpenSplit.parameters?.docs?.source
				},
				description: {
					story: "Open coral record #1 — two-column split layout",
					...OpenSplit.parameters?.docs?.description
				}
			}
		};
		OpenThumbIndex.parameters = {
			...OpenThumbIndex.parameters,
			docs: {
				...OpenThumbIndex.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.open', 1, {\n  layout: 'editThumbIndex'\n})",
					...OpenThumbIndex.parameters?.docs?.source
				},
				description: {
					story: "Open coral record #1 — thumb-index tab layout",
					...OpenThumbIndex.parameters?.docs?.description
				}
			}
		};
		New.parameters = {
			...New.parameters,
			docs: {
				...New.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.new')",
					...New.parameters?.docs?.source
				},
				description: {
					story: "Blank new coral form",
					...New.parameters?.docs?.description
				}
			}
		};
		NewHard.parameters = {
			...NewHard.parameters,
			docs: {
				...NewHard.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.new', {\n  value: {\n    coral: {\n      coralType: 'hard'\n    }\n  }\n})",
					...NewHard.parameters?.docs?.source
				},
				description: {
					story: "New coral pre-selected as Hard Coral",
					...NewHard.parameters?.docs?.description
				}
			}
		};
		NewSoft.parameters = {
			...NewSoft.parameters,
			docs: {
				...NewSoft.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.new', {\n  value: {\n    coral: {\n      coralType: 'soft'\n    }\n  }\n})",
					...NewSoft.parameters?.docs?.source
				},
				description: {
					story: "New coral pre-selected as Soft Coral — types a name and saves to validate mode switch",
					...NewSoft.parameters?.docs?.description
				}
			}
		};
		NewSplit.parameters = {
			...NewSplit.parameters,
			docs: {
				...NewSplit.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.new', {\n  layout: 'editSplit'\n})",
					...NewSplit.parameters?.docs?.source
				},
				description: {
					story: "New coral form — split layout",
					...NewSplit.parameters?.docs?.description
				}
			}
		};
		NewThumbIndex.parameters = {
			...NewThumbIndex.parameters,
			docs: {
				...NewThumbIndex.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.new', {\n  layout: 'editThumbIndex'\n})",
					...NewThumbIndex.parameters?.docs?.source
				},
				description: {
					story: "New coral form — thumb-index tab layout",
					...NewThumbIndex.parameters?.docs?.description
				}
			}
		};
		Report.parameters = {
			...Report.parameters,
			docs: {
				...Report.parameters?.docs,
				source: {
					originalSource: "page('marine.coral.report')",
					...Report.parameters?.docs?.source
				}
			}
		};
		__namedExportsOrder = [
			"Browse",
			"Open",
			"OpenSplit",
			"OpenThumbIndex",
			"New",
			"NewHard",
			"NewSoft",
			"NewSplit",
			"NewThumbIndex",
			"Report"
		];
	})))();
}
//#endregion
init_Coral_stories();
export { Browse, New, NewHard, NewSoft, NewSplit, NewThumbIndex, Open, OpenSplit, OpenThumbIndex, Report, __namedExportsOrder, meta as default };
