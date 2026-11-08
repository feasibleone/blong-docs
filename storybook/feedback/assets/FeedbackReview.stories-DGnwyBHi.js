import { n as __esmMin, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { S as BlongProvider, w as makeHandlerProxy } from "./App-aUJ8LCxO.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { J as init_types, X as library, n as init_src } from "./iframe-BslwTayt.js";
import { r as init_feedbackReviewPage, t as FeedbackReviewPage } from "./feedbackReviewPage-BVQAFpYh.js";
// src/stories/img/feedbackShot.jpg
var feedbackShot_default;
function init_feedbackShot() {
	return (init_feedbackShot = __esmMin((() => {
		feedbackShot_default = new URL("feedbackShot-Bd6GcAI9.jpg", import.meta.url).href;
	})))();
}
// src/stories/feedbackReviewShot.ts
var FIXTURE_SHOT;
function init_feedbackReviewShot() {
	return (init_feedbackReviewShot = __esmMin((() => {
		init_feedbackShot();
		FIXTURE_SHOT = feedbackShot_default;
	})))();
}
// adapter/db/prose.ts
/** `2026-10-20T09:12:00.000Z` → `2026-10-20 09:12` (UTC, so the output is stable). */
function stamp(value) {
	if (!value) return "unknown";
	const date = value instanceof Date ? value : new Date(value);
	if (Number.isNaN(date.getTime())) return String(value);
	const pad = (n) => String(n).padStart(2, "0");
	return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
}
/** `sport.athlete.browse (Athletes)` — the page a session names, or its URL. */
function pageOf(session) {
	const parts = [
		session.pageSubject,
		session.pageObject,
		session.pageKind
	].filter((part) => Boolean(part));
	const name = parts.length ? parts.join(".") : session.pageUrl;
	return session.pageTitle ? `${name} (${session.pageTitle})` : name;
}
/** The wording of one item: the reviewer's clarification first, then the person's words. */
function wordingOf(item) {
	const refined = item.refinedText?.trim();
	return refined ? refined : (item.commentText ?? "").trim();
}
/**
* Render a batch as one Markdown document.
*
* The entries are written in the order they are given; the caller sorts them
* (the handler sorts by submission time). Items are written by `itemIndex`, and
* an item without one keeps its position in the array.
*/
function renderProse(entries) {
	entries = entries.map((entry) => ({
		...entry,
		items: entry.items.filter((item) => !item.removedAt)
	})).filter((entry) => entry.items.length > 0);
	const itemCount = entries.reduce((total, entry) => total + entry.items.length, 0);
	const lines = [
		`<!-- ${PROSE_VERSION} -->`,
		`# Feedback — ${entries.length} submission${entries.length === 1 ? "" : "s"}, ${itemCount} item${itemCount === 1 ? "" : "s"}`,
		""
	];
	const identifiers = [];
	for (const { session, items } of entries) {
		lines.push(`## ${pageOf(session)} — ${items.length} item${items.length === 1 ? "" : "s"}`, "", `- Session: \`${session.sessionId}\``, `- Submitted: ${stamp(session.submittedAt)}`, `- Screenshot: ${session.shotStatus}`, `- Page: \`${session.pageUrl}\``);
		if (session.userResourceId) lines.push(`- Submitted by: \`${session.userResourceId}\``);
		if (session.languageCode) lines.push(`- Language: ${session.languageCode}`);
		lines.push("");
		const ordered = items.map((item, position) => ({
			item,
			position
		})).sort((a, b) => (a.item.itemIndex ?? a.position) - (b.item.itemIndex ?? b.position) || a.position - b.position);
		for (const [index, { item }] of ordered.entries()) {
			const label = item.targetLabel ? ` — ${item.targetKind} "${item.targetLabel}"` : "";
			lines.push(`### ${index + 1}. \`${item.targetId}\`${label}`, "", `> ${wordingOf(item).replace(/\n/g, "\n> ")}`, "");
			identifiers.push(item.targetId);
		}
	}
	if (identifiers.length) lines.push("## Target identifiers", "", "Every identifier above is the path to the element it is about: the page it was found", "on, then one step per container down to the thing itself —", "`sport.club.open/card:clubDetails/field:clubShortName` is a field in a card of that", "page. Search for the last named step to land on it.", "", "```text", ...[...new Set(identifiers)], "```", "");
	return lines.join("\n");
}
var PROSE_VERSION;
function init_prose() {
	return (init_prose = __esmMin((() => {
		init_types();
		PROSE_VERSION = "blong-feedback v1";
		library(() => ({ renderProse }));
	})))();
}
// src/stories/feedbackReviewFixture.ts
var FIXTURE_SHOT_SIZE, FIXTURE_SESSIONS, FIXTURE_ITEMS;
function init_feedbackReviewFixture() {
	return (init_feedbackReviewFixture = __esmMin((() => {
		FIXTURE_SHOT_SIZE = {
			shotWidth: 847,
			shotHeight: 320
		};
		FIXTURE_SESSIONS = [{
			sessionId: "cffb9037-b815-426d-8331-2091ec995b4a",
			pageUrl: "/s/club",
			pageTitle: "Clubs",
			pageSubject: "sport",
			pageObject: "club",
			pageKind: "browse",
			languageCode: "en",
			shotStatus: "captured",
			status: "new",
			submittedAt: "2026-10-29T13:55:00.000Z",
			itemCount: 2
		}, {
			sessionId: "bb13ca19-fdc8-4835-b991-7a2b8b1d3583",
			pageUrl: "/s/",
			pageTitle: "Blong Sport",
			pageSubject: "sport",
			pageObject: "portal",
			pageKind: "page",
			languageCode: "bg",
			shotStatus: "unavailable",
			status: "new",
			submittedAt: "2026-10-29T13:40:00.000Z",
			itemCount: 1
		}];
		FIXTURE_ITEMS = [{
			feedbackItemId: "01JB7Q9K3M4N5P6R7S8T9V0W1X",
			targetId: "sport.club.browse/card:browse/field:club/table:club/column:clubShortName/label",
			targetKind: "label",
			targetLabel: "Short Name",
			anchor: {
				x: .5862,
				y: .2152,
				width: .0928,
				height: .05
			},
			callout: {
				x: .7049,
				y: .2152,
				width: .2951,
				height: .5375
			},
			commentText: "The label does not say which club this filter is for.",
			itemIndex: 0
		}, {
			feedbackItemId: "01JB7Q9K3M4N5P6R7S8T9V0W1Y",
			targetId: "sport.club.browse/card:browse/field:club/table:club/column:legalName",
			targetKind: "column",
			targetLabel: "Legal Name",
			anchor: {
				x: .026,
				y: .1688,
				width: .1986,
				height: .143
			},
			callout: {
				x: .3332,
				y: .2938,
				width: .3872,
				height: .6625
			},
			commentText: "The header wraps and cuts the text.",
			itemIndex: 1
		}];
	})))();
}
// src/stories/feedbackReviewStub.ts
/**
* The answers the page expects, over a list an edit can change.
*
* The picture is passed in rather than imported: it is a URL a bundler mints, and a
* module the test reads cannot carry one (`@@T-499`).
*/
function makeStubDispatch(shotData) {
	let items = FIXTURE_ITEMS.map((item) => ({ ...item }));
	return (method, params) => {
		switch (method) {
			case "feedback.session.list": return Promise.resolve({ sessions: params?.status === "processed" ? FIXTURE_SESSIONS.map((session) => ({
				...session,
				status: "processed"
			})) : FIXTURE_SESSIONS });
			case "feedback.session.items": return Promise.resolve({
				session: {
					...FIXTURE_SESSION,
					...FIXTURE_SHOT_SIZE
				},
				items
			});
			case "feedback.shot.get": return Promise.resolve({
				shotData,
				mimeType: "image/jpeg"
			});
			case "feedback.prose.render": return Promise.resolve({
				document: renderProse([{
					session: FIXTURE_SESSION,
					items
				}]),
				sessionIds: [FIXTURE_SESSION.sessionId],
				itemCount: items.filter((item) => !item.removedAt).length
			});
			case "feedback.session.update": return Promise.resolve({ updated: 1 });
			case "feedback.item.edit": {
				const edit = params ?? {};
				items = items.map((item) => item.feedbackItemId === edit.itemId ? {
					...item,
					...edit.refinedText !== void 0 && { refinedText: edit.refinedText },
					...edit.callout !== void 0 && { callout: edit.callout },
					...edit.removed !== void 0 && { removedAt: edit.removed ? (/* @__PURE__ */ new Date()).toISOString() : void 0 }
				} : item);
				return Promise.resolve({ updated: 1 });
			}
			default: return Promise.reject(/* @__PURE__ */ new Error(`the story stub has no answer for ${method}`));
		}
	};
}
var FIXTURE_SESSION;
function init_feedbackReviewStub() {
	return (init_feedbackReviewStub = __esmMin((() => {
		init_prose();
		init_feedbackReviewFixture();
		FIXTURE_SESSION = FIXTURE_SESSIONS[0];
	})))();
}
// src/stories/FeedbackReview.stories.tsx
/**
* Walk the page the way a reviewer would: open the first session, then render the
* document for it.
*
* The page marks its clickable row (`data-feedback-queue-row`) for exactly this: a
* story or a Playwright test needs a handle that is not a CSS position. The
* document is rendered too, because a story that stops one act short shows a pane
* that says "Nothing generated yet" and hides the half of the workflow the page
* exists for.
*
* The wait is long on purpose: a published Storybook loads the platform before it
* renders anything, which is seconds rather than frames, and a short one left the
* story open on an empty page with no document to read.
*/
function AutoOpen() {
	(0, import_react.useEffect)(() => {
		let tries = 0;
		let click;
		const timer = setInterval(() => {
			const row = document.querySelector("[data-feedback-queue-row]");
			if (row) {
				row.click();
				clearInterval(timer);
				click = setTimeout(() => {
					[...document.querySelectorAll("button")].find((button) => button.textContent?.trim() === "Generate prose")?.click();
				}, 400);
			} else if (++tries > 300) clearInterval(timer);
		}, 50);
		return () => {
			clearInterval(timer);
			if (click) clearTimeout(click);
		};
	}, []);
	return null;
}
function ReviewHost({ autoOpen = false }) {
	const [proxy] = (0, import_react.useState)(() => makeHandlerProxy(makeStubDispatch(FIXTURE_SHOT)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BlongProvider, {
		handlerProxy: proxy,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackReviewPage, {}), autoOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoOpen, {})]
	});
}
var import_react, import_jsx_runtime, meta, Queue, Open, Narrow, __namedExportsOrder;
function init_FeedbackReview_stories() {
	return (init_FeedbackReview_stories = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_src();
		init_feedbackReviewPage();
		init_feedbackReviewShot();
		init_feedbackReviewStub();
		import_jsx_runtime = require_jsx_runtime();
		meta = {
			title: "Feedback/Review",
			parameters: { layout: "fullscreen" }
		};
		Queue = { render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewHost, {}) };
		Open = { render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewHost, { autoOpen: true }) };
		Narrow = { render: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: { width: 720 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewHost, { autoOpen: true })
		}) };
		Queue.parameters = {
			...Queue.parameters,
			docs: {
				...Queue.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <ReviewHost />\n}",
					...Queue.parameters?.docs?.source
				},
				description: {
					story: "The queue with nothing picked: the left pane only.",
					...Queue.parameters?.docs?.description
				}
			}
		};
		Open.parameters = {
			...Open.parameters,
			docs: {
				...Open.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <ReviewHost autoOpen />\n}",
					...Open.parameters?.docs?.source
				},
				description: {
					story: "A session open: the picture with its anchors, the comments and the document.",
					...Open.parameters?.docs?.description
				}
			}
		};
		Narrow.parameters = {
			...Narrow.parameters,
			docs: {
				...Narrow.parameters?.docs,
				source: {
					originalSource: "{\n  render: () => <div style={{\n    width: 720\n  }}>\n            <ReviewHost autoOpen />\n        </div>\n}",
					...Narrow.parameters?.docs?.source
				},
				description: {
					story: "The same page at a narrow width, where the two panes have to share.",
					...Narrow.parameters?.docs?.description
				}
			}
		};
		__namedExportsOrder = [
			"Queue",
			"Open",
			"Narrow"
		];
	})))();
}
init_FeedbackReview_stories();
export { Narrow, Open, Queue, __namedExportsOrder, meta as default };
