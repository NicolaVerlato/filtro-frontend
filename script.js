jQuery(function($){
    // pagina pubblicazioni
    let btnPress = $("#press");
    let btnBrochures = $("#brochures");
    let btnTutti = $("#tutti");

    let allBoxes = $('.container div');

    let allBtn = [btnPress, btnBrochures, btnTutti];

    allBtn.forEach(btn => {
        btn.click(function (){
            let thisBtn = this;
            allBtn.forEach(btn => {
                btn[0].classList.remove("active");
            })
            thisBtn.classList.add("active");

            let thisBtnToLowerCase = thisBtn.outerText.toLowerCase(); 
            for (let i = 0; i < allBoxes.length; i++) {
                const element = allBoxes[i];
                if(element.classList.contains(thisBtnToLowerCase)){
                    removeNone(element)  
                } else if(thisBtnToLowerCase == 'tutti'){
                    removeNone(element)
                } else{
                    addNone(element)
                }
            }
        })
    });
});

function removeNone(item){
    if(item.classList.contains( "none" )){
        item.classList.add( "remove-none" );
        item.classList.remove( "none" );
    }
}

function addNone(item){
    item.classList.remove( "remove-none" );
    item.classList.add( "none" );
}