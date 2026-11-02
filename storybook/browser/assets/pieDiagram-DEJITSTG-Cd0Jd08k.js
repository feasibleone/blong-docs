import{n as e}from"./rolldown-runtime-Bjp52BOI.js";import{n as t,t as n}from"./mermaid-parser.core-DSsiYTiA.js";import{H as r,It as i,L as a,Lt as o,Rt as s,t as c,xt as l}from"./src-BCNvAE6P.js";import{A as u,C as d,G as f,H as p,V as m,_ as h,a as g,b as _,c as v,d as y,v as b}from"./chunk-ICPOFSXX-D3hRS79i.js";import{p as x,r as S,u as C}from"./chunk-5PVQY5BW-C7XQYl4A.js";import{n as w,t as T}from"./chunk-4BX2VUAB-Cbb4Er4D.js";import{l as E,u as D}from"./mermaid.core-B_hxNWbf.js";var O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{E(),T(),C(),u(),o(),n(),c(),O=y.pie,k={sections:new Map,showData:!1,config:O},A=k.sections,j=k.showData,M=structuredClone(O),N={getConfig:i(()=>structuredClone(M),`getConfig`),clear:i(()=>{A=new Map,j=k.showData,g()},`clear`),setDiagramTitle:f,getDiagramTitle:d,setAccTitle:p,getAccTitle:b,setAccDescription:m,getAccDescription:h,addSection:i(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);A.has(e)||(A.set(e,t),s.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:i(()=>A,`getSections`),setShowData:i(e=>{j=e},`setShowData`),getShowData:i(()=>j,`getShowData`)},P=i((e,t)=>{w(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),F={parse:i(async e=>{let n=await t(`pie`,e);s.debug(n),P(n,N)},`parse`)},I=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),L=i(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return a().value(e=>e.value).sort(null)(n)},`createPieArcs`),R={parser:F,db:N,renderer:{draw:i((e,t,n,i)=>{s.debug(`rendering pie chart
`+e);let a=i.db,o=_(),c=S(a.getConfig(),o.pie),u=D(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:f}=o,[p]=x(f.pieOuterStrokeWidth);p??=2;let m=c.textPosition,h=r().innerRadius(0).outerRadius(185),g=r().innerRadius(185*m).outerRadius(185*m);d.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+p/2).attr(`class`,`pieOuterCircle`);let y=a.getSections(),b=L(y),C=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],w=0;y.forEach(e=>{w+=e});let T=b.filter(e=>(e.data.value/w*100).toFixed(0)!==`0`),E=l(C).domain([...y.keys()]);d.selectAll(`mySlices`).data(T).enter().append(`path`).attr(`d`,h).attr(`fill`,e=>E(e.data.label)).attr(`class`,`pieCircle`),d.selectAll(`mySlices`).data(T).enter().append(`text`).text(e=>(e.data.value/w*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+g.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let O=d.append(`text`).text(a.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`),k=[...y.entries()].map(([e,t])=>({label:e,value:t})),A=d.selectAll(`.legend`).data(k).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*k.length/2;return`translate(216,`+(t*22-n)+`)`});A.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>E(e.label)).style(`stroke`,e=>E(e.label)),A.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>a.getShowData()?`${e.label} [${e.value}]`:e.label);let j=512+Math.max(...A.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),M=O.node()?.getBoundingClientRect().width??0,N=225-M/2,P=225+M/2,F=Math.min(0,N),I=Math.max(j,P)-F;u.attr(`viewBox`,`${F} 0 ${I} 450`),v(u,450,I,c.useMaxWidth)},`draw`)},styles:I}})))()}z();export{R as diagram};