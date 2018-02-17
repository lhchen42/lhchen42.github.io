$(function() {
    $(window).scroll(function(e) {
        if ($(this).scrollTop() > 300)
        {
            $("#sidebar").fadeIn("slow");
			
        }
        else
        {
            $("#sidebar").fadeOut("slow"); 
        }
    });
});