const button=document.querySelector('button');

button.addEventListener('click',information);

function information(){
    console.log('clicked');
    const selectElement=document.querySelector('#select');
    const selectedIndex=selectElement.selectedIndex
    const selectedOption =selectElement.options[selectedIndex];
    const Input=selectedOption.text;
    
    let populations=0,literacyRate=0,language=' ';
    switch(Input)
    {
        case 'Bengaluru':{
            console.log("From bengaluru");
            populations=1200000;
            literacyRate=90.2;
            language='Kannada';
            break;
        }
        case 'Chennai':{
            console.log("From chennaiu");
            populations=1000000;
            literacyRate=93.2;
            language='Tamil';
            break;
        }
        case 'Mumbai':{
            console.log("From Mumbai");
            populations=900000;
            literacyRate=95.2;
            language='Tamil';
            break;
        }
        case 'Delhi':{
            console.log("From Delhi");
            populations=1700000;
            literacyRate=98.2;
            language='Hindi';
            break;
        }
        case 'Goa':{
            console.log("From goa");
            populations=1200000;
            literacyRate=80.2;
            language='Marathi';
            break;
        }
        default:
            console.log("not matched");
    }
    let text=`The Indian City of ${Input} has a population of a ${language}.language spoken is and literacy rate is ${literacyRate}`;
    console.log(text);
    let result=document.getElementById('result');
    result.innerHTML = text;
}
