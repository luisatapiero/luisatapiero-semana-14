import './style.css'
import { logOut } from '../../firebase.js';

class HeaderComponent extends HTMLElement {

    constructor() {
        super();
    }

    // This methos is called once the component is created in DOM
    connectedCallback() {
        this.render();
    }

    // this is how you declare which props are you interested in
    // Nota: no usar 'title' como atributo pues genera problemas al ser una palabra reservada
    static get observedAttributes() {
        return ['email', 'logged'];
    }

    // this is called when any of the observedAttributes changes
    attributeChangedCallback(propName, oldValue, newValue) {
        console.log('isLogged =>  ' ,this.logged)
        this[propName] = newValue;
        this.render();
    }

    // this is our main html for the component, and is reRendered when attr changes
    render() {
        this.innerHTML = `
            <header class="header-comp">
                <h2>Mi Tienda</h2>
                <h2>${this.logged?'usuario loggeado como: '+this.email: 'No Estas Loggeado'} </h2>
                <button>${this.logged? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
            </header>
          `;

           const button = this.querySelector('button')
           console.log(button)
           button.addEventListener('click', ()=> this.handleButton()) 
        
    }

    handleButton() {
        console.log('click en el boton')
        if(!this.logged){
            window.location.replace('/log-in/')
        } else {
            logOut()
        }
    }
}

customElements.define('header-component', HeaderComponent);
export default HeaderComponent;