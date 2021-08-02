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
// Form OnSubmit Change
  const form = document.getElementById('newForm');
  form.onsubmit = submit;
  form.onreset = resetForm;
//Form onSubmit Define

  function submit(event) {
    //fname validation
    let firstName = document.forms["newForm"]["fname"].value;
    if(!firstName.trim()){
      document.querySelector(".fname-space").style.visibility = "visible";
      fname.focus();
      return false;
    }

    let noOfWordsFname=firstName.split(" ").length;
    if (noOfWordsFname>1) {
      document.querySelector(".fname-space").style.visibility = "visible";
      fname.focus();
      return false;
    }
    

    //lname validation
    let lastNameTrim = document.forms["newForm"]["lname"].value.trim();
    if(!lastNameTrim){
      document.querySelector(".lname-space").style.visibility = "visible";
      lname.focus();
      return false;
    }
    //gender validation
    if(document.getElementById('male').checked == false && document.getElementById('female').checked == false ) {   
      document.querySelector(".gender-space").style.visibility = "visible";  
      return false;
    } 

    //spouse-name validation
    let spouseName= document.forms["newForm"]["spouse"].value;
    // let noOfWordsSpouse= spouseName.split(" ").length;
    // if (noOfWordsSpouse>1) {
    //   document.querySelector(".spouse-space").style.display = "block";
    //   return false;
    // }
    const marriedCheck = document.getElementById('married').checked;
    if(!spouseName.trim() && marriedCheck == true ){
      document.querySelector(".spouse-space").style.visibility = "visible";
      return false;
    }
    //tnc validation
    if(document.getElementById('tnc').checked == false) {   
      document.querySelector(".terms-space").style.visibility = "visible";  
      return false;
    } 


    document.getElementById("newForm").style.display="none";
    document.querySelector(".success").style.display="block";
    event.preventDefault();
  }

  function resetForm(){
    document.querySelector(".fname-space").style.visibility = "hidden";
    document.querySelector(".lname-space").style.visibility = "hidden";
    document.querySelector(".gender-space").style.visibility = "hidden";
    document.querySelector(".spouse-space").style.visibility = "hidden";
    document.querySelector(".terms-space").style.visibility = "hidden";


  }


 // We handle what happens on Clicking the Cross Button 
  function closeHandler(){
    document.getElementById("newForm").style.display="block";
    document.querySelector(".success").style.display="none";
      fname.value = "";
      lname.value="";
      document.forms["newForm"]["spouse"].value="";
      document.getElementById('male').checked = false;
      document.getElementById('female').checked = false;
      document.getElementById('married').checked = false;
      document.getElementById('unmarried').checked = true;
      document.querySelector(".spouse-space").style.display = "none";
      document.querySelector("#spouse").style.display = "none";
      other.value="";
      document.getElementById('tnc').checked = false;


  }