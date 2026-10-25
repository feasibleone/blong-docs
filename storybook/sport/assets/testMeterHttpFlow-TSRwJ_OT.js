import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region ../blong-gateway/browser/test/test/testMeterHttpFlow.ts
/**
* Extract the HTTP status code from an error thrown by the handler proxy
* (JSON-RPC codec or MLE errorReceive path).
*/
function getHttpStatus(err) {
	const e = err;
	return e.res?.statusCode ?? e.statusCode ?? e.params?.code;
}
var testMeterHttpFlow_default;
function init_testMeterHttpFlow() {
	return (init_testMeterHttpFlow = __esmMin((() => {
		init_types();
		testMeterHttpFlow_default = handler(({ lib: { group }, handler: { loginTokenCreate, gatewayApplicationRegister, gatewayBundleMerge, gatewaySubscriptionMerge, meterprobeRate, meterprobeCredit, visionCompute } }) => ({ testMeterHttpFlow: ({ name = "gateway meter http flow" } = {}) => group(name)([
			async function loginDeveloper(assert, { $meta }) {
				const result = await loginTokenCreate({
					username: "testUser",
					password: "testPassword"
				}, $meta);
				assert.equal(result.token_type, "Bearer", "Developer token type is Bearer");
				return result;
			},
			async function registerApps(assert, { $meta, loginDeveloper }) {
				const suffix = Date.now();
				const rateClientId = `http-rate-${suffix}`;
				const creditClientId = `http-credit-${suffix}`;
				const rateApp = await gatewayApplicationRegister({ clientId: rateClientId }, $meta);
				const creditApp = await gatewayApplicationRegister({ clientId: creditClientId }, $meta);
				assert.equal(rateApp.clientId, rateClientId, "Rate client id registered");
				assert.equal(creditApp.clientId, creditClientId, "Credit client id registered");
				assert.ok(rateApp.clientSecret, "Rate client secret returned once");
				assert.ok(creditApp.clientSecret, "Credit client secret returned once");
				return {
					rateClientId,
					creditClientId,
					rateApp,
					creditApp
				};
			},
			async function mergeBundles(assert, { $meta }) {
				const result = await gatewayBundleMerge({ bundle: {
					"Meter Probe Rate": {
						roleBit: 102,
						capability: "meterprobe",
						actions: "meterprobe.rate",
						baseMonthlyCredits: 1e3,
						rateLimit: 2,
						rateWindowSec: 3600,
						isActive: true
					},
					"Meter Probe Credit": {
						roleBit: 103,
						capability: "meterprobe",
						actions: "meterprobe.credit",
						baseMonthlyCredits: 10,
						rateLimit: 1e3,
						rateWindowSec: 60,
						isActive: true
					},
					"Vision AI": {
						roleBit: 100,
						capability: "vision",
						actions: "vision.compute",
						baseMonthlyCredits: 1e3,
						rateLimit: 100,
						rateWindowSec: 60,
						isActive: true
					}
				} }, $meta);
				assert.equal(result.success, true, "Probe bundles merged");
				return result;
			},
			async function subscribeApps(assert, { $meta, registerApps }) {
				const { rateClientId, creditClientId } = await registerApps;
				const result = await gatewaySubscriptionMerge({ subscription: {
					[`${rateClientId}Rate`]: {
						application: rateClientId,
						bundle: "Meter Probe Rate",
						status: "active",
						startsAt: "2000-01-01"
					},
					[`${rateClientId}Vision`]: {
						application: rateClientId,
						bundle: "Vision AI",
						status: "active",
						startsAt: "2000-01-01"
					},
					[`${creditClientId}Credit`]: {
						application: creditClientId,
						bundle: "Meter Probe Credit",
						status: "active",
						startsAt: "2000-01-01"
					}
				} }, $meta);
				assert.equal(result.success, true, "Subscriptions created");
				return result;
			},
			async function rateAppToken(assert, { $meta, registerApps }) {
				const { rateApp } = await registerApps;
				const result = await loginTokenCreate({
					grantType: "client_credentials",
					clientId: rateApp.clientId,
					clientSecret: rateApp.clientSecret
				}, $meta);
				assert.equal(result.token_type, "Bearer", "Rate app token type is Bearer");
				return {
					...result,
					rateApp
				};
			},
			async function rateProbeBlocked(assert, { $meta }) {
				for (let i = 0; i < 2; i++) {
					const result = await meterprobeRate({}, $meta);
					assert.equal(result.success, true, `rate probe call ${i + 1} allowed`);
				}
				let blocked = false;
				try {
					await meterprobeRate({}, $meta);
				} catch (err) {
					blocked = true;
					const status = getHttpStatus(err);
					assert.equal(status, 429, "rate probe third call returns HTTP 429");
				}
				assert.equal(blocked, true, "rate probe third call was blocked");
			},
			async function visionHappyPath(assert, { $meta }) {
				const result = await visionCompute({}, $meta);
				assert.equal(result.success, true, "vision.compute succeeds over HTTP");
				assert.equal(result.vision, "computed", "vision.compute returns result");
			},
			async function creditAppToken(assert, { $meta, registerApps }) {
				const { creditApp } = await registerApps;
				const result = await loginTokenCreate({
					grantType: "client_credentials",
					clientId: creditApp.clientId,
					clientSecret: creditApp.clientSecret
				}, $meta);
				assert.equal(result.token_type, "Bearer", "Credit app token type is Bearer");
				return {
					...result,
					creditApp
				};
			},
			async function creditProbeBlocked(assert, { $meta }) {
				for (let i = 0; i < 2; i++) {
					const result = await meterprobeCredit({}, $meta);
					assert.equal(result.success, true, `credit probe call ${i + 1} allowed`);
				}
				let blocked = false;
				try {
					await meterprobeCredit({}, $meta);
				} catch (err) {
					blocked = true;
					const status = getHttpStatus(err);
					assert.equal(status, 429, "credit probe third call returns HTTP 429");
				}
				assert.equal(blocked, true, "credit probe third call was blocked");
			}
		]) }));
	})))();
}
//#endregion
init_testMeterHttpFlow();
export { testMeterHttpFlow_default as default };
