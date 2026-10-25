import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./react-CZn93Sqq.js";import{t as n}from"./jsx-runtime-BbDfbRii.js";import{C as r,w as i}from"./api.esm-B9-eE2gj.js";import{n as a,t as o}from"./Editor-BPP04-pw.js";function s(e,t,n,r={}){return(0,f.jsx)(o,{schema:{properties:{survey:{title:``,type:`array`,items:{type:`object`,properties:e},widget:{type:`table`,columns:t,...r.inlineEdit?{inlineEdit:!0}:{},...r.readOnly?{actions:{allowAdd:!1,allowDelete:!1,allowEdit:!1}}:{}}}}},cards:{survey:{label:r.label??``,className:`col-12`,readOnly:r.readOnly,widgets:[`survey`]}},dropdowns:{reef:g,discipline:_},value:{survey:n},editable:!r.readOnly,editMode:!0,layout:`edit`,layouts:{edit:[`survey`]}})}function c({scope:e,config:t,children:n}){let r=i(e=>e.setFormat),a=JSON.stringify(t),o=(0,d.useMemo)(()=>JSON.parse(a),[a]);return(0,d.useEffect)(()=>(r(e,o),()=>r(e,void 0)),[e,o,r]),(0,f.jsx)(f.Fragment,{children:n})}function l({language:e,children:t}){let n=i(e=>e.setLanguage);return(0,d.useEffect)(()=>(n(e),()=>n(`en`)),[e,n]),(0,f.jsx)(f.Fragment,{children:t})}function u(e){return s({surveyDate:{title:`Date`,widget:{type:`date`}},loggedAt:{title:`Timestamp`,widget:{type:`dateTime`}},transects:{title:`Transects`,widget:{type:`integer`}},area:{title:`Area (m²)`,widget:{type:`number`,formatOptions:{number:{maximumFractionDigits:1}}}},fee:{title:`Fee`,widget:{type:`currency`}}},[`surveyDate`,`loggedAt`,`transects`,`area`,`fee`],[{surveyDate:`2026-04-02`,loggedAt:`2026-04-02T07:15:32`,transects:2032,area:1275.456,fee:450.5}],{label:e})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{d=t(),r(),a(),f=n(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Editor/TableColumns`,component:o,tags:[`table-columns`]},g=[{value:`r1`,label:`Kelp Canopy`},{value:`r2`,label:`Coral Gardens`},{value:`r3`,label:`Seagrass Meadow`}],_=[{value:`d1`,label:`Transect`,reefId:`r1`},{value:`d2`,label:`Photo Quadrat`,reefId:`r2`},{value:`d3`,label:`Sediment Core`,reefId:`r3`},{value:`d4`,label:`Fish Census`,reefId:`r1`}],v=()=>s({speciesName:{title:`Species`,sort:!0},reefId:{title:`Reef`,filter:!0,widget:{type:`dropdown`,dropdown:`reef`,body:`reefName`}},observed:{title:`Observed`}},[`speciesName`,`reefId`,`observed`],[{speciesName:`Nerida Kelp`,reefId:`r1`,reefName:`Kelp Canopy`,observed:`2026-04-02`},{speciesName:`Corin Wrasse`,reefId:`r2`,reefName:`Coral Gardens`,observed:`2026-04-03`},{speciesName:`Delphine Porpoise`,reefId:`r3`,reefName:`Seagrass Meadow`,observed:`2026-04-04`}],{label:`Reef, by name — the key is what is stored, the label is what is read`}),y=()=>s({surveyDate:{title:`Date`,widget:{type:`date`}},visibility:{title:`Logged At`,widget:{type:`time`}},loggedAt:{title:`Timestamp`,widget:{type:`dateTime`}},transects:{title:`Transects`,widget:{type:`integer`,sort:!0}},area:{title:`Area (m²)`,widget:{type:`number`,formatOptions:{number:{maximumFractionDigits:1}}}},fee:{title:`Fee`,widget:{type:`currency`,formatOptions:{currency:{currency:`EUR`}}}},confidence:{title:`Confidence`,widget:{type:`percent`}},status:{title:`Status`,widget:{type:`select`,translation:!0,options:[{value:`draft`,label:`Draft`},{value:`published`,label:`Published`}]}}},[`surveyDate`,`visibility`,`loggedAt`,`transects`,`area`,`fee`,`confidence`,`status`],[{surveyDate:`2026-04-02`,visibility:`07:15:00`,loggedAt:`2026-04-02T07:15:32`,transects:2032,area:1275.456,fee:450.5,confidence:.925,status:`published`}],{label:`One value, one formatter — the same text a form shows`}),b=()=>s({speciesName:{title:`Species`},status:{title:`Status`,widget:{compare:`statusBefore`}},depth:{title:`Depth (m)`,widget:{compare:`depthBefore`}}},[`speciesName`,`status`,`depth`],[{speciesName:`Nerida Kelp`,status:`confirmed`,statusBefore:`draft`,depth:12,depthBefore:9},{speciesName:`Corin Wrasse`,status:`confirmed`,statusBefore:`confirmed`,depth:18,depthBefore:18}],{readOnly:!0,label:`What changed — the current value above the one it replaced`}),x=()=>(0,f.jsx)(o,{schema:{properties:{attachment:{title:``,type:`array`,items:{type:`object`,properties:{title:{title:`Document`},file:{title:`File`,widget:{type:`file`}},linked:{title:`Linked`,widget:{type:`file`,download:!0,basePath:`/files/`}}}},widget:{type:`table`,columns:[`title`,`file`,`linked`]}}}},cards:{attachment:{label:`Documents`,className:`col-12`,widgets:[`attachment`]}},value:{attachment:[{title:`Quota confirmation`,file:[{name:`quota.pdf`}],linked:[{name:`quota.pdf`}],hash:`abc123`},{title:`Site photographs`,file:[{name:`reef-01.jpg`},{name:`reef-02.jpg`}],linked:[{name:`reef-01.jpg`}],hash:`def456`}]},editable:!0,editMode:!0,layout:`edit`,layouts:{edit:[`attachment`]}}),S=()=>s({speciesName:{title:`Species`},approved:{title:`Approved`,widget:{type:`radio`}},picked:{title:`Pick`,widget:{type:`selectTableRadio`}},archived:{title:`Archived`,widget:{cycle:`tri-state`}}},[`speciesName`,`approved`,`picked`,`archived`],[{speciesName:`Nerida Kelp`,approved:!0,picked:!0,archived:null},{speciesName:`Corin Wrasse`,approved:!1,picked:!1,archived:!1}],{label:`Radio reads, select-table-radio and cycle write`}),C=()=>s({speciesName:{title:`Species`,sort:!0},depth:{title:`Depth (m)`,sort:!0,widget:{type:`integer`}},transects:{title:`Transects`,sort:!0,widget:{type:`integer`}}},[`speciesName`,`depth`,`transects`],[{speciesName:`Nerida Kelp`,depth:18,transects:12},{speciesName:`Corin Wrasse`,depth:6,transects:4},{speciesName:`Delphine Porpoise`,depth:12,transects:9}],{label:`Click a header — the view sorts, the saved order stays as it is`}),w=()=>s({reefId:{title:`Reef`,widget:{type:`dropdown`,dropdown:`reef`,body:`reefName`}},disciplineId:{title:`Method`,widget:{type:`dropdown`,dropdown:`discipline`,body:`disciplineName`,optionsFilter:{reefId:`reefId`}}}},[`reefId`,`disciplineId`],[{reefId:`r1`,reefName:`Kelp Canopy`,disciplineId:`d1`,disciplineName:`Transect`},{reefId:`r2`,reefName:`Coral Gardens`,disciplineId:`d2`,disciplineName:`Photo Quadrat`}],{label:`A method list narrowed to the row it belongs to — edit a row or add one, then open Method`}),T=()=>s({speciesName:{title:`Species`},reefId:{title:`Reef`,widget:{type:`dropdown`,dropdown:`reef`,body:`reefName`}},disciplineId:{title:`Method`,widget:{type:`dropdown`,dropdown:`discipline`,body:`disciplineName`,optionsFilter:{reefId:`reefId`}}},transects:{title:`Transects`,widget:{type:`integer`}},approved:{title:`Approved`,widget:{type:`boolean`}},observed:{title:`Observed`,readOnly:!0}},[`speciesName`,`reefId`,`disciplineId`,`transects`,`approved`,`observed`],[{speciesName:`Nerida Kelp`,reefId:`r1`,reefName:`Kelp Canopy`,disciplineId:`d1`,disciplineName:`Transect`,transects:12,approved:!0,observed:`2026-04-02`},{speciesName:`Corin Wrasse`,reefId:`r2`,reefName:`Coral Gardens`,disciplineId:`d2`,disciplineName:`Photo Quadrat`,transects:4,approved:!1,observed:`2026-04-03`}],{inlineEdit:!0,label:`Every cell is its own editor — type in it, pick in it, tick it; Observed only reads`}),E=()=>s({speciesName:{title:`Species`},approved:{title:`Approved`,widget:{type:`radio`}},picked:{title:`Pick`,widget:{type:`selectTableRadio`}},archived:{title:`Archived`,widget:{cycle:`tri-state`}},reefId:{title:`Reef`,widget:{type:`dropdown`,dropdown:`reef`,body:`reefName`}}},[`speciesName`,`approved`,`picked`,`archived`,`reefId`],[{speciesName:`Nerida Kelp`,approved:!0,picked:!0,archived:null,reefId:`r1`,reefName:`Kelp Canopy`}],{readOnly:!0,label:`The same cells on a read-only card — a click changes nothing`}),D=()=>(0,f.jsx)(c,{scope:`system`,config:{dateStyle:`full`,hourCycle:`h23`,currency:`BGN`,grouping:`always`},children:u(`The system configuration — full dates, a 24-hour clock, grouped counts`)}),O=()=>(0,f.jsx)(c,{scope:`system`,config:{dateStyle:`short`,hourCycle:`h12`,currency:`BGN`},children:(0,f.jsx)(c,{scope:`user`,config:{hourCycle:`h23`,currency:`USD`,locale:`en-GB`},children:u(`The user's preference over the system's — 24-hour, US dollars, dates in English`)})}),k=()=>(0,f.jsx)(l,{language:`bg`,children:u(`The Bulgarian default — no configuration at all, and the currency is the language’s`)}),C.play=async({canvas:e,userEvent:t})=>{let n=await e.findByText(`Transects`);await t.click(n),await new Promise(e=>setTimeout(e,150))},w.play=async({userEvent:e})=>{let t=e=>new Promise(t=>setTimeout(t,e)),n=()=>Array.from(document.querySelectorAll(`.p-dropdown-item`)).map(e=>e.textContent?.replace(/\s+/g,` `).trim()),r=document.querySelector(`.p-row-editor-init`);if(!r)return;await e.click(r),await t(150);let i=document.querySelectorAll(`.p-datatable-tbody tr`)[0],a=(i?.querySelectorAll(`td`)[2])?.querySelector(`.p-dropdown`);if(!a)return;await e.click(a),await t(150),console.info(`[TableColumns] edited row options`,JSON.stringify(n()));let o=Array.from(document.querySelectorAll(`.p-dropdown-item`)).find(e=>e.textContent?.includes(`Fish Census`));o&&await e.click(o);let s=i?.querySelector(`button[aria-label="Cancel Edit"]`);s&&await e.click(s),await t(200);let c=document.querySelector(`[data-testid$="-addButton"]`);if(!c)return;await e.click(c),await t(300);let l=document.querySelectorAll(`.p-datatable-tbody tr`),u=l[l.length-1],d=u?.querySelectorAll(`td`)[1]?.querySelector(`.p-dropdown`);if(!d)return;await e.click(d),await t(200);let f=Array.from(document.querySelectorAll(`.p-dropdown-item`)).find(e=>e.textContent?.includes(`Coral Gardens`));f&&await e.click(f),await t(300);let p=(u?.querySelectorAll(`td`)[2])?.querySelector(`.p-dropdown`);p&&(await e.click(p),await t(200),console.info(`[TableColumns] added row options`,JSON.stringify(n())))},T.play=async({canvas:e,userEvent:t})=>{p(document.querySelector(`.p-row-editor-init`)).toBeNull();let n=(await e.findByTestId(`survey-0-approved`)).querySelector(`input[type="checkbox"]`);p(n.checked).toBe(!0),await t.click(n),await m(()=>p(n.checked).toBe(!1),{timeout:5e3});let r=await e.findByTestId(`survey-0-observed`);p(r.querySelector(`input`)).toBeNull(),p(r.textContent).toContain(`2026-04-02`)},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => tableStory({
  speciesName: {
    title: 'Species',
    sort: true
  },
  reefId: {
    title: 'Reef',
    filter: true,
    widget: {
      type: 'dropdown' as const,
      dropdown: 'reef',
      body: 'reefName'
    }
  },
  observed: {
    title: 'Observed'
  }
}, ['speciesName', 'reefId', 'observed'], [{
  speciesName: 'Nerida Kelp',
  reefId: 'r1',
  reefName: 'Kelp Canopy',
  observed: '2026-04-02'
}, {
  speciesName: 'Corin Wrasse',
  reefId: 'r2',
  reefName: 'Coral Gardens',
  observed: '2026-04-03'
}, {
  speciesName: 'Delphine Porpoise',
  reefId: 'r3',
  reefName: 'Seagrass Meadow',
  observed: '2026-04-04'
}], {
  label: 'Reef, by name — the key is what is stored, the label is what is read'
})`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => tableStory({
  surveyDate: {
    title: 'Date',
    widget: {
      type: 'date' as const
    }
  },
  visibility: {
    title: 'Logged At',
    widget: {
      type: 'time' as const
    }
  },
  loggedAt: {
    title: 'Timestamp',
    widget: {
      type: 'dateTime' as const
    }
  },
  transects: {
    title: 'Transects',
    widget: {
      type: 'integer' as const,
      sort: true
    }
  },
  area: {
    title: 'Area (m²)',
    widget: {
      type: 'number' as const,
      formatOptions: {
        number: {
          maximumFractionDigits: 1
        }
      }
    }
  },
  fee: {
    title: 'Fee',
    widget: {
      type: 'currency' as const,
      formatOptions: {
        currency: {
          currency: 'EUR'
        }
      }
    }
  },
  confidence: {
    title: 'Confidence',
    widget: {
      type: 'percent' as const
    }
  },
  status: {
    title: 'Status',
    widget: {
      type: 'select' as const,
      translation: true,
      options: [{
        value: 'draft',
        label: 'Draft'
      }, {
        value: 'published',
        label: 'Published'
      }]
    }
  }
}, ['surveyDate', 'visibility', 'loggedAt', 'transects', 'area', 'fee', 'confidence', 'status'], [{
  surveyDate: '2026-04-02',
  visibility: '07:15:00',
  loggedAt: '2026-04-02T07:15:32',
  transects: 2032,
  area: 1275.456,
  fee: 450.5,
  confidence: 0.925,
  status: 'published'
}], {
  label: 'One value, one formatter — the same text a form shows'
})`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => tableStory({
  speciesName: {
    title: 'Species'
  },
  status: {
    title: 'Status',
    widget: {
      compare: 'statusBefore'
    }
  },
  depth: {
    title: 'Depth (m)',
    widget: {
      compare: 'depthBefore'
    }
  }
}, ['speciesName', 'status', 'depth'], [{
  speciesName: 'Nerida Kelp',
  status: 'confirmed',
  statusBefore: 'draft',
  depth: 12,
  depthBefore: 9
}, {
  speciesName: 'Corin Wrasse',
  status: 'confirmed',
  statusBefore: 'confirmed',
  depth: 18,
  depthBefore: 18
}], {
  readOnly: true,
  label: 'What changed — the current value above the one it replaced'
})`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    attachment: {
      title: '' as const,
      type: 'array' as const,
      items: {
        type: 'object' as const,
        properties: {
          title: {
            title: 'Document'
          },
          file: {
            title: 'File',
            widget: {
              type: 'file' as const
            }
          },
          linked: {
            title: 'Linked',
            widget: {
              type: 'file' as const,
              download: true,
              basePath: '/files/'
            }
          }
        }
      },
      widget: {
        type: 'table' as const,
        columns: ['title', 'file', 'linked']
      }
    } as never
  }
}} cards={{
  attachment: {
    label: 'Documents',
    className: 'col-12',
    widgets: ['attachment']
  }
}} value={{
  attachment: [{
    title: 'Quota confirmation',
    file: [{
      name: 'quota.pdf'
    }],
    linked: [{
      name: 'quota.pdf'
    }],
    hash: 'abc123'
  }, {
    title: 'Site photographs',
    file: [{
      name: 'reef-01.jpg'
    }, {
      name: 'reef-02.jpg'
    }],
    linked: [{
      name: 'reef-01.jpg'
    }],
    hash: 'def456'
  }]
}} editable editMode layout="edit" layouts={{
  edit: ['attachment']
}} />`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => tableStory({
  speciesName: {
    title: 'Species'
  },
  approved: {
    title: 'Approved',
    widget: {
      type: 'radio' as const
    }
  },
  picked: {
    title: 'Pick',
    widget: {
      type: 'selectTableRadio' as const
    }
  },
  archived: {
    title: 'Archived',
    widget: {
      cycle: 'tri-state' as const
    }
  }
}, ['speciesName', 'approved', 'picked', 'archived'], [{
  speciesName: 'Nerida Kelp',
  approved: true,
  picked: true,
  archived: null
}, {
  speciesName: 'Corin Wrasse',
  approved: false,
  picked: false,
  archived: false
}], {
  label: 'Radio reads, select-table-radio and cycle write'
})`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => tableStory({
  speciesName: {
    title: 'Species',
    sort: true
  },
  depth: {
    title: 'Depth (m)',
    sort: true,
    widget: {
      type: 'integer' as const
    }
  },
  transects: {
    title: 'Transects',
    sort: true,
    widget: {
      type: 'integer' as const
    }
  }
}, ['speciesName', 'depth', 'transects'], [{
  speciesName: 'Nerida Kelp',
  depth: 18,
  transects: 12
}, {
  speciesName: 'Corin Wrasse',
  depth: 6,
  transects: 4
}, {
  speciesName: 'Delphine Porpoise',
  depth: 12,
  transects: 9
}], {
  label: 'Click a header — the view sorts, the saved order stays as it is'
})`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => tableStory({
  reefId: {
    title: 'Reef',
    widget: {
      type: 'dropdown' as const,
      dropdown: 'reef',
      body: 'reefName'
    }
  },
  disciplineId: {
    title: 'Method',
    widget: {
      type: 'dropdown' as const,
      dropdown: 'discipline',
      body: 'disciplineName',
      optionsFilter: {
        reefId: 'reefId'
      }
    }
  }
}, ['reefId', 'disciplineId'], [{
  reefId: 'r1',
  reefName: 'Kelp Canopy',
  disciplineId: 'd1',
  disciplineName: 'Transect'
}, {
  reefId: 'r2',
  reefName: 'Coral Gardens',
  disciplineId: 'd2',
  disciplineName: 'Photo Quadrat'
}], {
  label: 'A method list narrowed to the row it belongs to — edit a row or add one, ' + 'then open Method'
})`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => tableStory({
  speciesName: {
    title: 'Species'
  },
  reefId: {
    title: 'Reef',
    widget: {
      type: 'dropdown' as const,
      dropdown: 'reef',
      body: 'reefName'
    }
  },
  disciplineId: {
    title: 'Method',
    widget: {
      type: 'dropdown' as const,
      dropdown: 'discipline',
      body: 'disciplineName',
      optionsFilter: {
        reefId: 'reefId'
      }
    }
  },
  transects: {
    title: 'Transects',
    widget: {
      type: 'integer' as const
    }
  },
  approved: {
    title: 'Approved',
    widget: {
      type: 'boolean' as const
    }
  },
  observed: {
    title: 'Observed',
    readOnly: true
  }
}, ['speciesName', 'reefId', 'disciplineId', 'transects', 'approved', 'observed'], [{
  speciesName: 'Nerida Kelp',
  reefId: 'r1',
  reefName: 'Kelp Canopy',
  disciplineId: 'd1',
  disciplineName: 'Transect',
  transects: 12,
  approved: true,
  observed: '2026-04-02'
}, {
  speciesName: 'Corin Wrasse',
  reefId: 'r2',
  reefName: 'Coral Gardens',
  disciplineId: 'd2',
  disciplineName: 'Photo Quadrat',
  transects: 4,
  approved: false,
  observed: '2026-04-03'
}], {
  inlineEdit: true,
  label: 'Every cell is its own editor — type in it, pick in it, tick it; Observed only reads'
})`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => tableStory({
  speciesName: {
    title: 'Species'
  },
  approved: {
    title: 'Approved',
    widget: {
      type: 'radio' as const
    }
  },
  picked: {
    title: 'Pick',
    widget: {
      type: 'selectTableRadio' as const
    }
  },
  archived: {
    title: 'Archived',
    widget: {
      cycle: 'tri-state' as const
    }
  },
  reefId: {
    title: 'Reef',
    widget: {
      type: 'dropdown' as const,
      dropdown: 'reef',
      body: 'reefName'
    }
  }
}, ['speciesName', 'approved', 'picked', 'archived', 'reefId'], [{
  speciesName: 'Nerida Kelp',
  approved: true,
  picked: true,
  archived: null,
  reefId: 'r1',
  reefName: 'Kelp Canopy'
}], {
  readOnly: true,
  label: 'The same cells on a read-only card — a click changes nothing'
})`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <FormatLayer scope="system" config={{
  dateStyle: 'full',
  hourCycle: 'h23',
  currency: 'BGN',
  grouping: 'always'
}}>
        {configuredFormattingTable('The system configuration — full dates, a 24-hour clock, grouped counts')}
    </FormatLayer>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <FormatLayer scope="system" config={{
  dateStyle: 'short',
  hourCycle: 'h12',
  currency: 'BGN'
}}>
        <FormatLayer scope="user" config={{
    hourCycle: 'h23',
    currency: 'USD',
    locale: 'en-GB'
  }}>
            {configuredFormattingTable("The user's preference over the system's — 24-hour, US dollars, dates in English")}
        </FormatLayer>
    </FormatLayer>`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <LanguageLayer language="bg">
        {configuredFormattingTable('The Bulgarian default — no configuration at all, and the currency is the language’s')}
    </LanguageLayer>`,...k.parameters?.docs?.source}}},A=[`Labels`,`Formatting`,`Compare`,`FileCell`,`SelectionCells`,`SortableFormTable`,`RowCascade`,`InlineEdit`,`ReadOnly`,`FormattingSystem`,`FormattingUser`,`FormattingBG`]})))()}j();export{b as Compare,x as FileCell,y as Formatting,k as FormattingBG,D as FormattingSystem,O as FormattingUser,T as InlineEdit,v as Labels,E as ReadOnly,w as RowCascade,S as SelectionCells,C as SortableFormTable,A as __namedExportsOrder,h as default};