"use strict";function updateSplit(){var t=$("#preview0"),e=$("#preview1");if(t.length||e.length){var i=999999999.2,a=999999999.2,n=[];t.width()&&(n.push(t),i=Math.min(t.width(),i),a=Math.min(t.height(),a)),e.width()&&(n.push(e),i=Math.min(e.width(),i),a=Math.min(e.height(),a));var r=parseInt($("input[name=folds]").val()),h=document.getElementById("output");h.width=2*i,h.height=a;for(var d=h.getContext("2d"),u=i/r,p=0;r>=p;p++)for(var l=u*p,g=0;g<n.length;g++){var o=n[g][0],f=u*(p*n.length+g);d.drawImage(o,l,0,u,a,f,0,u,a)}}}function readURL(t,e){if(t.files&&t.files[0]){var i=new FileReader;i.onload=function(t){$(e).attr("src",t.target.result),updateSplit()},i.readAsDataURL(t.files[0])}}var $=window.jQuery;$("input[name=image0]").change(function(){readURL(this,"#preview0")}),$("input[name=image1]").change(function(){readURL(this,"#preview1")}),$("input[name=folds]").change(function(){updateSplit()});