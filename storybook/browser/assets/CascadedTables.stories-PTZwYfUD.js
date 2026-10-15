import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-BV-uFAUz.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Editor/CascadedTables`,component:r},o={person:[{personId:1,fullName:`John Doe`,birthDate:`2000-01-08`,nationalId:`777777777`},{personId:2,fullName:`Jane Doe`,birthDate:`2002-03-18`,nationalId:`888888888`}],document:[{documentId:1,personId:1,documentType:`Passport`,issueDate:`2020-01-01`,expiryDate:`2025-01-01`},{documentId:2,personId:1,documentType:`Driving License`,issueDate:`2020-01-02`,expiryDate:`2025-01-02`},{documentId:3,personId:1,documentType:`Marriage Certificate`,issueDate:`2020-01-03`,expiryDate:`2025-01-03`},{documentId:4,personId:2,documentType:`Passport`,issueDate:`2020-01-04`,expiryDate:`2025-01-04`},{documentId:5,personId:2,documentType:`Driving License`,issueDate:`2020-01-05`,expiryDate:`2025-01-05`}],attachment:[{attachmentId:1,documentId:1,pageNumber:1,contentType:`image/jpeg`,sizeBytes:12345},{attachmentId:2,documentId:1,pageNumber:2,contentType:`image/jpeg`,sizeBytes:23456},{attachmentId:3,documentId:2,pageNumber:1,contentType:`image/png`,sizeBytes:33333},{attachmentId:4,documentId:2,pageNumber:2,contentType:`image/png`,sizeBytes:22222}]},s=()=>(0,i.jsx)(r,{schema:{properties:{person:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,columns:[`fullName`,`nationalId`,`birthDate`]},items:{properties:{personId:{title:`ID`,readOnly:!0},fullName:{title:`Full Name`},nationalId:{title:`National ID`},birthDate:{title:`Birth Date`}}}},document:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,columns:[`documentType`,`issueDate`,`expiryDate`],parent:`person`,master:{personId:`personId`},autoSelect:!0},items:{properties:{documentId:{title:`ID`,readOnly:!0},personId:{title:`Person ID`,readOnly:!0},documentType:{title:`Document Type`},issueDate:{title:`Issue Date`},expiryDate:{title:`Expiry Date`}}}},attachment:{title:``,type:`array`,widget:{type:`table`,selectionMode:`single`,columns:[`pageNumber`,`contentType`,`sizeBytes`],parent:`document`,master:{documentId:`documentId`},autoSelect:!0},items:{properties:{attachmentId:{title:`ID`,readOnly:!0},documentId:{title:`Document ID`,readOnly:!0},pageNumber:{title:`Page`},contentType:{title:`Content Type`},sizeBytes:{title:`Size (bytes)`}}}}}},cards:{person:{label:`Person`,className:`col-12 md:col-4`,widgets:[`person`]},document:{label:`Document`,className:`col-12 md:col-4`,widgets:[`document`]},attachment:{label:`Attachment`,className:`col-12 md:col-4`,widgets:[`attachment`]}},value:o,editable:!0,editMode:!0,layout:`edit`,layouts:{edit:[`person`,`document`,`attachment`]}}),s.play=async({canvas:e,userEvent:t})=>{let n=await e.findByText(`John Doe`);await t.click(n),await new Promise(e=>setTimeout(e,200));let r=e.getByText(`Driving License`);await t.click(r),await new Promise(e=>setTimeout(e,200))},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    person: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        columns: ['fullName', 'nationalId', 'birthDate']
      },
      items: {
        properties: {
          personId: {
            title: 'ID',
            readOnly: true
          },
          fullName: {
            title: 'Full Name'
          },
          nationalId: {
            title: 'National ID'
          },
          birthDate: {
            title: 'Birth Date'
          }
        }
      }
    },
    document: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        columns: ['documentType', 'issueDate', 'expiryDate'],
        parent: 'person',
        master: {
          personId: 'personId'
        },
        autoSelect: true
      },
      items: {
        properties: {
          documentId: {
            title: 'ID',
            readOnly: true
          },
          personId: {
            title: 'Person ID',
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
          }
        }
      }
    },
    attachment: {
      title: '',
      type: 'array',
      widget: {
        type: 'table',
        selectionMode: 'single',
        columns: ['pageNumber', 'contentType', 'sizeBytes'],
        parent: 'document',
        master: {
          documentId: 'documentId'
        },
        autoSelect: true
      },
      items: {
        properties: {
          attachmentId: {
            title: 'ID',
            readOnly: true
          },
          documentId: {
            title: 'Document ID',
            readOnly: true
          },
          pageNumber: {
            title: 'Page'
          },
          contentType: {
            title: 'Content Type'
          },
          sizeBytes: {
            title: 'Size (bytes)'
          }
        }
      }
    }
  }
}} cards={{
  person: {
    label: 'Person',
    className: 'col-12 md:col-4',
    widgets: ['person']
  },
  document: {
    label: 'Document',
    className: 'col-12 md:col-4',
    widgets: ['document']
  },
  attachment: {
    label: 'Attachment',
    className: 'col-12 md:col-4',
    widgets: ['attachment']
  }
}} value={cascadedValue} editable editMode layout="edit" layouts={{
  edit: ['person', 'document', 'attachment']
}} />`,...s.parameters?.docs?.source}}},c=[`CascadedTables`]})))()}l();export{s as CascadedTables,c as __namedExportsOrder,a as default};