names=[];
function userName(){
    let un=document.querySelector("#name");
    let name=un.value;
    names.push(name);
        let pelement=document.createElement("p");
        pelement.innerHTML=name;
        document.querySelector("h6").append(pelement);
        console.log(names)

}





let button=document.querySelector(".btn");
button.addEventListener("click",userName);