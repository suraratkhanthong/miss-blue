

// let allSlide = document.querySelector(".slider").querySelectorAll('img');
// let allDots = document.querySelector(".slider-nav").querySelectorAll('div');





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





// document.querySelector(".left").onclick=()=>{leftSwipe()}
// document.querySelector(".right").onclick=()=>{rightSwipe()}

// ---------------- Mobile ----------------------

// ---------------- PC ----------------------

// document.querySelector(".slider").onpointerdown=(e)=>{
	// let initX = e.clientX;
	// document.querySelector(".slider").onpointerup=(up)=>{
		// let finalX = up.clientX;
		// finalX-initX > 0 ? leftSwipe() : rightSwipe()
	// }
// }

// });


let sizeScreenM = 96;
if(window.innerWidth>=600){sizeScreenM=36}


function sliding(x, y){
	let left = `${-x * sizeScreenM}vw`;
	// console.log(x+" รูปที่เท่าไร  :  รูปของไอดีไหน "+ y)
	
	document.querySelector(`.slider-id-${ y }`).querySelectorAll('img').forEach((element)=>{
		element.style.left = left;
	})
	
	let countImg = document.querySelector("#total-img-"+y).value
	let allDots = document.querySelector(".slider-nav-id-"+y).querySelectorAll('div');
	allDots.forEach((dots)=>{
		dots.style.border = 'unset';
		dots.style.scale = "0.8";
	})
	allDots[x].style.transition = '0.6s';
	allDots[x].style.scale = '1.5';
	allDots[x].style.border = "1px solid #eeff5d";
}

function leftSwipe(y){
	let countImg = document.querySelector("#total-img-"+y).value
	let countSlider =document.querySelector("#count-slider-"+y);
	let count = parseInt(countSlider.textContent);
	// console.log("leftSwipe")
	if(count == 1){
		sliding(countImg-1, y);
		count=countImg;
	}else{
		count -= 1;
		sliding(count -1, y);
	}
	countSlider.innerHTML = count;
}

function rightSwipe(y){
	let countImg = document.querySelector("#total-img-"+y).value;
	let countSlider =document.querySelector("#count-slider-"+y);
	let count = parseInt(countSlider.textContent);
	// console.log("rightSwipe");
	if(count == countImg){
		sliding(0, y);
		count=1;
	}else{
		sliding(count, y);
		count += 1;
		}
		countSlider.innerHTML = count;
}



	let countTouchMove = 0;
	let countTouchStart = 0;
window.onload = function() {
	let allImg = parseInt(document.querySelector("#all-images").textContent);
	for (let i = 1; i <= allImg; i++) {
        document.querySelector(".slider-id-" + i).addEventListener('touchstart', function(e) {
            var touchLocation = e.targetTouches[0];
            countTouchStart = +touchLocation.pageX;
		})
        document.querySelector(".slider-id-" + i).addEventListener('touchend', function(e) {
            countTouchMove - countTouchStart > 0 ? leftSwipe(i) : rightSwipe(i)
        })

        document.querySelector(".slider-id-" + i).addEventListener('touchmove', function(e) {
            var touchLocation = e.targetTouches[0];
            countTouchMove = +touchLocation.pageX;
        })
    }
	
}

function FnDots(x, y){
	// sliding(x-1, y);
	// count=countImg;
	// let test = document.querySelector("#count-slider-1")
	// alert(test.value)
}



// alert()

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