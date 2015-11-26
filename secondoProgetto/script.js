/**
 * Created by itsandrea on 26/11/15.
 */

var cntchar=document.getElementById('caratteri');
var txt=document.getElementById('txtInsert');
var res=document.getElementById('result');

function refresh(){
    cntchar.innerHTML=txt.value.length;
}

function add(){
    if(cntchar.innerHTML!=0) {
        res.innerHTML += txt.value + "<br/>";
        txt.value = "";
        cntchar.innerHTML = 0;
    }
}