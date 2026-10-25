import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-CZn93Sqq.js";import{t as n}from"./jsx-runtime-BbDfbRii.js";import{C as r,w as i}from"./api.esm-B9-eE2gj.js";import{Q as a,Z as o}from"./iframe-89H3rE-3.js";function s({languages:e}){return(0,c.useEffect)(()=>(i.setState(t=>({...t,language:`en`,translations:{},translationsByLanguage:{en:{},bg:{Profile:`Профил`}},portal:{tabs:[],activeTabId:null,portalConfig:{name:`app`,title:`App`,languages:e??[{value:`en`,label:`English`},{value:`bg`,label:`Български`}],translations:{en:{},bg:{Profile:`Профил`}}}}})),()=>{i.setState(e=>({...e,language:`en`,translations:{},translationsByLanguage:{},portal:{tabs:[],activeTabId:null,portalConfig:null}}))}),[]),(0,l.jsx)(o,{})}var c,l,u,d,f,p;function m(){return(m=e((()=>{c=t(),r(),a(),l=n(),u={title:`LanguageSwitcher`,component:o,parameters:{layout:`padded`,docs:{description:{component:`LanguageSwitcher stories — the configurable UI-language selector rendered in
the portal menubar, to the left of the profile menu.

The global \`withDispatch\` decorator wraps every story in <App> providing
BlongProvider + Theme context.  Each story seeds the Zustand app store with
a portal config (languages + translations), then cleans up on unmount.`}}},tags:[`autodocs`]},d={render:()=>(0,l.jsx)(s,{})},f={render:()=>(0,l.jsx)(s,{languages:[{value:`en`,label:`English`}]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Setup />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Setup languages={[{
    value: 'en',
    label: 'English'
  }]} />
}`,...f.parameters?.docs?.source}}},p=[`TwoLanguages`,`SingleLanguage`]})))()}m();export{f as SingleLanguage,d as TwoLanguages,p as __namedExportsOrder,u as default};