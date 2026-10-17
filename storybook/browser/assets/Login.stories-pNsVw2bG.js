import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{ft as t,pt as n}from"./iframe-T7PRuorM.js";var r,i,a,o;function s(){return(s=e((()=>{n(),r={title:`Auth/Login`,component:t,tags:[`autodocs`],parameters:{layout:`centered`}},i={args:{onLogin:async e=>{console.log(`login params:`,e),await new Promise(e=>setTimeout(e,1e3))},title:`Marine Science Portal`}},a={args:{onLogin:async()=>{throw await new Promise(e=>setTimeout(e,500)),{type:`error.auth.invalid`,message:`Invalid username or password`}},title:`Login — Always Fails`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onLogin: async params => {
      console.log('login params:', params);
      await new Promise(r => setTimeout(r, 1000));
    },
    title: 'Marine Science Portal'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onLogin: async () => {
      await new Promise(r => setTimeout(r, 500));
      throw {
        type: 'error.auth.invalid',
        message: 'Invalid username or password'
      };
    },
    title: 'Login — Always Fails'
  }
}`,...a.parameters?.docs?.source}}},o=[`Default`,`WithError`]})))()}s();export{i as Default,a as WithError,o as __namedExportsOrder,r as default};