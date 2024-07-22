window.onload=function(){
    let currentHour= new Date().getHours();
    let greeting;

    if(currentHour<12){
       greeting= 'good morning';
    }else if(currentHour<18){
        greeting='good noon';   
    } else {
       greeting='good evening';
    }

    alert(greeting);

};