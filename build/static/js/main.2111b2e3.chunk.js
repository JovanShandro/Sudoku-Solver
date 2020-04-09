(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{24:function(e,t,n){e.exports=n(34)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),c=n.n(o),u=(n(29),n(30),function(){return a.a.createElement("div",{className:"headerContainer"},a.a.createElement("h1",{className:"header"},"Sudoku Solver"),a.a.createElement("p",{className:"description"},"Welcome! Ready to solve some sudoku? Enter any digit you want in the board below and then press solve and enjoy the show! You can use the clear button to empty the board and the import button to use a text file for entering values. The text file must look like",a.a.createElement("span",{className:"tooltip"},a.a.createElement("span",{className:"tooltip--text"}," this"),a.a.createElement("span",{className:"tooltip--dropdown"},"1 2 3\xa0 4 5 6\xa0 7 0 9 ",a.a.createElement("br",null),"4 0 6\xa0 7 8 9\xa0 1 2 3 ",a.a.createElement("br",null),"7 8 9\xa0 1 2 3\xa0 0 5 6 ",a.a.createElement("br",null),a.a.createElement("span",{className:"br"}),"2 1 4\xa0 3 6 5\xa0 0 9 7 ",a.a.createElement("br",null),"3 6 5\xa0 8 0 7\xa0 2 1 4 ",a.a.createElement("br",null),"8 0 7\xa0 2 1 4\xa0 3 6 5 ",a.a.createElement("br",null),a.a.createElement("span",{className:"br"}),"5 0 1\xa0 6 4 2\xa0 9 7 8 ",a.a.createElement("br",null),"6 4 2\xa0 0 7 8\xa0 5 0 1 ",a.a.createElement("br",null),"0 7 8\xa0 5 3 1\xa0 0 4 2 ",a.a.createElement("br",null))),", otherwise the app will crash! Use 0 if you want the square to be empty."))}),l=n(19),i=(n(31),function(e){var t=e.value,n=e.setBoardEntry,r=e.coordinates,o=r.rowNr,c=r.colNr;return a.a.createElement("input",{id:"square-".concat(o,"-").concat(c),className:"square ".concat(c%3===2?"m-right":o%3===2?"m-bottom":""),type:"text",maxLength:1,value:t,onChange:function(e){return n(e.currentTarget.value.replace(/[^1-9]/g,""))}})}),s=n(40),f=n(39),m=n(43),d=n(36),v=n(37),b=n(22),E=n(44),p=n(23),h=n(41),w=(n(32),function(e){var t=e.clearBoard,n=e.setImportedBoard,r=e.solveSudoku;return a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{onClick:t},"Clear"),a.a.createElement("div",{className:"fileInput"},a.a.createElement("label",{htmlFor:"file"},"Import"),a.a.createElement("input",{id:"file",type:"file",style:{visibility:"hidden",display:"none"},onChange:function(e){return function(e){if(e.target.files[0]){var t=new FileReader;t.onloadend=function(){var e=Object(s.a)(Object(f.a)("\n"),Object(m.a)((function(e){return Object(d.a)(1)(e.replace(/[ ]/g,""))})),Object(m.a)((function(e){return Object(m.a)((function(e){return Object(v.a)(Object(b.a)("0"),(function(){return""}),E.a)(e)}))(e)})),Object(p.a)((function(e){return!Object(b.a)([],e)})),Object(h.a)(9))(t.result);n(e)},t.readAsText(e.target.files[0]),e.target.value=""}}(e)}})),a.a.createElement("button",{onClick:r},"Solve"))}),y=n(46),k=n(42),N=function e(t){var n={row:0,col:0};if(!g(t,n))return!0;for(var r=1;r<=9;r++){var a=r.toString();if(j(t,n.row,n.col,a)){if(t[n.row][n.col]=a,e(t))return!0;t[n.row][n.col]=""}}return!1},g=function(e,t){for(t.row=0;t.row<9;t.row++)for(t.col=0;t.col<9;t.col++)if(b.a(e[t.row][t.col],""))return!0;return!1},j=function(e,t,n,r){return!function(e,t,n){for(var r=0;r<9;r++)if(b.a(e[t][r],n))return!0;return!1}(e,t,r)&&!function(e,t,n){for(var r=0;r<9;r++)if(b.a(e[r][t],n))return!0;return!1}(e,n,r)&&!function(e,t,n,r){for(var a=0;a<3;a++)for(var o=0;o<3;o++)if(b.a(e[a+t][o+n],r))return!0;return!1}(e,t-t%3,n-n%3,r)},O=n(38),S=n(0),x=n(45),B=(O.a,[]),q=function(){for(var e=0,t=0,n=!1,r=1;r<=9;++r){for(var a=0;a<r&&(B.push(C(e)(t)),a+1!==r);++a)n?(++e,--t):(--e,++t);if(9===r)break;n?(++e,n=!1):(++t,n=!0)}0===e?(8===t?++e:++t,n=!0):(8===e?++t:++e,n=!1);for(var o,c=8;c>0;--c){o=c>9?9:c;for(var u=0;u<o&&(B.push(C(e)(t)),u+1!==o);++u)n?(++e,--t):(++t,--e);0===e||8===t?(8===t?++e:++t,n=!0):0!==t&&8!==e||(8===e?++t:++e,n=!1)}},C=function(e){return function(t){return document.getElementById("square-".concat(e,"-").concat(t))}},I=(n(33),[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]]),T=Object(y.a)(m.a),A=function(){var e=Object(r.useState)(I),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),s=u[0],f=u[1];Object(r.useEffect)((function(){!function(){q();var e,t,n=new S.d;for(e=1,t=!1;t?e>0:e<=9;t?e--:e++){var r=h.a(e,B);B=x.a(e,B),m.a((function(t){return n.fromTo(t,.004*e,{opacity:0,x:-20,y:-20},{opacity:1,x:0,y:0,ease:S.b.easeInOut})}))(r),9===e&&(t=!0)}}()}),[]);return a.a.createElement("div",{className:"mainContent"},a.a.createElement("div",{className:"board"},a.a.createElement("span",null,T((function(e,t){return a.a.createElement("div",{className:"row",key:t},T((function(e,r){return a.a.createElement(i,{coordinates:{rowNr:t,colNr:r},setBoardEntry:function(e){return function(e){return function(t){return function(r){var a=Object(k.a)(n);a[e][t]=r,o((function(){return a}))}}}(t)(r)(e)},value:e,key:r})}))(e))}))(n))),""!==s?a.a.createElement("div",{className:"errorMsg"},a.a.createElement("span",null,a.a.createElement("i",{className:"fas fa-exclamation"}),s)):"",a.a.createElement(w,{setImportedBoard:function(e){f((function(){return""})),o((function(){return e}))},clearBoard:function(){f((function(){return""})),o((function(){return I}))},solveSudoku:function(){switch(function(e){for(var t=0,n=0;n<9;n++)for(var r=0;r<9;r++)b.a(e[n][r],"")&&t++;if(0===t)return 1;for(var a=0;a<9;a++)for(var o=0;o<9;o++)if(!b.a(e[a][o],"")){for(var c=0;c<9;c++)if(c!==o&&e[a][c]===e[a][o])return 2;for(var u=0;u<9;u++)if(u!==a&&e[u][o]===e[a][o])return 2;for(var l=a-a%3,i=o-o%3,s=0;s<3;s++)for(var f=0;f<3;f++){var m=l+s,d=i+f;if(m!==a&&d!==o&&e[m][d]===e[a][o])return 2}}return 0}(n)){case 1:return void f((function(){return"Sudoku is already full!"}));case 2:return void f((function(){return"Sudoku is invalid! Recheck the values!"}))}var e=function(e){var t=k.a(e);return N(t)?t:[[]]}(n);Object(b.a)([[]])(e)?f((function(){return"Sudoku cannot be solved"})):(document.querySelectorAll(".square").forEach((function(e){return""===e.value?e.classList.add("animate"):e})),f((function(){return""})),setTimeout((function(){o((function(){return e})),document.querySelectorAll(".square").forEach((function(e){return e.classList.remove("animate")}))}),500))}}))},L=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(u,null),a.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2111b2e3.chunk.js.map