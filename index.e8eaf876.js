!function(){var e=document.querySelectorAll(".img-item"),t=document.querySelectorAll(".sale-image-small"),i=document.getElementById("large-image");e.forEach((function(e){e.addEventListener("click",(function(){var e=this.querySelector("img").src;i.classList.remove("fade-in"),i.style.opacity=0,setTimeout((function(){i.src=e,setTimeout((function(){i.classList.add("fade-in"),i.style.opacity=1}),100)}),300)}))})),e[0].click(),t.forEach((function(e,t){setTimeout((function(){e.classList.add("fade-in")}),200*t)}))}();
//# sourceMappingURL=index.e8eaf876.js.map
