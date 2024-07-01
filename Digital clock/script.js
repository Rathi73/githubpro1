function display(){
    let datetime=new Date();
    let hr=addzero(datetime.getHours());
    let min=addzero(datetime.getMinutes());
    let sec=addzero(datetime.getSeconds());
    let ampm=(hr>12)?'PM':'AM';
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('secounds').innerHTML=sec;
    document.getElementById('ampm').innerHTML=ampm;
}
function addzero(num){
     return num<10?'0'+num:num;
}

setInterval(display,500); 