import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-BV-uFAUz.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Editor/TabbedLayout`,component:r},o=e=>Array.from({length:e},(e,t)=>`field${t+1}`),s=e=>Object.fromEntries(o(e).map(e=>[e,{title:e}])),c=()=>(0,i.jsx)(r,{schema:{properties:s(4)},cards:{a1:{label:`A 1`,widgets:o(3)},a2:{label:`A 2`,widgets:o(2)},b1:{label:`B 1`,widgets:o(2)},b2:{label:`B 2`,widgets:o(1)},c1:{label:`C 1`,widgets:o(4)},c2:{label:`C 2`,widgets:o(1)},d:{label:`D`,widgets:o(4)},e:{label:`E`,widgets:o(2)},f1:{label:`F 1`,widgets:o(1)},f2:{label:`F 2`,widgets:o(1)},g:{label:`G`,widgets:o(1)}},editable:!0,layout:`edit`,layouts:{edit:{orientation:`top`,items:[{id:`ab`,label:`A and B`,widgets:[[`a1`,`a2`],[`b1`,`b2`]]},{id:`cd`,label:`C and D`,widgets:[[`c1`,`c2`],[`d`]]},{id:`efg`,label:`E, F and G`,widgets:[[`e`],[`f1`,`f2`],[`g`]]}]}}}),c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: mockSchema(4)
}} cards={{
  a1: {
    label: 'A 1',
    widgets: mock(3)
  },
  a2: {
    label: 'A 2',
    widgets: mock(2)
  },
  b1: {
    label: 'B 1',
    widgets: mock(2)
  },
  b2: {
    label: 'B 2',
    widgets: mock(1)
  },
  c1: {
    label: 'C 1',
    widgets: mock(4)
  },
  c2: {
    label: 'C 2',
    widgets: mock(1)
  },
  d: {
    label: 'D',
    widgets: mock(4)
  },
  e: {
    label: 'E',
    widgets: mock(2)
  },
  f1: {
    label: 'F 1',
    widgets: mock(1)
  },
  f2: {
    label: 'F 2',
    widgets: mock(1)
  },
  g: {
    label: 'G',
    widgets: mock(1)
  }
}} editable layout="edit" layouts={{
  edit: {
    orientation: 'top',
    items: [{
      id: 'ab',
      label: 'A and B',
      widgets: [['a1', 'a2'], ['b1', 'b2']]
    }, {
      id: 'cd',
      label: 'C and D',
      widgets: [['c1', 'c2'], ['d']]
    }, {
      id: 'efg',
      label: 'E, F and G',
      widgets: [['e'], ['f1', 'f2'], ['g']]
    }]
  }
}} />`,...c.parameters?.docs?.source}}},l=[`TabbedLayout`]})))()}u();export{c as TabbedLayout,l as __namedExportsOrder,a as default};