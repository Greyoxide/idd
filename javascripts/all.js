(function(){$(document).ready(function(){return $("#burger").click(function(){}),$(this).toggleClass("active"),$("#menu").toggleClass("active")})}).call(this),function(){$(document).ready(function(){return $("#hero #typer").last().typed({strings:["Drinking wine.","Enjoying the sunset.","Relaxing with your family.","The perfect barbeque.","You."],typeSpeed:0,startDelay:800,backDelay:1500,showCursor:!1})})}.call(this),function(){$(document).ready(function(){var t;if($(".panel").length)return $(".tabs").empty(),$(".tabs").append("<div class='inner'><div class='tab-group'></div></div>"),$(".panel").each(function(){var t;return t=this.getAttribute("id"),$(".tab-group").append('<a data-turbolinks="false" href=#'+t+'_ class="tab"><span>'+t.charAt(0).toUpperCase()+t.slice(1)+"</span></a>")}),window.location.hash?($(".tab").removeClass("active"),t=window.location.hash.replace("_",""),$(t).addClass("active"),$('a[href="'+window.location.hash+'"]').addClass("active")):($(".tab-group").each(function(){return $(this).children(".tab").first().addClass("active")}),$(".panels").each(function(){return $(this).children(".panel").first().addClass("active")})),$(".tab").click(function(){var t;return t=$(this).attr("href").replace("_",""),$(".panel").removeClass("active"),$(t).addClass("active"),$(".tab.active").removeClass("active"),$(this).addClass("active")})})}.call(this),function(t){"use strict";var s=function(s,e){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,e),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var s=this;if(this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());var e=this.stringsElement.children();t.each(e,function(e,i){s.strings.push(t(i).html())})}this.init()},typewrite:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var n=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],n+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+n)}if("html"===i.contentType){var a=t.substr(s).charAt(0);if("<"===a||"&"===a){var o="",h="";for(h="<"===a?">":";";t.substr(s+1).charAt(0)!==h&&(o+=t.substr(s).charAt(0),s++,!(s+1>t.length)););s++,o+=h}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.attr(i.attr,e):i.isInput?i.el.val(e):"html"===i.contentType?i.el.html(e):i.el.text(e),s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===t.substr(s).charAt(0)){for(var e="";"<"!==t.substr(s-1).charAt(0)&&(e-=t.substr(s).charAt(0),s--,!(s<0)););s--,e+="<"}var r=t.substr(0,s);i.attr?i.el.attr(i.attr,r):i.isInput?i.el.val(r):"html"===i.contentType?i.el.html(r):i.el.text(r),s>i.stopNum?(s--,i.backspace(t,s)):s<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],s))},e)}},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.attr("id");this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},t.fn.typed=function(e){return this.each(function(){var i=t(this),r=i.data("typed"),n="object"==typeof e&&e;r&&r.reset(),i.data("typed",r=new s(this,n)),"string"==typeof e&&r[e]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);