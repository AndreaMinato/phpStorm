function vedi(){
    var email=$('#e-mail');
    var obj=$('#oggetto');
    var txt=$('#testo');
    var btn=$('#invia');
    if(email.val()!="" && obj.val()!="" && txt.val()!="")
        btn.addClass('btn-success');
    else{
        if(btn.hasClass('btn-success'))
            btn.removeClass( 'btn-success');
    }
}

$(".ctrlDate").datepicker({minDate:0});

function check(){

    var arrive=$('#dataArrivo');
    var leave=$('#dataPartenza');
    var persone=$('#nPersone');
    var tipo=$('#tipoViaggio');
    var btn=$('#prenota');
    if(arrive.val()!="" && leave.val()!="" && persone.val()!=0 && tipo.val()!=0)
        btn.addClass('btn-success');
    else{
        if(btn.hasClass('btn-success'))
            btn.removeClass( 'btn-success');
    }

}

function prenota(){
    var btn=$('#prenota');
    var arrive=$('#dataArrivo');
    var leave=$('#dataPartenza');
    var persone=$('#nPersone');
    var tipo=$('#tipoViaggio');
    var lPart=$('#lPartenza');
    var lArr=$('#lArrivo');
    var lPers=$('#lPersone');
    var lBigl=$('#lBiglietto');
    var attento=$('#ocio')
    if(btn.hasClass('btn-success')){
        lPart.text(leave.val());
        lArr.text(arrive.val());
        lPers.text(persone.val());
        lBigl.text(tipo.val());
        $('#popup').dialog({modal:true});
    }
    else{
        attento.addClass('guardami');
        attento.addClass('animated pulse')
        window.setTimeout(function(){attento.removeClass('guardami'); attento.removeClass('animated pulse');}, 2500);

    }
}