(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(41)},35:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),o=n(13),r=n.n(o),s=(n(35),n(8)),c=n(11),u=n(12),i=n(9),m=n(28),p=n(20),d="load_posts",f="load_post_with_comments",h="change_input_value";function b(t){return function(e){fetch(t).then(function(t){return t.json()}).then(function(t){e({type:d,listAllPosts:t})})}}var v={listAllPosts:null,postWithComments:null,commentBody:"",id:null};var E=n(15),j=n(16),y=n(18),O=n(17),P=n(19),g=function(t){function e(){return Object(E.a)(this,e),Object(y.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(P.a)(e,t),Object(j.a)(e,[{key:"componentDidMount",value:function(){this.props.requestList("https://simple-blog-api.crew.red/posts")}},{key:"render",value:function(){var t=this.props.listAllPosts;return null===t?l.a.createElement("p",null,"Loading..."):l.a.createElement("div",{className:"posts-container"},t.map(function(t){return l.a.createElement("article",{className:"post",key:t.id},l.a.createElement("h2",null,t.title),l.a.createElement("p",null,t.body),l.a.createElement(u.b,{to:"/posts/"+t.id},l.a.createElement("span",null,"Show details")))}))}}]),e}(a.Component);var _=Object(s.b)(function(t){return{listAllPosts:t.listAllPosts}},function(t){return{requestList:function(e){return t(b(e))}}})(g);var w=Object(s.b)(function(t){return{commentBody:t.commentBody}},function(t){return{changeInputValue:function(e){return t({type:h,value:e})}}})(function(t){var e=t.commentBody,n=t.changeInputValue;return l.a.createElement("form",{className:"comment-form"},l.a.createElement("textarea",{className:"comment-form__text",value:e,onChange:function(t){return n(t.target.value)}}),l.a.createElement("input",{className:"comment-form__btn",type:"submit",value:"Public"}))});function A(t){return l.a.createElement("div",null,l.a.createElement("div",null,"Comments map from props.comments"),l.a.createElement(w,null))}var L=function(t){function e(){return Object(E.a)(this,e),Object(y.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(P.a)(e,t),Object(j.a)(e,[{key:"componentDidMount",value:function(){this.props.requestList("https://simple-blog-api.crew.red/posts")}},{key:"render",value:function(){var t=this.props,e=t.listAllPosts,n=t.id,a=e.find(function(t){return t.id===+n});return a?l.a.createElement("article",{className:"post"},l.a.createElement("h2",null,a.title),l.a.createElement("p",null,a.body),l.a.createElement(A,{id:a.id})):l.a.createElement("p",null,"Loading...")}}]),e}(a.Component);var k=Object(s.b)(function(t,e){return{listAllPosts:t.listAllPosts,id:e.match.params.post_id}},function(t){return{requestList:function(e){return t(b(e))}}})(L),C=Object(c.c)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(p.a)({},t,{listAllPosts:e.listAllPosts});case f:return Object(p.a)({},t,{postWithComments:e.postWithComments});case h:return Object(p.a)({},t,{commentBody:e.value});default:return t}},Object(c.a)(m.a));var N=function(){return l.a.createElement(s.a,{store:C},l.a.createElement(u.a,null,l.a.createElement(u.b,{className:"all-posts",to:"/LatestPosts"},"All posts"),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/LatestPosts",exact:!0,component:_}),l.a.createElement(i.a,{path:"/posts/:post_id",component:k}))))};r.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.cc4ab50e.chunk.js.map