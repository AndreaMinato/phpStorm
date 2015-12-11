var username= $('#user');
var pass= $('#psw');
var msgErr= $('#errore');
var pop= $('#popup')

$('#bottone').on('click', function(){
    pop.dialog({modal:true});
});

$('#chiudiPopup').on('click', function(){

    if(username.val()=="" || pass.val()=="") {
        pop.parent().addClass('animated pulse')
        msgErr.text("compila entrambi i campi");
    }
    else if(username.val()!=pass.val()){
        pop.parent().addClass('animated pulse')
        msgErr.text("username e password non coincidono ");

    }
    else{
        pop.
    }
    window.setTimeout("varia()",1000)
})


function varia(){
    if(pop.parent().hasClass('animated pulse'))
        pop.parent().removeClass('animated pulse');
    msgErr.text("");
}