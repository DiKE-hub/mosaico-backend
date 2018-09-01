!function r(a,l,s){function d(o,e){if(!l[o]){if(!a[o]){var t="function"==typeof require&&require;if(!e&&t)return t(o,!0);if(c)return c(o,!0);var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}var n=l[o]={exports:{}};a[o][0].call(n.exports,function(e){var t=a[o][1][e];return d(t||e)},n,n.exports,r,a,l,s)}return l[o].exports}for(var c="function"==typeof require&&require,e=0;e<s.length;e++)d(s[e]);return d}({1:[function(e,h,t){!function(){var i=window.CustomEvent;function n(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function o(e){e&&e.blur&&e!==document.body&&e.blur()}function d(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function t(o){if(this.dialog_=o,this.replacedStyleTop_=!1,this.openAsModal_=!1,o.hasAttribute("role")||o.setAttribute("role","dialog"),o.show=this.show.bind(this),o.showModal=this.showModal.bind(this),o.close=this.close.bind(this),"returnValue"in o||(o.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(o,{attributes:!0,attributeFilter:["open"]})}else{var i,n=!1,r=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),t=function(e){if(e.target===o){var t="DOMNodeRemoved";n|=e.type.substr(0,t.length)===t,window.clearTimeout(i),i=window.setTimeout(r,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(e){o.addEventListener(e,t)})}Object.defineProperty(o,"open",{set:this.setOpen.bind(this),get:o.hasAttribute.bind(o,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}i&&"object"!=typeof i||((i=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o}).prototype=window.Event.prototype),t.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),a.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&0<=this.dialog_.tabIndex&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}o(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!a.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var o=window.getComputedStyle(e),t=function(e,t){return!(void 0===o[e]||o[e]===t)};if(o.opacity<1||t("zIndex","auto")||t("transform","none")||t("mixBlendMode","normal")||t("filter","none")||t("perspective","none")||"isolate"===o.isolation||"fixed"===o.position||"touch"===o.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,a.needsCentering(this.dialog_)?(a.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new i("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var a={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],i=null;try{i=o.cssRules}catch(e){}if(i)for(var n=0;n<i.length;++n){var r=i[n],a=null;try{a=document.querySelectorAll(r.selectorText)}catch(e){}if(a&&d(a,e)){var l=r.style.getPropertyValue("top"),s=r.style.getPropertyValue("bottom");if(l&&"auto"!==l||s&&"auto"!==s)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!a.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new t(e)},registerDialog:function(e){e.showModal||a.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(e){var i=[];e.forEach(function(e){for(var t,o=0;t=e.removedNodes[o];++o)t instanceof Element&&("dialog"===t.localName&&i.push(t),i=i.concat(t.querySelectorAll("dialog")))}),i.length&&t(i)}))}};if(a.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},a.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},a.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},a.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=n(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;e=e.parentElement}return!1},a.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),o(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},a.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new i("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&o.dialog.dispatchEvent(t)&&o.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},a.DialogManager.prototype.checkDOM_=function(t){this.pendingDialogStack.slice().forEach(function(e){-1!==t.indexOf(e.dialog)?e.downgradeModal():e.maybeHideModal()})},a.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},a.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},a.dm=new a.DialogManager,a.formSubmitter=null,a.useValue=null,void 0===window.HTMLDialogElement){var e=document.createElement("form");if(e.setAttribute("method","dialog"),"dialog"!==e.method){var l=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(l){var s=l.get;l.get=function(){return r(this)?"dialog":s.call(this)};var c=l.set;l.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):c.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",l)}}document.addEventListener("click",function(e){if(a.formSubmitter=null,a.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&r(t.form)){if(!("submit"===t.type&&-1<["button","input"].indexOf(t.localName))){if("input"!==t.localName||"image"!==t.type)return;a.useValue=e.offsetX+","+e.offsetY}n(t)&&(a.formSubmitter=t)}}},!1);var u=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return u.call(this);var e=n(this);e&&e.close()},document.addEventListener("submit",function(e){var t=e.target;if(r(t)){e.preventDefault();var o=n(t);if(o){var i=a.formSubmitter;i&&i.form===t?o.close(a.useValue||i.value):o.close(),a.formSubmitter=null}}},!0)}a.forceRegisterDialog=a.forceRegisterDialog,a.registerDialog=a.registerDialog,"function"==typeof define&&"amd"in define?define(function(){return a}):"object"==typeof h&&"object"==typeof h.exports?h.exports=a:window.dialogPolyfill=a}()},{}],2:[function(e,t,o){"use strict";var i,n=e("dialog-polyfill"),r=(i=n)&&i.__esModule?i:{default:i};var a="en"===document.querySelector("html").getAttribute("lang"),l=window.requestAnimationFrame,s=document.querySelector(".js-dialog-confirm");s.showModal||r.default.registerDialog(s);var d=s.querySelector(".js-dialog-title"),c=s.querySelector(".js-dialog-description"),u=s.querySelector(".js-dialog-confirm");function h(){d.textContent="",c.textContent="",u.setAttribute("href","#");var e=u.cloneNode(!0);u.parentNode.replaceChild(e,u),u=e}function f(e){d.textContent=e.title,c.textContent=e.description,l(function(e){return s.showModal()})}s.querySelector(".js-dialog-cancel").addEventListener("click",function(e){return s.close()}),s.addEventListener("cancel",function(e){return h()}),s.addEventListener("close",function(e){return h()}),p(document.querySelectorAll(".js-delete-template"),"click",function(e){e.preventDefault();var t=e.currentTarget,o=t.dataset.name;u.setAttribute("href",t.getAttribute("href")),f({title:"Delete template",description:"are you sure you want to delete "+o+"?"})});var g=document.querySelector("#notification");function p(e,t,o){e.length&&[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(e)).forEach(function(e){return e.addEventListener(t,o)})}g&&window.setTimeout(function(){g.classList.remove("mdl-snackbar--active")},2700),p(document.querySelectorAll(".js-reset-user"),"click",function(e){e.preventDefault();var t=e.currentTarget,o=t.dataset.name;u.setAttribute("href",t.getAttribute("href")),f({title:a?"Reset":"Réinitialiser",description:a?"are you sure you want to reset "+o+" password?":"êtes vous sûr de vouloir réinitialiser le mot de passe de  "+o+" ?"})}),p(document.querySelectorAll(".js-user-activate"),"click",function(e){e.preventDefault();var t=e.currentTarget,o=t.dataset.name;u.setAttribute("href",t.getAttribute("href")),f({title:a?"Activate":"Activer",description:a?"are you sure you want to activate "+o+"?":"êtes vous sûr de vouloir activer "+o+" ?"})}),p(document.querySelectorAll(".js-user-deactivate"),"click",function(e){e.preventDefault();var t=e.currentTarget,o=t.dataset.name;u.setAttribute("href",t.getAttribute("href")),f({title:a?"Deactivate":"Désactiver",description:a?"are you sure you want to deactivate "+o+"?":"êtes vous sûr de vouloir désactiver "+o+" ?"})})},{"dialog-polyfill":1}]},{},[2]);