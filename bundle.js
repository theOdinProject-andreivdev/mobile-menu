(()=>{"use strict";class e{constructor(e){console.log("mobile menu item created"),this.element=e,this.setHidden()}setHidden(){this.element.style.display="none"}setVisible(){this.element.style.display="flex"}}let t=new class{constructor(e){console.log("mobile menu created"),this.element=e,this.items=[],this.addHandlers()}addHandlers(){this.element.addEventListener("mouseover",function(){this.items.forEach((e=>{e.setVisible()}))}.bind(this)),this.element.addEventListener("mouseout",function(){this.items.forEach((e=>{e.setHidden()}))}.bind(this))}addItem(e){this.items.push(e)}}(document.querySelector(".mobileMenu"));document.querySelectorAll(".mobileMenuItem").forEach((s=>{t.addItem(new e(s))}))})();