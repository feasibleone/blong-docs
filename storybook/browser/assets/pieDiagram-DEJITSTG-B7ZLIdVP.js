import{n as e,r as t}from"./rolldown-runtime-BcKkbAw3.js";import{E as n,T as r,t as i,w as a}from"./src-OuAdEEDf.js";import{A as o,C as s,G as c,H as l,V as u,_ as d,a as f,b as p,c as m,d as h,v as g}from"./chunk-ICPOFSXX-Auam15r9.js";import{n as _}from"./ordinal-w_tWV-ab.js";import{r as v}from"./path-C95sxtHQ.js";import{h as y,l as b}from"./dist-B22zCTlY.js";import{t as x}from"./arc-DqIvozeY.js";import{n as S,t as C}from"./array-ChVDQqDp.js";import{p as w,r as T,u as E}from"./chunk-5PVQY5BW-DWFsc5oO.js";import{n as D,t as O}from"./chunk-426QAEUC-BGvDmSxV.js";import{n as k,t as A}from"./chunk-4BX2VUAB-C2P8PwOs.js";import{n as j,t as M}from"./mermaid-parser.core-ppXLGxsA.js";function N(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function P(e){return e}function F(){var e=P,t=N,n=null,r=v(0),i=v(y),a=v(0);function o(o){var s,c=(o=C(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(y,Math.max(-y,i.apply(this,arguments)-m)),g,_=Math.min(Math.abs(h)/c,a.apply(this,arguments)),v=_*(h<0?-1:1),b;for(s=0;s<c;++s)(b=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=b);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*v)/d:0;s<c;++s,m=g)l=f[s],b=p[l],g=m+(b>0?b*u:0)+v,p[l]={data:o[l],index:s,value:b,startAngle:m,endAngle:g,padAngle:_};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:v(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:v(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:v(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:v(+e),o):a},o}function I(){return(I=e((()=>{S(),b()})))()}var L=t({diagram:()=>J}),R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{O(),A(),E(),o(),r(),M(),i(),R=h.pie,z={sections:new Map,showData:!1,config:R},B=z.sections,V=z.showData,H=structuredClone(R),U={getConfig:a(()=>structuredClone(H),`getConfig`),clear:a(()=>{B=new Map,V=z.showData,f()},`clear`),setDiagramTitle:c,getDiagramTitle:s,setAccTitle:l,getAccTitle:g,setAccDescription:u,getAccDescription:d,addSection:a(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);B.has(e)||(B.set(e,t),n.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:a(()=>B,`getSections`),setShowData:a(e=>{V=e},`setShowData`),getShowData:a(()=>V,`getShowData`)},W=a((e,t)=>{k(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),G={parse:a(async e=>{let t=await j(`pie`,e);n.debug(t),W(t,U)},`parse`)},K=a(e=>`
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
`,`getStyles`),q=a(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return F().value(e=>e.value).sort(null)(n)},`createPieArcs`),J={parser:G,db:U,renderer:{draw:a((e,t,r,i)=>{n.debug(`rendering pie chart
`+e);let a=i.db,o=p(),s=T(a.getConfig(),o.pie),c=D(t),l=c.append(`g`);l.attr(`transform`,`translate(225,225)`);let{themeVariables:u}=o,[d]=w(u.pieOuterStrokeWidth);d??=2;let f=s.textPosition,h=x().innerRadius(0).outerRadius(185),g=x().innerRadius(185*f).outerRadius(185*f);l.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+d/2).attr(`class`,`pieOuterCircle`);let v=a.getSections(),y=q(v),b=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],S=0;v.forEach(e=>{S+=e});let C=y.filter(e=>(e.data.value/S*100).toFixed(0)!==`0`),E=_(b).domain([...v.keys()]);l.selectAll(`mySlices`).data(C).enter().append(`path`).attr(`d`,h).attr(`fill`,e=>E(e.data.label)).attr(`class`,`pieCircle`),l.selectAll(`mySlices`).data(C).enter().append(`text`).text(e=>(e.data.value/S*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+g.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let O=l.append(`text`).text(a.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`),k=[...v.entries()].map(([e,t])=>({label:e,value:t})),A=l.selectAll(`.legend`).data(k).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*k.length/2;return`translate(216,`+(t*22-n)+`)`});A.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>E(e.label)).style(`stroke`,e=>E(e.label)),A.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>a.getShowData()?`${e.label} [${e.value}]`:e.label);let j=512+Math.max(...A.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),M=O.node()?.getBoundingClientRect().width??0,N=225-M/2,P=225+M/2,F=Math.min(0,N),I=Math.max(j,P)-F;c.attr(`viewBox`,`${F} 0 ${I} 450`),m(c,450,I,s.useMaxWidth)},`draw`)},styles:K}})))()}export{L as n,I as r,Y as t};