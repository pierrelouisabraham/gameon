function editNav() {
	const x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");

// Check on submit
document.querySelector("form").addEventListener("submit", evt => {
	let error = false;
	error = checkFirstname() || error;
	error = checkName() || error;
	error = checkEmail() || error;
	error = checkBirthdate() || error;
	error = checkTournament() || error;
	error = checkRadio() || error;
	error = checkTerms() || error;
	if (error)
		evt.preventDefault();
	else {
		closeModal();
		setTimeout(showValidationMessage, 15);
	}
});

function showValidationMessage() {
	alert("Vos données ont bien été prise en compte");
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

function closeModal() {
	modalbg.style.display = "none";
}

function hideElement(el) {
	el.style.display = "none";
}

/**
 * 
 * @param {htmlElement} el 
 */
function showElement(el) {
	el.style.display = "inline";
}

// validation check sur chacun des champs
document.querySelector("#first").addEventListener("blur", checkFirstname); // ou progressif
document.querySelector("#last").addEventListener("blur", checkName); //
document.querySelector("#email").addEventListener("blur", checkEmail);
document.querySelector("#birthdate").addEventListener("blur", checkBirthdate);
document.querySelector("#quantity").addEventListener("blur", checkTournament);
document.querySelectorAll("input[type='radio']").forEach(radio => {
	radio.addEventListener(("click"), checkRadio);
});
document.querySelector("#checkbox1").addEventListener("click", checkTerms);


/**
 * check input value contain at least 2 letters return true
 */
function checkFirstname() {
	if (firstNameInput.value.length < 2) {
		firstNameInput.dataset.errorVisible = "true";
		firstNameInput.closest("div.formData").dataset.errorVisible = "true";
		return true;
	}
	firstNameInput.dataset.errorVisible = "false";
	firstNameInput.closest("div.formData").dataset.errorVisible = "false";
	return false;
}

/**
 * check input value contain at least 2 letters return boolean
 */
function checkName() {
	if (lastNameInput.value.length < 2) {
		lastNameInput.dataset.errorVisible = "true";
		lastNameInput.closest("div.formData").dataset.errorVisible = "true";
		return true;
	}
	lastNameInput.dataset.errorVisible = "false";
	lastNameInput.closest("div.formData").dataset.errorVisible = "false";
	return false;
}

/**
 * check input value contain at least 2 letters return boolean
 */
function checkEmail() {
	if (!email.value.match(regex)) {
		email.dataset.errorVisible = "true";
		email.closest("div.formData").dataset.errorVisible = "true";
		return true;
	}
	email.dataset.errorVisible = "false";
	email.closest("div.formData").dataset.errorVisible = "false";
	return false;
}

function checkBirthdate() {
	let today = new Date();
	let day = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	let birthYear = new Date([birthdate.value])
	if (birthdate.value == "" || birthYear > today) {
		birthdate.dataset.errorVisible = "true";
		birthdate.closest("div.formData").dataset.errorVisible = "true";
		return true;
	}
	birthdate.dataset.errorVisible = "false";
	birthdate.closest("div.formData").dataset.errorVisible = "false";
	return false;
}

function checkTournament() {
	let reg = "[0-9]+";
	if (!quantity.value.match(reg)) {
		quantity.dataset.errorVisible = "true";
		quantity.closest("div.formData").dataset.errorVisible = "true";
	} else {
		quantity.dataset.errorVisible = "false";
		quantity.closest("div.formData").closest("div.formData").dataset.errorVisible = "false";
	}
}

function checkRadio() {
	if (document.querySelector('input[name="location"]:checked') == null) {
		document.getElementById("location1").closest("div.formData").dataset.errorVisible = "true";
		return true;
	} else {
		document.getElementById("location1").closest("div.formData").dataset.errorVisible = "false";
		return false;
	}

}

function checkTerms() {
	if (!document.getElementById("checkbox1").checked) {
		document.getElementById("checkbox1").closest("div.formData").closest("div.formData").dataset.errorVisible = "true";
		return true;
	}
	document.getElementById("checkbox1").closest("div.formData").closest("div.formData").dataset.errorVisible = "false";
	return false;
}