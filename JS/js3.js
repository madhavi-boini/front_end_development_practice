
//function

var num=prompt('enter a number');

  function evenOrOdd(){

 if(num%2==0){
 console.log(`${num} is even`);
  }
  else{
  console.log(`${num} is odd`);
 }
 }
 evenOrOdd();

//object
 let product={
     pnum: 100,
     pname: 'phone',
     brand: 'iphone',
     price: 50000,
     discountInPercentage: 20,
     finalprice:function(){
        let fprice=this.price-(this.price*this.discountInPercentage/100);
      return fprice;
     }
}

console.log(`price after discount ${product.finalprice()}`);

//objects using constructor function
function Product(pnum,pname,brand,price,discountInPercentage){

    this.pnum=pnum;
    this.pname=pname;
    this.brand=brand;
    this.price=price;
    this.discountInPercentage=discountInPercentage;

}

Product.prototype.fprice=function()
{
    let finalprice=this.price-(this.price*this.discountInPercentage/100);
    return finalprice;
}



let p1=new Product(1,'phone','iphone',50000,20);
console.log(`price after discount is ${p1.fprice()} of product ${p1.pname} of brand ${p1.brand}`);

let p2=new Product(2,'phone','Mi',20000,15);
console.log(`price after discount is ${p2.fprice()} of product ${p2.pname} of brand ${p2.brand}`);

let p3=new Product(3,'phone','Samsung',19000,35);
console.log(`price after discount is ${p3.fprice()} of product ${p3.pname} of brand ${p3.brand}`);

let p4=new Product(4,'phone','Nokia',18000,50);
console.log(`price after discount is ${p4.fprice()} of product ${p4.pname} of brand ${p4.brand}`);

let p5=new Product(5,'phone','Vivo',30000,40);
console.log(`price after discount is ${p5.fprice()} of product ${p5.pname} of brand ${p5.brand}`);


//creating copy using assign
let copyOfP1=Object.assign({},p1);
console.log(copyOfP1);
p1.price=45000;
console.log(copyOfP1.price);
//creating copy using spread operator
let cloneOfP1={...p1}
console.log(cloneOfP1)
p1.price=45000;
console.log(cloneOfP1.price);



// sum of n numbers using rest parameter

function sum(...a)
{
  sum=0;
  for(let i of a)
    sum=sum+i;
    return sum;
}

Sum=sum(10,20,30,40,50);
console.log(`sum is ${Sum}`)


//lagest number of n numbers using rest operator

function big(x,...a){
    max=x;
    for(let i of a)
    if (max<i)
    max=i;
    return max;
}

Num=big(10,20,30,40,50);
console.log(`sum is ${Num}`)

function Employee(empno,name,basic,address){

  this.empno=empno;
  this.name=name;
  this.basic=basic;
  this.address=address;
}
Employee.prototype.salary=function()
{
    let salary=this.basic+this.basic*0.2+this.basic*0.15;
    return salary;
}

let emp1=new Employee(1,'Charan',20000,{streetno:102,district='hyderabad',state='telangana'});
let emp2=new Employee(2,'Vivek',10000,{streetno:104,district='medchal',state='telangana'});
let emp3=new Employee(3,'Venkat',15000,{streetno:15,district='hyderabad',state='telangana'});
let emp4=new Employee(4,'Ravi',16000,{streetno:66,district='rangareddy',state='telangana'});
let emp5=new Employee(5,'Raju',23000,{streetno:12,district='medak',state='telangana'});

let empArray=[emp1,emp2,emp3,emp4,emp5];
console.log(empArray)

let salary=empArray.map(function(x.basic){
  return x.basic+x.basic*0.2+x.basic*0.15;
})