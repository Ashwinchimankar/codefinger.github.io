//code for buttons

function copy(copyID){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyID).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

    document.getElementById("alert").style.display = "block";

    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    },1000);
}


/*
function executeCopy(text) {
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
}
*/


/*
function CopyToClipboard(copy_txt1)
{
var r = document.createRange();
r.selectNode(document.getElementById(copy_txt1));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}
*/



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  /*if (document.documentElement.scrollTop > 20)
  {*/ 
    mybutton.style.display = "block";
   
    /*} 
 else {
    mybutton.style.display = "none";
  }*/
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
  document.documentElement.scrollTop = 0;
}