var a=prompt('enter the value of a');
var b=prompt('enter the value of b');

function add()
{
       console.log(`a+b=${a+b}`);
}
function sub()
{
       console.log(`a-b=${a-b}`);
}
function mult(){
       console.log(`a*b=${a*b}`);
}
function mode(){
       console.log(`a%b=${a%b}`);
}
function div(){
       console.log(`a/b=${a/b}`);
}
function pow(){
       console.log(`a^b=${a**b}`);
}
function incre(){
       console.log(`++a=${++a}`);
       console.log(`++b=${++b}`);
}
function decre(){
       console.log(`--a=${--a}`);
       console.log(`--b=${--b}`);
}

var choice=prompt('enter 1-addition,2-subtraction,3-multiplication,4-remaider,5-division,6-power,7-increment,8-decrement');


switch(+(choice))
{
    case 1:add();
           break;
    case 2:sub();
           break;
    case 3:mult();
           break;
    case 4:mode();
           break;
    case 5:div();
           break;
    case 6:pow();
           break;
    case 7:incre();
           break;
    case 7:decre();
           break;    

}

