import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-CZn93Sqq.js";import{t as n}from"./jsx-runtime-BbDfbRii.js";import{C as r,w as i}from"./api.esm-B9-eE2gj.js";import{G as a,H as o,K as s,Q as c,U as l,V as u,W as d,Z as f}from"./iframe-89H3rE-3.js";import{i as p,t as m}from"./Editor.stories-BtwHEe-T.js";import{r as h,t as g}from"./Explorer.stories-BauVLHZV.js";function _({tabs:e,portalConfig:t,menubarEnd:n}){return(0,w.useEffect)(()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}});let n=i.getState();return e.forEach(e=>n.openTab(e)),t&&n.setPortalConfig(t),()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}})}},[]),(0,T.jsx)(a,{menubarEnd:n})}function v(){return(0,T.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,T.jsx)(`h2`,{children:`Page One`}),(0,T.jsx)(`p`,{children:`This is the content of page one.`})]})}function y(){return(0,T.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,T.jsx)(`h2`,{children:`Page Two`}),(0,T.jsx)(`p`,{children:`This is the content of page two.`})]})}function b(){return(0,T.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,T.jsx)(`h2`,{children:`Page Three`}),(0,T.jsx)(`p`,{children:`This is the content of page three.`})]})}function x(){throw Error(`This is an intentional error to test the tab error boundary`)}function S(){return(0,w.useEffect)(()=>(i.getState().setPortalConfig({name:`demo`,title:`Demo Portal`,menu:[{title:`View`,items:[`view.pageOne`,`view.pageTwo`]}]}),i.setState(e=>({portal:{...e.portal,tabs:[],activeTabId:null}})),()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}})}),[]),(0,T.jsx)(a,{})}function C(e){return(0,T.jsx)(u,{...g.args,...e})}var w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{w=t(),r(),p(),o(),h(),c(),d(),s(),T=n(),E={title:`Portal`,parameters:{layout:`fullscreen`}},D={render:()=>(0,T.jsx)(_,{tabs:[{id:`page1`,actionName:`page1`,params:{},title:`Page 1`,component:v},{id:`page2`,actionName:`page2`,params:{},title:`Page 2`,component:y}]})},O={render:()=>(0,T.jsx)(_,{menubarEnd:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(l,{}),(0,T.jsx)(f,{})]}),portalConfig:{name:`app`,title:`App`,languages:[{value:`en`,label:`English`},{value:`bg`,label:`Български`}],translations:{en:{},bg:{}}},tabs:[{id:`page1`,actionName:`page1`,params:{},title:`Page 1`,component:v}]})},k={render:()=>(0,T.jsx)(_,{tabs:[{id:`page1`,actionName:`page1`,params:{},title:`Page 1`,component:v},{id:`page2`,actionName:`page2`,params:{},title:`Page 2`,component:y},{id:`page3`,actionName:`page3`,params:{},title:`Page 3`,component:b}]})},k.play=async({canvas:e,userEvent:t})=>{await t.click(await e.findByText(`Page 2`)),await new Promise(e=>setTimeout(e,100)),await t.click(await e.findByText(`Page 3`))},A={render:()=>(0,T.jsx)(S,{})},A.play=async({canvas:e,userEvent:t})=>{await t.click(await e.findByText(`View`)),await new Promise(e=>setTimeout(e,200)),await t.click(await e.findByText(`Page 1`))},j={render:()=>(0,T.jsx)(_,{tabs:[{id:`ok`,actionName:`ok`,params:{},title:`Working Tab`,component:v},{id:`error-tab`,actionName:`error-tab`,params:{},title:`Error Tab`,component:x}]})},j.play=async({canvas:e,userEvent:t})=>{await t.click(await e.findByText(`Error Tab`))},M={render:()=>(0,T.jsx)(_,{tabs:[{id:`clean`,actionName:`clean`,params:{},title:`Saved`,component:v},{id:`dirty`,actionName:`dirty`,params:{},title:`Unsaved`,component:y,dirty:!0}]})},N={render:()=>(0,T.jsx)(_,{tabs:[{id:`editor`,actionName:`editor`,params:{},title:`Edit Tree`,component:m}]})},P={render:()=>(0,T.jsx)(_,{tabs:[{id:`explorer`,actionName:`explorer`,params:{},title:`Coral List`,component:C}]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup tabs={[{
    id: 'page1',
    actionName: 'page1',
    params: {},
    title: 'Page 1',
    component: PageOne
  }, {
    id: 'page2',
    actionName: 'page2',
    params: {},
    title: 'Page 2',
    component: PageTwo
  }]} />
}`,...D.parameters?.docs?.source},description:{story:`Basic — portal with two plain-text tabs already open.
Demonstrates tab switching and the close-tab button.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup menubarEnd={<>
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </>} portalConfig={{
    name: 'app',
    title: 'App',
    languages: [{
      value: 'en',
      label: 'English'
    }, {
      value: 'bg',
      label: 'Български'
    }],
    translations: {
      en: {},
      bg: {}
    }
  }} tabs={[{
    id: 'page1',
    actionName: 'page1',
    params: {},
    title: 'Page 1',
    component: PageOne
  }]} />
}`,...O.parameters?.docs?.source},description:{story:`MenubarEnd — the portal menubar with the real App widgets on the right:
the theme switcher (left) and the language switcher.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup tabs={[{
    id: 'page1',
    actionName: 'page1',
    params: {},
    title: 'Page 1',
    component: PageOne
  }, {
    id: 'page2',
    actionName: 'page2',
    params: {},
    title: 'Page 2',
    component: PageTwo
  }, {
    id: 'page3',
    actionName: 'page3',
    params: {},
    title: 'Page 3',
    component: PageThree
  }]} />
}`,...k.parameters?.docs?.source},description:{story:`MultiplePages — portal with three tabs showing different content types.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <WithMenuStory />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup tabs={[{
    id: 'ok',
    actionName: 'ok',
    params: {},
    title: 'Working Tab',
    component: PageOne
  }, {
    id: 'error-tab',
    actionName: 'error-tab',
    params: {},
    title: 'Error Tab',
    component: ErrorPage
  }]} />
}`,...j.parameters?.docs?.source},description:{story:`ErrorTab — one tab whose component throws an error.
Demonstrates the per-tab error boundary: only the failing tab shows an error
message; the rest of the portal remains functional.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup tabs={[{
    id: 'clean',
    actionName: 'clean',
    params: {},
    title: 'Saved',
    component: PageOne
  }, {
    id: 'dirty',
    actionName: 'dirty',
    params: {},
    title: 'Unsaved',
    component: PageTwo,
    dirty: true
  }]} />
}`,...M.parameters?.docs?.source},description:{story:`DirtyTab — demonstrates the unsaved-changes indicator (●) in the tab header.
The second tab is flagged dirty from the start.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup tabs={[{
    id: 'editor',
    actionName: 'editor',
    params: {},
    title: 'Edit Tree',
    component: EditorBasic
  }]} />
}`,...N.parameters?.docs?.source},description:{story:"WithEditor — portal hosting an Editor component in a tab.\nReuses the `Basic` story from Editor.stories — same fixture data, same layout.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup tabs={[{
    id: 'explorer',
    actionName: 'explorer',
    params: {},
    title: 'Coral List',
    component: ExplorerTab
  }]} />
}`,...P.parameters?.docs?.source}}},F=[`Basic`,`MenubarEnd`,`MultiplePages`,`WithMenu`,`ErrorTab`,`DirtyTab`,`WithEditor`,`WithExplorer`]})))()}I();export{D as Basic,M as DirtyTab,j as ErrorTab,O as MenubarEnd,k as MultiplePages,N as WithEditor,P as WithExplorer,A as WithMenu,F as __namedExportsOrder,E as default};