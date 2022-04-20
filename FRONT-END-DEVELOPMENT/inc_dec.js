let num=0;
function inc(){
    num=num+1;
    let res=document.querySelector(".result");
    res.innerHTML=num;
}
let incre=document.querySelector(".incre");
incre.addEventListener("click",inc);

function dec(){
    num=num-1;
    let res=document.querySelector(".result");
    res.innerHTML=num;
}
let decre=document.querySelector(".decre");
decre.addEventListener("click",dec);