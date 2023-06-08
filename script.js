jQuery(function($){
    // pagina pubblicazioni
    let press = $(".press");
    let brochures = $(".brochures");

    $("#press").click(function (){
        $(this).css("background-color", "#1a6c7a");
        $("#brochures").css("background-color", "#26ac8d");
        $("#tutti").css("background-color", "#26ac8d");
        brochures.each(function() {
            $( this ).fadeOut(300)
        });
        press.each(function() {
            $( this ).fadeIn(300)
        });
    })
    $("#brochures").click(function (){
        $(this).css("background-color", "#1a6c7a");
        $("#press").css("background-color", "#26ac8d");
        $("#tutti").css("background-color", "#26ac8d");
        press.each(function() {
            $( this ).fadeOut(300)
        });
        brochures.each(function() {
            $( this ).fadeIn(300)
        });
    })
    $("#tutti").click(function (){
        $(this).css("background-color", "#1a6c7a");
        $("#press").css("background-color", "#26ac8d");
        $("#brochures").css("background-color", "#26ac8d");
        press.each(function() {
            $( this ).fadeIn(300)
        });
        brochures.each(function() {
            $( this ).fadeIn(300)
        });
    })
});