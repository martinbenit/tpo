function validarFormulario() {
	// Defino variables con los datos del formulario
    var nombre = document.getElementById("nom").value;
	var apellido = document.getElementById("ape").value;
    var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var destino= document.getElementById("destino").value;
	var salida = document.getElementById("salida").value;
	var llegada = document.getElementById("llegada").value;
	var pasajeros = document.getElementById("pasajeros").value;
	var comentarios = document.getElementById("comentarios").value;

	// Defino variables con los errores del formulario

    var nombreError = document.getElementById("nombre-error");
	var nombreVacio = document.getElementById("nombre-vacio");
	var apellidoError = document.getElementById("apellido-error");
	var apellidoVacio = document.getElementById("apellido-vacio");
	var emailError = document.getElementById("email-error");
	var emailVacio = document.getElementById("email-vacio");
	var telError = document.getElementById("tel-error");
	var destinoVacio = document.getElementById("destino-vacio");
	var salidaVacio = document.getElementById("salida-vacio");
	var salidaError = document.getElementById("salida-error");
	var llegadaVacio = document.getElementById("llegada-vacio");
	var salidaLlegadaError = document.getElementById("salida-llegada-error")
	var pasajerosVacio = document.getElementById("pasajeros-vacio");

    // Oculto los mensajes de error al principio de cada validación
	var Errores = document.querySelectorAll(".error");
	// Recorro los errores y los oculto
	Errores.forEach(function(errorElement) {
	  errorElement.style.display = "none";
	});

	// ------------------- VALIDACION PARA EL NOMBRE -------------------------
	// Si no completa el nombre
    if (nombre === "") {
      nombreVacio.style.display = "block";
      return false;
    }
	//Si el nombre no cumple con lo pedido
    var nomyapeRegExp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, puede llevar acentos, hasta 40 caracteres.
    if (!nomyapeRegExp.test(nombre)) {
      nombreError.style.display = "block";
      return false;
    }

	// ------------------- VALIDACION PARA EL APELLIDO -------------------------
	// Si no completa el apellido
	if (apellido === "") {
		apellidoVacio.style.display = "block";
		return false;
	  }
	//Si el apellido no cumple lo pedido (letras y espacios, puede llevar acentos, hasta 40 caracteres)
	if (!nomyapeRegExp.test(apellido)) {
		apellidoError.style.display = "block";
		return false;
	}
	// ------------------- VALIDACION PARA EL EMAIL -------------------------
	// Si no completa el email
	if (email === "") {
		emailVacio.style.display = "block";
		return false;
	  }
	// Si el mail no cumple con la estructura de un mail
	var emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	if (!emailRegExp.test(email)) {
		emailError.style.display = "block";
		return false;
	}

	// ------------------- VALIDACION PARA EL TELEFONO -------------------------
	// Si el teléfono no tiene entre 7 y 14 números
	var telRegExp = /^\d{7,14}$/ // 7 a 14 numeros.
	if (tel != "" && !telRegExp.test(tel)) {
		telError.style.display = "block";
		return false;
	}

	// ------------------- VALIDACION PARA EL DESTINO -------------------------
	// Si no selecciona un destino de la lista desplegable
	if (destino === "" || destino === "default") {
		destinoVacio.style.display = "block";
		return false;
	}

	// ------------------- VALIDACION PARA LA FECHA DE SALIDA -------------------------
  	// Si no selecciona una fecha de salida del calendario
	if (salida === "") {
		salidaVacio.style.display = "block";
		return false;
	}
	// Si la fecha de salida no es posterior a la actual
	var fechaActual = new Date();
		// Acomodo la fecha actual para poder compararla con la que proporciona el usuario
	var anio = fechaActual.getFullYear();
	var mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2); // Sumo 1 al mes y formateo con dos dígitos
	var dia = ('0' + fechaActual.getDate()).slice(-2); // Formato con dos dígitos
	var nuevaFechaActual = anio + '-' + mes + '-' + dia;
		// Verifico si la fecha ingresada es posterior a la fecha actual
	if (salida <= nuevaFechaActual) {	
		salidaError.style.display = "block";
		return false;
	}

	// ------------------- VALIDACION PARA LA FECHA DE LLEGADA -------------------------
	// Si no selecciona una fecha de llegada del calendario
	if (llegada === "") {
		llegadaVacio.style.display = "block";
		return false;
	}

	//Si la fecha de llegada no es posterior a la fecha de salida
	if (llegada <= salida) {	
		salidaLlegadaError.style.display = "block";
		return false;
	}
	
	// ------------------- VALIDACION PARA LA CANTIDAD DE PASAJEROS -------------------------
	// Si no completa la cantidad de pasajeros
	if (pasajeros === "") {
		pasajerosVacio.style.display = "block";
		return false;
	}
	
    return true;
}

document.getElementById("formulario").addEventListener("submit", function(event) {
	if (!validarFormulario()) {
      event.preventDefault();
    }
});

// Agrega un oyente de eventos al botón "reset"
document.getElementById("boton-reset").addEventListener("click", function() {
	// Obtiene todos los elementos con la clase "error"
	var Errores = document.querySelectorAll(".error");
  
	// Recorre los errores y los oculta
	Errores.forEach(function(errorElement) {
	  errorElement.style.display = "none";
	});
});
























// ######################## PARA LA API DEL CLIMA ################################