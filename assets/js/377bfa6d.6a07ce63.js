"use strict";(self.webpackChunk_feasibleone_blong_docs=self.webpackChunk_feasibleone_blong_docs||[]).push([[1566],{6425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=r(9541),o=r(8991);const n={},a="Orchestrator",c={id:"concepts/orchestrator",title:"Orchestrator",description:"The role of the orchestrator is to provide an intermediate point in the",source:"@site/docs/concepts/orchestrator.md",sourceDirName:"concepts",slug:"/concepts/orchestrator",permalink:"/blong-docs/docs/concepts/orchestrator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/orchestrator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open API",permalink:"/blong-docs/docs/concepts/openapi"},next:{title:"Realm",permalink:"/blong-docs/docs/concepts/realm"}},i={},h=[];function d(e){const t={a:"a",h1:"h1",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"orchestrator",children:"Orchestrator"}),"\n",(0,s.jsx)(t.p,{children:"The role of the orchestrator is to provide an intermediate point in the\narchitecture, where the business logic can be implemented in a way,\ndecoupled from the integration protocols and APIs."}),"\n",(0,s.jsx)(t.p,{children:"Orchestrators are the place where the API namespaces are defined,\nusually there is one orchestrator per namespace. The orchestrators\ncan call adapters within the same realm or orchestrators in\nanother realm. Calling adapters from another realm is discouraged\nand is only feasible in isolated cases, where maximizing the performance\nis needed. The namespaces of the orchestrators are used for service\ndiscovery and also become the service names in Kubernetes. So the\norchestrator is the place where the server side solution is glued together\nby reusing the functionality of the different realms."}),"\n",(0,s.jsxs)(t.p,{children:["The orchestrator is the typical place where the logic of a\n",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Sequence_diagram",children:"sequence diagram"}),"\nresides, where each vertical line represents one or more orchestrators."]}),"\n",(0,s.jsxs)(t.p,{children:["Orchestration can also be used as a distributed transaction architecture,\nwhich is well explained in this article from RedHat:\n",(0,s.jsx)(t.a,{href:"https://developers.redhat.com/articles/2021/09/21/distributed-transaction-patterns-microservices-compared#orchestration",children:"Distributed transaction patterns for microservices compared"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8991:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>a});var s=r(3981);const o={},n=s.createContext(o);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);