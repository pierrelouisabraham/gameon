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
  /* const form = document.querySelector("form").addEventListener("submit", evt => {
    evt.preventDefault
    
    
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

  function validate() {
    if (document.reserve.first.value == "toto")
      return false
    else 
      return true
  } 