import { n as __esmMin, r as __exportAll, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { T as useBlong, d as arrowHeadPoints, f as connectorOf, h as resizeBox, m as moveBox, u as useFeedbackConfig } from "./App-aUJ8LCxO.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { B as shortTargetId, n as Button, v as Text } from "./shell-BedTcraa.js";
import { n as init_src } from "./iframe-BslwTayt.js";
// src/pages/feedbackReviewPage.tsx
var feedbackReviewPage_exports = /* @__PURE__ */ __exportAll({ FeedbackReviewPage: () => FeedbackReviewPage });
/** The methods, named from `portal.feedback` so a suite can point them elsewhere. */
function useMethods() {
	const config = useFeedbackConfig();
	return {
		list: "feedback.session.list",
		items: "feedback.session.items",
		shot: config?.shot ?? "feedback.shot.get",
		prose: config?.prose ?? "feedback.prose.render",
		update: config?.update ?? "feedback.session.update",
		itemEdit: "feedback.item.edit"
	};
}
function FeedbackReviewPage() {
	const { handler } = useBlong();
	const call = handler;
	const methods = useMethods();
	const [status, setStatus] = (0, import_react.useState)("new");
	const [queue, setQueue] = (0, import_react.useState)([]);
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [current, setCurrent] = (0, import_react.useState)(null);
	const [shot, setShot] = (0, import_react.useState)(null);
	const [picture, setPicture] = (0, import_react.useState)();
	const [document, setDocument] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const load = (0, import_react.useCallback)(async () => {
		const result = await call[methods.list]?.({ status }, {});
		setQueue(result?.sessions ?? []);
	}, [
		call,
		methods.list,
		status
	]);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	const open = (0, import_react.useCallback)(async (sessionId) => {
		const result = await call[methods.items]?.({ sessionId }, {});
		if (!result) return;
		setCurrent(result);
		setShot(null);
		setPicture(void 0);
		if (result.session.shotStatus === "captured") {
			const image = await call[methods.shot]?.({ sessionId }, {});
			setShot(image?.shotData ?? null);
		}
	}, [
		call,
		methods.items,
		methods.shot
	]);
	/** Write one reviewer act back to the row it belongs to, then to this page. */
	const editItem = (0, import_react.useCallback)(async (item, patch) => {
		if (!current) return;
		setCurrent((previous) => previous ? {
			...previous,
			items: previous.items.map((row) => row.feedbackItemId === item.feedbackItemId ? {
				...row,
				...patch,
				removedAt: patch.removed === void 0 ? row.removedAt : patch.removed ? (/* @__PURE__ */ new Date()).toISOString() : void 0
			} : row)
		} : previous);
		await call[methods.itemEdit]?.({
			sessionId: current.session.sessionId,
			itemId: item.feedbackItemId,
			...patch
		}, {});
	}, [
		call,
		current,
		methods.itemEdit
	]);
	const generate = (0, import_react.useCallback)(async () => {
		setBusy(true);
		try {
			const result = await call[methods.prose]?.(selected.length ? { sessionIds: selected } : { status: status ?? "new" }, {});
			setDocument(result?.document ?? "");
		} finally {
			setBusy(false);
		}
	}, [
		call,
		methods.prose,
		selected,
		status
	]);
	const markProcessed = (0, import_react.useCallback)(async () => {
		if (!selected.length) return;
		setBusy(true);
		try {
			await call[methods.update]?.({ sessionIds: selected }, {});
			setSelected([]);
			setDocument("");
			await load();
		} finally {
			setBusy(false);
		}
	}, [
		call,
		load,
		methods.update,
		selected
	]);
	const toggle = (sessionId) => setSelected((previous) => previous.includes(sessionId) ? previous.filter((id) => id !== sessionId) : [...previous, sessionId]);
	const openItems = current?.items.filter((item) => !item.removedAt) ?? [];
	const closedItems = current?.items.filter((item) => item.removedAt) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-column gap-2 p-2",
		style: {
			height: "100%",
			minHeight: 0,
			overflow: "auto",
			fontFamily: "var(--font-family, system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex align-items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						as: "span",
						className: "font-bold",
						children: "Feedback"
					}),
					[
						"new",
						"processed",
						null
					].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						label: value ?? "all",
						className: status === value ? "p-button-sm" : "p-button-sm p-button-text",
						onClick: () => {
							setStatus(value);
							setSelected([]);
							setDocument("");
						}
					}, String(value))),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							label: "Generate prose",
							className: "p-button-sm",
							disabled: busy,
							onClick: () => void generate()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							label: "Mark processed",
							className: "p-button-sm",
							disabled: busy || !selected.length,
							onClick: () => void markProcessed()
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				style: {
					flexShrink: 0,
					minHeight: 0
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-1 border-300 border-round",
					style: {
						flex: "0 1 240px",
						width: 240,
						minWidth: 0,
						overflow: "auto"
					},
					children: [queue.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 opacity-70 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Nothing to review." })
					}), queue.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex align-items-center gap-2 p-2 border-bottom-1 border-300 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: selected.includes(row.sessionId),
							onChange: () => toggle(row.sessionId)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-column",
							"data-feedback-queue-row": row.sessionId,
							onClick: () => void open(row.sessionId),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								as: "span",
								className: "text-sm font-bold",
								children: `${row.pageSubject ?? "blong"}.${row.pageObject ?? "portal"}.${row.pageKind ?? "page"}`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs opacity-70",
								children: [
									row.submittedAt.slice(0, 16).replace("T", " "),
									" ·",
									" ",
									row.itemCount,
									" item",
									row.itemCount === 1 ? "" : "s",
									" ·",
									" ",
									row.status
								]
							})]
						})]
					}, row.sessionId))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-1 border-300 border-round p-2",
					style: {
						flex: "1 1 420px",
						minWidth: 0,
						overflow: "auto"
					},
					"data-feedback-detail": "",
					children: [!current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "opacity-70 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Pick a session to see the picture and its comments." })
					}), current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-column gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs opacity-70",
								children: [
									current.session.pageUrl,
									" · ",
									current.session.languageCode,
									" ·",
									" ",
									current.session.shotStatus,
									" · ",
									openItems.length,
									" comment",
									openItems.length === 1 ? "" : "s",
									closedItems.length ? `, ${closedItems.length} closed` : ""
								]
							}),
							shot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									position: "relative",
									maxWidth: Math.min(1e3, picture?.width ?? 1e3)
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: shot,
									alt: "Captured screen",
									onLoad: (event) => setPicture({
										width: event.currentTarget.naturalWidth,
										height: event.currentTarget.naturalHeight
									}),
									style: {
										display: "block",
										width: "100%",
										border: "1px solid var(--surface-border, #999)"
									}
								}), picture && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Connectors, {
										items: openItems,
										picture
									}),
									openItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorOutline, { item }, `anchor-${item.feedbackItemId}`)),
									openItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCallout, {
										item,
										picture,
										onEdit: (patch) => void editItem(item, patch),
										onClose: () => void editItem(item, { removed: true })
									}, `callout-${item.feedbackItemId}`))
								] })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm opacity-70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "No picture for this session." })
							}),
							closedItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap align-items-center gap-2 text-xs opacity-80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									as: "span",
									children: `Closed: ${closedItems.length}`
								}), closedItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									label: shortTargetId(item.targetId),
									tooltip: item.targetId,
									className: "p-button-sm p-button-text",
									onClick: () => void editItem(item, { removed: false })
								}, `restore-${item.feedbackItemId}`))]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-1 border-300 border-round p-2",
				style: {
					flex: "1 1 auto",
					minHeight: 120,
					overflow: "auto"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex align-items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						as: "span",
						className: "font-bold text-sm",
						children: "Generated prose"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						label: "Copy",
						className: "p-button-sm p-button-text",
						disabled: !document,
						onClick: () => {
							navigator.clipboard?.writeText(document);
						}
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "text-xs white-space-pre-wrap m-0",
					children: document || "Nothing generated yet."
				})]
			})
		]
	});
}
/** A stored fraction as a pixel rectangle on the picture. */
function toPixels(box, picture) {
	return {
		x: box.x * picture.width,
		y: box.y * picture.height,
		width: box.width * picture.width,
		height: box.height * picture.height
	};
}
/** A pixel rectangle back to fractions, which is the shape the rows hold. */
function toFractions(rect, picture) {
	const clamp = (value) => Math.min(1, Math.max(0, value));
	return {
		x: clamp(rect.x / picture.width),
		y: clamp(rect.y / picture.height),
		width: clamp(rect.width / picture.width),
		height: clamp(rect.height / picture.height)
	};
}
/**
* The lines from each callout back to the element it is about.
*
* Drawn in the picture's own pixels — the `viewBox` is that size, so the drawing
* scales with the image and the arrowhead keeps its shape. A hundred-unit box
* stretched to the picture's aspect turned every head into an ellipse
* (`@@T-495`).
*/
function Connectors({ items, picture }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: `0 0 ${picture.width} ${picture.height}`,
		style: {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			pointerEvents: "none"
		},
		children: items.map((item) => {
			if (!item.anchor || !item.callout) return null;
			const { from, to } = connectorOf(toPixels(item.callout, picture), toPixels(item.anchor, picture));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: from.x,
				y1: from.y,
				x2: to.x,
				y2: to.y,
				stroke: "var(--primary-color, #6366f1)",
				strokeWidth: 1.5,
				fill: "none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: arrowHeadPoints(from, to),
				fill: "var(--primary-color, #6366f1)"
			})] }, `line-${item.feedbackItemId}`);
		})
	});
}
/** The element a comment is about, outlined but not editable. */
function AnchorOutline({ item }) {
	if (!item.anchor) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		title: item.targetId,
		"data-review-box": "anchor",
		style: {
			position: "absolute",
			left: `${item.anchor.x * 100}%`,
			top: `${item.anchor.y * 100}%`,
			width: `${item.anchor.width * 100}%`,
			height: `${item.anchor.height * 100}%`,
			boxSizing: "border-box",
			border: "2px solid var(--primary-color, #6366f1)",
			borderRadius: 3,
			opacity: .7,
			pointerEvents: "none"
		}
	});
}
/**
* A comment where the person left it, and the form the reviewer edits it in.
*
* The box is the whole editor: the top bevel is the drag handle and carries the
* identifier's tail and the close button, the text area holds the wording and
* saves on blur, and the corner resizes. Geometry is held in fractions while the
* pointer moves and written back as a row update when it stops (`@@T-495`).
*/
function ReviewCallout({ item, picture, onEdit, onClose }) {
	const [box, setBox] = (0, import_react.useState)(item.callout ?? {
		x: .05,
		y: .05,
		width: .3,
		height: .25
	});
	const [text, setText] = (0, import_react.useState)(item.refinedText ?? item.commentText);
	const boxRef = (0, import_react.useRef)(box);
	(0, import_react.useEffect)(() => {
		const next = item.callout ?? {
			x: .05,
			y: .05,
			width: .3,
			height: .25
		};
		boxRef.current = next;
		setBox(next);
	}, [item.callout]);
	(0, import_react.useEffect)(() => {
		setText(item.refinedText ?? item.commentText);
	}, [item.refinedText, item.commentText]);
	/** Drag or resize with the pointer, clamped to the picture by the shared rules. */
	const startGesture = (mode) => (event) => {
		if (event.button !== 0) return;
		event.preventDefault();
		event.stopPropagation();
		const start = boxRef.current;
		const startX = event.clientX;
		const startY = event.clientY;
		let moved = false;
		const move = (pointer) => {
			const dx = pointer.clientX - startX;
			const dy = pointer.clientY - startY;
			if (Math.abs(dx) + Math.abs(dy) > 1) moved = true;
			const rect = toPixels(start, picture);
			const fractions = toFractions(mode === "move" ? moveBox(rect, dx, dy, picture) : resizeBox(rect, dx, dy, picture), picture);
			boxRef.current = fractions;
			setBox(fractions);
		};
		const end = () => {
			window.removeEventListener("pointermove", move);
			window.removeEventListener("pointerup", end);
			window.removeEventListener("pointercancel", end);
			if (moved) onEdit({ callout: boxRef.current });
		};
		window.addEventListener("pointermove", move);
		window.addEventListener("pointerup", end);
		window.addEventListener("pointercancel", end);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-review-box": "callout",
		"data-review-item": item.feedbackItemId,
		style: {
			position: "absolute",
			left: `${box.x * 100}%`,
			top: `${box.y * 100}%`,
			width: `${box.width * 100}%`,
			height: `${box.height * 100}%`,
			boxSizing: "border-box",
			display: "flex",
			flexDirection: "column",
			borderRadius: 4,
			overflow: "hidden",
			color: "var(--text-color, #111827)",
			background: "color-mix(in srgb, var(--surface-card, #ffffff) 92%, transparent)",
			border: "1px solid var(--primary-color, #6366f1)",
			boxShadow: "0 4px 12px rgb(0 0 0 / 25%)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex align-items-center gap-1 px-1",
				style: {
					flex: "none",
					height: 20,
					cursor: "grab",
					touchAction: "none",
					userSelect: "none",
					background: "color-mix(in srgb, var(--primary-color, #6366f1) 18%, transparent)"
				},
				onPointerDown: startGesture("move"),
				title: item.targetId,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs",
					style: {
						flex: "1 1 auto",
						minWidth: 0,
						fontFamily: "ui-monospace, monospace",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap"
					},
					children: shortTargetId(item.targetId)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close this comment",
					className: "p-button p-button-text p-button-sm p-0",
					style: {
						flex: "none",
						width: 16,
						height: 16,
						lineHeight: 1
					},
					onClick: (event) => {
						event.stopPropagation();
						onClose();
					},
					children: "×"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: text,
				"data-review-text": item.feedbackItemId,
				placeholder: "What should change?",
				onChange: (event) => setText(event.target.value),
				onBlur: () => {
					const value = text.trim();
					if (value === (item.refinedText ?? "")) return;
					onEdit({ refinedText: value });
				},
				style: {
					flex: "1 1 auto",
					minHeight: 0,
					width: "100%",
					padding: "4px 6px",
					font: "inherit",
					fontSize: "0.72rem",
					lineHeight: 1.3,
					resize: "none",
					border: 0,
					outline: "none",
					background: "transparent",
					color: "inherit"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				onPointerDown: startGesture("resize"),
				style: {
					position: "absolute",
					right: 0,
					bottom: 0,
					width: 10,
					height: 10,
					cursor: "nwse-resize",
					touchAction: "none",
					background: "linear-gradient(135deg, transparent 50%, var(--primary-color, #6366f1) 50%)"
				}
			})
		]
	});
}
var import_react, import_jsx_runtime;
function init_feedbackReviewPage() {
	return (init_feedbackReviewPage = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_src();
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
export { feedbackReviewPage_exports as n, init_feedbackReviewPage as r, FeedbackReviewPage as t };
