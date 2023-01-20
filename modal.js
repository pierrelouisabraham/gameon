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
  var firstNameInput = document.getElementById("first");
  var lastNameInput = document.getElementById("last");
  var email = document.getElementById("email");

  // Check on submit
  var form = document.querySelector("form").addEventListener("submit", evt => {
    let error = false;
    error = checkFirstname() || error;
    error = checkName() || error;
    error = checkEmail() || error;
    error = checkBirthdate() || error;
    error = checkRadio() || error;
    error = checkTerms() || error;
    if (error)
      evt.preventDefault();
    else
      alert("Vos données ont bien été prise en compte")
    })


  
/*     var name = document.querySelector("first").addEventListener("input", evt => {
      if (firstNameInput.value == '' || firstNameInput.length < 2)
        firstNameInput.dataset.errorVisible = true;
    })

    var name = document.querySelector("first").addEventListener("input", evt => {
      if (firstNameInput.value == '' || firstNameInput.length < 2)
        firstNameInput.dataset.errorVisible = true;
    })
    var name = document.querySelector("first").addEventListener("input", evt => {
      if (firstNameInput.value == '' || firstNameInput.length < 2)
        firstNameInput.dataset.errorVisible = true;
    })
    var name = document.querySelector("first").addEventListener("input", evt => {
      if (firstNameInput.value == '' || firstNameInput.length < 2)
        firstNameInput.dataset.errorVisible = true;
    }) */
  
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

  var blurFirst= document.querySelector("form").addEventListener("blur", evt => {
    if (firstNameInput.value == '' || firstNameInput.value.length < 2) {
      firstNameInput.dataset.errorVisible = "true";
      formData[0].dataset.errorVisible = "true";
    }
    else {
      firstNameInput.dataset.errorVisible = "false";
      formData[0].dataset.errorVisible = "false";
    }
    if (lastNameInput.value == '' || lastNameInput.value.length < 2) {
      lastNameInput.dataset.errorVisible = "true";
      formData[1].dataset.errorVisible = "true";
    }
    else {
      lastNameInput.dataset.errorVisible = "false";
      formData[1].dataset.errorVisible = "false";
    }
    if (email.value == '' || !email.value.match(regex)) {
      email.dataset.errorVisible = "true";
      formData[2].dataset.errorVisible = "true";
    }
    else {
      email.dataset.errorVisible = "false";
      formData[2].dataset.errorVisible = "false";
    }
    if (document.getElementById("birthdate").value == "") {
      document.getElementById("birthdate").dataset.errorVisible = "true";
      formData[3].dataset.errorVisible = "true";
      return true;
    }else {
      document.getElementById("birthdate").dataset.errorVisible = "false";
      formData[3].dataset.errorVisible = "false";
      return false;
    }

  }, true)

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
      formData[1].dataset.errorVisible = "true";
      return true;
    }
    lastNameInput.dataset.errorVisible = "false";
    formData[1].dataset.errorVisible = "false";
    return false;
  }

  function checkEmail() {
    
    if (!email.value.match(regex)) {
      email.dataset.errorVisible = "true";
      formData[2].dataset.errorVisible = "true";
      return true;
    }
    email.dataset.errorVisible = "false";
    formData[2].dataset.errorVisible = "false";
    return false;
  }

  function checkBirthdate() {
    if (document.getElementById("birthdate").value == "") {
      document.getElementById("birthdate").dataset.errorVisible = "true";
      formData[3].dataset.errorVisible = "true";
      return true;
    }
    document.getElementById("birthdate").dataset.errorVisible = "false";
    formData[3].dataset.errorVisible = "false";
    return false;
  }

  function checkRadio() {
      if (document.querySelector('input[name="location"]:checked') == null) {
        console.log(document.querySelector('input[name="location"]:checked') )
        formData[5].dataset.errorVisible = "true";
        return true;
      }
      else{
        formData[5].dataset.errorVisible = "false";
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
