
//Nombre
let NameInput = document.getElementById("nom");
let emptyNameError = document.getElementById("nombre-vacio");


//Apellido
let LastNameInput= document.getElementById('ape');
let emptyLastNameError = document.getElementById("apellido-vacio");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("email-vacio");

//Teléfono
let TelInput = document.getElementById("tel");
let TelError = document.getElementById("tel-error");


//Destino


//Consulta



//verificación de nombre y apellido
const verificarNombreApellido = (text) => {
	const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
	return regex.test(text);
  };

//verificación de email
const verificarEmail = (input) => {
	const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	return regex.test(input);
  };

//verificación de teléfono
const verificarTel = (input) => {
	const regex = /^\d{7,14}$/ // 7 a 14 numeros.
	return regex.test(input);
}












//Name
NameInput.addEventListener("input", () => {
	if (verificarNombreApellido(NameInput.value)) {
	  NameError.classList.add("hide");
	  validInput(NameInput);
	} else {
	  errorUpdate(NameInput, NameError);
	  emptyUpdate(NameInput, emptyNameError, NameError);
	}
  });
  //Email
  emailInput.addEventListener("input", () => {
	if (emailVerify(emailInput.value)) {
	  emailError.classList.add("hide");
	  validInput(emailInput);
	} else {
	  errorUpdate(emailInput, emailError);
	  emptyUpdate(emailInput, emptyEmailError, emailError);
	}
  });