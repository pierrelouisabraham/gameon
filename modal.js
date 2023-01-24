function editNav() {
    var x = document.getElementById("myTopnav");
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
      alert("Vos données ont bien été prise en compte")
    }

    });

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

  function showElement(el) {
    el.style.display = "inline";
  }

  document.querySelector("#first").addEventListener("blur", checkFirstname);
  document.querySelector("#last").addEventListener("blur", checkName);
  document.querySelector("#email").addEventListener("blur", checkEmail);
  document.querySelector("#birthdate").addEventListener("blur", checkBirthdate);
  document.querySelector("#quantity").addEventListener("blur", checkTournament);



  function checkFirstname() {
    if (firstNameInput.value.length < 2) {
      /* showElement() */
    
      firstNameInput.dataset.errorVisible = "true";
      formData[0].dataset.errorVisible = "true";
      return true;
    }
    firstNameInput.dataset.errorVisible = "false";
    formData[0].dataset.errorVisible = "false";
    return false;
  }

  function checkName() {
    if (lastNameInput.value.length < 2) {
      lastNameInput.dataset.errorVisible = "true";
      lastNameInput.closest("div.formData").dataset.errorVisible = "true";
      return true;
    }
    lastNameInput.dataset.errorVisible = "false";
    formData[1].dataset.errorVisible = "false";
    return false;
  }

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
    if (birthdate.value == "") {
      birthdate.dataset.errorVisible = "true";
      birthdate.closest("div.formData").dataset.errorVisible = "true";
      return true;
    }
    birthdate.dataset.errorVisible = "false";
    birthdate.closest("div.formData").dataset.errorVisible = "false";
    return false;
  }

  function checkTournament() {
    if(quantity.value == "") {
      quantity.dataset.errorVisible = "true";
      quantity.closest("div.formData").dataset.errorVisible = "true";
    }
    else {
      quantity.dataset.errorVisible = "false";
      quantity.closest("div.formData").closest("div.formData").dataset.errorVisible = "false";
    }
  }

  function checkRadio() {
      if (document.querySelector('input[name="location"]:checked') == null) {
        document.getElementById("location1").closest("div.formData").dataset.errorVisible = "true";
        return true;
      }
      else{
        document.getElementById("location1").closest("div.formData").dataset.errorVisible = "false";
        return false;
      }
      
  }

  function checkTerms() {
    if (!document.getElementById("checkbox1").checked) {
      formData[6].dataset.errorVisible = "true";
      return true;
    }
    formData[6].dataset.errorVisible = "false";
    return false;
  }
