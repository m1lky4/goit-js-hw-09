!function(){var t,e=document.querySelector("body"),r=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");r.addEventListener("click",(function(){t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),r.setAttribute("disabled",""),a.removeAttribute("disabled")})),a.addEventListener("click",(function(){clearInterval(t),a.setAttribute("disabled",""),r.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.aaf77c66.js.map
