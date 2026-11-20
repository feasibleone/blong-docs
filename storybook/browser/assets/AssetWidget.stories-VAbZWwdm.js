import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,r as n}from"./dispatch-Cz-1plck.js";import{n as r,t as i}from"./AssetWidget-D93W6gDZ.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),r(),a={title:`Widgets/AssetWidget`,component:i,parameters:{layout:`padded`,docs:{description:{component:`\`AssetWidget\` stories — a field that holds a stored file.

The picture a story shows is a \`data:\` URI rather than a \`blob://\` reference, because a storybook has
no store behind it: the resolver leaves such a value alone, which is exactly the case a page has when
somebody pastes a link to a file that lives elsewhere (@@D-842). The document story goes the other way
and points at a reference, with the record answered by a stub — which is what makes the icon choice
visible.`}}},tags:[`autodocs`]},o=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAWklEQVR4nO3OMQEAAAgDoC218B9oD0GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4G0BvX8B37sLZWQAAAAASUVORK5CYII=`,s=e=>({title:`File`,type:`string`,widget:{type:`asset`,namespace:`party`,accept:`image/*`,...e}}),c=()=>void 0,l=e=>n({blobBlobGet:()=>Promise.resolve({key:`report-notes`,namespace:`party`,contentType:e,size:1024,scopes:[`anonymous`],scopeMode:`any`,state:`stored`,temporary:!1,createdAt:new Date(0).toISOString()})}),u={args:{name:`photograph`,schema:s({}),value:null,onChange:c,onBlur:c}},d={args:{name:`photograph`,schema:s({}),value:o,onChange:c,onBlur:c}},f={args:{name:`notes`,schema:s({accept:`application/pdf`}),value:`blob://party/report-notes`,onChange:c,onBlur:c},decorators:[l(`application/pdf`)]},p={args:{name:`photograph`,schema:s({}),value:o,onChange:c,onBlur:c,readOnly:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'photograph',
    schema: schema({}),
    value: null,
    onChange: noop,
    onBlur: noop
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'photograph',
    schema: schema({}),
    value: PICTURE,
    onChange: noop,
    onBlur: noop
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'notes',
    schema: schema({
      accept: 'application/pdf'
    }),
    value: 'blob://party/report-notes',
    onChange: noop,
    onBlur: noop
  },
  decorators: [record('application/pdf')]
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'photograph',
    schema: schema({}),
    value: PICTURE,
    onChange: noop,
    onBlur: noop,
    readOnly: true
  }
}`,...p.parameters?.docs?.source}}},m=[`Empty`,`Picture`,`Document`,`ReadOnly`]})))()}h();export{f as Document,u as Empty,d as Picture,p as ReadOnly,m as __namedExportsOrder,a as default};