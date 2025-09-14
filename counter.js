const incb=document.getElementById("incr");
const resetb=document.getElementById("reset");
const decb=document.getElementById("decr");
const countL=document.getElementById("countlabel");

let count=0;

incb.onclick=function(){
    count++;
    countL.textContent=count
}

decb.onclick=function(){
    count--;
    countL.textContent=count
}

resetb.onclick=function(){
    count=0;
    countL.textContent=count
}

