"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[768],{6240:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(8447),l=r(2784),n=r(745),s=r(6376);var o=e=>{let{courses:t,children:r,padTop:n}=e;const o=l.createElement("ul",{className:n?"course-tabs pad-top":"course-tabs"},t.filter((e=>e.visibleInTopNav)).map((e=>l.createElement("li",{key:e.id,className:"course-tab"},l.createElement(a.Link,{activeClassName:"active",style:{boxShadow:"none",color:"inherit"},to:"/course/"+e.id},e.name)))));return l.createElement("div",{className:"course-page",style:{marginLeft:"auto",marginRight:"auto",maxWidth:(0,s.qZ)(30),padding:(0,s.qZ)(1.5)+" "+(0,s.qZ)(3/4)}},l.createElement("header",null,o),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear()," All Rights Reserved."))},c=r(8977);var m=e=>{let{pageContext:t,data:r}=e;if(!t)throw new Error("no course");const{courses:m,courseGroups:i}=r.site.siteMetadata,u=r.allMarkdownRemark.edges;let d=null;const{femCoursePublished:f,femCourseUrl:g,femWorkshopPublished:p,femWorkshopUrl:E}=t;return g&&(f?d=l.createElement("p",{className:"fem-course-banner"},l.createElement("img",{className:"fem-logo",src:"/fem-logo.png"}),"View the Frontend Masters video course for"," ",t.name," ",l.createElement("a",{href:g,target:"_blank"},"here")):p&&(d=l.createElement("p",{className:"fem-course-banner"},l.createElement("img",{className:"fem-logo",src:"/fem-logo.png"}),"View the Frontend Masters workshop for"," ",t.name," ",l.createElement("a",{href:E,target:"_blank"},"here")))),l.createElement(o,{courses:m,courseGroups:i,padTop:!!d},l.createElement(c.Z,{title:t.name,description:t.summary,twitterImage:t.twitterImage,facebookImage:t.facebookImage}),d,l.createElement("header",null,l.createElement("img",{style:{float:"right",margin:8},width:175,src:t.squareImage}),l.createElement("h1",{style:{marginTop:(0,s.qZ)(1),marginBottom:0}},t.name)),l.createElement("section",{style:{marginTop:"10px"}},t.summary),u.filter((e=>e.node.frontmatter.course===t.id)).sort(((e,t)=>e.node.frontmatter.order-t.node.frontmatter.order)).map(((e,t)=>{let{node:r}=e;const n=r.frontmatter.title||r.fields.slug,{isExercise:o}=r.frontmatter;return l.createElement("article",{className:"course-article"+(o?" exercise":""),key:r.fields.slug},l.createElement("header",null,l.createElement("h3",{style:{marginBottom:(0,s.qZ)(1/4)}},l.createElement(a.Link,{style:{boxShadow:"none"},to:r.fields.slug},l.createElement("span",{className:"course-article__order"},(c=t+1)<10?"0"+c:""+c),l.createElement("span",{className:"course-article__title"},n))),l.createElement("small",{className:"course-article__date"},r.frontmatter.date)),l.createElement("section",null,l.createElement("p",{className:"course-article__description",dangerouslySetInnerHTML:{__html:r.frontmatter.description||r.excerpt}})));var c})),l.createElement("footer",null,l.createElement(n.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-course-page-tsx-cfafbb5b84ab9a79677a.js.map