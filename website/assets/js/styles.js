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
