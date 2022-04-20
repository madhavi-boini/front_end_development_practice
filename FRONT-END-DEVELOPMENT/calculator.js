function add(){
    let num1=document.querySelector("#fn");
    let num2=document.querySelector("#sn");
    let s=(+num1.value)+(+num2.value);
    let result=document.querySelector(".result");
    result.innerHTML=s;
}
let sum=document.querySelector(".sum");
sum.addEventListener("click",add);

function diff(){
    let num1=document.querySelector("#fn");
    let num2=document.querySelector("#sn");
    let d=(+num1.value)-(+num2.value);
    let result=document.querySelector(".result");
    result.innerHTML=d;
}
let dif=document.querySelector(".difference");
dif.addEventListener("click",diff);

function prod(){
    let num1=document.querySelector("#fn");
    let num2=document.querySelector("#sn");
    let p=(+num1.value)*(+num2.value);
    let result=document.querySelector(".result");
    result.innerHTML=p;
}
let p=document.querySelector(".product");
p.addEventListener("click",prod);

function divi(){
    let num1=document.querySelector("#fn");
    let num2=document.querySelector("#sn");
    let d=(+num1.value)/(+num2.value);
    let result=document.querySelector(".result");
    result.innerHTML=d;
}
let div=document.querySelector(".divide");
div.addEventListener("click",divi);

function rem(){
    let num1=document.querySelector("#fn");
    let num2=document.querySelector("#sn");
    let r=(+num1.value)%(+num2.value);
    let result=document.querySelector(".result");
    result.innerHTML=r;
}
let re=document.querySelector(".remainder");
re.addEventListener("click",rem);
