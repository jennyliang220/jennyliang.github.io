define("mip-stats-baidu/mip-stats-baidu",["require","zepto","viewer","customElement"],function(t){function e(){for(var t=document.querySelectorAll("*[data-stats-baidu-obj]"),e=0;e<t.length;e++){var i=t[e].getAttribute("data-stats-baidu-obj");if(!i)return;try{i=JSON.parse(decodeURIComponent(i))}catch(t){return void console.warn("事件追踪data-stats-baidu-obj数据不正确")}var r=i.type;if(!i.data)return;var s=a(i.data);if("click"!==r&&"mouseup"!==r&&"load"!==r)return;if(n(t[e]).hasClass("mip-stats-eventload"))return;if(n(t[e]).addClass("mip-stats-eventload"),"load"===r)_hmt.push(s);else t[e].addEventListener(r,function(t){var e=this.getAttribute("data-stats-baidu-obj");if(e){var i;try{i=JSON.parse(decodeURIComponent(e))}catch(t){return void console.warn("事件追踪data-stats-baidu-obj数据不正确")}if(i.data){var r=a(i.data);_hmt.push(r)}}},!1)}}function a(t){if(t){for(var e=t.slice(1,t.length-1).split(","),a=[],i=0;i<e.length;i++){var r=e[i].replace(/(^\s*)|(\s*$)/g,"").replace(/\'/g,"");if("false"===r||"true"===r)r=Boolean(r);a.push(r)}return a}}function i(){var t="",e=document.referrer,a=MIP.hash.get("word")||"",i=MIP.hash.get("eqid")||"";if((a||i)&&e){var n={};if(i)n.url="",n.eqid=i;else n.word=a;t=r(e,n),_hmt.push(["_setReferrerOverride",t])}}function r(t,e){var a="",i=t.indexOf("?")<0?"?":"&",r="";for(var n in e)r+="&"+n+"="+e[n];if(r=r.slice(1),t.indexOf("#")<0)a=t+i+r;else a=t.replace("#",i+r+"#");return a}var n=t("zepto"),s=t("viewer"),o=t("customElement").create();return o.prototype.createdCallback=function(){var t=this.element,r=t.getAttribute("token"),o=t.getAttribute("setconfig");if(r){if(window._hmt=window._hmt||[],_hmt.push(["_setAccount",r]),s.isIframed)i();if(o){var u=a(decodeURIComponent(o));_hmt.push(u)}var d=document.createElement("script");d.src="//hm.baidu.com/hm.js?"+r,n(t).append(d),d.onload=function(){e()}}},o}),define("mip-stats-baidu",["mip-stats-baidu/mip-stats-baidu"],function(t){return t}),function(){function t(t,e){t.registerMipElement("mip-stats-baidu",e)}if(window.MIP)require(["mip-stats-baidu"],function(e){t(window.MIP,e)});else require(["mip","mip-stats-baidu"],t)}();