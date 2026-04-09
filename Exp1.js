function calculateResult(){
    let n=document.getElementById("Subjects").value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("Enter marks for subject " + i));//prompt function always returns string value.
        total+=marks;
    }
    let avg=total/n;
    let grade;
    let result;
    if(avg>=90)
    {
        grade="A+";
    }
    else if(avg>=75)
    {
        grade="A";
    }
    else if(avg>=60)
    {
        grade="B";
    }
    else if(avg>=50)
    {
        grade="C";
    }
    else
    {
        grade="F";
    }
    if(avg>=40)
    {
        result="Pass";
    }
    else
    {
        result="Fail";
    }
    document.getElementById("result").innerHTML=
    "Total Marks: " + total + "<br>" + 
    "Average Marks: " + avg + 
    "<br>Grade: " + grade + "<br>Result: " + result;

}