/**
 * Created by itsandrea on 03/12/15.
 */
var num;
var x;
var celle = [];
var numeri = [];
var extract = $('#estratto');
for (var i = 1; i < 91; i++) {
    celle[i] = $('#c' + i);
}
for (var j = 0; j < 90; j++) {
    numeri[j] = j+1;
}

function estrai() {
    if(numeri.length!=0) {
        x = Math.round((numeri.length - 1) * Math.random());
        num = numeri[x];
        numeri.splice(x, 1);
        extract.text(num + " Estrai di nuovo");
        celle[num].addClass('estratto');
    }
    else{
        $('#popup').dialog({modal:true});
    }
}


$('#chiudiPopup').on('click', function(){
    for(var i=1; i<91; i++)
            celle[i].removeClass('estratto');
    for (var j = 0; j < 90; j++)
        numeri[j] = j+1;
    extract.text('Inizia a Giocare')
});