import { n as __esmMin } from "./rolldown-runtime-V4kyJ4NV.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#region browser/test/test/testAthlete.flow.ts
/**
* Extract the HTTP status code from an error thrown by the handler proxy
* (JSON-RPC codec or MLE errorReceive path).
*/
function getHttpStatus(err) {
	const e = err;
	return e.res?.statusCode ?? e.statusCode ?? e.params?.code;
}
var testAthlete_flow_default;
function init_testAthlete_flow() {
	return (init_testAthlete_flow = __esmMin((() => {
		init_types();
		testAthlete_flow_default = handler(({ lib: { group }, handler: { loginTokenCreate, sportAthleteAdd, sportAthleteFind } }) => ({ testAthleteFlow: ({ name = "sport flow browser" } = {}) => group(name)([
			async function httpNoAuth(assert, { $meta }) {
				try {
					await sportAthleteFind({ paging: {
						pageNumber: 1,
						pageSize: 10
					} }, $meta);
					assert.fail("sportAthleteFind should have thrown without auth");
				} catch (err) {
					const status = getHttpStatus(err);
					assert.equal(status, 401, "sport.athlete.find without auth returns 401");
				}
			},
			async function httpAuthDeny(assert, { $meta }) {
				await loginTokenCreate({
					username: "testViewer",
					password: "testPassword"
				}, $meta);
				try {
					await sportAthleteAdd({ athlete: {
						firstName: "Denied",
						lastName: "User",
						athleteStatus: "active"
					} }, $meta);
					assert.fail("sportAthleteAdd should have thrown for unauthorized user");
				} catch (err) {
					const status = getHttpStatus(err);
					assert.equal(status, 403, "sport.athlete.add without permission returns 403");
				}
			},
			async function httpAuthPass(assert, { $meta }) {
				await loginTokenCreate({
					username: "testAdmin",
					password: "testPassword"
				}, $meta);
				const result = await sportAthleteAdd({ athlete: {
					personName: `Browser Athlete ${Date.now()}`,
					firstName: "Browser",
					lastName: "Athlete",
					athleteStatus: "active"
				} }, $meta);
				assert.ok(result.athlete.athleteId, "authorized athlete add succeeds");
				const resultFind = await sportAthleteFind({
					paging: {
						pageNumber: 1,
						pageSize: 10
					},
					filterBy: { athleteId: result.athlete.athleteId }
				}, $meta);
				assert.ok(resultFind.some((item) => item.athleteId === result.athlete.athleteId), "authorized athlete find succeeds");
			}
		]) }));
	})))();
}
//#endregion
init_testAthlete_flow();
export { testAthlete_flow_default as default };
