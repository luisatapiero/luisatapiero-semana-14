import './style.css'

class SectionExampleComponent extends HTMLElement {

    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
    }

    // This methos is called once the component is created in DOM
    connectedCallback() {
        this.render();
    }

    // this is how you declare which props are you interested in
    // Nota: no usar 'title' como atributo pues genera problemas al ser una palabra reservada
    static get observedAttributes() {
        return ['name', 'description', 'background'];
    }

    // this is called when any of the observedAttributes changes
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    // this is our main html for the component, and is reRendered when attr changes
    render() {
        this.innerHTML = `
          <section class="section-comp" style="background-color: ${this.background}">
            <h1>${this.name}</h1>
            <h2 class="section-comp__subtitle">The hardcoded subtitle</h2>
            <p>${this.description}</p>
            <slot></slot>
          </section>
          `;
    }
}

customElements.define('section-example-component', SectionExampleComponent);
export default SectionExampleComponent;