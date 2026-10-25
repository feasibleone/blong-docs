import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-BPP04-pw.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Editor/PolymorphicLayout`,component:r},o={properties:{name:{title:`Name`},role:{title:`Role`},registrationNumber:{title:`Registration Number`}}},s={createOrganization:{label:`Create Organization`,className:`col-12`,widgets:[`name`,`registrationNumber`]},editPerson:{label:`Person`,className:`col-12`,widgets:[`name`,`role`]},editOrganization:{label:`Edit Organization`,className:`col-12`,widgets:[`name`,`registrationNumber`]}},c=()=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`},children:[(0,i.jsx)(`div`,{style:{flex:1},children:(0,i.jsx)(r,{schema:o,cards:s,value:{name:`John Doe`,role:`Director`},editable:!0,editMode:!0,layout:`person`,layouts:{person:[`editPerson`]}})}),(0,i.jsx)(`div`,{style:{flex:1},children:(0,i.jsx)(r,{schema:o,cards:s,value:{name:`Acme Inc.`,registrationNumber:`111-111-111`},editable:!0,editMode:!0,layout:`org`,layouts:{org:[`editOrganization`]}})}),(0,i.jsx)(`div`,{style:{flex:1},children:(0,i.jsx)(r,{schema:o,cards:s,editable:!0,editMode:!0,layout:`create`,layouts:{create:[`createOrganization`]}})})]}),c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  alignItems: 'flex-start'
}}>
        <div style={{
    flex: 1
  }}>
            <Editor schema={sharedSchema} cards={sharedCards} value={{
      name: 'John Doe',
      role: 'Director'
    }} editable editMode layout="person" layouts={{
      person: ['editPerson']
    }} />
        </div>
        <div style={{
    flex: 1
  }}>
            <Editor schema={sharedSchema} cards={sharedCards} value={{
      name: 'Acme Inc.',
      registrationNumber: '111-111-111'
    }} editable editMode layout="org" layouts={{
      org: ['editOrganization']
    }} />
        </div>
        <div style={{
    flex: 1
  }}>
            <Editor schema={sharedSchema} cards={sharedCards} editable editMode layout="create" layouts={{
      create: ['createOrganization']
    }} />
        </div>
    </div>`,...c.parameters?.docs?.source}}},l=[`PolymorphicLayout`]})))()}u();export{c as PolymorphicLayout,l as __namedExportsOrder,a as default};