import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{t}from"./jsx-runtime-BbDfbRii.js";import{n,t as r}from"./Editor-DBDkXj-L.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`Editor/Events`,component:r},o=()=>(0,i.jsx)(r,{schema:{properties:{a:{title:`A`,type:`integer`,widget:{onChange:`handleA`}},b:{title:`B`,type:`integer`,widget:{onChange:`handleB`}},sum:{title:`Sum`,type:`number`,readOnly:!0}}},cards:{edit:{label:`Field Events`,className:`lg:col-3`,widgets:[`a`,`b`,`sum`]}},value:{a:0,b:0,sum:0},editable:!0,editMode:!0,layout:`edit`,layouts:{edit:[`edit`]},methods:{async handleA(e){let{form:t,value:n}=e,r=Number(t.getValues(`b`))+Number(n);t.setValue(`sum`,r)},async handleB(e){let{form:t,value:n}=e,r=Number(t.getValues(`a`))+Number(n);t.setValue(`sum`,r)}}}),s=()=>(0,i.jsx)(r,{schema:{properties:{visible:{title:`Visible`,type:`boolean`},enabled:{title:`Enabled`,type:`boolean`},input:{title:`Conditional Input`,widget:{visible:`visible`,enabled:`enabled`}}}},cards:{edit:{label:`Form API`,className:`lg:col-3`,widgets:[`visible`,`enabled`,`input`]}},value:{visible:!0,enabled:!0,input:``},editable:!0,editMode:!0,layout:`edit`,layouts:{edit:[`edit`]}}),o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    a: {
      title: 'A',
      type: 'integer',
      widget: {
        onChange: 'handleA'
      }
    } as never,
    b: {
      title: 'B',
      type: 'integer',
      widget: {
        onChange: 'handleB'
      }
    } as never,
    sum: {
      title: 'Sum',
      type: 'number',
      readOnly: true
    }
  }
}} cards={{
  edit: {
    label: 'Field Events',
    className: 'lg:col-3',
    widgets: ['a', 'b', 'sum']
  }
}} value={{
  a: 0,
  b: 0,
  sum: 0
}} editable editMode layout="edit" layouts={{
  edit: ['edit']
}} methods={{
  async handleA(params) {
    const {
      form,
      value
    } = params as {
      form: {
        getValues: (f: string) => unknown;
        setValue: (f: string, v: unknown) => void;
      };
      value: unknown;
    };
    const sum = Number(form.getValues('b')) + Number(value);
    form.setValue('sum', sum);
  },
  async handleB(params) {
    const {
      form,
      value
    } = params as {
      form: {
        getValues: (f: string) => unknown;
        setValue: (f: string, v: unknown) => void;
      };
      value: unknown;
    };
    const sum = Number(form.getValues('a')) + Number(value);
    form.setValue('sum', sum);
  }
}} />`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Editor schema={{
  properties: {
    visible: {
      title: 'Visible',
      type: 'boolean'
    },
    enabled: {
      title: 'Enabled',
      type: 'boolean'
    },
    input: {
      title: 'Conditional Input',
      widget: {
        visible: 'visible',
        enabled: 'enabled'
      }
    } as never
  }
}} cards={{
  edit: {
    label: 'Form API',
    className: 'lg:col-3',
    widgets: ['visible', 'enabled', 'input']
  }
}} value={{
  visible: true,
  enabled: true,
  input: ''
}} editable editMode layout="edit" layouts={{
  edit: ['edit']
}} />`,...s.parameters?.docs?.source}}},c=[`Events`,`EventsFormAPI`]})))()}l();export{o as Events,s as EventsFormAPI,c as __namedExportsOrder,a as default};