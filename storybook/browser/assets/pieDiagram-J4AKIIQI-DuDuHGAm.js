import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,r as n}from"./chunk-Y2CYZVJY-B4aq1Pvd.js";import{Ft as r,H as i,It as a,L as o,t as s,xt as c}from"./src-BCcxINus.js";import{A as l,C as u,J as d,U as f,W as p,_ as m,a as h,b as g,c as _,f as v,v as y}from"./chunk-BG4553SI-B8s8jQYf.js";import{n as b,t as x}from"./chunk-OHR5NZHT-BZJeTI5g.js";import{n as S,t as C}from"./chunk-JWPE2WC7-BqG8lEDu.js";import{n as w,r as T}from"./mermaid-parser.core-BoqOp1Le.js";import{f as E,h as D,i as O}from"./chunk-6MUBBAK2-m-oYVRIQ.js";var k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{C(),x(),E(),l(),r(),n(),w(),s(),k=v.pie,A={sections:new Map,showData:!1,config:k},j=A.sections,M=A.showData,N=structuredClone(k),P={getConfig:t(()=>structuredClone(N),`getConfig`),clear:t(()=>{j=new Map,M=A.showData,h()},`clear`),setDiagramTitle:d,getDiagramTitle:u,setAccTitle:p,getAccTitle:y,setAccDescription:f,getAccDescription:m,addSection:t(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);j.has(e)||(j.set(e,t),a.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:t(()=>j,`getSections`),setShowData:t(e=>{M=e},`setShowData`),getShowData:t(()=>M,`getShowData`)},F=t((e,t)=>{S(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),I={parse:t(async e=>{let t=await T(`pie`,e);a.debug(t),F(t,P)},`parse`)},L=t(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
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
`,`getStyles`),R=t(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return o().value(e=>e.value).sort(null)(n)},`createPieArcs`),z={parser:I,db:P,renderer:{draw:t((e,t,n,r)=>{a.debug(`rendering pie chart
`+e);let o=r.db,s=g(),l=O(o.getConfig(),s.pie),u=b(t),d=u.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:f}=s,[p]=D(f.pieOuterStrokeWidth);p??=2;let m=l.legendPosition,h=l.textPosition,v=l.donutHole>0&&l.donutHole<=.9?l.donutHole:0,y=i().innerRadius(v*185).outerRadius(185),x=i().innerRadius(185*h).outerRadius(185*h),S=d.append(`g`);S.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+p/2).attr(`class`,`pieOuterCircle`);let C=o.getSections(),w=R(C),T=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],E=0;C.forEach(e=>{E+=e});let k=w.filter(e=>(e.data.value/E*100).toFixed(0)!==`0`),A=c(T).domain([...C.keys()]);S.selectAll(`mySlices`).data(k).enter().append(`path`).attr(`d`,y).attr(`fill`,e=>A(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return l.highlightSlice===`hover`?t+=` highlightedOnHover`:l.highlightSlice===e.data.label&&(t+=` highlighted`),t}),S.selectAll(`mySlices`).data(k).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let j=d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`),M=[...C.entries()].map(([e,t])=>({label:e,value:t})),N=d.selectAll(`.legend`).data(M).enter().append(`g`).attr(`class`,`legend`);N.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>A(e.label)).style(`stroke`,e=>A(e.label)),N.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let P=Math.max(...N.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),F=450,I=490,L=M.length*22;switch(m){case`center`:N.attr(`transform`,(e,t)=>{let n=22*M.length/2,r=-P/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:F+=L,N.attr(`transform`,(e,t)=>`translate(${-P/2-22}, ${t*22-185})`),S.attr(`transform`,()=>`translate(0, ${L+22})`);break;case`bottom`:F+=L,N.attr(`transform`,(e,t)=>{let n=-P/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(-207,`+(t*22-n)+`)`}),S.attr(`transform`,()=>`translate(${P+18+4}, 0)`);break;default:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(216,`+(t*22-n)+`)`})}let z=j.node()?.getBoundingClientRect().width??0,B=225-z/2,V=225+z/2,H=Math.min(0,B),U=Math.max(I,V)-H;u.attr(`viewBox`,`${H} 0 ${U} ${F}`),_(u,F,U,l.useMaxWidth)},`draw`)},styles:L}})))()}B();export{z as diagram};