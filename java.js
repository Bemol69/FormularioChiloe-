// Obtener referencias a los elementos del formulario
const form = document.getElementById('registrationForm');
const validationMessages = document.getElementById('validationMessages');
const rut = document.getElementById('rut');
const apellidoPaterno = document.getElementById('apellidoPaterno');
const apellidoMaterno = document.getElementById('apellidoMaterno');
const nombre = document.getElementById('nombre');
const fechaNacimiento = document.getElementById('fechaNacimiento');
const edad = document.getElementById('edad');
const genero = document.getElementById('genero');
const email = document.getElementById('email');
const celular = document.getElementById('celular');
const profesion = document.getElementById('profesion');
const motivacion = document.getElementById('motivacion');
const carta = document.getElementById('carta');
const crearCarta = document.getElementById('crearCarta');
const registrationBtn = document.getElementById('registrationBtn');

// Función para validar el formulario
function validateForm() {
    let isValid = true;
    const messages = [];
  
    // Validar campos requeridos
    if (rut.value.trim() === '') {
      isValid = false;
      messages.push('El RUT es requerido');
    }
    if (apellidoPaterno.value.trim() === '') {
      isValid = false;
      messages.push('El apellido paterno es requerido');
    }
    // ... (validaciones de otros campos requeridos)
  
    // Validar longitudes
    if (rut.value.trim().length < 9 || rut.value.trim().length > 10) {
      isValid = false;
      messages.push('El RUT debe tener entre 9 y 10 caracteres');
    }
    if (nombre.value.trim().length < 3 || nombre.value.trim().length > 20) {
      isValid = false;
      messages.push('El nombre debe tener entre 3 y 20 caracteres');
    }
    if (apellidoPaterno.value.trim().length < 3 || apellidoPaterno.value.trim().length > 20) {
      isValid = false;
      messages.push('El apellido paterno debe tener entre 3 y 20 caracteres');
    }
    if (apellidoMaterno.value.trim().length < 3 || apellidoMaterno.value.trim().length > 20) {
      isValid = false;
      messages.push('El apellido materno debe tener entre 3 y 20 caracteres');
    }
  
    // Validar edad
    if (edad.value < 18 || edad.value > 35) {
      isValid = false;
      messages.push('La edad debe estar entre 18 y 35 años');
    }
  
    // Validar género
    if (genero.value === '') {
      isValid = false;
      messages.push('Debe seleccionar un género');
    }
  
    // Validar celular
    if (celular.value.trim().length < 9 || celular.value.trim().length > 12) {
      isValid = false;
      messages.push('El número de celular debe tener entre 9 y 12 caracteres');
    }
  
    // Validar carta
    if (carta.value.trim() === '') {
      isValid = false;
      messages.push('Debe crear una carta de presentación');
    }
  
    // Mostrar mensajes de validación
    if (messages.length > 0) {
      validationMessages.innerHTML = messages.join('<br>');
      validationMessages.style.display = 'block';
    } else {
      validationMessages.style.display = 'none';
    }
  
    return isValid;
  }