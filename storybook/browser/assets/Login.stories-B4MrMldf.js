import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{X as t,Y as n}from"./iframe-89H3rE-3.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Auth/Login`,component:n,tags:[`autodocs`],parameters:{layout:`centered`}},i={args:{onLogin:async e=>{console.log(`login params:`,e),await new Promise(e=>setTimeout(e,1e3))},title:`Marine Science Portal`}},a={args:{onLogin:async()=>{throw await new Promise(e=>setTimeout(e,500)),{type:`error.auth.invalid`,message:`Invalid username or password`}},title:`Login — Always Fails`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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