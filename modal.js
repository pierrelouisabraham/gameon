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
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  function closeModal() {
    modalbg.style.display = "none";
  }

  function validate() {
    let bool = true;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById("first").value.length < 2) {
      document.getElementById("first").style.borderColor = "red";
      alert("Saisie invalide");
      return false;
    }
    if(document.getElementById("last").value.length < 2) {
      document.getElementById("last").style.borderColor = "red";
      alert("Saisie invalide");
      return false;
    }
    if(document.getElementById("email").value.match(regex)) {
      return true;
    } else {
      alert("Saisie mail invalide");
      document.getElementById("email").style.borderColor = "red";
      return false;
    }
    
  }