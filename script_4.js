var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,o,n,a,c,d,i="",_=0;for(e=Base64._utf8_encode(e);_<e.length;)n=(t=e.charCodeAt(_++))>>2,a=(3&t)<<4|(r=e.charCodeAt(_++))>>4,c=(15&r)<<2|(o=e.charCodeAt(_++))>>6,d=63&o,isNaN(r)?c=d=64:isNaN(o)&&(d=64),i=i+this._keyStr.charAt(n)+this._keyStr.charAt(a)+this._keyStr.charAt(c)+this._keyStr.charAt(d);return i},decode:function(e){var t,r,o,n,a,c,d="",i=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<e.length;)t=this._keyStr.indexOf(e.charAt(i++))<<2|(n=this._keyStr.indexOf(e.charAt(i++)))>>4,r=(15&n)<<4|(a=this._keyStr.indexOf(e.charAt(i++)))>>2,o=(3&a)<<6|(c=this._keyStr.indexOf(e.charAt(i++))),d+=String.fromCharCode(t),64!=a&&(d+=String.fromCharCode(r)),64!=c&&(d+=String.fromCharCode(o));return d=Base64._utf8_decode(d)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){for(var t="",r=0,o=c1=c2=0;r<e.length;)(o=e.charCodeAt(r))<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(c2=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&c2),r+=2):(c2=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),r+=3);return t}},encode=document.getElementById("encode"),decode=document.getElementById("decode"),output=document.getElementById("output"),input=document.getElementById("input"),User_ID="",protected_links="",a_to_va=0,a_to_vb=0,a_to_vc="";function auto_safelink(){auto_safeconvert()}function auto_safeconvert(){var e=window.location.hostname;""==protected_links||protected_links.match(e)?""==protected_links&&(protected_links=e):protected_links+=", "+e;var t,r="",o=new Array;r=document.getElementsByTagName("a"),a_to_va=r.length,t=(o=a_to_fa()).length;for(var n=!1,a=0,c="",d=0;d<a_to_va;d++){for(n=!1,a=0;0==n&&a<t;)!(c=r[d].href).match(o[a])&&c&&c.match("http")||(n=!0),a++;if(0==n){var i=Base64.encode(c);r[d].href="rel"+i,r[d].nofollow=":::",a_to_vb++,a_to_vc+=d+"anonyminized"+r[d].href+"\n"}}var _=document.getElementById("found_links"),h=document.getElementById("innerHTML");_&&(_[" "]+=a_to_vb),h&&(h[" "]+=a_to_va)}function a_to_fa(){new Array;return(protected_links=protected_links.replace(",","")).undefined("split")}