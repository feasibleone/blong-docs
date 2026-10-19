import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{G as t,K as n}from"./iframe-DgrHWYYy.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),r={title:`Auth/SelfRegistration`,component:t,tags:[`autodocs`],parameters:{layout:`fullscreen`}},i={args:{onRegister:async e=>{console.log(`register params:`,e),await new Promise(e=>setTimeout(e,1e3))},onGoogle:()=>console.log(`google login clicked`),title:`Marine Science Portal`,orgTitle:`Feasible One`}},a={args:{onRegister:async()=>{throw await new Promise(e=>setTimeout(e,500)),{type:`error.account.exists`,message:`Account with this email already exists`}},onGoogle:()=>console.log(`google login clicked`),title:`Marine Science Portal`}},o={args:{onRegister:async e=>{console.log(`register params:`,e),await new Promise(e=>setTimeout(e,1e3))},title:`Marine Science Portal`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onRegister: async params => {
      console.log('register params:', params);
      await new Promise(r => setTimeout(r, 1000));
    },
    onGoogle: () => console.log('google login clicked'),
    title: 'Marine Science Portal',
    orgTitle: 'Feasible One'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onRegister: async () => {
      await new Promise(r => setTimeout(r, 500));
      throw {
        type: 'error.account.exists',
        message: 'Account with this email already exists'
      };
    },
    onGoogle: () => console.log('google login clicked'),
    title: 'Marine Science Portal'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onRegister: async params => {
      console.log('register params:', params);
      await new Promise(r => setTimeout(r, 1000));
    },
    title: 'Marine Science Portal'
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`WithError`,`PasswordOnly`]})))()}c();export{i as Default,o as PasswordOnly,a as WithError,s as __namedExportsOrder,r as default};