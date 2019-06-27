// Native Javascript for Bootstrap 4 v2.0.27 | © dnp_theme | MIT-License
!function(t,e){if("function"==typeof define&&define.amd)define([],e);else if("object"==typeof module&&module.exports)module.exports=e();else{var i=e();t.Alert=i.Alert,t.Button=i.Button,t.Carousel=i.Carousel,t.Collapse=i.Collapse,t.Dropdown=i.Dropdown,t.Modal=i.Modal,t.Popover=i.Popover,t.ScrollSpy=i.ScrollSpy,t.Tab=i.Tab,t.Toast=i.Toast,t.Tooltip=i.Tooltip}}(this,function(){"use strict";var t="undefined"!=typeof global?global:this||window,e=document,i=e.documentElement,n="body",o=t.BSN={},a=o.supports=[],l="data-toggle",r="delay",s="target",c="animation",d="onmouseleave"in e?["mouseenter","mouseleave"]:["mouseover","mouseout"],u={start:"touchstart",end:"touchend",move:"touchmove"},h="getAttribute",f="setAttribute",p="parentNode",m="length",g="Transition",v="Webkit",w="style",b="push",T="active",y="left",k="top",A=/\b(top|bottom|left|right)+/,C=0,x=v+g in i[w]||g.toLowerCase()in i[w],E=v+g in i[w]?v.toLowerCase()+g+"End":g.toLowerCase()+"end",L=v+"Duration"in i[w]?v.toLowerCase()+g+"Duration":g.toLowerCase()+"Duration",N=function(t){t.focus?t.focus():t.setActive()},I=function(t,e){t.classList.add(e)},D=function(t,e){t.classList.remove(e)},H=function(t,e){return t.classList.contains(e)},B=function(t,e){return[].slice.call(t.getElementsByClassName(e))},M=function(t,i){var n=i||e;return"object"==typeof t?t:n.querySelector(t)},S=function(t,i){var n=i.charAt(0),o=i.substr(1);if("."===n){for(;t&&t!==e;t=t[p])if(null!==M(i,t[p])&&H(t,o))return t}else if("#"===n)for(;t&&t!==e;t=t[p])if(t.id===o)return t;return!1},W=function(t,e,i,n){n=n||!1,t.addEventListener(e,i,n)},R=function(t,e,i,n){n=n||!1,t.removeEventListener(e,i,n)},P=function(t,e,i,n){W(t,e,function o(a){i(a),R(t,e,o,n)},n)},O=function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});P(t,"testPassive",null,i)}catch(t){}return e}(),z=!!O&&{passive:!0},j=function(e){var i=x?t.getComputedStyle(e)[L]:0;return i=parseFloat(i),i="number"!=typeof i||isNaN(i)?0:1e3*i},X=function(t,e){var i=0;j(t)?P(t,E,function(t){!i&&e(t),i=1}):setTimeout(function(){!i&&e(),i=1},17)},U=function(t,e,i){var n=new CustomEvent(t+".bs."+e);n.relatedTarget=i,this.dispatchEvent(n)},q=function(){return{y:t.pageYOffset||i.scrollTop,x:t.pageXOffset||i.scrollLeft}},F=function(t,o,a,l){var r,s,c,d,u,h,f={w:o.offsetWidth,h:o.offsetHeight},p=i.clientWidth||e[n].clientWidth,m=i.clientHeight||e[n].clientHeight,g=t.getBoundingClientRect(),v=l===e[n]?q():{x:l.offsetLeft+l.scrollLeft,y:l.offsetTop+l.scrollTop},b={w:g.right-g[y],h:g.bottom-g[k]},T=H(o,"popover"),C=M(".arrow",o),x=g[k]+b.h/2-f.h/2<0,E=g[y]+b.w/2-f.w/2<0,L=g[y]+f.w/2+b.w/2>=p,N=g[k]+f.h/2+b.h/2>=m,I=g[k]-f.h<0,D=g[y]-f.w<0,B=g[k]+f.h+b.h>=m,S=g[y]+f.w+b.w>=p;a=(a===y||"right"===a)&&D&&S?k:a,a=a===k&&I?"bottom":a,a="bottom"===a&&B?k:a,a=a===y&&D?"right":a,a="right"===a&&S?y:a,-1===o.className.indexOf(a)&&(o.className=o.className.replace(A,a)),u=C.offsetWidth,h=C.offsetHeight,a===y||"right"===a?(s=a===y?g[y]+v.x-f.w-(T?u:0):g[y]+v.x+b.w,x?(r=g[k]+v.y,c=b.h/2-u):N?(r=g[k]+v.y-f.h+b.h,c=f.h-b.h/2-u):(r=g[k]+v.y-f.h/2+b.h/2,c=f.h/2-(T?.9*h:h/2))):a!==k&&"bottom"!==a||(r=a===k?g[k]+v.y-f.h-(T?h:0):g[k]+v.y+b.h,E?(s=0,d=g[y]+b.w/2-u):L?(s=p-1.01*f.w,d=f.w-(p-g[y])+b.w/2-u/2):(s=g[y]+v.x-f.w/2+b.w/2,d=f.w/2-u/2)),o[w][k]=r+"px",o[w][y]=s+"px",c&&(C[w][k]=c+"px"),d&&(C[w][y]=d+"px")};o.version="2.0.27";var Y=function(t){t=M(t);var e=this,i=S(t,".alert"),n=function(){H(i,"fade")?X(i,a):a()},o=function(n){i=S(n[s],".alert"),(t=M('[data-dismiss="alert"]',i))&&i&&(t===n[s]||t.contains(n[s]))&&e.close()},a=function(){U.call(i,"closed","alert"),R(t,"click",o),i[p].removeChild(i)};this.close=function(){i&&t&&H(i,"show")&&(U.call(i,"close","alert"),D(i,"show"),i&&n())},"Alert"in t||W(t,"click",o),t.Alert=e};a[b](["Alert",Y,'[data-dismiss="alert"]']);var G=function(t){t=M(t);var i=!1,n="checked",o=function(t){32===(t.which||t.keyCode)&&t[s]===e.activeElement&&l(t)},a=function(t){32===(t.which||t.keyCode)&&t.preventDefault()},l=function(e){var o="LABEL"===e[s].tagName?e[s]:"LABEL"===e[s][p].tagName?e[s][p]:null;if(o){var a=e[s],l=B(a[p],"btn"),r=o.getElementsByTagName("INPUT")[0];if(r){if("checkbox"===r.type&&(r[n]?(D(o,T),r[h](n),r.removeAttribute(n),r[n]=!1):(I(o,T),r[h](n),r[f](n,n),r[n]=!0),i||(i=!0,U.call(r,"change","button"),U.call(t,"change","button"))),"radio"===r.type&&!i&&!r[n]){I(o,T),r[f](n,n),r[n]=!0,U.call(r,"change","button"),U.call(t,"change","button"),i=!0;for(var c=0,d=l[m];c<d;c++){var u=l[c],g=u.getElementsByTagName("INPUT")[0];u!==o&&H(u,T)&&(D(u,T),g.removeAttribute(n),g[n]=!1,U.call(g,"change","button"))}}setTimeout(function(){i=!1},50)}}};"Button"in t||(W(t,"click",l),M("[tabindex]",t)&&W(t,"keyup",o),W(t,"keydown",a));for(var r=B(t,"btn"),c=r[m],d=0;d<c;d++)!H(r[d],T)&&M("input:checked",r[d])&&I(r[d],T);t.Button=this};a[b](["Button",G,'[data-toggle="buttons"]']);var J=function(n,o){n=M(n),o=o||{};var a=n[h]("data-interval"),l=o.interval,r="false"===a?0:parseInt(a),c="hover"===n[h]("data-pause")||!1,f="true"===n[h]("data-keyboard")||!1;this.keyboard=!0===o.keyboard||f,this.pause=!("hover"!==o.pause&&!c)&&"hover",this.interval="number"==typeof l?l:!1===l||0===r||!1===r?0:isNaN(r)?5e3:r;var p=this,g=n.index=0,v=n.timer=0,w=!1,b=!1,A=null,C=null,E=null,L=B(n,"carousel-item"),N=L[m],S=this.direction=y,P=B(n,"carousel-control-prev")[0],O=B(n,"carousel-control-next")[0],j=M(".carousel-indicators",n),q=j&&j.getElementsByTagName("LI")||[];if(!(N<2)){var F=function(){!1===p.interval||H(n,"paused")||(I(n,"paused"),!w&&(clearInterval(v),v=null))},Y=function(){!1!==p.interval&&H(n,"paused")&&(D(n,"paused"),!w&&(clearInterval(v),v=null),!w&&p.cycle())},G=function(t){if(t.preventDefault(),!w){var e=t[s];if(!e||H(e,T)||!e[h]("data-slide-to"))return!1;g=parseInt(e[h]("data-slide-to"),10),p.slideTo(g)}},J=function(t){if(t.preventDefault(),!w){var e=t.currentTarget||t.srcElement;e===O?g++:e===P&&g--,p.slideTo(g)}},K=function(t){if(!w){switch(t.which){case 39:g++;break;case 37:g--;break;default:return}p.slideTo(g)}},Q=function(t){t(n,u.move,Z,z),t(n,u.end,$,z)},V=function(t){b||(A=parseInt(t.touches[0].pageX),n.contains(t[s])&&(b=!0,Q(W)))},Z=function(t){return b?(C=parseInt(t.touches[0].pageX),"touchmove"===t.type&&t.touches[m]>1?(t.preventDefault(),!1):void 0):void t.preventDefault()},$=function(t){if(b&&!w&&(E=C||parseInt(t.touches[0].pageX),b)){if((!n.contains(t[s])||!n.contains(t.relatedTarget))&&Math.abs(A-E)<75)return!1;C<A?g++:C>A&&g--,b=!1,p.slideTo(g),Q(R)}},_=function(){var e=n.getBoundingClientRect(),o=t.innerHeight||i.clientHeight;return e[k]<=o&&e.bottom>=0},tt=function(t){for(var e=0,i=q[m];e<i;e++)D(q[e],T);q[t]&&I(q[t],T)};this.cycle=function(){v&&(clearInterval(v),v=null),v=setInterval(function(){_()&&(g++,p.slideTo(g))},this.interval)},this.slideTo=function(t){if(!w){var i,o=this.getActiveIndex();o!==t&&(o<t||0===o&&t===N-1?S=p.direction=y:(o>t||o===N-1&&0===t)&&(S=p.direction="right"),t<0?t=N-1:t>=N&&(t=0),g=t,i=S===y?"next":"prev",U.call(n,"slide","carousel",L[t]),w=!0,clearInterval(v),v=null,tt(t),x&&H(n,"slide")?(I(L[t],"carousel-item-"+i),L[t].offsetWidth,I(L[t],"carousel-item-"+S),I(L[o],"carousel-item-"+S),X(L[t],function(a){var l=a&&a[s]!==L[t]?1e3*a.elapsedTime+100:20;w&&setTimeout(function(){w=!1,I(L[t],T),D(L[o],T),D(L[t],"carousel-item-"+i),D(L[t],"carousel-item-"+S),D(L[o],"carousel-item-"+S),U.call(n,"slid","carousel",L[t]),e.hidden||!p.interval||H(n,"paused")||p.cycle()},l)})):(I(L[t],T),L[t].offsetWidth,D(L[o],T),setTimeout(function(){w=!1,p.interval&&!H(n,"paused")&&p.cycle(),U.call(n,"slid","carousel",L[t])},100)))}},this.getActiveIndex=function(){return L.indexOf(B(n,"carousel-item active")[0])||0},"Carousel"in n||(p.pause&&p.interval&&(W(n,d[0],F),W(n,d[1],Y),W(n,u.start,F,z),W(n,u.end,Y,z)),L[m]>1&&W(n,u.start,V,z),O&&W(O,"click",J),P&&W(P,"click",J),j&&W(j,"click",G),p.keyboard&&W(t,"keydown",K)),p.getActiveIndex()<0&&(L[m]&&I(L[0],T),q[m]&&tt(0)),p.interval&&p.cycle(),n.Carousel=p}};a[b](["Carousel",J,'[data-ride="carousel"]']);var K=function(t,e){t=M(t),e=e||{};var i,n,o=null,a=null,l=this,r=t[h]("data-parent"),s=function(t,e){U.call(t,"show","collapse"),t.isAnimating=!0,I(t,"collapsing"),D(t,"collapse"),t[w].height=t.scrollHeight+"px",X(t,function(){t.isAnimating=!1,t[f]("aria-expanded","true"),e[f]("aria-expanded","true"),D(t,"collapsing"),I(t,"collapse"),I(t,"show"),t[w].height="",U.call(t,"shown","collapse")})},c=function(t,e){U.call(t,"hide","collapse"),t.isAnimating=!0,t[w].height=t.scrollHeight+"px",D(t,"collapse"),D(t,"show"),I(t,"collapsing"),t.offsetWidth,t[w].height="0px",X(t,function(){t.isAnimating=!1,t[f]("aria-expanded","false"),e[f]("aria-expanded","false"),D(t,"collapsing"),I(t,"collapse"),t[w].height="",U.call(t,"hidden","collapse")})};this.toggle=function(t){t.preventDefault(),H(a,"show")?l.hide():l.show()},this.hide=function(){a.isAnimating||(c(a,t),I(t,"collapsed"))},this.show=function(){o&&(i=M(".collapse.show",o),n=i&&(M('[data-target="#'+i.id+'"]',o)||M('[href="#'+i.id+'"]',o))),(!a.isAnimating||i&&!i.isAnimating)&&(n&&i!==a&&(c(i,n),I(n,"collapsed")),s(a,t),D(t,"collapsed"))},"Collapse"in t||W(t,"click",l.toggle),a=function(){var e=t.href&&t[h]("href"),i=t[h]("data-target"),n=e||i&&"#"===i.charAt(0)&&i;return n&&M(n)}(),a.isAnimating=!1,o=M(e.parent)||r&&S(t,r),t.Collapse=l};a[b](["Collapse",K,'[data-toggle="collapse"]']);var Q=function(t,i){t=M(t),this.persist=!0===i||"true"===t[h]("data-persist")||!1;var n=this,o=t[p],a=null,r=M(".dropdown-menu",o),c=function(){for(var t=r.children,e=[],i=0;i<t[m];i++)t[i].children[m]&&"A"===t[i].children[0].tagName&&e[b](t[i].children[0]),"A"===t[i].tagName&&e[b](t[i]);return e}(),d=function(t){(t.href&&"#"===t.href.slice(-1)||t[p]&&t[p].href&&"#"===t[p].href.slice(-1))&&this.preventDefault()},u=function(){var i=t.open?W:R;i(e,"click",g),i(e,"keydown",w),i(e,"keyup",T),i(e,"focus",g,!0)},g=function(e){var i=e[s],o=i&&(i[h](l)||i[p]&&h in i[p]&&i[p][h](l));("focus"!==e.type||i!==t&&i!==r&&!r.contains(i))&&(i!==r&&!r.contains(i)||!n.persist&&!o)&&(a=i===t||t.contains(i)?t:null,k(),d.call(e,i))},v=function(e){a=t,y(),d.call(e,e[s])},w=function(t){var e=t.which||t.keyCode;38!==e&&40!==e||t.preventDefault()},T=function(i){var o=i.which||i.keyCode,l=e.activeElement,s=c.indexOf(l),d=l===t,u=r.contains(l),h=l[p]===r||l[p][p]===r;h&&(s=d?0:38===o?s>1?s-1:0:40===o&&s<c[m]-1?s+1:s,c[s]&&N(c[s])),(c[m]&&h||!c[m]&&(u||d)||!u)&&t.open&&27===o&&(n.toggle(),a=null)},y=function(){U.call(o,"show","dropdown",a),I(r,"show"),I(o,"show"),t[f]("aria-expanded",!0),U.call(o,"shown","dropdown",a),t.open=!0,R(t,"click",v),setTimeout(function(){N(r.getElementsByTagName("INPUT")[0]||t),u()},1)},k=function(){U.call(o,"hide","dropdown",a),D(r,"show"),D(o,"show"),t[f]("aria-expanded",!1),U.call(o,"hidden","dropdown",a),t.open=!1,u(),N(t),setTimeout(function(){W(t,"click",v)},1)};t.open=!1,this.toggle=function(){H(o,"show")&&t.open?k():y()},"Dropdown"in t||(!1 in r&&r[f]("tabindex","0"),W(t,"click",v)),t.Dropdown=n};a[b](["Dropdown",Q,'[data-toggle="dropdown"]']);var V=function(o,a){o=M(o);var l=o[h]("data-target")||o[h]("href"),r=M(l),d=H(o,"modal")?o:r;if(H(o,"modal")&&(o=null),d){a=a||{},this.keyboard=!1!==a.keyboard&&"false"!==d[h]("data-keyboard"),this.backdrop="static"!==a.backdrop&&"static"!==d[h]("data-backdrop")||"static",this.backdrop=!1!==a.backdrop&&"false"!==d[h]("data-backdrop")&&this.backdrop,this[c]=!!H(d,"fade"),this.content=a.content,d.isAnimating=!1;var u,g,v,b,T,k=this,A=null,E=B(i,"fixed-top").concat(B(i,"fixed-bottom")),L=function(){var e=i.getBoundingClientRect();return t.innerWidth||e.right-Math.abs(e[y])},S=function(){var i,o=t.getComputedStyle(e[n]),a=parseInt(o.paddingRight,10);if(u&&(e[n][w].paddingRight=a+g+"px",d[w].paddingRight=g+"px",E[m]))for(var l=0;l<E[m];l++)i=t.getComputedStyle(E[l]).paddingRight,E[l][w].paddingRight=parseInt(i)+g+"px"},P=function(){if(e[n][w].paddingRight="",d[w].paddingRight="",E[m])for(var t=0;t<E[m];t++)E[t][w].paddingRight=""},O=function(){var t,i=e.createElement("div");return i.className="modal-scrollbar-measure",e[n].appendChild(i),t=i.offsetWidth-i.clientWidth,e[n].removeChild(i),t},q=function(){u=e[n].clientWidth<L(),g=O()},F=function(){var t=e.createElement("div");v=M(".modal-backdrop"),null===v&&(t[f]("class","modal-backdrop"+(k[c]?" fade":"")),v=t,e[n].appendChild(v)),C=1},Y=function(){(v=M(".modal-backdrop"))&&null!==v&&"object"==typeof v&&(C=0,e[n].removeChild(v),v=null)},G=function(){N(d),d.isAnimating=!1,U.call(d,"shown","modal",A),W(t,"resize",k.update,z),W(d,"click",V),W(e,"keydown",Q)},J=function(){d[w].display="",o&&N(o),U.call(d,"hidden","modal"),function(){B(e,"modal show")[0]||(P(),D(e[n],"modal-open"),v&&H(v,"fade")?(D(v,"show"),X(v,Y)):Y(),R(t,"resize",k.update,z),R(d,"click",V),R(e,"keydown",Q))}(),d.isAnimating=!1},K=function(t){if(!d.isAnimating){var e=t[s];e=e.hasAttribute("data-target")||e.hasAttribute("href")?e:e[p],e!==o||H(d,"show")||(d.modalTrigger=o,A=o,k.show(),t.preventDefault())}},Q=function(t){d.isAnimating||k.keyboard&&27==t.which&&H(d,"show")&&k.hide()},V=function(t){if(!d.isAnimating){var e=t[s];H(d,"show")&&("modal"===e[p][h]("data-dismiss")||"modal"===e[h]("data-dismiss")||e===d&&"static"!==k.backdrop)&&(k.hide(),A=null,t.preventDefault())}};this.toggle=function(){H(d,"show")?this.hide():this.show()},this.show=function(){H(d,"show")||d.isAnimating||(clearTimeout(T),T=setTimeout(function(){d.isAnimating=!0,U.call(d,"show","modal",A);var t=B(e,"modal show")[0];t&&t!==d&&("modalTrigger"in t&&t.modalTrigger.Modal.hide(),"Modal"in t&&t.Modal.hide()),k.backdrop&&!C&&!v&&F(),v&&!H(v,"show")&&(v.offsetWidth,b=j(v),I(v,"show")),setTimeout(function(){d[w].display="block",q(),S(),I(e[n],"modal-open"),I(d,"show"),d[f]("aria-hidden",!1),H(d,"fade")?X(d,G):G()},x&&v&&b?b:1)},1))},this.hide=function(){!d.isAnimating&&H(d,"show")&&(clearTimeout(T),T=setTimeout(function(){d.isAnimating=!0,U.call(d,"hide","modal"),v=M(".modal-backdrop"),b=v&&j(v),D(d,"show"),d[f]("aria-hidden",!0),setTimeout(function(){H(d,"fade")?X(d,J):J()},x&&v&&b?b:2)},2))},this.setContent=function(t){M(".modal-content",d).innerHTML=t},this.update=function(){H(d,"show")&&(q(),S())},!o||"Modal"in o||W(o,"click",K),k.content&&k.setContent(k.content),o?(o.Modal=k,d.modalTrigger=o):d.Modal=k}};a[b](["Modal",V,'[data-toggle="modal"]']);var Z=function(i,o){i=M(i),o=o||{};var a=i[h]("data-trigger"),l=i[h]("data-animation"),u=i[h]("data-placement"),p=i[h]("data-dismissible"),m=i[h]("data-delay"),g=i[h]("data-container"),v='<button type="button" class="close">×</button>',b=M(o.container),T=M(g),y=S(i,".modal"),A=S(i,".fixed-top"),C=S(i,".fixed-bottom");this.template=o.template?o.template:null,this.trigger=o.trigger?o.trigger:a||"hover",this[c]=o[c]&&"fade"!==o[c]?o[c]:l||"fade",this.placement=o.placement?o.placement:u||k,this[r]=parseInt(o[r]||m)||200,this.dismissible=!(!o.dismissible&&"true"!==p),this.container=b||(T||(A||(C||(y||e[n]))));var x=this,E=o.title||i[h]("data-title")||null,L=o.content||i[h]("data-content")||null;if(L||this.template){var N=null,B=0,P=this.placement,O=function(t){null!==N&&t[s]===M(".close",N)&&x.hide()},j=function(){x.container.removeChild(N),B=null,N=null},q=function(){E=o.title||i[h]("data-title"),L=o.content||i[h]("data-content"),L=L.trim(),N=e.createElement("div");var t=e.createElement("div");if(t[f]("class","arrow"),N.appendChild(t),null!==L&&null===x.template){if(N[f]("role","tooltip"),null!==E){var n=e.createElement("h3");n[f]("class","popover-header"),n.innerHTML=x.dismissible?E+v:E,N.appendChild(n)}var a=e.createElement("div");a[f]("class","popover-body"),a.innerHTML=x.dismissible&&null===E?L+v:L,N.appendChild(a)}else{var l=e.createElement("div");x.template=x.template.trim(),l.innerHTML=x.template,N.innerHTML=l.firstChild.innerHTML}x.container.appendChild(N),N[w].display="block",N[f]("class","popover bs-popover-"+P+" "+x[c])},Y=function(){!H(N,"show")&&I(N,"show")},G=function(){F(i,N,P,x.container)},J=function(n){"click"!=x.trigger&&"focus"!=x.trigger||!x.dismissible&&n(i,"blur",x.hide),x.dismissible&&n(e,"click",O),n(t,"resize",x.hide,z)},K=function(){J(W),U.call(i,"shown","popover")},Q=function(){J(R),j(),U.call(i,"hidden","popover")};this.toggle=function(){null===N?x.show():x.hide()},this.show=function(){clearTimeout(B),B=setTimeout(function(){null===N&&(P=x.placement,q(),G(),Y(),U.call(i,"show","popover"),x[c]?X(N,K):K())},20)},this.hide=function(){clearTimeout(B),B=setTimeout(function(){N&&null!==N&&H(N,"show")&&(U.call(i,"hide","popover"),D(N,"show"),x[c]?X(N,Q):Q())},x[r])},"Popover"in i||("hover"===x.trigger?(W(i,d[0],x.show),x.dismissible||W(i,d[1],x.hide)):"click"!=x.trigger&&"focus"!=x.trigger||W(i,x.trigger,x.toggle)),i.Popover=x}};a[b](["Popover",Z,'[data-toggle="popover"]']);var $=function(e,i){e=M(e);var n=M(e[h]("data-target")),o=e[h]("data-offset");if(i=i||{},i[s]||n){for(var a,l=this,r=i[s]&&M(i[s])||n,c=r&&r.getElementsByTagName("A"),d=parseInt(i.offset||o)||10,u=[],f=[],g=e.offsetHeight<e.scrollHeight?e:t,v=g===t,w=0,y=c[m];w<y;w++){var A=c[w][h]("href"),C=A&&"#"===A.charAt(0)&&"#"!==A.slice(-1)&&M(A);C&&(u[b](c[w]),f[b](C))}var x=function(t){var i=u[t],n=f[t],o=i[p][p],l=H(o,"dropdown")&&o.getElementsByTagName("A")[0],r=v&&n.getBoundingClientRect(),s=H(i,T)||!1,c=(v?r[k]+a:n.offsetTop)-d,h=v?r.bottom+a-d:f[t+1]?f[t+1].offsetTop-d:e.scrollHeight,m=a>=c&&h>a;if(!s&&m)H(i,T)||(I(i,T),l&&!H(l,T)&&I(l,T),U.call(e,"activate","scrollspy",u[t]));else if(m){if(!m&&!s||s&&m)return}else H(i,T)&&(D(i,T),l&&H(l,T)&&!B(i[p],T).length&&D(l,T))},E=function(){a=v?q().y:e.scrollTop;for(var t=0,i=u[m];t<i;t++)x(t)};this.refresh=function(){E()},"ScrollSpy"in e||(W(g,"scroll",l.refresh,z),W(t,"resize",l.refresh,z)),l.refresh(),e.ScrollSpy=l}};a[b](["ScrollSpy",$,'[data-spy="scroll"]']);var _=function(t,e){t=M(t);var i=t[h]("data-height");e=e||{},this.height=!!x&&(e.height||"true"===i);var n,o,a,l,r,s,c,d=this,u=S(t,".nav"),g=!1,v=u&&M(".dropdown-toggle",u),b=function(){g[w].height="",D(g,"collapsing"),u.isAnimating=!1},k=function(){g?s?b():setTimeout(function(){g[w].height=c+"px",g.offsetWidth,X(g,b)},50):u.isAnimating=!1,U.call(n,"shown","tab",o)},A=function(){g&&(a[w].float=y,l[w].float=y,r=a.scrollHeight),I(l,T),U.call(n,"show","tab",o),D(a,T),U.call(o,"hidden","tab",n),g&&(c=l.scrollHeight,s=c===r,I(g,"collapsing"),g[w].height=r+"px",g.offsetHeight,a[w].float="",l[w].float=""),H(l,"fade")?setTimeout(function(){I(l,"show"),X(l,k)},20):k()};if(u){u.isAnimating=!1;var C=function(){var t,e=B(u,T);return 1!==e[m]||H(e[0][p],"dropdown")?e[m]>1&&(t=e[e[m]-1]):t=e[0],t},E=function(){return M(C()[h]("href"))},L=function(t){t.preventDefault(),n=t.currentTarget,!u.isAnimating&&!H(n,T)&&d.show()};this.show=function(){n=n||t,l=M(n[h]("href")),o=C(),a=E(),u.isAnimating=!0,D(o,T),o[f]("aria-selected","false"),I(n,T),n[f]("aria-selected","true"),v&&(H(t[p],"dropdown-menu")?H(v,T)||I(v,T):H(v,T)&&D(v,T)),U.call(o,"hide","tab",n),H(a,"fade")?(D(a,"show"),X(a,A)):A()},"Tab"in t||W(t,"click",L),d.height&&(g=E()[p]),t.Tab=d}};a[b](["Tab",_,'[data-toggle="tab"]']);var tt=function(t,e){t=M(t),e=e||{};var i=t[h]("data-animation"),n=t[h]("data-autohide"),o=t[h]("data-delay");this.animation=!1===e.animation||"false"===i?0:1,this.autohide=!1===e.autohide||"false"===n?0:1,this[r]=parseInt(e[r]||o)||500;var a=this,l=0,s=S(t,".toast"),c=function(){D(s,"showing"),I(s,"show"),U.call(s,"shown","toast"),a.autohide&&a.hide()},d=function(){I(s,"hide"),U.call(s,"hidden","toast")},u=function(){D(s,"show"),a.animation?X(s,d):d()},f=function(){clearTimeout(l),l=null,I(s,"hide"),R(t,"click",a.hide),t.Toast=null,t=null,s=null};this.show=function(){s&&(U.call(s,"show","toast"),a.animation&&I(s,"fade"),D(s,"hide"),I(s,"showing"),a.animation?X(s,c):c())},this.hide=function(t){s&&H(s,"show")&&(U.call(s,"hide","toast"),t?u():l=setTimeout(u,a[r]))},this.dispose=function(){s&&H(s,"show")&&(D(s,"show"),a.animation?X(s,f):f())},"Toast"in t||W(t,"click",a.hide),t.Toast=a};a[b](["Toast",tt,'[data-dismiss="toast"]']);var et=function(i,o){i=M(i),o=o||{};var a=i[h]("data-animation"),l=i[h]("data-placement"),s=i[h]("data-delay"),u=i[h]("data-container"),p=M(o.container),m=M(u),g=S(i,".modal"),v=S(i,".fixed-top"),w=S(i,".fixed-bottom");this[c]=o[c]&&"fade"!==o[c]?o[c]:a||"fade",this.placement=o.placement?o.placement:l||k,this[r]=parseInt(o[r]||s)||200,this.container=p||(m||(v||(w||(g||e[n]))));var b=this,T=0,y=this.placement,A=null,C=i[h]("title")||i[h]("data-title")||i[h]("data-original-title");if(C&&""!=C){var x=function(){b.container.removeChild(A),A=null,T=null},E=function(){if(!(C=i[h]("title")||i[h]("data-title")||i[h]("data-original-title"))||""==C)return!1;A=e.createElement("div"),A[f]("role","tooltip");var t=e.createElement("div");t[f]("class","arrow"),A.appendChild(t);var n=e.createElement("div");n[f]("class","tooltip-inner"),A.appendChild(n),n.innerHTML=C,b.container.appendChild(A),A[f]("class","tooltip bs-tooltip-"+y+" "+b[c])},L=function(){F(i,A,y,b.container)},N=function(){!H(A,"show")&&I(A,"show")},B=function(){W(t,"resize",b.hide,z),U.call(i,"shown","tooltip")},P=function(){R(t,"resize",b.hide,z),x(),U.call(i,"hidden","tooltip")};this.show=function(){clearTimeout(T),T=setTimeout(function(){if(null===A){if(y=b.placement,0==E())return;L(),N(),U.call(i,"show","tooltip"),b[c]?X(A,B):B()}},20)},this.hide=function(){clearTimeout(T),T=setTimeout(function(){A&&H(A,"show")&&(U.call(i,"hide","tooltip"),D(A,"show"),b[c]?X(A,P):P())},b[r])},this.toggle=function(){A?b.hide():b.show()},"Tooltip"in i||(i[f]("data-original-title",C),i.removeAttribute("title"),W(i,d[0],b.show),W(i,d[1],b.hide)),i.Tooltip=b}};a[b](["Tooltip",et,'[data-toggle="tooltip"]']);var it=function(t,e){for(var i=0,n=e[m];i<n;i++)new t(e[i])},nt=o.initCallback=function(t){t=t||e;for(var i=0,n=a[m];i<n;i++)it(a[i][1],t.querySelectorAll(a[i][2]))};return e[n]?nt():W(e,"DOMContentLoaded",function(){nt()}),{Alert:Y,Button:G,Carousel:J,Collapse:K,Dropdown:Q,Modal:V,Popover:Z,ScrollSpy:$,Tab:_,Toast:tt,Tooltip:et}});