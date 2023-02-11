function editNav() {
	const x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector("#register");
const modalBtn = document.querySelector("#registerbtn");
const modalBtnMobile = document.querySelector("#registerbtnmobile");
const modalBtnSuccess = document.querySelector("#successbtn");
const formData = document.querySelectorAll(".formData");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const modalbgsuccess = document.querySelector("#success");
const radio = document.querySelector("#checkbox1");




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
	if (!error) {
		closeModal();
		openModalSuccess();
	}
	// comme les données acceptée provoquent le rechargement de la page, on annule ce comportement sinon la modale disparait immédiatement
	evt.preventDefault();
});

//launch modal success
function openModalSuccess() {
	modalbgsuccess.style.display = "block";
}

// fermeture modal success
function closeModalSuccess() {
	modalbgsuccess.style.display = "none";
	window.location.href = "index.html";
}

// launch modal event
modalBtn.addEventListener("click", launchModal);
modalBtnMobile.addEventListener("click", launchModal);

// close
modalBtnSuccess.addEventListener("click", closeModalSuccess);


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

// validation check sur chacun des champs
document.querySelector("#first").addEventListener("blur", checkFirstname); // ou progressif
document.querySelector("#last").addEventListener("blur", checkName); //
document.querySelector("#email").addEventListener("blur", checkEmail);
document.querySelector("#birthdate").addEventListener("blur", checkBirthdate);
document.querySelector("#quantity").addEventListener("blur", checkTournament);
document.querySelectorAll("input[type='radio']").forEach(radio => {
	radio.addEventListener(("click"), checkRadio);
});
radio.addEventListener("click", checkTerms);

/**
 * 
 * @param {htmlElement} el
 * @param {boolean} bool
 * affiche le message d'erreur à true
 */
function printErrorMessage(el, bool) {
	el.dataset.errorVisible = bool;
	el.closest("div.formData").dataset.errorVisible = bool;
}

/**
 * check input value contain at least 2 letters return true
 */
function checkFirstname() {
	if (firstNameInput.value.length < 2) {
		printErrorMessage(firstNameInput, true);
		return true;
	}

	printErrorMessage(firstNameInput, false);
	return false;
}

/**
 * check input value contain at least 2 letters return boolean
 */
function checkName() {
	if (lastNameInput.value.length < 2) {
		printErrorMessage(lastNameInput, true);
		return true;
	}
	printErrorMessage(lastNameInput, false);
	return false;
}

/**
 * check input value contain at least 2 letters return boolean
 */
function checkEmail() {
	if (!email.value.match(regex)) {
		printErrorMessage(email, true);
		return true;
	}
	printErrorMessage(email, false);
	return false;
}

/**
 * check input value contain a date valid and return boolean
 */
function checkBirthdate() {
	let today = new Date();
	let day = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	let birthYear = new Date([birthdate.value])
	if (birthdate.value == "" || birthYear > today) {
		printErrorMessage(birthdate, true);
		return true;
	}
	printErrorMessage(birthdate, false);
	return false;
}

/**
 * check input value no null and return boolean
 */
function checkTournament() {
	let reg = "[0-9]+";
	if (!quantity.value.match(reg) || quantity.value == "") {
		printErrorMessage(quantity, true);
		return true;
	} else {
		printErrorMessage(quantity, false);
		return false;
	}
}

/**
 * check input radio is checked and return boolean
 */
function checkRadio() {
	if (document.querySelector('input[name="location"]:checked') == null) {
		document.getElementById("location1").closest("div.formData").dataset.errorVisible = "true";
		return true;
	} else {
		document.getElementById("location1").closest("div.formData").dataset.errorVisible = "false";
		return false;
	}

}

/**
 * check the checkbox is checked and return boolean
 */
function checkTerms() {
	if (!document.getElementById("checkbox1").checked) {
		document.getElementById("checkbox1").closest("div.formData").closest("div.formData").dataset.errorVisible = "true";
		return true;
	}
	document.getElementById("checkbox1").closest("div.formData").closest("div.formData").dataset.errorVisible = "false";
	return false;
}