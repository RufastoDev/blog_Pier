(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("Wbzz"),o=l("6Gk8"),i=l("Bl7J"),c=l("vrFN");t.default=function(e){var t,l=e.data,a=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;return 0===m.length?n.a.createElement(i.a,{location:a,title:s},n.a.createElement(c.a,{title:"All posts"}),n.a.createElement(o.a,null),n.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.a.createElement(i.a,{location:a,title:s},n.a.createElement(c.a,{title:"All posts"}),n.a.createElement(o.a,null),n.a.createElement("hr",null),n.a.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.a.createElement("li",{key:e.fields.slug},n.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.a.createElement("span",{itemProp:"headline"},t))),n.a.createElement("small",null,e.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-405189af2eb64748ce90.js.map