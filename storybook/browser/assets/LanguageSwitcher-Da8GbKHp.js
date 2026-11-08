import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{t}from"./react-BPZ7Dl3u.js";import{t as n}from"./jsx-runtime-CndCZlyt.js";import{E as r,M as i,N as a,j as o}from"./Text-sqnVGo6u.js";import{_ as s,o as c}from"./shell-CJSSnL-z.js";function l({languages:e}){let t=o(),n=a(e=>e.language),r=a(e=>e.setLanguage),i=a(e=>e.portal.portalConfig),s=(0,u.useMemo)(()=>{let t=e??i?.languages;if(t&&t.length)return t;let n=i?.translations;return n?Object.keys(n).map(e=>({value:e,label:e})):[]},[e,i?.languages,i?.translations]);return s.length<2?null:(0,d.jsx)(c,{value:n,options:s,optionLabel:`label`,optionValue:`value`,onChange:e=>r(e.value),className:`blong-language-switcher`,panelClassName:`blong-language-switcher__panel`,"aria-label":t(`Language`)})}var u,d;function f(){return(f=e((()=>{u=t(),s(),i(),r(),d=n();try{l.displayName=`LanguageSwitcher`,l.__docgenInfo={description:`LanguageSwitcher — the configurable UI-language selector in the portal
menubar, rendered to the left of the profile menu.

It offers ad-hoc (client-side) switching: selecting a language calls
\`appStore.setLanguage\`, which swaps the active translation dictionary and
activates the matching PrimeReact locale.  The choice is NOT persisted to
the user profile — that is the profile page's \`preferredLanguage\` edit.

The available languages are config-driven (\`config.portal.languages\`), with
a fallback to the keys of \`config.portal.translations\`.  When fewer than
two languages are configured the switcher renders nothing.`,displayName:`LanguageSwitcher`,filePath:`/home/kalin/work/blong/blong/core/blong-browser/src/components/LanguageSwitcher/LanguageSwitcher.tsx`,methods:[],props:{languages:{defaultValue:null,declarations:[{fileName:`blong-browser/src/components/LanguageSwitcher/LanguageSwitcher.tsx`,name:`ILanguageSwitcherProps`}],description:`Explicit language list — wins over the portal config
(\`config.portal.languages\`).  When neither is set, the switcher falls
back to the keys of the configured translation dictionaries.`,name:`languages`,parent:{fileName:`blong-browser/src/components/LanguageSwitcher/LanguageSwitcher.tsx`,name:`ILanguageSwitcherProps`},required:!1,tags:{},type:{name:`ILanguageOption[]`}}},tags:{}}}catch{}})))()}export{f as n,l as t};