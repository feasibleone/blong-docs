import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-DBDkXj-L.js";function i({Input:e,Label:t,ErrorLabel:n}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{}),(0,a.jsxs)(`div`,{className:`field grid w-full mx-0`,children:[(0,a.jsx)(t,{className:`col-12 md:col-2`,name:`period`}),(0,a.jsx)(e,{fieldClass:`md:col-4`,name:`period`}),(0,a.jsx)(e,{fieldClass:`md:col-6`,name:`unit`})]})]})}var a,o,s,c;function l(){return(l=e((()=>{n(),a=t(),o={title:`Editor/CustomEditors`,component:r},i.properties=[`period`,`unit`],s=()=>(0,a.jsx)(r,{schema:{properties:{unit:{title:`Unit`,widget:{type:`select`,options:[{value:`minutes`,label:`Minutes`},{value:`hours`,label:`Hours`},{value:`days`,label:`Days`},{value:`months`,label:`Months`}]}},period:{title:`Expiration period`,type:`integer`}}},cards:{edit:{label:`Expiration`,widgets:[`Period`]}},editors:{Period:i},value:{period:5,unit:`days`},editable:!0,editMode:!0,layout:`edit`,layouts:{edit:[`edit`]}}),s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    unit: {
      title: 'Unit',
      widget: {
        type: 'select',
        options: [{
          value: 'minutes',
          label: 'Minutes'
        }, {
          value: 'hours',
          label: 'Hours'
        }, {
          value: 'days',
          label: 'Days'
        }, {
          value: 'months',
          label: 'Months'
        }]
      }
    },
    period: {
      title: 'Expiration period',
      type: 'integer'
    }
  }
}} cards={{
  edit: {
    label: 'Expiration',
    widgets: ['Period']
  }
}} editors={{
  Period
}} value={{
  period: 5,
  unit: 'days'
}} editable editMode layout="edit" layouts={{
  edit: ['edit']
}} />`,...s.parameters?.docs?.source}}},c=[`CustomEditors`]})))()}l();export{s as CustomEditors,c as __namedExportsOrder,o as default};