import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{U as n,W as r}from"./iframe-89H3rE-3.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i=t(),a={title:`ThemeSwitcher`,component:n,parameters:{layout:`padded`,docs:{description:{component:"ThemeSwitcher stories — the theme dropdown + dark/light mode toggle rendered\nin the portal menubar, to the left of the language switcher.\n\nThe global `withDispatch` decorator wraps every story in <App>, which renders\n<Theme> — so `useTheme()` resolves and the switcher reflects the story's\n`parameters.theme`. The decorator also resets the persisted theme choice per\nstory, so each story starts from its own `parameters.theme`."}}},tags:[`autodocs`]},o={render:()=>(0,i.jsx)(n,{})},s={render:()=>(0,i.jsx)(n,{}),parameters:{theme:{name:`lara-blue`}}},c={render:()=>(0,i.jsx)(n,{}),parameters:{theme:{name:`saga-blue`}}},l={render:()=>(0,i.jsx)(n,{}),parameters:{theme:{name:`glass`}}},u={render:()=>(0,i.jsx)(n,{}),parameters:{theme:{name:`wood`}}},d={render:()=>(0,i.jsx)(n,{}),parameters:{theme:{switcher:!1}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeSwitcher />
}`,...o.parameters?.docs?.source},description:{story:`The app default (compact + dark → Vela Blue) — a single variant, so no toggle.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeSwitcher />,
  parameters: {
    theme: {
      name: 'lara-blue'
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`A family with both variants — a single sun/moon icon toggle is shown.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeSwitcher />,
  parameters: {
    theme: {
      name: 'saga-blue'
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`A single-variant theme — no toggle.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeSwitcher />,
  parameters: {
    theme: {
      name: 'glass'
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`The blong Glass variant — dark base, no toggle.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeSwitcher />,
  parameters: {
    theme: {
      name: 'wood'
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`The blong Wood variant — dark base, no toggle.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeSwitcher />,
  parameters: {
    theme: {
      switcher: false
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"Config gate — `switcher: false` renders nothing.",...d.parameters?.docs?.description}}},f=[`Default`,`FamilyWithToggle`,`SingleVariant`,`Glass`,`Wood`,`SwitcherDisabled`]})))()}p();export{o as Default,s as FamilyWithToggle,l as Glass,c as SingleVariant,d as SwitcherDisabled,u as Wood,f as __namedExportsOrder,a as default};