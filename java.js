$(document).ready(function() {
  // Obtener referencias a los elementos del formulario
  const $form = $('#registrationForm');
  const $validationMessages = $('#validationMessages');
  const $rut = $('#rut');
  const $apellidoPaterno = $('#apellidoPaterno');
  const $apellidoMaterno = $('#apellidoMaterno');
  const $nombre = $('#nombre');
  const $fechaNacimiento = $('#fechaNacimiento');
  const $edad = $('#edad');
  const $genero = $('#genero');
  const $email = $('#email');
  const $celular = $('#celular');
  const $profesion = $('#profesion');
  const $motivacion = $('#motivacion');
  const $carta = $('#carta');
  const $crearCarta = $('#crearCarta');
  const $registrationBtn = $('#registrationBtn');

  // Función para validar el formulario
  function validateForm() {
    let isValid = true;
    const messages = [];

    // Validar campos requeridos
    if ($rut.val().trim() === '') {
      isValid = false;
      messages.push('El RUT es requerido');
    }
    if ($apellidoPaterno.val().trim() === '') {
      isValid = false;
      messages.push('El apellido paterno es requerido');
    }
    // ... (validaciones de otros campos requeridos)

    // Validar longitudes
    if ($rut.val().trim().length < 9 || $rut.val().trim().length > 10) {
      isValid = false;
      messages.push('El RUT debe tener entre 9 y 10 caracteres');
    }
    if ($nombre.val().trim().length < 3 || $nombre.val().trim().length > 20) {
      isValid = false;
      messages.push('El nombre debe tener entre 3 y 20 caracteres');
    }
    if ($apellidoPaterno.val().trim().length < 3 || $apellidoPaterno.val().trim().length > 20) {
      isValid = false;
      messages.push('El apellido paterno debe tener entre 3 y 20 caracteres');
    }
    if ($apellidoMaterno.val().trim().length < 3 || $apellidoMaterno.val().trim().length > 20) {
      isValid = false;
      messages.push('El apellido materno debe tener entre 3 y 20 caracteres');
    }

    // Validar edad
    if ($edad.val() < 18 || $edad.val() > 35) {
      isValid = false;
      messages.push('La edad debe estar entre 18 y 35 años');
    }

    // Validar género
    if ($genero.val() === '') {
      isValid = false;
      messages.push('Debe seleccionar un género');
    }

    // Validar celular
    if ($celular.val().trim().length < 9 || $celular.val().trim().length > 12) {
      isValid = false;
      messages.push('El número de celular debe tener entre 9 y 12 caracteres');
    }

    // Validar carta
    if ($carta.val().trim() === '') {
      isValid = false;
      messages.push('Debe crear una carta de presentación');
    }

    // Mostrar mensajes de validación
    if (messages.length > 0) {
      $validationMessages.html(messages.join('<br>')).show();
    } else {
      $validationMessages.hide();
    }

    return isValid;
  }

  // Función para crear la carta de presentación
  function crearCartaPresentation() {
    const cartaText = `
      Estimados Señores,

      Me dirijo a ustedes con el fin de presentar mi postulación para el trabajo de apoyo ambiental en Chiloé.

      Nombre: ${$nombre.val()} ${$apellidoPaterno.val()} ${$apellidoMaterno.val()}
      RUT: ${$rut.val()}
      Fecha de Nacimiento: ${$fechaNacimiento.val()}
      Edad: ${$edad.val()}
      Género: ${$genero.val()}
      Correo Electrónico: ${$email.val()}
      Celular: ${$celular.val()}
      Profesión: ${$profesion.val()}

      Motivación:
      ${$motivacion.val()}

      Agradezco de antemano su consideración y quedó atento a sus comentarios.

      Saludos cordiales,
      ${$nombre.val()} ${$apellidoPaterno.val()} ${$apellidoMaterno.val()}
    `;

    $carta.val(cartaText);
  }

  // Manejar el envío del formulario
  $form.on('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    if (validateForm()) {
      // Enviar el formulario
      alert('Formulario enviado correctamente');
      $form.trigger('reset');
      $carta.val('');
    }
  });

  // Manejar el botón "Crear Carta"
  $crearCarta.on('click', crearCartaPresentation);
});