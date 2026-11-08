import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{a as t,n,r,s as i}from"./Theme-BQvuNwfP.js";import{t as a}from"./jsx-runtime-CndCZlyt.js";import{A as o,E as s,j as c}from"./Text-sqnVGo6u.js";import{_ as l,n as u,o as d}from"./shell-CJSSnL-z.js";function f({className:e=``}){let{optionId:n,palette:i,paletteToggle:a,switcher:s,selectTheme:l,selectPalette:f}=r(),m=c(),h=o(`Switch to light mode`),g=o(`Switch to dark mode`);if(!s)return null;let _=i===`dark`,v=_?`light`:`dark`,y=_?h:g,b=_?`pi pi-sun`:`pi pi-moon`;return(0,p.jsxs)(`div`,{className:[`blong-theme-switcher`,e].filter(Boolean).join(` `),children:[(0,p.jsx)(d,{value:n,options:t,optionLabel:`label`,optionValue:`id`,optionGroupLabel:`label`,optionGroupChildren:`items`,onChange:e=>l(e.value),className:`blong-theme-switcher__select`,panelClassName:`blong-theme-switcher__panel`,"aria-label":m(`Theme`)}),a?(0,p.jsx)(u,{type:`button`,icon:b,text:!0,rounded:!0,severity:`secondary`,tooltip:y,tooltipOptions:{position:`bottom`},"aria-label":y,onClick:()=>f(v),className:`blong-theme-switcher__mode`}):null]})}var p;function m(){return(m=e((()=>{s(),l(),n(),i(),p=a();try{f.displayName=`ThemeSwitcher`,f.__docgenInfo={description:`ThemeSwitcher — the theme selector shown in the portal menubar, to the left
of the language switcher.

A dropdown picks the theme family (Light/Dark variants of a family share one
entry; Glass/Wood are standalone). When the selected theme provides both a
light and a dark variant, a single borderless sun/moon icon button appears
next to the dropdown to flip between them. The icon shows the mode the button
switches **to**: a moon while light mode is active, a sun while dark mode is
active.

The choice is written to \`appStore.setTheme\` (persisted to localStorage) and
applied by the \`<Theme>\` provider. Render it inside \`<Theme>\` so \`useTheme()\`
has the effective theme.

Renders nothing when \`IThemeConfig.switcher\` is \`false\`.`,displayName:`ThemeSwitcher`,filePath:`/home/kalin/work/blong/blong/core/blong-browser/src/components/ThemeSwitcher/ThemeSwitcher.tsx`,methods:[],props:{className:{defaultValue:{value:``},declarations:[{fileName:`blong-browser/src/components/ThemeSwitcher/ThemeSwitcher.tsx`,name:`IThemeSwitcherProps`}],description:`Extra class name for the wrapper.`,name:`className`,parent:{fileName:`blong-browser/src/components/ThemeSwitcher/ThemeSwitcher.tsx`,name:`IThemeSwitcherProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{m as n,f as t};