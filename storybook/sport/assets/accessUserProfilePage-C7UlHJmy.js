import { n as __esmMin, s as __toESM } from "./rolldown-runtime-wTHAN5bU.js";
import { t as require_react } from "./react-DUbJxPEF.js";
import { k as useBlong } from "./App-DX5E6ahH.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BGSnrdEt.js";
import { r as useAppStore } from "./appStore-p_jHiGC2.js";
import { f as Password, n as Button, o as Dropdown, s as InputText, u as Message } from "./shell-BedTcraa.js";
import { g as Card, n as init_src } from "./iframe-BFtoPRqr.js";
// ../blong-access/src/pages/accessUserProfilePage.tsx
/**
* AccessUserProfilePage — the self-service profile page.
*
* Shows account details, granted roles (read-only), and lets the user edit
* their personal details (name/email), preferred language, and password.
* Name fields are only editable when a linked `party.person` exists (suites
* without the party realm fall back to no personal data).
*/
function AccessUserProfilePage() {
	const { handler } = useBlong();
	const translations = useAppStore((s) => s.translations);
	const tr = import_react.useCallback((text) => translations[text] ?? text, [translations]);
	const setProfile = useAppStore((s) => s.setProfile);
	const [profile, setProfileState] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(void 0);
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [emailAddress, setEmailAddress] = (0, import_react.useState)("");
	const [preferredLanguage, setPreferredLanguage] = (0, import_react.useState)("en");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [saveError, setSaveError] = (0, import_react.useState)(void 0);
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [changing, setChanging] = (0, import_react.useState)(false);
	const [pwError, setPwError] = (0, import_react.useState)(void 0);
	const [pwDone, setPwDone] = (0, import_react.useState)(false);
	const hasPerson = Boolean(profile?.person);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			try {
				const data = await handler.accessProfileGet({}, {});
				if (cancelled) return;
				setProfileState(data);
				setFirstName(data.person?.firstName ?? "");
				setLastName(data.person?.lastName ?? "");
				setEmailAddress(data.emailAddress ?? "");
				setPreferredLanguage(data.preferredLanguage ?? "en");
			} catch (error) {
				if (!cancelled) setLoadError(error.message ?? "Failed to load profile");
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [handler]);
	const onSave = (0, import_react.useCallback)(async () => {
		setSaving(true);
		setSaved(false);
		setSaveError(void 0);
		try {
			await handler.accessProfileEdit({
				firstName: hasPerson ? firstName || null : void 0,
				lastName: hasPerson ? lastName || null : void 0,
				emailAddress: emailAddress || null,
				preferredLanguage
			}, {});
			setSaved(true);
			const name = [firstName, lastName].filter(Boolean).join(" ") || void 0;
			const initials = name ? name.trim().split(/\s+/).filter(Boolean).map((p) => p[0]).join("").slice(0, 2).toUpperCase() : void 0;
			setProfile({
				actorId: profile?.userId ?? "",
				name,
				initials,
				language: preferredLanguage
			});
		} catch (error) {
			setSaveError(error.message ?? "Failed to save profile");
		} finally {
			setSaving(false);
		}
	}, [
		handler,
		hasPerson,
		firstName,
		lastName,
		emailAddress,
		preferredLanguage,
		setProfile,
		profile?.userId
	]);
	const onChangePassword = (0, import_react.useCallback)(async () => {
		setPwError(void 0);
		setPwDone(false);
		if (newPassword !== confirmPassword) {
			setPwError(tr("Passwords do not match"));
			return;
		}
		setChanging(true);
		try {
			await handler.accessProfilePasswordChange({
				currentPassword,
				newPassword
			}, {});
			setPwDone(true);
			setCurrentPassword("");
			setNewPassword("");
			setConfirmPassword("");
		} catch (error) {
			setPwError(error.message ?? "Password change failed");
		} finally {
			setChanging(false);
		}
	}, [
		handler,
		currentPassword,
		newPassword,
		confirmPassword,
		tr
	]);
	if (loadError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "access-profile",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
			severity: "error",
			text: loadError
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "access-profile grid col align-self-start max-w-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-12 xl:col-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: tr("Profile"),
				children: [profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "access-profile__account",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: profile.userName ?? profile.userId }), profile.isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "access-profile__active",
						children: tr("Active")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "access-profile__inactive",
						children: tr("Inactive")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "access-profile__form",
					onSubmit: (e) => {
						e.preventDefault();
						onSave();
					},
					children: [
						hasPerson && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "access-profile-firstName",
								className: "col-12 md:col-4",
								children: tr("First Name")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex align-items-center col-12 md:col-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
									id: "access-profile-firstName",
									name: "firstName",
									className: "w-full",
									value: firstName,
									onChange: (e) => setFirstName(e.target.value)
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "access-profile-lastName",
								className: "col-12 md:col-4",
								children: tr("Last Name")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex align-items-center col-12 md:col-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
									id: "access-profile-lastName",
									name: "lastName",
									className: "w-full",
									value: lastName,
									onChange: (e) => setLastName(e.target.value)
								})
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "access-profile-email",
								className: "col-12 md:col-4",
								children: tr("Email")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex align-items-center col-12 md:col-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputText, {
									id: "access-profile-email",
									name: "emailAddress",
									className: "w-full",
									value: emailAddress,
									onChange: (e) => setEmailAddress(e.target.value)
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "access-profile-language",
								className: "col-12 md:col-4",
								children: tr("Preferred Language")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex align-items-center col-12 md:col-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
									id: "access-profile-language",
									name: "preferredLanguage",
									className: "w-full",
									value: preferredLanguage,
									options: LANGUAGES,
									onChange: (e) => setPreferredLanguage(e.target.value)
								})
							})]
						}),
						saveError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
							severity: "error",
							text: saveError,
							className: "access-profile__msg"
						}),
						saved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
							severity: "success",
							text: tr("Profile saved"),
							className: "access-profile__msg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "access-profile__actions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								label: tr("Save"),
								icon: "pi pi-check",
								loading: saving,
								disabled: !profile,
								onClick: () => void onSave()
							})
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: tr("Change Password"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "access-profile__form",
					onSubmit: (e) => {
						e.preventDefault();
						onChangePassword();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "access-profile-current",
								className: "col-12 md:col-4",
								children: tr("Current Password")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex align-items-center col-12 md:col-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Password, {
									id: "access-profile-current",
									name: "currentPassword",
									className: "w-full",
									value: currentPassword,
									onChange: (e) => setCurrentPassword(e.target.value),
									feedback: false,
									toggleMask: true
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "access-profile-new",
								className: "col-12 md:col-4",
								children: tr("New Password")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex align-items-center col-12 md:col-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Password, {
									id: "access-profile-new",
									name: "newPassword",
									className: "w-full",
									value: newPassword,
									onChange: (e) => setNewPassword(e.target.value),
									feedback: false,
									toggleMask: true
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "field grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "access-profile-confirm",
								className: "col-12 md:col-4",
								children: tr("Confirm New Password")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex align-items-center col-12 md:col-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Password, {
									id: "access-profile-confirm",
									name: "confirmPassword",
									className: "w-full",
									value: confirmPassword,
									onChange: (e) => setConfirmPassword(e.target.value),
									feedback: false,
									toggleMask: true
								})
							})]
						}),
						pwError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
							severity: "error",
							text: pwError,
							className: "access-profile__msg"
						}),
						pwDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Message, {
							severity: "success",
							text: tr("Password changed"),
							className: "access-profile__msg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "access-profile__actions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								label: tr("Change Password"),
								icon: "pi pi-key",
								loading: changing,
								disabled: !profile,
								onClick: () => void onChangePassword()
							})
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "col-12 xl:col-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: tr("Roles"),
				children: profile && profile.roles.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "access-profile__roles",
					children: profile.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "pi pi-shield" }),
						" ",
						role.roleName
					] }, role.roleId))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: tr("No roles assigned") })
			})
		})]
	});
}
var import_react, import_jsx_runtime, LANGUAGES;
function init_accessUserProfilePage$1() {
	return (init_accessUserProfilePage$1 = __esmMin((() => {
		init_src();
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		import_jsx_runtime = require_jsx_runtime();
		LANGUAGES = [{
			value: "en",
			label: "English"
		}, {
			value: "bg",
			label: "Български"
		}];
	})))();
}
init_accessUserProfilePage$1();
export { AccessUserProfilePage };
