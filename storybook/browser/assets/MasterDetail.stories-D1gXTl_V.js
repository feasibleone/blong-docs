import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-BV-uFAUz.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Editor/MasterDetail`,component:r},o={person:[{personId:1,fullName:`John Doe`,birthDate:`2000-01-08`,nationalId:`777777777`},{personId:2,fullName:`Jane Doe`,birthDate:`2002-03-18`,nationalId:`888888888`},{personId:3,fullName:`Alice Smith`,birthDate:`1995-06-12`,nationalId:`123456789`}]},s=()=>(0,i.jsx)(r,{schema:{properties:{person:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,actions:{allowEdit:!1},columns:[`fullName`,`nationalId`]},items:{properties:{personId:{title:`ID`,readOnly:!0},fullName:{title:`Full Name`,required:!0},nationalId:{title:`National ID`},birthDate:{title:`Birth Date`,format:`date`}}}}}},cards:{master:{label:`Persons`,className:`col-12 md:col-4`,widgets:[`person`]},detail:{label:`Personal Information`,className:`col-12 md:col-5`,watch:`$.selected.person`,widgets:[`$.edit.person.fullName`,`$.edit.person.birthDate`,`$.edit.person.nationalId`]}},value:o,editable:!0,editMode:!0,layout:`edit`,layouts:{edit:[`master`,`detail`]}}),s.play=async({canvas:e,userEvent:t})=>{let n=await e.findByText(`John Doe`);await t.click(n),await new Promise(e=>setTimeout(e,200))},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    person: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        actions: {
          allowEdit: false
        },
        columns: ['fullName', 'nationalId']
      },
      items: {
        properties: {
          personId: {
            title: 'ID',
            readOnly: true
          },
          fullName: {
            title: 'Full Name',
            required: true
          },
          nationalId: {
            title: 'National ID'
          },
          birthDate: {
            title: 'Birth Date',
            format: 'date'
          }
        }
      }
    }
  }
}} cards={{
  master: {
    label: 'Persons',
    className: 'col-12 md:col-4',
    widgets: ['person']
  },
  detail: {
    label: 'Personal Information',
    className: 'col-12 md:col-5',
    watch: '$.selected.person',
    widgets: ['$.edit.person.fullName', '$.edit.person.birthDate', '$.edit.person.nationalId']
  }
}} value={personValue} editable editMode layout="edit" layouts={{
  edit: ['master', 'detail']
}} />`,...s.parameters?.docs?.source}}},c=[`MasterDetail`]})))()}l();export{s as MasterDetail,c as __namedExportsOrder,a as default};