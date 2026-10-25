import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-BPP04-pw.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Editor/CascadedTablesVariant`,component:r},o={roleCategory:[{actionCategoryId:478,label:`Manage Users`,hasSettings:!0},{actionCategoryId:681,label:`Manage History`,hasSettings:!1},{actionCategoryId:259,label:`Manage Content Items and Translations`,hasSettings:!1}],permission:[{actionCategoryId:259,actionId:1006,actionName:`Add Item`,hasRight:!0},{actionCategoryId:259,actionId:1025,actionName:`Edit Item`,hasRight:!1},{actionCategoryId:259,actionId:1029,actionName:`Enable / Disable Item`,hasRight:!1},{actionCategoryId:478,actionId:1008,actionName:`Add User`,hasRight:!0},{actionCategoryId:478,actionId:1011,actionName:`Authorize Changes`,hasRight:!1},{actionCategoryId:478,actionId:1014,actionName:`Clear Unsuccessful Login Attempts`,hasRight:!1},{actionCategoryId:478,actionId:1020,actionName:`Delete User`,hasRight:!1},{actionCategoryId:478,actionId:1028,actionName:`Edit User`,hasRight:!1},{actionCategoryId:681,actionId:1109,actionName:`Access Policy History Log`,hasRight:!0},{actionCategoryId:681,actionId:1074,actionName:`Agents and Merchants Network History Log`,hasRight:!1},{actionCategoryId:681,actionId:1150,actionName:`Export History`,hasRight:!1}],permissionRole:[{actionId:1008,value:1167,selected:!0,label:`Banks Branch User`},{actionId:1008,value:1168,selected:!0,label:`CBI Admin`},{actionId:1008,value:1169,selected:!0,label:`CBI Auditor`},{actionId:1008,value:1170,selected:!1,label:`CBI Compliance Office User`},{actionId:1109,value:1171,selected:!0,label:`CBI Directorate Admin Checker`},{actionId:1109,value:1172,selected:!1,label:`CBI Directorate Admin Maker`}],document:[{documentId:1,documentType:`Passport`,issueDate:`2020-01-01`,expiryDate:`2025-01-01`,check:!0},{documentId:2,documentType:`Driving License`,issueDate:`2020-01-02`,expiryDate:`2025-01-02`,check:!1},{documentId:3,documentType:`Marriage Certificate`,issueDate:`2020-01-03`,expiryDate:`2025-01-03`,check:!0}]},s=()=>(0,i.jsx)(r,{schema:{properties:{roleCategory:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,actions:{allowAdd:!1,allowDelete:!1,allowEdit:!1},columns:[`label`]},items:{properties:{actionCategoryId:{title:`ID`,readOnly:!0},label:{title:`Category`,readOnly:!0},hasSettings:{title:`Has Settings`,type:`boolean`}}}},permission:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,actions:{allowAdd:!1,allowDelete:!1,allowEdit:!1},columns:[`hasRight`,`actionName`],parent:`$.selected.roleCategory`,master:{actionCategoryId:`actionCategoryId`},autoSelect:!0},items:{properties:{actionCategoryId:{title:`Category ID`,readOnly:!0},actionId:{title:`Action ID`,readOnly:!0},actionName:{title:`Granted Permissions`,readOnly:!0},hasRight:{title:` `,type:`boolean`}}}},permissionRole:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,actions:{allowAdd:!1,allowDelete:!1,allowEdit:!1},columns:[`selected`,`label`],parent:`$.selected.permission`,master:{actionId:`actionId`},autoSelect:!0},items:{properties:{actionId:{title:`Action ID`,readOnly:!0},value:{title:`Value`,readOnly:!0},selected:{title:` `,type:`boolean`},label:{title:`Permissions for Role`}}}},document:{title:``,type:`array`,widget:{type:`table`,actions:{allowEdit:!1},columns:[`documentType`,`issueDate`,`expiryDate`,`check`]},items:{properties:{documentId:{title:`ID`,readOnly:!0},documentType:{title:`Document Type`},issueDate:{title:`Issue Date`},expiryDate:{title:`Expiry Date`},check:{title:`Check`,type:`boolean`}}}}}},cards:{roleCategory:{label:void 0,className:`col-12 md:col-4`,widgets:[`roleCategory`]},permission:{label:void 0,className:`col-12 md:col-4`,widgets:[`permission`]},permissionRole:{label:void 0,className:`col-12 md:col-4`,widgets:[`permissionRole`]},document:{label:`Document`,className:`col-12`,widgets:[`document`]}},value:o,editable:!0,editMode:!0,layout:`edit`,layouts:{edit:{orientation:`left`,items:[{id:`permissions`,label:`Permission settings`,widgets:[`roleCategory`,`permission`,`permissionRole`]},{id:`documents`,label:`Documents`,widgets:[`document`]}]}}}),s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    roleCategory: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        actions: {
          allowAdd: false,
          allowDelete: false,
          allowEdit: false
        },
        columns: ['label']
      },
      items: {
        properties: {
          actionCategoryId: {
            title: 'ID',
            readOnly: true
          },
          label: {
            title: 'Category',
            readOnly: true
          },
          hasSettings: {
            title: 'Has Settings',
            type: 'boolean'
          }
        }
      }
    },
    permission: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        actions: {
          allowAdd: false,
          allowDelete: false,
          allowEdit: false
        },
        columns: ['hasRight', 'actionName'],
        parent: '$.selected.roleCategory',
        master: {
          actionCategoryId: 'actionCategoryId'
        },
        autoSelect: true
      },
      items: {
        properties: {
          actionCategoryId: {
            title: 'Category ID',
            readOnly: true
          },
          actionId: {
            title: 'Action ID',
            readOnly: true
          },
          actionName: {
            title: 'Granted Permissions',
            readOnly: true
          },
          hasRight: {
            title: ' ',
            type: 'boolean'
          }
        }
      }
    },
    permissionRole: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        actions: {
          allowAdd: false,
          allowDelete: false,
          allowEdit: false
        },
        columns: ['selected', 'label'],
        parent: '$.selected.permission',
        master: {
          actionId: 'actionId'
        },
        autoSelect: true
      },
      items: {
        properties: {
          actionId: {
            title: 'Action ID',
            readOnly: true
          },
          value: {
            title: 'Value',
            readOnly: true
          },
          selected: {
            title: ' ',
            type: 'boolean'
          },
          label: {
            title: 'Permissions for Role'
          }
        }
      }
    },
    document: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        actions: {
          allowEdit: false
        },
        columns: ['documentType', 'issueDate', 'expiryDate', 'check']
      },
      items: {
        properties: {
          documentId: {
            title: 'ID',
            readOnly: true
          },
          documentType: {
            title: 'Document Type'
          },
          issueDate: {
            title: 'Issue Date'
          },
          expiryDate: {
            title: 'Expiry Date'
          },
          check: {
            title: 'Check',
            type: 'boolean'
          }
        }
      }
    }
  }
}} cards={{
  roleCategory: {
    label: undefined,
    className: 'col-12 md:col-4',
    widgets: ['roleCategory']
  },
  permission: {
    label: undefined,
    className: 'col-12 md:col-4',
    widgets: ['permission']
  },
  permissionRole: {
    label: undefined,
    className: 'col-12 md:col-4',
    widgets: ['permissionRole']
  },
  document: {
    label: 'Document',
    className: 'col-12',
    widgets: ['document']
  }
}} value={variantValue} editable editMode layout="edit" layouts={{
  edit: {
    orientation: 'left',
    items: [{
      id: 'permissions',
      label: 'Permission settings',
      widgets: ['roleCategory', 'permission', 'permissionRole']
    }, {
      id: 'documents',
      label: 'Documents',
      widgets: ['document']
    }]
  }
}} />`,...s.parameters?.docs?.source}}},c=[`CascadedTablesVariant`]})))()}l();export{s as CascadedTablesVariant,c as __namedExportsOrder,a as default};