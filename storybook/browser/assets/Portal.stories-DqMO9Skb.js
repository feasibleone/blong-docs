import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{t}from"./react-BPZ7Dl3u.js";import{t as n}from"./jsx-runtime-CndCZlyt.js";import{M as r,N as i}from"./Text-sqnVGo6u.js";import{n as a,t as o}from"./Portal-CKsEDqLU.js";import{n as s,t as c}from"./LanguageSwitcher-Da8GbKHp.js";import{n as l,t as u}from"./ThemeSwitcher-6b5Lai9Y.js";import{n as d,t as f}from"./Explorer-BpRJ0VRL.js";import{i as p,t as m}from"./Editor.stories-Du0Lttys.js";import{r as h,t as g}from"./Explorer.stories-kR8lT4Uo.js";function _({tabs:e,portalConfig:t,menubarEnd:n}){return(0,w.useEffect)(()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}});let n=i.getState();return e.forEach(e=>n.openTab(e)),t&&n.setPortalConfig(t),()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}})}},[]),(0,T.jsx)(o,{menubarEnd:n})}function v(){return(0,T.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,T.jsx)(`h2`,{children:`Page One`}),(0,T.jsx)(`p`,{children:`This is the content of page one.`})]})}function y(){return(0,T.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,T.jsx)(`h2`,{children:`Page Two`}),(0,T.jsx)(`p`,{children:`This is the content of page two.`})]})}function b(){return(0,T.jsxs)(`div`,{style:{padding:`2rem`},children:[(0,T.jsx)(`h2`,{children:`Page Three`}),(0,T.jsx)(`p`,{children:`This is the content of page three.`})]})}function x(){throw Error(`This is an intentional error to test the tab error boundary`)}function S(){return(0,w.useEffect)(()=>(i.getState().setPortalConfig({name:`demo`,title:`Demo Portal`,menu:[{title:`View`,items:[`view.pageOne`,`view.pageTwo`]}]}),i.setState(e=>({portal:{...e.portal,tabs:[],activeTabId:null}})),()=>{i.setState({portal:{tabs:[],activeTabId:null,portalConfig:null}})}),[]),(0,T.jsx)(o,{})}function C(e){return(0,T.jsx)(f,{...g.args,...e})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{w=t(),r(),p(),d(),h(),s(),l(),a(),T=n(),E={title:`Portal`,parameters:{layout:`fullscreen`}},D={render:()=>(0,T.jsx)(_,{tabs:[{id:`page1`,actionName:`page1`,params:{},title:`Page 1`,component:v},{id:`page2`,actionName:`page2`,params:{},title:`Page 2`,component:y}]})},O={render:()=>(0,T.jsx)(_,{menubarEnd:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u,{}),(0,T.jsx)(c,{})]}),portalConfig:{name:`app`,title:`App`,languages:[{value:`en`,label:`English`},{value:`bg`,label:`Български`}],translations:{en:{},bg:{}}},tabs:[{id:`page1`,actionName:`page1`,params:{},title:`Page 1`,component:v}]})},k={render:()=>(0,T.jsx)(_,{tabs:[{id:`page1`,actionName:`page1`,params:{},title:`Page 1`,component:v},{id:`page2`,actionName:`page2`,params:{},title:`Page 2`,component:y},{id:`page3`,actionName:`page3`,params:{},title:`Page 3`,component:b}]})},k.play=async({canvas:e,userEvent:t})=>{await t.click(await e.findByText(`Page 2`)),await new Promise(e=>setTimeout(e,100)),await t.click(await e.findByText(`Page 3`))},A={render:()=>(0,T.jsx)(S,{})},A.play=async({canvas:e,userEvent:t})=>{await t.click(await e.findByText(`View`)),await new Promise(e=>setTimeout(e,200)),await t.click(await e.findByText(`Page 1`))},j={render:()=>(0,T.jsx)(_,{tabs:[{id:`ok`,actionName:`ok`,params:{},title:`Working Tab`,component:v},{id:`error-tab`,actionName:`error-tab`,params:{},title:`Error Tab`,component:x}]})},j.play=async({canvas:e,userEvent:t})=>{await t.click(await e.findByText(`Error Tab`))},M={render:()=>(0,T.jsx)(_,{tabs:[{id:`clean`,actionName:`clean`,params:{},title:`Saved`,component:v},{id:`dirty`,actionName:`dirty`,params:{},title:`Unsaved`,component:y,dirty:!0}]})},N={render:()=>(0,T.jsx)(_,{tabs:[{id:`editor`,actionName:`editor`,params:{},title:`Edit Tree`,component:m}]})},P={render:()=>(0,T.jsx)(_,{tabs:[{id:`explorer`,actionName:`explorer`,params:{},title:`Coral List`,component:C}]})},F=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20width%3D%2264%22%20height%3D%2264%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2232%22%20cy%3D%2232%22%20r%3D%2230%22%20fill%3D%22%230b7285%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14%2038c8-12%2028-12%2036%200%22%20stroke%3D%22%23e3fafc%22%20stroke-width%3D%225%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2232%22%20cy%3D%2222%22%20r%3D%225%22%20fill%3D%22%23e3fafc%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsvg%3E`,I={render:()=>(0,T.jsx)(_,{portalConfig:{name:`app`,title:`Blong Sport`,brand:{logoUrl:F},menu:[]},tabs:[{id:`page1`,actionName:`page1`,params:{},title:`Page 1`,component:v}]})},L={render:()=>(0,T.jsx)(_,{portalConfig:{name:`app`,title:`Blong Sport`,brand:{logoUrl:F,orgTitle:`Feasible One`,orgIcon:`pi pi-building`},menu:[]},tabs:[]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup portalConfig={{
    name: 'app',
    title: 'Blong Sport',
    brand: {
      logoUrl: brandLogo
    },
    menu: []
  }} tabs={[{
    id: 'page1',
    actionName: 'page1',
    params: {},
    title: 'Page 1',
    component: PageOne
  }]} />
}`,...I.parameters?.docs?.source},description:{story:`Brand — the suite's mark in the menubar.

The logo is capped at the bar's content height by CSS, so adding it moves
nothing: the tab strip starts at the same offset it did before branding. The
\`Brand\` story's first baseline is the assertion of that.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <PortalSetup portalConfig={{
    name: 'app',
    title: 'Blong Sport',
    brand: {
      logoUrl: brandLogo,
      orgTitle: 'Feasible One',
      orgIcon: 'pi pi-building'
    },
    menu: []
  }} tabs={[]} />
}`,...L.parameters?.docs?.source},description:{story:`BrandWelcome — what the portal shows while no page is open: the large mark,
the portal name and the organisation, centred in the whitespace below the
toolbar.`,...L.parameters?.docs?.description}}},R=[`Basic`,`MenubarEnd`,`MultiplePages`,`WithMenu`,`ErrorTab`,`DirtyTab`,`WithEditor`,`WithExplorer`,`Brand`,`BrandWelcome`]})))()}z();export{D as Basic,I as Brand,L as BrandWelcome,M as DirtyTab,j as ErrorTab,O as MenubarEnd,k as MultiplePages,N as WithEditor,P as WithExplorer,A as WithMenu,R as __namedExportsOrder,E as default};