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
  const firstNameInput = document.getElementById("first").value;
  var form = document.querySelector("form").addEventListener("submit", evt => {
    let error = false;
    error = checkFirstname(evt) || checkName(evt) || checkEmail(evt) || checkBirthdate(evt) || checkRadio(evt) || checkTerms(evt);
    if (error)
      evt.preventDefault();
    })
  
  
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

  function checkFirstname(evt) {
    if (evt["path"][0][0].value.length < 2) {
      /* showElement() */
      evt["path"][0][0].dataset.errorVisible = "true";
      formData[0].dataset.errorVisible = "true";
      return true;
    }
    evt["path"][0][0].dataset.errorVisible = "false";
    formData[0].dataset.errorVisible = "false";
    return false;
  }

  function checkName(evt) {
    if (evt["path"][0][1].value.length < 2) {
      evt["path"][0][1].dataset.errorVisible = "true";
      formData[1].dataset.errorVisible = "true";
      return true;
    }
    evt["path"][0][1].dataset.errorVisible = "false";
    formData[1].dataset.errorVisible = "false";
    return false;
  }

  function checkEmail(evt) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!evt["path"][0][2].value.match(regex)) {
      evt["path"][0][2].dataset.errorVisible = "true";
      formData[2].dataset.errorVisible = "true";
      return true;
    }
    evt["path"][0][2].dataset.errorVisible = "false";
    formData[2].dataset.errorVisible = "false";
    return false;
  }

  function checkBirthdate(evt) {
    if (evt["path"][0][3].value == "") {
      evt["path"][0][3].dataset.errorVisible = "true";
      formData[3].dataset.errorVisible = "true";
      return true;
    }
    evt["path"][0][3].dataset.errorVisible = "false";
    formData[3].dataset.errorVisible = "false";
    return false;
  }

  function checkRadio(evt) {
    for(let i = 5; i < evt["path"][0].length - 3; i++){
      if (evt["path"][0][i].checked) {
        formData[i].dataset.errorVisible = "false";
        return false;
      }
    }
      formData[5].dataset.errorVisible = "true";
      return true;
  }

  function checkTerms(evt) {
    if (!evt["path"][0][11].checked) {
      formData[6].dataset.errorVisible = "true";
      return false;
    }
    formData[6].dataset.errorVisible = "false";
    return true;
  }
