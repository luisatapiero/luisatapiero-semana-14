import './style.css'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";

const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('pass-input');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', async () => {

    try {

        const email = emailInput.value;
        const password = passwordInput.value;
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        // El usuario ha iniciado sesión correctamente
        console.log(user);
        alert('Inicio de sesión exitoso');
        window.location.href = "/";
        // Realiza las acciones adicionales que desees después del inicio de sesión exitoso
    } catch (error) {
        // Hubo un error durante el inicio de sesión
        //console.error(error);
        if (error.code === 'auth/user-not-found') {
            // El correo no existe
            alert('El correo electrónico no existe');
          } else if (error.code === 'auth/wrong-password') {
            // Contraseña incorrecta
            alert('Contraseña incorrecta');
          } else {
            // Otro tipo de error
            alert('Error en el inicio de sesión '+error);
          }
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
      // El usuario ha iniciado sesión
      
    } else {
      // El usuario no ha iniciado sesión
     
    }
  });

// Obtener el elemento del botón de cierre de sesión
/*const logoutButton = document.getElementById('logout-button');

// Verificar si el elemento logout-button existe en la página actual
if (logoutButton) {
  // Función para mostrar el botón de cierre de sesión
  function showLogoutButton() {
    logoutButton.style.display = 'block';
  }

  // Función para ocultar el botón de cierre de sesión
  function hideLogoutButton() {
    logoutButton.style.display = 'none';
  }

  // Escuchar el cambio de estado de autenticación
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // El usuario ha iniciado sesión
      showLogoutButton();
    } else {
      // El usuario no ha iniciado sesión
      hideLogoutButton();
    }
  });*/

  // Agregar evento de clic al botón de cierre de sesión
  /*logoutButton.addEventListener('click', async () => {
    try {
      await signOut(auth);
      alert('Has cerrado sesión correctamente');
      // El usuario ha cerrado sesión correctamente
      // Realiza las acciones adicionales que desees después del cierre de sesión
    } catch (error) {
      console.error(error);
      alert('Error al cerrar sesión');
    }
  });*/
