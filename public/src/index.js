class header extends HTMLElement{
	constructor(){
		super()
		this.innerHTML = `<div>
			
		</div>`;
	}
}

customElements.define("header-app", header)