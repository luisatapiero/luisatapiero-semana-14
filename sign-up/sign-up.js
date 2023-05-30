import './style.css'
import { createUser } from '../firebase.js'

const inputElements = document.querySelector('#sign-up-form').querySelectorAll('input')
console.log(inputElements)
const formButton = document.getElementById('form-button')
formButton.addEventListener('click',(e)=>signUp(e))

function signUp(e){
    e.preventDefault()

    const userInfo = {}
        inputElements.forEach((elem)=>{
            if(elem.files && elem.files[0]){
                userInfo[elem.name] = elem.files[0]
            }else if(elem.value && elem.value.length > 0){
                userInfo[elem.name] = elem.value
            }else{
                alert('No todos los valores están diligenciados')
            }
        })

        console.log(userInfo)
        if (userInfo.pass === userInfo.confirm){
            createUser(userInfo)
            
        }else{
            alert('Las contraseñas no coinciden')
        }
    
}