// var a=10;
// var b=2;
// //arithmatic operators
// console.log('a+b = ',a+b);
// console.log('a-b = ',a-b);
// console.log('a*b = ',a*b);
// console.log('a%b = ',a%b);
// console.log('a++ = ',++a);
// console.log('a = ',a);
// console.log('a-- = ',--a);
// console.log('a**b =',a**b);


function Employee(empno,name,basic,address)
{

    this.empno=empno;
    this.name=name;
    this.basic=basic;
    this.address=address;

}


let p1=new Employee(1,'Charan',20000,{mandal:"Medchal",village:"Somaram"});
let p2=new Employee(2,'Vivek',10000,{mandal:"Medipally",village:"Chengicherla"});
let p3=new Employee(3,'Venkat',15000,{mandal:"Quthbullapur",village:"Pragathinagar"});
let p4=new Employee(4,'Ravi',16000,{mandal:"Shamirpet",village:"Narayanpur"});
let p5=new Employee(5,'Raju',23000,{mandal:"Dundigal Gandimaisamma",village:"Dundigal"});

 console.log("EMPLOYEE DATA");
let array=[p1,p2,p3,p4,p5];
 console.log(array);


//salaries of employees

let salary=array.map(function(x){

    x.salary=x.basic+x.basic*0.2+x.basic*0.15;
    return x.salary;
})



//using For-in 
console.log(`USING FOR-IN LOOP`);

var j=1;
for(let v of array){
    console.log(`EMPLOYEE ${j++} DETAILS`);
    for( let key in v){
       console.log(key,":",v[key]);
       
    }
}

//using forEach 
console.log(`USING FOR-EACH LOOP`);

array.forEach(function(x,i){
    console.log(`EMPLOYEE ${i+1} DETAILS`);
    for(let key in x){
         console.log(key,":",x[key]);
    }

})