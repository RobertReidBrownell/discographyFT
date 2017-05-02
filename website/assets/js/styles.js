$(document).ready(function(){

var root = new RegExp(location.host);

$('a').each(function(){

    if(root.test($(this).attr('href'))){
        $(this).addClass('local');
    }
    else{
        // a link that does not contain the current host
        var url = $(this).attr('href');
        if(url.length > 1)
        {
            $(this).addClass('external');
        }
    }
});

$('a.external').live('click', function(e){

    e.preventDefault();
    var answer = confirm("You are about to leave the website of [COMPANY NAME] and view the content of an external website. [COMPANY NAME] cannot be held responsible for the content of external websites.");

    if (answer){
        window.location = $(this).attr('href');
    }

});

});


  function setSubmit(){
    var el = document.getElementById("terms");
    if(el.checked)
      document.getElementById("submit").disabled = false;
    else
     document.getElementById("submit").disabled = true;
  }


				function validateform() {
		var x = document.getElementById("terms").checked;
    var y = document.getElementById("email").value;
		var z = document.forms["newsform"]["emailtype"].checked;

    if (y == "") {
        alert("Email must be filled out.");
        return false;
    } else if (z == false) {
      alert("Please select what type of email you prefer.");
				return false;
    } else if (x == false) {
			alert("You need to agree to the terms.");
				return false;
		} else {
			window.alert("Thank you for signing up!");
		}
}
