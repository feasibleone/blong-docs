import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-CZn93Sqq.js";import{t as n}from"./jsx-runtime-BbDfbRii.js";import{C as r,w as i}from"./api.esm-B9-eE2gj.js";import{$ as a,et as o}from"./iframe-89H3rE-3.js";function s({profile:e}){return(0,c.useEffect)(()=>(i.setState(t=>({...t,auth:{token:`t`,profile:e,permissions:{},isAuthenticated:!0},portal:{tabs:[],activeTabId:null,portalConfig:{name:`app`,title:`App`,profile:{page:`access.user.profile`,get:`access.profile.get`}}}})),()=>{i.setState(e=>({...e,auth:{token:null,profile:null,permissions:{},isAuthenticated:!1},portal:{tabs:[],activeTabId:null,portalConfig:null}}))}),[]),(0,l.jsx)(a,{})}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),r(),o(),l=n(),u={title:`AccountMenu`,component:a,parameters:{layout:`padded`,docs:{description:{component:`AccountMenu stories — the top-right avatar + dropdown in the portal menubar.

The global \`withDispatch\` decorator wraps every story in <App> providing
BlongProvider + Theme context. Each story seeds the Zustand app store with a
known profile + portal profile config, then cleans up on unmount.`}}},tags:[`autodocs`]},d={render:()=>(0,l.jsx)(s,{profile:{actorId:`a`,name:`Jane Doe`,initials:`JD`,language:`en`}})},f={render:()=>(0,l.jsx)(s,{profile:{actorId:`a`,name:`Jane Doe`}})},p={render:()=>(0,l.jsx)(s,{profile:null})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <MenuSetup profile={{
    actorId: 'a',
    name: 'Jane Doe',
    initials: 'JD',
    language: 'en'
  }} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <MenuSetup profile={{
    actorId: 'a',
    name: 'Jane Doe'
  }} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <MenuSetup profile={null} />
}`,...p.parameters?.docs?.source}}},m=[`WithInitials`,`WithNameOnly`,`UnknownUser`]})))()}h();export{p as UnknownUser,d as WithInitials,f as WithNameOnly,m as __namedExportsOrder,u as default};