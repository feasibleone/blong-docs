import { n as __esmMin, s as __toESM } from "./rolldown-runtime-V4kyJ4NV.js";
import { t as require_react } from "./react-DUVFSkmT.js";
import { n as init_BlongContext, r as useBlong } from "./BlongContext-B_6NAJve.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C3rgXVcg.js";
import { E as Password, S as Message, V as init_primereact, r as Button, v as InputText } from "./primereact-_rYrCq5a.js";
import { n as init_SocialLoginButton, t as SocialLoginButton } from "./SocialLoginButton-D-HL9k-O.js";
import { J as init_types, q as handler } from "./iframe-DxBhgsxq.js";
//#endregion
//#region ../../core/blong-browser/src/components/SelfRegistration/SelfRegistration.tsx
function SelfRegistration({ onRegister, onGoogle, onBack, title, logoIcon = "pi pi-user-plus", logoUrl, orgTitle, orgIcon = "pi pi-building", orgLogoUrl, error: externalError, loading: externalLoading, submitLabel = "Create account" }) {
	const [firstName, setFirstName] = (0, import_react$1.useState)("");
	const [lastName, setLastName] = (0, import_react$1.useState)("");
	const [emailAddress, setEmailAddress] = (0, import_react$1.useState)("");
	const [password, setPassword] = (0, import_react$1.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react$1.useState)("");
	const [error, setError] = (0, import_react$1.useState)("");
	const [loading, setLoading] = (0, import_react$1.useState)(false);
	const isLoading = externalLoading ?? loading;
	const displayError = externalError ?? error;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		if (!firstName.trim()) {
			setError("First name is required");
			return;
		}
		if (!lastName.trim()) {
			setError("Last name is required");
			return;
		}
		if (!emailAddress.trim()) {
			setError("Email address is required");
			return;
		}
		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		setLoading(true);
		try {
			await onRegister({
				emailAddress: emailAddress.trim(),
				password,
				firstName: firstName.trim(),
				lastName: lastName.trim()
			});
		} catch (err) {
			setError(String(err.message ?? err));
		} finally {
			setLoading(false);
		}
	};
	const handleGoogle = async () => {
		if (!onGoogle) return;
		try {
			await onGoogle();
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
		className: "blong-self-registration p-component",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "blong-self-registration__top",
				children: (title || logoUrl || logoIcon) && /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
					className: "blong-self-registration__brand",
					children: [logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("img", {
						src: logoUrl,
						alt: title ?? "logo",
						className: "blong-self-registration__brand-img"
					}) : /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("i", { className: `blong-self-registration__brand-icon ${logoIcon}` }), title && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
						className: "blong-self-registration__brand-name",
						children: title
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
				className: "blong-self-registration__card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("p", {
						className: "blong-self-registration__card-heading",
						children: "Create your account"
					}),
					displayError && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Message, {
						severity: "error",
						text: displayError,
						className: "blong-self-registration__error"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("form", {
						className: "blong-self-registration__form",
						onSubmit: (e) => void handleSubmit(e),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
								className: "blong-self-registration__row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
									className: "blong-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
										htmlFor: "register-first-name",
										className: "blong-field__label",
										children: "First Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(InputText, {
										id: "register-first-name",
										name: "firstName",
										value: firstName,
										onChange: (e) => setFirstName(e.target.value),
										className: "w-full",
										autoFocus: true,
										disabled: isLoading
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
									className: "blong-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
										htmlFor: "register-last-name",
										className: "blong-field__label",
										children: "Last Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(InputText, {
										id: "register-last-name",
										name: "lastName",
										value: lastName,
										onChange: (e) => setLastName(e.target.value),
										className: "w-full",
										disabled: isLoading
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
								className: "blong-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
									htmlFor: "register-email",
									className: "blong-field__label",
									children: "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(InputText, {
									id: "register-email",
									name: "emailAddress",
									type: "email",
									value: emailAddress,
									onChange: (e) => setEmailAddress(e.target.value),
									className: "w-full",
									disabled: isLoading
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
								className: "blong-self-registration__row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
									className: "blong-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
										htmlFor: "register-password",
										className: "blong-field__label",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Password, {
										inputId: "register-password",
										name: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										toggleMask: true,
										disabled: isLoading
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
									className: "blong-field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("label", {
										htmlFor: "register-confirm",
										className: "blong-field__label",
										children: "Confirm Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Password, {
										inputId: "register-confirm",
										name: "confirmPassword",
										value: confirmPassword,
										onChange: (e) => setConfirmPassword(e.target.value),
										toggleMask: true,
										disabled: isLoading
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Button, {
								type: "submit",
								label: submitLabel,
								loading: isLoading,
								className: "blong-self-registration__submit",
								"data-testid": "register-submit"
							})
						]
					}),
					onGoogle && /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)(import_jsx_runtime$1.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						className: "blong-self-registration__divider",
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", { children: "or" })
					}), /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(SocialLoginButton, {
						onClick: () => void handleGoogle(),
						loading: isLoading
					})] }),
					onBack && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
						className: "blong-self-registration__back",
						children: /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)(Button, {
							label: "Back to Login",
							icon: "pi pi-arrow-left",
							className: "p-button-text",
							onClick: onBack,
							disabled: isLoading
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("div", {
				className: "blong-self-registration__bottom",
				children: (orgTitle || orgLogoUrl || orgIcon) && /* @__PURE__ */ (0, import_jsx_runtime$1.jsxs)("div", {
					className: "blong-self-registration__org-brand",
					children: [orgLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("img", {
						src: orgLogoUrl,
						alt: orgTitle ?? "logo",
						className: "blong-self-registration__org-img"
					}) : orgIcon ? /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("i", { className: `blong-self-registration__org-icon ${orgIcon}` }) : null, orgTitle && /* @__PURE__ */ (0, import_jsx_runtime$1.jsx)("span", {
						className: "blong-self-registration__org-name",
						children: orgTitle
					})]
				})
			})
		]
	});
}
var import_react$1, import_jsx_runtime$1;
function init_SelfRegistration$1() {
	return (init_SelfRegistration$1 = __esmMin((() => {
		init_primereact();
		import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
		init_SocialLoginButton();
		import_jsx_runtime$1 = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../blong-party/browser/orchestrator/component/selfRegistrationPage.tsx
/**
* Wires the blong-browser `SelfRegistration` full-screen form to the party
* suite's backend: `authRegister` (register + auto-login) and the Google OAuth
* redirect.
*/
function SelfRegistrationPage() {
	const { handler } = useBlong();
	const onRegister = import_react.useCallback(async (credentials) => {
		await handler.authRegister(credentials, {});
	}, [handler]);
	const onGoogle = import_react.useCallback(() => {
		handler.authGoogleRedirect({}, {});
	}, [handler]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelfRegistration, {
		title: "Blong Party",
		orgTitle: "Feasible One",
		onRegister,
		onGoogle
	});
}
var import_react, import_jsx_runtime;
function init_selfRegistrationPage() {
	return (init_selfRegistrationPage = __esmMin((() => {
		init_SelfRegistration$1(), init_BlongContext();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime = require_jsx_runtime();
	})))();
}
//#endregion
//#region ../blong-party/browser/orchestrator/component/selfRegistration.ts
var selfRegistration_default;
function init_selfRegistration() {
	return (init_selfRegistration = __esmMin((() => {
		init_types();
		init_selfRegistrationPage();
		selfRegistration_default = handler(function userRegistration() {
			return { "user.selfRegistration": async () => ({
				title: "Register",
				component: () => Promise.resolve(SelfRegistrationPage)
			}) };
		});
	})))();
}
//#endregion
init_selfRegistration();
export { selfRegistration_default as default };
