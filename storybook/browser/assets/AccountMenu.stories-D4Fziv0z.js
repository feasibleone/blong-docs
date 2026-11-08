import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{t}from"./react-BPZ7Dl3u.js";import{t as n}from"./jsx-runtime-CndCZlyt.js";import{M as r,N as i}from"./Text-sqnVGo6u.js";import{n as a,t as o}from"./AccountMenu-CUGeF_FY.js";function s({profile:e}){return(0,c.useEffect)(()=>(i.setState(t=>({...t,auth:{token:`t`,profile:e,permissions:{},isAuthenticated:!0},portal:{tabs:[],activeTabId:null,portalConfig:{name:`app`,title:`App`,profile:{page:`access.user.profile`,get:`access.profile.get`}}}})),()=>{i.setState(e=>({...e,auth:{token:null,profile:null,permissions:{},isAuthenticated:!1},portal:{tabs:[],activeTabId:null,portalConfig:null}}))}),[]),(0,l.jsx)(o,{})}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),r(),a(),l=n(),u={title:`AccountMenu`,component:o,parameters:{layout:`padded`,docs:{description:{component:`AccountMenu stories — the top-right avatar + dropdown in the portal menubar.

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