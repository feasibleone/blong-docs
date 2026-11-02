import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{t}from"./react-BPZ7Dl3u.js";import{t as n}from"./jsx-runtime-CndCZlyt.js";import{M as r,N as i,i as a,s as o}from"./Text-D_uGGDQB.js";import{Ct as s,Dt as c,Et as l,St as u,Tt as d,bt as f,wt as p,xt as m}from"./iframe-CxFCebkn.js";function h({active:e,items:t={},children:n}){return(0,g.useEffect)(()=>{let n=i.getState();return i.setState({feedback:{active:e,items:t},portal:{...n.portal,portalConfig:{name:`storybook`,title:`Feedback`,feedback:{enabled:!0}}}}),()=>{i.setState({feedback:{active:!1,items:{}},portal:{...n.portal,portalConfig:n.portal.portalConfig}})}},[e,t]),(0,_.jsx)(a,{value:{subject:`marine`,object:`coral`,page:`browse`},children:(0,_.jsxs)(`div`,{style:{padding:24,display:`grid`,gap:12,maxWidth:520},children:[(0,_.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,_.jsx)(f,{})}),(0,_.jsx)(`h3`,{"data-feedback-id":`marine.coral.browse/label`,"data-feedback-kind":`label`,"data-feedback-label":`Coral register`,children:`Coral register`}),(0,_.jsx)(`div`,{"data-feedback-id":`marine.coral.browse/card:master`,"data-feedback-kind":`card`,"data-feedback-label":`Master`,style:{border:`1px solid #888`,padding:12,borderRadius:4},children:`The card the comments below are about.`}),(0,_.jsx)(`div`,{"data-feedback-id":`marine.coral.browse/card:master/field:coral.coralName`,"data-feedback-kind":`field`,"data-feedback-label":`Name`,style:{border:`1px dashed #888`,padding:8},children:`Name field`}),n]})})}var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{g=t(),r(),c(),d(),s(),m(),o(),_=n(),v={title:`Components/Feedback`,parameters:{layout:`fullscreen`}},y={"marine.coral.browse/card:master":{targetId:`marine.coral.browse/card:master`,targetKind:`card`,targetLabel:`Master`,commentText:`This card is cut off at the bottom.`},"marine.coral.browse/card:master/field:coral.coralName":{targetId:`marine.coral.browse/card:master/field:coral.coralName`,targetKind:`field`,targetLabel:`Name`,commentText:`The label says Name but it holds the species.`}},b={render:()=>(0,_.jsx)(h,{active:!1})},x={render:()=>(0,_.jsx)(h,{active:!0})},S={render:()=>(0,_.jsx)(h,{active:!0,items:y})},C={render:()=>(0,_.jsx)(u,{count:2,busy:!1,cropping:!1,cropped:!1,onCrop:()=>void 0,onSubmit:()=>void 0,onDiscard:()=>void 0})},w={render:()=>(0,_.jsx)(l,{targetId:`marine.coral.browse/table:corals/column:coralName`,box:{x:24,y:24,width:268,height:172},comment:`The header wraps and cuts the text.`,onChange:()=>void 0,onRemove:()=>void 0,onMove:()=>void 0,onResize:()=>void 0})},T={render:()=>(0,_.jsxs)(`div`,{style:{position:`relative`,height:160},children:[(0,_.jsx)(p,{rect:{x:24,y:24,width:220,height:40},targetId:`marine.coral.browse/table:corals/column:coralName`,tone:`hover`}),(0,_.jsx)(p,{rect:{x:24,y:96,width:220,height:40},targetId:`marine.coral.browse/card:master/field:coral.coralName/label`,tone:`item`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FeedbackSetup active={false} />
}`,...b.parameters?.docs?.source},description:{story:`The mode off: the switch is in the menubar and nothing is painted.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <FeedbackSetup active={true} />
}`,...x.parameters?.docs?.source},description:{story:`The mode on with an empty draft: hovering a box paints it.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <FeedbackSetup active={true} items={twoItems} />
}`,...S.parameters?.docs?.source},description:{story:`Two comments, each in its own callout, avoiding each other.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FeedbackSubmitBar count={2} busy={false} cropping={false} cropped={false} onCrop={() => undefined} onSubmit={() => undefined} onDiscard={() => undefined} />
}`,...C.parameters?.docs?.source},description:{story:`The submit bar on its own, with a count in it.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <FeedbackCallout targetId="marine.coral.browse/table:corals/column:coralName" box={{
    x: 24,
    y: 24,
    width: 268,
    height: 172
  }} comment="The header wraps and cuts the text." onChange={() => undefined} onRemove={() => undefined} onMove={() => undefined} onResize={() => undefined} />
}`,...w.parameters?.docs?.source},description:{story:`One callout on its own, at a fixed position.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    height: 160
  }}>
            <FeedbackOutline rect={{
      x: 24,
      y: 24,
      width: 220,
      height: 40
    }} targetId="marine.coral.browse/table:corals/column:coralName" tone="hover" />
            <FeedbackOutline rect={{
      x: 24,
      y: 96,
      width: 220,
      height: 40
    }} targetId="marine.coral.browse/card:master/field:coral.coralName/label" tone="item" />
        </div>
}`,...T.parameters?.docs?.source},description:{story:`The rings on their own: the hover one dashed, the committed one solid.`,...T.parameters?.docs?.description}}},E=[`Inactive`,`Active`,`Callouts`,`SubmitBar`,`Callout`,`Outlines`]})))()}D();export{x as Active,w as Callout,S as Callouts,b as Inactive,T as Outlines,C as SubmitBar,E as __namedExportsOrder,v as default};