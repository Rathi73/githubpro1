const button=document.querySelector('button');
button.addEventListener('click',answervalid);
function answervalid(){
    const getvalue=document.getElementById('getvalue').value;
    let operand1='',operand2='',operator='';
    let operatorFound=false;
    //iterate each character in input string
    for(let i=0;i<getvalue.length;i++){
        let char=getvalue[i];
       console.log(char); 
       //checks the character is an operator
       if(['+','-','*','/','%','**'].includes(char)){
         operator=char;
         operatorFound=true;
       }
       else {
          if(operatorFound){
            operand2+=char;
          }
          else{
            operand1+=char;
          }
       }
    }
    //conver string to number
    operand1=Number(operand1);
    operand2=Number(operand2);
    //perform basic operation
    switch(operator){
        case '+':{
            var result=operand1+operand2;
            console.log(result);break;
        }
        case '-':{
            var result=operand1-operand2;
            console.log(result);break;
        }
        case '*':{
            var result=operand1*operand2;
            console.log(result);break;
        }
        case '/':{
            var result=operand1/operand2;
            console.log(result);break;
        }
        case '%':{
            var result=operand1%operand2;
            console.log(result);break;
        }
        case '**':{
            var result=operand1**operand2;
            console.log(result);break
        }
        default:
            console.log("No answer");
    }
    const last=document.getElementById('answer');
    last.innerHTML=Math.round(result);
}