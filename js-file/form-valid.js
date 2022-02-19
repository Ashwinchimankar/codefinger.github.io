

 function validate(){
     var name = document.getElementById("name").value;
     var lastname = document.getElementById("lastname").value;
     var mail = document.getElementById("mail").value;
     var massage = document.getElementById("massage").value;
     var errormassage = document.getElementById("error massage");

     errormassage.style.padding = "10px";
     //var name = document.getElementById("name").value;
    

     var text;
     if(name.length < 1){
         text = "please enter valid text";
         errormassage.innerHTML = text;
         return false;
     }

     
     if(lastname.length < 15){
         text = "please enter valid lastname";
         errormassage.innerHTML = text;
         return false;
     }


     if(mail.indexOf('a') = -1 || mail.length < 6){
         text = "please enter valid mail";
         errormassage.innerHTML = text;
         return false;
     }


    
     if(massage.length <=  20){
         text = "please enter valid more than 20 word";
         errormassage.innerHTML = text;
         return false;
     }

     alert("Form Submit Succesfully");
     return 0;










 }