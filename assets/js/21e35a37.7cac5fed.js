"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,k=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},76192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={description:"SenseCAP_T1000_tracker_and_Qubitro_Integrated",title:"Qubitro Integrated(TTS)",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_Qubitro_TTS",last_update:{date:"8/15/2023",author:"Jessie"}},a=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Qubitro_Integrated",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Qubitro_Integrated",title:"Qubitro Integrated(TTS)",description:"SenseCAP_T1000_tracker_and_Qubitro_Integrated",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Qubitro_Integrated.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services",slug:"/SenseCAP_T1000_tracker_Qubitro_TTS",permalink:"/SenseCAP_T1000_tracker_Qubitro_TTS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Qubitro_Integrated.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1692057600,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{description:"SenseCAP_T1000_tracker_and_Qubitro_Integrated",title:"Qubitro Integrated(TTS)",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_Qubitro_TTS",last_update:{date:"8/15/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Ubidots Integrated(TTS)",permalink:"/SenseCAP_T1000_tracker_Ubidots_TTS"},next:{title:"TagoIO Integrated(TTS)",permalink:"/SenseCAP_T1000_tracker_TagoIO_TTS"}},c={},l=[{value:"Configure The Qubitro",id:"configure-the-qubitro",level:2},{value:"Get credentials from Qubitro Dashboard",id:"get-credentials-from-qubitro-dashboard",level:3},{value:"Configure The Things Stack",id:"configure-the-things-stack",level:2},{value:"Device status",id:"device-status",level:2},{value:"Configure the decoder on Qubitro",id:"configure-the-decoder-on-qubitro",level:2},{value:"Check the data",id:"check-the-data",level:2},{value:"Customize the dashboard(optional)",id:"customize-the-dashboardoptional",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.qubitro.com/"},"Qubitro")," is a Device Data Platform (DDP) for developers that provides the tools, workflows, and infrastructure you need to develop solutions faster, without the need of manual integration of multiple services. Qubitro supports popular data sources out-of-the-box and provides tools for real-time collaboration on your projects combined with scalable infrastructure."),(0,o.kt)("p",null,"The content of this chapter will guide users how to connect the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig"},"T1000 Tracker")," to Qubitro through TTN."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Before starting the setup, please check ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN"},"Connect SenseCAP T1000 to TTS")," to connect your SenseCAP T1000 Tracker to TTS first."),(0,o.kt)("h2",{id:"configure-the-qubitro"},"Configure The Qubitro"),(0,o.kt)("p",null,"To get started, create an account with ",(0,o.kt)("a",{parentName:"p",href:"https://portal.qubitro.com/login"},"Qubitro"),". By creating an account, you\u2019ll automatically be on a Starter plan. "),(0,o.kt)("h3",{id:"get-credentials-from-qubitro-dashboard"},"Get credentials from Qubitro Dashboard"),(0,o.kt)("p",null,"Create a new project."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"New source")," button and click on ",(0,o.kt)("strong",{parentName:"p"},"The Things Stack")," in the list."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Then you will get the Project ID and Webhook Signing Keys."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h2",{id:"configure-the-things-stack"},"Configure The Things Stack"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://eu1.cloud.thethings.network/console/"},"TTS Console")," to configure the webhook integration."),(0,o.kt)("p",null,"On The Things Stack, navigate to ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," \u2192 ",(0,o.kt)("strong",{parentName:"p"},"Webhooks"),", and click ",(0,o.kt)("strong",{parentName:"p"},"Add Webhook"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Choose the Qubitro Webhook template. "),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Name your integration by filling in the Webhook ID, and paste the values provided in the first step on Qubitro Portal. "),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Create Qubitro Webhook")," button and go back to the Qubitro Portal."),(0,o.kt)("h2",{id:"device-status"},"Device status"),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Go to project")," button and then the ",(0,o.kt)("strong",{parentName:"p"},"Refresh")," button to verify that the devices are listed successfully."),(0,o.kt)("admonition",{title:"Tip",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Once the integration is configured, all devices connected to the same project on The Things Stack will be synchronized automatically.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h2",{id:"configure-the-decoder-on-qubitro"},"Configure the decoder on Qubitro"),(0,o.kt)("p",null,"Navigate to your device page, and click ",(0,o.kt)("strong",{parentName:"p"},"Create function button"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Choose the ",(0,o.kt)("strong",{parentName:"p"},"Decoder function"),", and click ",(0,o.kt)("strong",{parentName:"p"},"Get started"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"We uploaded a template for users\uff0cyou only need to select the product model to quickly set up."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Formatter type"),": Device template",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Manufacturer Brand"),": Seeed Studio",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Model"),": SenseCAP_T1000")),(0,o.kt)("p",null,"Then click ",(0,o.kt)("strong",{parentName:"p"},"Save and complete"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h2",{id:"check-the-data"},"Check the data"),(0,o.kt)("p",null,"Navigate to the device and click on the ",(0,o.kt)("strong",{parentName:"p"},"Data")," tab to verify the incoming data."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h2",{id:"customize-the-dashboardoptional"},"Customize the dashboard(optional)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Location Dashboard")),(0,o.kt)("p",null,"Navigate to your dashbaord page, and click ",(0,o.kt)("strong",{parentName:"p"},"Create new"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Name your dashboard and click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Choose ",(0,o.kt)("strong",{parentName:"p"},"Map")," for the widget type."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Choose your device and ",(0,o.kt)("strong",{parentName:"p"},"coordinates")," value."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Then you can check you location on the dashbaord.\nYou can also customize your other widgets."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png",alt:"pir",width:800,height:"auto"})))}u.isMDXComponent=!0}}]);