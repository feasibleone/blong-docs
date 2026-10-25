import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
//#region ../../core/semantic-log/src/attachable.ts
var attached, vocabulary;
function init_attachable() {
	return (init_attachable = __esmMin((() => {
		vocabulary = {
			readIdentities: (forward) => attached === void 0 ? {} : attached.readIdentities(forward),
			isLegId: (value) => attached?.isLegId(value) ?? false,
			isLegSeq: (value) => attached?.isLegSeq(value) ?? false,
			isServiceName: (value) => attached?.isServiceName(value) ?? false,
			withFlow: (identity, fn) => attached === void 0 ? fn() : attached.withFlow(identity, fn),
			step: async (name, fn) => attached === void 0 ? fn() : attached.step(name, fn),
			bindTrace: (trace, fn) => attached === void 0 ? fn() : attached.bindTrace(trace, fn),
			bindInboundLeg: (leg, fn) => attached === void 0 ? fn() : attached.bindInboundLeg(leg, fn),
			bindLeg: (leg, fn) => attached === void 0 ? fn() : attached.bindLeg(leg, fn),
			identityHeaders: () => attached === void 0 ? {} : attached.identityHeaders(),
			enterFlow: (flow) => {
				attached?.enterFlow(flow);
			},
			enterTrace: (trace) => {
				attached?.enterTrace(trace);
			},
			enterInboundLeg: (leg) => {
				attached?.enterInboundLeg(leg);
			},
			withCapability: (name, on, fn) => attached === void 0 ? fn() : attached.withCapability(name, on, fn),
			enterCapability: (name, on) => {
				attached?.enterCapability(name, on);
			},
			capabilityState: (name) => attached?.capabilityState(name),
			currentCapabilities: () => attached?.currentCapabilities() ?? {},
			currentContext: () => attached?.currentContext() ?? {},
			/**
			* Announce a milestone for the next record (PRD R26).
			*
			* Degrades to nothing, which is the whole degradation: a milestone nobody records is
			* a note that was not written, and unlike every other member here there is no
			* caller-visible result to get wrong.
			*/
			point: (name, data) => {
				attached?.point(name, data);
			},
			/**
			* The branches this scope is running inside, outermost first (PRD R26).
			*
			* Read by a caller that has to *name* the nesting rather than describe it: `$meta`
			* stamps the chain on every progress entry it keeps, so a test report can rebuild the
			* tree from a flat array — including one that arrived over the wire, where the log's
			* own marks describe a position in another process and mean nothing here.
			*
			* `undefined` where nothing is attached, like every other reader: a page has no flow to
			* be inside of, and a dispatch path must not reach the emitter to discover that (F-197).
			*/
			currentRegions: () => attached?.currentRegions(),
			/**
			* Take the branch whose predicate holds, recording the rationale (PRD R11/R26).
			*
			* Degrades to the **selection alone**: a branch has to be taken whether or not
			* anything is recording, so the unattached case is a plain loop rather than a no-op.
			* That is why a branch is reached through here rather than imported directly — it has
			* to work on a path that must not reach the emitter's ambient scope (F-197).
			*/
			decide: (discriminator, values, branches) => {
				if (attached !== void 0) return attached.decide(discriminator, values, branches);
				for (const branch of branches) if (branch.when(values)) return branch.run();
			},
			/** Start collecting what this scope's work announces — the receiver's first move. */
			beginProgress: () => {
				attached?.beginProgress();
			},
			/**
			* Take the progress announced in this scope, clearing it (PRD R26/R27).
			*
			* What the framework around a handler reads when the handler returns, so the call can
			* report what its own work was: a handler's points and branches are staged in the scope
			* it ran in, and no record is written there. `undefined` when nothing is attached, which
			* is what a browser page and an unattached process have to say.
			*/
			takeProgress: () => attached?.takeProgress(),
			/** Announce progress a caller already holds, on the next record of this scope. */
			attachProgress: (progress) => {
				attached?.attachProgress(progress);
			}
		};
	})))();
}
//#endregion
export { vocabulary as n, init_attachable as t };
