(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[7],{251:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r(326),a=r(272),i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t=Object(n.a)(Number(e),new Date,{locale:a.a});return i(t)}return""},c=function(e){return e?"".concat(e,"kg"):""}},298:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(299))&&n.__esModule?n:{default:n}).default;t.default=a},299:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(300))&&n.__esModule?n:{default:n}},300:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=s(r(9)),i=s(r(303)),o=s(r(269)),c=s(r(270)),l=s(r(301));function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var a=O(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,e);var t,r,a,i=y(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),k(j(t=i.call(this,e)),"handleLoadImage",(function(e){t.setState({imageLoaded:!0,imageError:!1}),t.props.onLoad&&t.props.onLoad(e)})),k(j(t),"handleImageError",(function(e){t.props.src&&(t.setState({imageError:!0}),t.props.onError&&t.props.onError(e))})),t.state={imageError:!1,imageLoaded:!1,src:t.props.src},t.image=n.default.createRef(),t}return t=o,a=[{key:"getDerivedStateFromProps",value:function(e,t){return t.src!==e.src?{imageError:!1,imageLoaded:!1,src:e.src}:null}}],(r=[{key:"componentDidMount",value:function(){var e=this.image.current;e&&e.complete&&(0===e.naturalWidth?this.handleImageError():this.handleLoadImage())}},{key:"getStyles",value:function(){var e=this.props,t=e.animationDuration,r=e.aspectRatio,n=e.cover,a=e.color,i=e.imageStyle,o=e.disableTransition,c=e.iconContainerStyle,l=e.style,s=!o&&{opacity:this.state.imageLoaded?1:0,filterBrightness:this.state.imageLoaded?100:0,filterSaturate:this.state.imageLoaded?100:20,transition:"\n        filterBrightness ".concat(.75*t,"ms cubic-bezier(0.4, 0.0, 0.2, 1),\n        filterSaturate ").concat(t,"ms cubic-bezier(0.4, 0.0, 0.2, 1),\n        opacity ").concat(t/2,"ms cubic-bezier(0.4, 0.0, 0.2, 1)")};return{root:b({backgroundColor:a,paddingTop:"calc(1 / ".concat(r," * 100%)"),position:"relative"},l),image:b(b({width:"100%",height:"100%",position:"absolute",objectFit:n?"cover":"inherit",top:0,left:0},s),i),iconContainer:b({width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c)}}},{key:"render",value:function(){var e=this.getStyles(),t=this.props,r=(t.animationDuration,t.aspectRatio,t.color,t.disableError),a=t.disableSpinner,i=(t.disableTransition,t.errorIcon),o=(t.iconContainerStyle,t.imageStyle,t.loading),c=t.onClick,l=(t.style,m(t,["animationDuration","aspectRatio","color","disableError","disableSpinner","disableTransition","errorIcon","iconContainerStyle","imageStyle","loading","onClick","style"]));return n.default.createElement("div",{style:e.root,onClick:c},l.src&&n.default.createElement("img",f({},l,{ref:this.image,style:e.image,onLoad:this.handleLoadImage,onError:this.handleImageError})),n.default.createElement("div",{style:e.iconContainer},!a&&!this.state.imageLoaded&&!this.state.imageError&&o,!r&&this.state.imageError&&i))}}])&&v(t.prototype,r),a&&v(t,a),o}(n.Component);t.default=x,x.defaultProps={animationDuration:3e3,aspectRatio:1,color:o.default.white,disableError:!1,disableSpinner:!1,disableTransition:!1,errorIcon:n.default.createElement(l.default,{style:{width:48,height:48,color:c.default[300]}}),loading:n.default.createElement(i.default,{size:48})},x.propTypes={animationDuration:a.default.number,aspectRatio:a.default.number,cover:a.default.bool,color:a.default.string,disableError:a.default.bool,disableSpinner:a.default.bool,disableTransition:a.default.bool,errorIcon:a.default.node,iconContainerStyle:a.default.object,imageStyle:a.default.object,loading:a.default.node,onClick:a.default.func,onError:a.default.func,onLoad:a.default.func,src:a.default.string.isRequired,style:a.default.object}},301:function(e,t,r){"use strict";var n=r(62),a=r(65);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(0)),o=(0,n(r(66)).default)(i.createElement("path",{d:"M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"}),"BrokenImage");t.default=o},302:function(e,t,r){"use strict";var n=r(62),a=r(65);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(0)),o=(0,n(r(66)).default)(i.createElement("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}),"Today");t.default=o},303:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=r(0),o=(r(9),r(7)),c=r(8),l=r(11),s=44,d=i.forwardRef((function(e,t){var r=e.classes,c=e.className,d=e.color,u=void 0===d?"primary":d,f=e.disableShrink,m=void 0!==f&&f,p=e.size,b=void 0===p?40:p,v=e.style,h=e.thickness,y=void 0===h?3.6:h,g=e.value,j=void 0===g?0:g,O=e.variant,k=void 0===O?"indeterminate":O,x=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},N={},w={};if("determinate"===k||"static"===k){var D=2*Math.PI*((s-y)/2);S.strokeDasharray=D.toFixed(3),w["aria-valuenow"]=Math.round(j),S.strokeDashoffset="".concat(((100-j)/100*D).toFixed(3),"px"),N.transform="rotate(-90deg)"}return i.createElement("div",Object(n.a)({className:Object(o.a)(r.root,c,"inherit"!==u&&r["color".concat(Object(l.a)(u))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[k]),style:Object(n.a)({width:b,height:b},N,v),ref:t,role:"progressbar"},w,x),i.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(s," ").concat(s)},i.createElement("circle",{className:Object(o.a)(r.circle,m&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[k]),style:S,cx:s,cy:s,r:(s-y)/2,fill:"none",strokeWidth:y})))})),u=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},328:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(298),i=r.n(a),o=r(0),c=r.n(o),l=r(18),s=r(68),d=r(304),u=r(73),f=r(215),m=r(217),p=r(235),b=r(20),v=r(222),h=r(221),y=r(177),g=r(316),j=r(331),O=r(224),k=r(302),x=r.n(k),S=Object(f.a)((function(e){return Object(m.a)({root:{width:"100%"},item:{backgroundColor:Object(b.b)(e.palette.background.paper,.4)},avatar:{color:e.palette.secondary.contrastText,background:e.palette.secondary.light},inline:{display:"inline"}})}));var N=function(){var e=S();return Object(n.jsx)(v.a,{className:e.root,children:[0,1,2,3].map((function(t,r){return Object(n.jsxs)("div",{children:[0!==r?Object(n.jsx)(h.a,{component:"li"}):null,Object(n.jsxs)(y.a,{className:e.item,alignItems:"flex-start",children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(j.a,{className:e.avatar,children:Object(n.jsx)(x.a,{})})}),Object(n.jsx)(O.a,{primary:"Type / Name-".concat(t),secondary:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"2021-01-02 by AuthorName"}),Object(n.jsx)(u.a,{component:"span",variant:"body2",className:e.inline,color:"textSecondary",children:" \u2014 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\u2026"})]})})]})]},"event-list".concat(t))}))})},w=r(276),D=Object(f.a)((function(){return Object(m.a)({root:{flexGrow:1}})}));var E=function(e){var t=e.children,r=D(),a=c.a.Children.count(t),i=!!Math.floor(12/a);if(!a||a>4)return null;var o=[];return c.a.Children.forEach(t,(function(e,t){o.push(Object(n.jsx)(w.a,{item:!0,xs:12,sm:i,children:e},"grid-col-".concat(t)))})),Object(n.jsx)("div",{className:r.root,children:Object(n.jsx)(w.a,{container:!0,spacing:3,children:o})})},P=r(251),_={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimal"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"allergy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"food"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"breed"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:299,source:{body:"query GetAnimal($id: Int!) {\n    animal(id: $id) {\n        id\n        name\n        details {\n            gender {\n                value\n            }\n            color\n            birthDate\n            weight\n            allergy\n            food\n            breed\n        }\n        imageUrl\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},M=Object(f.a)((function(e){return Object(m.a)({root:{flexGrow:1},animalName:{color:e.palette.primary.dark},animalMeta:{color:e.palette.grey[600]}})}));t.default=function(){var e,t=Object(l.i)().id,r=M(),a=Object(s.useQuery)(_,{variables:{id:Number(t)}}),o=a.loading,c=a.error,f=a.data;if(o)return Object(n.jsx)(p.a,{animation:"wave",height:"70vh"});if(c)return Object(n.jsx)("p",{children:"Error!"});if(!(null===f||void 0===f?void 0:f.animal))return Object(n.jsx)("p",{children:"No data!"});var m=f.animal,b=(null===(e=m.details)||void 0===e?void 0:e.birthDate)?Object(P.a)(m.details.birthDate):"";return Object(n.jsxs)("div",{className:r.root,children:[Object(n.jsxs)(E,{children:[Object(n.jsx)(i.a,{src:m.imageUrl,aspectRatio:16/9}),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{mt:1,children:Object(n.jsx)(u.a,{className:r.animalName,variant:"h3",component:"h1",children:m.name})}),m.details&&Object(n.jsx)(d.a,{mt:1,children:Object(n.jsx)(u.a,{className:r.animalMeta,variant:"body1",children:"".concat(m.details.breed,", ").concat(m.details.gender,", ").concat(Object(P.b)(m.details.weight),", ").concat(m.details.color,", ").concat(b)})}),Object(n.jsx)(d.a,{mt:1,children:Object(n.jsxs)(u.a,{variant:"body1",children:["Referencing Animal ID:",t]})})]})]}),Object(n.jsx)(d.a,{mt:2,mb:2,children:Object(n.jsx)(u.a,{variant:"h5",component:"h3",children:"Events"})}),Object(n.jsx)(N,{})]})}}}]);
//# sourceMappingURL=7.0c53c668.chunk.js.map