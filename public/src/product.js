let testData = [
    {
		"id": "1",
      "url": ['images/Q90.jpg', 'images/Q90.jpg', 'images/Q90.jpg'],
      "price": "1000"
    },
    {

      "id": "2",
	"url": ['images/Q90.jpg', 'images/Q90.jpg'],
      "price": "2000"
    },
    {

      "id": "3",
      "url": ['images/Q90.jpg', 'images/Q90.jpg', 'images/Q90.jpg', 'images/Q90.jpg'],
      "price": "3000"
    }
  ]
// console.log(testData[2].title);

class header extends HTMLElement{
	constructor(){
		super()
		let allData = '';
		let txtData = '';
		let sliderNav = '';
		let countImg = 1;
		// console.log(testData[0].url.length)
		for(let i =0; i<testData.length;i++){
			
			for(let j =0; j<testData[i].url.length; j++){
				// console.log(testData[i].url[j]+" : J "+ j)
				txtData += `<img class="imgItem${i+1}" src=${testData[i].url[j]} alt="show1"  />`;
				sliderNav += `<div class="dotsId${testData[i].id}" onClick="FnDots(${countImg}, ${testData[i].id})"></div>`;
				countImg += 1;
			}
			allData += `
				
				<div class="slider slider-id-${testData[i].id}" data-count="1">
					<p id="count-slider-${testData[i].id}" style="display: none;">1</p>
					<input type="hidden" id="total-img-${testData[i].id}" value="${testData[i].url.length}" />
					${txtData}
				</div>
				
				
				<div class="slider-nav slider-nav-id-${testData[i].id}">
					${sliderNav}
				</div>
			`
			txtData = '';
			sliderNav = ''; 
			countImg = 1;
			
		}
		this.innerHTML = `<div>
		<p id="all-images" style="display: none;">${testData.length}</p>
		${allData}
		</div>`;
	}
}

customElements.define("show-img", header)


// <div class="btn-slider">
					// <div class="left"><</div>
					// <div class="right">></div>
				// </div>