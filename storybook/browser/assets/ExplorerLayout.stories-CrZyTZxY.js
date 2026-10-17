import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-CRTIOuW3.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),a={title:`Editor/Explorer`,component:r,parameters:{layout:`fullscreen`}},o=[{label:`Create`,icon:`pi pi-plus`,method:`coralCoralAdd`},{label:`Edit`,icon:`pi pi-pencil`,enabled:`current`,method:`coralCoralEdit`,params:"${current}"},{label:`Delete`,icon:`pi pi-trash`,enabled:`selected`,confirm:`Delete selected corals?`,method:`coralCoralDelete`,params:{id:"${id}"}}],s={title:``,type:`array`,widget:{type:`table`,listAction:`coralCoralFind`,resultSet:`items`,keyField:`coralId`,selectionMode:`single`,columns:[`coralName`,`coralType`,`maxDepth`,`endangered`]},items:{properties:{coralId:{title:`ID`,readOnly:!0},coralName:{title:`Name`},coralType:{title:`Type`},maxDepth:{title:`Max Depth`},endangered:{title:`Endangered`,type:`boolean`}}}},c=()=>(0,i.jsx)(r,{schema:{properties:{coral:s}},toolbar:o,cards:{table:{label:``,widgets:[`coral`]}},layout:`edit`,layouts:{edit:[`table`]},editable:!1,editMode:!1}),l=()=>(0,i.jsx)(r,{schema:{properties:{coral:s}},toolbar:o,cards:{table:{label:``,widgets:[`coral`]},detail:{label:`Coral Details`,readOnly:!0,watch:`$.selected.coral`,widgets:[`$.edit.coral.coralName`,`$.edit.coral.coralType`,`$.edit.coral.maxDepth`,`$.edit.coral.endangered`]}},layout:`edit`,layouts:{edit:{type:`split`,panels:[{size:65,minSize:30,cards:[`table`]},{size:35,minSize:20,cards:[`detail`]}]}},editable:!1,editMode:!1}),l.play=async({canvas:e,userEvent:t})=>{let n=await e.findAllByText(`Pillar Coral`);await t.click(n[0]),await new Promise(e=>setTimeout(e,200))},u=()=>(0,i.jsx)(r,{schema:{properties:{category:{title:``,type:`array`,widget:{type:`navigator`,listAction:`coralCategoryFind`,keyField:`id`,parentField:`parentId`,labelField:`name`},items:{properties:{id:{title:`ID`},parentId:{title:`Parent`},name:{title:`Name`}}}},coral:{title:``,type:`array`,widget:{type:`table`,listAction:`coralCoralFind`,keyField:`coralId`,selectionMode:`single`,columns:[`coralName`,`coralType`,`maxDepth`],parent:`$.selected.category`,master:{categoryId:`id`}},items:{properties:{id:{title:`ID`},categoryId:{title:`Category`,readOnly:!0},coralName:{title:`Name`},coralType:{title:`Type`},maxDepth:{title:`Max Depth`}}}}}},toolbar:o,cards:{nav:{label:`Categories`,widgets:[`category`]},table:{label:``,widgets:[`coral`]},detail:{label:`Coral Details`,readOnly:!0,watch:`$.selected.coral`,widgets:[`$.edit.coral.coralName`,`$.edit.coral.coralType`,`$.edit.coral.maxDepth`]}},layout:`edit`,layouts:{edit:{type:`split`,panels:[{size:20,minSize:10,cards:[`nav`]},{size:50,minSize:30,cards:[`table`]},{size:30,minSize:15,cards:[`detail`]}]}},editable:!1,editMode:!1}),u.play=async({canvas:e,userEvent:t})=>{let n=await e.findAllByText(`Shallow Reef`);await t.click(n[0]),await new Promise(e=>setTimeout(e,200));let r=await e.findAllByText(`Table Coral`);await t.click(r[0]),await new Promise(e=>setTimeout(e,200))},d=()=>(0,i.jsx)(r,{schema:{properties:{coral:s}},toolbar:o,cards:{table:{label:``,className:`col-12`,widgets:[`coral`]}},layout:`edit`,layouts:{edit:{items:[{id:`list`,label:`Coral List`,icon:`pi pi-table`,widgets:[`table`]}]}},editable:!1,editMode:!1}),f=()=>(0,i.jsx)(r,{schema:{properties:{coral:s}},toolbar:o,cards:{table:{label:``,widgets:[`coral`]},detail:{label:`Details`,readOnly:!0,watch:`$.selected.coral`,widgets:[`$.edit.coral.coralName`,`$.edit.coral.coralType`,`$.edit.coral.maxDepth`]}},layout:`edit`,layouts:{edit:{type:`split`,orientation:`vertical`,panels:[{size:60,cards:[`table`]},{size:40,cards:[`detail`]}]}},editable:!1,editMode:!1}),p=()=>(0,i.jsx)(`div`,{style:{height:600,display:`flex`,flexDirection:`column`},children:(0,i.jsx)(r,{schema:{properties:{coral:s}},toolbar:o,cards:{table:{label:`Coral List`,className:`col-12 md:col-7`,widgets:[`coral`]},detail:{label:`Details`,className:`col-12 md:col-5`,readOnly:!0,watch:`$.selected.coral`,widgets:[`$.edit.coral.coralName`,`$.edit.coral.coralType`,`$.edit.coral.maxDepth`]}},layout:`edit`,layouts:{edit:[`table`,`detail`]},designable:!0,editMode:!1})}),c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    coral: coralTableField
  }
}} toolbar={coralToolbar} cards={{
  table: {
    label: '',
    widgets: ['coral']
  }
}} layout="edit" layouts={{
  edit: ['table']
}} editable={false} editMode={false} />`,...c.parameters?.docs?.source},description:{story:`Default — a single table card that loads coral list from the server.
Action buttons (Create / Edit / Delete) live on the Editor toolbar.
Edit and Delete are disabled until a row is selected.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    coral: coralTableField
  }
}} toolbar={coralToolbar} cards={{
  table: {
    label: '',
    widgets: ['coral']
  },
  detail: {
    label: 'Coral Details',
    readOnly: true,
    watch: '$.selected.coral',
    widgets: ['$.edit.coral.coralName', '$.edit.coral.coralType', '$.edit.coral.maxDepth', '$.edit.coral.endangered']
  }
}} layout="edit" layouts={{
  edit: {
    type: 'split',
    panels: [{
      size: 65,
      minSize: 30,
      cards: ['table']
    }, {
      size: 35,
      minSize: 20,
      cards: ['detail']
    }]
  } as ISplitLayoutConfig
}} editable={false} editMode={false} />`,...l.parameters?.docs?.source},description:{story:`WithDetails — selecting a row populates an editable detail card on the right.
Uses the master-detail pattern via \`watch: '$.selected.coral'\`.
The detail card fields are populated directly from the selected row even though
the table loads data via \`listAction\` (the form has no server data of its own).
Action buttons in the Editor toolbar are enabled/disabled based on selection.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    // Navigator widget — tree nav
    category: {
      title: '',
      type: 'array',
      widget: {
        type: 'navigator',
        listAction: 'coralCategoryFind',
        keyField: 'id',
        parentField: 'parentId',
        labelField: 'name'
      },
      items: {
        properties: {
          id: {
            title: 'ID'
          },
          parentId: {
            title: 'Parent'
          },
          name: {
            title: 'Name'
          }
        }
      }
    },
    // Table widget — cascaded from navigator selection; no widget-level toolbar
    coral: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        listAction: 'coralCoralFind',
        keyField: 'coralId',
        selectionMode: 'single',
        columns: ['coralName', 'coralType', 'maxDepth'],
        parent: '$.selected.category',
        master: {
          categoryId: 'id'
        }
      },
      items: {
        properties: {
          id: {
            title: 'ID'
          },
          categoryId: {
            title: 'Category',
            readOnly: true
          },
          coralName: {
            title: 'Name'
          },
          coralType: {
            title: 'Type'
          },
          maxDepth: {
            title: 'Max Depth'
          }
        }
      }
    }
  }
}}
// Toolbar on Editor — enabled/disabled state driven by coral row selection
toolbar={coralToolbar} cards={{
  nav: {
    label: 'Categories',
    widgets: ['category']
  },
  table: {
    label: '',
    widgets: ['coral']
  },
  detail: {
    label: 'Coral Details',
    readOnly: true,
    watch: '$.selected.coral',
    widgets: ['$.edit.coral.coralName', '$.edit.coral.coralType', '$.edit.coral.maxDepth']
  }
}} layout="edit" layouts={{
  edit: {
    type: 'split',
    panels: [{
      size: 20,
      minSize: 10,
      cards: ['nav']
    }, {
      size: 50,
      minSize: 30,
      cards: ['table']
    }, {
      size: 30,
      minSize: 15,
      cards: ['detail']
    }]
  } as ISplitLayoutConfig
}} editable={false} editMode={false} />`,...u.parameters?.docs?.source},description:{story:`WithNavigator — full three-panel Explorer layout using split layout.
Left panel: NavigatorWidget (tree filtered by parentId).
Centre panel: TableWidget with listAction, cascaded from navigator selection.
Right panel: Detail card showing selected row fields.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    coral: coralTableField
  }
}} toolbar={coralToolbar} cards={{
  table: {
    label: '',
    className: 'col-12',
    widgets: ['coral']
  }
}} layout="edit" layouts={{
  edit: {
    items: [{
      id: 'list',
      label: 'Coral List',
      icon: 'pi pi-table',
      widgets: ['table']
    }]
  }
}} editable={false} editMode={false} />`,...d.parameters?.docs?.source},description:{story:`TabbedExplorer — the same coral data presented in a tabs layout instead of
a split layout. Demonstrates that the Editor's layout system lets you switch
between split and tabs without changing any business logic.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    coral: coralTableField
  }
}} toolbar={coralToolbar} cards={{
  table: {
    label: '',
    widgets: ['coral']
  },
  detail: {
    label: 'Details',
    readOnly: true,
    watch: '$.selected.coral',
    widgets: ['$.edit.coral.coralName', '$.edit.coral.coralType', '$.edit.coral.maxDepth']
  }
}} layout="edit" layouts={{
  edit: {
    type: 'split',
    orientation: 'vertical',
    panels: [{
      size: 60,
      cards: ['table']
    }, {
      size: 40,
      cards: ['detail']
    }]
  } as ISplitLayoutConfig
}} editable={false} editMode={false} />`,...f.parameters?.docs?.source},description:{story:"SplitVertical — toolbar + table on top; detail panel below.\nUses `orientation: 'vertical'` split layout.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <div style={{
  height: 600,
  display: 'flex',
  flexDirection: 'column'
}}>
        <Editor schema={{
    properties: {
      coral: coralTableField
    }
  }} toolbar={coralToolbar} cards={{
    table: {
      label: 'Coral List',
      className: 'col-12 md:col-7',
      widgets: ['coral']
    },
    detail: {
      label: 'Details',
      className: 'col-12 md:col-5',
      readOnly: true,
      watch: '$.selected.coral',
      widgets: ['$.edit.coral.coralName', '$.edit.coral.coralType', '$.edit.coral.maxDepth']
    }
  }} layout="edit" layouts={{
    edit: ['table', 'detail']
  }} designable editMode={false} />
    </div>`,...p.parameters?.docs?.source},description:{story:`Designable — click the cog icon in the toolbar to enter design mode.
Cards can be rearranged to customize the layout.`,...p.parameters?.docs?.description}}},m=[`Default`,`WithDetails`,`WithNavigator`,`TabbedExplorer`,`SplitVertical`,`Designable`]})))()}h();export{c as Default,p as Designable,f as SplitVertical,d as TabbedExplorer,l as WithDetails,u as WithNavigator,m as __namedExportsOrder,a as default};