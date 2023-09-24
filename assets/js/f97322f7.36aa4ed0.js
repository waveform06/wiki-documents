"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,u=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return n?i.createElement(u,s(s({ref:t},d),{},{components:n})):i.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},47640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={description:"Introduction to SenseCraft Model Assistant.",title:"SenseCraft Model Assistant",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/sscma",last_update:{date:"08/09/2023",author:"Salman"}},s=void 0,r={unversionedId:"TinyML/TinyML_Workshop/sscma",id:"TinyML/TinyML_Workshop/sscma",title:"SenseCraft Model Assistant",description:"Introduction to SenseCraft Model Assistant.",source:"@site/docs/TinyML/TinyML_Workshop/sscma.md",sourceDirName:"TinyML/TinyML_Workshop",slug:"/sscma",permalink:"/sscma",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/TinyML/TinyML_Workshop/sscma.md",tags:[],version:"current",lastUpdatedBy:"Salman",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Introduction to SenseCraft Model Assistant.",title:"SenseCraft Model Assistant",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/sscma",last_update:{date:"08/09/2023",author:"Salman"}}},l={},c=[{value:"SenseCraft Model Assistant",id:"sensecraft-model-assistant",level:2},{value:"1. Get started with Face Recognition.",id:"1-get-started-with-face-recognition",level:3},{value:"Step 1. Install XIAO ESP32S3 Sense expansion board",id:"step-1-install-xiao-esp32s3-sense-expansion-board",level:4},{value:"Step 2. Connecting the XIAO to your PC",id:"step-2-connecting-the-xiao-to-your-pc",level:4},{value:"Step 3. Go to the SenseCraft Model Assistant page and connect the XIAO",id:"step-3-go-to-the-sensecraft-model-assistant-page-and-connect-the-xiao",level:4},{value:"2. SenseCraft Triggers - Control things with tinyML",id:"2-sensecraft-triggers---control-things-with-tinyml",level:3},{value:"3. More Custom Prebuild Models",id:"3-more-custom-prebuild-models",level:3},{value:"Models Usage",id:"models-usage",level:4}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sensecraft-model-assistant"},"SenseCraft Model Assistant"),(0,o.kt)("p",null,"Seeed Studio ",(0,o.kt)("a",{parentName:"p",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"},"SenseCraft Model Assistant")," is an open-source project focused on embedded AI. We have optimized excellent algorithms from OpenMMLab for real-world scenarios and made implementation more user-friendly, achieving faster and more accurate inference on embedded devices. With SenseCraft Model Assistant we can easily get-started with tinyML project and work on it. Let's get started. "),(0,o.kt)("h3",{id:"1-get-started-with-face-recognition"},"1. Get started with Face Recognition."),(0,o.kt)("p",null,"We flash the SenseCraft Model Assistant program in advance for all XIAO ESP32S3 Sense participating in the Workshop, and pre-set the model for face recognition. Simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly display face recognition."),(0,o.kt)("h4",{id:"step-1-install-xiao-esp32s3-sense-expansion-board"},"Step 1. Install XIAO ESP32S3 Sense expansion board"),(0,o.kt)("p",null,'First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.'),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif",style:{width:500,height:"auto"}})),(0,o.kt)("h4",{id:"step-2-connecting-the-xiao-to-your-pc"},"Step 2. Connecting the XIAO to your PC"),(0,o.kt)("p",null,"Connect the XIAO to your PC using a data cable with data transfer function."),(0,o.kt)("h4",{id:"step-3-go-to-the-sensecraft-model-assistant-page-and-connect-the-xiao"},"Step 3. Go to the SenseCraft Model Assistant page and connect the XIAO"),(0,o.kt)("p",null,"Click the button below to go to the SenseCraft Model Assistant homepage."),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"2"},"SenseCraft Model Assistant"))))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Once we are on the homepage of SenseCraft Model Assistant, we need to first need to connect the XIAO ESPS3 for that, click ",(0,o.kt)("strong",{parentName:"p"},"Connect")," button."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Home_Connect.png",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"The browser will then pop up a window. We need to select the correct port for XIAO here. For ",(0,o.kt)("strong",{parentName:"p"},"Windows"),", this port usually starts with ",(0,o.kt)("strong",{parentName:"p"},"COM"),", and in case of ",(0,o.kt)("strong",{parentName:"p"},"MacOS"),", this port usually starts with ",(0,o.kt)("strong",{parentName:"p"},"/dev/tty"),". And it will have the words ",(0,o.kt)("strong",{parentName:"p"},"USB JTAG"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/6.png",style:{width:700,height:"auto"}})),(0,o.kt)("p",null,"Clicking the ",(0,o.kt)("strong",{parentName:"p"},"Connect")," button will only result in an automatically identify the board and configuration information is being read."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model.png",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"Once the ",(0,o.kt)("strong",{parentName:"p"},"Connect")," button is back to Red as ",(0,o.kt)("strong",{parentName:"p"},"Disconnect"),', we can select the model from the "Ready to use AI Models" list. Here I selected the face recognition for demo. After selecting it, click the ',(0,o.kt)("strong",{parentName:"p"},"Send")," button and wait few second."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png\n",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"Finally, we come to the Preview section, click once on ",(0,o.kt)("strong",{parentName:"p"},"Stop")," in the upper right corner, and then click ",(0,o.kt)("strong",{parentName:"p"},"Invoke"),", if everything runs smoothly, you can see the real-time screen effect. "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Face_demo.png",style:{width:800,height:"auto"}})),(0,o.kt)("h3",{id:"2-sensecraft-triggers---control-things-with-tinyml"},"2. SenseCraft Triggers - Control things with tinyML"),(0,o.kt)("p",null,"We can also make conditions statements using the SenseCraft tool.  for example: we can control XIAO-ESP32S3 onboard LED when a face is detected. For that, go to ",(0,o.kt)("strong",{parentName:"p"},"Output"),' section and Select the "Trigger action" to setup a trigger. . '),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_action1.png",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"Here, When the face detection have confidencet above 50% and enable a trigger.  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_action2.png",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"And here the ",(0,o.kt)("strong",{parentName:"p"},"Trigger Action"),' is "Light up the LED".  Ater that, click "Send" and you can see, whenver the face detected, you can see the onboard LED is turned on. '),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_action3.png",style:{width:800,height:"auto"}})),(0,o.kt)("h3",{id:"3-more-custom-prebuild-models"},"3. More Custom Prebuild Models"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In addition to the face models prepared in advance, we are also supporting more models for XIAO ESP32S3, so stay tuned!")),(0,o.kt)("p",null,"SenseCraft comes with various inbuilt models, you can try few other models and experiment. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Face Detection"),(0,o.kt)("p",{parentName:"li"},"Preview:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png",style:{width:600,height:"auto"}}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Digital Meter Water"),(0,o.kt)("p",{parentName:"li"},"Preview:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png",style:{width:600,height:"auto"}}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"yolov5 Meter Water"),(0,o.kt)("p",{parentName:"li"},"Preview:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png",style:{width:600,height:"auto"}})))),(0,o.kt)("h4",{id:"models-usage"},"Models Usage"),(0,o.kt)("p",null,"If you want to use a custom model, follow the instructions below"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Step 1. Select the Models listed on "Ready to use AI models"')),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Custom_models.png",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"Here I selected the water meter reading demo. After selecting it, click the ",(0,o.kt)("strong",{parentName:"p"},"Send")," button and wait few second."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/EdgeLab/src/img/Edgelab2.0/EL_Select_model_loading.png\n",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"Finally, we come to the Preview section, click once on ",(0,o.kt)("strong",{parentName:"p"},"Stop")," in the upper right corner, and then click ",(0,o.kt)("strong",{parentName:"p"},"Invoke"),", if everything runs smoothly, you can see the real-time screen effect. "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/10.gif",style:{width:800,height:"auto"}})),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"todo"},"ToDo"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Load and Run ",(0,o.kt)("strong",{parentName:"li"},"Face Recognition Model")," with SenseCraft Model Assistant. "),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup a Trigger and ",(0,o.kt)("strong",{parentName:"li"},"Control LED")," with SenseCraft Model Assistant. ")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you also want to experience this water meter that generates readings automatically, you can download the zip package by clicking ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip"},"here")),", unzip it and then double click to open the html file in the root directory.")))}p.isMDXComponent=!0}}]);