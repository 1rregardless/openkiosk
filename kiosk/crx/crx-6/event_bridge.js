(function(){define(function(require){var t;return t=require("eventemitter2"),class extends t{constructor(){super(),this.array=[],window.addEventListener("messageBridge:connected",()=>{var t,e,r,s,n;for(this.port=window.port,n=[],t=0,e=(s=this.array.splice(0)).length;t<e;t++)r=s[t],n.push(this.port.postMessage(r));return n})}send(t){return null!=this.port?this.port.postMessage(t):this.array.push(t)}}})}).call(this);