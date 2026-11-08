import { n as __esmMin } from "./rolldown-runtime-wTHAN5bU.js";
import { it as init_types, rt as handler } from "./iframe-BFtoPRqr.js";
// ../../core/blong-browser/orchestrator/auth/authRegister.ts
var authRegister_default;
function init_authRegister() {
	return (init_authRegister = __esmMin((() => {
		init_types();
		authRegister_default = handler(({ handler: { "backend/access.registration.add": accessRegistrationAdd, authLogin } }) => async function authRegister(params, $meta) {
			await accessRegistrationAdd({
				emailAddress: params.emailAddress,
				password: params.password,
				firstName: params.firstName,
				middleName: params.middleName,
				lastName: params.lastName,
				birthDate: params.birthDate,
				gender: params.gender,
				nationality: params.nationality,
				occupation: params.occupation
			}, $meta);
			return authLogin({
				username: params.emailAddress,
				password: params.password
			}, $meta);
		});
	})))();
}
init_authRegister();
export { authRegister_default as default };
