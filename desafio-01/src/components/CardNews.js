class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Heloo Word</h1>";
    }

    build(){

    }

    styles(){
        
    }
}

customElements.define("card-news", CardNews);