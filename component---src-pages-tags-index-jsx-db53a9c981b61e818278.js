(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/Rmd":function(e,a,t){e.exports={tagCard:"tags-module--tagCard--2sNqZ",tagImg:"tags-module--tagImg--21WVr",pd20px:"tags-module--pd20px--1m4en"}},a0iv:function(e,a,t){"use strict";t.r(a);t("E9XD"),t("M7k7");var n=t("Ol7k"),r=(t("Jmwx"),t("BMrR")),l=(t("rO+z"),t("kPKH")),s=t("q1tI"),c=t.n(s),o=t("M8b6"),m=t("JkAW"),i=t("kfNp"),d=t("Wbzz"),g=t("obyI"),u=t.n(g),p=t("Rt21"),E=t.n(p),f=t("/Rmd"),k=t.n(f),h=function(e){var a=e.img,t=e.name,n=e.description,r=e.color,l=u.a.pages.tags;return c.a.createElement(d.Link,{className:k.a.tagCard,to:E.a.resolvePageUrl(l,t)},c.a.createElement("div",{className:k.a.tagCard},c.a.createElement("div",{className:k.a.tagImg,style:{backgroundImage:"url("+a+")"}}),c.a.createElement("div",{className:k.a.pd20px},c.a.createElement("div",{className:"textCenter"},c.a.createElement("h4",{style:{color:""+r}},"#",t)),c.a.createElement("p",null,n))))};a.default=function(e){var a=e.data,t=a.allFile.edges,s=a.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter.tags})).reduce((function(e,a){return e.concat(a)}));s.filter((function(e,a){return a===s.indexOf(e)})).sort();var d=u.a.tags;return c.a.createElement(n.a,{className:"outerPadding"},c.a.createElement(n.a,{className:"container"},c.a.createElement(o.a,null),c.a.createElement(m.a,{title:"Tags",description:"This page consists of various Tags on various technologies that I'll be using to write blogs. You can check the blogs related to the tags by clicking on any of the tags below.",path:"tags"}),c.a.createElement(i.b,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"marginTopTitle"},c.a.createElement("h1",{className:"titleSeparate"},"#Tags")),c.a.createElement(r.a,{gutter:[30,20]},t.map((function(e){return c.a.createElement(l.a,{key:e.node.name,xs:24,sm:24,md:12,lg:8},c.a.createElement(h,{img:e.node.childImageSharp.fluid.src,name:e.node.name,description:d[e.node.name].description,color:d[e.node.name].color}))})))))))}}}]);
//# sourceMappingURL=component---src-pages-tags-index-jsx-db53a9c981b61e818278.js.map