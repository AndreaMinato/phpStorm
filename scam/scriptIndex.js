function filled() {
    var p = $('#psw');
    var u = $('#user');

    if (p.val() != "" && u.val() != "")
        return true;
    else {
        alert('Riempi tutti i campi');
        return false;
    }

}

