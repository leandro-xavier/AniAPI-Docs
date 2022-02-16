"use strict";(self.webpackChunkaniapi_docs=self.webpackChunkaniapi_docs||[]).push([[267],{4209:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Implicit Grant",s={unversionedId:"oauth/implicit_grant",id:"oauth/implicit_grant",isDocsHomePage:!1,title:"Implicit Grant",description:"As you can't store your client's credentials in a safe area, you'll need to use the implicit grant.",source:"@site/docs/oauth/implicit_grant.mdx",sourceDirName:"oauth",slug:"/oauth/implicit_grant",permalink:"/docs/oauth/implicit_grant",editUrl:"https://github.com/AniAPI-Team/AniAPI-Docs/edit/main/docs/oauth/implicit_grant.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/authentication"},next:{title:"Authorization Code Grant",permalink:"/docs/oauth/authorization_code_grant"}},d=[{value:"How it works",id:"how-it-works",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Redirect the user",id:"redirect-the-user",children:[]},{value:"Retrieve the token",id:"retrieve-the-token",children:[]}],m={toc:d};function u(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"implicit-grant"},"Implicit Grant"),(0,r.kt)("p",null,"As you can't store ",(0,r.kt)("strong",{parentName:"p"},"your client's credentials")," in a safe area, you'll need to use the implicit grant.\nThis way is mainly used by ",(0,r.kt)("strong",{parentName:"p"},"frontend-only")," environments, like websites or mobile applications."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user asks for ",(0,r.kt)("strong",{parentName:"li"},"Login")," inside your application"),(0,r.kt)("li",{parentName:"ol"},"Instead of building a ",(0,r.kt)("em",{parentName:"li"},"login-form"),", you just redirect the user to ",(0,r.kt)("strong",{parentName:"li"},"our OAuth endpoint")),(0,r.kt)("li",{parentName:"ol"},"The user authenticates with their credentials"),(0,r.kt)("li",{parentName:"ol"},"If nothing goes wrong, the AniAPI server redirects the user to your app with their ",(0,r.kt)("inlineCode",{parentName:"li"},"access_token"))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An AniAPI OAuth Client"),(0,r.kt)("li",{parentName:"ul"},"A website or a mobile application"),(0,r.kt)("li",{parentName:"ul"},"A temporary webserver to grab the token")),(0,r.kt)("h2",{id:"redirect-the-user"},"Redirect the user"),(0,r.kt)("p",null,"Open a browser window (or just redirect if your application is a website) and make a request to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.aniapi.com/v1/oauth"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"oauth")," endpoint expects some parameters to identify the client calling it:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"client_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Your client ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"redirect_uri")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Your client redirect URI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"response_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"For implicit grant pass ",(0,r.kt)("inlineCode",{parentName:"td"},"token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"A random string generated by your application")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," values must match your client's one."))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," parameter (optional) is used to protect your application from ",(0,r.kt)("em",{parentName:"p"},"cross-site request forgery")," (",(0,r.kt)("strong",{parentName:"p"},"CSRF"),").\nIf provided, the AniAPI server will return it alongside the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token"),".\nVerify it against the value you provided before to validate the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="Example request URL"',title:'"Example',request:!0,'URL"':!0},"https://api.aniapi.com/v1/oauth?\n    response_type=token\n    &client_id=<CLIENT_ID>\n    &redirect_uri=<REDIRECT_URI>\n    &state=<RANDOM_STRING>\n")),(0,r.kt)("h2",{id:"retrieve-the-token"},"Retrieve the token"),(0,r.kt)("p",null,"Once the user approved the ",(0,r.kt)("strong",{parentName:"p"},"Authentication")," request and completed the login step, the ",(0,r.kt)("strong",{parentName:"p"},"AniAPI server")," will redirect them back to your application.\nLet's assume you provided ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/auth")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," value. This will be the redirection URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="Example redirect URL"',title:'"Example',redirect:!0,'URL"':!0},"http://localhost:3000/auth/#access_token=<TOKEN>&state=<RANDOM_STRING>\n")),(0,r.kt)("p",null,"As you can see, inside the ",(0,r.kt)("strong",{parentName:"p"},"URL fragment")," there will be the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," and the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," value you provided initially."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("strong",{parentName:"p"},"URL fragment")," differs from a ",(0,r.kt)("strong",{parentName:"p"},"querystring")," because it is accesible from ",(0,r.kt)("strong",{parentName:"p"},"frontend")," only."),(0,r.kt)("p",{parentName:"div"},"You need to extract it by using ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/JavaScript"},"JavaScript"))," inside the webpage."))))}u.isMDXComponent=!0}}]);