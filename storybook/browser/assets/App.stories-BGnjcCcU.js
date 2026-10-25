import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-CZn93Sqq.js";import{t as n}from"./jsx-runtime-BbDfbRii.js";import{C as r,w as i}from"./api.esm-B9-eE2gj.js";import{G as a,K as o,X as s,Y as c}from"./iframe-89H3rE-3.js";function l(){return(0,b.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,b.jsx)(`h2`,{children:`Dashboard`}),(0,b.jsx)(`p`,{children:`Welcome to the Marine Biology Portal. Select an item from the menu to get started.`})]})}function u({tabs:e,portalConfig:t}){return(0,y.useEffect)(()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}});let n=i.getState();return n.setToken(`demo-token`),e.forEach(e=>n.openTab(e)),t&&n.setPortalConfig(t),()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}}),n.logout()}},[e,t]),(0,b.jsx)(a,{})}function d(){return(0,b.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`0.5rem`},children:[(0,b.jsx)(`div`,{style:{color:`var(--text-color)`,fontSize:`1.1rem`,fontWeight:500},children:`Marine Biology Research Platform`}),(0,b.jsx)(`div`,{style:{color:`var(--text-color-secondary)`,fontSize:`0.875rem`},children:`Data collection & analysis`})]})}function f(e){return(0,b.jsx)(c,{onLogin:async()=>{await new Promise(e=>setTimeout(e,800)),i.getState().setToken(`demo-token`)},title:`Marine Biology Portal`,logoIcon:`pi pi-globe`})}function p(){return(0,b.jsxs)(`div`,{style:{textAlign:`center`,opacity:.75},children:[(0,b.jsx)(`div`,{style:{color:`var(--text-color-secondary)`,fontSize:`0.8rem`,marginBottom:`0.25rem`},children:`Powered by`}),(0,b.jsx)(`div`,{style:{color:`var(--text-color-secondary)`,fontSize:`0.95rem`,fontWeight:500},children:`FeasibleOne Platform`})]})}function m(e){return(0,b.jsx)(c,{onLogin:async()=>{await new Promise(e=>setTimeout(e,800)),i.getState().setToken(`demo-token`)},title:`Marine Biology Portal`,logoIcon:`pi pi-globe`,titleComponent:d,orgComponent:p})}function h(e){return(0,b.jsx)(c,{onLogin:async()=>{await new Promise(e=>setTimeout(e,800)),i.getState().setToken(`demo-token`)},title:`Marine Biology Portal`,logoIcon:`pi pi-globe`,titleComponent:d,orgComponent:p,registerPage:`user.selfRegistration`})}function g(e){return(0,b.jsx)(c,{onLogin:async()=>{await new Promise(e=>setTimeout(e,800)),i.getState().setToken(`demo-token`)},title:`Портал за морска биология`,logoIcon:`pi pi-globe`})}function _(e){return(0,b.jsx)(c,{onLogin:async()=>{throw await new Promise(e=>setTimeout(e,500)),Error(`Invalid username or password`)},title:`Marine Biology Portal`,logoIcon:`pi pi-globe`})}function v(){return(0,y.useEffect)(()=>{i.getState().logout()},[]),(0,b.jsx)(b.Fragment,{})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{y=t(),r(),s(),o(),b=n(),x={title:`App`,parameters:{layout:`fullscreen`}},S={name:`marine-biology`,title:`Marine Biology Portal`,menu:[{title:`Data`,items:[{title:`Species`,method:`app.species`,icon:`pi pi-list`},{title:`Reports`,method:`app.reports`,icon:`pi pi-chart-bar`}]}]},C=[{id:`dashboard`,actionName:`dashboard`,params:{},title:`Dashboard`,component:l}],w={render:()=>(0,b.jsx)(u,{tabs:C,portalConfig:S})},T={render:()=>(0,b.jsx)(u,{tabs:C,portalConfig:S}),play:async({canvas:e,userEvent:t})=>{await t.click(await e.findByText(`Data`)),await t.click(await e.findByText(`Species`)),await new Promise(e=>setTimeout(e,300))}},E={args:{lang:`bg`},render:()=>(0,b.jsx)(u,{tabs:[{id:`dashboard`,actionName:`dashboard`,params:{},title:`Табло`,component:l}],portalConfig:{...S,title:`Портал за морска биология`,menu:[{title:`Данни`,items:[{title:`Видове`,method:`app.species`,icon:`pi pi-list`},{title:`Справки`,method:`app.reports`,icon:`pi pi-chart-bar`}]}]}})},D={parameters:{loginComponent:f},render:()=>(0,b.jsx)(v,{})},O={parameters:{loginComponent:m},render:()=>(0,b.jsx)(v,{})},O.storyName=`Login With Title`,k={parameters:{loginComponent:h},render:()=>(0,b.jsx)(v,{})},k.storyName=`Login With Register`,A={args:{lang:`bg`},parameters:{loginComponent:g},render:()=>(0,b.jsx)(v,{})},A.storyName=`Bulgarian Login`,j={parameters:{loginComponent:_},play:async({canvas:e,userEvent:t})=>{await t.type(await e.findByLabelText(`Username`),`testUser`),await t.type(await e.findByLabelText(`Password`),`wrongPassword`),await t.click(await e.findByRole(`button`,{name:/^login$/i}))},render:()=>(0,b.jsx)(v,{})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <PortalApp tabs={portalInitialTabs} portalConfig={portalConfig} />
}`,...w.parameters?.docs?.source},description:{story:`WithPortal — the full authenticated application shell.
Dashboard tab is open by default; the menu lets the user open Species/Reports.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <PortalApp tabs={portalInitialTabs} portalConfig={portalConfig} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    // Open the 'Data' sub-menu
    await userEvent.click(await canvas.findByText('Data' as never));
    // Click the 'Species' item
    await userEvent.click(await canvas.findByText('Species' as never));
    await new Promise(r => setTimeout(r, 300));
  }
}`,...T.parameters?.docs?.source},description:{story:`Navigate — play() opens the Data menu and navigates to the Species page.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    lang: 'bg'
  },
  render: () => <PortalApp tabs={[{
    id: 'dashboard',
    actionName: 'dashboard',
    params: {},
    title: 'Табло',
    component: DashboardPage
  }]} portalConfig={{
    ...portalConfig,
    title: 'Портал за морска биология',
    menu: [{
      title: 'Данни',
      items: [{
        title: 'Видове',
        method: 'app.species',
        icon: 'pi pi-list'
      }, {
        title: 'Справки',
        method: 'app.reports',
        icon: 'pi pi-chart-bar'
      }]
    }]
  }} />
}`,...E.parameters?.docs?.source},description:{story:"BulgarianPortal — authenticated portal with Bulgarian UI labels.\nPass `lang: 'bg'` — the global decorator translates PrimeReact widgets + store labels.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    loginComponent: LoginPage
  },
  render: () => <LogoutOnMount />
}`,...D.parameters?.docs?.source},description:{story:"Login — app in unauthenticated state: shows the login form with brand area.\nThe `loginComponent` parameter is forwarded to <App> by the global `withDispatch`\ndecorator. App renders it when `auth.isAuthenticated` is false.\nClicking Login sets a demo token and transitions to the portal.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    loginComponent: LoginPageWithTitle
  },
  render: () => <LogoutOnMount />
}`,...O.parameters?.docs?.source},description:{story:"LoginWithTitle — login screen with the pluggable `titleComponent` slot above\nthe brand area.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    loginComponent: LoginPageWithRegister
  },
  render: () => <LogoutOnMount />
}`,...k.parameters?.docs?.source},description:{story:`LoginWithRegister — login screen with a "Register" button.
Clicking Register dispatches \`component/xxx\` with page \`'user.selfRegistration'\`.
The global mock returns a placeholder registration component for page names
ending with 'Registration', 'Register', or 'SelfRegister'.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    lang: 'bg'
  },
  parameters: {
    loginComponent: BulgarianLoginPage
  },
  render: () => <LogoutOnMount />
}`,...A.parameters?.docs?.source},description:{story:`BulgarianLogin — login page in Bulgarian.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    loginComponent: LoginErrorPage
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.type(await canvas.findByLabelText('Username' as never), 'testUser');
    await userEvent.type(await canvas.findByLabelText('Password' as never), 'wrongPassword');
    await userEvent.click(await canvas.findByRole('button' as never, {
      name: /^login$/i
    }));
  },
  render: () => <LogoutOnMount />
}`,...j.parameters?.docs?.source},description:{story:`LoginError — login attempt always fails; demonstrates the inline form error state.`,...j.parameters?.docs?.description}}},M=[`WithPortal`,`Navigate`,`BulgarianPortal`,`Login`,`LoginWithTitle`,`LoginWithRegister`,`BulgarianLogin`,`LoginError`]})))()}N();export{A as BulgarianLogin,E as BulgarianPortal,D as Login,j as LoginError,k as LoginWithRegister,O as LoginWithTitle,T as Navigate,w as WithPortal,M as __namedExportsOrder,x as default};