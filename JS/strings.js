//frequency
 let str="abbbaabbababba"
 let length=str.length;
 let freq={};
let getc,i,noc;
for(i=0;i<length;i++)
{
    getc=str.charAt(i);
    noc=freq[getc];
    freq[getc]=noc?noc+1:1;
}

for(getc in freq){
    if(getc!=' ')
    console.log(`character ${getc} occurences ${freq[getc]}`)
}
console.log(freq);

//reverse
//  str="mango";
//  function reverse(str){
//      let newstr="";
//      for(var i=str.length-1;i>=0;i--){
//         newstr=newstr+str[i];
//      }
//      return newstr;
//  }
//  reverseStr=reverse(str);
//  console.log(reverseStr);



//destructure
//  function des(obj){
//     let  {telugu,hindi,english,maths} = obj;
//      marks=(telugu+hindu+english+maths)/4;
//      return marks;
//  }
// obj1={
//     telugu:90,
//     hindu:97,
//     english:89,
//     maths:91
// }
// avgMarks=des(obj1);
// console.log(`average marks = ${avgMarks}`);



//search
// function search(substr){
//     let string="hello this is javascript";
//     if(string.indexOf(substr)>=0)
//     return `success at index ${string.indexOf(substr)}`
//     else
//     return "search unsucess";
// }
// result1=search("is");
// console.log(result1);

// result2=search("that");
// console.log(result2);