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

  function validateForm() {
    let firstName = document.forms["newForm"]["fname"].value;
    let noOfWordsFname=firstName.split(" ").length;
    if (noOfWordsFname>1) {
      document.querySelector(".fname-space").style.display = "block";
      return false;
    }
  
    let spouseName= document.forms["newForm"]["spouse"].value;
    let noOfWordsSpouse= spouseName.split(" ").length;
    if (noOfWordsSpouse>1) {
      document.querySelector(".spouse-space").style.display = "block";
      return false;
    }

    document.getElementById("newForm").style.display="none";
    document.querySelector(".success").style.display="block";
  }

  function closeHandler(){
    document.getElementById("newForm").style.display="block";
    document.querySelector(".success").style.display="none";

  }