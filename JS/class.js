//employee

class Employee
{
    constructor(empno,name,basic)
    {
        this.empno=empno;
        this.name=name;
        this.basic=basic;
    }

    Printdata(){
        let salary=this.basic+this.basic*0.2+this.basic*0.15;
        console.log("empno of the employee is ",this.empno);
        console.log("name of the employee is ",this.name);
        console.log("salary of the employee is ",salary);
    }
}

let emp1=new Employee(10,"vivek",2000);
emp1.Printdata();

let emp2=new Employee(20,"karan",3000);
emp2.Printdata();

let emp3=new Employee(30,"charan",4000);
emp3.Printdata();

let emp4=new Employee(40,"ravi",5000);
emp4.Printdata();

let emp5=new Employee(50,"hari",6000);
emp5.Printdata();

//product

class Product
{
    constructor(ID,name,MRP)
    {
        this.ID=ID;
        this.name=name;
        this.MRP=MRP;
    }

    Price(){
        let price=this.MRP-this.MRP*0.1;
        console.log("price of product is ",price);
    }
}

let emp1=new Employee(1,"book",200);
emp1.Price();

let emp2=new Employee(20,"pen",30);
emp2.Price();

let emp3=new Employee(30,"eraser",10);
emp3.Price();

let emp4=new Employee(40,"sharpner",7);
emp4.Price();

let emp5=new Employee(50,"pencil",20);
emp5.Price();