var rh=Object.defineProperty;var oh=Object.getOwnPropertyDescriptor;var x=(r,e,t,o)=>{for(var i=o>1?void 0:o?oh(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&rh(e,t,i),i};var Io=globalThis,Si=Io.ShadowRoot&&(Io.ShadyCSS===void 0||Io.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dl=Symbol(),Pl=new WeakMap,$i=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Dl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Si&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Pl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Pl.set(t,e))}return e}toString(){return this.cssText}},_l=r=>new $i(typeof r=="string"?r:r+"",void 0,Dl);var gn=(r,e)=>{Si?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),i=Io.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,r.appendChild(o)})},ki=Si||Io.CSSStyleSheet===void 0?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return _l(t)})(r):r;var Ll,bn,$t=globalThis;(Ll=$t.customElements)!==null&&Ll!==void 0||($t.customElements={define(){}});var Ml=$t.trustedTypes,ih=Ml?Ml.emptyScript:"",Bl=$t.reactiveElementPolyfillSupport,xn={toAttribute(r,e){switch(e){case Boolean:r=r?ih:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Hl=(r,e)=>e!==r&&(e==e||r==r),vn={attribute:!0,type:String,converter:xn,reflect:!1,hasChanged:Hl},Nl=$t.HTMLElement===void 0;Nl&&($t.HTMLElement=class{});var Ct=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=vn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||vn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)t.unshift(ki(i))}else e!==void 0&&t.push(ki(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=vn){var i;let s=this.constructor._$Ep(e,o);if(s!==void 0&&o.reflect===!0){let n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:xn).toAttribute(t,o.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var o;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:xn;this._$El=s,this[s]=a.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||Hl)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ct.finalized=!0,Ct.elementProperties=new Map,Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Nl&&delete $t.HTMLElement,Bl?.({ReactiveElement:Ct}),((bn=$t.reactiveElementVersions)!==null&&bn!==void 0?bn:$t.reactiveElementVersions=[]).push("1.4.2");var yn,Fo=globalThis,Nr=Fo.trustedTypes,jl=Nr?Nr.createPolicy("lit-html",{createHTML:r=>r}):void 0,St=`lit$${(Math.random()+"").slice(9)}$`,wn="?"+St,sh=`<${wn}>`,jr=Fo.document===void 0?{createTreeWalker:()=>({})}:document,To=(r="")=>jr.createComment(r),Vo=r=>r===null||typeof r!="object"&&typeof r!="function",Xl=Array.isArray,Yl=r=>Xl(r)||typeof r?.[Symbol.iterator]=="function",Ro=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zl=/-->/g,Ul=/>/g,nr=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ql=/'/g,Gl=/"/g,Zl=/^(?:script|style|textarea|title)$/i,Jl=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=Jl(1),Gf=Jl(2),ar=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),Wl=new WeakMap,Hr=jr.createTreeWalker(jr,129,null,!1),Kl=(r,e)=>{let t=r.length-1,o=[],i,s=e===2?"<svg>":"",n=Ro;for(let l=0;l<t;l++){let c=r[l],d,u,m=-1,y=0;for(;y<c.length&&(n.lastIndex=y,u=n.exec(c),u!==null);)y=n.lastIndex,n===Ro?u[1]==="!--"?n=zl:u[1]!==void 0?n=Ul:u[2]!==void 0?(Zl.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=nr):u[3]!==void 0&&(n=nr):n===nr?u[0]===">"?(n=i??Ro,m=-1):u[1]===void 0?m=-2:(m=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?nr:u[3]==='"'?Gl:ql):n===Gl||n===ql?n=nr:n===zl||n===Ul?n=Ro:(n=nr,i=void 0);let w=n===nr&&r[l+1].startsWith("/>")?" ":"";s+=n===Ro?c+sh:m>=0?(o.push(d),c.slice(0,m)+"$lit$"+c.slice(m)+St+w):c+St+(m===-2?(o.push(void 0),l):w)}let a=s+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[jl!==void 0?jl.createHTML(a):a,o]},lr=class{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,n=0,a=e.length-1,l=this.parts,[c,d]=Kl(e,t);if(this.el=lr.createElement(c,o),Hr.currentNode=this.el.content,t===2){let u=this.el.content,m=u.firstChild;m.remove(),u.append(...m.childNodes)}for(;(i=Hr.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let u=[];for(let m of i.getAttributeNames())if(m.endsWith("$lit$")||m.startsWith(St)){let y=d[n++];if(u.push(m),y!==void 0){let w=i.getAttribute(y.toLowerCase()+"$lit$").split(St),$=/([.?@])?(.*)/.exec(y);l.push({type:1,index:s,name:$[2],strings:w,ctor:$[1]==="."?Ai:$[1]==="?"?Ei:$[1]==="@"?Ii:dr})}else l.push({type:6,index:s})}for(let m of u)i.removeAttribute(m)}if(Zl.test(i.tagName)){let u=i.textContent.split(St),m=u.length-1;if(m>0){i.textContent=Nr?Nr.emptyScript:"";for(let y=0;y<m;y++)i.append(u[y],To()),Hr.nextNode(),l.push({type:2,index:++s});i.append(u[m],To())}}}else if(i.nodeType===8)if(i.data===wn)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(St,u+1))!==-1;)l.push({type:7,index:s}),u+=St.length-1}s++}}static createElement(e,t){let o=jr.createElement("template");return o.innerHTML=e,o}};function cr(r,e,t=r,o){var i,s,n,a;if(e===ar)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl,c=Vo(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,o)),o!==void 0?((n=(a=t)._$Co)!==null&&n!==void 0?n:a._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=cr(r,l._$AS(r,e.values),l,o)),e}var Oi=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;let{el:{content:o},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:jr).importNode(o,!0);Hr.currentNode=s;let n=Hr.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new Pt(n,n.nextSibling,this,e):c.type===1?d=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(d=new Ri(n,this,e)),this.u.push(d),c=i[++l]}a!==c?.index&&(n=Hr.nextNode(),a++)}return s}p(e){let t=0;for(let o of this.u)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Pt=class{constructor(e,t,o,i){var s;this.type=2,this._$AH=te,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cm=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=cr(this,e,t),Vo(e)?e===te||e==null||e===""?(this._$AH!==te&&this._$AR(),this._$AH=te):e!==this._$AH&&e!==ar&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yl(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==te&&Vo(this._$AH)?this._$AA.nextSibling.data=e:this.T(jr.createTextNode(e)),this._$AH=e}$(e){var t;let{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=lr.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(o);else{let n=new Oi(s,this),a=n.v(this.options);n.p(o),this.T(a),this._$AH=n}}_$AC(e){let t=Wl.get(e.strings);return t===void 0&&Wl.set(e.strings,t=new lr(e)),t}k(e){Xl(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let s of e)i===t.length?t.push(o=new Pt(this.O(To()),this.O(To()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},dr=class{constructor(e,t,o,i,s){this.type=1,this._$AH=te,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=te}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){let s=this.strings,n=!1;if(s===void 0)e=cr(this,e,t,0),n=!Vo(e)||e!==this._$AH&&e!==ar,n&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=cr(this,a[o+l],t,l),c===ar&&(c=this._$AH[l]),n||(n=!Vo(c)||c!==this._$AH[l]),c===te?e=te:e!==te&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(e)}j(e){e===te?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ai=class extends dr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===te?void 0:e}},nh=Nr?Nr.emptyScript:"",Ei=class extends dr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==te?this.element.setAttribute(this.name,nh):this.element.removeAttribute(this.name)}},Ii=class extends dr{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){var o;if((e=(o=cr(this,e,t,0))!==null&&o!==void 0?o:te)===ar)return;let i=this._$AH,s=e===te&&i!==te||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==te&&(i===te||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},Ri=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){cr(this,e)}},ec={P:"$lit$",A:St,M:wn,C:1,L:Kl,R:Oi,D:Yl,V:cr,I:Pt,H:dr,N:Ei,U:Ii,B:Ai,F:Ri},Ql=Fo.litHtmlPolyfillSupport;Ql?.(lr,Pt),((yn=Fo.litHtmlVersions)!==null&&yn!==void 0?yn:Fo.litHtmlVersions=[]).push("2.4.0");var tc=(r,e,t)=>{var o,i;let s=(o=t?.renderBefore)!==null&&o!==void 0?o:e,n=s._$litPart$;if(n===void 0){let a=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new Pt(e.insertBefore(To(),a),a,void 0,t??{})}return n._$AI(r),n};var Cn,$n;var T=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ar}};T.finalized=!0,T._$litElement$=!0,(Cn=globalThis.litElementHydrateSupport)===null||Cn===void 0||Cn.call(globalThis,{LitElement:T});var rc=globalThis.litElementPolyfillSupport;rc?.({LitElement:T});(($n=globalThis.litElementVersions)!==null&&$n!==void 0?$n:globalThis.litElementVersions=[]).push("3.2.2");var V=r=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(r,e):((t,o)=>{let{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){customElements.define(t,n)}}})(r,e);var ah=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function M(r){return(e,t)=>t!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(r,e,t):ah(r,e)}function re(r){return M({...r,state:!0})}var Sn,xm=((Sn=globalThis.HTMLSlotElement)===null||Sn===void 0?void 0:Sn.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function ue(r,e,t){return r?e():t?.()}var zr=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o}};var Pe=class{constructor(e,t,o,i){var s;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){let n=t;this.context=n.context,this.callback=n.callback,this.subscribe=(s=n.subscribe)!==null&&s!==void 0&&s}else this.context=t,this.callback=o,this.subscribe=i!=null&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new zr(this.context,this.t,this.subscribe))}};var Fi=class{constructor(e){this.callbacks=new Map,this.updateObservers=()=>{for(let[t,o]of this.callbacks)t(this.o,o)},e!==void 0&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}addCallback(e,t){t&&(this.callbacks.has(e)||this.callbacks.set(e,()=>{this.callbacks.delete(e)})),e(this.value)}clearCallbacks(){this.callbacks.clear()}};var kn=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,Object.setPrototypeOf(this,new.target.prototype)}},lt=class extends Fi{constructor(e,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=i=>{i.context===this.context&&i.composedPath()[0]!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,i.subscribe))},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new kn(this.context))}};function Do(r){return r?`${r.collectionName}:${r.generatorName}`:""}function Dt(r){if(r&&!(r.default===void 0||r.default===null))return Array.isArray(r.default)?r.default.map(e=>String(e)):r.type==="boolean"?!!r.default:String(r.default)??""}function Vi(r,e){return!r&&!e?!0:Array.isArray(r)&&Array.isArray(e)?r.join(",")===e.join(","):r===e}function oc(r,e){let t;return function(...o){clearTimeout(t),t=setTimeout(()=>{r.apply(this,o)},e)}.bind(r)}function _t(r){return r.items?Array.isArray(r.items)?r.items:r.items.enum:[]}var Pi=class{constructor(e){this.payload=e;this.payloadType="request-validation"}},Di=class{constructor(e){this.payload=e;this.payloadType="copy-to-clipboard"}};var _i=Symbol("submitted");var On=Symbol("form-values"),Li=class{constructor(e){this.formValues={};this.validationResults={};this.debouncedRunGenerator=oc(e=>this.runGenerator(e),500);this.validationListeners={};this.defaultValueListeners={};this.touchedListeners={};this.icc=e.icc,this.submittedContextProvider=new lt(e,{context:_i,initialValue:!1}),new lt(e,{context:On,initialValue:this}),window.addEventListener("option-changed",t=>{t.detail&&this.handleOptionChange(t.detail)})}async handleOptionChange(e){this.formValues={...this.formValues,[e.name]:e.value},this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.entries(this.validationListeners).forEach(([t,o])=>{o?.forEach(i=>i(this.validationResults[t]))}),e.isDefaultValue||(Object.keys(this.validationResults).length===0&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&this.debouncedRunGenerator(!0),this.touchedListeners[e.name]?.forEach(t=>t(!0))),this.defaultValueListeners[e.name]&&this.defaultValueListeners[e.name]?.forEach(t=>t(e.isDefaultValue))}async validate(e,t){if(!t)return{};let o=t.options,i={};Object.entries(e).forEach(([n,a])=>{let l=o.find(c=>c.name===n);l&&(l.pattern&&(new RegExp(l.pattern).test(String(a))||(i[n]=`Value should match the pattern '${l.pattern}'`)),l.isRequired&&(!a||Array.isArray(a)&&a.length===0)&&(i[n]="This field is required"))});let s=await this.icc.getValidationResults(e,t);return{...i,...s}}runGenerator(e=!1){let t=this.getSerializedFormValues();t.push("--no-interactive"),e&&t.push("--dry-run"),this.submittedContextProvider.setValue(!0),this.icc.postMessageToIde({payloadType:"run-generator",payload:{positional:Do(this.icc.generatorSchema),flags:t}})}copyCommandToClipboard(){let e=this.getSerializedFormValues(),o=`nx g ${Do(this.icc.generatorSchema)} ${e.join(" ")}`;this.icc.editor==="vscode"?navigator.clipboard.writeText(o):this.icc.postMessageToIde(new Di(o))}getSerializedFormValues(){let e=[],t={...this.formValues,...this.icc.generatorSchema?.context?.fixedFormValues??{}};return Object.entries(t).forEach(([o,i])=>{let s=this.icc.generatorSchema?.options.find(l=>l.name===o),n=Dt(s);if(Vi(i,n))return;let a=i?.toString()??"";a.includes(" ")?a.includes('"')?e.push(`--${o}='${i}'`):e.push(`--${o}="${i}"`):e.push(`--${o}=${i}`)}),e}registerValidationListener(e,t){this.validationListeners[e]||(this.validationListeners[e]=[]),this.validationListeners[e].push(t)}registerDefaultValueListener(e,t){this.defaultValueListeners[e]||(this.defaultValueListeners[e]=[]),this.defaultValueListeners[e].push(t)}registerTouchedListener(e,t){this.touchedListeners[e]||(this.touchedListeners[e]=[]),this.touchedListeners[e].push(t)}};var _o=Symbol("editor"),Oe=r=>{class e extends r{constructor(...i){super();new Pe(this,{context:_o,callback:s=>{this.editor=s},subscribe:!0})}}return x([re()],e.prototype,"editor",2),e};var Mi=Symbol("generatorContext");var Bi=class{constructor(e){this.host=e;this.pendingPluginValidationQueue=[];let t;try{t=acquireVsCodeApi()}catch{}this.editor=t?"vscode":"intellij",console.log("initializing ide communication for",this.editor),new lt(e,{context:_o,initialValue:this.editor}),this.generatorContextContextProvider=new lt(e,{context:Mi,initialValue:void 0}),t?this.setupVscodeCommunication(t):this.setupIntellijCommunication(),this.postMessageToIde({payloadType:"output-init"})}hostConnected(){}postMessageToIde(e){console.log("sending message to ide",e),this.postToIde(e)}async getValidationResults(e,t){let o=new Promise(i=>{this.pendingPluginValidationQueue.push(i)});return this.postMessageToIde(new Pi({formValues:e,schema:t})),await o}setupVscodeCommunication(e){window.addEventListener("message",t=>{let o=t.data;o&&(console.log("received message from vscode",o),this.handleInputMessage(o))}),this.postToIde=t=>e.postMessage(t)}setupIntellijCommunication(){window.intellijApi?.registerPostToWebviewCallback(e=>{if(e.payloadType==="styles"){this.setIntellijStyles(e.payload);return}this.handleInputMessage(e)}),this.postToIde=e=>{let t=JSON.stringify(e);window.intellijApi?.postToIde(t)}}handleInputMessage(e){switch(e.payloadType){case"generator":{this.generatorSchema=e.payload,this.generatorContextContextProvider.setValue(this.generatorSchema.context),this.host.requestUpdate();break}case"config":{this.configuration=e.payload,this.host.requestUpdate();break}case"banner":{this.banner=e.payload,this.host.requestUpdate();break}case"validation-results":{if(this.pendingPluginValidationQueue.length>0){let t=this.pendingPluginValidationQueue.shift();if(!t)break;t(e.payload)}break}}}setIntellijStyles(e){let t=new CSSStyleSheet;t.replaceSync(`
    :root {
      --foreground-color: ${e.foregroundColor};
      --background-color: ${e.backgroundColor};
      --primary-color: ${e.primaryColor};
      --error-color: ${e.errorColor};
      --field-background-color: ${e.fieldBackgroundColor};
      --field-border-color: ${e.fieldBorderColor};
      --select-field-background-color: ${e.selectFieldBackgroundColor};
      --active-selection-background-color: ${e.activeSelectionBackgroundColor};
      --focus-border-color: ${e.focusBorderColor};
      --banner-warning-color: ${e.bannerWarningBackgroundColor};
      --banner-text-color: ${e.bannerTextColor};
      --badge-background-color: ${e.badgeBackgroundColor};
      --separator-color: ${e.separatorColor};
      --field-nav-hover-color: ${e.fieldNavHoverColor};
      --scrollbar-thumb-color: ${e.scrollbarThumbColor};
      font-family: ${e.fontFamily};
      font-size: ${e.fontSize};
    }
    `),document.adoptedStyleSheets=[t]}};var kt=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();kt.trustedTypes===void 0&&(kt.trustedTypes={createPolicy:(r,e)=>e});var ic={configurable:!1,enumerable:!1,writable:!1};kt.FAST===void 0&&Reflect.defineProperty(kt,"FAST",Object.assign({value:Object.create(null)},ic));var ur=kt.FAST;if(ur.getById===void 0){let r=Object.create(null);Reflect.defineProperty(ur,"getById",Object.assign({value(e,t){let o=r[e];return o===void 0&&(o=t?r[e]=t():null),o}},ic))}var Lt=Object.freeze([]);function Hi(){let r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let o=Reflect.getPrototypeOf(e);for(;t===void 0&&o!==null;)t=r.get(o),o=Reflect.getPrototypeOf(o);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}var An=kt.FAST.getById(1,()=>{let r=[],e=[];function t(){if(e.length)throw e.shift()}function o(n){try{n.call()}catch(a){e.push(a),setTimeout(t,0)}}function i(){let a=0;for(;a<r.length;)if(o(r[a]),a++,a>1024){for(let l=0,c=r.length-a;l<c;l++)r[l]=r[l+a];r.length-=a,a=0}r.length=0}function s(n){r.length<1&&kt.requestAnimationFrame(i),r.push(n)}return Object.freeze({enqueue:s,process:i})}),sc=kt.trustedTypes.createPolicy("fast-html",{createHTML:r=>r}),En=sc,Lo=`fast-${Math.random().toString(36).substring(2,8)}`,In=`${Lo}{`,Ni=`}${Lo}`,O=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(r){if(En!==sc)throw new Error("The HTML policy can only be set once.");En=r},createHTML(r){return En.createHTML(r)},isMarker(r){return r&&r.nodeType===8&&r.data.startsWith(Lo)},extractDirectiveIndexFromMarker(r){return parseInt(r.data.replace(`${Lo}:`,""))},createInterpolationPlaceholder(r){return`${In}${r}${Ni}`},createCustomAttributePlaceholder(r,e){return`${r}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(r){return`<!--${Lo}:${r}-->`},queueUpdate:An.enqueue,processUpdates:An.process,nextUpdate(){return new Promise(An.enqueue)},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)},removeChildNodes(r){for(let e=r.firstChild;e!==null;e=r.firstChild)r.removeChild(e)},createTemplateWalker(r){return document.createTreeWalker(r,133,null,!1)}});var Ur=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);o!==-1&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(t===void 0){let i=this.sub1,s=this.sub2;i!==void 0&&i.handleChange(o,e),s!==void 0&&s.handleChange(o,e)}else for(let i=0,s=t.length;i<s;++i)t[i].handleChange(o,e)}},qr=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];o!==void 0&&o.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var o;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new Ur(this.source)),i.subscribe(e)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new Ur(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(e)}};var I=ur.getById(2,()=>{let r=/(:|&&|\|\||if)/,e=new WeakMap,t=O.queueUpdate,o,i=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=i(c):e.set(c,d=new qr(c))),d}let n=Hi();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return o!==void 0&&o.watch(d,this.name),d[this.field]}setValue(d,u){let m=this.field,y=d[m];if(y!==u){d[m]=u;let w=d[this.callback];typeof w=="function"&&w.call(d,y,u),s(d).notify(this.name)}}}class l extends Ur{constructor(d,u,m=!1){super(d,u),this.binding=d,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();let m=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let y=this.binding(d,u);return o=m,y}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){let m=this.last,y=s(d),w=m===null?this.first:{};if(w.propertySource=d,w.propertyName=u,w.notifier=y,y.subscribe(this,u),m!==null){if(!this.needsRefresh){let $;o=void 0,$=m.propertySource[m.propertyName],o=this,d===$&&(this.needsRefresh=!0)}m.next=w}this.last=w}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{let u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:s,track(c,d){o!==void 0&&o.watch(c,d)},trackVolatile(){o!==void 0&&(o.needsRefresh=!0)},notify(c,d){s(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),n(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:n,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return r.test(c.toString())}})});function A(r,e){I.defineProperty(r,e)}function ac(r,e,t){return Object.assign({},t,{get:function(){return I.trackVolatile(),t.get.apply(this)}})}var nc=ur.getById(3,()=>{let r=null;return{get(){return r},set(e){r=e}}}),Mt=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return nc.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){nc.set(e)}};I.defineProperty(Mt.prototype,"index");I.defineProperty(Mt.prototype,"length");var Bt=Object.seal(new Mt);var Gr=class{constructor(){this.targetIndex=0}},Wr=class extends Gr{constructor(){super(...arguments),this.createPlaceholder=O.createInterpolationPlaceholder}},Qr=class extends Gr{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return O.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function uh(r,e){this.source=r,this.context=e,this.bindingObserver===null&&(this.bindingObserver=I.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(r,e))}function hh(r,e){this.source=r,this.context=e,this.target.addEventListener(this.targetName,this)}function ph(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function fh(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let r=this.target.$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}function mh(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function gh(r){O.setAttribute(this.target,this.targetName,r)}function bh(r){O.setBooleanAttribute(this.target,this.targetName,r)}function vh(r){if(r==null&&(r=""),r.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=r.create():this.target.$fastTemplate!==r&&(e.isComposed&&(e.remove(),e.unbind()),e=r.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=r)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=r}}function xh(r){this.target[this.targetName]=r}function yh(r){let e=this.classVersions||Object.create(null),t=this.target,o=this.version||0;if(r!=null&&r.length){let i=r.split(/\s+/);for(let s=0,n=i.length;s<n;++s){let a=i[s];a!==""&&(e[a]=o,t.classList.add(a))}}if(this.classVersions=e,this.version=o+1,o!==0){o-=1;for(let i in e)e[i]===o&&t.classList.remove(i)}}var hr=class extends Wr{constructor(e){super(),this.binding=e,this.bind=uh,this.unbind=ph,this.updateTarget=gh,this.isBindingVolatile=I.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=xh,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(o,i)=>O.createHTML(t(o,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=bh;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=hh,this.unbind=mh;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=yh);break}}targetAtContent(){this.updateTarget=vh,this.unbind=fh}createBehavior(e){return new Rn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},Rn=class{constructor(e,t,o,i,s,n,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=s,this.updateTarget=n,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Mt.setEvent(e);let t=this.binding(this.source,this.context);Mt.setEvent(null),t!==!0&&e.preventDefault()}};var Fn=null,Mo=class{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Fn=this}static borrow(e){let t=Fn||new Mo;return t.directives=e,t.reset(),Fn=null,t}};function wh(r){if(r.length===1)return r[0];let e,t=r.length,o=r.map(n=>typeof n=="string"?()=>n:(e=n.targetName||e,n.binding)),i=(n,a)=>{let l="";for(let c=0;c<t;++c)l+=o[c](n,a);return l},s=new hr(i);return s.targetName=e,s}var Ch=Ni.length;function cc(r,e){let t=e.split(In);if(t.length===1)return null;let o=[];for(let i=0,s=t.length;i<s;++i){let n=t[i],a=n.indexOf(Ni),l;if(a===-1)l=n;else{let c=parseInt(n.substring(0,a));o.push(r.directives[c]),l=n.substring(a+Ch)}l!==""&&o.push(l)}return o}function lc(r,e,t=!1){let o=e.attributes;for(let i=0,s=o.length;i<s;++i){let n=o[i],a=n.value,l=cc(r,a),c=null;l===null?t&&(c=new hr(()=>a),c.targetName=n.name):c=wh(l),c!==null&&(e.removeAttributeNode(n),i--,s--,r.addFactory(c))}}function $h(r,e,t){let o=cc(r,e.textContent);if(o!==null){let i=e;for(let s=0,n=o.length;s<n;++s){let a=o[s],l=s===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",r.captureContentBinding(a)),i=l,r.targetIndex++,l!==e&&t.nextNode()}r.targetIndex--}}function dc(r,e){let t=r.content;document.adoptNode(t);let o=Mo.borrow(e);lc(o,r,!0);let i=o.behaviorFactories;o.reset();let s=O.createTemplateWalker(t),n;for(;n=s.nextNode();)switch(o.targetIndex++,n.nodeType){case 1:lc(o,n);break;case 3:$h(o,n,s);break;case 8:O.isMarker(n)&&o.addFactory(e[O.extractDirectiveIndexFromMarker(n)])}let a=0;(O.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let l=o.behaviorFactories;return o.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}var Tn=document.createRange(),ji=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let o=e.parentNode,i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,o.insertBefore(i,e),i=s;o.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);let s=this.behaviors,n=this.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}bind(e,t){let o=this.behaviors;if(this.source!==e)if(this.source!==null){let i=this.source;this.source=e,this.context=t;for(let s=0,n=o.length;s<n;++s){let a=o[s];a.unbind(i),a.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i)o[i].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Tn.setStartBefore(e[0].firstChild),Tn.setEndAfter(e[e.length-1].lastChild),Tn.deleteContents();for(let t=0,o=e.length;t<o;++t){let i=e[t],s=i.behaviors,n=i.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}}}};var zi=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c,d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=O.createHTML(d);let m=c.content.firstElementChild;m!==null&&m.tagName==="TEMPLATE"&&(c=m)}else c=d;let u=dc(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),s=O.createTemplateWalker(t),n=0,a=this.targetOffset,l=s.nextNode();for(let c=o.length;n<c;++n){let d=o[n],u=d.targetIndex;for(;l!==null;)if(a===u){i[n]=d.createBehavior(l);break}else l=s.nextNode(),a++}if(this.hasHostBehaviors){let c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++n)i[n]=c[d].createBehavior(e)}return new ji(t,i)}render(e,t,o){typeof t=="string"&&(t=document.getElementById(t)),o===void 0&&(o=t);let i=this.create(o);return i.bind(e,Bt),i.appendTo(t),i}},Sh=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function he(r,...e){let t=[],o="";for(let i=0,s=r.length-1;i<s;++i){let n=r[i],a=e[i];if(o+=n,a instanceof zi){let l=a;a=()=>l}if(typeof a=="function"&&(a=new hr(a)),a instanceof Wr){let l=Sh.exec(n);l!==null&&(a.targetName=l[2])}a instanceof Gr?(o+=a.createPlaceholder(t.length),t.push(a)):o+=a}return o+=r[r.length-1],new zi(o,t)}var X=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};X.create=(()=>{if(O.supportsAdoptedStyleSheets){let r=new Map;return e=>new Vn(e,r)}return r=>new Pn(r)})();function Dn(r){return r.map(e=>e instanceof X?Dn(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function uc(r){return r.map(e=>e instanceof X?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var Vn=class extends X{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=uc(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=Dn(e).map(o=>{if(o instanceof CSSStyleSheet)return o;let i=t.get(o);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(o),t.set(o,i)),i})}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){let t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter(o=>t.indexOf(o)===-1),super.removeStylesFrom(e)}},kh=0;function Oh(){return`fast-style-class-${++kh}`}var Pn=class extends X{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=uc(e),this.styleSheets=Dn(e),this.styleClass=Oh()}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){let s=document.createElement("style");s.innerHTML=t[i],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var Bo=Object.freeze({locate:Hi()}),_n={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}},Xr={toView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e.toString()},fromView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e}},pr=class{constructor(e,t,o=t.toLowerCase(),i="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&s===void 0&&(this.converter=_n)}setValue(e,t){let o=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return I.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||t==="fromView"||O.queueUpdate(()=>{o.add(e);let i=e[this.fieldName];switch(t){case"reflect":let s=this.converter;O.setAttribute(e,this.attribute,s!==void 0?s.toView(i):i);break;case"boolean":O.setBooleanAttribute(e,this.attribute,i);break}o.delete(e)})}static collect(e,...t){let o=[];t.push(Bo.locate(e));for(let i=0,s=t.length;i<s;++i){let n=t[i];if(n!==void 0)for(let a=0,l=n.length;a<l;++a){let c=n[a];typeof c=="string"?o.push(new pr(e,c)):o.push(new pr(e,c.property,c.attribute,c.mode,c.converter))}}return o}};function v(r,e){let t;function o(i,s){arguments.length>1&&(t.property=s),Bo.locate(i.constructor).push(t)}if(arguments.length>1){t={},o(r,e);return}return t=r===void 0?{}:r,o}var hc={mode:"open"},pc={},Ln=ur.getById(4,()=>{let r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)}})}),ct=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=pr.collect(e,t.attributes),i=new Array(o.length),s={},n={};for(let a=0,l=o.length;a<l;++a){let c=o[a];i[a]=c.attribute,s[c.name]=c,n[c.attribute]=c}this.attributes=o,this.observedAttributes=i,this.propertyLookup=s,this.attributeLookup=n,this.shadowOptions=t.shadowOptions===void 0?hc:t.shadowOptions===null?void 0:Object.assign(Object.assign({},hc),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?pc:Object.assign(Object.assign({},pc),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?X.create(t.styles):t.styles instanceof X?t.styles:X.create([t.styles])}get isDefined(){return!!Ln.getByType(this.type)}define(e=customElements){let t=this.type;if(Ln.register(this)){let o=this.attributes,i=t.prototype;for(let s=0,n=o.length;s<n;++s)I.defineProperty(i,o[s]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};ct.forType=Ln.getByType;var fc=new WeakMap,Ah={bubbles:!0,composed:!0,cancelable:!0};function Mn(r){return r.shadowRoot||fc.get(r)||null}var Yr=class extends qr{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(o!==void 0){let s=e.attachShadow(o);o.mode==="closed"&&fc.set(e,s)}let i=I.getAccessors(e);if(i.length>0){let s=this.boundObservables=Object.create(null);for(let n=0,a=i.length;n<a;++n){let l=i[n].name,c=e[l];c!==void 0&&(delete e[l],s[l]=c)}}}get isConnected(){return I.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,I.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=Mn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),o!==null&&this.addBehaviors(o)}}removeStyles(e){let t=Mn(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),o!==null&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let s=0;s<o;++s){let n=e[s];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),i.push(n))}if(this._isConnected){let s=this.element;for(let n=0;n<i.length;++n)i[n].bind(s,Bt)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(o===null)return;let i=e.length,s=[];for(let n=0;n<i;++n){let a=e[n];if(o.has(a)){let l=o.get(a)-1;l===0||t?o.delete(a)&&s.push(a):o.set(a,l)}}if(this._isConnected){let n=this.element;for(let a=0;a<s.length;++a)s[a].unbind(n)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Bt);let t=this.behaviors;if(t!==null)for(let[o]of t)o.bind(e,Bt);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let o=this.element;for(let[i]of t)i.unbind(o)}}onAttributeChangedCallback(e,t,o){let i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Ah),o))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let i=Object.keys(t);for(let s=0,n=i.length;s<n;++s){let a=i[s];e[a]=t[a]}this.boundObservables=null}let o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=Mn(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||O.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let o=ct.forType(e.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new Yr(e,o)}};function mc(r){return class extends r{constructor(){super(),Yr.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}var Ht=Object.assign(mc(HTMLElement),{from(r){return mc(r)},define(r,e){return new ct(r,e).define().type}});var fr=class{createCSS(){return""}createBehavior(){}};function Eh(r,e){let t=[],o="",i=[];for(let s=0,n=r.length-1;s<n;++s){o+=r[s];let a=e[s];if(a instanceof fr){let l=a.createBehavior();a=a.createCSS(),l&&i.push(l)}a instanceof X||a instanceof CSSStyleSheet?(o.trim()!==""&&(t.push(o),o=""),t.push(a)):o+=a}return o+=r[r.length-1],o.trim()!==""&&t.push(o),{styles:t,behaviors:i}}function ye(r,...e){let{styles:t,behaviors:o}=Eh(r,e),i=X.create(t);return o.length&&i.withBehaviors(...o),i}var Bn=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function pe(r){return new Qr("fast-ref",Bn,r)}function gc(r,e){let t=typeof e=="function"?e:()=>e;return(o,i)=>r(o,i)?t(o,i):null}var Ui=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=I.getAccessors(e).some(o=>o.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Lt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var Hn=class extends Ui{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function dt(r){return typeof r=="string"&&(r={property:r}),new Qr("fast-slotted",Hn,r)}var ut=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},Nt=(r,e)=>he`
    <span
        part="end"
        ${pe("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${pe("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,jt=(r,e)=>he`
    <span
        part="start"
        ${pe("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${pe("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,bv=he`
    <span part="end" ${pe("endContainer")}>
        <slot
            name="end"
            ${pe("end")}
            @slotchange="${r=>r.handleEndContentChange()}"
        ></slot>
    </span>
`,vv=he`
    <span part="start" ${pe("startContainer")}>
        <slot
            name="start"
            ${pe("start")}
            @slotchange="${r=>r.handleStartContentChange()}"
        ></slot>
    </span>
`;function h(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}var Nn=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let o=Nn.get(t);o===void 0&&Nn.set(t,o=new Map),o.set(r,e)},Reflect.getOwnMetadata=function(r,e){let t=Nn.get(e);if(t!==void 0)return t.get(r)});var qn=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ac(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:i}=this;return this.container=this.key=void 0,o.registerResolver(i,new we(i,e,t))}};function Ho(r){let e=r.slice(),t=Object.keys(r),o=t.length,i;for(let s=0;s<o;++s)i=t[s],Ec(i)||(e[i]=r[i]);return e}var Ih=Object.freeze({none(r){throw Error(`${r.toString()} not registered, did you forget to add @singleton()?`)},singleton(r){return new we(r,1,r)},transient(r){return new we(r,2,r)}}),jn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Ih.singleton})}),bc=new Map;function vc(r){return e=>Reflect.getOwnMetadata(r,e)}var xc=null,_=Object.freeze({createContainer(r){return new mr(null,Object.assign({},jn.default,r))},findResponsibleContainer(r){let e=r.$$container$$;return e&&e.responsibleForOwnerRequests?e:_.findParentContainer(r)},findParentContainer(r){let e=new CustomEvent(Oc,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return r.dispatchEvent(e),e.detail.container||_.getOrCreateDOMContainer()},getOrCreateDOMContainer(r,e){return r?r.$$container$$||new mr(r,Object.assign({},jn.default,e,{parentLocator:_.findParentContainer})):xc||(xc=new mr(null,Object.assign({},jn.default,e,{parentLocator:()=>null})))},getDesignParamtypes:vc("design:paramtypes"),getAnnotationParamtypes:vc("di:paramtypes"),getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamtypes(r);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],r),e},getDependencies(r){let e=bc.get(r);if(e===void 0){let t=r.inject;if(t===void 0){let o=_.getDesignParamtypes(r),i=_.getAnnotationParamtypes(r);if(o===void 0)if(i===void 0){let s=Object.getPrototypeOf(r);typeof s=="function"&&s!==Function.prototype?e=Ho(_.getDependencies(s)):e=[]}else e=Ho(i);else if(i===void 0)e=Ho(o);else{e=Ho(o);let s=i.length,n;for(let c=0;c<s;++c)n=i[c],n!==void 0&&(e[c]=n);let a=Object.keys(i);s=a.length;let l;for(let c=0;c<s;++c)l=a[c],Ec(l)||(e[l]=i[l])}}else e=Ho(t);bc.set(r,e)}return e},defineProperty(r,e,t,o=!1){let i=`$di_${e}`;Reflect.defineProperty(r,e,{get:function(){let s=this[i];if(s===void 0&&(s=(this instanceof HTMLElement?_.findResponsibleContainer(this):_.getOrCreateDOMContainer()).get(t),this[i]=s,o&&this instanceof Ht)){let a=this.$fastController,l=()=>{let d=_.findResponsibleContainer(this).get(t),u=this[i];d!==u&&(this[i]=s,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return s}})},createInterface(r,e){let t=typeof r=="function"?r:e,o=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||$c,i=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,s=function(n,a,l){if(n==null||new.target!==void 0)throw new Error(`No registration for interface: '${s.friendlyName}'`);if(a)_.defineProperty(n,a,s,i);else{let c=_.getOrCreateAnnotationParamTypes(n);c[l]=s}};return s.$isInterface=!0,s.friendlyName=o??"(anonymous)",t!=null&&(s.register=function(n,a){return t(new qn(n,a??s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject(...r){return function(e,t,o){if(typeof o=="number"){let i=_.getOrCreateAnnotationParamTypes(e),s=r[0];s!==void 0&&(i[o]=s)}else if(t)_.defineProperty(e,t,r[0]);else{let i=o?_.getOrCreateAnnotationParamTypes(o.value):_.getOrCreateAnnotationParamTypes(e),s;for(let n=0;n<r.length;++n)s=r[n],s!==void 0&&(i[n]=s)}}},transient(r){return r.register=function(t){return gr.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=Fh){return r.register=function(o){return gr.singleton(r,r).register(o)},r.registerInRequestor=e.scoped,r}}),Rh=_.createInterface("Container");function Qi(r){return function(e){let t=function(o,i,s){_.inject(t)(o,i,s)};return t.$isResolver=!0,t.resolve=function(o,i){return r(e,o,i)},t}}var Cv=_.inject;var Fh={scoped:!1};function Th(r){return function(e,t){t=!!t;let o=function(i,s,n){_.inject(o)(i,s,n)};return o.$isResolver=!0,o.resolve=function(i,s){return r(e,i,s,t)},o}}var $v=Th((r,e,t,o)=>t.getAll(r,o)),Sv=Qi((r,e,t)=>()=>t.get(r)),kv=Qi((r,e,t)=>{if(t.has(r,!0))return t.get(r)});function Wn(r,e,t){_.inject(Wn)(r,e,t)}Wn.$isResolver=!0;Wn.resolve=()=>{};var Ov=Qi((r,e,t)=>{let o=kc(r,e),i=new we(r,0,o);return t.registerResolver(r,i),o}),Av=Qi((r,e,t)=>kc(r,e));function kc(r,e){return e.getFactory(r).construct(e)}var we=class{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let o=e.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(o=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||o===void 0?void 0:o.call(t,e))!==null&&i!==void 0?i:null;default:return null}}};function yc(r){return this.get(r)}function Vh(r,e){return e(r)}var Gn=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return t===void 0?o=new this.Type(...this.dependencies.map(yc,e)):o=new this.Type(...this.dependencies.map(yc,e),...t),this.transformers==null?o:this.transformers.reduce(Vh,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},Ph={$isResolver:!0,resolve(r,e){return e}};function Wi(r){return typeof r.register=="function"}function Dh(r){return Wi(r)&&typeof r.registerInRequestor=="boolean"}function wc(r){return Dh(r)&&r.registerInRequestor}function _h(r){return r.prototype!==void 0}var Lh=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Oc="__DI_LOCATE_PARENT__",zn=new Map,mr=class{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Rh,Ph),e instanceof Node&&e.addEventListener(Oc,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,o,i,s,n,a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!Sc(t))if(Wi(t))t.register(this,a);else if(_h(t))gr.singleton(t,t).register(this);else for(o=Object.keys(t),s=0,n=o.length;s<n;++s)i=t[o[s]],Sc(i)&&(Wi(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(e,t){qi(e);let o=this.resolvers,i=o.get(e);return i==null?o.set(e,t):i instanceof we&&i.strategy===4?i.state.push(t):o.set(e,new we(e,4,[i,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(o==null)return!1;if(o.getFactory){let i=o.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(qi(e),e.resolve!==void 0)return e;let o=this,i;for(;o!=null;)if(i=o.resolvers.get(e),i==null){if(o.parent==null){let s=wc(e)?this:o;return t?this.jitRegister(e,s):null}o=o.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(qi(e),e.$isResolver)return e.resolve(this,this);let t=this,o;for(;t!=null;)if(o=t.resolvers.get(e),o==null){if(t.parent==null){let i=wc(e)?this:t;return o=this.jitRegister(e,i),o.resolve(t,this)}t=t.parent}else return o.resolve(t,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){qi(e);let o=this,i=o,s;if(t){let n=Lt;for(;i!=null;)s=i.resolvers.get(e),s!=null&&(n=n.concat(Cc(s,i,o))),i=i.parent;return n}else for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i=i.parent,i==null)return Lt}else return Cc(s,i,o);return Lt}getFactory(e){let t=zn.get(e);if(t===void 0){if(Mh(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);zn.set(e,t=new Gn(e,_.getDependencies(e)))}return t}registerFactory(e,t){zn.set(e,t)}createChild(e){return new mr(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Lh.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Wi(e)){let o=e.register(t);if(!(o instanceof Object)||o.resolve==null){let i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}},Un=new WeakMap;function Ac(r){return function(e,t,o){if(Un.has(o))return Un.get(o);let i=r(e,t,o);return Un.set(o,i),i}}var gr=Object.freeze({instance(r,e){return new we(r,0,e)},singleton(r,e){return new we(r,1,e)},transient(r,e){return new we(r,2,e)},callback(r,e){return new we(r,3,e)},cachedCallback(r,e){return new we(r,3,Ac(e))},aliasTo(r,e){return new we(e,5,r)}});function qi(r){if(r==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Cc(r,e,t){if(r instanceof we&&r.strategy===4){let o=r.state,i=o.length,s=new Array(i);for(;i--;)s[i]=o[i].resolve(e,t);return s}return[r.resolve(e,t)]}var $c="(anonymous)";function Sc(r){return typeof r=="object"&&r!==null||typeof r=="function"}var Mh=function(){let r=new WeakMap,e=!1,t="",o=0;return function(i){return e=r.get(i),e===void 0&&(t=i.toString(),o=t.length,e=o>=29&&o<=100&&t.charCodeAt(o-1)===125&&t.charCodeAt(o-2)<=32&&t.charCodeAt(o-3)===93&&t.charCodeAt(o-4)===101&&t.charCodeAt(o-5)===100&&t.charCodeAt(o-6)===111&&t.charCodeAt(o-7)===99&&t.charCodeAt(o-8)===32&&t.charCodeAt(o-9)===101&&t.charCodeAt(o-10)===118&&t.charCodeAt(o-11)===105&&t.charCodeAt(o-12)===116&&t.charCodeAt(o-13)===97&&t.charCodeAt(o-14)===110&&t.charCodeAt(o-15)===88,r.set(i,e)),e}}(),Gi={};function Ec(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{let e=Gi[r];if(e!==void 0)return e;let t=r.length;if(t===0)return Gi[r]=!1;let o=0;for(let i=0;i<t;++i)if(o=r.charCodeAt(i),i===0&&o===48&&t>1||o<48||o>57)return Gi[r]=!1;return Gi[r]=!0}default:return!1}}function Ic(r){return`${r.toLowerCase()}:presentation`}var Xi=new Map,Zi=Object.freeze({define(r,e,t){let o=Ic(r);Xi.get(o)===void 0?Xi.set(o,e):Xi.set(o,!1),t.register(gr.instance(o,e))},forTag(r,e){let t=Ic(r),o=Xi.get(t);return o===!1?_.findResponsibleContainer(e).get(t):o||null}}),Yi=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?X.create(t):t instanceof X?t:X.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var ie=class extends Ht{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Zi.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Qn(this===ie?class extends ie{}:this,e,t)}};h([A],ie.prototype,"template",void 0);h([A],ie.prototype,"styles",void 0);function No(r,e,t){return typeof r=="function"?r(e,t):r}var Qn=class{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,i=this.overrideDefinition,n=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let l=new Yi(No(o.template,a,o),No(o.styles,a,o));a.definePresentation(l);let c=No(o.shadowOptions,a,o);a.shadowRootMode&&(c?i.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:No(o.elementOptions,a,o),shadowOptions:c,attributes:No(o.attributes,a,o)})}})}};function Ce(r,...e){let t=Bo.locate(r);e.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(r.prototype,s,Object.getOwnPropertyDescriptor(o.prototype,s))}),Bo.locate(o).forEach(s=>t.push(s))})}function Ji(r,e){let t=r.length;for(;t--;)if(e(r[t],t,r))return t;return-1}function Rc(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ki(...r){return r.every(e=>e instanceof HTMLElement)}function Bh(){let r=document.querySelector('meta[property="csp-nonce"]');return r?r.getAttribute("content"):null}var br;function es(){if(typeof br=="boolean")return br;if(!Rc())return br=!1,br;let r=document.createElement("style"),e=Bh();e!==null&&r.setAttribute("nonce",e),document.head.appendChild(r);try{r.sheet.insertRule("foo:focus-visible {color:inherit}",0),br=!0}catch{br=!1}finally{document.head.removeChild(r)}return br}var Fc;(function(r){r[r.alt=18]="alt",r[r.arrowDown=40]="arrowDown",r[r.arrowLeft=37]="arrowLeft",r[r.arrowRight=39]="arrowRight",r[r.arrowUp=38]="arrowUp",r[r.back=8]="back",r[r.backSlash=220]="backSlash",r[r.break=19]="break",r[r.capsLock=20]="capsLock",r[r.closeBracket=221]="closeBracket",r[r.colon=186]="colon",r[r.colon2=59]="colon2",r[r.comma=188]="comma",r[r.ctrl=17]="ctrl",r[r.delete=46]="delete",r[r.end=35]="end",r[r.enter=13]="enter",r[r.equals=187]="equals",r[r.equals2=61]="equals2",r[r.equals3=107]="equals3",r[r.escape=27]="escape",r[r.forwardSlash=191]="forwardSlash",r[r.function1=112]="function1",r[r.function10=121]="function10",r[r.function11=122]="function11",r[r.function12=123]="function12",r[r.function2=113]="function2",r[r.function3=114]="function3",r[r.function4=115]="function4",r[r.function5=116]="function5",r[r.function6=117]="function6",r[r.function7=118]="function7",r[r.function8=119]="function8",r[r.function9=120]="function9",r[r.home=36]="home",r[r.insert=45]="insert",r[r.menu=93]="menu",r[r.minus=189]="minus",r[r.minus2=109]="minus2",r[r.numLock=144]="numLock",r[r.numPad0=96]="numPad0",r[r.numPad1=97]="numPad1",r[r.numPad2=98]="numPad2",r[r.numPad3=99]="numPad3",r[r.numPad4=100]="numPad4",r[r.numPad5=101]="numPad5",r[r.numPad6=102]="numPad6",r[r.numPad7=103]="numPad7",r[r.numPad8=104]="numPad8",r[r.numPad9=105]="numPad9",r[r.numPadDivide=111]="numPadDivide",r[r.numPadDot=110]="numPadDot",r[r.numPadMinus=109]="numPadMinus",r[r.numPadMultiply=106]="numPadMultiply",r[r.numPadPlus=107]="numPadPlus",r[r.openBracket=219]="openBracket",r[r.pageDown=34]="pageDown",r[r.pageUp=33]="pageUp",r[r.period=190]="period",r[r.print=44]="print",r[r.quote=222]="quote",r[r.scrollLock=145]="scrollLock",r[r.shift=16]="shift",r[r.space=32]="space",r[r.tab=9]="tab",r[r.tilde=192]="tilde",r[r.windowsLeft=91]="windowsLeft",r[r.windowsOpera=219]="windowsOpera",r[r.windowsRight=92]="windowsRight"})(Fc||(Fc={}));var De="ArrowDown";var _e="ArrowUp",Le="Enter",Me="Escape",Be="Home",He="End";var Ae=" ",Ne="Tab";var ts;(function(r){r.ltr="ltr",r.rtl="rtl"})(ts||(ts={}));function Tc(r,e,t){return Math.min(Math.max(t,r),e)}function ht(r,e,t=0){return[e,t]=[e,t].sort((o,i)=>o-i),e<=r&&r<t}var Hh=0;function pt(r=""){return`${r}${Hh++}`}var R;(function(r){r.Canvas="Canvas",r.CanvasText="CanvasText",r.LinkText="LinkText",r.VisitedText="VisitedText",r.ActiveText="ActiveText",r.ButtonFace="ButtonFace",r.ButtonText="ButtonText",r.Field="Field",r.FieldText="FieldText",r.Highlight="Highlight",r.HighlightText="HighlightText",r.GrayText="GrayText"})(R||(R={}));var D=class{};h([v({attribute:"aria-atomic"})],D.prototype,"ariaAtomic",void 0);h([v({attribute:"aria-busy"})],D.prototype,"ariaBusy",void 0);h([v({attribute:"aria-controls"})],D.prototype,"ariaControls",void 0);h([v({attribute:"aria-current"})],D.prototype,"ariaCurrent",void 0);h([v({attribute:"aria-describedby"})],D.prototype,"ariaDescribedby",void 0);h([v({attribute:"aria-details"})],D.prototype,"ariaDetails",void 0);h([v({attribute:"aria-disabled"})],D.prototype,"ariaDisabled",void 0);h([v({attribute:"aria-errormessage"})],D.prototype,"ariaErrormessage",void 0);h([v({attribute:"aria-flowto"})],D.prototype,"ariaFlowto",void 0);h([v({attribute:"aria-haspopup"})],D.prototype,"ariaHaspopup",void 0);h([v({attribute:"aria-hidden"})],D.prototype,"ariaHidden",void 0);h([v({attribute:"aria-invalid"})],D.prototype,"ariaInvalid",void 0);h([v({attribute:"aria-keyshortcuts"})],D.prototype,"ariaKeyshortcuts",void 0);h([v({attribute:"aria-label"})],D.prototype,"ariaLabel",void 0);h([v({attribute:"aria-labelledby"})],D.prototype,"ariaLabelledby",void 0);h([v({attribute:"aria-live"})],D.prototype,"ariaLive",void 0);h([v({attribute:"aria-owns"})],D.prototype,"ariaOwns",void 0);h([v({attribute:"aria-relevant"})],D.prototype,"ariaRelevant",void 0);h([v({attribute:"aria-roledescription"})],D.prototype,"ariaRoledescription",void 0);var Vc=(r,e)=>he`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${pe("control")}
    >
        ${jt(r,e)}
        <span class="content" part="content">
            <slot ${dt("defaultSlottedContent")}></slot>
        </span>
        ${Nt(r,e)}
    </button>
`;var Pc="form-associated-proxy",Dc="ElementInternals",_c=Dc in window&&"setFormValue"in window[Dc].prototype,Lc=new WeakMap;function vr(r){let e=class extends r{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return _c}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?o.concat(Array.from(t)):o;return Object.freeze(i)}else return Lt}valueChanged(t,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),O.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),O.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!_c)return null;let t=Lc.get(this);return t||(t=this.attachInternals(),Lc.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,o,i){this.elementInternals?this.elementInternals.setValidity(t,o,i):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Pc),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Pc)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,o){this.elementInternals&&this.elementInternals.setFormValue(t,o||t)}_keypressHandler(t){switch(t.key){case Le:if(this.form instanceof HTMLFormElement){let o=this.form.querySelector("[type=submit]");o?.click()}break}}stopPropagation(t){t.stopPropagation()}};return v({mode:"boolean"})(e.prototype,"disabled"),v({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),v({attribute:"current-value"})(e.prototype,"currentValue"),v(e.prototype,"name"),v({mode:"boolean"})(e.prototype,"required"),A(e.prototype,"value"),e}function Mc(r){class e extends vr(r){}class t extends e{constructor(...i){super(i),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(i,s){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),i!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(i,s){this.checked=this.currentChecked}updateForm(){let i=this.checked?this.value:null;this.setFormValue(i,i)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return v({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),v({attribute:"current-checked",converter:_n})(t.prototype,"currentChecked"),A(t.prototype,"defaultChecked"),A(t.prototype,"checked"),t}var Xn=class extends ie{},rs=class extends vr(Xn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Ee=class extends rs{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;let e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(o=>{o.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(o=>{o.removeEventListener("click",this.handleClick)})}};h([v({mode:"boolean"})],Ee.prototype,"autofocus",void 0);h([v({attribute:"form"})],Ee.prototype,"formId",void 0);h([v],Ee.prototype,"formaction",void 0);h([v],Ee.prototype,"formenctype",void 0);h([v],Ee.prototype,"formmethod",void 0);h([v({mode:"boolean"})],Ee.prototype,"formnovalidate",void 0);h([v],Ee.prototype,"formtarget",void 0);h([v],Ee.prototype,"type",void 0);h([A],Ee.prototype,"defaultSlottedContent",void 0);var Zr=class{};h([v({attribute:"aria-expanded"})],Zr.prototype,"ariaExpanded",void 0);h([v({attribute:"aria-pressed"})],Zr.prototype,"ariaPressed",void 0);Ce(Zr,D);Ce(Ee,ut,Zr);var Bc=(r,e)=>he`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,o)=>t.keypressHandler(o.event)}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${dt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var Yn=class extends ie{},os=class extends Mc(Yn){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var xr=class extends os{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Ae:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};h([v({attribute:"readonly",mode:"boolean"})],xr.prototype,"readOnly",void 0);h([A],xr.prototype,"defaultSlottedNodes",void 0);h([A],xr.prototype,"indeterminate",void 0);function Zn(r){return Ki(r)&&(r.getAttribute("role")==="option"||r instanceof HTMLOptionElement)}var je=class extends ie{constructor(e,t,o,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),I.notify(this,"value")}get value(){var e;return I.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};h([A],je.prototype,"checked",void 0);h([A],je.prototype,"content",void 0);h([A],je.prototype,"defaultSelected",void 0);h([v({mode:"boolean"})],je.prototype,"disabled",void 0);h([v({attribute:"selected",mode:"boolean"})],je.prototype,"selectedAttribute",void 0);h([A],je.prototype,"selected",void 0);h([v({attribute:"value",mode:"fromView"})],je.prototype,"initialValue",void 0);var zt=class{};h([A],zt.prototype,"ariaChecked",void 0);h([A],zt.prototype,"ariaPosInSet",void 0);h([A],zt.prototype,"ariaSelected",void 0);h([A],zt.prototype,"ariaSetSize",void 0);Ce(zt,D);Ce(je,ut,zt);var oe=class extends ie{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return I.track(this,"options"),this._options}set options(e){this._options=e,I.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,i=e+o,s=null;switch(o){case-1:{s=this.options.reduceRight((n,a,l)=>!n&&!a.disabled&&l<i?a:n,s);break}case 1:{s=this.options.reduce((n,a,l)=>!n&&!a.disabled&&l>i?a:n,s);break}}return this.options.indexOf(s)}handleChange(e,t){switch(t){case"selected":{oe.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,oe.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case Be:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case De:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case _e:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case He:{e.preventDefault(),this.selectLastOption();break}case Ne:return this.focusAndScrollOptionIntoView(),!0;case Le:case Me:return!0;case Ae:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((o=this.options[this.selectedIndex])===null||o===void 0)&&o.disabled&&typeof e=="number"){let i=this.getSelectableIndex(e,t),s=i>-1?i:e;this.selectedIndex=s,t===s&&this.selectedIndexChanged(t,s);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let i=t.filter(oe.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(s=>{let n=I.getNotifier(s);n.unsubscribe(this,"selected"),s.selected=i.includes(s),n.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>!o.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Ji(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>o.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,o;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,s)=>(Zn(s)&&i.push(s),i),[]);let o=`${this.options.length}`;this.options.forEach((i,s)=>{i.id||(i.id=pt("option-")),i.ariaPosInSet=`${s+1}`,i.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let o=this.getTypeaheadMatches();if(o.length){let i=this.options.indexOf(o[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}};oe.slottedOptionFilter=r=>Zn(r)&&!r.hidden;oe.TYPE_AHEAD_TIMEOUT_MS=1e3;h([v({mode:"boolean"})],oe.prototype,"disabled",void 0);h([A],oe.prototype,"selectedIndex",void 0);h([A],oe.prototype,"selectedOptions",void 0);h([A],oe.prototype,"slottedOptions",void 0);h([A],oe.prototype,"typeaheadBuffer",void 0);var ft=class{};h([A],ft.prototype,"ariaActiveDescendant",void 0);h([A],ft.prototype,"ariaDisabled",void 0);h([A],ft.prototype,"ariaExpanded",void 0);h([A],ft.prototype,"ariaMultiSelectable",void 0);Ce(ft,D);Ce(oe,ft);var jo={above:"above",below:"below"};function zo(r){let e=r.parentElement;if(e)return e;{let t=r.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Hc(r,e){let t=e;for(;t!==null;){if(t===r)return!0;t=zo(t)}return!1}var mt=document.createElement("div");function Nh(r){return r instanceof Ht}var Uo=class{setProperty(e,t){O.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){O.queueUpdate(()=>this.target.removeProperty(e))}},Kn=class extends Uo{constructor(e){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(X.create([t]))}},ea=class extends Uo{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},ta=class extends Uo{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},is=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),I.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),O.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),O.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let i=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[i].style}else this.target=null}};h([A],is.prototype,"target",void 0);var ra=class{constructor(e){this.target=e.style}setProperty(e,t){O.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){O.queueUpdate(()=>this.target.removeProperty(e))}},Y=class{setProperty(e,t){Y.properties[e]=t;for(let o of Y.roots.values())yr.getOrCreate(Y.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete Y.properties[e];for(let t of Y.roots.values())yr.getOrCreate(Y.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=Y;if(!t.has(e)){t.add(e);let o=yr.getOrCreate(this.normalizeRoot(e));for(let i in Y.properties)o.setProperty(i,Y.properties[i])}}static unregisterRoot(e){let{roots:t}=Y;if(t.has(e)){t.delete(e);let o=yr.getOrCreate(Y.normalizeRoot(e));for(let i in Y.properties)o.removeProperty(i)}}static normalizeRoot(e){return e===mt?document:e}};Y.roots=new Set;Y.properties={};var Jn=new WeakMap,jh=O.supportsAdoptedStyleSheets?Kn:is,yr=Object.freeze({getOrCreate(r){if(Jn.has(r))return Jn.get(r);let e;return r===mt?e=new Y:r instanceof Document?e=O.supportsAdoptedStyleSheets?new ea:new ta:Nh(r)?e=new jh(r):e=new ra(r),Jn.set(r,e),e}});var ae=class extends fr{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ae.uniqueId(),ae.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ae({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return ae.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=j.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ae&&(t=this.alias(t)),j.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),j.existsFor(e)&&j.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(mt,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!j.existsFor(t)&&j.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(o=>o.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};ae.uniqueId=(()=>{let r=0;return()=>(r++,r.toString(16))})();ae.tokensById=new Map;var oa=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){yr.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(j.getOrCreate(t).get(e)))}remove(e,t){yr.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},ia=class{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=I.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Bt))}},sa=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),I.getNotifier(this).notify(e.id))}get(e){return I.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}},qo=new WeakMap,Go=new WeakMap,j=class{constructor(e){this.target=e,this.store=new sa,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,o)=>{let i=ae.getTokenById(o);if(i&&(i.notify(this.target),ae.isCSSDesignToken(i))){let s=this.parent,n=this.isReflecting(i);if(s){let a=s.get(i),l=t.get(i);a!==l&&!n?this.reflectToCSS(i):a===l&&n&&this.stopReflectToCSS(i)}else n||this.reflectToCSS(i)}}},qo.set(e,this),I.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Ht?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return qo.get(e)||new j(e)}static existsFor(e){return qo.has(e)}static findParent(e){if(mt!==e.target){let t=zo(e.target);for(;t!==null;){if(qo.has(t))return qo.get(t);t=zo(t)}return j.getOrCreate(mt)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==mt?j.getOrCreate(mt):null}while(o!==null);return null}get parent(){return Go.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let o=this.getRaw(e);if(o!==void 0)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=j.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){ae.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ae.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=j.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Go.get(this).removeChild(this)}appendChild(e){e.parent&&Go.get(e).removeChild(e);let t=this.children.filter(o=>e.contains(o));Go.set(e,this),this.children.push(e),t.forEach(o=>e.appendChild(o)),I.getNotifier(this.store).subscribe(e);for(let[o,i]of this.store.all())e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):i)}removeChild(e){let t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),I.getNotifier(this.store).unsubscribe(e),e.parent===this?Go.delete(e):!1}contains(e){return Hc(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),j.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),j.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=ae.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);ae.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new ia(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};j.cssCustomPropertyReflector=new oa;h([A],j.prototype,"children",void 0);function zh(r){return ae.from(r)}var Wo=Object.freeze({create:zh,notifyConnection(r){return!r.isConnected||!j.existsFor(r)?!1:(j.getOrCreate(r).bind(),!0)},notifyDisconnection(r){return r.isConnected||!j.existsFor(r)?!1:(j.getOrCreate(r).unbind(),!0)},registerRoot(r=mt){Y.registerRoot(r)},unregisterRoot(r=mt){Y.unregisterRoot(r)}});var na=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),aa=new Map,ss=new Map,Jr=null,Qo=_.createInterface(r=>r.cachedCallback(e=>(Jr===null&&(Jr=new ns(null,e)),Jr))),ca=Object.freeze({tagFor(r){return ss.get(r)},responsibleFor(r){let e=r.$$designSystem$$;return e||_.findResponsibleContainer(r).get(Qo)},getOrCreate(r){if(!r)return Jr===null&&(Jr=_.getOrCreateDOMContainer().get(Qo)),Jr;let e=r.$$designSystem$$;if(e)return e;let t=_.getOrCreateDOMContainer(r);if(t.has(Qo,!1))return t.get(Qo);{let o=new ns(r,t);return t.register(gr.instance(Qo,o)),o}}});function Uh(r,e,t){return typeof r=="string"?{name:r,type:e,callback:t}:r}var ns=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>na.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],i=this.disambiguate,s=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(a,l,c){let d=Uh(a,l,c),{name:u,callback:m,baseClass:y}=d,{type:w}=d,$=u,ee=aa.get($),Ze=!0;for(;ee;){let Ve=i($,w,ee);switch(Ve){case na.ignoreDuplicate:return;case na.definitionCallbackOnly:Ze=!1,ee=void 0;break;default:$=Ve,ee=aa.get($);break}}Ze&&((ss.has(w)||w===ie)&&(w=class extends w{}),aa.set($,w),ss.set(w,$),y&&ss.set(y,$)),o.push(new la(t,$,w,s,m,Ze))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Wo.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(let a of o)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},la=class{constructor(e,t,o,i,s,n){this.container=e,this.name=t,this.type=o,this.shadowRootMode=i,this.callback=s,this.willDefine=n,this.definition=null}definePresentation(e){Zi.define(this.name,e,this.container)}defineElement(e){this.definition=new ct(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ca.tagFor(e)}};var Nc=(r,e)=>he`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${jt(r,e)}
        <span class="content" part="content">
            <slot ${dt("content")}></slot>
        </span>
        ${Nt(r,e)}
    </template>
`;var wr=class extends oe{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,i;this.ariaActiveDescendant=(i=(o=this.options[t])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,o)=>{t.checked=ht(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=ht(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=ht(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,o)=>{t.checked=ht(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case Be:{this.checkFirstOption(o);return}case De:{this.checkNextOption(o);return}case _e:{this.checkPreviousOption(o);return}case He:{this.checkLastOption(o);return}case Ne:return this.focusAndScrollOptionIntoView(),!0;case Me:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Ae:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,(o=this.options)===null||o===void 0||o.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let i=Math.max(0,parseInt((o=t?.toFixed())!==null&&o!==void 0?o:"",10));i!==t&&O.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(o=>!o.disabled),t=!e.every(o=>o.selected);e.forEach(o=>o.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let o=this.getTypeaheadMatches(),i=this.options.indexOf(o[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};h([A],wr.prototype,"activeIndex",void 0);h([v({mode:"boolean"})],wr.prototype,"multiple",void 0);h([v({converter:Xr})],wr.prototype,"size",void 0);var da=class extends ie{},as=class extends vr(da){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var ua={email:"email",password:"password",tel:"tel",text:"text",url:"url"};var fe=class extends as{constructor(){super(...arguments),this.type=ua.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&O.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([v({attribute:"readonly",mode:"boolean"})],fe.prototype,"readOnly",void 0);h([v({mode:"boolean"})],fe.prototype,"autofocus",void 0);h([v],fe.prototype,"placeholder",void 0);h([v],fe.prototype,"type",void 0);h([v],fe.prototype,"list",void 0);h([v({converter:Xr})],fe.prototype,"maxlength",void 0);h([v({converter:Xr})],fe.prototype,"minlength",void 0);h([v],fe.prototype,"pattern",void 0);h([v({converter:Xr})],fe.prototype,"size",void 0);h([v({mode:"boolean"})],fe.prototype,"spellcheck",void 0);h([A],fe.prototype,"defaultSlottedNodes",void 0);var ls=class{};Ce(ls,D);Ce(fe,ut,ls);function jc(r,e,t){return r.nodeType!==Node.TEXT_NODE?!0:typeof r.nodeValue=="string"&&!!r.nodeValue.trim().length}var ha=class extends wr{},cs=class extends vr(ha){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var Je=class extends cs{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=pt("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,O.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return I.track(this,"value"),this._value}set value(e){var t,o,i,s,n,a,l;let c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let d=this._options.findIndex(y=>y.value===e),u=(i=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,m=(n=(s=this._options[d])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null;(d===-1||u!==m)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),I.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?jo.above:jo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===jo.above?~~e.top:~~o}get displayValue(){var e,t;return I.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(o=>{I.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(o=>{I.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),(o=this.options)===null||o===void 0||o.forEach((i,s)=>{var n;let a=(n=this.proxy)===null||n===void 0?void 0:n.options.item(s);a&&(a.selected=i.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(oe.slottedOptionFilter),o=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case Ae:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Be:case He:{e.preventDefault();break}case Le:{e.preventDefault(),this.open=!this.open;break}case Me:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Ne:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===De||t===_e)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&I.notify(this,"displayValue")}};h([v({attribute:"open",mode:"boolean"})],Je.prototype,"open",void 0);h([ac],Je.prototype,"collapsible",null);h([A],Je.prototype,"control",void 0);h([v({attribute:"position"})],Je.prototype,"positionAttribute",void 0);h([A],Je.prototype,"position",void 0);h([A],Je.prototype,"maxHeight",void 0);var Xo=class{};h([A],Xo.prototype,"ariaControls",void 0);Ce(Xo,ft);Ce(Je,ut,Xo);var zc=(r,e)=>he`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusin="${(t,o)=>t.focusinHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
        @mousedown="${(t,o)=>t.mousedownHandler(o.event)}"
    >
        ${gc(t=>t.collapsible,he`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${pe("control")}
                >
                    ${jt(r,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Nt(r,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${pe("listbox")}
        >
            <slot
                ${dt({filter:oe.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;var Uc=(r,e)=>he`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${dt({property:"defaultSlottedNodes",filter:jc})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${jt(r,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${pe("control")}
            />
            ${Nt(r,e)}
        </div>
    </template>
`;var Ke="not-allowed";var qh=":host([hidden]){display:none}";function gt(r){return`${qh}:host{display:${r}}`}var Ie=es()?"focus-visible":"focus";function qc(r){return ca.getOrCreate(r).withPrefix("vscode")}function Wc(r){window.addEventListener("load",()=>{new MutationObserver(()=>{Gc(r)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Gc(r)})}function Gc(r){let e=getComputedStyle(document.body),t=document.querySelector("body");if(t){let o=t.getAttribute("data-vscode-theme-kind");for(let[i,s]of r){let n=e.getPropertyValue(i).toString();o==="vscode-high-contrast"?(n.length===0&&s.name.includes("background")&&(n="transparent"),s.name==="button-icon-hover-background"&&(n="transparent")):s.name==="contrast-active-border"&&(n="transparent"),s.setValueFor(t,n)}}}var Qc=new Map,Xc=!1;function b(r,e){let t=Wo.create(r);if(e){if(e.includes("--fake-vscode-token")){let o="id"+Math.random().toString(16).slice(2);e=`${e}-${o}`}Qc.set(e,t)}return Xc||(Wc(Qc),Xc=!0),t}var tw=b("background","--vscode-editor-background").withDefault("#1e1e1e"),q=b("border-width").withDefault(1),Yc=b("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),rw=b("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Cr=b("corner-radius").withDefault(0),z=b("design-unit").withDefault(4),bt=b("disabled-opacity").withDefault(.4),Z=b("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Ut=b("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),ow=b("font-weight","--vscode-font-weight").withDefault("400"),$e=b("foreground","--vscode-foreground").withDefault("#cccccc"),Kr=b("input-height").withDefault("26"),ds=b("input-min-width").withDefault("100px"),et=b("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),tt=b("type-ramp-base-line-height").withDefault("normal"),iw=b("type-ramp-minus1-font-size").withDefault("11px"),sw=b("type-ramp-minus1-line-height").withDefault("16px"),nw=b("type-ramp-minus2-font-size").withDefault("9px"),aw=b("type-ramp-minus2-line-height").withDefault("16px"),lw=b("type-ramp-plus1-font-size").withDefault("16px"),cw=b("type-ramp-plus1-line-height").withDefault("24px"),dw=b("scrollbarWidth").withDefault("10px"),uw=b("scrollbarHeight").withDefault("10px"),hw=b("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),pw=b("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),fw=b("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),mw=b("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),gw=b("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Zc=b("button-border","--vscode-button-border").withDefault("transparent"),pa=b("button-icon-background").withDefault("transparent"),Jc=b("button-icon-corner-radius").withDefault("5px"),Kc=b("button-icon-outline-offset").withDefault(0),fa=b("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),ed=b("button-icon-padding").withDefault("3px"),$r=b("button-primary-background","--vscode-button-background").withDefault("#0e639c"),ma=b("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),ga=b("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),us=b("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),td=b("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),rd=b("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),od=b("button-padding-horizontal").withDefault("11px"),id=b("button-padding-vertical").withDefault("4px"),hs=b("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),ba=b("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),sd=b("checkbox-corner-radius").withDefault(3),bw=b("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),qt=b("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),eo=b("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),vw=b("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),xw=b("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Yo=b("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Sr=b("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),yw=b("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),nd=b("dropdown-list-max-height").withDefault("200px"),ps=b("input-background","--vscode-input-background").withDefault("#3c3c3c"),ad=b("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),ww=b("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Cw=b("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),$w=b("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Sw=b("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),kw=b("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Ow=b("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Aw=b("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Ew=b("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Iw=b("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Rw=b("tag-corner-radius").withDefault("2px");var Gh=ye`
	${gt("inline-flex")} :host {
		outline: none;
		font-family: ${Ut};
		font-size: ${et};
		line-height: ${tt};
		color: ${ma};
		background: ${$r};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${id} ${od};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${q} * 1px) solid ${Zc};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${ga};
	}
	:host(:active) {
		background: ${$r};
	}
	.control:${Ie} {
		outline: calc(${q} * 1px) solid ${Z};
		outline-offset: calc(${q} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${bt};
		background: ${$r};
		cursor: ${Ke};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${z} * 4px);
		height: calc(${z} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Wh=ye`
	:host([appearance='primary']) {
		background: ${$r};
		color: ${ma};
	}
	:host([appearance='primary']:hover) {
		background: ${ga};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${$r};
	}
	:host([appearance='primary']) .control:${Ie} {
		outline: calc(${q} * 1px) solid ${Z};
		outline-offset: calc(${q} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${$r};
	}
`,Qh=ye`
	:host([appearance='secondary']) {
		background: ${us};
		color: ${td};
	}
	:host([appearance='secondary']:hover) {
		background: ${rd};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${us};
	}
	:host([appearance='secondary']) .control:${Ie} {
		outline: calc(${q} * 1px) solid ${Z};
		outline-offset: calc(${q} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${us};
	}
`,Xh=ye`
	:host([appearance='icon']) {
		background: ${pa};
		border-radius: ${Jc};
		color: ${$e};
	}
	:host([appearance='icon']:hover) {
		background: ${fa};
		outline: 1px dotted ${Yc};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${ed};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${fa};
	}
	:host([appearance='icon']) .control:${Ie} {
		outline: calc(${q} * 1px) solid ${Z};
		outline-offset: ${Kc};
	}
	:host([appearance='icon'][disabled]) {
		background: ${pa};
	}
`,ld=(r,e)=>ye`
	${Gh}
	${Wh}
	${Qh}
	${Xh}
`;var fs=class extends Ee{connectedCallback(){if(super.connectedCallback(),!this.appearance){let e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,o){e==="appearance"&&o==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=o),e==="disabled"&&(this.disabled=o!==null)}};h([v],fs.prototype,"appearance",void 0);var va=fs.compose({baseName:"button",template:Vc,styles:ld,shadowOptions:{delegatesFocus:!0}});var cd=(r,e)=>ye`
	${gt("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${z} * 1px) 0;
		user-select: none;
		font-size: ${et};
		line-height: ${tt};
	}
	.control {
		position: relative;
		width: calc(${z} * 4px + 2px);
		height: calc(${z} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${sd} * 1px);
		border: calc(${q} * 1px) solid ${ba};
		background: ${hs};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Ut};
		color: ${$e};
		padding-inline-start: calc(${z} * 2px + 2px);
		margin-inline-end: calc(${z} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${$e};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${$e};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${hs};
		border-color: ${ba};
	}
	:host(:enabled) .control:active {
		background: ${hs};
		border-color: ${Z};
	}
	:host(:${Ie}) .control {
		border: calc(${q} * 1px) solid ${Z};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Ke};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${bt};
	}
`;var xa=class extends xr{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}},ya=xa.compose({baseName:"checkbox",template:Bc,styles:cd,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`});var dd=(r,e)=>ye`
	${gt("inline-flex")} :host {
		background: ${Yo};
		box-sizing: border-box;
		color: ${$e};
		contain: contents;
		font-family: ${Ut};
		height: calc(${Kr} * 1px);
		position: relative;
		user-select: none;
		min-width: ${ds};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${q} * 1px) solid ${Sr};
		border-radius: calc(${Cr} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${et};
		line-height: ${tt};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Yo};
		border: calc(${q} * 1px) solid ${Z};
		border-radius: calc(${Cr} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${nd};
		padding: 0 0 calc(${z} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Ie}) .control {
		border-color: ${Z};
	}
	:host(:not([disabled]):hover) {
		background: ${Yo};
		border-color: ${Sr};
	}
	:host(:${Ie}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${qt};
		border: calc(${q} * 1px) solid ${Z};
		color: ${eo};
	}
	:host([disabled]) {
		cursor: ${Ke};
		opacity: ${bt};
	}
	:host([disabled]) .control {
		cursor: ${Ke};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Yo};
		color: ${$e};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Z};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Z};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Kr} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Kr} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${z} * 4px);
		min-width: calc(${z} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;var wa=class extends Je{},Ca=wa.compose({baseName:"dropdown",template:zc,styles:dd,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`});var ud=(r,e)=>ye`
	${gt("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Cr};
		border: calc(${q} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${$e};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${et};
		line-height: ${tt};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${z} / 2) * 1px)
			calc((${z} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Ie}) {
		border-color: ${Z};
		background: ${qt};
		color: ${$e};
	}
	:host([aria-selected='true']) {
		background: ${qt};
		border: calc(${q} * 1px) solid ${Z};
		color: ${eo};
	}
	:host(:active) {
		background: ${qt};
		color: ${eo};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${qt};
		border: calc(${q} * 1px) solid ${Z};
		color: ${eo};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${qt};
		color: ${$e};
	}
	:host([disabled]) {
		cursor: ${Ke};
		opacity: ${bt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;var $a=class extends je{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}},Sa=$a.compose({baseName:"option",template:Nc,styles:ud});var hd=(r,e)=>ye`
	${gt("inline-block")} :host {
		font-family: ${Ut};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${ad};
		background: ${ps};
		border-radius: calc(${Cr} * 1px);
		border: calc(${q} * 1px) solid ${Sr};
		height: calc(${Kr} * 1px);
		min-width: ${ds};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${z} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${z} * 2px + 1px);
		font-size: ${et};
		line-height: ${tt};
	}
	.control:hover,
	.control:${Ie},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${$e};
		cursor: pointer;
		font-size: ${et};
		line-height: ${tt};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${z} * 4px);
		height: calc(${z} * 4px);
	}
	.start {
		margin-inline-start: calc(${z} * 2px);
	}
	.end {
		margin-inline-end: calc(${z} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${ps};
		border-color: ${Sr};
	}
	:host(:active:not([disabled])) .root {
		background: ${ps};
		border-color: ${Z};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Z};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ke};
	}
	:host([disabled]) {
		opacity: ${bt};
	}
	:host([disabled]) .control {
		border-color: ${Sr};
	}
`;var ka=class extends fe{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}},Oa=ka.compose({baseName:"text-field",template:Uc,styles:hd,shadowOptions:{delegatesFocus:!0}});var Ot=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ot.trustedTypes===void 0&&(Ot.trustedTypes={createPolicy:(r,e)=>e});var pd={configurable:!1,enumerable:!1,writable:!1};Ot.FAST===void 0&&Reflect.defineProperty(Ot,"FAST",Object.assign({value:Object.create(null)},pd));var kr=Ot.FAST;if(kr.getById===void 0){let r=Object.create(null);Reflect.defineProperty(kr,"getById",Object.assign({value(e,t){let o=r[e];return o===void 0&&(o=t?r[e]=t():null),o}},pd))}var Gt=Object.freeze([]);function ms(){let r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let o=Reflect.getPrototypeOf(e);for(;t===void 0&&o!==null;)t=r.get(o),o=Reflect.getPrototypeOf(o);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}var Aa=Ot.FAST.getById(1,()=>{let r=[],e=[];function t(){if(e.length)throw e.shift()}function o(n){try{n.call()}catch(a){e.push(a),setTimeout(t,0)}}function i(){let a=0;for(;a<r.length;)if(o(r[a]),a++,a>1024){for(let l=0,c=r.length-a;l<c;l++)r[l]=r[l+a];r.length-=a,a=0}r.length=0}function s(n){r.length<1&&Ot.requestAnimationFrame(i),r.push(n)}return Object.freeze({enqueue:s,process:i})}),fd=Ot.trustedTypes.createPolicy("fast-html",{createHTML:r=>r}),Ea=fd,Zo=`fast-${Math.random().toString(36).substring(2,8)}`,Ia=`${Zo}{`,gs=`}${Zo}`,S=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(r){if(Ea!==fd)throw new Error("The HTML policy can only be set once.");Ea=r},createHTML(r){return Ea.createHTML(r)},isMarker(r){return r&&r.nodeType===8&&r.data.startsWith(Zo)},extractDirectiveIndexFromMarker(r){return parseInt(r.data.replace(`${Zo}:`,""))},createInterpolationPlaceholder(r){return`${Ia}${r}${gs}`},createCustomAttributePlaceholder(r,e){return`${r}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(r){return`<!--${Zo}:${r}-->`},queueUpdate:Aa.enqueue,processUpdates:Aa.process,nextUpdate(){return new Promise(Aa.enqueue)},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)},removeChildNodes(r){for(let e=r.firstChild;e!==null;e=r.firstChild)r.removeChild(e)},createTemplateWalker(r){return document.createTreeWalker(r,133,null,!1)}});var to=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);o!==-1&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(t===void 0){let i=this.sub1,s=this.sub2;i!==void 0&&i.handleChange(o,e),s!==void 0&&s.handleChange(o,e)}else for(let i=0,s=t.length;i<s;++i)t[i].handleChange(o,e)}},ro=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];o!==void 0&&o.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var o;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new to(this.source)),i.subscribe(e)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new to(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(e)}};var k=kr.getById(2,()=>{let r=/(:|&&|\|\||if)/,e=new WeakMap,t=S.queueUpdate,o,i=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=i(c):e.set(c,d=new ro(c))),d}let n=ms();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return o!==void 0&&o.watch(d,this.name),d[this.field]}setValue(d,u){let m=this.field,y=d[m];if(y!==u){d[m]=u;let w=d[this.callback];typeof w=="function"&&w.call(d,y,u),s(d).notify(this.name)}}}class l extends to{constructor(d,u,m=!1){super(d,u),this.binding=d,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();let m=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let y=this.binding(d,u);return o=m,y}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){let m=this.last,y=s(d),w=m===null?this.first:{};if(w.propertySource=d,w.propertyName=u,w.notifier=y,y.subscribe(this,u),m!==null){if(!this.needsRefresh){let $;o=void 0,$=m.propertySource[m.propertyName],o=this,d===$&&(this.needsRefresh=!0)}m.next=w}this.last=w}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{let u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:s,track(c,d){o!==void 0&&o.watch(c,d)},trackVolatile(){o!==void 0&&(o.needsRefresh=!0)},notify(c,d){s(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),n(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:n,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return r.test(c.toString())}})});function F(r,e){k.defineProperty(r,e)}function gd(r,e,t){return Object.assign({},t,{get:function(){return k.trackVolatile(),t.get.apply(this)}})}var md=kr.getById(3,()=>{let r=null;return{get(){return r},set(e){r=e}}}),Wt=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return md.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){md.set(e)}};k.defineProperty(Wt.prototype,"index");k.defineProperty(Wt.prototype,"length");var Qt=Object.seal(new Wt);var oo=class{constructor(){this.targetIndex=0}},io=class extends oo{constructor(){super(...arguments),this.createPlaceholder=S.createInterpolationPlaceholder}},so=class extends oo{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return S.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function Yh(r,e){this.source=r,this.context=e,this.bindingObserver===null&&(this.bindingObserver=k.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(r,e))}function Zh(r,e){this.source=r,this.context=e,this.target.addEventListener(this.targetName,this)}function Jh(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Kh(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let r=this.target.$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}function ep(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function tp(r){S.setAttribute(this.target,this.targetName,r)}function rp(r){S.setBooleanAttribute(this.target,this.targetName,r)}function op(r){if(r==null&&(r=""),r.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=r.create():this.target.$fastTemplate!==r&&(e.isComposed&&(e.remove(),e.unbind()),e=r.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=r)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=r}}function ip(r){this.target[this.targetName]=r}function sp(r){let e=this.classVersions||Object.create(null),t=this.target,o=this.version||0;if(r!=null&&r.length){let i=r.split(/\s+/);for(let s=0,n=i.length;s<n;++s){let a=i[s];a!==""&&(e[a]=o,t.classList.add(a))}}if(this.classVersions=e,this.version=o+1,o!==0){o-=1;for(let i in e)e[i]===o&&t.classList.remove(i)}}var Or=class extends io{constructor(e){super(),this.binding=e,this.bind=Yh,this.unbind=Jh,this.updateTarget=tp,this.isBindingVolatile=k.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=ip,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(o,i)=>S.createHTML(t(o,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=rp;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Zh,this.unbind=ep;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=sp);break}}targetAtContent(){this.updateTarget=op,this.unbind=Kh}createBehavior(e){return new Ra(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},Ra=class{constructor(e,t,o,i,s,n,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=s,this.updateTarget=n,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Wt.setEvent(e);let t=this.binding(this.source,this.context);Wt.setEvent(null),t!==!0&&e.preventDefault()}};var Fa=null,Jo=class{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Fa=this}static borrow(e){let t=Fa||new Jo;return t.directives=e,t.reset(),Fa=null,t}};function np(r){if(r.length===1)return r[0];let e,t=r.length,o=r.map(n=>typeof n=="string"?()=>n:(e=n.targetName||e,n.binding)),i=(n,a)=>{let l="";for(let c=0;c<t;++c)l+=o[c](n,a);return l},s=new Or(i);return s.targetName=e,s}var ap=gs.length;function vd(r,e){let t=e.split(Ia);if(t.length===1)return null;let o=[];for(let i=0,s=t.length;i<s;++i){let n=t[i],a=n.indexOf(gs),l;if(a===-1)l=n;else{let c=parseInt(n.substring(0,a));o.push(r.directives[c]),l=n.substring(a+ap)}l!==""&&o.push(l)}return o}function bd(r,e,t=!1){let o=e.attributes;for(let i=0,s=o.length;i<s;++i){let n=o[i],a=n.value,l=vd(r,a),c=null;l===null?t&&(c=new Or(()=>a),c.targetName=n.name):c=np(l),c!==null&&(e.removeAttributeNode(n),i--,s--,r.addFactory(c))}}function lp(r,e,t){let o=vd(r,e.textContent);if(o!==null){let i=e;for(let s=0,n=o.length;s<n;++s){let a=o[s],l=s===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",r.captureContentBinding(a)),i=l,r.targetIndex++,l!==e&&t.nextNode()}r.targetIndex--}}function xd(r,e){let t=r.content;document.adoptNode(t);let o=Jo.borrow(e);bd(o,r,!0);let i=o.behaviorFactories;o.reset();let s=S.createTemplateWalker(t),n;for(;n=s.nextNode();)switch(o.targetIndex++,n.nodeType){case 1:bd(o,n);break;case 3:lp(o,n,s);break;case 8:S.isMarker(n)&&o.addFactory(e[S.extractDirectiveIndexFromMarker(n)])}let a=0;(S.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let l=o.behaviorFactories;return o.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}var Ta=document.createRange(),bs=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let o=e.parentNode,i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,o.insertBefore(i,e),i=s;o.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);let s=this.behaviors,n=this.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}bind(e,t){let o=this.behaviors;if(this.source!==e)if(this.source!==null){let i=this.source;this.source=e,this.context=t;for(let s=0,n=o.length;s<n;++s){let a=o[s];a.unbind(i),a.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i)o[i].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Ta.setStartBefore(e[0].firstChild),Ta.setEndAfter(e[e.length-1].lastChild),Ta.deleteContents();for(let t=0,o=e.length;t<o;++t){let i=e[t],s=i.behaviors,n=i.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}}}};var vs=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c,d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=S.createHTML(d);let m=c.content.firstElementChild;m!==null&&m.tagName==="TEMPLATE"&&(c=m)}else c=d;let u=xd(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),s=S.createTemplateWalker(t),n=0,a=this.targetOffset,l=s.nextNode();for(let c=o.length;n<c;++n){let d=o[n],u=d.targetIndex;for(;l!==null;)if(a===u){i[n]=d.createBehavior(l);break}else l=s.nextNode(),a++}if(this.hasHostBehaviors){let c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++n)i[n]=c[d].createBehavior(e)}return new bs(t,i)}render(e,t,o){typeof t=="string"&&(t=document.getElementById(t)),o===void 0&&(o=t);let i=this.create(o);return i.bind(e,Qt),i.appendTo(t),i}},cp=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function At(r,...e){let t=[],o="";for(let i=0,s=r.length-1;i<s;++i){let n=r[i],a=e[i];if(o+=n,a instanceof vs){let l=a;a=()=>l}if(typeof a=="function"&&(a=new Or(a)),a instanceof io){let l=cp.exec(n);l!==null&&(a.targetName=l[2])}a instanceof oo?(o+=a.createPlaceholder(t.length),t.push(a)):o+=a}return o+=r[r.length-1],new vs(o,t)}var G=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};G.create=(()=>{if(S.supportsAdoptedStyleSheets){let r=new Map;return e=>new Va(e,r)}return r=>new Pa(r)})();function Da(r){return r.map(e=>e instanceof G?Da(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function yd(r){return r.map(e=>e instanceof G?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var wd=(r,e)=>{r.adoptedStyleSheets=[...r.adoptedStyleSheets,...e]},Cd=(r,e)=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(S.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),wd=(r,e)=>{r.adoptedStyleSheets.push(...e)},Cd=(r,e)=>{for(let t of e){let o=r.adoptedStyleSheets.indexOf(t);o!==-1&&r.adoptedStyleSheets.splice(o,1)}}}catch{}var Va=class extends G{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=yd(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=Da(e).map(o=>{if(o instanceof CSSStyleSheet)return o;let i=t.get(o);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(o),t.set(o,i)),i})}return this._styleSheets}addStylesTo(e){wd(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Cd(e,this.styleSheets),super.removeStylesFrom(e)}},dp=0;function up(){return`fast-style-class-${++dp}`}var Pa=class extends G{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=yd(e),this.styleSheets=Da(e),this.styleClass=up()}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){let s=document.createElement("style");s.innerHTML=t[i],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var Ko=Object.freeze({locate:ms()}),$d={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}},Sd={toView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e.toString()},fromView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e}},Ar=class{constructor(e,t,o=t.toLowerCase(),i="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&s===void 0&&(this.converter=$d)}setValue(e,t){let o=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return k.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||t==="fromView"||S.queueUpdate(()=>{o.add(e);let i=e[this.fieldName];switch(t){case"reflect":let s=this.converter;S.setAttribute(e,this.attribute,s!==void 0?s.toView(i):i);break;case"boolean":S.setBooleanAttribute(e,this.attribute,i);break}o.delete(e)})}static collect(e,...t){let o=[];t.push(Ko.locate(e));for(let i=0,s=t.length;i<s;++i){let n=t[i];if(n!==void 0)for(let a=0,l=n.length;a<l;++a){let c=n[a];typeof c=="string"?o.push(new Ar(e,c)):o.push(new Ar(e,c.property,c.attribute,c.mode,c.converter))}}return o}};function E(r,e){let t;function o(i,s){arguments.length>1&&(t.property=s),Ko.locate(i.constructor).push(t)}if(arguments.length>1){t={},o(r,e);return}return t=r===void 0?{}:r,o}var kd={mode:"open"},Od={},_a=kr.getById(4,()=>{let r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)}})}),vt=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=Ar.collect(e,t.attributes),i=new Array(o.length),s={},n={};for(let a=0,l=o.length;a<l;++a){let c=o[a];i[a]=c.attribute,s[c.name]=c,n[c.attribute]=c}this.attributes=o,this.observedAttributes=i,this.propertyLookup=s,this.attributeLookup=n,this.shadowOptions=t.shadowOptions===void 0?kd:t.shadowOptions===null?void 0:Object.assign(Object.assign({},kd),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Od:Object.assign(Object.assign({},Od),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?G.create(t.styles):t.styles instanceof G?t.styles:G.create([t.styles])}get isDefined(){return!!_a.getByType(this.type)}define(e=customElements){let t=this.type;if(_a.register(this)){let o=this.attributes,i=t.prototype;for(let s=0,n=o.length;s<n;++s)k.defineProperty(i,o[s]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};vt.forType=_a.getByType;var Ad=new WeakMap,hp={bubbles:!0,composed:!0,cancelable:!0};function La(r){return r.shadowRoot||Ad.get(r)||null}var no=class extends ro{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(o!==void 0){let s=e.attachShadow(o);o.mode==="closed"&&Ad.set(e,s)}let i=k.getAccessors(e);if(i.length>0){let s=this.boundObservables=Object.create(null);for(let n=0,a=i.length;n<a;++n){let l=i[n].name,c=e[l];c!==void 0&&(delete e[l],s[l]=c)}}}get isConnected(){return k.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,k.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=La(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),o!==null&&this.addBehaviors(o)}}removeStyles(e){let t=La(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),o!==null&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let s=0;s<o;++s){let n=e[s];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),i.push(n))}if(this._isConnected){let s=this.element;for(let n=0;n<i.length;++n)i[n].bind(s,Qt)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(o===null)return;let i=e.length,s=[];for(let n=0;n<i;++n){let a=e[n];if(o.has(a)){let l=o.get(a)-1;l===0||t?o.delete(a)&&s.push(a):o.set(a,l)}}if(this._isConnected){let n=this.element;for(let a=0;a<s.length;++a)s[a].unbind(n)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Qt);let t=this.behaviors;if(t!==null)for(let[o]of t)o.bind(e,Qt);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let o=this.element;for(let[i]of t)i.unbind(o)}}onAttributeChangedCallback(e,t,o){let i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},hp),o))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let i=Object.keys(t);for(let s=0,n=i.length;s<n;++s){let a=i[s];e[a]=t[a]}this.boundObservables=null}let o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=La(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||S.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let o=vt.forType(e.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new no(e,o)}};function Ed(r){return class extends r{constructor(){super(),no.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}var Xt=Object.assign(Ed(HTMLElement),{from(r){return Ed(r)},define(r,e){return new vt(r,e).define().type}});var Yt=class{createCSS(){return""}createBehavior(){}};function Id(r,e){let t=[],o="",i=[];for(let s=0,n=r.length-1;s<n;++s){o+=r[s];let a=e[s];if(a instanceof Yt){let l=a.createBehavior();a=a.createCSS(),l&&i.push(l)}a instanceof G||a instanceof CSSStyleSheet?(o.trim()!==""&&(t.push(o),o=""),t.push(a)):o+=a}return o+=r[r.length-1],o.trim()!==""&&t.push(o),{styles:t,behaviors:i}}function W(r,...e){let{styles:t,behaviors:o}=Id(r,e),i=G.create(t);return o.length&&i.withBehaviors(...o),i}var Ma=class extends Yt{constructor(e,t){super(),this.behaviors=t,this.css="";let o=e.reduce((i,s)=>(typeof s=="string"?this.css+=s:i.push(s),i),[]);o.length&&(this.styles=G.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}};function Ba(r,...e){let{styles:t,behaviors:o}=Id(r,e);return new Ma(t,o)}var Ha=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function ze(r){return new so("fast-ref",Ha,r)}var xs=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=k.getAccessors(e).some(o=>o.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Gt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var Na=class extends xs{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function ys(r){return typeof r=="string"&&(r={property:r}),new so("fast-slotted",Na,r)}var Zt=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},ws=(r,e)=>At`
    <span
        part="end"
        ${ze("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${ze("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Cs=(r,e)=>At`
    <span
        part="start"
        ${ze("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${ze("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,W$=At`
    <span part="end" ${ze("endContainer")}>
        <slot
            name="end"
            ${ze("end")}
            @slotchange="${r=>r.handleEndContentChange()}"
        ></slot>
    </span>
`,Q$=At`
    <span part="start" ${ze("startContainer")}>
        <slot
            name="start"
            ${ze("start")}
            @slotchange="${r=>r.handleStartContentChange()}"
        ></slot>
    </span>
`;function g(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}var ja=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let o=ja.get(t);o===void 0&&ja.set(t,o=new Map),o.set(r,e)},Reflect.getOwnMetadata=function(r,e){let t=ja.get(e);if(t!==void 0)return t.get(r)});var Ga=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Hd(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:i}=this;return this.container=this.key=void 0,o.registerResolver(i,new Se(i,e,t))}};function ei(r){let e=r.slice(),t=Object.keys(r),o=t.length,i;for(let s=0;s<o;++s)i=t[s],Nd(i)||(e[i]=r[i]);return e}var pp=Object.freeze({none(r){throw Error(`${r.toString()} not registered, did you forget to add @singleton()?`)},singleton(r){return new Se(r,1,r)},transient(r){return new Se(r,2,r)}}),za=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:pp.singleton})}),Rd=new Map;function Fd(r){return e=>Reflect.getOwnMetadata(r,e)}var Td=null,L=Object.freeze({createContainer(r){return new Er(null,Object.assign({},za.default,r))},findResponsibleContainer(r){let e=r.$$container$$;return e&&e.responsibleForOwnerRequests?e:L.findParentContainer(r)},findParentContainer(r){let e=new CustomEvent(Bd,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return r.dispatchEvent(e),e.detail.container||L.getOrCreateDOMContainer()},getOrCreateDOMContainer(r,e){return r?r.$$container$$||new Er(r,Object.assign({},za.default,e,{parentLocator:L.findParentContainer})):Td||(Td=new Er(null,Object.assign({},za.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Fd("design:paramtypes"),getAnnotationParamtypes:Fd("di:paramtypes"),getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamtypes(r);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],r),e},getDependencies(r){let e=Rd.get(r);if(e===void 0){let t=r.inject;if(t===void 0){let o=L.getDesignParamtypes(r),i=L.getAnnotationParamtypes(r);if(o===void 0)if(i===void 0){let s=Object.getPrototypeOf(r);typeof s=="function"&&s!==Function.prototype?e=ei(L.getDependencies(s)):e=[]}else e=ei(i);else if(i===void 0)e=ei(o);else{e=ei(o);let s=i.length,n;for(let c=0;c<s;++c)n=i[c],n!==void 0&&(e[c]=n);let a=Object.keys(i);s=a.length;let l;for(let c=0;c<s;++c)l=a[c],Nd(l)||(e[l]=i[l])}}else e=ei(t);Rd.set(r,e)}return e},defineProperty(r,e,t,o=!1){let i=`$di_${e}`;Reflect.defineProperty(r,e,{get:function(){let s=this[i];if(s===void 0&&(s=(this instanceof HTMLElement?L.findResponsibleContainer(this):L.getOrCreateDOMContainer()).get(t),this[i]=s,o&&this instanceof Xt)){let a=this.$fastController,l=()=>{let d=L.findResponsibleContainer(this).get(t),u=this[i];d!==u&&(this[i]=s,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return s}})},createInterface(r,e){let t=typeof r=="function"?r:e,o=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||_d,i=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,s=function(n,a,l){if(n==null||new.target!==void 0)throw new Error(`No registration for interface: '${s.friendlyName}'`);if(a)L.defineProperty(n,a,s,i);else{let c=L.getOrCreateAnnotationParamTypes(n);c[l]=s}};return s.$isInterface=!0,s.friendlyName=o??"(anonymous)",t!=null&&(s.register=function(n,a){return t(new Ga(n,a??s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject(...r){return function(e,t,o){if(typeof o=="number"){let i=L.getOrCreateAnnotationParamTypes(e),s=r[0];s!==void 0&&(i[o]=s)}else if(t)L.defineProperty(e,t,r[0]);else{let i=o?L.getOrCreateAnnotationParamTypes(o.value):L.getOrCreateAnnotationParamTypes(e),s;for(let n=0;n<r.length;++n)s=r[n],s!==void 0&&(i[n]=s)}}},transient(r){return r.register=function(t){return Ir.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=mp){return r.register=function(o){return Ir.singleton(r,r).register(o)},r.registerInRequestor=e.scoped,r}}),fp=L.createInterface("Container");function Os(r){return function(e){let t=function(o,i,s){L.inject(t)(o,i,s)};return t.$isResolver=!0,t.resolve=function(o,i){return r(e,o,i)},t}}var J$=L.inject;var mp={scoped:!1};function gp(r){return function(e,t){t=!!t;let o=function(i,s,n){L.inject(o)(i,s,n)};return o.$isResolver=!0,o.resolve=function(i,s){return r(e,i,s,t)},o}}var K$=gp((r,e,t,o)=>t.getAll(r,o)),eS=Os((r,e,t)=>()=>t.get(r)),tS=Os((r,e,t)=>{if(t.has(r,!0))return t.get(r)});function Qa(r,e,t){L.inject(Qa)(r,e,t)}Qa.$isResolver=!0;Qa.resolve=()=>{};var rS=Os((r,e,t)=>{let o=Md(r,e),i=new Se(r,0,o);return t.registerResolver(r,i),o}),oS=Os((r,e,t)=>Md(r,e));function Md(r,e){return e.getFactory(r).construct(e)}var Se=class{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let o=e.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(o=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||o===void 0?void 0:o.call(t,e))!==null&&i!==void 0?i:null;default:return null}}};function Vd(r){return this.get(r)}function bp(r,e){return e(r)}var Wa=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return t===void 0?o=new this.Type(...this.dependencies.map(Vd,e)):o=new this.Type(...this.dependencies.map(Vd,e),...t),this.transformers==null?o:this.transformers.reduce(bp,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},vp={$isResolver:!0,resolve(r,e){return e}};function ks(r){return typeof r.register=="function"}function xp(r){return ks(r)&&typeof r.registerInRequestor=="boolean"}function Pd(r){return xp(r)&&r.registerInRequestor}function yp(r){return r.prototype!==void 0}var wp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Bd="__DI_LOCATE_PARENT__",Ua=new Map,Er=class{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(fp,vp),e instanceof Node&&e.addEventListener(Bd,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,o,i,s,n,a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!Ld(t))if(ks(t))t.register(this,a);else if(yp(t))Ir.singleton(t,t).register(this);else for(o=Object.keys(t),s=0,n=o.length;s<n;++s)i=t[o[s]],Ld(i)&&(ks(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(e,t){$s(e);let o=this.resolvers,i=o.get(e);return i==null?o.set(e,t):i instanceof Se&&i.strategy===4?i.state.push(t):o.set(e,new Se(e,4,[i,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(o==null)return!1;if(o.getFactory){let i=o.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if($s(e),e.resolve!==void 0)return e;let o=this,i;for(;o!=null;)if(i=o.resolvers.get(e),i==null){if(o.parent==null){let s=Pd(e)?this:o;return t?this.jitRegister(e,s):null}o=o.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if($s(e),e.$isResolver)return e.resolve(this,this);let t=this,o;for(;t!=null;)if(o=t.resolvers.get(e),o==null){if(t.parent==null){let i=Pd(e)?this:t;return o=this.jitRegister(e,i),o.resolve(t,this)}t=t.parent}else return o.resolve(t,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){$s(e);let o=this,i=o,s;if(t){let n=Gt;for(;i!=null;)s=i.resolvers.get(e),s!=null&&(n=n.concat(Dd(s,i,o))),i=i.parent;return n}else for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i=i.parent,i==null)return Gt}else return Dd(s,i,o);return Gt}getFactory(e){let t=Ua.get(e);if(t===void 0){if(Cp(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ua.set(e,t=new Wa(e,L.getDependencies(e)))}return t}registerFactory(e,t){Ua.set(e,t)}createChild(e){return new Er(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(wp.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(ks(e)){let o=e.register(t);if(!(o instanceof Object)||o.resolve==null){let i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}},qa=new WeakMap;function Hd(r){return function(e,t,o){if(qa.has(o))return qa.get(o);let i=r(e,t,o);return qa.set(o,i),i}}var Ir=Object.freeze({instance(r,e){return new Se(r,0,e)},singleton(r,e){return new Se(r,1,e)},transient(r,e){return new Se(r,2,e)},callback(r,e){return new Se(r,3,e)},cachedCallback(r,e){return new Se(r,3,Hd(e))},aliasTo(r,e){return new Se(e,5,r)}});function $s(r){if(r==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Dd(r,e,t){if(r instanceof Se&&r.strategy===4){let o=r.state,i=o.length,s=new Array(i);for(;i--;)s[i]=o[i].resolve(e,t);return s}return[r.resolve(e,t)]}var _d="(anonymous)";function Ld(r){return typeof r=="object"&&r!==null||typeof r=="function"}var Cp=function(){let r=new WeakMap,e=!1,t="",o=0;return function(i){return e=r.get(i),e===void 0&&(t=i.toString(),o=t.length,e=o>=29&&o<=100&&t.charCodeAt(o-1)===125&&t.charCodeAt(o-2)<=32&&t.charCodeAt(o-3)===93&&t.charCodeAt(o-4)===101&&t.charCodeAt(o-5)===100&&t.charCodeAt(o-6)===111&&t.charCodeAt(o-7)===99&&t.charCodeAt(o-8)===32&&t.charCodeAt(o-9)===101&&t.charCodeAt(o-10)===118&&t.charCodeAt(o-11)===105&&t.charCodeAt(o-12)===116&&t.charCodeAt(o-13)===97&&t.charCodeAt(o-14)===110&&t.charCodeAt(o-15)===88,r.set(i,e)),e}}(),Ss={};function Nd(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{let e=Ss[r];if(e!==void 0)return e;let t=r.length;if(t===0)return Ss[r]=!1;let o=0;for(let i=0;i<t;++i)if(o=r.charCodeAt(i),i===0&&o===48&&t>1||o<48||o>57)return Ss[r]=!1;return Ss[r]=!0}default:return!1}}function jd(r){return`${r.toLowerCase()}:presentation`}var As=new Map,Is=Object.freeze({define(r,e,t){let o=jd(r);As.get(o)===void 0?As.set(o,e):As.set(o,!1),t.register(Ir.instance(o,e))},forTag(r,e){let t=jd(r),o=As.get(t);return o===!1?L.findResponsibleContainer(e).get(t):o||null}}),Es=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?G.create(t):t instanceof G?t:G.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var Te=class extends Xt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Is.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Xa(this===Te?class extends Te{}:this,e,t)}};g([F],Te.prototype,"template",void 0);g([F],Te.prototype,"styles",void 0);function ti(r,e,t){return typeof r=="function"?r(e,t):r}var Xa=class{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,i=this.overrideDefinition,n=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let l=new Es(ti(o.template,a,o),ti(o.styles,a,o));a.definePresentation(l);let c=ti(o.shadowOptions,a,o);a.shadowRootMode&&(c?i.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:ti(o.elementOptions,a,o),shadowOptions:c,attributes:ti(o.attributes,a,o)})}})}};function Ue(r,...e){let t=Ko.locate(r);e.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(r.prototype,s,Object.getOwnPropertyDescriptor(o.prototype,s))}),Ko.locate(o).forEach(s=>t.push(s))})}var B=class{};g([E({attribute:"aria-atomic"})],B.prototype,"ariaAtomic",void 0);g([E({attribute:"aria-busy"})],B.prototype,"ariaBusy",void 0);g([E({attribute:"aria-controls"})],B.prototype,"ariaControls",void 0);g([E({attribute:"aria-current"})],B.prototype,"ariaCurrent",void 0);g([E({attribute:"aria-describedby"})],B.prototype,"ariaDescribedby",void 0);g([E({attribute:"aria-details"})],B.prototype,"ariaDetails",void 0);g([E({attribute:"aria-disabled"})],B.prototype,"ariaDisabled",void 0);g([E({attribute:"aria-errormessage"})],B.prototype,"ariaErrormessage",void 0);g([E({attribute:"aria-flowto"})],B.prototype,"ariaFlowto",void 0);g([E({attribute:"aria-haspopup"})],B.prototype,"ariaHaspopup",void 0);g([E({attribute:"aria-hidden"})],B.prototype,"ariaHidden",void 0);g([E({attribute:"aria-invalid"})],B.prototype,"ariaInvalid",void 0);g([E({attribute:"aria-keyshortcuts"})],B.prototype,"ariaKeyshortcuts",void 0);g([E({attribute:"aria-label"})],B.prototype,"ariaLabel",void 0);g([E({attribute:"aria-labelledby"})],B.prototype,"ariaLabelledby",void 0);g([E({attribute:"aria-live"})],B.prototype,"ariaLive",void 0);g([E({attribute:"aria-owns"})],B.prototype,"ariaOwns",void 0);g([E({attribute:"aria-relevant"})],B.prototype,"ariaRelevant",void 0);g([E({attribute:"aria-roledescription"})],B.prototype,"ariaRoledescription",void 0);var zd="form-associated-proxy",Ud="ElementInternals",qd=Ud in window&&"setFormValue"in window[Ud].prototype,Gd=new WeakMap;function Rs(r){let e=class extends r{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return qd}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?o.concat(Array.from(t)):o;return Object.freeze(i)}else return Gt}valueChanged(t,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),S.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),S.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!qd)return null;let t=Gd.get(this);return t||(t=this.attachInternals(),Gd.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,o,i){this.elementInternals?this.elementInternals.setValidity(t,o,i):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",zd),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",zd)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,o){this.elementInternals&&this.elementInternals.setFormValue(t,o||t)}_keypressHandler(t){switch(t.key){case Le:if(this.form instanceof HTMLFormElement){let o=this.form.querySelector("[type=submit]");o?.click()}break}}stopPropagation(t){t.stopPropagation()}};return E({mode:"boolean"})(e.prototype,"disabled"),E({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),E({attribute:"current-value"})(e.prototype,"currentValue"),E(e.prototype,"name"),E({mode:"boolean"})(e.prototype,"required"),F(e.prototype,"value"),e}function Ya(r){return Ki(r)&&(r.getAttribute("role")==="option"||r instanceof HTMLOptionElement)}var me=class extends Te{constructor(e,t,o,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),k.notify(this,"value")}get value(){var e;return k.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};g([F],me.prototype,"checked",void 0);g([F],me.prototype,"content",void 0);g([F],me.prototype,"defaultSelected",void 0);g([E({mode:"boolean"})],me.prototype,"disabled",void 0);g([E({attribute:"selected",mode:"boolean"})],me.prototype,"selectedAttribute",void 0);g([F],me.prototype,"selected",void 0);g([E({attribute:"value",mode:"fromView"})],me.prototype,"initialValue",void 0);var Jt=class{};g([F],Jt.prototype,"ariaChecked",void 0);g([F],Jt.prototype,"ariaPosInSet",void 0);g([F],Jt.prototype,"ariaSelected",void 0);g([F],Jt.prototype,"ariaSetSize",void 0);Ue(Jt,B);Ue(me,Zt,Jt);var Q=class extends Te{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return k.track(this,"options"),this._options}set options(e){this._options=e,k.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,i=e+o,s=null;switch(o){case-1:{s=this.options.reduceRight((n,a,l)=>!n&&!a.disabled&&l<i?a:n,s);break}case 1:{s=this.options.reduce((n,a,l)=>!n&&!a.disabled&&l>i?a:n,s);break}}return this.options.indexOf(s)}handleChange(e,t){switch(t){case"selected":{Q.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Q.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case Be:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case De:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case _e:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case He:{e.preventDefault(),this.selectLastOption();break}case Ne:return this.focusAndScrollOptionIntoView(),!0;case Le:case Me:return!0;case Ae:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((o=this.options[this.selectedIndex])===null||o===void 0)&&o.disabled&&typeof e=="number"){let i=this.getSelectableIndex(e,t),s=i>-1?i:e;this.selectedIndex=s,t===s&&this.selectedIndexChanged(t,s);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let i=t.filter(Q.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(s=>{let n=k.getNotifier(s);n.unsubscribe(this,"selected"),s.selected=i.includes(s),n.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>!o.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Ji(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>o.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,o;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,s)=>(Ya(s)&&i.push(s),i),[]);let o=`${this.options.length}`;this.options.forEach((i,s)=>{i.id||(i.id=pt("option-")),i.ariaPosInSet=`${s+1}`,i.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let o=this.getTypeaheadMatches();if(o.length){let i=this.options.indexOf(o[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}};Q.slottedOptionFilter=r=>Ya(r)&&!r.hidden;Q.TYPE_AHEAD_TIMEOUT_MS=1e3;g([E({mode:"boolean"})],Q.prototype,"disabled",void 0);g([F],Q.prototype,"selectedIndex",void 0);g([F],Q.prototype,"selectedOptions",void 0);g([F],Q.prototype,"slottedOptions",void 0);g([F],Q.prototype,"typeaheadBuffer",void 0);var qe=class{};g([F],qe.prototype,"ariaActiveDescendant",void 0);g([F],qe.prototype,"ariaDisabled",void 0);g([F],qe.prototype,"ariaExpanded",void 0);g([F],qe.prototype,"ariaMultiSelectable",void 0);Ue(qe,B);Ue(Q,qe);var Kt={above:"above",below:"below"};var Za=class extends Q{},Fs=class extends Rs(Za){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Rr={inline:"inline",list:"list",both:"both",none:"none"};var Ge=class extends Fs{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=pt("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Rr.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Rr.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Rr.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),S.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return k.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,k.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return k.track(this,"value"),this._value}set value(e){var t,o,i;let s=`${this._value}`;if(this.$fastController.isConnected&&this.options){let n=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(t=this.options[this.selectedIndex])===null||t===void 0?void 0:t.text,l=(o=this.options[n])===null||o===void 0?void 0:o.text;this.selectedIndex=a!==l?n:this.selectedIndex,e=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||e}s!==e&&(this._value=e,super.valueChanged(s,e),k.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Rr.none)&&(this.filter="");let e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;let t=e.relatedTarget;if(this.isSameNode(t)){this.focus();return}(!this.options||!this.options.includes(t))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(t=>t.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){let t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(t=Tc(-1,this.options.length-1,t),t!==this.selectedIndex){this.selectedIndex=t;return}super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let e=this.options.findIndex(t=>t.getAttribute("selected")!==null||t.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;let t=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Kt.above:Kt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Kt.above?~~e.top:~~o}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=t.includes(o)})}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=((t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){let e=this.control.value.length;this.control.setSelectionRange(e,e)}};g([E({attribute:"autocomplete",mode:"fromView"})],Ge.prototype,"autocomplete",void 0);g([F],Ge.prototype,"maxHeight",void 0);g([E({attribute:"open",mode:"boolean"})],Ge.prototype,"open",void 0);g([E],Ge.prototype,"placeholder",void 0);g([E({attribute:"position"})],Ge.prototype,"positionAttribute",void 0);g([F],Ge.prototype,"position",void 0);var ao=class{};g([F],ao.prototype,"ariaAutoComplete",void 0);g([F],ao.prototype,"ariaControls",void 0);Ue(ao,qe);Ue(Ge,Zt,ao);var Wd=(r,e)=>At`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
    >
        <div class="control" part="control">
            ${Cs(r,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,o)=>t.inputHandler(o.event)}"
                    @keyup="${(t,o)=>t.keyupHandler(o.event)}"
                    ${ze("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${ws(r,e)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${ze("listbox")}
        >
            <slot
                ${ys({filter:Q.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function ri(r){let e=r.parentElement;if(e)return e;{let t=r.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Qd(r,e){let t=e;for(;t!==null;){if(t===r)return!0;t=ri(t)}return!1}var xt=document.createElement("div");function $p(r){return r instanceof Xt}var oi=class{setProperty(e,t){S.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){S.queueUpdate(()=>this.target.removeProperty(e))}},Ka=class extends oi{constructor(e){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(G.create([t]))}},el=class extends oi{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},tl=class extends oi{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},Ts=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),k.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),S.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),S.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let i=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[i].style}else this.target=null}};g([F],Ts.prototype,"target",void 0);var rl=class{constructor(e){this.target=e.style}setProperty(e,t){S.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){S.queueUpdate(()=>this.target.removeProperty(e))}},J=class{setProperty(e,t){J.properties[e]=t;for(let o of J.roots.values())Fr.getOrCreate(J.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete J.properties[e];for(let t of J.roots.values())Fr.getOrCreate(J.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=J;if(!t.has(e)){t.add(e);let o=Fr.getOrCreate(this.normalizeRoot(e));for(let i in J.properties)o.setProperty(i,J.properties[i])}}static unregisterRoot(e){let{roots:t}=J;if(t.has(e)){t.delete(e);let o=Fr.getOrCreate(J.normalizeRoot(e));for(let i in J.properties)o.removeProperty(i)}}static normalizeRoot(e){return e===xt?document:e}};J.roots=new Set;J.properties={};var Ja=new WeakMap,Sp=S.supportsAdoptedStyleSheets?Ka:Ts,Fr=Object.freeze({getOrCreate(r){if(Ja.has(r))return Ja.get(r);let e;return r===xt?e=new J:r instanceof Document?e=S.supportsAdoptedStyleSheets?new el:new tl:$p(r)?e=new Sp(r):e=new rl(r),Ja.set(r,e),e}});var le=class extends Yt{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=le.uniqueId(),le.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new le({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return le.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=U.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof le&&(t=this.alias(t)),U.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),U.existsFor(e)&&U.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(xt,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!U.existsFor(t)&&U.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(o=>o.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};le.uniqueId=(()=>{let r=0;return()=>(r++,r.toString(16))})();le.tokensById=new Map;var ol=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){Fr.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(U.getOrCreate(t).get(e)))}remove(e,t){Fr.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},il=class{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=k.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Qt))}},sl=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),k.getNotifier(this).notify(e.id))}get(e){return k.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}},ii=new WeakMap,si=new WeakMap,U=class{constructor(e){this.target=e,this.store=new sl,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,o)=>{let i=le.getTokenById(o);if(i&&(i.notify(this.target),le.isCSSDesignToken(i))){let s=this.parent,n=this.isReflecting(i);if(s){let a=s.get(i),l=t.get(i);a!==l&&!n?this.reflectToCSS(i):a===l&&n&&this.stopReflectToCSS(i)}else n||this.reflectToCSS(i)}}},ii.set(e,this),k.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Xt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return ii.get(e)||new U(e)}static existsFor(e){return ii.has(e)}static findParent(e){if(xt!==e.target){let t=ri(e.target);for(;t!==null;){if(ii.has(t))return ii.get(t);t=ri(t)}return U.getOrCreate(xt)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==xt?U.getOrCreate(xt):null}while(o!==null);return null}get parent(){return si.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let o=this.getRaw(e);if(o!==void 0)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=U.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){le.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),le.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=U.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&si.get(this).removeChild(this)}appendChild(e){e.parent&&si.get(e).removeChild(e);let t=this.children.filter(o=>e.contains(o));si.set(e,this),this.children.push(e),t.forEach(o=>e.appendChild(o)),k.getNotifier(this.store).subscribe(e);for(let[o,i]of this.store.all())e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):i)}removeChild(e){let t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),k.getNotifier(this.store).unsubscribe(e),e.parent===this?si.delete(e):!1}contains(e){return Qd(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),U.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),U.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=le.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);le.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new il(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};U.cssCustomPropertyReflector=new ol;g([F],U.prototype,"children",void 0);function kp(r){return le.from(r)}var Tr=Object.freeze({create:kp,notifyConnection(r){return!r.isConnected||!U.existsFor(r)?!1:(U.getOrCreate(r).bind(),!0)},notifyDisconnection(r){return r.isConnected||!U.existsFor(r)?!1:(U.getOrCreate(r).unbind(),!0)},registerRoot(r=xt){J.registerRoot(r)},unregisterRoot(r=xt){J.unregisterRoot(r)}});var nl=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),al=new Map,Vs=new Map,lo=null,ni=L.createInterface(r=>r.cachedCallback(e=>(lo===null&&(lo=new Ps(null,e)),lo))),cl=Object.freeze({tagFor(r){return Vs.get(r)},responsibleFor(r){let e=r.$$designSystem$$;return e||L.findResponsibleContainer(r).get(ni)},getOrCreate(r){if(!r)return lo===null&&(lo=L.getOrCreateDOMContainer().get(ni)),lo;let e=r.$$designSystem$$;if(e)return e;let t=L.getOrCreateDOMContainer(r);if(t.has(ni,!1))return t.get(ni);{let o=new Ps(r,t);return t.register(Ir.instance(ni,o)),o}}});function Op(r,e,t){return typeof r=="string"?{name:r,type:e,callback:t}:r}var Ps=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>nl.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],i=this.disambiguate,s=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(a,l,c){let d=Op(a,l,c),{name:u,callback:m,baseClass:y}=d,{type:w}=d,$=u,ee=al.get($),Ze=!0;for(;ee;){let Ve=i($,w,ee);switch(Ve){case nl.ignoreDuplicate:return;case nl.definitionCallbackOnly:Ze=!1,ee=void 0;break;default:$=Ve,ee=al.get($);break}}Ze&&((Vs.has(w)||w===Te)&&(w=class extends w{}),al.set($,w),Vs.set(w,$),y&&Vs.set(y,$)),o.push(new ll(t,$,w,s,m,Ze))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Tr.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(let a of o)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},ll=class{constructor(e,t,o,i,s,n){this.container=e,this.name=t,this.type=o,this.shadowRootMode=i,this.callback=s,this.willDefine=n,this.definition=null}definePresentation(e){Is.define(this.name,e,this.container)}defineElement(e){this.definition=new vt(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return cl.tagFor(e)}};var Xd=(r,e)=>At`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Cs(r,e)}
        <span class="content" part="content">
            <slot ${ys("content")}></slot>
        </span>
        ${ws(r,e)}
    </template>
`;var Et=class extends Q{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,i;this.ariaActiveDescendant=(i=(o=this.options[t])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,o)=>{t.checked=ht(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=ht(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=ht(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,o)=>{t.checked=ht(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case Be:{this.checkFirstOption(o);return}case De:{this.checkNextOption(o);return}case _e:{this.checkPreviousOption(o);return}case He:{this.checkLastOption(o);return}case Ne:return this.focusAndScrollOptionIntoView(),!0;case Me:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Ae:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,(o=this.options)===null||o===void 0||o.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let i=Math.max(0,parseInt((o=t?.toFixed())!==null&&o!==void 0?o:"",10));i!==t&&S.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(o=>!o.disabled),t=!e.every(o=>o.selected);e.forEach(o=>o.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let o=this.getTypeaheadMatches(),i=this.options.indexOf(o[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};g([F],Et.prototype,"activeIndex",void 0);g([E({mode:"boolean"})],Et.prototype,"multiple",void 0);g([E({converter:Sd})],Et.prototype,"size",void 0);var dl=class extends Et{},Ds=class extends Rs(dl){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var rt=class extends Ds{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=pt("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,S.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return k.track(this,"value"),this._value}set value(e){var t,o,i,s,n,a,l;let c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let d=this._options.findIndex(y=>y.value===e),u=(i=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,m=(n=(s=this._options[d])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null;(d===-1||u!==m)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),k.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Kt.above:Kt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Kt.above?~~e.top:~~o}get displayValue(){var e,t;return k.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(o=>{k.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(o=>{k.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),(o=this.options)===null||o===void 0||o.forEach((i,s)=>{var n;let a=(n=this.proxy)===null||n===void 0?void 0:n.options.item(s);a&&(a.selected=i.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Q.slottedOptionFilter),o=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case Ae:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Be:case He:{e.preventDefault();break}case Le:{e.preventDefault(),this.open=!this.open;break}case Me:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Ne:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===De||t===_e)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&k.notify(this,"displayValue")}};g([E({attribute:"open",mode:"boolean"})],rt.prototype,"open",void 0);g([gd],rt.prototype,"collapsible",null);g([F],rt.prototype,"control",void 0);g([E({attribute:"position"})],rt.prototype,"positionAttribute",void 0);g([F],rt.prototype,"position",void 0);g([F],rt.prototype,"maxHeight",void 0);var ai=class{};g([F],ai.prototype,"ariaControls",void 0);Ue(ai,qe);Ue(rt,Zt,ai);var ul=class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){let{query:t}=this,o=this.constructListener(e);o.bind(t)(),t.addListener(o),this.listenerCache.set(e,o)}unbind(e){let t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}},Vr=class extends ul{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new Vr(e,t)}constructListener(e){let t=!1,o=this.styles;return function(){let{matches:s}=this;s&&!t?(e.$fastController.addStyles(o),t=s):!s&&t&&(e.$fastController.removeStyles(o),t=s)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}},co=Vr.with(window.matchMedia("(forced-colors)")),zk=Vr.with(window.matchMedia("(prefers-color-scheme: dark)")),Uk=Vr.with(window.matchMedia("(prefers-color-scheme: light)"));var ge="not-allowed";var Ap=":host([hidden]){display:none}";function ot(r){return`${Ap}:host{display:${r}}`}var N=es()?"focus-visible":"focus";var hl="26",Ep="100px",pl="1",Yd="0",fl="4",Zd=()=>W`
  ${ot("inline-flex")} :host {
    background: var(--vscode-dropdown-background);
    box-sizing: border-box;
    color: var(--vscode-foreground);
    contain: contents;
    font-family: var(--vscode-font-family);
    height: calc(${hl} * 1px);
    position: relative;
    user-select: none;
    min-width: ${Ep};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${pl} * 1px) solid var(--vscode-dropdown-border);
    border-radius: calc(${Yd} * 1px);
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: var(--vscode-font-size);
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
  }
  .listbox {
    background: var(--vscode-dropdown-background);
    border: calc(${pl} * 1px) solid var(--vscode-focusBorder);
    border-radius: calc(${Yd} * 1px);
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${fl} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${N}) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host(:not([disabled]):hover) {
    background: var(--vscode-dropdown-background);
    border-color: var(--vscode-dropdown-border);
  }
  :host(:${N}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--vscode-list-activeSelectionBackground);
    border: calc(${pl} * 1px) solid var(--vscode-focusBorder);
    color: var(--vscode-list-activeSelectionForeground);
  }
  :host([disabled]) {
    cursor: ${ge};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${ge};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--vscode-dropdown-background);
    color: var(--vscode-foreground);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    border-color: var(--vscode-focusBorder);
  }
  :host(:focus-within) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    border-color: var(--vscode-focusBorder);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: calc(${hl} * 1px);
  }
  :host([open][position='below']) .listbox {
    top: calc(${hl} * 1px);
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${fl} * 4px);
    min-width: calc(${fl} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`;function We(r,e,t){return isNaN(r)||r<=e?e:r>=t?t:r}function _s(r,e,t){return isNaN(r)||r<=e?0:r>=t?1:r/(t-e)}function er(r,e,t){return isNaN(r)?e:e+r*(t-e)}function ml(r){return r*(Math.PI/180)}function Jd(r){return r*(180/Math.PI)}function Kd(r){let e=Math.round(We(r,0,255)).toString(16);return e.length===1?"0"+e:e}function ce(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:e+r*(t-e)}function Ls(r,e,t){if(r<=0)return e%360;if(r>=1)return t%360;let o=(e-t+360)%360,i=(t-e+360)%360;return o<=i?(e-o*r+360)%360:(e+o*r+360)%360}var Z1=Math.PI*2;function H(r,e){let t=Math.pow(10,e);return Math.round(r*t)/t}var Qe=class{constructor(e,t,o){this.h=e,this.s=t,this.l=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new Qe(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Qe(H(this.h,e),H(this.s,e),H(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}};var It=class{constructor(e,t,o){this.h=e,this.s=t,this.v=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.v)?new It(e.h,e.s,e.v):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new It(H(this.h,e),H(this.s,e),H(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}};var K=class{constructor(e,t,o){this.l=e,this.a=t,this.b=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new K(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new K(H(this.l,e),H(this.a,e),H(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}};K.epsilon=216/24389;K.kappa=24389/27;var it=class{constructor(e,t,o){this.l=e,this.c=t,this.h=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.c)&&!isNaN(e.h)?new it(e.l,e.c,e.h):null}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new it(H(this.l,e),H(this.c,e),H(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}};var P=class{constructor(e,t,o,i){this.r=e,this.g=t,this.b=o,this.a=typeof i=="number"&&!isNaN(i)?i:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new P(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(er(this.r,0,255))},${Math.round(er(this.g,0,255))},${Math.round(er(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(er(this.r,0,255))},${Math.round(er(this.g,0,255))},${Math.round(er(this.b,0,255))},${We(this.a,0,1)})`}roundToPrecision(e){return new P(H(this.r,e),H(this.g,e),H(this.b,e),H(this.a,e))}clamp(){return new P(We(this.r,0,1),We(this.g,0,1),We(this.b,0,1),We(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return Kd(er(e,0,255))}};var se=class{constructor(e,t,o){this.x=e,this.y=t,this.z=o}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new se(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new se(H(this.x,e),H(this.y,e),H(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}};se.whitePoint=new se(.95047,1,1.08883);function Bs(r){return r.r*.2126+r.g*.7152+r.b*.0722}function Ms(r){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return Bs(new P(e(r.r),e(r.g),e(r.b),1))}var eu=(r,e)=>(r+.05)/(e+.05);function gl(r,e){let t=Ms(r),o=Ms(e);return t>o?eu(t,o):eu(o,t)}function Rt(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let s=(e+t)/2,n=0;return o!==0&&(n=o/(1-Math.abs(2*s-1))),new Qe(i,n,s)}function uo(r,e=1){let t=(1-Math.abs(2*r.l-1))*r.s,o=t*(1-Math.abs(r.h/60%2-1)),i=r.l-t/2,s=0,n=0,a=0;return r.h<60?(s=t,n=o,a=0):r.h<120?(s=o,n=t,a=0):r.h<180?(s=0,n=t,a=o):r.h<240?(s=0,n=o,a=t):r.h<300?(s=o,n=0,a=t):r.h<360&&(s=t,n=0,a=o),new P(s+i,n+i,a+i,e)}function bl(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let s=0;return e!==0&&(s=o/e),new It(i,s,e)}function tu(r,e=1){let t=r.s*r.v,o=t*(1-Math.abs(r.h/60%2-1)),i=r.v-t,s=0,n=0,a=0;return r.h<60?(s=t,n=o,a=0):r.h<120?(s=o,n=t,a=0):r.h<180?(s=0,n=t,a=o):r.h<240?(s=0,n=o,a=t):r.h<300?(s=o,n=0,a=t):r.h<360&&(s=t,n=0,a=o),new P(s+i,n+i,a+i,e)}function Ip(r){let e=0,t=0;return r.h!==0&&(e=Math.cos(ml(r.h))*r.c,t=Math.sin(ml(r.h))*r.c),new K(r.l,e,t)}function Rp(r){let e=0;(Math.abs(r.b)>.001||Math.abs(r.a)>.001)&&(e=Jd(Math.atan2(r.b,r.a))),e<0&&(e+=360);let t=Math.sqrt(r.a*r.a+r.b*r.b);return new it(r.l,t,e)}function Fp(r){let e=(r.l+16)/116,t=e+r.a/500,o=e-r.b/200,i=Math.pow(t,3),s=Math.pow(e,3),n=Math.pow(o,3),a=0;i>K.epsilon?a=i:a=(116*t-16)/K.kappa;let l=0;r.l>K.epsilon*K.kappa?l=s:l=r.l/K.kappa;let c=0;return n>K.epsilon?c=n:c=(116*o-16)/K.kappa,a=se.whitePoint.x*a,l=se.whitePoint.y*l,c=se.whitePoint.z*c,new se(a,l,c)}function Tp(r){function e(l){return l>K.epsilon?Math.pow(l,1/3):(K.kappa*l+16)/116}let t=e(r.x/se.whitePoint.x),o=e(r.y/se.whitePoint.y),i=e(r.z/se.whitePoint.z),s=116*o-16,n=500*(t-o),a=200*(o-i);return new K(s,n,a)}function Hs(r){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}let t=e(r.r),o=e(r.g),i=e(r.b),s=t*.4124564+o*.3575761+i*.1804375,n=t*.2126729+o*.7151522+i*.072175,a=t*.0193339+o*.119192+i*.9503041;return new se(s,n,a)}function vl(r,e=1){function t(n){return n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055}let o=t(r.x*3.2404542-r.y*1.5371385-r.z*.4985314),i=t(r.x*-.969266+r.y*1.8760108+r.z*.041556),s=t(r.x*.0556434-r.y*.2040259+r.z*1.0572252);return new P(o,i,s,e)}function li(r){return Tp(Hs(r))}function Ns(r,e=1){return vl(Fp(r),e)}function ci(r){return Rp(li(r))}function js(r,e=1){return Ns(Ip(r),e)}function wl(r,e,t=18){let o=ci(r),i=o.c+e*t;return i<0&&(i=0),js(new it(o.l,i,o.h))}function xl(r,e){return r*e}function Cl(r,e){return new P(xl(r.r,e.r),xl(r.g,e.g),xl(r.b,e.b),1)}function yl(r,e){return r<.5?We(2*e*r,0,1):We(1-2*(1-e)*(1-r),0,1)}function $l(r,e){return new P(yl(r.r,e.r),yl(r.g,e.g),yl(r.b,e.b),1)}var ru;(function(r){r[r.Burn=0]="Burn",r[r.Color=1]="Color",r[r.Darken=2]="Darken",r[r.Dodge=3]="Dodge",r[r.Lighten=4]="Lighten",r[r.Multiply=5]="Multiply",r[r.Overlay=6]="Overlay",r[r.Screen=7]="Screen"})(ru||(ru={}));function Vp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new P(ce(r,e.r,t.r),ce(r,e.g,t.g),ce(r,e.b,t.b),ce(r,e.a,t.a))}function Pp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Qe(Ls(r,e.h,t.h),ce(r,e.s,t.s),ce(r,e.l,t.l))}function Dp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new It(Ls(r,e.h,t.h),ce(r,e.s,t.s),ce(r,e.v,t.v))}function _p(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new se(ce(r,e.x,t.x),ce(r,e.y,t.y),ce(r,e.z,t.z))}function Lp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new K(ce(r,e.l,t.l),ce(r,e.a,t.a),ce(r,e.b,t.b))}function Mp(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new it(ce(r,e.l,t.l),ce(r,e.c,t.c),Ls(r,e.h,t.h))}var be;(function(r){r[r.RGB=0]="RGB",r[r.HSL=1]="HSL",r[r.HSV=2]="HSV",r[r.XYZ=3]="XYZ",r[r.LAB=4]="LAB",r[r.LCH=5]="LCH"})(be||(be={}));function Pr(r,e,t,o){if(isNaN(r)||r<=0)return t;if(r>=1)return o;switch(e){case be.HSL:return uo(Pp(r,Rt(t),Rt(o)));case be.HSV:return tu(Dp(r,bl(t),bl(o)));case be.XYZ:return vl(_p(r,Hs(t),Hs(o)));case be.LAB:return Ns(Lp(r,li(t),li(o)));case be.LCH:return js(Mp(r,ci(t),ci(o)));default:return Vp(r,t,o)}}var ve=class{constructor(e){if(e==null||e.length===0)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(e==null||e.length===0)throw new Error("The colors argument must be non-empty");let t=new Array(e.length);for(let o=0;o<e.length;o++)o===0?t[o]={color:e[o],position:0}:o===e.length-1?t[o]={color:e[o],position:1}:t[o]={color:e[o],position:o*(1/(e.length-1))};return new ve(t)}getColor(e,t=be.RGB){if(this.stops.length===1)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let o=0;for(let n=0;n<this.stops.length;n++)this.stops[n].position<=e&&(o=n);let i=o+1;i>=this.stops.length&&(i=this.stops.length-1);let s=(e-this.stops[o].position)*(1/(this.stops[i].position-this.stops[o].position));return Pr(s,t,this.stops[o].color,this.stops[i].color)}trim(e,t,o=be.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new ve([{color:this.getColor(e,o),position:0}]);let i=[];for(let a=0;a<this.stops.length;a++)this.stops[a].position>=e&&this.stops[a].position<=t&&i.push(this.stops[a]);if(i.length===0)return new ve([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);i[0].position!==e&&i.unshift({color:this.getColor(e),position:e}),i[i.length-1].position!==t&&i.push({color:this.getColor(t),position:t});let s=t-e,n=new Array(i.length);for(let a=0;a<i.length;a++)n[a]={color:i[a].color,position:(i[a].position-e)/s};return new ve(n)}findNextColor(e,t,o=!1,i=be.RGB,s=.005,n=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);let a=this.getColor(e,i),l=o?0:1,c=this.getColor(l,i);if(gl(a,c)<=t)return l;let u=o?0:e,m=o?e:0,y=l,w=0;for(;w<=n;){y=Math.abs(m-u)/2+u;let $=this.getColor(y,i),ee=gl(a,$);if(Math.abs(ee-t)<=s)return y;ee>t?o?u=y:m=y:o?m=y:u=y,w++}return y}clone(){let e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new ve(e)}sortColorScaleStops(e){return e.sort((t,o)=>{let i=t.position,s=o.position;return i<s?-1:i>s?1:0})}};var Bp=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function yt(r){let e=Bp.exec(r);if(e===null)return null;let t=e[1];if(t.length===3){let i=t.charAt(0),s=t.charAt(1),n=t.charAt(2);t=i.concat(i,s,s,n,n)}let o=parseInt(t,16);return isNaN(o)?null:new P(_s((o&16711680)>>>16,0,255),_s((o&65280)>>>8,0,255),_s(o&255,0,255),1)}var st=class{constructor(e){this.config=Object.assign({},st.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(let o in e)this.config[o]&&(this.config[o].equalValue?this.config[o].equalValue(e[o])||(this.config[o]=e[o],t=!0):e[o]!==this.config[o]&&(this.config[o]=e[o],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){let e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){let e=Rt(this.config.baseColor),o=new ve([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark),i=o.getColor(0),s=o.getColor(1),n=i,a=s;if(e.s>=this.config.saturationAdjustmentCutoff&&(n=wl(n,this.config.saturationLight),a=wl(a,this.config.saturationDark)),this.config.multiplyLight!==0){let l=Cl(this.config.baseColor,n);n=Pr(this.config.multiplyLight,this.config.interpolationMode,n,l)}if(this.config.multiplyDark!==0){let l=Cl(this.config.baseColor,a);a=Pr(this.config.multiplyDark,this.config.interpolationMode,a,l)}if(this.config.overlayLight!==0){let l=$l(this.config.baseColor,n);n=Pr(this.config.overlayLight,this.config.interpolationMode,n,l)}if(this.config.overlayDark!==0){let l=$l(this.config.baseColor,a);a=Pr(this.config.overlayDark,this.config.interpolationMode,a,l)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new ve([{position:0,color:this.config.baseColor},{position:1,color:a.clamp()}]):this.config.baseScalePosition>=1?new ve([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new ve([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:a.clamp()}]):new ve([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:a.clamp()}])}};st.defaultPaletteConfig={baseColor:yt("#808080"),steps:11,interpolationMode:be.RGB,scaleColorLight:new P(1,1,1,1),scaleColorDark:new P(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};st.greyscalePaletteConfig={baseColor:yt("#808080"),steps:11,interpolationMode:be.RGB,scaleColorLight:new P(1,1,1,1),scaleColorDark:new P(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};var qO={targetSize:63,spacing:4,scaleColorLight:st.defaultPaletteConfig.scaleColorLight,scaleColorDark:st.defaultPaletteConfig.scaleColorDark};var Dr=class{constructor(e){this.palette=[],this.config=Object.assign({},Dr.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);let t=.14,o=.06,i=new P(t,t,t,1),s=94,a=new st(Object.assign(Object.assign({},st.greyscalePaletteConfig),{baseColor:i,baseScalePosition:(1-t)*100/s,steps:e})).palette,l=Bs(this.config.baseColor),c=Rt(this.config.baseColor).l,d=(l+c)/2,m=this.matchRelativeLuminanceIndex(d,a)/(e-1),w=this.matchRelativeLuminanceIndex(t,a)/(e-1),$=Rt(this.config.baseColor),ee=uo(Qe.fromObject({h:$.h,s:$.s,l:t})),Ze=uo(Qe.fromObject({h:$.h,s:$.s,l:o})),Ve=new Array(5);Ve[0]={position:0,color:new P(1,1,1,1)},Ve[1]={position:m,color:this.config.baseColor},Ve[2]={position:w,color:ee},Ve[3]={position:.99,color:Ze},Ve[4]={position:1,color:new P(0,0,0,1)};let eh=new ve(Ve);this.palette=new Array(e);for(let Ci=0;Ci<e;Ci++){let th=eh.getColor(Ci/(e-1),be.RGB);this.palette[Ci]=th}}matchRelativeLuminanceIndex(e,t){let o=Number.MAX_VALUE,i=0,s=0,n=t.length;for(;s<n;s++){let a=Math.abs(Bs(t[s])-e);a<o&&(o=a,i=s)}return i}};Dr.defaultPaletteConfig={baseColor:yt("#808080"),steps:94};function zs(r,e){let t=r.relativeLuminance>e.relativeLuminance?r:e,o=r.relativeLuminance>e.relativeLuminance?e:r;return(t.relativeLuminance+.05)/(o.relativeLuminance+.05)}var nt=Object.freeze({create(r,e,t){return new ho(r,e,t)},from(r){return new ho(r.r,r.g,r.b)}});function ou(r){let e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(let t in e)if(typeof e[t]!=typeof r[t])return!1;return!0}var ho=class extends P{constructor(e,t,o){super(e,t,o,1),this.toColorString=this.toStringHexRGB,this.contrast=zs.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Ms(this)}static fromObject(e){return new ho(e.r,e.g,e.b)}};function Us(r,e,t=0,o=r.length-1){if(o===t)return r[t];let i=Math.floor((o-t)/2)+t;return e(r[i])?Us(r,e,t,i):Us(r,e,i+1,o)}var Hp=(-.1+Math.sqrt(.21))/2;function iu(r){return r.relativeLuminance<=Hp}function Re(r){return iu(r)?-1:1}function Np(r,e,t){return typeof r=="number"?di.from(nt.create(r,e,t)):di.from(r)}function jp(r){return ou(r)?po.from(r):po.from(nt.create(r.r,r.g,r.b))}var di=Object.freeze({create:Np,from:jp}),po=class{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,o,i){o===void 0&&(o=this.closestIndexOf(e));let s=this.swatches,n=this.lastIndex,a=o;i===void 0&&(i=Re(e));let l=c=>zs(e,c)>=t;return i===-1&&(s=this.reversedSwatches,a=n-a),Us(s,l,a,n)}get(e){return this.swatches[e]||this.swatches[We(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(t!==-1)return this.closestIndexCache.set(e.relativeLuminance,t),t;let o=this.swatches.reduce((i,s)=>Math.abs(s.relativeLuminance-e.relativeLuminance)<Math.abs(i.relativeLuminance-e.relativeLuminance)?s:i);return t=this.swatches.indexOf(o),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new po(e,Object.freeze(new Dr({baseColor:P.fromObject(e)}).palette.map(t=>{let o=yt(t.toStringHexRGB());return nt.create(o.r,o.g,o.b)})))}};function su(r,e,t,o,i,s,n,a,l){let c=r.source,d=e.closestIndexOf(t),u=Math.max(n,a,l),m=d>=u?-1:1,w=r.closestIndexOf(c),$=w+m*-1*o,ee=$+m*i,Ze=$+m*s;return{rest:r.get($),hover:r.get(w),active:r.get(ee),focus:r.get(Ze)}}function nu(r,e,t,o,i,s,n){let a=r.source,l=r.closestIndexOf(a),c=Re(e),d=l+(c===1?Math.min(o,i):Math.max(c*o,c*i)),u=r.colorContrast(e,t,d,c),m=r.closestIndexOf(u),y=m+c*Math.abs(o-i),w=c===1?o<i:c*o>c*i,$,ee;return w?($=m,ee=y):($=y,ee=m),{rest:r.get($),hover:r.get(ee),active:r.get($+c*s),focus:r.get($+c*n)}}var Sl=nt.create(1,1,1),au=nt.create(0,0,0),lu=nt.from(yt("#808080")),cu=nt.from(yt("#DA1A5F"));function du(r,e){return r.contrast(Sl)>=e?Sl:au}function uu(r,e,t,o,i,s){let n=r.closestIndexOf(e),a=Math.max(t,o,i,s),l=n>=a?-1:1;return{rest:r.get(n+l*t),hover:r.get(n+l*o),active:r.get(n+l*i),focus:r.get(n+l*s)}}function hu(r,e,t,o,i,s){let n=Re(e),a=r.closestIndexOf(e);return{rest:r.get(a-n*t),hover:r.get(a-n*o),active:r.get(a-n*i),focus:r.get(a-n*s)}}function pu(r,e,t){let o=r.closestIndexOf(e);return r.get(o-(o<t?t*-1:t))}function fu(r,e,t,o,i,s,n,a,l,c){let d=Math.max(t,o,i,s,n,a,l,c),u=r.closestIndexOf(e),m=u>=d?-1:1;return{rest:r.get(u+m*t),hover:r.get(u+m*o),active:r.get(u+m*i),focus:r.get(u+m*s)}}function mu(r,e,t,o,i,s){let n=Re(e),a=r.closestIndexOf(r.colorContrast(e,4.5)),l=a+n*Math.abs(t-o),c=n===1?t<o:n*t>n*o,d,u;return c?(d=a,u=l):(d=l,u=a),{rest:r.get(d),hover:r.get(u),active:r.get(d+n*i),focus:r.get(d+n*s)}}function gu(r,e){return r.colorContrast(e,3.5)}function bu(r,e,t){return r.colorContrast(t,3.5,r.closestIndexOf(r.source),Re(e)*-1)}function vu(r,e){return r.colorContrast(e,14)}function xu(r,e){return r.colorContrast(e,4.5)}function tr(r){return nt.create(r,r,r)}var yu={LightMode:1,DarkMode:.23};function wu(r,e,t){return r.get(r.closestIndexOf(tr(e))+t)}function Cu(r,e,t){let o=r.closestIndexOf(tr(e))-t;return r.get(o-t)}function $u(r,e){return r.get(r.closestIndexOf(tr(e)))}function ui(r,e,t,o,i,s){return Math.max(r.closestIndexOf(tr(e))+t,o,i,s)}function Su(r,e,t,o,i,s){return r.get(ui(r,e,t,o,i,s))}function ku(r,e,t,o,i,s){return r.get(ui(r,e,t,o,i,s)+t)}function Ou(r,e,t,o,i,s){return r.get(ui(r,e,t,o,i,s)+t*2)}function Au(r,e,t,o,i,s){let n=r.closestIndexOf(e),a=Re(e),l=n+a*t,c=l+a*(o-t),d=l+a*(i-t),u=l+a*(s-t);return{rest:r.get(l),hover:r.get(c),active:r.get(d),focus:r.get(u)}}function Eu(r,e,t){return r.get(r.closestIndexOf(e)+Re(e)*t)}var{create:p}=Tr;function C(r){return Tr.create({name:r,cssCustomPropertyName:null})}var qs=p("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),kl=p("base-height-multiplier").withDefault(10),CE=p("base-horizontal-spacing-multiplier").withDefault(3),fo=p("base-layer-luminance").withDefault(yu.DarkMode),_r=p("control-corner-radius").withDefault(4),Ol=p("density").withDefault(0),xe=p("design-unit").withDefault(4),$E=p("direction").withDefault(ts.ltr),mo=p("disabled-opacity").withDefault(.3),Ft=p("stroke-width").withDefault(1),Xe=p("focus-stroke-width").withDefault(2),go=p("type-ramp-base-font-size").withDefault("14px"),bo=p("type-ramp-base-line-height").withDefault("20px"),SE=p("type-ramp-minus-1-font-size").withDefault("12px"),kE=p("type-ramp-minus-1-line-height").withDefault("16px"),OE=p("type-ramp-minus-2-font-size").withDefault("10px"),AE=p("type-ramp-minus-2-line-height").withDefault("16px"),EE=p("type-ramp-plus-1-font-size").withDefault("16px"),IE=p("type-ramp-plus-1-line-height").withDefault("24px"),RE=p("type-ramp-plus-2-font-size").withDefault("20px"),FE=p("type-ramp-plus-2-line-height").withDefault("28px"),TE=p("type-ramp-plus-3-font-size").withDefault("28px"),VE=p("type-ramp-plus-3-line-height").withDefault("36px"),PE=p("type-ramp-plus-4-font-size").withDefault("34px"),DE=p("type-ramp-plus-4-line-height").withDefault("44px"),_E=p("type-ramp-plus-5-font-size").withDefault("46px"),LE=p("type-ramp-plus-5-line-height").withDefault("56px"),ME=p("type-ramp-plus-6-font-size").withDefault("60px"),BE=p("type-ramp-plus-6-line-height").withDefault("72px"),HE=C("accent-fill-rest-delta").withDefault(0),zp=C("accent-fill-hover-delta").withDefault(4),Up=C("accent-fill-active-delta").withDefault(-5),qp=C("accent-fill-focus-delta").withDefault(0),Gp=C("accent-foreground-rest-delta").withDefault(0),Wp=C("accent-foreground-hover-delta").withDefault(6),Qp=C("accent-foreground-active-delta").withDefault(-4),Xp=C("accent-foreground-focus-delta").withDefault(0),vo=C("neutral-fill-rest-delta").withDefault(7),xo=C("neutral-fill-hover-delta").withDefault(10),yo=C("neutral-fill-active-delta").withDefault(5),Iu=C("neutral-fill-focus-delta").withDefault(0),Yp=C("neutral-fill-input-rest-delta").withDefault(0),Zp=C("neutral-fill-input-hover-delta").withDefault(0),Jp=C("neutral-fill-input-active-delta").withDefault(0),Kp=C("neutral-fill-input-focus-delta").withDefault(0),ef=C("neutral-fill-stealth-rest-delta").withDefault(0),tf=C("neutral-fill-stealth-hover-delta").withDefault(5),rf=C("neutral-fill-stealth-active-delta").withDefault(3),of=C("neutral-fill-stealth-focus-delta").withDefault(0),sf=C("neutral-fill-strong-rest-delta").withDefault(0),nf=C("neutral-fill-strong-hover-delta").withDefault(8),af=C("neutral-fill-strong-active-delta").withDefault(-5),lf=C("neutral-fill-strong-focus-delta").withDefault(0),wo=C("neutral-fill-layer-rest-delta").withDefault(3),cf=C("neutral-stroke-rest-delta").withDefault(25),df=C("neutral-stroke-hover-delta").withDefault(40),uf=C("neutral-stroke-active-delta").withDefault(16),hf=C("neutral-stroke-focus-delta").withDefault(25),pf=C("neutral-stroke-divider-rest-delta").withDefault(8),ff=p("neutral-color").withDefault(lu),de=C("neutral-palette").withDefault(r=>di.from(ff.getValueFor(r))),mf=p("accent-color").withDefault(cu),Al=C("accent-palette").withDefault(r=>di.from(mf.getValueFor(r))),gf=C("neutral-layer-card-container-recipe").withDefault({evaluate:r=>wu(de.getValueFor(r),fo.getValueFor(r),wo.getValueFor(r))}),NE=p("neutral-layer-card-container").withDefault(r=>gf.getValueFor(r).evaluate(r)),bf=C("neutral-layer-floating-recipe").withDefault({evaluate:r=>Cu(de.getValueFor(r),fo.getValueFor(r),wo.getValueFor(r))}),jE=p("neutral-layer-floating").withDefault(r=>bf.getValueFor(r).evaluate(r)),vf=C("neutral-layer-1-recipe").withDefault({evaluate:r=>$u(de.getValueFor(r),fo.getValueFor(r))}),xf=p("neutral-layer-1").withDefault(r=>vf.getValueFor(r).evaluate(r)),yf=C("neutral-layer-2-recipe").withDefault({evaluate:r=>Su(de.getValueFor(r),fo.getValueFor(r),wo.getValueFor(r),vo.getValueFor(r),xo.getValueFor(r),yo.getValueFor(r))}),zE=p("neutral-layer-2").withDefault(r=>yf.getValueFor(r).evaluate(r)),wf=C("neutral-layer-3-recipe").withDefault({evaluate:r=>ku(de.getValueFor(r),fo.getValueFor(r),wo.getValueFor(r),vo.getValueFor(r),xo.getValueFor(r),yo.getValueFor(r))}),UE=p("neutral-layer-3").withDefault(r=>wf.getValueFor(r).evaluate(r)),Cf=C("neutral-layer-4-recipe").withDefault({evaluate:r=>Ou(de.getValueFor(r),fo.getValueFor(r),wo.getValueFor(r),vo.getValueFor(r),xo.getValueFor(r),yo.getValueFor(r))}),qE=p("neutral-layer-4").withDefault(r=>Cf.getValueFor(r).evaluate(r)),ke=p("fill-color").withDefault(r=>xf.getValueFor(r)),hi;(function(r){r[r.normal=4.5]="normal",r[r.large=7]="large"})(hi||(hi={}));var Gs=p({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>su(Al.getValueFor(r),de.getValueFor(r),e||ke.getValueFor(r),zp.getValueFor(r),Up.getValueFor(r),qp.getValueFor(r),vo.getValueFor(r),xo.getValueFor(r),yo.getValueFor(r))}),Lr=p("accent-fill-rest").withDefault(r=>Gs.getValueFor(r).evaluate(r).rest),Co=p("accent-fill-hover").withDefault(r=>Gs.getValueFor(r).evaluate(r).hover),$o=p("accent-fill-active").withDefault(r=>Gs.getValueFor(r).evaluate(r).active),Ws=p("accent-fill-focus").withDefault(r=>Gs.getValueFor(r).evaluate(r).focus),Ru=r=>(e,t)=>du(t||Lr.getValueFor(e),r),Qs=C("foreground-on-accent-recipe").withDefault({evaluate:(r,e)=>Ru(hi.normal)(r,e)}),Fu=p("foreground-on-accent-rest").withDefault(r=>Qs.getValueFor(r).evaluate(r,Lr.getValueFor(r))),Tu=p("foreground-on-accent-hover").withDefault(r=>Qs.getValueFor(r).evaluate(r,Co.getValueFor(r))),Vu=p("foreground-on-accent-active").withDefault(r=>Qs.getValueFor(r).evaluate(r,$o.getValueFor(r))),Pu=p("foreground-on-accent-focus").withDefault(r=>Qs.getValueFor(r).evaluate(r,Ws.getValueFor(r))),Xs=C("foreground-on-accent-large-recipe").withDefault({evaluate:(r,e)=>Ru(hi.large)(r,e)}),GE=p("foreground-on-accent-rest-large").withDefault(r=>Xs.getValueFor(r).evaluate(r,Lr.getValueFor(r))),WE=p("foreground-on-accent-hover-large").withDefault(r=>Xs.getValueFor(r).evaluate(r,Co.getValueFor(r))),QE=p("foreground-on-accent-active-large").withDefault(r=>Xs.getValueFor(r).evaluate(r,$o.getValueFor(r))),XE=p("foreground-on-accent-focus-large").withDefault(r=>Xs.getValueFor(r).evaluate(r,Ws.getValueFor(r))),$f=r=>(e,t)=>nu(Al.getValueFor(e),t||ke.getValueFor(e),r,Gp.getValueFor(e),Wp.getValueFor(e),Qp.getValueFor(e),Xp.getValueFor(e)),Ys=p({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>$f(hi.normal)(r,e)}),YE=p("accent-foreground-rest").withDefault(r=>Ys.getValueFor(r).evaluate(r).rest),ZE=p("accent-foreground-hover").withDefault(r=>Ys.getValueFor(r).evaluate(r).hover),JE=p("accent-foreground-active").withDefault(r=>Ys.getValueFor(r).evaluate(r).active),KE=p("accent-foreground-focus").withDefault(r=>Ys.getValueFor(r).evaluate(r).focus),Zs=p({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>uu(de.getValueFor(r),e||ke.getValueFor(r),vo.getValueFor(r),xo.getValueFor(r),yo.getValueFor(r),Iu.getValueFor(r))}),eI=p("neutral-fill-rest").withDefault(r=>Zs.getValueFor(r).evaluate(r).rest),tI=p("neutral-fill-hover").withDefault(r=>Zs.getValueFor(r).evaluate(r).hover),rI=p("neutral-fill-active").withDefault(r=>Zs.getValueFor(r).evaluate(r).active),oI=p("neutral-fill-focus").withDefault(r=>Zs.getValueFor(r).evaluate(r).focus),Js=p({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>hu(de.getValueFor(r),e||ke.getValueFor(r),Yp.getValueFor(r),Zp.getValueFor(r),Jp.getValueFor(r),Kp.getValueFor(r))}),Du=p("neutral-fill-input-rest").withDefault(r=>Js.getValueFor(r).evaluate(r).rest),_u=p("neutral-fill-input-hover").withDefault(r=>Js.getValueFor(r).evaluate(r).hover),Lu=p("neutral-fill-input-active").withDefault(r=>Js.getValueFor(r).evaluate(r).active),iI=p("neutral-fill-input-focus").withDefault(r=>Js.getValueFor(r).evaluate(r).focus),Ks=p({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>fu(de.getValueFor(r),e||ke.getValueFor(r),ef.getValueFor(r),tf.getValueFor(r),rf.getValueFor(r),of.getValueFor(r),vo.getValueFor(r),xo.getValueFor(r),yo.getValueFor(r),Iu.getValueFor(r))}),en=p("neutral-fill-stealth-rest").withDefault(r=>Ks.getValueFor(r).evaluate(r).rest),Mu=p("neutral-fill-stealth-hover").withDefault(r=>Ks.getValueFor(r).evaluate(r).hover),Bu=p("neutral-fill-stealth-active").withDefault(r=>Ks.getValueFor(r).evaluate(r).active),sI=p("neutral-fill-stealth-focus").withDefault(r=>Ks.getValueFor(r).evaluate(r).focus),tn=p({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>mu(de.getValueFor(r),e||ke.getValueFor(r),sf.getValueFor(r),nf.getValueFor(r),af.getValueFor(r),lf.getValueFor(r))}),nI=p("neutral-fill-strong-rest").withDefault(r=>tn.getValueFor(r).evaluate(r).rest),aI=p("neutral-fill-strong-hover").withDefault(r=>tn.getValueFor(r).evaluate(r).hover),lI=p("neutral-fill-strong-active").withDefault(r=>tn.getValueFor(r).evaluate(r).active),cI=p("neutral-fill-strong-focus").withDefault(r=>tn.getValueFor(r).evaluate(r).focus),Sf=C("neutral-fill-layer-recipe").withDefault({evaluate:(r,e)=>pu(de.getValueFor(r),e||ke.getValueFor(r),wo.getValueFor(r))}),dI=p("neutral-fill-layer-rest").withDefault(r=>Sf.getValueFor(r).evaluate(r)),kf=C("focus-stroke-outer-recipe").withDefault({evaluate:r=>gu(de.getValueFor(r),ke.getValueFor(r))}),at=p("focus-stroke-outer").withDefault(r=>kf.getValueFor(r).evaluate(r)),Of=C("focus-stroke-inner-recipe").withDefault({evaluate:r=>bu(Al.getValueFor(r),ke.getValueFor(r),at.getValueFor(r))}),rn=p("focus-stroke-inner").withDefault(r=>Of.getValueFor(r).evaluate(r)),Af=C("neutral-foreground-hint-recipe").withDefault({evaluate:r=>xu(de.getValueFor(r),ke.getValueFor(r))}),uI=p("neutral-foreground-hint").withDefault(r=>Af.getValueFor(r).evaluate(r)),Ef=C("neutral-foreground-recipe").withDefault({evaluate:r=>vu(de.getValueFor(r),ke.getValueFor(r))}),pi=p("neutral-foreground-rest").withDefault(r=>Ef.getValueFor(r).evaluate(r)),on=p({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:r=>Au(de.getValueFor(r),ke.getValueFor(r),cf.getValueFor(r),df.getValueFor(r),uf.getValueFor(r),hf.getValueFor(r))}),Hu=p("neutral-stroke-rest").withDefault(r=>on.getValueFor(r).evaluate(r).rest),hI=p("neutral-stroke-hover").withDefault(r=>on.getValueFor(r).evaluate(r).hover),pI=p("neutral-stroke-active").withDefault(r=>on.getValueFor(r).evaluate(r).active),fI=p("neutral-stroke-focus").withDefault(r=>on.getValueFor(r).evaluate(r).focus),If=C("neutral-stroke-divider-recipe").withDefault({evaluate:(r,e)=>Eu(de.getValueFor(r),e||ke.getValueFor(r),pf.getValueFor(r))}),mI=p("neutral-stroke-divider-rest").withDefault(r=>If.getValueFor(r).evaluate(r)),Nu=Tr.create({name:"height-number",cssCustomPropertyName:null}).withDefault(r=>(kl.getValueFor(r)+Ol.getValueFor(r))*xe.getValueFor(r));var Tt=Ba`(${kl} + ${Ol}) * ${xe}`;var Rf="0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))",Ff="0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))",El=`box-shadow: ${Rf}, ${Ff};`;var ju=(r,e)=>{let t=r.tagFor(me),o=r.name===r.tagFor(Et)?"":".listbox";return W`
        ${o?"":ot("inline-flex")}

        :host ${o} {
            background: ${ke};
            border: calc(${Ft} * 1px) solid ${Hu};
            border-radius: calc(${_r} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${xe} * 1px) 0;
        }

        ${o?"":W`
            :host(:focus-within:not([disabled])) {
                border-color: ${at};
                box-shadow: 0 0 0
                    calc((${Xe} - ${Ft}) * 1px)
                    ${at} inset;
            }

            :host([disabled]) ::slotted(*) {
                cursor: ${ge};
                opacity: ${mo};
                pointer-events: none;
            }
        `}

        ${o||":host([size])"} {
            max-height: calc(
                (var(--size) * ${Tt} + (${xe} * ${Ft} * 2)) * 1px
            );
            overflow-y: auto;
        }

        :host([size="0"]) ${o} {
            max-height: none;
        }
    `.withBehaviors(co(W`
                :host(:not([multiple]):${N}) ::slotted(${t}[aria-selected="true"]),
                :host([multiple]:${N}) ::slotted(${t}[aria-checked="true"]) {
                    border-color: ${R.ButtonText};
                    box-shadow: 0 0 0 calc(${Xe} * 1px) inset ${R.HighlightText};
                }

                :host(:not([multiple]):${N}) ::slotted(${t}[aria-selected="true"]) {
                    background: ${R.Highlight};
                    color: ${R.HighlightText};
                    fill: currentcolor;
                }

                ::slotted(${t}[aria-selected="true"]:not([aria-checked="true"])) {
                    background: ${R.Highlight};
                    border-color: ${R.HighlightText};
                    color: ${R.HighlightText};
                }
            `))};var zu=(r,e)=>{let t=r.name===r.tagFor(rt);return W`
        ${ot("inline-flex")}

        :host {
            --elevation: 14;
            background: ${Du};
            border-radius: calc(${_r} * 1px);
            border: calc(${Ft} * 1px) solid ${Lr};
            box-sizing: border-box;
            color: ${pi};
            font-family: ${qs};
            height: calc(${Tt} * 1px);
            position: relative;
            user-select: none;
            min-width: 250px;
            outline: none;
            vertical-align: top;
        }

        ${t?W`
            :host(:not([aria-haspopup])) {
                --elevation: 0;
                border: 0;
                height: auto;
                min-width: 0;
            }
        `:""}

        ${ju(r,e)}

        :host .listbox {
            ${El}
            border: none;
            display: flex;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: 1;
        }

        .control + .listbox {
            --stroke-size: calc(${xe} * ${Ft} * 2);
            max-height: calc(
                (var(--listbox-max-height) * ${Tt} + var(--stroke-size)) * 1px
            );
        }

        ${t?W`
            :host(:not([aria-haspopup])) .listbox {
                left: auto;
                position: static;
                z-index: auto;
            }
        `:""}

        .listbox[hidden] {
            display: none;
        }

        .control {
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            font-size: ${go};
            font-family: inherit;
            line-height: ${bo};
            min-height: 100%;
            padding: 0 calc(${xe} * 2.25px);
            width: 100%;
        }

        :host(:not([disabled]):hover) {
            background: ${_u};
            border-color: ${Co};
        }

        :host(:${N}) {
            border-color: ${at};
        }

        :host(:not([size]):not([multiple]):not([open]):${N}),
        :host([multiple]:${N}),
        :host([size]:${N}) {
            box-shadow: 0 0 0 calc(${Xe} * 1px) ${at};
        }

        :host(:not([multiple]):not([size]):${N}) ::slotted(${r.tagFor(me)}[aria-selected="true"]:not([disabled])) {
            box-shadow: 0 0 0 calc(${Xe} * 1px) inset ${rn};
            border-color: ${at};
            background: ${Ws};
            color: ${Pu};
        }

        :host([disabled]) {
            cursor: ${ge};
            opacity: ${mo};
        }

        :host([disabled]) .control {
            cursor: ${ge};
            user-select: none;
        }

        :host([disabled]:hover) {
            background: ${en};
            color: ${pi};
            fill: currentcolor;
        }

        :host(:not([disabled])) .control:active {
            background: ${Lu};
            border-color: ${$o};
            border-radius: calc(${_r} * 1px);
        }

        :host([open][position="above"]) .listbox {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 0;
            bottom: calc(${Tt} * 1px);
        }

        :host([open][position="below"]) .listbox {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: 0;
            top: calc(${Tt} * 1px);
        }

        .selected-value {
            flex: 1 1 auto;
            font-family: inherit;
            min-width: calc(var(--listbox-scroll-width, 0) - (${xe} * 4) * 1px);
            overflow: hidden;
            text-align: start;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .indicator {
            flex: 0 0 auto;
            margin-inline-start: 1em;
        }

        slot[name="listbox"] {
            display: none;
            width: 100%;
        }

        :host([open]) slot[name="listbox"] {
            display: flex;
            position: absolute;
            ${El}
        }

        .end {
            margin-inline-start: auto;
        }

        .start,
        .end,
        .indicator,
        .select-indicator,
        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            fill: currentcolor;
            height: 1em;
            min-height: calc(${xe} * 4px);
            min-width: calc(${xe} * 4px);
            width: 1em;
        }

        ::slotted([role="option"]),
        ::slotted(option) {
            flex: 0 0 auto;
        }
    `.withBehaviors(co(W`
                :host(:not([disabled]):hover),
                :host(:not([disabled]):active) {
                    border-color: ${R.Highlight};
                }

                :host(:not([disabled]):${N}) {
                    background-color: ${R.ButtonFace};
                    box-shadow: 0 0 0 calc(${Xe} * 1px) ${R.Highlight};
                    color: ${R.ButtonText};
                    fill: currentcolor;
                    forced-color-adjust: none;
                }

                :host(:not([disabled]):${N}) .listbox {
                    background: ${R.ButtonFace};
                }

                :host([disabled]) {
                    border-color: ${R.GrayText};
                    background-color: ${R.ButtonFace};
                    color: ${R.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                    forced-color-adjust: none;
                }

                :host([disabled]:hover) {
                    background: ${R.ButtonFace};
                }

                :host([disabled]) .control {
                    color: ${R.GrayText};
                    border-color: ${R.GrayText};
                }

                :host([disabled]) .control .select-indicator {
                    fill: ${R.GrayText};
                }

                :host(:${N}) ::slotted([aria-selected="true"][role="option"]),
                :host(:${N}) ::slotted(option[aria-selected="true"]),
                :host(:${N}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                    background: ${R.Highlight};
                    border-color: ${R.ButtonText};
                    box-shadow: 0 0 0 calc(${Xe} * 1px) inset ${R.HighlightText};
                    color: ${R.HighlightText};
                    fill: currentcolor;
                }

                .start,
                .end,
                .indicator,
                .select-indicator,
                ::slotted(svg) {
                    color: ${R.ButtonText};
                    fill: currentcolor;
                }
            `))};var Uu=(r,e)=>W`
    ${zu(r,e)}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${ge};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${go};
        line-height: ${bo};
        height: calc(100% - (${Ft} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${N},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`;var Il=class extends Ge{maxHeightChanged(e,t){this.updateComputedStylesheet()}updateComputedStylesheet(){this.computedStylesheet&&this.$fastController.removeStyles(this.computedStylesheet);let e=Math.floor(this.maxHeight/Nu.getValueFor(this)).toString();this.computedStylesheet=W`
            :host {
                --listbox-max-height: ${e};
            }
        `,this.$fastController.addStyles(this.computedStylesheet)}},sn=Il.compose({baseName:"combobox",baseClass:Ge,template:Wd,styles:Uu,shadowOptions:{delegatesFocus:!0},indicator:`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `});var qu=(r,e)=>W`
        ${ot("inline-flex")} :host {
            align-items: center;
            font-family: ${qs};
            border-radius: calc(${_r} * 1px);
            border: calc(${Xe} * 1px) solid transparent;
            box-sizing: border-box;
            background: ${en};
            color: ${pi};
            cursor: pointer;
            flex: 0 0 auto;
            fill: currentcolor;
            font-size: ${go};
            height: calc(${Tt} * 1px);
            line-height: ${bo};
            margin: 0 calc((${xe} - ${Xe}) * 1px);
            outline: none;
            overflow: hidden;
            padding: 0 1ch;
            user-select: none;
            white-space: nowrap;
        }

        :host(:not([disabled]):not([aria-selected="true"]):hover) {
            background: ${Mu};
        }

        :host(:not([disabled]):not([aria-selected="true"]):active) {
            background: ${Bu};
        }

        :host([aria-selected="true"]) {
            background: ${Lr};
            color: ${Fu};
        }

        :host(:not([disabled])[aria-selected="true"]:hover) {
            background: ${Co};
            color: ${Tu};
        }

        :host(:not([disabled])[aria-selected="true"]:active) {
            background: ${$o};
            color: ${Vu};
        }

        :host([disabled]) {
            cursor: ${ge};
            opacity: ${mo};
        }

        .content {
            grid-column-start: 2;
            justify-self: start;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .start,
        .end,
        ::slotted(svg) {
            display: flex;
        }

        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            height: calc(${xe} * 4px);
            width: calc(${xe} * 4px);
        }

        ::slotted([slot="end"]) {
            margin-inline-start: 1ch;
        }

        ::slotted([slot="start"]) {
            margin-inline-end: 1ch;
        }

        :host([aria-checked="true"][aria-selected="false"]) {
            border-color: ${at};
        }

        :host([aria-checked="true"][aria-selected="true"]) {
            border-color: ${at};
            box-shadow: 0 0 0 calc(${Xe} * 2 * 1px) inset
                ${rn};
        }
    `.withBehaviors(co(W`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${R.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${R.Highlight};
                    color: ${R.HighlightText};
                }

                :host([disabled]),
                :host([disabled][aria-selected="false"]:hover) {
                    background: ${R.Canvas};
                    color: ${R.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }

                :host([aria-checked="true"][aria-selected="false"]) {
                    background: ${R.ButtonFace};
                    color: ${R.ButtonText};
                    border-color: ${R.ButtonText};
                }

                :host([aria-checked="true"][aria-selected="true"]),
                :host([aria-checked="true"][aria-selected="true"]:hover) {
                    background: ${R.Highlight};
                    color: ${R.HighlightText};
                    border-color: ${R.ButtonText};
                }
            `));var Rl=me.compose({baseName:"option",template:Xd,styles:qu});function Gu(r){return cl.getOrCreate(r).withPrefix("fast")}var Wu="2.3rem",Tf="100px",fi="1",Qu="0.25rem",Vf="1rem",Fl="4",Xu=()=>W`
  ${ot("inline-flex")} :host {
    background: var(--select-field-background-color);
    box-sizing: border-box;
    color: var(--foreground-color);
    contain: contents;
    font-family: inherit;
    position: relative;
    user-select: none;
    min-width: ${Tf};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${fi} * 1px) solid var(--field-border-color);
    border-radius: ${Qu};
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
  .listbox {
    background: var(--background-color);
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    border-radius: ${Vf};
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${Fl} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${N}) .control {
    border-color: var(--focus-border-color);
  }
  :host(:not([disabled]):hover) {
    background: var(--select-field-background-color);
    border-color: var(--field-border-color);
  }
  :host(:${N}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--active-selection-background-color);
    border: calc(${fi} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${ge};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${ge};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--select-field-background-color);
    color: var(--foreground-color);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:focus-within) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: ${Wu};
  }
  :host([open][position='below']) .listbox {
    top: ${Wu};
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${Fl} * 4px);
    min-width: calc(${Fl} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`,Yu=()=>W`
  ${ot("inline-flex")} :host {
    font-family: inherit;
    border-radius: ${Qu};
    border: calc(${fi} * 1px) solid transparent;
    box-sizing: border-box;
    color: var(--foreground-color);
    cursor: pointer;
    fill: currentcolor;
    font-size: inherit;
    line-height: normal;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0.125rem 0.5rem 0.5rem;
    user-select: none;
    white-space: nowrap;
  }
  :host(:${N}) {
    border-color: var(--focus-border-color);
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([aria-selected='true']) {
    background: var(--active-selection-background-color);
    border: calc(${fi} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):hover) {
    background: var(--active-selection-background-color);
    border: calc(${fi} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${ge};
    opacity: 0.4;
  }
  :host([disabled]:hover) {
    background-color: inherit;
  }
  .content {
    grid-column-start: 2;
    justify-self: start;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;var nn=r=>{class e extends r{constructor(...i){super();this.touched=!1;this.isDefaultValue=!0;this.submitted=!1;new Pe(this,{context:On,callback:s=>{s.registerValidationListener(this.option.name,n=>this.validation=n),s.registerTouchedListener(this.option.name,n=>this.touched=n),s.registerDefaultValueListener(this.option.name,n=>this.isDefaultValue=n)},subscribe:!1}),new Pe(this,{context:_i,callback:s=>this.submitted=s,subscribe:!0}),new Pe(this,{context:Mi,callback:s=>this.generatorContext=s,subscribe:!0})}shouldRenderError(){return this.validation!==void 0&&this.validation!==!0&&(this.touched||this.submitted)}shouldRenderChanged(){return this.touched&&!this.isDefaultValue}createRenderRoot(){return this}}return x([re()],e.prototype,"validation",2),x([re()],e.prototype,"touched",2),x([re()],e.prototype,"isDefaultValue",2),x([re()],e.prototype,"submitted",2),x([re()],e.prototype,"generatorContext",2),e};var Ye=r=>{class e extends nn(Oe(r)){dispatchValue(i){let s=Dt(this.option),n=Vi(i,s);this.dispatchEvent(new CustomEvent("option-changed",{bubbles:!0,composed:!0,detail:{name:this.option.name,value:i,isDefaultValue:n}}))}firstUpdated(i){if(super.updated(i),this.generatorContext){let n=this.generatorContext.prefillValues?.[this.option.name];if(n){this.setFieldValue(n),this.dispatchValue(n);return}}let s=Dt(this.option);if(s){this.setFieldValue(s),this.dispatchValue(s);return}this.dispatchValue(void 0)}get fieldId(){return`${this.option.name}-field`}get ariaAttributes(){return{id:this.fieldId,"aria-invalid":`${this.shouldRenderError()}`,"aria-describedby":`${this.fieldId}-error`}}createRenderRoot(){return this}setFieldValue(i){throw new Error("Not implemented")}renderField(){throw new Error("Not implemented")}}return x([M()],e.prototype,"option",2),e};var Tl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gi=r=>(...e)=>({_$litDirective$:r,values:e}),mi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:IR}=ec;var Zu=r=>r.strings===void 0;var bi=(r,e)=>{var t,o;let i=r._$AN;if(i===void 0)return!1;for(let s of i)(o=(t=s)._$AO)===null||o===void 0||o.call(t,e,!1),bi(s,e);return!0},an=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},Ju=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),_f(e)}};function Pf(r){this._$AN!==void 0?(an(this),this._$AM=r,Ju(this)):this._$AM=r}function Df(r,e=!1,t=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let s=t;s<o.length;s++)bi(o[s],!1),an(o[s]);else o!=null&&(bi(o,!1),an(o));else bi(this,r)}var _f=r=>{var e,t,o,i;r.type==Tl.CHILD&&((e=(o=r)._$AP)!==null&&e!==void 0||(o._$AP=Df),(t=(i=r)._$AQ)!==null&&t!==void 0||(i._$AQ=Pf))},ln=class extends mi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Ju(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(bi(this,e),an(this))}setValue(e){if(Zu(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var cn=class extends ln{constructor(){super(...arguments),this.prevData={}}render(e){return te}update(e,[t]){var o;this.element!==e.element&&(this.element=e.element),this.host=((o=e.options)===null||o===void 0?void 0:o.host)||this.element,this.apply(t),this.groom(t),this.prevData={...t}}apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let s=e[i];s!==t[i]&&(o[i]=s)}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&(o[i]=void 0)}},HR=gi(cn),dn=class extends cn{constructor(){super(...arguments),this.eventData={}}apply(e){if(e)for(let t in e){let o=e[t];o!==this.eventData[t]&&this.applyEvent(t,o)}}applyEvent(e,t){let{prevData:o,element:i}=this;this.eventData[e]=t,o[e]&&i.removeEventListener(e,this,t),i.addEventListener(e,this,t)}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&this.groomEvent(i,t[i])}groomEvent(e,t){let{element:o}=this;delete this.eventData[e],o.removeEventListener(e,this,t)}handleEvent(e){let t=this.eventData[e.type];typeof t=="function"?t.call(this.host,e):t.handleEvent(e)}disconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),s=e[o];t.removeEventListener(i,this,s)}}reconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),s=e[o];t.addEventListener(i,this,s)}}},NR=gi(dn),Vl=class extends dn{apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let s=e[i];if(s===t[i])continue;let n=i.slice(1);switch(i[0]){case"@":this.eventData[n]=s,this.applyEvent(n,s);break;case".":o[n]=s;break;case"?":s?o.setAttribute(n,""):o.removeAttribute(n);break;default:s!=null?o.setAttribute(i,String(s)):o.removeAttribute(i);break}}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t){let s=i.slice(1);if(!e||!(i in e)&&o[s]===t[i])switch(i[0]){case"@":this.groomEvent(s,t[i]);break;case".":o[s]=void 0;break;case"?":o.removeAttribute(s);break;default:o.removeAttribute(i);break}}}},ne=gi(Vl);var Fe="focus:ring-2 focus:ring-focusBorder focus:outline-none",rr="bg-fieldBackground border border-fieldBorder",or="px-2 py-1.5",ir=r=>r?"!ring-2 !ring-error focus:!ring-error":"",sr=r=>r?"--border-width: 1; --dropdown-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":"";var Ku=r=>class extends r{render(){return f`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <label for="${this.fieldId}"
            >${this.option.name}${this.option.isRequired?"*":""}</label
          >
          <div class="mt-2 flex flex-row items-start gap-2">
            ${this.renderField()}
            <p class="self-center text-gray-500">${this.option.description}</p>
            ${ue(this.shouldRenderError()&&typeof this.validation=="string",()=>f`<p
                class="text-sm text-error ${ue(this.editor==="intellij",()=>"mt-1")}"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>
              </div>`)}
          </div>
        </div>
      `}};var un=class extends Ku(Ye(T)){renderField(){return this.editor==="intellij"?f`<input
        type="checkbox"
        class="form-checkbox ${rr} checked:bg-primary ${Fe} h-5 w-5 rounded checked:border-transparent focus:ring-offset-0"
        @input="${this.handleChange}"
        ${ne(this.ariaAttributes)}
      />`:f`<vscode-checkbox
        @change="${this.handleChange}"
        style="${this.shouldRenderError()?"--border-width: 1; --checkbox-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":""}"
        ${ne(this.ariaAttributes)}
      ></vscode-checkbox>`}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-checkbox");t&&(t.checked=!!e)}handleChange(e){let t=e.target.checked;this.dispatchValue(t)}};un=x([V("checkbox-field")],un);var wt=r=>class extends r{render(){return f`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <div class="flex items-center gap-3">
            <label for="${this.fieldId}"
              >${this.option.name}${this.option.isRequired?"*":""}</label
            >
            ${ue(this.option["x-hint"],()=>f`
                  <popover-element
                    class="flex items-start"
                    .content="${this.option["x-hint"]}"
                  >
                    <icon-element class="flex items-start" icon="question">
                    </icon-element>
                  </popover-element>
                `)}
          </div>
          <p class="mb-2 text-gray-500">${this.option.description}</p>
          ${this.renderField()}
          ${ue(this.shouldRenderError()&&typeof this.validation=="string",()=>f`<p
                class="text-error ${ue(this.editor==="intellij",()=>"mt-1")} text-sm"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>`)}
        </div>
      `}};var vi=class extends wt(Ye(T)){constructor(){super(...arguments);this.elements=[]}renderField(){return f`<div>
      <div class="flex flex-row gap-2">
        ${this.renderInputField()}
        <button-element
          text="Add"
          appearance="secondary"
          @click="${this.addValue}"
          data-cy="${this.fieldId}-add-button"
          class="self-center"
          style="${this.shouldRenderError()?"--field-border-color: var(--error-color); --focus-border-color: var(--error-color);":""}"
        ></button-element>
      </div>
      <div class="mt-2">
        <p>${this.elements.length} items</p>
        <div class="mt-2 flex flex-row gap-4">
          ${this.elements.map((t,o)=>f`<badge-element
                text="${t}"
                fieldId="${this.fieldId}"
                @remove="${()=>this.removeValue(o)}"
              ></badge-element>`)}
        </div>
      </div>
    </div>`}renderInputField(){return this.editor==="intellij"?f` <input
        class="${rr} ${Fe} ${or} ${ir(this.shouldRenderError())})} grow rounded"
        type="text"
        @keydown="${this.handleEnterKeyAdd}"
        ${ne(this.ariaAttributes)}
      />`:f`<vscode-text-field
        type="text"
        class="grow"
        @keydown="${this.handleEnterKeyAdd}"
        style="${sr(this.shouldRenderError())}"
        ${ne(this.ariaAttributes)}
      ></vscode-text-field>`}get inputFieldSelector(){return this.editor==="intellij"?"input":"vscode-text-field"}handleEnterKeyAdd(t){t.key==="Enter"&&this.addValue()}addValue(){let t=this.querySelector(this.inputFieldSelector),o=t?.value;o&&(this.elements=[...this.elements,o],t.value="",this.dispatchValue(this.elements))}removeValue(t){let o=[...this.elements];o.splice(t,1),this.elements=o,this.dispatchValue(this.elements)}setFieldValue(t){typeof t=="string"?this.elements=t.split(","):Array.isArray(t)&&(this.elements=t)}};x([re()],vi.prototype,"elements",2),vi=x([V("array-field")],vi);var hn=class extends wt(Ye(T)){renderField(){let e=this.shouldRenderError();return this.editor==="intellij"?f`
        <input
          class="${rr} ${Fe} ${or} ${ir(e)} rounded"
          type="text"
          @input="${this.handleChange}"
          ${ne(this.ariaAttributes)}
        />
      `:f`
        <vscode-text-field
          type="text"
          @input="${this.handleChange}"
          style="${sr(this.shouldRenderError())}"
          ${ne(this.ariaAttributes)}
        >
        </vscode-text-field>
      `}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-text-field");t&&(t.value=`${e}`)}};hn=x([V("input-field")],hn);function*Vt(r,e){if(r!==void 0){let t=0;for(let o of r)yield e(o,t++)}}var xi=class extends wt(Ye(T)){constructor(){super(...arguments);this.selectedElements=[]}renderField(){return f`
      <div class="flex flex-col">
        ${this.renderSelectField()}
        <div class="mt-2">
          ${ue(this.selectedElements.length>0,()=>f`<p>Selected:</p>`)}
          <div class="mt-2 flex flex-row gap-4">
            ${this.selectedElements.map((t,o)=>f`<badge-element
                  text="${t}"
                  fieldId="${this.fieldId}"
                  @remove="${()=>this.removeValue(o)}"
                ></badge-element>`)}
          </div>
        </div>
      </div>
    `}renderSelectField(){return this.editor==="intellij"?f`<select
        @change="${this.addValue}"
        class="bg-selectFieldBackground border-fieldBorder ${Fe} ${or} ${ir(this.shouldRenderError())})} grow rounded border"
        ${ne(this.ariaAttributes)}
      >
        <option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </option>
        ${Vt(this.extractItemOptions(this.option),t=>f`<option value="${t}">${t}</option>`)}
      </select>`:f` <vscode-dropdown
        @change="${this.addValue}"
        style="${sr(this.shouldRenderError())}"
        ${ne(this.ariaAttributes)}
      >
        <vscode-option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </vscode-option>
        ${Vt(this.extractItemOptions(this.option),t=>f`<vscode-option value="${t}">${t}</vscode-option>`)}
      </vscode-dropdown>`}removeValue(t){let o=[...this.selectedElements];o.splice(t,1),this.selectedElements=o,this.dispatchValue(this.selectedElements)}addValue(t){let o=t.target,i=o.value;i&&(this.selectedElements=[...this.selectedElements,i],o.value="",this.dispatchValue(this.selectedElements))}setFieldValue(t){let o=[];typeof t=="string"?o=t.split(","):Array.isArray(t)&&(o=t);let i=this.extractItemOptions(this.option);this.selectedElements=o.filter(s=>i.includes(s)),this.dispatchValue(this.selectedElements)}extractItemOptions(t){if(!t.items)return[];let o;return Array.isArray(t.items)?o=t.items:o=t.items.enum,o.filter(i=>!this.selectedElements.includes(i))}};x([re()],xi.prototype,"selectedElements",2),xi=x([V("multiselect-field")],xi);var pn=class extends wt(Ye(T)){renderField(){return this.editor==="intellij"?this.renderIntellij():this.renderVscode()}renderIntellij(){return f`
      <select
        @change="${this.handleChange}"
        class="form-select bg-selectFieldBackground border-fieldBorder ${Fe} ${or} ${ir(this.shouldRenderError())} rounded border"
        ${ne(this.ariaAttributes)}
      >
        ${ue(Dt(this.option)===void 0,()=>f`<option value="">--</option>`)}
        ${Vt(_t(this.option),e=>f`<option value="${e}">${e}</option>`)}
      </select>
    `}renderVscode(){return f`
      <vscode-dropdown
        @change="${this.handleChange}"
        style="${sr(this.shouldRenderError())}"
        ${ne(this.ariaAttributes)}
      >
        ${ue(Dt(this.option)===void 0,()=>f`<vscode-option value="">--</vscode-option>`)}
        ${Vt(_t(this.option),e=>f`<vscode-option value="${e}">${e}</vscode-option>`)}
      </vscode-dropdown>
    `}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"select":"vscode-dropdown");t&&(t.value=e?`${e}`:"")}handleChange(e){let t=e.target.value;this.dispatchValue(t)}};pn=x([V("select-field")],pn);var fn=class extends wt(Ye(T)){renderField(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return f`
      <vscode-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        @input="${this.handleInput}"
        ${ne(this.ariaAttributes)}
      >
        ${Vt(_t(this.option),e=>f`<vscode-option value="${e}">${e}</vscode-option>`)}
      </vscode-combobox>
    `}renderIntellij(){return f`
      <intellij-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        ${ne(this.ariaAttributes)}
      >
        ${Vt(_t(this.option),e=>f`<intellij-option value="${e}">${e}</intellij-option>`)}
      </intellij-combobox>
    `}updated(){let e=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",t=this.renderRoot.querySelector(e);t&&(t.filterOptions=function(){(!this.autocomplete||this.autocomplete===Rr.none)&&(this.filter="");let o=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().includes(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!o&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))})}handleInput(e){let t=e.target;console.log(e,t)}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",o=this.renderRoot.querySelector(t);o&&customElements.whenDefined(t).then(()=>{o.value=e?`${e}`:""})}};fn=x([V("autocomplete-field")],fn);var So=class extends T{constructor(){super();this.appearance="primary";new Pe(this,{context:_o,callback:t=>{this.editor=t},subscribe:!1})}render(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return this.appearance==="icon"?f`
        <vscode-button appearance="icon">
          <icon-element
            class="flex items-start"
            icon="${this.text}"
          ></icon-element>
        </vscode-button>
      `:f`<vscode-button appearance="${this.appearance}"
      >${this.text}</vscode-button
    >`}renderIntellij(){return this.appearance==="icon"?f`<div class="hover:bg-fieldNavHoverBackground rounded p-1">
        <icon-element icon="${this.text}"></icon-element>
      </div>`:f`<button
      class="${Fe} ${this.appearance==="primary"?"bg-primary focus:!ring-offset-1 focus:!ring-offset-background":'border !border-fieldBorder focus:!border-focusBorder"}'} whitespace-nowrap rounded px-4 py-1"
    >
      ${this.text}
    </button>`}createRenderRoot(){return this}};x([M()],So.prototype,"text",2),x([M()],So.prototype,"appearance",2),So=x([V("button-element")],So);var Mr=class extends Oe(T){constructor(){super(...arguments);this.showMore=!1}toggleShowMore(){this.showMore=!this.showMore}render(){let{optionsWithMetadata:t,numOfImportantOptions:o,numOfOtherOptions:i}=Mf(this.options,this.searchValue),s=this.showMore||!!this.searchValue||o===0,n=!!this.searchValue||i===0||o===0;return f`
      <div class="flex h-full w-full">
        <div
          class="border-separator ${this.editor==="intellij"?"hidden md:block":"max-sm:hidden md:w-64"} fixed h-full w-52 overflow-y-auto border-r-2  p-6"
        >
          ${this.renderOptionNav(t,s)}
        </div>
        <div
          class="${this.editor==="intellij"?"md:ml-52 md:p-6":"sm:ml-52 sm:p-6 md:ml-64"} w-full pt-6"
        >
          ${this.renderOptionsWithDivider(t,s,n)}
        </div>
      </div>
    `}renderOptionNav(t,o){return f`
      <ul>
        ${t.map(i=>{let s=this.searchValue&&!i.isInSearchResults,n=!o&&!i.isImportant;return f`<field-nav-item
            class="${s?"hidden":""}"
            .option="${i.option}"
            .greyedOut="${n}"
            @click=${a=>this.handleTreeClickEvent(a,n)}
          ></field-nav-item>`})}
      </ul>
    `}renderOptionsWithDivider(t,o,i){let s=(l,c=!1)=>{let d=Lf(l.option);return f` <div
        class=" ${c?"hidden":""} mb-4"
        id="option-${l.option.name}"
      >
        ${d}
      </div>`};if(this.searchValue)return f`<div>
        ${t.map(l=>s(l,!l.isInSearchResults))}
      </div>`;let n=t.filter(l=>l.isImportant),a=t.filter(l=>!l.isImportant);return f`
      ${n.map(l=>s(l,!1))}
      <show-more-divider
        .showMore=${this.showMore}
        @show-more=${this.toggleShowMore}
        class="${i?"hidden":""}"
      ></show-more-divider>
      ${a.map(l=>s(l,!o))}
    `}firstUpdated(){this.updateComplete.then(()=>{let t=Array.from(this.renderRoot.querySelectorAll("*")).find(o=>o.id.toLowerCase().endsWith("-field")&&o instanceof HTMLElement);t&&t.focus()})}handleTreeClickEvent(t,o){let i=t.target.innerText;o&&(this.showMore=!0),setTimeout(()=>{let s=this.querySelector(`#option-${i}`);if(!s)return;s.scrollIntoView({behavior:"smooth",block:"start"});let n=this.querySelector(`#${i}-field`);if(!n)return;let a=new IntersectionObserver(l=>{l[0].isIntersecting&&(n.focus(),a.disconnect())},{rootMargin:"0px",threshold:1});a.observe(s)},100)}createRenderRoot(){return this}};x([M()],Mr.prototype,"options",2),x([M()],Mr.prototype,"searchValue",2),x([re()],Mr.prototype,"showMore",2),Mr=x([V("field-list")],Mr);var Lf=r=>r.type==="boolean"?f` <checkbox-field .option=${r}></checkbox-field>`:r.type==="array"?r.items?f` <multiselect-field .option=${r}></multiselect-field> `:f` <array-field .option=${r}></array-field>`:r.items?_t(r).length>10?f`<autocomplete-field .option=${r}></autocomplete-field>`:f` <select-field .option=${r}></select-field>`:f` <input-field .option=${r}></input-field>`,Mf=(r,e)=>{let t=r.map(o=>({option:o,isInSearchResults:!e||o.name.includes(e),isImportant:o.isRequired||o["x-priority"]==="important"}));return{optionsWithMetadata:t,numOfImportantOptions:t.filter(o=>o.isImportant).length,numOfOtherOptions:t.filter(o=>!o.isImportant).length}};var mn=class extends Oe(T){render(){return this.editor==="intellij"?f`
        <div class="relative inline-block w-full">
          <input
            class="${rr} ${Fe} text-foreground w-full rounded px-2 py-2 pl-8 text-black"
            type="text"
            placeholder="Search..."
            @input="${this.handleInput}"
            id="search-bar"
          />
          <icon-element
            icon="search"
            class="absolute left-2 top-[0.7rem]"
          ></icon-element>
          <div class="absolute right-2 top-2.5">
            <kbd
              class="border-fieldBorder bg-selectFieldBackground whitespace-nowrap rounded-md border p-1 shadow"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </div>
      `:f`
        <vscode-text-field
          class="w-full"
          placeholder="Search..."
          type="text"
          @input="${this.handleInput}"
          id="search-bar"
        >
          <span slot="start">
            <icon-element icon="search"></icon-element>
          </span>
          <div slot="end">
            <kbd class="bg-background whitespace-nowrap"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </vscode-text-field>
      `}getKeyboardShortcutSymbol(){return window.navigator.platform.toLowerCase().includes("mac")?"\u2318":"Ctrl "}createRenderRoot(){return this}handleInput(e){let t=new CustomEvent("search-input",{detail:e.target.value});this.dispatchEvent(t)}};mn=x([V("search-bar")],mn);var Br=class extends Oe(T){constructor(){super(...arguments);this.message="";this.type="warning";this.dismissed=!1}dismiss(){this.dismissed=!0}render(){let t=this.type==="error"?"bg-bannerError":"bg-bannerWarning";return this.dismissed?f``:f`
      <div
        class="${t} text-bannerText mt-2 flex w-full flex-row rounded p-2 text-left opacity-80"
      >
        <p class="grow">${this.message}</p>
        <div @click="${this.dismiss}" class="px-2 py-1">
          ${this.editor==="intellij"?f`<icon-element
                icon="close"
                color="${getComputedStyle(this).getPropertyValue("--banner-text-color")}"
              ></icon-element>`:f`<icon-element icon="close"></icon-element>`}
        </div>
      </div>
    `}createRenderRoot(){return this}};x([M()],Br.prototype,"message",2),x([M()],Br.prototype,"type",2),x([re()],Br.prototype,"dismissed",2),Br=x([V("banner-element")],Br);var ko=class extends Oe(T){constructor(){super(...arguments);this.color=""}render(){return this.editor==="intellij"?f`<img
        src="./icons/${this.icon}.svg"
        class="h-[1.25rem]"
        @load="${this.applyColorToSVG}"
      ></img>`:f`<span
        class="codicon codicon-${this.icon}"
        style="text-align: center; font-size: 0.9rem; color: ${this.color}"
      ></span>`}async applyColorToSVG(){if(!this.color)return;let o=await(await fetch(`./icons/${this.icon}.svg`)).text(),s=new DOMParser().parseFromString(o,"image/svg+xml");s.querySelectorAll("path").forEach(l=>{l.setAttribute("fill",this.color),l.setAttribute("stroke",this.color)});let a=this.querySelector("img");a&&a.remove(),s.documentElement.classList.add("h-[1.25rem]"),this.appendChild(s.documentElement)}createRenderRoot(){return this}};x([M()],ko.prototype,"icon",2),x([M()],ko.prototype,"color",2),ko=x([V("icon-element")],ko);var Oo=class extends nn(T){constructor(){super(...arguments);this.greyedOut=!1}render(){return f`
      <li
        data-cy="field-nav-item-${this.option.name}"
        @click="${this.handleTreeClickEvent}"
        class="${this.shouldRenderError()?"text-error":this.shouldRenderChanged()?"text-primary":this.greyedOut?"text-gray-500":"text-foreground"} hover:bg-fieldNavHoverBackground  cursor-pointer overflow-hidden 
          text-ellipsis"
      >
        ${this.option.name}
      </li>
    `}handleTreeClickEvent(){let t=new CustomEvent("click",{detail:this.option.name});this.dispatchEvent(t)}createRenderRoot(){return this}};x([M()],Oo.prototype,"option",2),x([M()],Oo.prototype,"greyedOut",2),Oo=x([V("field-nav-item")],Oo);var yi=class extends Oe(T){constructor(){super(...arguments);this.showMore=!1}render(){return f`
      <div
        class="flex flex-row items-center space-x-4 pl-4"
        @click=${this.toggleShowMore}
        data-cy="show-more"
      >
        <hr
          class="grow h-0 ${this.editor==="intellij"?"border-separator":""}"
          style="${this.editor==="vscode"?"border-top: calc(var(--border-width) * 1px) solid var(--divider-background);":""}"
        />

        <div tabindex="0" aria-role="button" class="flex flex-row gap-2 leading-none focus:ring-1 focus:ring-focusBorder focus:outline-none" @keydown="${this.handleKeyEvent}">${this.showMore?"Show less options":"Show all options"} <icon-element icon="${this.showMore?"chevron-up":"chevron-down"}" class="self-center"></div>
      </div>
    `}handleKeyEvent(t){(t.key==="Enter"||t.key===" ")&&this.toggleShowMore(),t.key==="Tab"&&!t.shiftKey&&!this.showMore&&this.toggleShowMore()}toggleShowMore(){this.showMore=!this.showMore,this.dispatchEvent(new CustomEvent("show-more",{detail:this.showMore}))}createRenderRoot(){return this}};x([M()],yi.prototype,"showMore",2),yi=x([V("show-more-divider")],yi);var Ao=class extends Oe(T){render(){return f`
      <div
        tabindex="0"
        class="bg-badgeBackground text-badgeForeground focus:ring-focusBorder ${this.editorSpecificStyles()} flex flex-row gap-1 rounded p-2 pb-0 focus:outline-none"
        @keydown="${this.handleEnterKeyRemove}"
        data-cy="${this.fieldId}-item"
      >
        <p class="leading-none">${this.text}</p>
        <icon-element
          @click="${this.handleClickRemove}"
          icon="close"
          data-cy="${this.fieldId}-remove-button"
        ></icon-element>
      </div>
    `}editorSpecificStyles(){return this.editor==="intellij"?"border border-fieldBorder focus:ring-2":"focus:ring-1 focus:!ring-offset-1 focus:!ring-offset-background"}handleEnterKeyRemove(t){(t.key==="Enter"||t.key===" ")&&this.dispatchEvent(new CustomEvent("remove"))}handleClickRemove(){this.dispatchEvent(new CustomEvent("remove"))}createRenderRoot(){return this}};x([M()],Ao.prototype,"text",2),x([M()],Ao.prototype,"fieldId",2),Ao=x([V("badge-element")],Ao);var Eo=class extends T{constructor(){super();this.content="";this.isPopoverVisible=!1;this.addEventListener("mouseover",this.showTooltip),this.addEventListener("mouseout",this.hideTooltip)}showTooltip(){this.isPopoverVisible=!0}hideTooltip(){this.isPopoverVisible=!1}render(){return f`
      <div class="relative inline-block">
        <slot></slot>
        <div
          class="${this.isPopoverVisible?"block":"hidden"}  tooltip-content border-fieldBorder bg-badgeBackground text-foreground absolute left-0 z-10 w-max max-w-md whitespace-normal border p-1 shadow-md"
          data-cy="popover-content"
        >
          ${this.content}
        </div>
      </div>
    `}createRenderRoot(){return this}};x([M({type:String})],Eo.prototype,"content",2),x([re()],Eo.prototype,"isPopoverVisible",2),Eo=x([V("popover-element")],Eo);Gu().register(sn({prefix:"vscode",styles:Zd,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),sn({prefix:"intellij",styles:Xu,indicator:`<img
        src="./icons/chevron-down.svg"
        class="h-[1.25rem]"
      ></img>`}),Rl({prefix:"intellij",styles:Yu}));qc().register(va(),Oa(),ya(),Ca(),Sa());var wi=class extends T{constructor(){super();this.searchValue="";this.icc=new Bi(this),this.formValuesService=new Li(this),window.addEventListener("keydown",t=>this.handleGlobalKeyboardShortcuts(t))}render(){let t=this.icc.generatorSchema?.options;return f` <div
      class="text-foreground m-auto flex h-screen max-w-screen-xl flex-col p-6"
    >
      <div
        class="bg-background border-separator sticky top-0 z-50 w-full border-b-2 pb-6"
      >
        ${this.renderHeader()}
      </div>
      <div class="grow overflow-auto">
        ${!t||t.length===0?f`<p>No options</p>`:f` <field-list
              class="h-full"
              .options="${t}"
              .searchValue="${this.searchValue}"
            ></field-list>`}
      </div>
    </div>`}renderHeader(){let t=this.icc.generatorSchema?.collectionName?.includes("@nx")||this.icc.generatorSchema?.collectionName?.includes("@nrwl"),o=`https://nx.dev/packages/${this.icc.generatorSchema?.collectionName?.replace("@nrwl/","")?.replace("@nx/","")}/generators/${this.icc.generatorSchema?.generatorName}`;return f`
      <div>
        <header class="flex items-center justify-between">
          <div class="flex flex-wrap items-end gap-2">
            <h1 class="text-xl font-bold leading-none" data-cy="header-text">
              nx generate ${Do(this.icc.generatorSchema)}
            </h1>
            ${ue(t&&this.icc.editor==="vscode",()=>f`
                  <a
                    href="${o}"
                    target="_blank"
                    class="focus:ring-focusBorder pb-px text-sm leading-none underline focus:outline-none focus:ring-1 max-sm:hidden"
                    >View full details
                  </a>
                `)}
          </div>

          <div class="sm: flex shrink-0">
            <button-element
              class="flex items-center py-2 pl-3 max-sm:hidden"
              appearance="icon"
              text="copy"
              title="Copy generate command to clipboard"
              @click="${()=>this.formValuesService.copyCommandToClipboard()}"
              id="copy-button"
            >
            </button-element>
            ${ue(!this.icc.configuration?.enableTaskExecutionDryRunOnChange,()=>f`<button-element
                    class="py-2 pl-3 sm:hidden"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="debug"
                    appearance="icon"
                    title="Dry Run"
                  >
                  </button-element>
                  <button-element
                    class="hidden py-2 pl-3 sm:block"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="Dry Run"
                    appearance="secondary"
                  >
                  </button-element> `)}

            <button-element
              class="py-2 pl-3"
              @click="${()=>this.formValuesService.runGenerator()}"
              text="Generate"
              data-cy="generate-button"
            >
            </button-element>
          </div>
        </header>
        ${ue(this.icc.banner,()=>f` <banner-element
              message="${this.icc.banner?.message}"
              type="${this.icc.banner?.type}"
            ></banner-element>`)}
        <div class="mt-5">
          <search-bar
            @search-input="${this.handleSearchValueChange}"
          ></search-bar>
        </div>
      </div>
    `}handleSearchValueChange(t){this.searchValue=t.detail}handleGlobalKeyboardShortcuts(t){if(t.key==="Enter"&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),t.shiftKey?this.formValuesService.runGenerator(!0):this.formValuesService.runGenerator()),t.key==="s"&&(t.metaKey||t.ctrlKey)){t.preventDefault();let o=this.renderRoot.querySelector('[id="search-bar"]');o&&o.focus()}}createRenderRoot(){return this}};x([re()],wi.prototype,"searchValue",2),wi=x([V("root-element")],wi);export{wi as Root};
/*! Bundled license information:

@lit/reactive-element/node/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

lit-html/node/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
