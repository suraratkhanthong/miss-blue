
let count = 1;
let customChange = false;
let countImg = 3;
let sizeScreenM = 96;
let allSlide = document.querySelector(".slider").querySelectorAll('img');
let allDots = document.querySelector(".slider-nav").querySelectorAll('div');
if(window.innerWidth>=600){sizeScreenM=36}

const sliding = (x)=>{
	let left = `${-x*sizeScreenM}vw`;
	
	
	allSlide.forEach((element)=>{
		element.style.left = left;
	})
	allDots.forEach((dots)=>{
		dots.style.border = 'unset';
		dots.style.scale = "0.8";
	})
	allDots[x].style.transition = '0.6s';
	allDots[x].style.scale = '1.5';
	allDots[x].style.border = "1px solid #eeff5d";
}

// setInterval(()=>{
	// if(customChange != true){
		// if(count==3){
			// sliding(0);
			// count=1;
		// }else{
			// sliding(count);
			// count += 1;
		// }
	// }
// }, 3000)
// setTimeout(()=>{
	// rightSwipe()
// }, 2000);

function FnDots1(x){
	sliding(x-1);
	count=countImg;
}

const leftSwipe = ()=>{
	customChange = true;
	setTimeout(()=>{customChange=false}, 2000);
	if(count == 1){
		sliding(countImg-1);
		count=countImg;
	}else{
		count -= 1;
		sliding(count -1);
	}
}

const rightSwipe = ()=>{
	customChange = true;
	setTimeout(()=>{customChange=false}, 2000);
	if(count == countImg){
		sliding(0);
		count=1;
	}else{
		sliding(count);
		count += 1;
		}
}

document.querySelector(".left").onclick=()=>{leftSwipe()}
document.querySelector(".right").onclick=()=>{rightSwipe()}

// ---------------- Mobile ----------------------

let countTouchMove = 0;
let countTouchStart = 0;

document.querySelector(".slider").addEventListener('touchstart', function(e) {
	var touchLocation = e.targetTouches[0];
    countTouchStart =+ touchLocation.pageX; 
})

console.log(countTouchStart);
document.querySelector(".slider").addEventListener('touchend', function(e) {
	countTouchMove-countTouchStart > 0 ? leftSwipe() : rightSwipe()
})

document.querySelector(".slider").addEventListener('touchmove', function(e) {
	var touchLocation = e.targetTouches[0];
    countTouchMove =+ touchLocation.pageX; 
})


// ---------------- PC ----------------------

document.querySelector(".slider").onpointerdown=(e)=>{
	let initX = e.clientX;
	document.querySelector(".slider").onpointerup=(up)=>{
		let finalX = up.clientX;
		finalX-initX > 0 ? leftSwipe() : rightSwipe()
	}
}



// class header extends HTMLElement{
	// constructor(){
		// super()
		// this.innerHTML = `<div>
			
		// </div>`;
	// }
// }

// customElements.define("header-app", header)

// window.onscroll = function() {myFunction()};

// let BtnMenu = document.querySelector(".menu");
// let NavList = document.querySelector(".nav__list");
// let coutCliackMenu = 0;

// function myFunction() {
	// let scrollTop = document.documentElement.scrollTop;
	// let HeaderApp = document.querySelector(".Header-app");
    // if(scrollTop >= 110){
		// HeaderApp.style.visibility = "visible";
	// }
	// if( scrollTop < 110){
		// HeaderApp.style.visibility = "hidden";
		
		// BtnMenu.classList.remove("opened")
		// NavList.classList.remove("nav__menu-lists")
		// coutCliackMenu=0;
	// }
// }

// function clickMenu(){
	
	// if (coutCliackMenu === 0) {
      // BtnMenu.classList.add("opened")
      // NavList.classList.add("nav__menu-lists")
      // coutCliackMenu=coutCliackMenu+1;
    // } else {
      // BtnMenu.classList.remove("opened")
      // NavList.classList.remove("nav__menu-lists")
      // coutCliackMenu=coutCliackMenu-1;
    // }
// }