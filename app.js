function displaySpouse(status) {
   spouseBlock = document.getElementById("spouse");
    if (status == "married") { // show the spouse div
      spouseBlock.style.display = "block";
    }
    else if (status == "unmarried") { // hide the spouse div 
        spouseBlock.style.display = "none";
      }
  }

  function resetCall(){
    spouseBlock = document.getElementById("spouse");
    spouseBlock.style.display = "none";
  }