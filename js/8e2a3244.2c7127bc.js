(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["8e2a3244"],{"0c92":function(t){t.exports=JSON.parse('[{"title":"Sample","id":0,"bg":"statics/post_bg/20190522.jpg","date":{"day":"22","month":"05","year":"2019"}}]')},"59eb":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"q-pa-md col-xs-12 col-lg-10"},[e("div",{staticClass:"q-col-gutter-md row items-start"},t._l(t.posts,function(t){return e("post-item",{key:t.id,attrs:{post:t}})}),1)])])])},o=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4"},[e("router-link",{attrs:{to:{name:"post",params:{post_id:t.post.id}}}},[e("q-img",{attrs:{src:t.post.bg,ratio:5/3}},[e("div",{staticClass:"absolute-bottom text-right"},[e("div",{staticClass:"text-h6 text-right"},[t._v("\n\t   "+t._s(t.post.title)+"\n\t ")]),e("div",{staticClass:"text-caption text-right"},[t._v("\n\t  "+t._s(t.dop)+"\n\t")])])])],1)],1)},i=[],r={name:"PostItem",props:{post:Object},computed:{dop:function(){var t=this.post;return t.date.day+"/"+t.date.month+"/"+t.date.year}}},c=r,l=e("2877"),p=Object(l["a"])(c,n,i,!1,null,"1a4adfe2",null),d=p.exports,u=e("0c92"),m={name:"PageIndex",components:{PostItem:d},data:function(){return{posts:u}}},v=m,f=Object(l["a"])(v,a,o,!1,null,null,null);s["default"]=f.exports}}]);