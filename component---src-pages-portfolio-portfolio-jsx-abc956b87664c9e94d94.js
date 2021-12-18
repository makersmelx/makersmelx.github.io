(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pXIH:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("wx14"),o=n("zLVn"),c=n("dI71"),s=n("i8i4"),l=n.n(s),u=!1,d=n("0PSK"),p=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var i,r=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?r?(i="exited",a.appearStatus="entering"):i="entered":i=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:i},a.nextCallback=null,a}Object(c.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,i=this.props.nodeRef?[a]:[l.a.findDOMNode(this),a],r=i[0],o=i[1],c=this.getTimeouts(),s=a?c.appear:c.enter;!e&&!n||u?this.safeSetState({status:"entered"},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(r,o),t.onTransitionEnd(s,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(r,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:l.a.findDOMNode(this);t&&!u?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:l.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=i[0],o=i[1];this.props.addEndListener(r,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(o.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(d.a.Provider,{value:null},"function"==typeof n?n(e,a):i.a.cloneElement(i.a.Children.only(n),a))},t}(i.a.Component);function m(){}p.contextType=d.a,p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},p.UNMOUNTED="unmounted",p.EXITED="exited",p.ENTERING="entering",p.ENTERED="entered",p.EXITING="exiting";var h=p,f=n("hqVE"),v=n("UnQg");function g(e,t){var n,a,i=e.timeout,r=e.easing,o=e.style,c=void 0===o?{}:o;return{duration:null!=(n=c.transitionDuration)?n:"number"==typeof i?i:i[t.mode]||0,easing:null!=(a=c.transitionTimingFunction)?a:"object"==typeof r?r[t.mode]:r,delay:c.transitionDelay}}var b=n("ZfBw"),x=n("nKUr"),j=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],E={entering:{opacity:1},entered:{opacity:1}},O={enter:f.b.enteringScreen,exit:f.b.leavingScreen},w=a.forwardRef((function(e,t){var n=e.addEndListener,i=e.appear,c=void 0===i||i,s=e.children,l=e.easing,u=e.in,d=e.onEnter,p=e.onEntered,m=e.onEntering,f=e.onExit,w=e.onExited,y=e.onExiting,S=e.style,C=e.timeout,M=void 0===C?O:C,R=e.TransitionComponent,k=void 0===R?h:R,T=Object(o.a)(e,j),N=Object(v.a)(),I=a.useRef(null),z=Object(b.a)(s.ref,t),L=Object(b.a)(I,z),D=function(e){return function(t){if(e){var n=I.current;void 0===t?e(n):e(n,t)}}},A=D(m),W=D((function(e,t){!function(e){e.scrollTop}(e);var n=g({style:S,timeout:M,easing:l},{mode:"enter"});e.style.webkitTransition=N.transitions.create("opacity",n),e.style.transition=N.transitions.create("opacity",n),d&&d(e,t)})),U=D(p),G=D(y),H=D((function(e){var t=g({style:S,timeout:M,easing:l},{mode:"exit"});e.style.webkitTransition=N.transitions.create("opacity",t),e.style.transition=N.transitions.create("opacity",t),f&&f(e)})),J=D(w);return Object(x.jsx)(k,Object(r.a)({appear:c,in:u,nodeRef:I,onEnter:W,onEntered:U,onEntering:A,onExit:H,onExited:J,onExiting:G,addEndListener:function(e){n&&n(I.current,e)},timeout:M},T,{children:function(e,t){return a.cloneElement(s,Object(r.a)({style:Object(r.a)({opacity:0,visibility:"exited"!==e||u?void 0:"hidden"},E[e],S,s.props.style),ref:L},t))}}))})),y=n("z6Y5"),S=n("rePB"),C=n("iuhU"),M=n("6RIW"),R=n("Vn7y"),k=n("tCRK"),T=n("ZGJG"),N=n("TeiJ");function I(e){return Object(T.a)("MuiCollapse",e)}Object(N.a)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var z=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],L=Object(R.a)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&Object(r.a)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),D=Object(R.a)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return Object(r.a)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),A=Object(R.a)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return Object(r.a)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),W=a.forwardRef((function(e,t){var n=Object(k.a)({props:e,name:"MuiCollapse"}),i=n.addEndListener,c=n.children,s=n.className,l=n.collapsedSize,u=void 0===l?"0px":l,d=n.component,p=n.easing,m=n.in,j=n.onEnter,E=n.onEntered,O=n.onEntering,w=n.onExit,y=n.onExited,R=n.onExiting,T=n.orientation,N=void 0===T?"vertical":T,W=n.style,U=n.timeout,G=void 0===U?f.b.standard:U,H=n.TransitionComponent,J=void 0===H?h:H,P=Object(o.a)(n,z),F=Object(r.a)({},n,{orientation:N,collapsedSize:u}),V=function(e){var t=e.orientation,n=e.classes,a={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return Object(M.a)(a,I,n)}(F),q=Object(v.a)(),B=a.useRef(),Y=a.useRef(null),Z=a.useRef(),X="number"==typeof u?"".concat(u,"px"):u,K="horizontal"===N,Q=K?"width":"height";a.useEffect((function(){return function(){clearTimeout(B.current)}}),[]);var _=a.useRef(null),$=Object(b.a)(t,_),ee=function(e){return function(t){if(e){var n=_.current;void 0===t?e(n):e(n,t)}}},te=function(){return Y.current?Y.current[K?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){Y.current&&K&&(Y.current.style.position="absolute"),e.style[Q]=X,j&&j(e,t)})),ae=ee((function(e,t){var n=te();Y.current&&K&&(Y.current.style.position="");var a=g({style:W,timeout:G,easing:p},{mode:"enter"}),i=a.duration,r=a.easing;if("auto"===G){var o=q.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),Z.current=o}else e.style.transitionDuration="string"==typeof i?i:"".concat(i,"ms");e.style[Q]="".concat(n,"px"),e.style.transitionTimingFunction=r,O&&O(e,t)})),ie=ee((function(e,t){e.style[Q]="auto",E&&E(e,t)})),re=ee((function(e){e.style[Q]="".concat(te(),"px"),w&&w(e)})),oe=ee(y),ce=ee((function(e){var t=te(),n=g({style:W,timeout:G,easing:p},{mode:"exit"}),a=n.duration,i=n.easing;if("auto"===G){var r=q.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(r,"ms"),Z.current=r}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style[Q]=X,e.style.transitionTimingFunction=i,R&&R(e)}));return Object(x.jsx)(J,Object(r.a)({in:m,onEnter:ne,onEntered:ie,onEntering:ae,onExit:re,onExited:oe,onExiting:ce,addEndListener:function(e){"auto"===G&&(B.current=setTimeout(e,Z.current||0)),i&&i(_.current,e)},nodeRef:_,timeout:"auto"===G?null:G},P,{children:function(e,t){return Object(x.jsx)(L,Object(r.a)({as:d,className:Object(C.a)(V.root,s,{entered:V.entered,exited:!m&&"0px"===X&&V.hidden}[e]),style:Object(r.a)(Object(S.a)({},K?"minWidth":"minHeight",X),W),ownerState:Object(r.a)({},F,{state:e}),ref:$},t,{children:Object(x.jsx)(D,{ownerState:Object(r.a)({},F,{state:e}),className:V.wrapper,ref:Y,children:Object(x.jsx)(A,{ownerState:Object(r.a)({},F,{state:e}),className:V.wrapperInner,children:c})})}))}}))}));W.muiSupportAuto=!0;var U=W,G=n("Gqia"),H=n("yhFT"),J=n("2Qr1");function P(e){return Object(T.a)("MuiDivider",e)}Object(N.a)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var F=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],V=Object(R.a)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:Object(J.a)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return Object(r.a)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),q=Object(R.a)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),B=a.forwardRef((function(e,t){var n=Object(k.a)({props:e,name:"MuiDivider"}),a=n.absolute,i=void 0!==a&&a,c=n.children,s=n.className,l=n.component,u=void 0===l?c?"div":"hr":l,d=n.flexItem,p=void 0!==d&&d,m=n.light,h=void 0!==m&&m,f=n.orientation,v=void 0===f?"horizontal":f,g=n.role,b=void 0===g?"hr"!==u?"separator":void 0:g,j=n.textAlign,E=void 0===j?"center":j,O=n.variant,w=void 0===O?"fullWidth":O,y=Object(o.a)(n,F),S=Object(r.a)({},n,{absolute:i,component:u,flexItem:p,light:h,orientation:v,role:b,textAlign:E,variant:w}),R=function(e){var t=e.absolute,n=e.children,a=e.classes,i=e.flexItem,r=e.light,o=e.orientation,c=e.textAlign,s={root:["root",t&&"absolute",e.variant,r&&"light","vertical"===o&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return Object(M.a)(s,P,a)}(S);return Object(x.jsx)(V,Object(r.a)({as:u,className:Object(C.a)(R.root,s),role:b,ref:t,ownerState:S},y,{children:c?Object(x.jsx)(q,{className:R.wrapper,ownerState:S,children:c}):null}))})),Y=n("M7pN"),Z=Object(Y.a)(Object(x.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),X=Object(Y.a)(Object(x.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Computer"),K=Object(Y.a)(Object(x.jsx)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),"Widgets"),Q=[{name:"Chronos",url:{website:"https://makersmelx.itch.io/chronos",game:"https://makersmelx.itch.io/chronos",github:"https://github.com/UM-Electra-Studio/eecs494-p3",youtube:"https://youtube.com/watch?v=_0HMWO7eWHI"},image:"/portfolio/eecs494p3.png",description:"Chronos is a fast-paced parkour plat-former.  Race through the rooftops of a futuristic city to reach the goal. Time is limited, so move with speed and agility.",tags:{category:["Game"],tech:["Unity 3D"]},page:"portfolio/chronos"},{name:"Joint Online Judge",url:{website:"https://joj.sjtu.edu.cn",github:"https://github.com/joint-online-judge/cattle"},image:"/portfolio/JOJ.png",description:"The official online judge for UM-SJTU Joint Institute at Shanghai Jiao Tong University.",tags:{category:["Front End"],tech:["React.js","TypeScript"]},page:"/portfolio/joj"},{name:"FOCS Git Server",url:{website:"https://focs.ji.sjtu.edu.cn/git",github:"https://github.com/BoYanZh/gitea"},description:"The self-hosted Git Service for UM-SJTU Joint Institute at Shanghai Jiao Tong University.",image:"/portfolio/GITEA.png",tags:{category:["DevOps"],tech:["Go","Linux"]},page:"/portfolio/gitea"},{name:"Miku Skiing",url:{game:"https://jiayao.me/eecs494/p2"},description:"Project 2: Rapid Game Prototype, EECS 494: Introduction to Game Development. Join Hatsune Miku in freestyle skiing in the snow world.",image:"/portfolio/eecs494p2.jpg",tags:{category:["Game"],tech:["Unity 3D"]}},{name:"Zelda (Unity Remaster)",url:{game:"https://jiayao.me/eecs494/p1"},description:"Project 1: Classic Games, EECS 494: Introduction to Game Development. Re-implement The Legend of Zelda (1986 NES) with Unity and custom a new level in the game.",image:"/portfolio/eecs494p1.png",tags:{category:["Game"],tech:["Unity 3D"]}}],_=n("OGDC");function $(e){return Object(T.a)("MuiPaper",e)}Object(N.a)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var ee=["className","component","elevation","square","variant"],te=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},ne=Object(R.a)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(r.a)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===n.variant&&Object(r.a)({boxShadow:t.shadows[n.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat(Object(J.a)("#fff",te(n.elevation)),", ").concat(Object(J.a)("#fff",te(n.elevation)),")")}))})),ae=a.forwardRef((function(e,t){var n=Object(k.a)({props:e,name:"MuiPaper"}),a=n.className,i=n.component,c=void 0===i?"div":i,s=n.elevation,l=void 0===s?1:s,u=n.square,d=void 0!==u&&u,p=n.variant,m=void 0===p?"elevation":p,h=Object(o.a)(n,ee),f=Object(r.a)({},n,{component:c,elevation:l,square:d,variant:m}),v=function(e){var t=e.square,n=e.elevation,a=e.variant,i=e.classes,r={root:["root",a,!t&&"rounded","elevation"===a&&"elevation".concat(n)]};return Object(M.a)(r,$,i)}(f);return Object(x.jsx)(ne,Object(r.a)({as:c,ownerState:f,className:Object(C.a)(v.root,a),ref:t},h))}));function ie(e){return Object(T.a)("MuiCard",e)}Object(N.a)("MuiCard",["root"]);var re=["className","raised"],oe=Object(R.a)(ae,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),ce=a.forwardRef((function(e,t){var n=Object(k.a)({props:e,name:"MuiCard"}),a=n.className,i=n.raised,c=void 0!==i&&i,s=Object(o.a)(n,re),l=Object(r.a)({},n,{raised:c}),u=function(e){var t=e.classes;return Object(M.a)({root:["root"]},ie,t)}(l);return Object(x.jsx)(oe,Object(r.a)({className:Object(C.a)(u.root,a),elevation:c?8:void 0,ref:t,ownerState:l},s))}));function se(e){return Object(T.a)("MuiCardMedia",e)}Object(N.a)("MuiCardMedia",["root","media","img"]);var le=["children","className","component","image","src","style"],ue=Object(R.a)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.isMediaComponent,i=n.isImageComponent;return[t.root,a&&t.media,i&&t.img]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),de=["video","audio","picture","iframe","img"],pe=["picture","img"],me=a.forwardRef((function(e,t){var n=Object(k.a)({props:e,name:"MuiCardMedia"}),a=n.children,i=n.className,c=n.component,s=void 0===c?"div":c,l=n.image,u=n.src,d=n.style,p=Object(o.a)(n,le),m=-1!==de.indexOf(s),h=!m&&l?Object(r.a)({backgroundImage:'url("'.concat(l,'")')},d):d,f=Object(r.a)({},n,{component:s,isMediaComponent:m,isImageComponent:-1!==pe.indexOf(s)}),v=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(M.a)(n,se,t)}(f);return Object(x.jsx)(ue,Object(r.a)({className:Object(C.a)(v.root,i),as:s,role:!m&&l?"img":void 0,ref:t,style:h,ownerState:f,src:m?l||u:void 0},p,{children:a}))}));function he(e){return Object(T.a)("MuiCardContent",e)}Object(N.a)("MuiCardContent",["root"]);var fe=["className","component"],ve=Object(R.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),ge=a.forwardRef((function(e,t){var n=Object(k.a)({props:e,name:"MuiCardContent"}),a=n.className,i=n.component,c=void 0===i?"div":i,s=Object(o.a)(n,fe),l=Object(r.a)({},n,{component:c}),u=function(e){var t=e.classes;return Object(M.a)({root:["root"]},he,t)}(l);return Object(x.jsx)(ve,Object(r.a)({as:c,className:Object(C.a)(u.root,a),ownerState:l,ref:t},s))}));function be(e){return Object(T.a)("MuiCardActions",e)}Object(N.a)("MuiCardActions",["root","spacing"]);var xe=["disableSpacing","className"],je=Object(R.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Ee=a.forwardRef((function(e,t){var n=Object(k.a)({props:e,name:"MuiCardActions"}),a=n.disableSpacing,i=void 0!==a&&a,c=n.className,s=Object(o.a)(n,xe),l=Object(r.a)({},n,{disableSpacing:i}),u=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return Object(M.a)(n,be,t)}(l);return Object(x.jsx)(je,Object(r.a)({className:Object(C.a)(u.root,c),ownerState:l,ref:t},s))})),Oe=n("5I82"),we=Object(Y.a)(Object(x.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),"Public"),ye=Object(Y.a)(Object(x.jsx)("path",{d:"m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"SportsEsports"),Se=n("MsN+"),Ce=Object(Y.a)(Object(x.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube");function Me(e){var t=e.item,n=t.name,i=t.url,r=t.image,o=t.description,c=t.tags,s=t.page,l=a.createElement(a.Fragment,null,i.website&&a.createElement(_.a,{"aria-label":"Website",href:i.website},a.createElement(we,null)),i.game&&a.createElement(_.a,{"aria-label":"Website",href:i.game},a.createElement(ye,null)),i.github&&a.createElement(_.a,{"aria-label":"Github",href:i.github},a.createElement(Se.a,null)),i.youtube&&a.createElement(_.a,{"aria-label":"Youtube",href:i.youtube},a.createElement(Ce,null))),u=a.createElement(a.Fragment,null,c&&c.category&&c.category.map((function(e){return a.createElement(H.a,{key:e,label:e,color:"primary",size:"small",sx:{marginTop:1,marginRight:1}})})),c&&c.tech&&c.tech.map((function(e){return a.createElement(H.a,{key:e,label:e,size:"small",sx:{marginTop:1,marginRight:1}})})));return a.createElement(ce,null,a.createElement(me,{component:"img",height:"200",image:r,alt:n,sx:{boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}}),a.createElement(ge,null,a.createElement(G.a,{gutterBottom:!0,variant:"h5",component:"div"},n),a.createElement(G.a,{variant:"body2",color:"text.secondary",height:80,textOverflow:"ellipsis"},o),u),a.createElement(Ee,{disableSpacing:!0},l,s&&a.createElement(Oe.a,{size:"small",style:{marginLeft:"auto"},href:s},"Learn More")))}t.default=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useState)({}),o=r[0],c=r[1],s=function(e,t,n){if(e&&e.tags&&e.tags[t]&&e.tags[t]){for(var a=function(){var a=r[i];if(n[a]&&!e.tags[t].find((function(e){return e===a})))return{v:!1}},i=0,r=Object.keys(n);i<r.length;i++){var o=a();if("object"==typeof o)return o.v}return!0}return!1},l=Q.filter((function(e){return s(e,"tech",t)})).filter((function(e){return s(e,"category",o)})).map((function(e){var n=s(e,"tech",t)&&s(e,"category",o);return i.a.createElement(w,{in:n,appear:!0},i.a.createElement(y.a,{item:!0,xs:12,md:6,xl:4,key:e.name},i.a.createElement(Me,{item:e})))})),u=new Set,d=new Set;Q.forEach((function(e){e&&e.tags&&(e.tags.tech&&e.tags.tech.forEach((function(e){u.add(e)})),e.tags.category&&e.tags.category.forEach((function(e){d.add(e)})))}));var p=function(e,t,n){var a=Array.from(e).sort().map((function(e){var a=i.a.createElement(U,{style:{height:"100%"},orientation:"horizontal",in:t&&t[e]},i.a.createElement(Z,{style:{marginTop:"20%"}})),r=i.a.createElement(G.a,{sx:{fontWeight:500}},e);return i.a.createElement(y.a,{item:!0,key:e},i.a.createElement(H.a,{icon:a,label:r,key:e,onClick:function(){n((function(t){var n;return Object.assign({},t,((n={})[e]=!t[e],n))}))},variant:t&&t[e]?"filled":"outlined"}))})),r=function(){n({})};return i.a.createElement(i.a.Fragment,null,a,i.a.createElement(y.a,{item:!0,xs:"auto"},i.a.createElement(U,{orientation:"horizontal",in:l.length<Q.length,appear:!0},i.a.createElement(H.a,{label:i.a.createElement(G.a,{sx:{fontWeight:500}},"Clear all"),key:"clear all",color:"error",onDelete:r,onClick:r,variant:"outlined"}))))},m=Object(a.useMemo)((function(){return i.a.createElement(y.a,{container:!0,spacing:1,mt:2,alignItems:"center",rowSpacing:1},i.a.createElement(y.a,{item:!0,sx:{marginRight:1}},i.a.createElement(X,null)),p(u,t,n))}),[t]),h=Object(a.useMemo)((function(){return i.a.createElement(y.a,{container:!0,spacing:1,mt:2,alignItems:"center",rowSpacing:1},i.a.createElement(y.a,{item:!0,sx:{marginRight:1}},i.a.createElement(K,null)),p(d,o,c))}),[o]);return i.a.createElement(i.a.Fragment,null,h,i.a.createElement(B,{sx:{mt:2}}),m,i.a.createElement(B,{sx:{mt:2}}),i.a.createElement(y.a,{container:!0,rowSpacing:3,spacing:3,justifyContent:"flex-start",mt:1},l))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-portfolio-jsx-abc956b87664c9e94d94.js.map