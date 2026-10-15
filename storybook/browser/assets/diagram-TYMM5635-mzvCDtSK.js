import{n as e}from"./rolldown-runtime-BcKkbAw3.js";import{n as t,t as n}from"./mermaid-parser.core-BN2Rj0rf.js";import{E as r,T as i,w as a}from"./src-05n2arE5.js";import{A as o,C as s,G as c,H as l,V as u,_ as d,a as f,c as p,d as m,v as h,y as g}from"./chunk-ICPOFSXX-DWglfbx7.js";import{r as _,u as v}from"./chunk-5PVQY5BW-DaQauJEh.js";import{n as y,t as b}from"./chunk-4BX2VUAB-CtGAXV3s.js";import{l as x,u as S}from"./mermaid.core-DdphDRdD.js";var C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{x(),b(),v(),o(),i(),n(),C=m.packet,w=class{constructor(){this.packet=[],this.setAccTitle=l,this.getAccTitle=h,this.setDiagramTitle=c,this.getDiagramTitle=s,this.getAccDescription=d,this.setAccDescription=u}static{a(this,`PacketDB`)}getConfig(){let e=_({...C,...g().packet});return e.showBits&&(e.paddingY+=10),e}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){f(),this.packet=[]}},T=1e4,E=a((e,t)=>{y(e,t);let n=-1,i=[],a=1,{bitsPerRow:o}=t.getConfig();for(let{start:s,end:c,bits:l,label:u}of e.blocks){if(s!==void 0&&c!==void 0&&c<s)throw Error(`Packet block ${s} - ${c} is invalid. End must be greater than start.`);if(s??=n+1,s!==n+1)throw Error(`Packet block ${s} - ${c??s} is not contiguous. It should start from ${n+1}.`);if(l===0)throw Error(`Packet block ${s} is invalid. Cannot have a zero bit field.`);for(c??=s+(l??1)-1,l??=c-s+1,n=c,r.debug(`Packet block ${s} - ${n} with label ${u}`);i.length<=o+1&&t.getPacket().length<T;){let[e,n]=D({start:s,end:c,bits:l,label:u},a,o);if(i.push(e),e.end+1===a*o&&(t.pushWord(i),i=[],a++),!n)break;({start:s,end:c,bits:l,label:u}=n)}}t.pushWord(i)},`populate`),D=a((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),O={parser:{yy:void 0},parse:a(async e=>{let n=await t(`packet`,e),i=O.parser?.yy;if(!(i instanceof w))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);r.debug(n),E(n,i)},`parse`)},k=a((e,t,n,r)=>{let i=r.db,a=i.getConfig(),{rowHeight:o,paddingY:s,bitWidth:c,bitsPerRow:l}=a,u=i.getPacket(),d=i.getDiagramTitle(),f=o+s,m=f*(u.length+1)-(d?0:o),h=c*l+2,g=S(t);g.attr(`viewBox`,`0 0 ${h} ${m}`),p(g,m,h,a.useMaxWidth);for(let[e,t]of u.entries())A(g,t,e,a);g.append(`text`).text(d).attr(`x`,h/2).attr(`y`,m-f/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),A=a((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),j={draw:k},M={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},N={parser:O,get db(){return new w},renderer:j,styles:a(({packet:e}={})=>{let t=_(M,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)}})))()}P();export{N as diagram};