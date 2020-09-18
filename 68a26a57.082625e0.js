(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||u[b]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(119)),a={id:"indexes",title:"Indexes"},c={unversionedId:"api/decorators/indexes",id:"api/decorators/indexes",isDocsHomePage:!1,title:"Indexes",description:"@index(fields object) is used to set indexes (mainly for compound indexes)",source:"@site/../docs/api/decorators/indexes.md",slug:"/api/decorators/indexes",permalink:"/typegoose/docs/api/decorators/indexes",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/indexes.md",version:"current",sidebar:"docs",previous:{title:"Hooks",permalink:"/typegoose/docs/api/decorators/hooks"},next:{title:"Plugins",permalink:"/typegoose/docs/api/decorators/plugins"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@index(fields: object, options: object)")," is used to set indexes (mainly for compound indexes)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fields"),": set of key-number pairs like ",Object(i.b)("inlineCode",{parentName:"li"},"{ field1: 1 }")," (",Object(i.b)("inlineCode",{parentName:"li"},"1")," for ascending and ",Object(i.b)("inlineCode",{parentName:"li"},"-1")," for descending), or for text indexes, ",Object(i.b)("inlineCode",{parentName:"li"},"{ field1: 'text' }"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options"),": ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://mongodb.github.io/node-mongodb-native/3.6/api/Db.html#createIndex"}),"please see the MongoDB driver docs"),". Note that if you want to add ",Object(i.b)("inlineCode",{parentName:"li"},"weights")," to the ",Object(i.b)("inlineCode",{parentName:"li"},"options")," (for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.mongodb.com/manual/tutorial/control-results-of-text-search/"}),"full-text search"),"), you must define the same set of fields in ",Object(i.b)("inlineCode",{parentName:"li"},"fields")," as in the ",Object(i.b)("inlineCode",{parentName:"li"},"weights"),".")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"@index({ article: 1, user: 1 }, { unique: true }) // compound index\n@index({ location: '2dsphere' }) // single index with no options\n@index({ article: 1 }, { partialFilterExpression: { stars: { $gte: 4.5 } } }) // single index with options\nclass Location {\n  @prop()\n  public article?: number;\n\n  @prop()\n  public user?: number;\n\n  @prop()\n  public stars?: number;\n\n  @prop({ type: Number, dim: 2 })\n  public location?: number[][];\n}\n")))}p.isMDXComponent=!0}}]);