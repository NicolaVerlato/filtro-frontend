jQuery(function($){
    // pagina pubblicazioni
    let press = $(".press");
    let brochures = $(".brochures");

    $("#press").click(function (){
        $(this).css("background-color", "#1a6c7a");
        $("#brochures").css("background-color", "#26ac8d");
        $("#tutti").css("background-color", "#26ac8d");
        brochures.each(function() {
            $( this ).removeClass( "remove-none" );
            $( this ).addClass( "none" );
        });
        press.each(function() {
            if($( this ).hasClass( "none" )){
                $( this ).addClass( "remove-none" );
                $( this ).removeClass( "none" );
            }
        });
    })
    $("#brochures").click(function (){
        $(this).css("background-color", "#1a6c7a");
        $("#press").css("background-color", "#26ac8d");
        $("#tutti").css("background-color", "#26ac8d");
        press.each(function() {
            $( this ).removeClass( "remove-none" );
            $( this ).addClass( "none" );
        });
        brochures.each(function() {
            if($( this ).hasClass( "none" )){
                $( this ).addClass( "remove-none" );
                $( this ).removeClass( "none" );
            }
        });
    })
    $("#tutti").click(function (){
        $(this).css("background-color", "#1a6c7a");
        $("#press").css("background-color", "#26ac8d");
        $("#brochures").css("background-color", "#26ac8d");
        press.each(function() {
            if($( this ).hasClass( "none" )){
                $( this ).addClass( "remove-none" );
                $( this ).removeClass( "none" );
            }
        });
        brochures.each(function() {
            if($( this ).hasClass( "none" )){
                $( this ).addClass( "remove-none" );
                $( this ).removeClass( "none" );
            }
        });
    })
});