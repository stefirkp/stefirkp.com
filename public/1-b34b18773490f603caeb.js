(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(131),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(134),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var d=a(43);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},133:function(e,t,a){"use strict";var n=a(137),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(132),l=a(135),s=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var d=function(){return i.a.createElement("footer",{id:"my-footer"},"Whats next ?",i.a.createElement("div",{className:"closing-txt"},"Love to meet awesome people on interesting projects. Need a hand? I have two"),i.a.createElement("div",{className:"photo"}),"stefirkp@gmail.com",i.a.createElement("div",{className:"socmed-wrap"},i.a.createElement("span",null,"Linkin"),i.a.createElement("span",null,"FB"),i.a.createElement("span",null,"IG")))},m=(a(149),a(150),function(e){var t=e.children,a=e.idLayout;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Stefi Rosadi")),i.a.createElement("div",{className:"wrap",id:a},t),i.a.createElement(d,null))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},134:function(e,t,a){var n;e.exports=(n=a(140))&&n.default||n},137:function(e){e.exports={data:{site:{siteMetadata:{title:"Title from siteMetadata"}}}}},140:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(61),u=a(2),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){},150:function(e,t,a){}}]);
//# sourceMappingURL=1-b34b18773490f603caeb.js.map