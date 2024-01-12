"use strict";(self.webpackChunk_feasibleone_blong_docs=self.webpackChunk_feasibleone_blong_docs||[]).push([[932],{5064:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(9541),t=o(8991);const i={},a="Configuration",s={id:"patterns/configuration",title:"Configuration",description:"Blong comes with a flexible configuration mechanism, which allows",source:"@site/docs/patterns/configuration.md",sourceDirName:"patterns",slug:"/patterns/configuration",permalink:"/blong-docs/docs/patterns/configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Codec",permalink:"/blong-docs/docs/patterns/codec"},next:{title:"Error",permalink:"/blong-docs/docs/patterns/error"}},l={},c=[{value:"Environments and use cases",id:"environments-and-use-cases",level:2},{value:"Source code configuration",id:"source-code-configuration",level:2},{value:"Adapter",id:"adapter",level:3},{value:"Orchestrator",id:"orchestrator",level:3},{value:"Internal components",id:"internal-components",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Blong comes with a flexible configuration mechanism, which allows\nthe configuration to be specified in multiple places, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the source code of each ",(0,r.jsx)(n.a,{href:"./realm",children:"realm"})]}),"\n",(0,r.jsx)(n.li,{children:"configuration files"}),"\n",(0,r.jsx)(n.li,{children:"environment variables"}),"\n",(0,r.jsx)(n.li,{children:"command line parameters"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The configuration coming from these places is merged to get\nthe effective one."}),"\n",(0,r.jsx)(n.h2,{id:"environments-and-use-cases",children:"Environments and use cases"}),"\n",(0,r.jsx)(n.p,{children:"The configuration is usually split in several parts, which are activated based\non the environment and the use case. There are some established names for some\nof the activations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"default"}),": the base configuration, active for all cases"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dev"}),": active in the development environment"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"prod"}),": active in the user acceptance test and production environments"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"test"}),": active during automated tests"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"db"}),": active during database creation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"realm"}),": active when focusing the development on a single realm"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"source-code-configuration",children:"Source code configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration coming from the source code has the purpose\nto define some defaults for the appropriate use cases and environments."}),"\n",(0,r.jsx)(n.h3,{id:"adapter",children:"Adapter"}),"\n",(0,r.jsx)(n.p,{children:"To configure the adapter, use one of the possible configuration places:"}),"\n",(0,r.jsx)(n.p,{children:"In the same realm, where the adapter is defined, define defaults and\nper environment configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// realmname/server.ts\nimport {realm} from '@feasibleone/blong';\n\nexport default realm(blong => ({\n    default: {\n        adaptername: {\n            // base configuration\n            // usually namespace and imports are specified here\n        }\n    },\n    dev: {\n        adaptername: {\n            // dev env overrides\n        }\n    }\n}));\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the global to configuration override the defaults, use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"realmname:\n  adaptername:\n    # global overrides\n"})}),"\n",(0,r.jsx)(n.h3,{id:"orchestrator",children:"Orchestrator"}),"\n",(0,r.jsx)(n.p,{children:"Orchestrators are configured the same way as adapters"}),"\n",(0,r.jsx)(n.h3,{id:"internal-components",children:"Internal components"}),"\n",(0,r.jsx)(n.p,{children:"The internal components of the framework can also be configured using\nthe following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"log:                        # global logging config\n  logLevel: info            # see pino config\n  transport:                # see pino config\nwatch:\n  logLevel: info            # log level for the watch component\nadapter:\n  logLevel: info            # default log level for all adapters\ngateway:                    # configuration of the API gateway\n  logLevel: info            # log level\n  debug: true               # turn on debugging details in responses\n  host: 0.0.0.0             # listen address\n  port: 8080                # listen port\n  sign:                     # MLE signing key\n  encrypt:                  # MLE encryption key\n  jwt:                      # OpenId configuration\n    audience:               # JWT Audience\nrpcServer:                  # configuration for the internal RPC calls\n  logLevel: info            # log level\n  host: 0.0.0.0             # listen address\n  port: 8091                # listen port\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8991:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var r=o(3981);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);