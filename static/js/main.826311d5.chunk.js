(this["webpackJsonpnew-dict-app"]=this["webpackJsonpnew-dict-app"]||[]).push([[0],{17:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),s=c.n(a),i=c(8),r=c.n(i),o=(c(17),c(6)),l=c.n(o),d=c(9),j=c(3),u=c(10),h=function(e){var t=e.title,c=e.source,a=e.examples,s=e.definition,i=e.synon,r=e.speech;return Object(n.jsxs)("section",{className:"output",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Searched word:"}),Object(n.jsx)("p",{children:t}),Object(n.jsx)("p",{className:"speech",children:r})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Definition:"}),Object(n.jsx)("p",{children:s})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Example:"}),Object(n.jsx)("p",{children:a})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Synonyms:"}),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:"synonyms",children:i.map((function(e){return Object(n.jsx)("li",{children:e})}))})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Pronounciation:"}),Object(n.jsx)("audio",{controls:"controls",src:c})]})]})},b=(c(24),c(11)),p=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),r=Object(j.a)(i,2),o=r[0],p=r[1],O=Object(a.useState)([]),x=Object(j.a)(O,2),m=x[0],f=x[1],v=Object(a.useState)([]),y=Object(j.a)(v,2),g=y[0],w=y[1],S=Object(a.useState)([]),C=Object(j.a)(S,2),N=C[0],k=C[1],_=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n="https://api.wordnik.com/v4/word.json/",a="ag99rn7f4gdd82rlrrcxdd1p6yaxw6hbogitsadptvg5221d8",s=Math.floor(9*Math.random()),Promise.all([fetch("".concat(n).concat(c,"/definitions?limit=10&includeRelated=true&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=").concat(a)),fetch("".concat(n).concat(c,"/examples?includeDuplicates=false&useCanonical=true&limit=10&api_key=").concat(a)),fetch("".concat(n).concat(c,"/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=").concat(a)),fetch("".concat(n).concat(c,"/audio?useCanonical=true&limit=10&api_key=").concat(a))]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){p(e[0][s]),w(e[1].examples[s]),k(e[2][0].words),f(e[3][0]),console.log(e[0][s]),console.log(e[3]),console.log(e[2][0])})).catch((function(e){alert("Please enter a search word")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"search-bar",children:[Object(n.jsx)("h1",{children:"Dictionary App"}),Object(n.jsxs)("form",{onSubmit:_,className:"submit-field",children:[Object(n.jsx)("input",{onChange:function(e){s(e.target.value.trim().toLowerCase())},value:c,className:"search-bar__input",type:"search",required:!0,placeholder:"enter a word","aria-label":"search"}),Object(n.jsx)("button",{id:"submit",className:"search-bar__submit",type:"submit",children:Object(n.jsx)(u.a,{icon:b.a})})]})]})}),Object(n.jsx)(h,{title:o.word,speech:o.partOfSpeech,source:m.fileUrl,definition:o.text,examples:g.text,synon:N},o.id)]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),O()}},[[25,1,2]]]);
//# sourceMappingURL=main.826311d5.chunk.js.map