/**
 * Created by itsandrea on 23/11/15.
 */


var pnl= document.getElementById('res');
var val=0;
var calc=false;

function num(n){
    if(calc==false)
        pnl.innerHTML += "" + n;
    else{
        pnl.innerHTML = n;
        calc=false;
    }
}

function ope(o){
    val=parseFloat(pnl.innerHTML);
    if(o!='C') {
        scegli(o);
    }
    if(o=='C'){
        val=0;
        calc=false;
    }

}
function scegli(ope){
    calc=true;
    switch(ope){
        case '+':   pnl.innerHTML+="+";break;
        case '-':   pnl.innerHTML+="-";break;
        case '*':   pnl.innerHTML+="*";break;
        case '/':   pnl.innerHTML+="/";break;

    }
}


function calcola() {
    calc = true;
    var ris = 0;
    var op=toArray(pnl.innerHTML).pop().toString();
    var val1=parseInt(pnl.innerHTML);
    console.log(op);
    switch (op) {
        case '+':
            ris = val +val1;
            pnl.innerHTML = ris;
            break;
        case '-':
            ris = val - val1;
            pnl.innerHTML = ris;
            break;
        case '*':
            ris = val * val1;
            pnl.innerHTML = ris;
            break;
        case '/':
            ris = val / val1;
            pnl.innerHTML = ris;
            break;

    }
}

