(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{R1uw:function(t,e,n){"use strict";n.r(e);var a,r,i,o=n("wTIg"),s=n("q1tI"),c=n.n(s),l=n("noox"),u=n("WsIH"),p=n("dH/O"),h=n("MUpH"),d=n("KQm4"),g=n("vuIU"),b=n("dI71"),j=n("qKvR"),x=n("Wbzz"),f=n("TJpk"),O=n("sjHn"),m=n("1AOi"),y=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).maxPages=3,e.count=e.props.pageCount,e.current=e.props.index,e.pageRoot=e.props.pathPrefix,e.getFullPath=function(t){return"/"===e.pageRoot?1===t?e.pageRoot:e.pageRoot+"page/"+t:1===t?e.pageRoot:e.pageRoot+"/page/"+t},e}return Object(b.a)(e,t),e.prototype.render=function(){var t=this.count,e=this.current;if(t<=1)return null;var n=this.previousPath,a=this.nextPath,r=this.current<this.count,i=this.current>1;return Object(j.jsx)(c.a.Fragment,null,Object(j.jsx)(f.Helmet,null,i&&Object(j.jsx)("link",{rel:"prev",href:n}),r&&Object(j.jsx)("link",{rel:"next",href:a})),Object(j.jsx)(_,null,i&&Object(j.jsx)(v,{to:n},"Prev"),this.getPageLinks,Object(j.jsx)(z,{"aria-hidden":"true"},Object(j.jsx)("em",null,e)," of ",t),r&&Object(j.jsx)(v,{to:a},"Next")))},Object(g.a)(e,[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,e=this.current,n=this.count,a=this.maxPages,r=1===e?e:e-1,i=Object(m.i)(r,n+1-r),o=i.slice(0,a);return i[0]>2&&o.unshift(null),i[0]>1&&o.unshift(1),i[0]+1===n&&i[0]-1>0&&o.splice(i.length-1-a,0,i[0]-1),i[0]+a<n&&o.push(null),i[0]+a-1<n&&o.push(n),Object(d.a)(new Set(o)).map((function(n,a){return null===n?Object(j.jsx)(P,{key:"PaginatorPage_spacer_"+a,"aria-hidden":!0}):Object(j.jsx)(k,{key:"PaginatorPage_"+n,to:t.getFullPath(n),style:{opacity:e===n?1:.3},className:"Paginator__pageLink"},n)}))}}]),e}(s.Component),w=function(t){return Object(j.css)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",O.a.desktop_up(a||(a=Object(h.a)(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]))),"")},v=Object(o.a)(x.Link,{target:"e5lnzj40"})("font-weight:600;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",w," &:hover,&:focus{opacity:1;text-decoration:underline;}"),k=Object(o.a)(x.Link,{target:"e5lnzj41"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",w," &:hover,&:focus{opacity:1;text-decoration:underline;}"),P=Object(o.a)("span",{target:"e5lnzj42"})("opacity:0.3;",w,' &::before{content:"...";}'),z=Object(o.a)("span",{target:"e5lnzj43"})("font-weight:400;",w," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),_=Object(o.a)("nav",{target:"e5lnzj44"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",O.a.tablet(r||(r=Object(h.a)(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "])),P)," ",O.a.desktop_up(i||(i=Object(h.a)(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "])),z),""),L=n("joFz");var R,S,C,H,T,I,A,F,M=function(t){var e=t.author;return Object(j.jsx)(N,null,Object(j.jsx)(W,{as:e.authorsPage?x.Link:"div",to:e.slug,"data-a11y":"false","aria-label":"Author's bio"},Object(j.jsx)(q,null,Object(j.jsx)(J,{src:e.avatar.medium}))),Object(j.jsx)(G,{dangerouslySetInnerHTML:{__html:e.bio}}))},N=Object(o.a)("div",{target:"eig4wgl0"})({name:"3j1lrl",styles:"display:flex;align-items:center;position:relative;left:-10px;"}),W=Object(o.a)("div",{target:"eig4wgl1"})("display:block;position:relative;height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;margin:10px 26px 10px 10px;&::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,0.25);}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),J=Object(o.a)(L.c,{target:"eig4wgl2"})({name:"uodor8",styles:"border-radius:50%;"}),q=Object(o.a)("div",{target:"eig4wgl3"})({name:"wibiw4",styles:"height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;overflow:hidden;"}),G=Object(o.a)("p",{target:"eig4wgl4"})("max-width:430px;font-size:14px;line-height:1.45;color:",(function(t){return t.theme.colors.grey}),";a{color:",(function(t){return t.theme.colors.grey}),";text-decoration:underline;}"),K=n("pylL"),Q=n("ZtNh"),U=function(t){var e=t.authors,n=Object(s.useContext)(Q.a),a=n.gridLayout,r=void 0===a?"tiles":a,i=n.hasSetGridLayout,o=n.setGridLayout,c=Object(x.useStaticQuery)("3372861117").site.edges[0].node.siteMetadata.hero,u=i&&"tiles"===r,p=e.find((function(t){return t.featured}));if(!p)throw new Error("\n      No featured Author found.\n      Please ensure you have at least featured Author.\n  ");return Object(j.jsx)(l.a,{relative:!0,id:"Articles__Hero"},Object(j.jsx)(B,{style:{maxWidth:c.maxWidth+"px"}},Object(j.jsx)(D,{dangerouslySetInnerHTML:{__html:c.heading}})),Object(j.jsx)(E,null,Object(j.jsx)(M,{author:p}),Object(j.jsx)(Z,null,Object(j.jsx)(V,{onClick:function(){return o("tiles")},active:u,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(j.jsx)(K.a.Tiles,null)),Object(j.jsx)(V,{onClick:function(){return o("rows")},active:!u,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(j.jsx)(K.a.Rows,null)))))},E=Object(o.a)("div",{target:"evd3z0e0"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",O.a.desktop(R||(R=Object(h.a)(["\n    margin-bottom: 80px;\n  "]))),";",O.a.tablet(S||(S=Object(h.a)(["\n    margin-bottom: 60px;\n  "]))),";",O.a.phablet(C||(C=Object(h.a)(["\n    display: none;\n  "]))),";"),Z=Object(o.a)("div",{target:"evd3z0e1"})("display:flex;align-items:center;",O.a.tablet(H||(H=Object(h.a)(["\n    display: none;\n  "]))),";"),B=Object(o.a)("div",{target:"evd3z0e2"})("margin:100px 0;",O.a.desktop(T||(T=Object(h.a)(["\n    width: 80%;\n  "])))," ",O.a.tablet(I||(I=Object(h.a)(["\n    width: 100%;\n  "]))),""),D=Object(o.a)("h1",{target:"evd3z0e3"})("font-style:normal;font-weight:600;font-size:52px;line-height:1.15;color:",(function(t){return t.theme.colors.primary}),";a{color:",(function(t){return t.theme.colors.accent}),";}",O.a.desktop(A||(A=Object(h.a)(["\n    font-size: 38px\n  "])))," ",O.a.phablet(F||(F=Object(h.a)(["\n    font-size: 32px;\n  "]))),""),V=Object(o.a)("button",{target:"evd3z0e4"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}"),X=n("6Ras"),Y=(e.default=function(t){var e=t.location,n=t.pageContext,a=n.group,r=n.additionalContext.authors;return Object(j.jsx)(p.a,null,Object(j.jsx)(u.a,{pathname:e.pathname}),Object(j.jsx)(U,{authors:r}),Object(j.jsx)(l.a,{narrow:!0},Object(j.jsx)(X.a,{articles:a}),Object(j.jsx)($,{show:n.pageCount>1},Object(j.jsx)(y,n))),Object(j.jsx)(Y,null))},Object(o.a)("div",{target:"e1bswbkw0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";")),$=Object(o.a)("div",{target:"e1bswbkw1"})((function(t){return t.show&&"margin-top: 95px;"}),"")}}]);
//# sourceMappingURL=component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx-53295b9efecaf7e03a63.js.map