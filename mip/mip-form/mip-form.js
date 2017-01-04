define("mip-form/mip-form",["require","zepto","customElement","util"],function(t){function e(t){var e=t.querySelector('input[type="password"],input[type="file"]');if(e)return console.error("禁止使用password与file输入框"),!1;else return!0}function i(){var t=this.element,e=o(t),i=t.getAttribute("url"),n=t.getAttribute("method"),a=o(["<form action="+i+" method="+n+' target="_blank">',"</form>"].join(""));a.append(e.html()),e.html(a),e.find("form").on("submit",function(e){e.preventDefault(),r.call(t)}),t.addEventListener("keydown",function(t){if(13===t.keyCode)t.preventDefault(),r.call(this)},!1)}function n(t,e){return"must"===t?!(""===e):s[t.toUpperCase()].test(e)}function r(){var t=this,e=!1,i=o(t).find('input[type="text"],input[type="input"]'),r="get"===t.getAttribute("method"),a=t.getAttribute("url"),s=a.match("http://"),u="";if(i.map(function(i,r){var a,s=r.getAttribute("validatetype"),l=r.getAttribute("validatetarget"),d=r.getAttribute("validatereg"),f=r.value;if(u+="&"+r.name+"="+r.value,s){if(d)a=""===f?!1:new RegExp(d).test(f);else a=n(s,f);p.css(o(t).find('div[target="'+l+'"]'),{display:!a?"block":"none"}),e=!a?!0:e}}),!e)if(window.parent!==window&&s&&r){var l="";if(a.match("\\?"))l=a+u;else u=u.substring(1),l=a+"?"+u;var d={event:"mibm-jumplink",data:{url:l}};window.parent.postMessage(d,"*")}else t.getElementsByTagName("form")[0].submit()}var o=t("zepto"),a=t("customElement").create(),p=t("util"),s={EMAIL:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,PHONE:/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|17[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,IDCAR:/^\d{15}|\d{18}$/};return a.prototype.build=function(){function t(t){var e=t.target.getAttribute("name");a.parentNode.querySelector('input[name="'+e+'"]').value="",p.css(a,{display:"none"}),t.preventDefault(),t.stopPropagation()}var n=this.element,r=n.hasAttribute("clear");if(this.cross=null,e(n))i.call(this);if(r){var o=n.querySelectorAll("input[type=text],input[type=input]");if(!o.length)return;var a=document.createElement("div");a.id="mip-form-cross",this.cross=a;for(var s=0;s<o.length;s++){var u=o[s].offsetHeight;o[s].onfocus=function(){var t=this;if(a.setAttribute("name",t.getAttribute("name")),p.css(a,{top:t.offsetTop+(u-16)/2-4+"px"}),t.parentNode.appendChild(a),""!==t.value)p.css(a,{display:"block"});else p.css(a,{display:"none"}),t.oninput=function(){p.css(a,{display:""!==t.value?"block":"none"})}},o[s].onblur=function(){p.css(a,{display:"none"})}}a.addEventListener("touchstart",t),a.addEventListener("click",t)}},a}),define("mip-form",["mip-form/mip-form"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-form",e,"#mip-form-cross{position:absolute;display:block;padding:4px;width:16px;height:16px;right:2%;background:url(//m.baidu.com/static/search/clear.png) no-repeat center;z-index:100;background-size:100% 100%;background-origin:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0.4);tap-highlight-color:rgba(0,0,0,0.4)}form{position:relative}input{border:1px solid #f1f1f1;padding:6px 10% 6px 3%;margin:10px auto;display:block;width:100%;box-sizing:border-box;resize:none;font-size:16px}form div{display:none;color:#ec1f5c;font-size:12px;text-align:left;padding:0 10% 0 3%}form input[type='submit']{border:1px solid #f1f1f1;border-radius:5px;color:#333;background-color:#d8d7d7}")}if(window.MIP)require(["mip-form"],function(e){t(window.MIP,e)});else require(["mip","mip-form"],t)}();