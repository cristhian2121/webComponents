const template = document.createElement('div')
template.innerHTML = `
    <style>
        p {
            color: blue
        }
        .para-two {
            font-size: 1.1rem;
            color: red;
        }

    </style>
    <p>Hi world</p>
    <p class="para-two">Other parafs</p>
`

class MyElement extends HTMLElement {
    constructor(){
        super() // access to methods in html elements
        console.log("life circle: constructor");

        this.p = document.createElement('p')

    }

    connectedCallback() {
        this.p.textContent = "Hi I'm a label"
        this.appendChild(this.p)
        this.appendChild(template)
    }



}

customElements.define("my-element", MyElement)