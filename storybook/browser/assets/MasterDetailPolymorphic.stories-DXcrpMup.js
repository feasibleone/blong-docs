import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-BV-uFAUz.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Editor/MasterDetailPolymorphic`,component:r},o={shape:[{name:`Big circle`,type:`circle`,radius:100},{name:`Small ellipse`,type:`ellipse`,radius:5,secondRadius:4},{name:`Big square`,type:`square`,side1:100},{name:`Medium triangle`,type:`triangle`,side1:30,side2:40,side3:50},{name:`Small rectangle`,type:`rectangle`,side1:2,side2:4}]},s={className:`col-12 md:col-4`,label:`Shape properties`,watch:`shape`},c=()=>(0,i.jsx)(r,{schema:{properties:{shape:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,columns:[`name`,`type`]},items:{properties:{name:{title:`Name`},type:{title:`Type`},radius:{title:`Radius`},secondRadius:{title:`Second Radius`},side1:{title:`Side Length`},side2:{title:`Second Side`},side3:{title:`Third Side`}}}},radius:{title:`Radius`,type:`number`},secondRadius:{title:`Second Radius`,type:`number`},side1:{title:`Side Length`,type:`number`},side2:{title:`Second Side`,type:`number`},side3:{title:`Third Side`,type:`number`}}},cards:{shapes:{label:`Shapes`,className:`col-12 md:col-4`,widgets:[`shape`]},shapeCircle:{...s,match:{type:`circle`},widgets:[`radius`]},shapeEllipse:{...s,match:{type:`ellipse`},widgets:[`radius`,`secondRadius`]},shapeSquare:{...s,match:{type:`square`},widgets:[`side1`]},shapeRectangle:{...s,match:{type:`rectangle`},widgets:[`side1`,`side2`]},shapeTriangle:{...s,match:{type:`triangle`},widgets:[`side1`,`side2`,`side3`]}},value:o,layout:`edit`,layouts:{edit:[`shapes`,[`shapeCircle`,`shapeSquare`,`shapeTriangle`,`shapeRectangle`,`shapeEllipse`]]}}),c.play=async({canvas:e,userEvent:t})=>{let n=await e.findByText(`Small ellipse`);await t.click(n),await new Promise(e=>setTimeout(e,200))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    shape: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        columns: ['name', 'type']
      },
      items: {
        properties: {
          name: {
            title: 'Name'
          },
          type: {
            title: 'Type'
          },
          radius: {
            title: 'Radius'
          },
          secondRadius: {
            title: 'Second Radius'
          },
          side1: {
            title: 'Side Length'
          },
          side2: {
            title: 'Second Side'
          },
          side3: {
            title: 'Third Side'
          }
        }
      }
    },
    radius: {
      title: 'Radius',
      type: 'number'
    },
    secondRadius: {
      title: 'Second Radius',
      type: 'number'
    },
    side1: {
      title: 'Side Length',
      type: 'number'
    },
    side2: {
      title: 'Second Side',
      type: 'number'
    },
    side3: {
      title: 'Third Side',
      type: 'number'
    }
  }
}} cards={{
  shapes: {
    label: 'Shapes',
    className: 'col-12 md:col-4',
    widgets: ['shape']
  },
  shapeCircle: {
    ...common,
    match: {
      type: 'circle'
    },
    widgets: ['radius']
  },
  shapeEllipse: {
    ...common,
    match: {
      type: 'ellipse'
    },
    widgets: ['radius', 'secondRadius']
  },
  shapeSquare: {
    ...common,
    match: {
      type: 'square'
    },
    widgets: ['side1']
  },
  shapeRectangle: {
    ...common,
    match: {
      type: 'rectangle'
    },
    widgets: ['side1', 'side2']
  },
  shapeTriangle: {
    ...common,
    match: {
      type: 'triangle'
    },
    widgets: ['side1', 'side2', 'side3']
  }
}} value={shapeValue} layout="edit" layouts={{
  edit: ['shapes', ['shapeCircle', 'shapeSquare', 'shapeTriangle', 'shapeRectangle', 'shapeEllipse']]
}} />`,...c.parameters?.docs?.source}}},l=[`MasterDetailPolymorphic`]})))()}u();export{c as MasterDetailPolymorphic,l as __namedExportsOrder,a as default};