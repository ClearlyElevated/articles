var e,n,t,_,r,o,u,l,i={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var _,r=arguments,o={};for(_ in n)"key"!==_&&"ref"!==_&&(o[_]=n[_]);if(arguments.length>3)for(t=[t],_=3;_<arguments.length;_++)t.push(r[_]);if(null!=t&&(o.children=t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===o[_]&&(o[_]=e.defaultProps[_]);return h(e,o,n&&n.key,n&&n.ref,null)}function h(n,t,_,r,o){var u={type:n,props:t,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(u.__v=u),e.vnode&&e.vnode(u),u}function d(){return{}}function v(e){return e.children}function m(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function g(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return g(e)}}function k(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!_++||o!==e.debounceRendering)&&((o=e.debounceRendering)||r)(b)}function b(){for(var e;_=t.length;)e=t.sort((function(e,n){return e.__v.__b-n.__v.__b})),t=[],e.some((function(e){var n,t,_,r,o,u,l;e.__d&&(u=(o=(n=e).__v).__e,(l=n.__P)&&(t=[],(_=a({},o)).__v=_,r=P(l,o,_,n.__n,void 0!==l.ownerSVGElement,null,t,null==u?y(o):u),N(t,o),r!=u&&g(o)))}))}function C(e,n,t,_,r,o,u,l,s){var a,p,h,d,v,m,g,k=t&&t.__k||c,b=k.length;if(l==i&&(l=null!=o?o[0]:b?y(t,0):null),a=0,n.__k=x(n.__k,(function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(h=k[a])||h&&t.key==h.key&&t.type===h.type)k[a]=void 0;else for(p=0;p<b;p++){if((h=k[p])&&t.key==h.key&&t.type===h.type){k[p]=void 0;break}h=null}if(d=P(e,t,h=h||i,_,r,o,u,l,s),(p=t.ref)&&h.ref!=p&&(g||(g=[]),h.ref&&g.push(h.ref,null,t),g.push(p,t.__c||d,t)),null!=d){var c;if(null==m&&(m=d),void 0!==t.__d)c=t.__d,t.__d=void 0;else if(o==h||d!=l||null==d.parentNode){e:if(null==l||l.parentNode!==e)e.appendChild(d),c=null;else{for(v=l,p=0;(v=v.nextSibling)&&p<b;p+=2)if(v==d)break e;e.insertBefore(d,l),c=l}"option"==n.type&&(e.value="")}l=void 0!==c?c:d.nextSibling,"function"==typeof n.type&&(n.__d=l)}else l&&h.__e==l&&l.parentNode!=e&&(l=y(h))}return a++,t})),n.__e=m,null!=o&&"function"!=typeof n.type)for(a=o.length;a--;)null!=o[a]&&f(o[a]);for(a=b;a--;)null!=k[a]&&T(k[a],k[a]);if(g)for(a=0;a<g.length;a++)A(g[a],g[++a],g[++a])}function x(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var _=0;_<e.length;_++)x(e[_],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?h(null,e,null,null,e):null!=e.__e||null!=e.__c?h(e.type,e.props,e.key,null,e.__v):e):e);return t}function w(e,n,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in n||S(e,o,null,t[o],_);for(o in n)r&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||S(e,o,n[o],t[o],_)}function H(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===s.test(n)?t+"px":null==t?"":t}function S(e,n,t,_,r){var o,u,l,i,c;if(r?"className"===n&&(n="class"):"class"===n&&(n="className"),"style"===n)if(o=e.style,"string"==typeof t)o.cssText=t;else{if("string"==typeof _&&(o.cssText="",_=null),_)for(i in _)t&&i in t||H(o,i,"");if(t)for(c in t)_&&t[c]===_[c]||H(o,c,t[c])}else"o"===n[0]&&"n"===n[1]?(u=n!==(n=n.replace(/Capture$/,"")),l=n.toLowerCase(),n=(l in e?l:n).slice(2),t?(_||e.addEventListener(n,E,u),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,E,u)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function E(n){this.l[n.type](e.event?e.event(n):n)}function P(n,t,_,r,o,u,l,i,c){var s,f,p,h,d,y,g,k,b,x,w=t.type;if(void 0!==t.constructor)return null;(s=e.__b)&&s(t);try{e:if("function"==typeof w){if(k=t.props,b=(s=w.contextType)&&r[s.__c],x=s?b?b.props.value:s.__:r,_.__c?g=(f=t.__c=_.__c).__=f.__E:("prototype"in w&&w.prototype.render?t.__c=f=new w(k,x):(t.__c=f=new m(k,x),f.constructor=w,f.render=U),b&&b.sub(f),f.props=k,f.state||(f.state={}),f.context=x,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=w.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=a({},f.__s)),a(f.__s,w.getDerivedStateFromProps(k,f.__s))),h=f.props,d=f.state,p)null==w.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==w.getDerivedStateFromProps&&k!==h&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,x)||t.__v===_.__v&&!f.__){for(f.props=k,f.state=f.__s,t.__v!==_.__v&&(f.__d=!1),f.__v=t,t.__e=_.__e,t.__k=_.__k,f.__h.length&&l.push(f),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(h,d,y)}))}f.context=x,f.props=k,f.state=f.__s,(s=e.__r)&&s(t),f.__d=!1,f.__v=t,f.__P=n,s=f.render(f.props,f.state,f.context),t.__k=null!=s&&s.type==v&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=f.getChildContext&&(r=a(a({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(h,d)),C(n,t,_,r,o,u,l,i,c),f.base=t.__e,f.__h.length&&l.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==u&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=D(_.__e,t,_,r,o,u,l,c);(s=e.diffed)&&s(t)}catch(n){t.__v=null,e.__e(n,t,_)}return t.__e}function N(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function D(e,n,t,_,r,o,u,l){var s,a,f,p,h,d=t.props,v=n.props;if(r="svg"===n.type||r,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===n.type?3===a.nodeType:a.localName===n.type)||e==a)){e=a,o[s]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),o=null,l=!1}if(null===n.type)d!==v&&e.data!=v&&(e.data=v);else{if(null!=o&&(o=c.slice.call(e.childNodes)),f=(d=t.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!l){if(d===i)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}w(e,v,d,r,l),p?n.__k=[]:(n.__k=n.props.children,C(e,n,t,_,"foreignObject"!==n.type&&r,o,u,i,l)),l||("value"in v&&void 0!==(s=v.value)&&s!==e.value&&S(e,"value",s,d.value,!1),"checked"in v&&void 0!==(s=v.checked)&&s!==e.checked&&S(e,"checked",s,d.checked,!1))}return e}function A(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function T(n,t,_){var r,o,u;if(e.unmount&&e.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||A(r,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){e.__e(n,t)}r.base=r.__P=null}if(r=n.__k)for(u=0;u<r.length;u++)r[u]&&T(r[u],t,_);null!=o&&f(o)}function U(e,n,t){return this.constructor(e,t)}function M(n,t,_){var r,o,l;e.__&&e.__(n,t),o=(r=_===u)?null:_&&_.__k||t.__k,n=p(v,null,[n]),l=[],P(t,(r?t:_||t).__k=n,o||i,i,void 0!==t.ownerSVGElement,_&&!r?[_]:o?null:c.slice.call(t.childNodes),l,_||i,r),N(l,n)}function L(e,n){M(e,n,u)}function F(e,n){var t,_;for(_ in n=a(a({},e.props),n),arguments.length>2&&(n.children=c.slice.call(arguments,2)),t={},n)"key"!==_&&"ref"!==_&&(t[_]=n[_]);return h(e.type,t,n.key||e.key,n.ref||e.ref,null)}function W(e){var n={},t={__c:"__cC"+l++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var _,r=this;return this.getChildContext||(_=[],this.getChildContext=function(){return n[t.__c]=r,n},this.shouldComponentUpdate=function(e){r.props.value!==e.value&&_.some((function(n){n.context=e.value,k(n)}))},this.sub=function(e){_.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){_.splice(_.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Consumer.contextType=t,t.Provider.__=t,t}e={__e:function(e,n){for(var t,_;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(_=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(_=!0,t.componentDidCatch(e)),_)return k(t.__E=t)}catch(n){e=n}throw e}},n=function(e){return null!=e&&void 0===e.constructor},m.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&a(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),k(this))},m.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},m.prototype.render=v,t=[],_=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=i,l=0;var O,R,V,j=0,q=[],B=e.__r,I=e.diffed,$=e.__c,z=e.unmount;function G(n,t){e.__h&&e.__h(R,n,j||t),j=0;var _=R.__H||(R.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function J(e){return j=1,Z(ce,e)}function Z(e,n,t){var _=G(O++,2);return _.__c||(_.__c=R,_.__=[t?t(n):ce(void 0,n),function(n){var t=e(_.__[0],n);_.__[0]!==t&&(_.__[0]=t,_.__c.setState({}))}]),_.__}function K(n,t){var _=G(O++,3);!e.__s&&ie(_.__H,t)&&(_.__=n,_.__H=t,R.__H.__h.push(_))}function Q(n,t){var _=G(O++,4);!e.__s&&ie(_.__H,t)&&(_.__=n,_.__H=t,R.__h.push(_))}function X(e){return j=5,ee((function(){return{current:e}}),[])}function Y(e,n,t){j=6,Q((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))}function ee(e,n){var t=G(O++,7);return ie(t.__H,n)?(t.__H=n,t.__h=e,t.__=e()):t.__}function ne(e,n){return j=8,ee((function(){return e}),n)}function te(e){var n=R.context[e.__c],t=G(O++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(R)),n.props.value):e.__}function _e(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)}function re(e){var n=G(O++,10),t=J();return n.__=e,R.componentDidCatch||(R.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}function oe(){q.some((function(n){if(n.__P)try{n.__H.__h.forEach(ue),n.__H.__h.forEach(le),n.__H.__h=[]}catch(t){return n.__H.__h=[],e.__e(t,n.__v),!0}})),q=[]}function ue(e){e.t&&e.t()}function le(e){var n=e.__();"function"==typeof n&&(e.t=n)}function ie(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function ce(e,n){return"function"==typeof n?n(e):n}e.__r=function(e){B&&B(e),O=0,(R=e.__c).__H&&(R.__H.__h.forEach(ue),R.__H.__h.forEach(le),R.__H.__h=[])},e.diffed=function(n){I&&I(n);var t=n.__c;if(t){var _=t.__H;_&&_.__h.length&&(1!==q.push(t)&&V===e.requestAnimationFrame||((V=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(oe))}},e.__c=function(n,t){t.some((function(n){try{n.__h.forEach(ue),n.__h=n.__h.filter((function(e){return!e.__||le(e)}))}catch(o){t.some((function(e){e.__h&&(e.__h=[])})),t=[],e.__e(o,n.__v)}})),$&&$(n,t)},e.unmount=function(n){z&&z(n);var t=n.__c;if(t){var _=t.__H;if(_)try{_.__.forEach((function(e){return e.t&&e.t()}))}catch(n){e.__e(n,t.__v)}}};var se=function(e,n,t,_){var r;n[0]=0;for(var o=1;o<n.length;o++){var u=n[o++],l=n[o]?(n[0]|=u?1:2,t[n[o++]]):n[++o];3===u?_[0]=l:4===u?_[1]=Object.assign(_[1]||{},l):5===u?(_[1]=_[1]||{})[n[++o]]=l:6===u?_[1][n[++o]]+=l+"":u?(r=e.apply(l,se(e,l,t,["",null])),_.push(r),l[0]?n[0]|=2:(n[o-2]=0,n[o]=r)):_.push(l)}return _},ae=new Map;function fe(e){var n=ae.get(this);return n||(n=new Map,ae.set(this,n)),(n=se(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,_=1,r="",o="",u=[0],l=function(e){1===_&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,r):3===_&&(e||r)?(u.push(3,e,r),_=2):2===_&&"..."===r&&e?u.push(4,e,0):2===_&&r&&!e?u.push(5,0,!0,r):_>=5&&((r||!e&&5===_)&&(u.push(_,0,r,t),_=6),e&&(u.push(_,e,0,t),_=6)),r=""},i=0;i<e.length;i++){i&&(1===_&&l(),l(i));for(var c=0;c<e[i].length;c++)n=e[i][c],1===_?"<"===n?(l(),u=[u],_=3):r+=n:4===_?"--"===r&&">"===n?(_=1,r=""):r=n+r[0]:o?n===o?o="":r+=n:'"'===n||"'"===n?o=n:">"===n?(l(),_=1):_&&("="===n?(_=5,t=r,r=""):"/"===n&&(_<5||">"===e[i][c+1])?(l(),3===_&&(u=u[0]),_=u,(u=u[0]).push(2,0,_),_=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(l(),_=2):r+=n),3===_&&"!--"===r&&(_=4,u=u[0])}return l(),u}(e)),n),arguments,[])).length>1?n:n[0]}var pe=fe.bind(p);var he={data:""},de=function(e){try{var n=e?e.querySelector("#_goober"):self._goober;return n||((n=(e||document.head).appendChild(document.createElement("style"))).innerHTML=" ",n.id="_goober"),n.firstChild}catch(o){}return he},ve=function(e){var n=de(e),t=n.data;return n.data="",t},me=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,ye=/\/\*.*?\*\/|\s{2,}|\n/gm,ge=function(e,n,t){var _="",r="",o="";for(var u in e){var l=e[u];if("object"==typeof l){var i=n+" "+u;/&/g.test(u)&&(i=u.replace(/&/g,n)),"@"==u[0]&&(i=n,"f"==u[1]&&(i=u)),/@k/.test(u)?r+=u+"{"+ge(l,"","")+"}":r+=ge(l,i,i==n?u:t||"")}else/^@i/.test(u)?o=u+" "+l+";":_+=u.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+l+";"}if(_.charCodeAt(0)){var c=n+"{"+_+"}";return t?r+t+"{"+c+"}":o+c+r}return o+r},ke={},be=function(e,n,t,_){var r=JSON.stringify(e),o=ke[r]||(ke[r]=".go"+r.split("").reduce((function(e,n){return 101*e+n.charCodeAt(0)>>>0}),11));return function(e,n,t){n.data.indexOf(e)<0&&(n.data=t?e+n.data:n.data+e)}(ke[o]||(ke[o]=ge(e[0]?function(e){for(var n,t=[{}];n=me.exec(e.replace(ye,""));)n[4]&&t.shift(),n[3]?t.unshift(t[0][n[3]]=t[0][n[3]]||{}):n[4]||(t[0][n[1]]=n[2]);return t[0]}(e):e,t?"":o)),n,_),o.slice(1)},Ce=function(e,n,t){return e.reduce((function(e,_,r){var o=n[r];if(o&&o.call){var u=o(t),l=u&&u.props&&u.props.className||/^go/.test(u)&&u;o=l?"."+l:u&&u.props?"":u}return e+_+(null==o?"":o)}),"")};function xe(e){var n=this||{},t=e.call?e(n.p):e;return be(t.map?Ce(t,[].slice.call(arguments,1),n.p):t,de(n.target),n.g,n.o)}var we,He=xe.bind({g:1}),Se=function(e){return we=e};function Ee(e){var n=this||{};return function(){var t=arguments;return function(_){var r=n.p=Object.assign({},_),o=r.className;return n.o=/\s*go[0-9]+/g.test(o),r.className=xe.apply(n,t)+(o?" "+o:""),we(e,r)}}}var Pe=36,Ne="";while(Pe--)Ne+=Pe.toString(36);function De(e){var n="",t=e||11;while(t--)n+=Ne[Math.random()*36|0];return n}export{m as Component,v as Fragment,T as _unmount,F as cloneElement,W as createContext,p as createElement,d as createRef,xe as css,ve as extractCss,He as glob,p as h,pe as html,L as hydrate,n as isValidElement,e as options,M as render,Se as setPragma,Ee as styled,x as toChildArray,De as uid,ne as useCallback,te as useContext,_e as useDebugValue,K as useEffect,re as useErrorBoundary,Y as useImperativeHandle,Q as useLayoutEffect,ee as useMemo,Z as useReducer,X as useRef,J as useState};