(function(E){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={F:!0},ea={};try{ea.__proto__=da;ca=ea.F;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba,ha=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.G=b.prototype},g=this||self,k=function(a){return"string"==typeof a},l=function(a){return"number"==typeof a},ja=function(){if(null===m)a:{var a=g.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ia.test(a)){m=a;break a}m=""}return m},ia=/^[\w+/_-]+[=]{0,2}$/,m=null,n=function(a){a=a.split(".");for(var b=g,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},ka=function(){},q=function(a){a.l=void 0;a.c=function(){return a.l?a.l:a.l=new a}},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},la="closure_uid_"+(1E9*Math.random()>>>0),ma=0,na=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},t=function(a,b){function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.H=function(d,e,f){for(var h=Array(arguments.length-2),p=2;p<arguments.length;p++)h[p-2]=arguments[p];return b.prototype[e].apply(d,h)}};var u=function(a,b){for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},oa=function(a,b){for(var c=a.length,d=[],e=0,f=k(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var p=f[h];b.call(void 0,p,h,a)&&(d[e++]=p)}return d},pa=function(a,b){for(var c=a.length,d=Array(c),e=k(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},qa=function(a,b){a:{for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]},ra=function(a,b){a:{for(var c=k(a)?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]};var sa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ta=function(a,b){return null!==a&&b in a};var v=function(){this.a="";this.g=ua};v.prototype.f=!0;v.prototype.b=function(){return this.a.toString()};var va=function(a){return a instanceof v&&a.constructor===v&&a.g===ua?a.a:"type_error:TrustedResourceUrl"},ua={};var wa=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},x=function(a,b){var c=0;a=wa(String(a)).split(".");b=wa(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=xa(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||xa(0==f[2].length,0==h[2].length)||xa(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c},xa=function(a,b){return a<b?-1:a>b?1:0};var y=function(){this.a="";this.g=ya};y.prototype.f=!0;y.prototype.b=function(){return this.a.toString()};var Aa=function(a){return a instanceof y&&a.constructor===y&&a.g===ya?a.a:"type_error:SafeUrl"},Ba=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ya={},Ca=function(a){var b=new y;b.a=a;return b};Ca("about:blank");var z;a:{var Da=g.navigator;if(Da){var Ea=Da.userAgent;if(Ea){z=Ea;break a}}z=""}var A=function(a){return-1!=z.indexOf(a)},Fa=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Ga=function(){return(A("Chrome")||A("CriOS"))&&!A("Edge")},Ia=function(){function a(e){e=qa(e,d);return c[e]||""}var b=z;if(A("Trident")||A("MSIE"))return Ha(b);b=Fa(b);var c={};u(b,function(e){c[e[0]]=e[1]});var d=na(ta,c);return A("Opera")?a(["Version","Opera"]):A("Edge")?a(["Edge"]):A("Edg/")?a(["Edg"]):Ga()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""},Ha=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var Ja=function(a,b){a.src=va(b);(b=ja())&&a.setAttribute("nonce",b)};var B=function(a){B[" "](a);return a};B[" "]=ka;var C=function(){},Ka="function"==typeof Uint8Array,F=function(a,b,c,d){a.a=null;b||(b=[]);a.I=void 0;a.f=-1;a.h=b;a:{if(b=a.h.length){--b;var e=a.h[b];if(!(null===e||"object"!=typeof e||"array"==r(e)||Ka&&e instanceof Uint8Array)){a.g=b-a.f;a.b=e;break a}}a.g=Number.MAX_VALUE}a.v={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.g?(e+=a.f,a.h[e]=a.h[e]||D):(La(a),a.b[e]=a.b[e]||D);if(d&&d.length)for(b=0;b<d.length;b++)Ma(a,d[b])},D=[],La=function(a){var b=a.g+a.f;a.h[b]||(a.b=a.h[b]={})},G=function(a,b){if(b<a.g){b+=a.f;var c=a.h[b];return c===D?a.h[b]=[]:c}if(a.b)return c=a.b[b],c===D?a.b[b]=[]:c},H=function(a,b,c){a=G(a,b);return null==a?c:a},Na=function(a,b){a=G(a,b);a=null==a?a:+a;return null==a?0:a},Oa=function(a,b,c){b<a.g?a.h[b+a.f]=c:(La(a),a.b[b]=c)},Ma=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=G(a,f);null!=h&&(c=f,d=h,Oa(a,f,void 0))}return c?(Oa(a,c,d),c):0},I=function(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=G(a,c);d&&(a.a[c]=new b(d))}return a.a[c]},J=function(a,b,c){a.a||(a.a={});if(!a.a[c]){for(var d=G(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.a[c]=e}b=a.a[c];b==D&&(b=a.a[c]=[]);return b},Pa=function(a,b,c){a.a||(a.a={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].h;a.a[b]=c;Oa(a,b,d)};var Ra=function(a){Qa();var b=new v;b.a=a;return b},Qa=ka;var Sa=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var Wa=function(a,b){if(!Ta()&&!Ua()){var c=Math.random();if(c<b)return c=Va(g),a[Math.floor(c*a.length)]}return null},Va=function(a){if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ua=sa(function(){return-1!=z.indexOf("Google Web Preview")||1E-4>Math.random()}),Ta=sa(function(){return-1!=z.indexOf("MSIE")}),Xa=/^(-?[0-9.]{1,30})$/,Ya=function(a,b){return Xa.test(a)&&(a=Number(a),!isNaN(a))?a:void 0==b?null:b},Za=function(){try{return ja()}catch(a){}};var $a=function(){var a=window,b=-1;try{a.localStorage&&(b=parseInt(a.localStorage.getItem("google_experiment_mod"),10))}catch(c){return null}if(0<=b&&1E3>b)return b;if(Ua())return null;b=Math.floor(1E3*Va(a));try{if(a.localStorage)return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){}return null};var ab=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var bb=null,cb=function(){if(null===bb){bb="";try{var a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);bb=b?b[1]:""}}catch(c){}}return bb};var K=function(a){F(this,a,db,eb)};t(K,C);var db=[2,8],eb=[[3,4,5],[6,7]];var fb=function(a){return null!=a?!a:a},gb=function(a,b){for(var c=!1,d=0;d<a.length;d++){var e=a[d].call();if(e==b)return e;null==e&&(c=!0)}if(!c)return!b},ib=function(a,b){var c=J(a,K,2);if(!c.length)return hb(a,b);a=H(a,1,0);if(1==a)return fb(ib(c[0],b));c=pa(c,function(d){return function(){return ib(d,b)}});switch(a){case 2:return gb(c,!1);case 3:return gb(c,!0)}},hb=function(a,b){var c=Ma(a,eb[0]);a:{switch(c){case 3:var d=H(a,3,0);break a;case 4:d=H(a,4,0);break a;case 5:d=H(a,5,0);break a}d=void 0}if(d&&(b=(b=b[c])&&b[d])){try{var e=b.apply(null,G(a,8))}catch(f){return}b=H(a,1,0);if(4==b)return!!e;d=null!=e;if(5==b)return d;a:{switch(c){case 4:a=Na(a,6);break a;case 5:a=H(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return e===a;if(9==b)return 0==x(e,a);if(d)switch(b){case 7:return e<a;case 8:return e>a;case 12:return(new RegExp(a)).test(e);case 10:return-1==x(e,a);case 11:return 1==x(e,a)}}}},jb=function(a,b){return!a||!(!b||!ib(a,b))};var lb=function(a){F(this,a,kb,null)};t(lb,C);var kb=[4];var L=function(a){F(this,a,mb,nb)};t(L,C);var ob=function(a){F(this,a,null,null)};t(ob,C);var mb=[5],nb=[[1,2,3,6]];var M=function(){var a={};this.a=(a[3]={},a[4]={},a[5]={},a)};q(M);var pb=function(a,b){switch(b){case 1:return H(a,1,0);case 2:return H(a,2,0);case 3:return H(a,3,0);case 6:return H(a,6,0);default:return null}},qb=function(a,b){if(!a)return null;switch(b){case 1:return a=G(a,1),a=null==a?a:!!a,null==a?!1:a;case 2:return Na(a,2);case 3:return H(a,3,"");case 6:return G(a,4);default:return null}},rb=sa(function(){var a="";try{a=g.top.location.hash}catch(c){a=g.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),ub=function(a,b,c){var d=rb();if(d[a]&&null!=d[a][b])return d[a][b];b=sb.c().a[a][b];if(!b)return c;b=new L(b);b=tb(b);a=qb(b,a);return null!=a?a:c},tb=function(a){var b=M.c().a;if(b){var c=ra(J(a,ob,5),function(d){return jb(I(d,K,1),b)});if(c)return I(c,lb,2)}return I(a,lb,4)},sb=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a)};q(sb);var vb=function(a,b){return ub(1,a,void 0===b?!1:b)},wb=function(a,b){return ub(2,a,void 0===b?0:b)},xb=function(a,b){return ub(3,a,void 0===b?"":b)},yb=function(a,b){b=void 0===b?[]:b;return ub(6,a,b)},zb=function(a){var b=sb.c().a;u(a,function(c){var d=Ma(c,nb[0]),e=pb(c,d);e&&(b[d][e]=c.h)})};var N=function(a){this.a=a},Ab=new N(1),Bb=new N(2),Cb=new N(3),Db=new N(4),Eb=new N(5),Fb=new N(6),Gb=new N(7),Hb=new N(8),Ib=new N(9),Jb=new N(10),Kb=new N(11),O=function(a,b,c){c.hasOwnProperty(a.a)||Object.defineProperty(c,String(a.a),{value:b})},Lb=function(a,b){return b[a.a]||function(){}},Mb=function(a){O(Eb,vb,a);O(Fb,wb,a);O(Gb,xb,a);O(Hb,yb,a)},Nb=function(a){O(Db,function(b){M.c().a=b},a);O(Ib,function(b,c){var d=M.c();d.a[3][b]||(d.a[3][b]=c)},a);O(Jb,function(b,c){var d=M.c();d.a[4][b]||(d.a[4][b]=c)},a);O(Kb,function(b,c){var d=M.c();d.a[5][b]||(d.a[5][b]=c)},a)},Ob=function(a){a.hasOwnProperty("init-done")||Object.defineProperty(a,"init-done",{value:!0})};var Qb=function(a){F(this,a,Pb,null)};t(Qb,C);var Pb=[2];Qb.prototype.getId=function(){return H(this,1,0)};var Sb=function(a){F(this,a,Rb,null)};t(Sb,C);var Rb=[2];var Ub=function(a){F(this,a,Tb,null)};t(Ub,C);var P=function(a){F(this,a,Vb,null)};t(P,C);var Tb=[1,2],Vb=[2];var Wb=function(a,b){var c=this,d=void 0===b?{}:b;b=void 0===d.s?!1:d.s;var e=void 0===d.w?{}:d.w;d=void 0===d.C?[]:d.C;this.b=a;this.v=b;this.f=e;this.g=d;this.a={};(a=cb())&&u(a.split(",")||[],function(f){(f=parseInt(f,10))&&(c.a[f]=!0)})},$b=function(a,b){var c=[],d=Xb(a,b);d&&(9!==b&&Yb(a,b),u(d,function(e){if(e=Zb(a,e)){var f=e.getId();c.push(f);a.g.push(f);(e=J(e,L,2))&&zb(e)}}));return c},Xb=function(a,b){return(a=qa(a.b,function(c){return H(c,1,0)==b}))&&J(a,Sb,2)},Yb=function(a,b){a.b=oa(a.b,function(c){return H(c,1,0)!=b})},Zb=function(a,b){var c=M.c().a;if(!jb(I(b,K,3),c))return null;var d=J(b,Qb,2),e=c?oa(d,function(h){return jb(I(h,K,3),c)}):d,f=e.length;if(!f)return null;d=H(b,4,0);b=f*H(b,1,0);if(!d)return ac(a,e,b/1E3);f=null!=a.f[d]?a.f[d]:1E3;if(0>=f)return null;e=ac(a,e,b/f);a.f[d]=e?0:f-b;return e},ac=function(a,b,c){var d=a.a,e=qa(b,function(f){return!!d[f.getId()]});return e?e:a.v?null:Wa(b,c)},bc=function(a,b){O(Ab,function(c){a.a[c]=!0},b);O(Bb,function(c){return $b(a,c)},b);O(Cb,function(){return a.g},b);Mb(b);Nb(b);Ob(b)};var Q=function(){this.a=function(){return!1};this.b=function(){return 0};this.f=function(){return""}},cc=function(a){var b=Q.c();b.a=Lb(Eb,a);b.b=Lb(Fb,a);b.f=Lb(Gb,a)};q(Q);var dc=function(a){var b=void 0===b?!1:b;return Q.c().a(a,b)},ec=function(a,b){b=void 0===b?"":b;return Q.c().f(a,b)};var fc=function(){};q(fc);var gc=sa(function(){var a=g.navigator&&g.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),hc=function(a,b,c,d,e){d=void 0===d?"":d;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=va(b).toString();else{if(b instanceof v)var p=va(b).toString();else{if(b instanceof y)var w=Aa(b);else{if(b instanceof y)var U=b;else b="object"==typeof b&&b.f?b.b():String(b),Ba.test(b)||(b="about:invalid#zClosurez"),U=Ca(b);w=Aa(U)}p=w}h=p}f.href=h}catch(za){return}d&&"preload"==c&&(f.as=d);e&&f.setAttribute("nonce",e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(za){}};var ic=/^\.google\.(com?\.)?[a-z]{2,3}$/,jc=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,kc=function(a){return ic.test(a)&&!jc.test(a)},lc=function(a){return a.replace(/[\W]/g,function(b){return"&#"+b.charCodeAt()+";"})},R=g,mc=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(g.location.hostname)];S[3]>=+new Date&&b.push("adsid="+encodeURIComponent(S[1]));return a+"?"+b.join("&")},S,T,nc=function(){R=g;S=R.googleToken=R.googleToken||{};var a=+new Date;S[1]&&S[3]>a&&0<S[2]||(S[1]="",S[2]=-1,S[3]=-1,S[4]="",S[6]="");T=R.googleIMState=R.googleIMState||{};kc(T[1])||(T[1]=".google.com");"array"==r(T[5])||(T[5]=[]);"boolean"==typeof T[6]||(T[6]=!1);"array"==r(T[7])||(T[7]=[]);l(T[8])||(T[8]=0)},oc=function(a){try{a()}catch(b){g.setTimeout(function(){throw b;},0)}},qc=function(a){"complete"==g.document.readyState||"loaded"==g.document.readyState||g.document.currentScript&&g.document.currentScript.async?pc(3):a()},rc=0,V={i:function(){return 0<T[8]},m:function(){T[8]++},A:function(){0<T[8]&&T[8]--},B:function(){T[8]=0},j:function(){},D:function(){return!1},u:function(){return T[5]},o:oc},W={i:function(){return T[6]},m:function(){T[6]=!0},A:function(){T[6]=!1},B:function(){T[6]=!1},j:function(){},D:function(){return".google.com"!=T[1]&&2<++rc},u:function(){return T[7]},o:function(a){qc(function(){oc(a)})}},pc=function(a){if(1E-5>Math.random()){g.google_image_requests||(g.google_image_requests=[]);var b=g.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;g.google_image_requests.push(b)}};V.j=function(){if(!V.i()){var a=g.document,b=function(e){e=mc("js",e);var f=Za();hc(a,e,"preload","script",f);f=a.createElement("script");f.type="text/javascript";f.onerror=function(){return g.processGoogleToken({},2)};e=Ra(e);Ja(f,e);try{(a.head||a.body||a.documentElement).appendChild(f),V.m()}catch(h){}},c=T[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);g.setTimeout(function(){return g.processGoogleToken(d,1)},1E3)}};W.j=function(){if(!W.i()){var a=g.document,b=mc("sync.js",T[1]);hc(a,b,"preload","script");b=lc(b);var c=B("script"),d="",e=Za();e&&(d='nonce="'+lc(e)+'"');var f="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");qc(function(){a.write(f);W.m()})}};var sc=function(a){nc();S[3]>=+new Date&&S[2]>=+new Date||a.j()},uc=function(){g.processGoogleToken=g.processGoogleToken||function(a,b){return tc(V,a,b)};sc(V)},vc=function(){g.processGoogleTokenSync=g.processGoogleTokenSync||function(a,b){return tc(W,a,b)};sc(W)},tc=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),p=b["1p_jar"]||"";b=b.pucrd||"";nc();1==c?a.B():a.A();if(!d&&a.D())kc(".google.com")&&(T[1]=".google.com"),a.j();else{var w=R.googleToken=R.googleToken||{},U=0==c&&d&&k(d)&&!e&&l(f)&&0<f&&l(h)&&0<h&&k(p);e=e&&!a.i()&&(!(S[3]>=+new Date)||"NT"==S[1]);var za=!(S[3]>=+new Date)&&0!=c;if(U||e||za)e=+new Date,f=e+1E3*f,h=e+1E3*h,pc(c),w[5]=c,w[1]=d,w[2]=f,w[3]=h,w[4]=p,w[6]=b,nc();if(U||!a.i()){c=a.u();for(d=0;d<c.length;d++)a.o(c[d]);c.length=0}}};var wc=function(){this.a=null;this.f=this.b},xc=function(a,b){a.a=b};wc.prototype.b=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new ab(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);g.google_js_errors=g.google_js_errors||[];g.google_js_errors.push(b);g.error_rep_loaded||(b=g.document,a=b.createElement("script"),Ja(a,Ra(g.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),g.error_rep_loaded=!0);return!1};var yc=function(a,b){try{b()}catch(c){if(!a.f(420,c,.01,void 0,"gpt_exception"))throw c;}};var zc=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(c){var d=a.google_lt_queue=a.google_lt_queue||[];u(c.getEntries(),function(e){return d.push(e)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Ac=function(a){var b=a;b=void 0===b?g:b;if(b=(b=b.performance)&&b.now?b.now():null)b={label:"1",type:9,value:b},a=a.google_js_reporting_queue=a.google_js_reporting_queue||[],2048>a.length&&a.push(b)};var Bc=function(){return g.googletag||(g.googletag={})},Cc=function(a,b){var c=Bc();c.hasOwnProperty(a)||(c[a]=b)};var X={173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,37:.01,38:.001,58:1,76:"",150:".google.co.in",211:!1,152:[],172:null,191:"001906111828200",192:"021906141418310",190:"011906141418310",245:{},180:null,230:{},246:[],227:{},226:[],241:{},220:!1,228:"//www.googletagservices.com/pubconsole/",242:!1,244:!1,243:-1};X[6]=function(a,b){b=void 0===b?!0:b;try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return b;case "http:":return!1}}catch(d){}return!0}(window);X[49]=(new Date).getTime();X[36]=/^true$/.test("false");X[46]=/^true$/.test("false");X[148]=/^true$/.test("false");X[221]=/^true$/.test("");X[204]=Ya("{{MOD}}",-1);var Dc=function(){for(var a in X)this[a]=X[a]};q(Dc);var Y=function(a){return Dc.c()[a]},Z=function(a,b){Dc.c()[a]=b},Ec=Bc(),Fc=Dc.c(),Gc=Ec._vars_,Hc;for(Hc in Gc)Fc[Hc]=Gc[Hc];Ec._vars_=Fc;var Ic=function(a){Wb.call(this,a,{s:Y(211),w:Y(227),C:Y(226)})};ha(Ic,Wb);var Jc=function(){return Y(36)};var Kc=function(a,b){var c=b||Sa;return function(){var d=this||g;d=d.closure_memoize_cache_||(d.closure_memoize_cache_={});var e=c(a[la]||(a[la]=++ma),arguments);return d.hasOwnProperty(e)?d[e]:d[e]=a.apply(this,arguments)}}(function(a){return a&&a.src?/^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src)?0:1:2},function(a,b){return a+"\x0B"+(b[0]&&b[0].src)}),Lc=function(){return 0===Kc(Y(172))};var Mc=function(){return Ya("1")||0},Nc=function(){return"2019061701"};Cc("getVersion",Nc);var Oc=function(){var a={};this[3]=(a[8]=function(b){return!!n(b)},a[3]=Lc,a[2]=Jc,a[9]=function(b){b=n(b);var c;if(c="function"==r(b))b=b&&b.toString&&b.toString(),c=k(b)&&-1!=b.indexOf("[native code]");return c},a[10]=function(){return window==window.top},a[16]=function(){return Ga()&&0<=x(Ia(),72)||A("Edge")&&0<=x(Ia(),18)||(A("Firefox")||A("FxiOS"))&&0<=x(Ia(),65)||A("Safari")&&!(Ga()||A("Coast")||A("Opera")||A("Edge")||A("Edg/")||A("OPR")||A("Firefox")||A("FxiOS")||A("Silk")||A("Android"))&&0<=x(Ia(),12)},a);a={};this[4]=(a[1]=function(){return Y(204)},a[4]=Mc,a[5]=function(){var b=$a();return null!=b?b:void 0},a[6]=function(b){b=n(b);return l(b)?b:void 0},a);a={};this[5]=(a[2]=function(){return window.location.href},a[3]=function(){try{return window.top.location.hash}catch(b){return""}},a[4]=function(b){b=n(b);return k(b)?b:void 0},a)};q(Oc);var Pc=[],Rc=function(a){var b=Qc(new Ub(Y(246)),new Ub(a||Pc));Ic.call(this,J(b,P,2));var c=this;a=Oc.c();a[3][6]=function(d){a:{var e=c.g;d=parseInt(d,10);if(k(e))e=k(d)&&1==d.length?e.indexOf(d,0):-1;else{for(var f=0;f<e.length;f++)if(f in e&&e[f]===d){e=f;break a}e=-1}}return 0<=e};Z(241,a);zb(J(b,L,1));Z(230,sb.c().a);b=Y(245);bc(this,b);cc(b);fc.c();Lb(Db,b)(a)};ha(Rc,Ic);var Qc=function(a,b){if(!J(a,L,1).length&&J(b,L,1).length){var c=J(b,L,1);Pa(a,1,c)}!J(a,P,2).length&&J(b,P,2).length&&(b=J(b,P,2),Pa(a,2,b));return a};B("partner.googleadservices.com");var Sc=B("www.googletagservices.com"),Tc=function(){return!Y(46)||Y(6)||dc(152)?"https://securepubads.g.doubleclick.net":"http://pubads.g.doubleclick.net"},Uc=function(a){var b=a.currentScript;return"complete"!=a.readyState&&"loaded"!=a.readyState&&!(b&&b.async)},Vc=function(){var a=Y(76);if(a)return a;a=Tc();var b=ec(4,"/gpt/pubads_impl_"),c;var d="";if(Y(148))try{var e="";try{e=g.top.location.hash}catch(h){e=g.location.hash}e&&(d=(c=e.match(/\bgptv=(\d+)/))?c[1]:"")}catch(h){}if(!(c=d)){var f=void 0===f?0:f;c=Q.c().b(12,f)}c=c||Nc();f=ec(5);a=a+b+c+".js";f&&(a+="?"+f);Z(76,a);return a},Wc=function(a,b){var c;if(!(c=a.currentScript))a:{if(a=a.scripts)for(c=0;c<a.length;c++){var d=a[c];if(-1<d.src.indexOf(Sc+"/tag/js/gpt")){c=d;break a}}c=null}Z(172,c);b=new Rc(b);$b(b,7);$b(b,5);$b(b,8);b=Y(150);nc();kc(b)&&(T[1]=b)},Xc=function(){return navigator.getBattery?navigator.getBattery().then(function(a){Z(243,a.level);Z(244,a.charging);Z(242,!0)}):null},Yc=function(a,b,c){var d=Bc();a=a||d.fifWin||window;b=b||a.document;Cc("cmd",[]);if(d.evalScripts)d.evalScripts();else{Wc(b,c);a.PerformanceObserver&&a.PerformanceLongTaskTiming&&zc(a);Ac(a);a=Vc();if(Uc(b)){c="gpt-impl-"+Math.random();try{var e='<script id="'+c+'" src="'+a+'">\x3c/script>';dc(17)&&gc()&&(e+='<link rel="preconnect" href="'+Tc()+'">');b.write(e)}catch(f){}b.getElementById(c)&&(d._loadStarted_=!0,Z(220,!1),vc())}d._loadStarted_||(uc(),dc(16)&&hc(b,a,"preload","script"),c=b.createElement("script"),c.src=a,c.async=!0,(b.head||b.body||b.documentElement).appendChild(c),dc(17)&&gc()&&hc(b,Tc(),"preconnect"),Z(220,!0),d._loadStarted_=!0);(b=Xc())&&b.catch(function(f){var h=new wc;xc(h,function(p){p.methodId=501});h.b(501,f)})}};var Zc;a:{try{if("array"==r(E)){Zc=E;break a}}catch(a){}Zc=[]}(function(a,b,c){var d=new wc;xc(d,function(e){e.methodId=420});yc(d,function(){return Yc(a,b,c)})})(void 0,void 0,Zc);}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this,[[[null,7,null,[null,0.1]],[118,null,null,[1]],[20,null,null,[],[[[1,[[4,null,1]]],[1]]]],[null,null,8,[null,null,"/pagead/js/rum.js"]],[140,null,null,[1]],[8,null,null,[1]],[55,null,null,[1]],[null,8,null,[null,-1]],[null,1,null,[null,4096],[[[4,null,14],[null,8192]],[[4,null,15,null,null,null,null,["7646"]],[null,16384]]]],[null,null,9,[null,null,"https://securepubads.g.doubleclick.net/pagead/js/rum.js"]],[45,null,null,[]],[null,null,2,[null,null,"1-0-33"]]],[[null,[[null,[[21063438],[21063439]]],[null,[[21063445],[21063446]]],[null,[[21064058]]],[null,[[676982601],[676982602],[676982605]]],[null,[[676982612],[676982613]]],[null,[[676982665]]],[null,[[676982678]]],[null,[[676982680]]],[null,[[676982682]]]]],[3,[[null,[[1337,[[82,null,null,[1]],[null,null,8,[null,null,"/pagead/js/rum_debug.js"]]]]]],[5,[[20194812,[[20,null,null,[1]]]],[20194813]],null,3],[500,[[21060610],[21060611,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["21061508"]]],[500,[[21060697],[21060698,[[87,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["Uint8Array"]],[4,null,11]]]],[100,[[21061497],[21061498,[[86,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,9,null,null,null,null,["requestAnimationFrame"]]]]],[100,[[21061545],[21061546,[[79,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["google_ltobserver"]]]]],[50,[[21061863,[[null,1,null,[null,4096],[[[4,null,14],[null,8192]]]]]],[21061864,[[null,1,null,[null,12288]]]],[21061865,[[null,1,null,[null,15360]]]]]],[50,[[21061999],[21062000,[[81,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,10]]]],[null,[[21062185],[21062186,[[24,null,null,[1]]]]]],[1,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,10000]]]]],null,3],[50,[[21062414],[21062415,[[64,null,null,[1]]]]]],[50,[[21062420],[21062421,[[42,null,null,[1]]]]]],[50,[[21062452],[21062453,[[43,null,null,[1]]]]]],[50,[[21062724],[21062725,[[67,null,null,[1]]]]]],[10,[[21062751],[21062752,[[null,15,null,[null,1]]]],[21062753,[[null,15,null,[null,2]]]]]],[10,[[21062796],[21062797,null,[4,null,8,null,null,null,null,["Map"]]]]],[50,[[21062818],[21062819,[[93,null,null,[1]]]]]],[50,[[21062832],[21062833,[[89,null,null,[1]]]]]],[50,[[21062886],[21062887,[[91,null,null,[1]]]]]],[10,[[21062888],[21062889,[[101,null,null,[1]]]]]],[5,[[21062899],[21062900,[[98,null,null,[1]]]],[21062901,[[98,null,null,[1]]]]]],[5,[[21062916,[[98,null,null,[1]]]],[21062917,[[98,null,null,[1]]]]]],[1,[[21062970],[21062971,[[109,null,null,[1]]]]]],[50,[[21063015],[21063016,[[97,null,null,[1]]]]]],[5,[[21063046],[21063047,[[142,null,null,[1]]]],[21063048,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]],[4,null,10]]],9],[null,[[21063065],[21063066,[[116,null,null,[1]]]]]],[null,[[21063094],[21063095,[[142,null,null,[1]]]],[21063096,[[142,null,null,[1]]]]],[2,[[4,null,7],[4,null,8,null,null,null,null,["TextDecoder"]],[4,null,10]]],9],[1,[[21063145],[21063146,[[112,null,null,[1]]]]]],[1,[[21063147],[21063148,[[99,null,null,[1]]]]]],[50,[[21063158],[21063159,[[90,null,null,[1]]]]]],[1000,[[21063165,null,[3,[[6,null,null,1,null,0],[6,null,null,1,null,5]]]],[21063166,[[114,null,null,[1]]],[3,[[6,null,null,1,null,1],[6,null,null,1,null,6]]]]],[4,null,3]],[10,[[21063167],[21063168,[[102,null,null,[1]]]]]],[50,[[21063202],[21063203,[[123,null,null,[1]]]]]],[10,[[21063204],[21063205,[[47,null,null,[1]]]]]],[1000,[[21063316,null,[3,[[6,null,null,1,null,2],[6,null,null,1,null,7]]]],[21063317,[[114,null,null,[1]]],[3,[[6,null,null,1,null,3],[6,null,null,1,null,8]]]]],[4,null,3]],[5,[[21063340],[21063341,[[129,null,null,[1]],[65,null,null,[1]]]],[21063342,[[129,null,null,[1]],[65,null,null,[1]],[71,null,null,[1]]]]]],[10,[[21063387],[21063388,[[130,null,null,[1]]]]]],[1,[[21063633],[21063634,[[143,null,null,[1]]]]],[2,[[4,null,10]]]],[50,[[21063635],[21063636,[[104,null,null,[1]]]]]],[10,[[21063637],[21063638,[[141,null,null,[1]]]]]],[1,[[21063669],[21063670],[21063671,[[142,null,null,[1]]]]],[4,null,8,null,null,null,null,["TextDecoder"]],9],[10,[[21063692],[21063693]]],[50,[[21063760],[21063761,[[155,null,null,[1]]]]]],[1,[[21063778],[21063779,[[132,null,null,[1]],[110,null,null,[1]]]]],null,11],[1,[[21063785],[21063786,[[139,null,null,[1]]]]]],[1,[[21063792],[21063793,[[148,null,null,[1]]]]]],[50,[[21063813],[21063814,[[151,null,null,[1]]]]]],[50,[[21063815],[21063816,[[152,null,null,[1]],[151,null,null,[1]]]]]],[50,[[21063817],[21063818,[[149,null,null,[1]]]]]],[10,[[21063910],[21063911]]],[1000,[[21063912]],[2,[[4,null,6,null,null,null,null,["21063910"]],[2,[[4,null,9,null,null,null,null,["XMLHttpRequest"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.open"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.send"]]]]]]],[1000,[[21063913]],[2,[[4,null,6,null,null,null,null,["21063911"]],[2,[[4,null,9,null,null,null,null,["XMLHttpRequest"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.open"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.send"]]]]]]],[50,[[21063989],[21063990,[[null,13,null,[null,1]]]],[21063991,[[null,13,null,[null,1]]]]]],[50,[[21064004],[21064005,[[161,null,null,[1]]]]]],[10,[[21064034],[21064035,[[31,null,null,[1]]]]]],[10,[[21064050],[21064051,[[159,null,null,[1]]]]]],[10,[[21064052],[21064053,[[153,null,null,[1]]]],[21064054,[[146,null,null,[1]]]]]],[50,[[21064055],[21064056,[[110,null,null,[1]]]]],null,11],[10,[[21064068],[21064069,[[158,null,null,[1]]]]]],[1000,[[21064076]],[2,[[4,null,6,null,null,null,null,["21064055"]],[2,[[4,null,9,null,null,null,null,["XMLHttpRequest"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.open"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.send"]]]]]]],[1000,[[21064077]],[2,[[4,null,6,null,null,null,null,["21064056"]],[2,[[4,null,9,null,null,null,null,["XMLHttpRequest"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.open"]],[4,null,9,null,null,null,null,["XMLHttpRequest.prototype.send"]]]]]]],[1,[[21064078],[21064079,[[null,null,null,[null,null,null,["v","1-0-35"]],null,1]]],[21064080,[[null,null,2,[null,null,"1-0-35"]]]]]],[1000,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[100,[[22325465],[22325466,[[80,null,null,[1]]]]],[4,null,6,null,null,null,null,["21060611"]]],[1,[[108809132],[108809133,[[45,null,null,[1]]]]]],[10,[[370204026],[370204027],[370204053]]]]],[4,[[null,[[21063411],[21063412],[21063413]]],[null,[[21063421],[21063422],[21063423,[[74,null,null,[1]]]]]],[null,[[21063599],[21063600,[[105,null,null,[1]]]],[21064038],[21064039,[[105,null,null,[1]]]]]],[null,[[21063802],[21063803,[[null,20,null,[null,1]],[145,null,null,[1]]]],[21063804,[[null,20,null,[null,1]]]],[21063805,[[null,20,null,[null,1]],[145,null,null,[1]]]],[21063806,[[null,20,null,[null,1]]]],[21063807,[[null,20,null,[null,1]],[145,null,null,[1]]]],[21063808,[[null,20,null,[null,1]]]]]],[null,[[21063829,[[150,null,null,[1]]]]]],[null,[[21063831],[21063832],[21063833,[[null,19,null,[null,30]]]],[21063834,[[null,19,null,[null,30]],[150,null,null,[1]]]]]],[null,[[21063927],[21063928,[[null,16,null,[null,500]]]],[21063929,[[null,16,null,[null,500]]]],[21063930,[[null,16,null,[null,750]]]],[21063931,[[null,16,null,[null,1000]]]],[21063932,[[null,17,null,[null,50]]]],[21063933,[[null,17,null,[null,100]]]],[21063934,[[null,17,null,[null,150]]]],[21063935,[[null,17,null,[null,200]]]],[21063936,[[null,18,null,[null,1]]]],[21063937,[[null,18,null,[null,250]]]],[21063938,[[null,18,null,[null,500]]]],[21063939,[[null,18,null,[null,750]]]],[21063940,[[null,18,null,[null,1000]]]]]],[null,[[21063941],[21063942,[[null,16,null,[null,250]]]],[21063943,[[null,16,null,[null,500]]]],[21063944,[[null,16,null,[null,750]]]],[21063945,[[null,16,null,[null,1000]]]],[21063946,[[null,17,null,[null,50]]]],[21063947,[[null,17,null,[null,100]]]],[21063948,[[null,17,null,[null,150]]]],[21063949,[[null,17,null,[null,200]]]],[21063950,[[null,18,null,[null,250]]]],[21063951,[[null,18,null,[null,500]]]],[21063952,[[null,18,null,[null,750]]]],[21063953,[[null,18,null,[null,1000]]]]]],[null,[[21063962],[21063963,[[null,18,null,[null,1]]]]]],[null,[[21063987],[21063988]]],[null,[[21064027],[21064028,[[105,null,null,[1]]]]]],[null,[[21064059,[[null,22,null,[null,30]]]]]],[null,[[676982603],[676982604]]],[null,[[676982661],[676982662],[676982663]]],[null,[[676982666],[676982667],[676982669],[676982670]]],[null,[[676982672],[676982673],[676982674],[676982675],[676982676],[676982677]]],[null,[[676982681]]]]],[5,[[10,[[21061507],[21061508,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1000,[[21062785,[[23,null,null,[]]],[7,null,null,5,null,50]],[21062786,[[23,null,null,[1]]],[8,null,null,5,null,949]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1000,[[21062812,[[23,null,null,[1]]]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[50,[[21063232,null,[6,null,null,null,4,null,"slow-2g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063233,null,[6,null,null,null,4,null,"2g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063234,null,[6,null,null,null,4,null,"3g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063235,null,[6,null,null,null,4,null,"4g",["navigator.connection.effectiveType"]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[50,[[21063247]],[1,[[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]]]],[50,[[21063248,null,[1,[[12,null,null,null,4,null,"^(slow-2g|2g|3g|4g)$",["navigator.connection.effectiveType"]]]]]],[5,null,null,null,4,null,null,["navigator.connection.effectiveType"]]],[1000,[[21063916,[[23,null,null,[]]],[7,null,null,5,null,250]],[21063917,[[23,null,null,[1]]],[8,null,null,5,null,749]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/main"],[4,null,8,null,null,null,null,["webkit.messageHandlers._gmptnl"]]]],7],[10,[[21064029,null,[4,null,8,null,null,null,null,["webkit.messageHandlers._gmptnl"]]]]],[10,[[21064030,null,[4,null,8,null,null,null,null,["_gmptnl"]]]]],[null,[[21064063,[[null,null,5,[null,null,"21064063"]],[null,null,6,[null,null,"21064063"]]]],[21064064,[[null,null,4,[null,null,"/gpt/pubads_impl_"],[[[4,null,16],[null,null,"/gpt/pubads_impl_modern_"]]]],[null,null,5,[null,null,"21064064"]],[null,null,6,[null,null,"21064064"]]]]]],[null,[[21064065,[[null,null,5,[null,null,"21064065"]],[null,null,6,[null,null,"21064065"]]]],[21064066,[[null,null,4,[null,null,"/gpt/pubads_impl_modern_"]],[null,null,5,[null,null,"21064066"]],[null,null,6,[null,null,"21064066"]]]]],[4,null,16]],[1000,[[21064070,[[null,7,null,[null,1]],[null,null,5,[null,null,"21064070"]],[60,null,null,[1]],[null,null,6,[null,null,"21064070"]]],[6,null,null,4,null,2]],[21064071,[[null,7,null,[null,1]],[60,null,null,[1]]],[6,null,null,4,null,3]]],[4,null,3],1]]],[6,[[null,[[20200055],[20200056]]],[null,[[21062379,[[23,null,null,[1]]]]]],[10,[[21063049],[21063050],[21063051]],[3,[[4,null,6,null,null,null,null,["21062415"]],[4,null,6,null,null,null,null,["21062414"]]]]]]],[9,[[1000,[[21061726]],[4,null,13,null,null,null,null,["PnHSZjekOp","jvnwkvnp"]]]]]]])
