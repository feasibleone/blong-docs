import{n as e,r as t}from"./rolldown-runtime-BcKkbAw3.js";import{n,t as r}from"./mermaid-parser.core-BN2Rj0rf.js";import{E as i,T as a,t as o,w as s}from"./src-05n2arE5.js";import{A as c,C as l,G as u,H as d,V as f,_ as p,a as m,b as h,c as g,d as _,v}from"./chunk-ICPOFSXX-DWglfbx7.js";import{n as y}from"./ordinal-w_tWV-ab.js";import{r as b}from"./path-C95sxtHQ.js";import{h as x,l as S}from"./dist-B22zCTlY.js";import{t as C}from"./arc-DqIvozeY.js";import{n as w,t as T}from"./array-ChVDQqDp.js";import{p as E,r as D,u as O}from"./chunk-5PVQY5BW-DaQauJEh.js";import{n as k,t as A}from"./chunk-4BX2VUAB-CtGAXV3s.js";import{l as j,u as M}from"./mermaid.core-DdphDRdD.js";function N(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function P(e){return e}function F(){var e=P,t=N,n=null,r=b(0),i=b(x),a=b(0);function o(o){var s,c=(o=T(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(x,Math.max(-x,i.apply(this,arguments)-m)),g,_=Math.min(Math.abs(h)/c,a.apply(this,arguments)),v=_*(h<0?-1:1),y;for(s=0;s<c;++s)(y=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=y);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*v)/d:0;s<c;++s,m=g)l=f[s],y=p[l],g=m+(y>0?y*u:0)+v,p[l]={data:o[l],index:s,value:y,startAngle:m,endAngle:g,padAngle:_};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:b(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:b(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:b(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:b(+e),o):a},o}function I(){return(I=e((()=>{w(),S()})))()}var L=t({diagram:()=>J}),R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{j(),A(),O(),c(),a(),r(),o(),R=_.pie,z={sections:new Map,showData:!1,config:R},B=z.sections,V=z.showData,H=structuredClone(R),U={getConfig:s(()=>structuredClone(H),`getConfig`),clear:s(()=>{B=new Map,V=z.showData,m()},`clear`),setDiagramTitle:u,getDiagramTitle:l,setAccTitle:d,getAccTitle:v,setAccDescription:f,getAccDescription:p,addSection:s(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);B.has(e)||(B.set(e,t),i.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:s(()=>B,`getSections`),setShowData:s(e=>{V=e},`setShowData`),getShowData:s(()=>V,`getShowData`)},W=s((e,t)=>{k(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),G={parse:s(async e=>{let t=await n(`pie`,e);i.debug(t),W(t,U)},`parse`)},K=s(e=>`
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
`,`getStyles`),q=s(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return F().value(e=>e.value).sort(null)(n)},`createPieArcs`),J={parser:G,db:U,renderer:{draw:s((e,t,n,r)=>{i.debug(`rendering pie chart
`+e);let a=r.db,o=h(),s=D(a.getConfig(),o.pie),c=M(t),l=c.append(`g`);l.attr(`transform`,`translate(225,225)`);let{themeVariables:u}=o,[d]=E(u.pieOuterStrokeWidth);d??=2;let f=s.textPosition,p=C().innerRadius(0).outerRadius(185),m=C().innerRadius(185*f).outerRadius(185*f);l.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+d/2).attr(`class`,`pieOuterCircle`);let _=a.getSections(),v=q(_),b=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],x=0;_.forEach(e=>{x+=e});let S=v.filter(e=>(e.data.value/x*100).toFixed(0)!==`0`),w=y(b).domain([..._.keys()]);l.selectAll(`mySlices`).data(S).enter().append(`path`).attr(`d`,p).attr(`fill`,e=>w(e.data.label)).attr(`class`,`pieCircle`),l.selectAll(`mySlices`).data(S).enter().append(`text`).text(e=>(e.data.value/x*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+m.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let T=l.append(`text`).text(a.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`),O=[..._.entries()].map(([e,t])=>({label:e,value:t})),k=l.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});k.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>w(e.label)).style(`stroke`,e=>w(e.label)),k.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>a.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),j=T.node()?.getBoundingClientRect().width??0,N=225-j/2,P=225+j/2,F=Math.min(0,N),I=Math.max(A,P)-F;c.attr(`viewBox`,`${F} 0 ${I} 450`),g(c,450,I,s.useMaxWidth)},`draw`)},styles:K}})))()}export{L as n,I as r,Y as t};