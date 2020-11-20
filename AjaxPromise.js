const { get } = require("https");

let XMLHttpRequest = require("xmlHttpRequest").XMLHttpRequest;

function getUserDetailsCallBack(data){
    console.log("Get User Details: "+data);
}

function makePromiseCall(methodType, url, callbackfnc, async = true, data = null){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log("State Changed Called. Ready State: "+ xhr.readyState+" Status: "+xhr.status);
        if(xhr.readyState == 4){
            if(xhr.status ===200 || xhr.status === 201){
               resolve(xhr.responseText)
            }else if(xhr.status >= 400){
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
                console.log("XHR Failed!")
            }
        }
    }

    xhr.open(methodType, url, async);
    if(data){
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(data))
    }else xhr.send();
    console.log(methodType+" request Sent to the server!");
    });
    

}
const getUrl = "http://localhost:3000/employees/93";
makePromiseCall("GET", getUrl, true)
    .then(responseText => {
        console.log("Get User data: " + responseText)
    })
    .catch(error => console.log("Get Error Stat: " + JSON.stringify(error)));