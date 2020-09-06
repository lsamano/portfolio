(this["webpackJsonplsamano.github.io"]=this["webpackJsonplsamano.github.io"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(94),a(28)),i=(a(95),a(152)),m=a(141),s=a(142),u=a(144),p=a(41),d=a(164),h=a(143),g=a(145),f=a(147),b=a(149),E=a(167),y=a(148),v=a(17),w=a(150),k=a(67),j=a.n(k),S=a(102),C=a(137),x=function(e){var t=e.children,a=Object(C.a)();return r.a.createElement(S.a,{appear:!1,direction:"down",in:!a},t)},R=a(139),N=function(e){var t=e.children,a=Object(C.a)();return r.a.createElement(R.a,{in:a},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:"to-top-button"},t))},O=a(140),z=Object(O.a)((function(e){return{root:{color:e.palette.primary.light,marginLeft:"30px"},text:{whiteSpace:"nowrap"},icon:{marginRight:e.spacing(2)},list:{width:"200px"}}})),_=function(e){var t=e.value,a=e.setValue,o=z(),c=Object(v.a)(),i=Object(n.useState)(!1),k=Object(l.a)(i,2),S=k[0],C=k[1],R=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&C(e)}},O=function(e,t){var n;switch(t){case 0:n=document.querySelector("#back-to-top-anchor");break;case 1:n=document.querySelector("#about");break;case 2:n=document.querySelector("#projects");break;case 3:n=document.querySelector("#blog");break;default:n=document.querySelector("#contact-me")}n&&n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),a(t)},_=Object(n.useRef)(null),A=Object(n.useRef)(300);return Object(n.useEffect)((function(){_.current.style.backgroundColor="".concat(c.palette.secondary.main,"25");var e=document.addEventListener("scroll",(function(t){var a=window.pageYOffset,n=c.palette.secondary.main;if(a<=A.current)n="".concat(n,"25");else if(a<900){var r,o=100*a/900,l=Math.round(255*o/100);r=o<7?"0"+l.toString(16).toUpperCase():l.toString(16).toUpperCase(),n="".concat(n).concat(r)}else n="".concat(n,"FF");return _.current.style.backgroundColor=n,function(){document.removeEventListener("scroll",e)}}),[c])})),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(m.a,{ref:_},r.a.createElement(s.a,null,r.a.createElement("i",{className:"fas fa-laptop-code fa-2x ".concat(o.icon)}),r.a.createElement(p.a,{variant:"h6",className:"logo-and-name ".concat(o.text)},"Leizl Samano"),r.a.createElement("section",{className:"tabs"},r.a.createElement(d.a,{value:t,indicatorColor:"primary",onChange:O,"aria-label":"simple tabs example",variant:"fullWidth"},r.a.createElement(h.a,{label:"Home"}),r.a.createElement(h.a,{label:"About"}),r.a.createElement(h.a,{label:"Projects"}),r.a.createElement(h.a,{label:"Blog"})),r.a.createElement(u.a,{variant:"outlined",color:"primary",className:"contact-button ".concat(o.root," ").concat(o.text),onClick:function(e){return O(0,4)}},"Contact Me")),r.a.createElement("section",{className:"burger"},r.a.createElement("i",{className:"fas fa-bars fa-2x",onClick:R(!0)}),r.a.createElement(g.a,{anchor:"right",open:S,onClose:R(!1)},r.a.createElement("div",{role:"presentation",className:o.list,onClick:R(!1),onKeyDown:R(!1)},r.a.createElement(f.a,{component:"nav"},["Home","About","Projects","Blog"].map((function(e,t){return r.a.createElement(E.a,{button:!0,key:e,onClick:function(e){return O(0,t)}},r.a.createElement(y.a,{primary:e}))})),r.a.createElement(b.a,null),r.a.createElement(E.a,{button:!0,onClick:function(e){return O(0,4)}},r.a.createElement(y.a,{primary:"Contact Me"}))))))))),r.a.createElement(s.a,{id:"back-to-top-anchor"}),r.a.createElement(N,null,r.a.createElement(w.a,{color:"primary",size:"large","aria-label":"scroll back to top"},r.a.createElement(j.a,null))))},A=a(151),M=a(165),L=Object(O.a)((function(e){return{root:{backgroundColor:"#27299a",color:"white"},icon:{color:"white"}}})),B=function(){var e=L();return r.a.createElement("footer",{className:e.root},r.a.createElement(M.a,{title:"LinkedIn",arrow:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/leizlsamano/"},r.a.createElement(A.a,{className:"fab fa-linkedin ".concat(e.icon),fontSize:"large"}))),r.a.createElement(M.a,{title:"GitHub",arrow:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/lsamano"},r.a.createElement(A.a,{className:"fab fa-github ".concat(e.icon),fontSize:"large"}))),r.a.createElement(M.a,{title:"Medium",arrow:!0},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@leizl.samano"},r.a.createElement(A.a,{className:"fab fa-medium ".concat(e.icon),fontSize:"large"}))),r.a.createElement("br",null),r.a.createElement("span",{className:"copyright"},"Copyright \xa9 2020 Leizl Samano. All rights reserved."))},H=a(53),I="I'm Leizl, I'm a Software Engineer. In order to make a career switch from nursing, I completed Flatiron School's Software Engineering Immersive program.",F={"tetris-v2":{title:"Tetris v2",subtitle:"Challenge your friends in Tetris",img_url:"https://raw.githubusercontent.com/lsamano/tetris-v2/master/images/preview.png",github:"https://github.com/lsamano/tetris-v2",demo:"http://tetris-v2.herokuapp.com/",tags:["JavaScript","Express","WebSockets"]},tourn:{title:"Tourn",subtitle:"Assemble an eSports team, win some tournaments",img_url:"https://raw.githubusercontent.com/lsamano/tourn-client/master/images/preview.png",github:"https://github.com/lsamano/tourn-client",demo:"https://tourn-tournaments.herokuapp.com/",tags:["JavaScript","React","Redux","Ruby on Rails","PostgreSQL"]},ohsnap:{title:"OhSnap",subtitle:"Share photos, like, comment, and follow",img_url:"https://raw.githubusercontent.com/lsamano/OhSnap/master/images/preview.png",github:"https://github.com/lsamano/OhSnap",demo:"https://ohsnap-app.herokuapp.com/",tags:["Ruby","Ruby on Rails","PostgreSQL"]},"moon-harvest":{title:"Moon Harvest",subtitle:"Enjoy a farming life in space",img_url:"https://raw.githubusercontent.com/lsamano/Moon-Harvest-CLI-Game-v2/master/images/preview.png",github:"https://github.com/lsamano/Moon-Harvest-CLI-Game-v2",demo:"",tags:["Ruby"]}},T=[{id:3,title:"How to Make a Weather App Using React",subtitle:"Looking for a quick and clean React project to whip up? Try making this weather app!",url:"https://medium.com/@leizl.samano/how-to-make-a-weather-app-using-react-403c88252deb?source=friends_link&sk=49f59f70518898763eaecbdd1f0f99e3",img_url:"https://miro.medium.com/max/2500/1*B8I67J9L1e3qARXAsSeFVA.png"},{id:4,title:"Using JWT in Your React+Redux App for Authorization",subtitle:"An explanation and guide for how to handle JWT and Authentication in the frontend of your web app",url:"https://levelup.gitconnected.com/using-jwt-in-your-react-redux-app-for-authorization-d31be51a50d2?source=friends_link&sk=e91837760476a3ac580ce367b45f57d7",img_url:"https://miro.medium.com/max/1400/1*21uJ1YDk7qllnM1DaHkhxg.png"},{id:5,title:"Getting Started with React Hooks: Giving State and Lifecycle Methods to Functional Components",subtitle:"An introduction to React Hooks, specifically useState and useEffect and how to implement them.",url:"https://medium.com/swlh/getting-started-with-react-hooks-giving-state-and-lifecycle-methods-to-functional-components-1c9ac668ca73?source=friends_link&sk=d28b452be82769c7197cfccccc94edd0",img_url:"https://miro.medium.com/max/1280/1*e6hkdDHSmasfubzxW-8jcg.jpeg"},{id:6,title:"How To Create a Follow Feature in Rails by Aliasing Associations",subtitle:"Use macros to create association methods",url:"https://medium.com/better-programming/how-to-create-a-follow-feature-in-rails-by-aliasing-associations-30d63edee284?source=friends_link&sk=71b47a775d4ee2bcb8ec6b4817a9f6de",img_url:"https://miro.medium.com/max/1750/0*K1sR7RDdrAV6J292"},{id:7,title:"Material-UI: How to Implement Dark Mode and Edit Theme Colors",subtitle:"Customizing Material-UI can be a bit confusing for first-time users. Let\u2019s explore how to edit the theme.",url:"https://levelup.gitconnected.com/material-ui-how-to-implement-dark-mode-and-edit-theme-colors-effcfa0893b9?source=friends_link&sk=5403998930e735fe1173f962f17053be",img_url:"https://miro.medium.com/max/2000/1*RdzHCmUpIw8zGZRxrgZnXA.png"}],W=a(24),P=function(e){var t=e.completed,a=e.tech,n=Object(v.a)(),o={height:"100%",width:"".concat(t,"%"),backgroundColor:n.palette.primary.light,borderRadius:"inherit",textAlign:"right"},c={marginTop:10,height:20,paddingLeft:"8px",textAlign:"center",color:"white",backgroundColor:n.palette.primary.light};return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("span",{style:c},a),r.a.createElement("div",{style:{height:20,width:"100%",backgroundColor:"#e0e0de",marginTop:10,marginBottom:20}},r.a.createElement("div",{style:o},r.a.createElement("span",{style:{padding:5,color:"white",fontWeight:"bold"}},"".concat(t,"%")))))},q=function(e){var t=e.myRef,a=I;return r.a.createElement(H.a,{component:"section",className:"about section",id:"about",ref:t},r.a.createElement(p.a,{variant:"h2",component:"h2",align:"center"},"About Me"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("img",{src:"/images/avatar.jpg",alt:"Leizl Samano",className:"avatar"}),r.a.createElement(p.a,{variant:"body1"},a)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"h3",component:"h3"},"My Experience"),r.a.createElement(p.a,{variant:"h6",component:"h6"},"Software Engineering Coach at Flatiron School"),r.a.createElement(p.a,{variant:"body1"},"Worked with students learning programming.",r.a.createElement("br",null),"Size: 200+ employees",r.a.createElement("br",null),"Industry: Education")),r.a.createElement("div",{className:"column"},r.a.createElement(p.a,{variant:"h3",component:"h3"},"My Current Skills"),r.a.createElement(P,{completed:90,tech:"JavaScript"}),r.a.createElement(P,{completed:90,tech:"React"}),r.a.createElement(P,{completed:70,tech:"HTML5"}),r.a.createElement(P,{completed:60,tech:"CSS3"}),r.a.createElement(P,{completed:80,tech:"Ruby"}),r.a.createElement(P,{completed:80,tech:"Rails"}),r.a.createElement(P,{completed:70,tech:"PostgreSQL"}),r.a.createElement(P,{completed:50,tech:"MongoDB"}),r.a.createElement("div",{className:"dev-icons"},r.a.createElement(W.b,{size:32}),r.a.createElement(W.a,{size:32}),r.a.createElement(W.c,{size:32}),r.a.createElement(W.e,{size:32}),r.a.createElement(W.g,{size:32}),r.a.createElement(W.i,{size:32}),r.a.createElement(W.h,{size:32}),r.a.createElement(W.f,{size:32}),r.a.createElement(W.d,{size:32})))))},J=Object(O.a)({root:{color:"white"},button:{position:"absolute",bottom:"0px"}}),D=function(e){e.setValue;var t=e.myRef,a=J();return r.a.createElement("section",{className:"section ".concat(a.root),id:"home",ref:t},r.a.createElement(i.a,{className:"home-column"},r.a.createElement(p.a,{variant:"h2",component:"h2",gutterBottom:!0},"Hi, I'm Leizl."),r.a.createElement(p.a,{variant:"h4",component:"h4",gutterBottom:!0},"Full Stack Software Engineer."),r.a.createElement(p.a,{variant:"body1",gutterBottom:!0},"Welcome to my site. This site was made using React.js and Material-UI for styling.",r.a.createElement("br",null)," To continue exploring, please scroll down and enjoy."),r.a.createElement("br",null),r.a.createElement(u.a,{className:"long-button ".concat(a.button),color:"inherit",size:"large",variant:"outlined",onClick:function(){return document.querySelector("#about").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}},r.a.createElement("i",{className:"fas fa-angle-double-down fa-2x"}),r.a.createElement("span",{style:{fontSize:"2em",paddingLeft:"10px"}},"Keep Going..."))))},U=a(158),V=a(159),G=a(161),K=a(160),Q=a(157),Y=a(72),X=a(4),Z=a(156),$=a(153),ee=a(154),te=a(155),ae=a(69),ne=a.n(ae),re=Object(X.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,o=Object(Y.a)(e,["children","classes","onClose"]);return r.a.createElement($.a,Object.assign({disableTypography:!0,className:a.root},o),r.a.createElement(p.a,{variant:"h6"},t),n?r.a.createElement(A.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(ne.a,null)):null)})),oe=Object(X.a)((function(e){return{root:{padding:e.spacing(2)}}}))(ee.a),ce=Object(X.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(te.a),le=function(e){e.handleClickOpen;var t=e.handleClose,a=e.open,n=e.title,o=e.subtitle,c=e.tags,l=e.img_url,i=e.github_url,m=e.demo_url;return r.a.createElement("div",null,r.a.createElement(Z.a,{onClose:t,"aria-labelledby":"customized-dialog-title",open:a,fullWidth:!0,maxWidth:"md"},r.a.createElement("img",{src:l,style:{width:"100%",height:"auto"},alt:"preview of ".concat(n)}),r.a.createElement(re,{id:"customized-dialog-title",onClose:t},n),r.a.createElement(oe,null,r.a.createElement(p.a,{variant:"subtitle1",gutterBottom:!0},o),r.a.createElement(p.a,{variant:"subtitle2",gutterBottom:!0},c.join(", "))),r.a.createElement(ce,null,r.a.createElement(u.a,{autoFocus:!0,href:i,onClick:t,color:"secondary"},"Repo"),m&&r.a.createElement(u.a,{autoFocus:!0,href:m,onClick:t,color:"primary"},"Demo"))))},ie=Object(O.a)((function(e){return{span:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,padding:"5px",margin:"5px"},cardMedia:{width:"100%"},tagContainer:{display:"flex",flexWrap:"wrap",justifyContent:"center"},card:{maxWidth:"45%",margin:"20px"},mobileCard:{margin:"20px"}}})),me=function(e){var t=e.title,a=e.subtitle,o=e.img_url,c=e.tags,i=(e.shorthand,e.github),m=e.demo,s=ie(),u=s.span,d=s.cardMedia,h=s.tagContainer,g=s.card,f=s.mobileCard,b=Object(Q.a)("(min-width:850px)"),E=Object(n.useState)(!1),y=Object(l.a)(E,2),v=y[0],w=y[1],k=function(){w(!0)};return r.a.createElement(U.a,{className:b?g:f},r.a.createElement(V.a,{onClick:k},r.a.createElement(K.a,{component:"img",src:o,alt:"project image",className:d}),r.a.createElement(G.a,null,r.a.createElement(p.a,{variant:"h5",component:"h2"},t),r.a.createElement(p.a,{color:"textSecondary",gutterBottom:!0},a),r.a.createElement("div",{className:h},c.map((function(e,t){return r.a.createElement("span",{key:t,className:u},e)}))))),r.a.createElement(le,{title:t,subtitle:a,tags:c,img_url:o,github_url:i,demo_url:m,handleClickOpen:k,handleClose:function(){w(!1)},open:v}))},se=function(e){var t=e.projects,a=e.myRef;return r.a.createElement("section",{id:"projects",className:"projects section",ref:a},r.a.createElement(p.a,{variant:"h2",component:"h2",gutterBottom:!0,align:"center"},"Projects"),r.a.createElement(i.a,{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}},function(){for(var e=[],a=0,n=Object.entries(t);a<n.length;a++){var o=Object(l.a)(n[a],2),c=o[0],i=o[1];e.push(r.a.createElement(me,Object.assign({},i,{shorthand:c,key:c})))}return e}()))},ue=function(e){var t=e.project,a=t.title,n=t.subtitle,o=t.tags,c=t.img_url;return r.a.createElement("div",null,r.a.createElement("img",{src:c,alt:"Preview",style:{width:"50%"}}),r.a.createElement("h1",null,a),r.a.createElement("h3",null,n),r.a.createElement("p",null,o.join(", ")))},pe=Object(O.a)((function(e){return{root:{width:"30%",margin:"10px"},mobile:{width:"100%",margin:"10px"},actionContent:{height:"100%"},titleFont:{fontSize:18}}})),de=function(e){var t=e.story,a=t.title,n=t.subtitle,o=t.url,c=t.img_url,l=pe(),i=l.root,m=l.mobile,s=l.actionContent,u=l.titleFont,d=Object(Q.a)("(min-width:850px)");return r.a.createElement(U.a,{className:d?i:m},r.a.createElement(V.a,{className:s,href:o},c?r.a.createElement(K.a,{component:"img",src:c,alt:a}):null,r.a.createElement(G.a,{className:s},r.a.createElement(p.a,{className:u},a),r.a.createElement(p.a,{color:"textSecondary"},n))))},he=function(e){var t=e.myRef;return r.a.createElement("section",{className:"blog section",id:"blog",ref:t},r.a.createElement(i.a,null,r.a.createElement(p.a,{variant:"h2",component:"h2",align:"center"},"Blogs"),r.a.createElement("div",{className:"stories-container"},T.map((function(e){return r.a.createElement(de,{key:e.id,story:e})})))))},ge=Object(O.a)((function(e){return{root:{backgroundColor:e.palette.secondary.light,minHeight:"200px"},text:{color:"white",textAlign:"center"},link:{color:e.palette.primary.light}}})),fe={About:q,Home:D,Projects:se,Blog:he,OneProject:ue,ContactMe:function(e){var t=e.myRef,a=ge();return r.a.createElement("section",{id:"contact-me",className:"contact-me section ".concat(a.root," splash-footer"),ref:t},r.a.createElement(p.a,{variant:"h2",className:a.text,component:"h2",gutterBottom:!0},"Contact Me"),r.a.createElement(i.a,{className:a.text},r.a.createElement(p.a,{variant:"body1"},"Email me at ",r.a.createElement("a",{href:"mailto:leizl.samano@gmail.com",className:a.link},"leizl.samano@gmail.com"))))}};var be=function(e){var t=fe.Home,a=fe.About,o=fe.Projects,c=fe.Blog,m=fe.ContactMe,s=Object(n.useState)(0),u=Object(l.a)(s,2),p=u[0],d=u[1],h=Object(n.useRef)(null),g=Object(n.useRef)(null),f=Object(n.useRef)(null),b=Object(n.useRef)(null),E=Object(n.useRef)(null),y=function(e){var t=e.getBoundingClientRect(),a=t.top,n=t.bottom;return a<window.innerHeight/2&&n>=0};return Object(n.useEffect)((function(){var t=document.addEventListener("scroll",(function(a){return y(b.current)?(d(3),"/blog"!==e.history.location.pathname&&e.history.push("/blog")):y(f.current)?(d(2),"/projects"!==e.history.location.pathname&&e.history.push("/projects")):y(g.current)?(d(1),"/about"!==e.history.location.pathname&&e.history.push("/about")):y(h.current)&&(d(0),"/"!==e.history.location.pathname&&e.history.push("/")),function(){document.removeEventListener("scroll",t)}}),[])})),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"splash"},r.a.createElement(_,{setValue:d,value:p}),r.a.createElement(t,{setValue:d,myRef:h})),r.a.createElement("main",null,r.a.createElement(i.a,{className:"main-div"},r.a.createElement(a,{myRef:g})),r.a.createElement(o,{projects:F,myRef:f}),r.a.createElement(c,{myRef:b}),r.a.createElement(m,{myRef:E})),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(71),ye=a(166),ve=a(162),we=a(163),ke=a(70),je=a(11),Se=Object(Ee.a)({palette:{text:{primary:"#424242"},primary:{main:"#de1190",light:"#ff5bc0",dark:"#a70062",contrastText:"#ffffff"},secondary:{main:"#09234b",contrastText:"#ffffff"}},typography:{h2:{fontFamily:"'Source Sans Pro', sans-serif"},h3:{fontFamily:"'Source Sans Pro', sans-serif"},h4:{fontFamily:"'Source Sans Pro', sans-serif"},h5:{fontFamily:"'Source Sans Pro', sans-serif"}}});Se=Object(ye.a)(Se),c.a.render(r.a.createElement(ve.a,{theme:Se},r.a.createElement(we.a,null),r.a.createElement(ke.a,null,r.a.createElement(je.a,{component:be}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a(101)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.98846d1b.chunk.js.map