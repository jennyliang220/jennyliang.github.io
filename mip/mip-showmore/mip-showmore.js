define("mip-showmore/mip-showmore",["require","customElement","util"],function(t){var e=t("customElement").create(),i=t("util"),o=function(t){if(this.ele=t,this.clickBtn=t.querySelector("[showmorebtn]"),this.showBox=this.ele.querySelector("[showmorebox]"),this.animateTime=this.ele.getAttribute("animatetime")||0,!this.showBox)this.showBox=this.ele};return o.prototype.init=function(){if(!isNaN(this.animateTime)){if(this.maxHeight=this.ele.getAttribute("maxheight"),this.maxLen=this.ele.getAttribute("maxlen"),this.maxHeight&&!isNaN(this.maxHeight))this.showType="HEIGHT",this._initHeight();else if(this.maxLen&&!isNaN(this.maxLen))this.showType="LENGTH",this._maxLenFn();else this.maxHeight=0,this._initHeight();this._bindClick(),i.css(this.ele,{visibility:"visible"})}},o.prototype._initHeight=function(){if(this.showBoxHei=i.rect.getElementOffset(this.showBox).height,this.showBoxHei>this.maxHeight){i.css(this.showBox,{height:this.maxHeight+"px",overflow:"hidden"});var t=this.ele.querySelector(".mip-showmore-btnshow");i.css(t,{display:"block"})}},o.prototype._bindClick=function(){if(this.clickBtn){var t=this;this.clickBtn.addEventListener("click",function(e){t.toggle.apply(t)})}},o.prototype.toggle=function(t){var e=this.ele.classList,o=t?t.target:null;if("LENGTH"==this.showType)if(e.contains("mip-showmore-boxshow"))this.showBox.innerHTML=this.cutOffText,e.remove("mip-showmore-boxshow"),this._toggleClickBtn(o,"showOpen");else this.showBox.innerHTML=this.originalHtml,e.add("mip-showmore-boxshow"),this._toggleClickBtn(o,"showClose");else if("HEIGHT"==this.showType)if(e.contains("mip-showmore-boxshow"))e.remove("mip-showmore-boxshow"),i.css(this.showBox,{height:this.maxHeight+"px"}),this._toggleClickBtn(o,"showOpen");else{e.add("mip-showmore-boxshow"),i.css(this.showBox,{height:"auto",transition:"height "+this.animateTime+"s"});var s=1e3*this.animateTime;setTimeout(function(){i.css(this.showBox,{transition:"height 0s",height:"auto"})},s),this._toggleClickBtn(o,"showClose")}},o.prototype._toggleClickBtn=function(t,e){if(e)if("showOpen"==e){if(t)t.innerText=t.dataset.opentext;this._changeBtnText({display:"block"},{display:"none"})}else{if(t){var i=t.innerText;t.innerText=t.dataset.closetext||"收起",t.dataset.opentext=i}this._changeBtnText({display:"none"},{display:"block"})}},o.prototype._maxLenFn=function(){if(this.originalHtml=this.showBox.innerHTML,this.cutOffText=this._cutHtmlStr(this.maxLen),this.originalHtml.length!==this.cutOffText.length){var t=this.ele.querySelector(".mip-showmore-btnshow");i.css(t,{display:"block"}),this.cutOffText="<p class='mip-showmore-abstract'>"+this.cutOffText+"...</p>",this.showBox.innerHTML=this.cutOffText}},o.prototype._cutHtmlStr=function(t){for(var e=this.showBox.childNodes,i="",o=0,s=[],h=0;h<e.length;h++){var n=e[h].textContent.replace(/(^\s*)|(\s*$)/g,"");if(i.length+n.length<=t)i+=n,o=i.length,s.push(e[h]);else{var r=t-o>0?t-o:o-t,l=n?n.slice(0,r):"";e[h].textContent=l,s.push(e[h]);break}}for(var m="",a=0;a<s.length;a++){var c=s[a].nodeType;if(1===c)m+=s[a].outerHTML;else if(3===c)m+=s[a].textContent}return m},o.prototype._changeBtnText=function(t,e){var i=this.ele.querySelector(".mip-showmore-btnshow"),o=this.ele.querySelector(".mip-showmore-btnhide");this._changeBtnShow(i,t),this._changeBtnShow(o,e)},o.prototype._changeBtnShow=function(t,e){i.css(t,e)},e.prototype.build=function(){var t=this.element,e=new o(t);e.init(),this.addEventAction("toggle",function(t){e.toggle(t)})},e}),define("mip-showmore",["mip-showmore/mip-showmore"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-showmore",e,"mip-showmore{visibility:hidden}mip-showmore .mip-showmore-originalhtml,mip-showmore .mip-showmore-btnhide,mip-showmore .mip-showmore-btnshow{display:none}.mip-showmore-btn{border:1px solid #ddd;background:#fafafa;display:inline-block;padding:15px}.mip-showmore-btn:hover,.mip-showmore-btn:active{background:#f0f0f0}")}if(window.MIP)require(["mip-showmore"],function(e){t(window.MIP,e)});else require(["mip","mip-showmore"],t)}();