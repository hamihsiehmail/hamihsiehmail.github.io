(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3a9f":function(t,e,s){},"78f9":function(t,e,s){"use strict";s("3a9f")},"7a34":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flexmain-column bg-gray"},[s("div",{staticClass:"flexmain-col-row "},[s("div",{staticClass:"flexmain-col-row-960 papershadow"},[s("div",{staticClass:"flexmain-col-row-960-itemleft gobalTitle enclick",on:{click:function(e){t.showProfile=!t.showProfile}}},[s("div",{attrs:{id:"mainprofile"}},[t._v("Profile")])]),t.showProfile?s("div",{staticClass:"flexmain-col-row-960-itemleft gobalText t-area "},[s("p",[t._v("~"+t._s(t.workingYears)+" "+t._s(t.$t("resume.profile.purpose")))])]):t._e(),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalTitle ",staticStyle:{cursor:"pointer"},on:{click:function(e){t.showSkills=!t.showSkills}}},[s("div",{attrs:{id:"mainskills"}},[t._v("Skills")])]),t.showSkills?s("div",[s("div",{staticClass:"flexmain-col-row-960-itemleft gobalSubTitle "},[t._v("\n          "+t._s(t.$t("language"))+"\n        ")]),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalText "},t._l(t.skillLanguage,(function(e,i){return s("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onLanguageIntersection,expression:"onLanguageIntersection"}],key:i,staticClass:"flexmain-col-row-960-icons q-pa-sm",attrs:{"data-id":i}},[s("transition",{attrs:{appear:"",name:"qscale"}},[t.skillLanguageIntersection[i]?s("q-card",[s("img",{staticClass:"skill-item-photo",attrs:{src:e.skillPhotoURL}}),s("q-separator",{attrs:{inset:""}})],1):t._e()],1)],1)})),0),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalSubTitle "},[t._v("\n          OS, Platforms and tools:\n        ")]),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalText "},t._l(t.skillLinux,(function(e,i){return s("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onLinuxIntersection,expression:"onLinuxIntersection"}],key:i,staticClass:"flexmain-col-row-960-icons q-pa-sm",attrs:{"data-id":i}},[s("transition",{attrs:{appear:"",name:"qscale"}},[t.skillLinuxIntersection[i]?s("q-card",[s("img",{staticClass:"skill-item-photo",attrs:{src:e.skillPhotoURL}}),s("q-separator",{attrs:{inset:""}})],1):t._e()],1)],1)})),0),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalSubTitle "},[t._v("\n          Database:\n        ")]),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalText "},t._l(t.skillDatabase,(function(e,i){return s("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onDatabaseIntersection,expression:"onDatabaseIntersection"}],key:i,staticClass:"flexmain-col-row-960-text q-pa-sm ",staticStyle:{"white-space":"nowrap"},attrs:{"data-id":i}},[s("transition",{attrs:{appear:"",name:"qscale"}},[t.skillDatabaseIntersection[i]?s("q-card",[s("q-btn",[t._v(" "+t._s(e.name))])],1):t._e()],1)],1)})),0),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalSubTitle "},[t._v("\n          Protocol:\n        ")]),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalText "},t._l(t.skillProtocol,(function(e,i){return s("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onProtocolIntersection,expression:"onProtocolIntersection"}],key:i,staticClass:"flexmain-col-row-960-text q-pa-sm ",staticStyle:{"white-space":"nowrap"},attrs:{"data-id":i}},[s("transition",{attrs:{name:"qscale"}},[t.skillProtocolIntersection[i]?s("q-card",[s("q-btn",[t._v(" "+t._s(e.name))])],1):t._e()],1)],1)})),0)]):t._e(),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalTitle "},[t._v("\n        "+t._s(t.$t("resume.EmploymentHistory"))+"\n      ")]),s("div",{staticClass:"flexmain-col-row-960-itemleft gobalSubtitle "},[s("q-timeline",{attrs:{layout:t.layout,color:"primary"}},[s("q-timeline-entry",{attrs:{id:"mainehnow",subtitle:t.$t("resume.full.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showehnow=!t.showehnow}}},[t._v("\n                "+t._s(t.$t("resume.full.title"))+"\n              ")])]},proxy:!0}])},[t.showehnow?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[s("div",{staticClass:"enclick"},[s("q-icon",{attrs:{size:"12px",color:"green",name:"info"}}),s("span",{staticStyle:{color:"red"}},[t._v(" cc")]),s("span",[t._v("aaa")])],1),s("div",[t._v(t._s(t.$t("resume.full.wkItem1")))])])]):t._e()],1),s("q-timeline-entry",{attrs:{icon:"R",subtitle:t.$t("resume.RazzorTech.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showRazzorTech=!t.showRazzorTech}}},[t._v("\n                "+t._s(t.$t("resume.RazzorTech.title"))+"\n              ")])]},proxy:!0}])},[t.showRazzorTech?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[t._v(t._s(t.$t("resume.RazzorTech.wkItem1")))])]):t._e()],1),s("q-timeline-entry",{attrs:{icon:"K",subtitle:t.$t("resume.Kahome.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showKahome=!t.showKahome}}},[t._v("\n                "+t._s(t.$t("resume.Kahome.title"))+"\n              ")])]},proxy:!0}])},[t.showKahome?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[t._v(t._s(t.$t("resume.Kahome.wkItem1")))])]):t._e()],1),s("q-timeline-entry",{attrs:{icon:"Q",subtitle:t.$t("resume.Quartics.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showQuartics=!t.showQuartics}}},[t._v("\n                "+t._s(t.$t("resume.Quartics.title"))+"\n              ")])]},proxy:!0}])},[t.showQuartics?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[t._v(t._s(t.$t("resume.Quartics.wkItem1")))])]):t._e()],1),s("q-timeline-entry",{attrs:{icon:"R",subtitle:t.$t("resume.RichPower.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showRichPower=!t.showRichPower}}},[t._v("\n                "+t._s(t.$t("resume.RichPower.title"))+"\n              ")])]},proxy:!0}])},[t.showRichPower?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[t._v(t._s(t.$t("resume.RichPower.wkItem1")))])]):t._e()],1),s("q-timeline-entry",{attrs:{icon:"C",subtitle:t.$t("resume.CastleNet.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showCastleNet=!t.showCastleNet}}},[t._v("\n                "+t._s(t.$t("resume.CastleNet.title"))+"\n              ")])]},proxy:!0}])},[t.showCastleNet?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[t._v(t._s(t.$t("resume.CastleNet.wkItem1")))])]):t._e()],1),s("q-timeline-entry",{attrs:{icon:"A",subtitle:t.$t("resume.ARCHTEK.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showARCHTEK=!t.showARCHTEK}}},[t._v("\n                "+t._s(t.$t("resume.ARCHTEK.title"))+"\n              ")])]},proxy:!0}])},[t.showARCHTEK?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[t._v(t._s(t.$t("resume.ARCHTEK.wkItem1")))])]):t._e()],1),s("q-timeline-entry",{attrs:{icon:"S",subtitle:t.$t("resume.School.time")},scopedSlots:t._u([{key:"title",fn:function(){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.showSchool=!t.showSchool}}},[t._v("\n                "+t._s(t.$t("resume.School.title"))+"\n              ")])]},proxy:!0}])},[t.showSchool?s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"t-area"},[t._v(t._s(t.$t("resume.School.wkItem1")))])]):t._e()],1)],1)],1)])])])},a=[],o=s("ded3"),n=s.n(o),r=s("2f62"),l={name:"resume",components:{},data(){return{skillLanguageIntersection:[],skillLanguage:[{name:"C",skillPhotoURL:"images/language/c.svg"},{name:"C++",skillPhotoURL:"images/language/cpp.svg"},{name:"C#",skillPhotoURL:"images/language/csharp.svg"},{name:"javascript",skillPhotoURL:"images/language/javascript.svg"},{name:"nodejs",skillPhotoURL:"images/language/nodejs.svg",href:"https://nodejs.org/"},{name:"vue",skillPhotoURL:"images/language/vuejs.svg",href:"https://vuejs.org/"},{name:"Go",skillPhotoURL:"images/language/go.svg",href:"https://golang.org/"},{name:"Assembly",skillPhotoURL:"images/language/assembly.svg",href:""}],skillLinuxIntersection:[],skillLinux:[{name:"CentOS",skillPhotoURL:"images/linux/CentOS.png",href:"https://www.centos.org/"},{name:"Raspberry rasbian",skillPhotoURL:"images/linux/raspberry-pi-instalar-rasbian.png",href:"https://www.raspberrypi.org/downloads/raspbian/"},{name:"Amazon EC2",skillPhotoURL:"images/linux/amazon_ec2.png",href:"https://aws.amazon.com/ec2/"}],skillDatabaseIntersection:[],skillDatabase:[{name:"mongodb",tip:"a cross-platform document-oriented database program.",href:"https://www.mongodb.com/"},{name:"redis",tip:"in-memory data structure store, used as a database",href:"https://redis.io/"},{name:"access",tip:"Microsoft Access",href:"https://www.microsoft.com/"},{name:"MySQL",tip:"MySQL",href:""},{name:"SQL Server",tip:"Microsoft SQL Server",href:"https://www.microsoft.com/"}],skillProtocolIntersection:[],skillProtocol:[{name:"RESTful API",tip:"a software architectural style that uses HTTP requests to GET,PUT...",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},{name:"MQTT",tip:"A lightweight messaging protocol",href:"http://mqtt.org/"},{name:"WiFi",tip:"WiFi",href:""},{name:"Zigbee",tip:"https://zigbeealliance.org/",href:"https://zigbeealliance.org/"},{name:"I2C",tip:"I2C",href:""},{name:"UART",tip:"UART",href:""},{name:"SPI",tip:"SPI",href:""}],workingYears:(new Date).getFullYear()-1998,showRazzorTech:!1,showKahome:!1,showQuartics:!1,showRichPower:!1,showCastleNet:!1,showARCHTEK:!1,showSchool:!1}},computed:n()({layout(){return this.$q.screen.lt.sm?"dense":"comfortable"},showProfile:{get(){return this.$store.state.showProfile},set(t){this.$store.commit("vuexSetshowProfile",t)}},showSkills:{get(){return this.$store.state.showSkills},set(t){this.$store.commit("vuexSetshowSkills",t)}},showehnow:{get(){return this.$store.state.showehnow},set(t){this.$store.commit("vuexSetshowehnow",t)}}},Object(r["c"])({})),methods:{onLanguageIntersection(t){const e=parseInt(t.target.dataset.id,10);setTimeout((()=>{this.skillLanguageIntersection.splice(e,1,t.isIntersecting)}),50)},onLinuxIntersection(t){const e=parseInt(t.target.dataset.id,10);setTimeout((()=>{this.skillLinuxIntersection.splice(e,1,t.isIntersecting)}),50)},onDatabaseIntersection(t){const e=parseInt(t.target.dataset.id,10);setTimeout((()=>{this.skillDatabaseIntersection.splice(e,1,t.isIntersecting)}),50)},onProtocolIntersection(t){const e=parseInt(t.target.dataset.id,10);setTimeout((()=>{this.skillProtocolIntersection.splice(e,1,t.isIntersecting)}),50)}},beforeMount(){this.skillLanguageIntersection=Array.apply(null,Array(this.skillLanguage.length)).map((t=>!1)),this.skillLinuxIntersection=Array.apply(null,Array(this.skillLinux.length)).map((t=>!1)),this.skillDatabaseIntersection=Array.apply(null,Array(this.skillDatabase.length)).map((t=>!1)),this.skillProtocolIntersection=Array.apply(null,Array(this.skillProtocol.length)).map((t=>!1))}},c=l,m=(s("78f9"),s("2877")),u=s("f09f"),h=s("eb85"),p=s("9c40"),f=s("05eb"),w=s("74af"),g=s("0016"),d=s("9748"),v=s("eebe"),k=s.n(v),_=Object(m["a"])(c,i,a,!1,null,"2b0019b0",null);e["default"]=_.exports;k()(_,"components",{QCard:u["a"],QSeparator:h["a"],QBtn:p["a"],QTimeline:f["a"],QTimelineEntry:w["a"],QIcon:g["a"]}),k()(_,"directives",{Intersection:d["a"]})}}]);