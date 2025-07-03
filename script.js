let chem=document.getElementById("chem");
let hin=document.getElementById("hin");
let mat =document.getElementById("mat");
let phy=document.getElementById("phy");
let a;
let b;
let c;
let d;
chem.addEventListener("blur",function(){
     a=parseInt(chem.value);
});
hin.addEventListener("blur",function(){
     b=parseInt(hin.value);
});
mat.addEventListener("blur",function(){
     c=parseInt(mat.value);
});
phy.addEventListener("blur",function(){
     d=parseInt(phy.value);
});
let para=document.createElement("p");
document.body.appendChild(para);
let para1=document.createElement("p");
document.body.appendChild(para1);
function grade(){
    if(a===undefined||d===undefined||b===undefined||c===undefined||a>100||b>100||c>100||d>100){
        para.textContent="Please enter all fields";
        para1.textContent="";
    }
    else{
        let sum=a+b+c+d ;
        let rank= (sum/400)*100;
        para.textContent= `Out of 400 your total is ${sum} and percentage is ${rank}%.`;
        if(rank>=90){
        para1.textContent= "Your grade is A+. You are pass.";
        }
        else if(rank<90 && rank>=80){
        para1.textContent= "Your grade is A. You are pass.";
        }
        else if(rank<80 && rank>=70){
        para1.textContent= "Your grade is B. You are pass.";
        }
        else if(rank<70 && rank>=60){
        para1.textContent= "Your grade is C. You are pass.";
        }
        else if(rank<60 && rank>=50){
        para1.textContent= "Your grade is D. You are pass.";
        }
        else{
        para1.textContent= "Your grade is F. You are fail.";
        }
    }
}