import{n as e,r as t,s as n}from"./rolldown-runtime-BcKkbAw3.js";import{t as r}from"./react-CZn93Sqq.js";import{t as i}from"./jsx-runtime-BbDfbRii.js";import{C as a,w as o}from"./api.esm-sLC3dE1t.js";import{J as s,q as c}from"./iframe-DgrHWYYy.js";var l=t({ActionPermissions:()=>v,Children:()=>b,Default:()=>h,Details:()=>y,GetError:()=>_,Grid:()=>x,GridFlex:()=>S,Loading:()=>g,Submit:()=>T,WithStaticData:()=>C,__namedExportsOrder:()=>E,default:()=>f}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{u=n(r(),1),a(),s(),d=i(),f={title:`Data/Explorer`,component:c,tags:[`autodocs`],parameters:{layout:`fullscreen`}},p=[{field:`coralName`,header:`Name`,sortable:!0},{field:`coralType`,header:`Type`,sortable:!0},{field:`maxDepth`,header:`Max Depth`,sortable:!0},{field:`endangered`,header:`Endangered`,sortable:!1}],m=[{label:`Create`,icon:`pi pi-plus`,method:`coralCoralAdd`},{label:`Edit`,icon:`pi pi-pencil`,enabled:`current`,method:`coralCoralEdit`},{label:`Delete`,icon:`pi pi-trash`,enabled:`selected`,confirm:`Do you want to delete the selected corals?`,method:`coralCoralDelete`}],h={args:{keyField:`coralId`,columns:p,listAction:`coralCoralFind`,selectionMode:`multiple`,toolbar:m}},g={args:{...h.args,listAction:`coralCoralLoad`}},_={args:{...h.args,listAction:`coralCoralFindError`}},v={decorators:[e=>(u.useEffect(()=>(o.getState().setPermissions({granted:!0,forbidden:!1}),()=>o.getState().setPermissions({})),[]),(0,d.jsx)(e,{}))],args:{...h.args,toolbar:[{label:`Create`,icon:`pi pi-plus`,permission:`forbidden`,method:`coralCoralAdd`},{label:`Edit`,icon:`pi pi-pencil`,permission:`granted`,enabled:`current`,method:`coralCoralEdit`},{label:`Delete`,icon:`pi pi-trash`,permission:`forbidden`,enabled:`selected`,method:`coralCoralDelete`}]}},y={args:{...h.args,selectionMode:`single`,details:(e,t)=>(0,d.jsxs)(`div`,{style:{padding:`0.25rem`},children:[(0,d.jsxs)(`div`,{style:{marginBottom:`0.5rem`,color:`var(--text-color-secondary)`,fontSize:`0.75rem`},children:[`Records: `,t??0]}),e?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`strong`,{children:`Name:`}),` `,String(e.coralName??``)]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`strong`,{children:`Type:`}),` `,String(e.coralType??``)]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`strong`,{children:`Max Depth:`}),` `,String(e.maxDepth??``),`m`]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`strong`,{children:`Endangered:`}),` `,e.endangered?`Yes`:`No`]})]}):(0,d.jsx)(`div`,{style:{color:`var(--text-color-secondary)`},children:`Select a row`})]})}},b={args:{...h.args,children:(0,d.jsxs)(`div`,{style:{padding:`0.75rem`},children:[(0,d.jsx)(`strong`,{children:`Filter by type`}),(0,d.jsx)(`ul`,{style:{margin:`0.5rem 0 0`,padding:`0 0 0 1rem`},children:[`All`,`Hard`,`Soft`,`Black`,`Fire`].map(e=>(0,d.jsx)(`li`,{style:{cursor:`pointer`,padding:`0.25rem 0`},children:e},e))})]})}},x={args:{...h.args,view:`grid`,selectionMode:`none`}},S={args:{...h.args,view:`grid`,selectionMode:`none`,pageSize:25,cardTemplate:e=>(0,d.jsx)(`div`,{className:`col-6 md:col-3`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,border:`1px solid var(--surface-border)`,borderRadius:`var(--border-radius)`,padding:`0.5rem 0.75rem`,margin:`0.25rem`,background:`var(--surface-card)`,cursor:`pointer`},children:[(0,d.jsx)(`i`,{className:`pi pi-paperclip`,style:{color:`var(--text-color-secondary)`}}),(0,d.jsx)(`span`,{style:{flex:1,fontSize:`0.875rem`,fontWeight:600},children:String(e.coralName??``)}),(0,d.jsx)(`span`,{style:{fontSize:`0.875rem`,color:`var(--text-color-secondary)`},children:String(e.coralType??``)})]})})}},C={render:()=>(0,d.jsx)(`div`,{style:{height:500},children:(0,d.jsx)(c,{columns:p,listAction:`coralCoralFind`,selectionMode:`multiple`,toolbar:m,onSelectionChange:e=>console.log(`selected`,e)})})},w=[{field:`coralName`,header:`Name`,sortable:!0,filterable:!0,action:`coralCoralOpen`},{field:`coralType`,header:`Type`,sortable:!0,filterable:!0},{field:`maxDepth`,header:`Max Depth`,sortable:!0,filterable:!0},{field:`endangered`,header:`Endangered`,sortable:!1}],T={args:{columns:w,listAction:`coralCoralFind`,selectionMode:`multiple`,keyField:`coralId`,toolbar:[{label:`Submit id`,icon:`pi pi-send`,enabled:`current`,method:`coralCoralSubmit`,params:"${coralId}"},{label:`Submit current`,icon:`pi pi-inbox`,enabled:`current`,method:`coralCoralSubmit`,params:"${current}"},{label:`Submit selected`,icon:`pi pi-list`,enabled:`selected`,method:`coralCoralSubmit`,params:"${selected}"},{label:`Submit template`,icon:`pi pi-file-export`,enabled:`current`,method:`coralCoralSubmit`,params:{coralId:"${coralId}",maxDepth:"${current.maxDepth}"}},{label:`Error`,icon:`pi pi-exclamation-circle`,method:`coralCoralSubmitError`,params:{}},{label:`Delay`,icon:`pi pi-clock`,method:`coralCoralSubmitDelay`,successHint:`Done`,params:{}}]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    keyField: 'coralId',
    columns,
    listAction: 'coralCoralFind',
    selectionMode: 'multiple',
    toolbar
  }
}`,...h.parameters?.docs?.source},description:{story:`Default — full-featured coral list with toolbar and pagination.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    listAction: 'coralCoralLoad'
  }
}`,...g.parameters?.docs?.source},description:{story:"Loading — `listAction` never resolves; skeleton / loading state persists.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    listAction: 'coralCoralFindError'
  }
}`,..._.parameters?.docs?.source},description:{story:`GetError — list fetch rejects; global error dialog appears.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [(Story: React.ComponentType) => {
    React.useEffect(() => {
      useAppStore.getState().setPermissions({
        granted: true,
        forbidden: false
      });
      return () => useAppStore.getState().setPermissions({});
    }, []);
    return <Story />;
  }],
  args: {
    ...Default.args,
    toolbar: [{
      label: 'Create',
      icon: 'pi pi-plus',
      permission: 'forbidden',
      method: 'coralCoralAdd'
    }, {
      label: 'Edit',
      icon: 'pi pi-pencil',
      permission: 'granted',
      enabled: 'current' as const,
      method: 'coralCoralEdit'
    }, {
      label: 'Delete',
      icon: 'pi pi-trash',
      permission: 'forbidden',
      enabled: 'selected' as const,
      method: 'coralCoralDelete'
    }]
  }
}`,...v.parameters?.docs?.source},description:{story:`ActionPermissions — Create/Delete are forbidden; Edit is granted.
Demonstrates permission-aware toolbar button visibility.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectionMode: 'single',
    details: (row, total) => <div style={{
      padding: '0.25rem'
    }}>
                <div style={{
        marginBottom: '0.5rem',
        color: 'var(--text-color-secondary)',
        fontSize: '0.75rem'
      }}>
                    Records: {total ?? 0}
                </div>
                {row ? <>
                        <div>
                            <strong>Name:</strong> {String(row.coralName ?? '')}
                        </div>
                        <div>
                            <strong>Type:</strong> {String(row.coralType ?? '')}
                        </div>
                        <div>
                            <strong>Max Depth:</strong> {String(row.maxDepth ?? '')}m
                        </div>
                        <div>
                            <strong>Endangered:</strong> {row.endangered ? 'Yes' : 'No'}
                        </div>
                    </> : <div style={{
        color: 'var(--text-color-secondary)'
      }}>Select a row</div>}
            </div>
  }
}`,...y.parameters?.docs?.source},description:{story:`Details — side panel shows the currently selected coral's fields and total
record count.  Click a row to populate the panel.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: <div style={{
      padding: '0.75rem'
    }}>
                <strong>Filter by type</strong>
                <ul style={{
        margin: '0.5rem 0 0',
        padding: '0 0 0 1rem'
      }}>
                    {['All', 'Hard', 'Soft', 'Black', 'Fire'].map(t => <li key={t} style={{
          cursor: 'pointer',
          padding: '0.25rem 0'
        }}>
                            {t}
                        </li>)}
                </ul>
            </div>
  }
}`,...b.parameters?.docs?.source},description:{story:"Children — a custom navigation panel rendered to the left of the table.\nDemonstrates the `children` left-panel prop.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    view: 'grid',
    selectionMode: 'none'
  }
}`,...x.parameters?.docs?.source},description:{story:`Grid — DataView card layout; useful for image-heavy or rich-content rows.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    view: 'grid',
    selectionMode: 'none',
    pageSize: 25,
    cardTemplate: row => <div className="col-6 md:col-3">
                <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: '1px solid var(--surface-border)',
        borderRadius: 'var(--border-radius)',
        padding: '0.5rem 0.75rem',
        margin: '0.25rem',
        background: 'var(--surface-card)',
        cursor: 'pointer'
      }}>
                    <i className="pi pi-paperclip" style={{
          color: 'var(--text-color-secondary)'
        }} />
                    <span style={{
          flex: 1,
          fontSize: '0.875rem',
          fontWeight: 600
        }}>
                        {String(row.coralName ?? '')}
                    </span>
                    <span style={{
          fontSize: '0.875rem',
          color: 'var(--text-color-secondary)'
        }}>
                        {String(row.coralType ?? '')}
                    </span>
                </div>
            </div>
  }
}`,...S.parameters?.docs?.source},description:{story:`GridFlex — compact horizontal cards (icon + fields side by side).`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 500
  }}>
            <Explorer columns={columns} listAction="coralCoralFind" selectionMode="multiple" toolbar={toolbar} onSelectionChange={v => console.log('selected', v)} />
        </div>
}`,...C.parameters?.docs?.source},description:{story:`WithStaticData — inline render with explicit columns and toolbar.
Useful for snapshot tests and design validation.`,...C.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columns: submitColumns,
    listAction: 'coralCoralFind',
    selectionMode: 'multiple',
    keyField: 'coralId',
    toolbar: [{
      label: 'Submit id',
      icon: 'pi pi-send',
      enabled: 'current',
      method: 'coralCoralSubmit',
      params: '\${coralId}'
    }, {
      label: 'Submit current',
      icon: 'pi pi-inbox',
      enabled: 'current',
      method: 'coralCoralSubmit',
      params: '\${current}'
    }, {
      label: 'Submit selected',
      icon: 'pi pi-list',
      enabled: 'selected',
      method: 'coralCoralSubmit',
      params: '\${selected}'
    }, {
      label: 'Submit template',
      icon: 'pi pi-file-export',
      enabled: 'current',
      method: 'coralCoralSubmit',
      params: {
        coralId: '\${coralId}',
        maxDepth: '\${current.maxDepth}'
      }
    }, {
      label: 'Error',
      icon: 'pi pi-exclamation-circle',
      method: 'coralCoralSubmitError',
      params: {}
    }, {
      label: 'Delay',
      icon: 'pi pi-clock',
      method: 'coralCoralSubmitDelay',
      successHint: 'Done',
      params: {}
    }]
  }
}`,...T.parameters?.docs?.source},description:{story:'Submit — demonstrates ${id}, ${current}, ${selected}, ${current.field} template\nresolution in toolbar button params, column-link actions, and the successHint overlay.\n\nClick a row to select it, then use the toolbar buttons:\n— **Submit id**: sends `{id: row.id}` to `coralCoralSubmit`\n— **Submit current**: sends the full row to `coralCoralSubmit`\n— **Submit selected**: sends the selected rows array to `coralCoralSubmit`\n— **Submit template**: sends `{id, maxDepth}` derived from the current row\n— **Error**: always callable; triggers a server-side error toast\n— **Delay**: 1.5 s delay then shows a "Done" hint overlay on the button\n\nThe **Species Name** column renders as a link — clicking it fires `coralCoralOpen`\nwith the full row, and the result is shown in the Storybook toast.',...T.parameters?.docs?.description}}},E=[`Default`,`Loading`,`GetError`,`ActionPermissions`,`Details`,`Children`,`Grid`,`GridFlex`,`WithStaticData`,`Submit`]})))()}export{l as n,D as r,h as t};