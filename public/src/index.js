class header extends HTMLElement{
	constructor(){
		super()
		this.innerHTML = `<div>
			
		</div>`;
	}
}

customElements.define("header-app", header)

window.onscroll = function() {myFunction()};

function myFunction() {
	let scrollTop = document.documentElement.scrollTop;
	let HeaderApp = document.querySelector(".Header-app");
    if(scrollTop >= 110){
		HeaderApp.style.visibility = "visible";
	}
	if( scrollTop < 110){
		HeaderApp.style.visibility = "hidden";
	}
}
let coutCliackMenu = 0;
function clickMenu(){
	let BtnMenu = document.querySelector(".menu");
	let NavList = document.querySelector(".nav__list");
	if (coutCliackMenu === 0) {
      BtnMenu.classList.add("opened")
      NavList.classList.add("nav__menu-lists")
      coutCliackMenu=coutCliackMenu+1;
    } else {
      BtnMenu.classList.remove("opened")
      NavList.classList.remove("nav__menu-lists")
      coutCliackMenu=coutCliackMenu-1;
    }
}