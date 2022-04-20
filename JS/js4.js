
function gradeABC()
{
    var grade=prompt('enter grade:');

    if(grade>90)
    console.log('grade is A');
    else if(grade>=70 && grade<=90)
    console.log('grade is B');
    else
    console.log('grade is C');
}

gradeABC();