

function add() {
    var p = $('#psw');
    var u = $('#user');
    var n = $('#nome');
    var c = $('#cognome');
    var e = $('#email');
    if (p.val() != "" && u.val() != "" && n.val() != "" && c.val() != "" && e.val() != "")
        return true;
    else {
        alert('Riempi tutti i campi per favore');
        return false;
    }
}

function amministratore(){
    var l = $('#liv');

    if (l.val() == 0)
        alert('Questo utente sarà un amministratore');
}


function createuser(){
    var u = $('#user');
    var n = $('#nome');
    var c = $('#cognome');

    u.val((n.val()+"."+ c.val()+Math.round(99*Math.random()+1)).toLowerCase());
}

function generate(){
    var p = $('#psw');
    p.val(Math.random().toString(36).slice(-8));
}