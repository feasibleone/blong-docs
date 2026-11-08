import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./Login-D6Ov1ucj.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Auth/Login`,component:n,tags:[`autodocs`],parameters:{layout:`centered`}},i={args:{onLogin:async e=>{console.log(`login params:`,e),await new Promise(e=>setTimeout(e,1e3))},title:`Marine Science Portal`}},a={args:{onLogin:async()=>{throw await new Promise(e=>setTimeout(e,500)),{type:`error.auth.invalid`,message:`Invalid username or password`}},title:`Login — Always Fails`}},o=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20width%3D%2264%22%20height%3D%2264%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2232%22%20cy%3D%2232%22%20r%3D%2230%22%20fill%3D%22%230b7285%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14%2038c8-12%2028-12%2036%200%22%20stroke%3D%22%23e3fafc%22%20stroke-width%3D%225%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2232%22%20cy%3D%2222%22%20r%3D%225%22%20fill%3D%22%23e3fafc%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsvg%3E`,s={args:{onLogin:async()=>{await new Promise(e=>setTimeout(e,1e3))},title:`Blong Sport`,logoUrl:o,orgTitle:`Feasible One`,orgIcon:`pi pi-building`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onLogin: async () => {
      await new Promise(r => setTimeout(r, 1000));
    },
    title: 'Blong Sport',
    logoUrl: brandLogo,
    orgTitle: 'Feasible One',
    orgIcon: 'pi pi-building'
  }
}`,...s.parameters?.docs?.source},description:{story:`Branded — the login screen of a suite that named a brand: its own logo above
the form and its organisation below it, instead of the default globe.`,...s.parameters?.docs?.description}}},c=[`Default`,`WithError`,`Branded`]})))()}l();export{s as Branded,i as Default,a as WithError,c as __namedExportsOrder,r as default};