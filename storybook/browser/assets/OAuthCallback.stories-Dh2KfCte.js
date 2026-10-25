import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{J as t,q as n}from"./iframe-89H3rE-3.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Auth/OAuthCallback`,component:n,tags:[`autodocs`],parameters:{layout:`fullscreen`}},i={args:{onExchange:async()=>{await new Promise(e=>setTimeout(e,2e3)),console.log(`exchanged`)},title:`Marine Science Portal`}},a={args:{onExchange:async()=>{throw{type:`error.account.invalidGoogleToken`,message:`Invalid Google token`}},title:`Marine Science Portal`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onExchange: async () => {
      await new Promise(r => setTimeout(r, 2000));
      console.log('exchanged');
    },
    title: 'Marine Science Portal'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onExchange: async () => {
      throw {
        type: 'error.account.invalidGoogleToken',
        message: 'Invalid Google token'
      };
    },
    title: 'Marine Science Portal'
  }
}`,...a.parameters?.docs?.source}}},o=[`SigningIn`,`ExchangeError`]})))()}s();export{a as ExchangeError,i as SigningIn,o as __namedExportsOrder,r as default};