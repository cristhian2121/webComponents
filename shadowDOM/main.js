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
        // add Shadow DOM
        this.attachShadow({
            mode: 'open' // is important thar it's open because
                // so we can see into component
        })
    }

    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <section>
                <h2 class="title">I'm a H2</h2>
                <div>
                    <p>I am more that a element</p>
                </div>
            </section>
            ${this.getStyles()}
        `
        return template
    }

    getStyles = () => `
        <style>
            h2 {
                color: green;
            }
        </style>
    `

    render() {
        // we used shadowRoot for create a new Dom into principal DOM
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback() {
        this.render()
    }



}

customElements.define("my-element", MyElement)