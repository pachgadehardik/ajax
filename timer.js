function showTime(){
    const date = new Date();
    return date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
}

function showSessionExpired(){
    console.log("Activity B: Session expired at "+showTime())
}

console.log("Act A Trigrring Act B at "+showTime());
setTimeout(showSessionExpired, 5000);
console.log("Act A: triggered Act B at: "+showTime()+"after 5 sec")