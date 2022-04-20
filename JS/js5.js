//max of 3 numbers
a=parseInt(prompt('enter 1st number','0'));
b=parseInt(prompt('enter 2nd number','0'));
c=parseInt(prompt('enter 3rd number','0'));

if(a>b && a>c)
console.log(a,' is greater');
else if(b>a && b>c)
console.log(b,' is greater');
else
console.log(c,' is greater');


//first 10 multiples 
a=parseInt(prompt('enter a number','0'));
for(i=0;i<10;i++)
{
    console.log(a,' * ',i+1,' = ',a*(i+1));
}

//to find factors
a=parseInt(prompt('enter a number','0'));
i=1;
while(i<=a)
{
   if(a%i==0)
   console.log(i,' is a factor of ',a);
   i++;
}


//max number of an array
let a=[10,20,30,40,50];
let max=a[0];
function numberArray(a)
{
   for(i=1;i<a.length;i++){
         if(max<a[i])
         max=a[i];
   }
   console.log('max = ',max);
}


//small number as an array
let a=[10,20,30,40,50];
let min=a[0];
function numberArray(a)
{
   for(i=1;i<a.length;i++){
         if(min>a[i])
         min=a[i];
   }
   console.log('min = ',min);
}