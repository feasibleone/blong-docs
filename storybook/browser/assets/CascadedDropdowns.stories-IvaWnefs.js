import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-DBDkXj-L.js";import{r as i,t as a}from"./react.esm-BM_B8xfg.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{a(),n(),o=t(),s={title:`Editor/CascadedDropdowns`,component:r},c=[{value:1,label:`Africa`},{value:2,label:`Europe`},{value:3,label:`North America`},{value:4,label:`Oceania`}],l=[{value:1,label:`Kenya`,continent:1},{value:2,label:`Uganda`,continent:1},{value:3,label:`Tanzania`,continent:1},{value:12,label:`France`,continent:2},{value:13,label:`Germany`,continent:2},{value:14,label:`Italy`,continent:2},{value:7,label:`United States`,continent:3},{value:9,label:`Mexico`,continent:3},{value:10,label:`Australia`,continent:4},{value:11,label:`New Zealand`,continent:4}],u=[{value:1,label:`Nairobi`,country:1},{value:2,label:`Kampala`,country:2},{value:3,label:`Dar es Salaam`,country:3},{value:8,label:`Paris`,country:12},{value:9,label:`Berlin`,country:13},{value:10,label:`Rome`,country:14},{value:4,label:`New York`,country:7},{value:5,label:`Los Angeles`,country:7},{value:6,label:`Mexico City`,country:9},{value:7,label:`Canberra`,country:10}],d=()=>(0,o.jsx)(r,{schema:{properties:{continent:{title:`Continent`,widget:{type:`dropdown`,dropdown:`continent`}},country:{title:`Country`,widget:{type:`dropdown`,dropdown:`country`,parent:`continent`}},city:{title:`City`,widget:{type:`dropdown`,dropdown:`city`,parent:`country`}}}},cards:{edit:{label:void 0,className:`xl:col-3`,widgets:[`continent`,`country`,`city`]}},dropdowns:{continent:c,country:l,city:u},editable:!0,editMode:!0,layout:`edit`,layouts:{edit:[`edit`]}}),d.play=async({canvas:e,userEvent:t})=>{let n=i(document.body),r=(await e.findByText(`Continent`)).closest(`.field.grid`);await t.click(i(r).getByRole(`button`));let a=n.queryByText(`Europe`);a&&await t.click(a),await new Promise(e=>setTimeout(e,100));let o=e.getByText(`Country`).closest(`.field.grid`);await t.click(i(o).getByRole(`button`));let s=n.queryByText(`France`);s&&await t.click(s),await new Promise(e=>setTimeout(e,100));let c=e.getByText(`City`).closest(`.field.grid`);await t.click(i(c).getByRole(`button`));let l=n.queryByText(`Paris`);l&&await t.click(l)},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    continent: {
      title: 'Continent',
      widget: {
        type: 'dropdown',
        dropdown: 'continent'
      }
    },
    country: {
      title: 'Country',
      widget: {
        type: 'dropdown',
        dropdown: 'country',
        parent: 'continent'
      }
    },
    city: {
      title: 'City',
      widget: {
        type: 'dropdown',
        dropdown: 'city',
        parent: 'country'
      }
    }
  }
}} cards={{
  edit: {
    label: undefined,
    className: 'xl:col-3',
    widgets: ['continent', 'country', 'city']
  }
}} dropdowns={{
  continent: continents,
  country: countries,
  city: cities
}} editable editMode layout="edit" layouts={{
  edit: ['edit']
}} />`,...d.parameters?.docs?.source}}},f=[`CascadedDropdowns`]})))()}p();export{d as CascadedDropdowns,f as __namedExportsOrder,s as default};