(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["51347156"],{"0901":function(t,e,a){"use strict";var o=a("42b0"),i=a.n(o);i.a},"42b0":function(t,e,a){},"7f1d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-xs-12 col-lg-10"},[a("div",{staticClass:"q-gutter-md row items-start"},t._l(t.projects,function(t){return a("project-item",{key:t.id,attrs:{project:t}})}),1)])])])},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-parallax",{attrs:{height:400,speed:.5},scopedSlots:t._u([{key:"media",fn:function(){return[a("img",{attrs:{src:t.project.bg}})]},proxy:!0}])},[a("div",{staticClass:"absolute-bottom caption text-white"},[a("div",{staticClass:"text-h6"},[t._v("\n\t\t\t"+t._s(t.project.title)+"\n\t\t")]),a("a",{staticClass:"text-caption text-white",attrs:{href:t.project.url}},[t._v("\n\t\t\t"+t._s(t.project.url)+"\n\t\t")]),a("div",{staticClass:"text-body1"},[t._v("\n\t\t\t"+t._s(t.project.description)+"\n\t\t")])])])},r=[],s={name:"ProjectItem",props:{project:Object}},c=s,l=(a("0901"),a("2877")),d=Object(l["a"])(c,n,r,!1,null,null,null),p=d.exports,u={name:"Projects",components:{ProjectItem:p},data:function(){return{projects:[{title:"OpenCV for Data Science",description:"OpenCV for data science is a document and codebase bringing together Computer Vision and Data Science. The document covers an introduction to OpenCV by breaking down the necessary components of image processing, object detection and feature detection. Currently the project is active if you are interested in getting involved feel free to send me a message.",bg:"statics/project_bg/opencv.jpg",url:""},{title:"Omni",description:"Online software written with the VueJS and the Quasar Framework. The project relies on a Python backend. Omni is an online e2e encrypted suite of tools for team communication and productivity. The project makes use of websockets and an extensive rest API. There are currently some limitations and the project has been downsized in order to move on to using decentralized communication technology like WebRTC.",bg:"statics/project_bg/omni.jpg",url:"https://www.omni.ml"},{title:"EarlyBird",description:"A WebClient used to automatically post scheduled tweets. The project is written in Javacript and has a Banckend written in Python. Further use of the Twitter API can be made in order to collect more data and process it based on the tweets performance. The project is currently hosted by Heroku and Now Zeit and is only for display purposes.",bg:"statics/project_bg/earlybird.jpg",url:"https://earlybird.now.sh"},{title:"Aphelia",description:"Web Based statistical software aimed at cataloguing and pricing art work. The project was initially designed to be a standalone pricing model, however due to the unavailability of target data it was necessary to develop a online catalogue. The project was actively developed for 8 months and consists of documentation of the current state of the art market, literature regarding art valuation and an extensive codebase. It is currently not under active development.",bg:"statics/project_bg/aphelia.jpg",url:""},{title:"Gallop",description:"Real time Statistical arbitrage software, written in Java. The main objective was to automatically place bets in order to secure small arbitrage margins. The project additionally considered the probability that if a given bet was to lose, some additional profit would be made from free bets. The source code is not openly available but for more information feel free to contact me.",bg:"statics/project_bg/gallop.jpg",url:""}]}}},m=u,b=Object(l["a"])(m,o,i,!1,null,null,null);e["default"]=b.exports}}]);