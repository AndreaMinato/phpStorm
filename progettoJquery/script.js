var turn=true;
var gioco=true;
var conta=0;
var caselle=[];
var b=$('.cadi');
for( var i=1; i<10;i++){
    caselle[i]=$('#c'+i);
}

$('.cas').on('click', function(){
    if(gioco) {
        var my = $(this);
        if (my.hasClass('circle')) {
        }
        else if (my.hasClass('cross')) {
        }
        else if (turn) {
            my.addClass('circle');
            turn = !turn;
            conta++;
            check();
        }
        else {
            my.addClass('cross');
            turn = !turn;
            conta++;
            check();
        }
    }
});


function resetta(){
    turn=true;
    gioco=true;
    conta=0;
    for(var i=1; i<10; i++){
        if(caselle[i].hasClass('circle')){
            caselle[i].removeClass('circle');
        }
        if(caselle[i].hasClass('cross')){
            caselle[i].removeClass('cross');
        }
    }
}


function check(){
    if(caselle[1].hasClass('circle') && caselle[2].hasClass('circle') && caselle[3].hasClass('circle')) {
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[4].hasClass('circle') && caselle[5].hasClass('circle') && caselle[6].hasClass('circle')){
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[7].hasClass('circle') && caselle[8].hasClass('circle') && caselle[9].hasClass('circle')){
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[1].hasClass('circle') && caselle[4].hasClass('circle') && caselle[7].hasClass('circle')) {
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[2].hasClass('circle') && caselle[5].hasClass('circle') && caselle[8].hasClass('circle')) {
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[3].hasClass('circle') && caselle[6].hasClass('circle') && caselle[9].hasClass('circle')) {
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[1].hasClass('circle') && caselle[5].hasClass('circle') && caselle[9].hasClass('circle')) {
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[3].hasClass('circle') && caselle[5].hasClass('circle') && caselle[7].hasClass('circle')) {
        alert('vince playstation');
        gioco=false;
    }
    else if(caselle[1].hasClass('cross') && caselle[2].hasClass('cross') && caselle[3].hasClass('cross')) {
        alert('vince xbox');
        gioco=false;
    }
    else if(caselle[4].hasClass('cross') && caselle[5].hasClass('cross') && caselle[6].hasClass('cross')) {
        alert('vince xbox');
        gioco=false;
    }
    else if(caselle[7].hasClass('cross') && caselle[8].hasClass('cross') && caselle[9].hasClass('cross')){
        alert('vince xbox');
        gioco=false;
    }
    else if(caselle[1].hasClass('cross') && caselle[4].hasClass('cross') && caselle[7].hasClass('cross')) {
        alert('vince xbox');
        gioco=false;
    }
    else if(caselle[2].hasClass('cross') && caselle[5].hasClass('cross') && caselle[8].hasClass('cross')) {
        alert('vince xbox');
        gioco=false;
    }
    else if(caselle[3].hasClass('cross') && caselle[6].hasClass('cross') && caselle[9].hasClass('cross')) {
        alert('vince xbox');
        gioco=false;
    }
    else if(caselle[1].hasClass('cross') && caselle[5].hasClass('cross') && caselle[9].hasClass('cross')) {
        alert('vince xbox');
        gioco=false;
    }
    else if(caselle[3].hasClass('cross') && caselle[5].hasClass('cross') && caselle[7].hasClass('cross')) {
        alert('vince xbox');
        gioco=false;
    }
    else if(conta==9){
        alert('Pareggioooooooo!');
        gioco=false;
    }
}








$('#dt').datepicker();
$('#btnApriPopup').on('click', function(){
    $('#popupText').text('testo di prova');
    $('#popup').dialog({modal:true});
});

$('#chiudiPopup').on('click', function(){
    alert('Bravo fiol');
});





