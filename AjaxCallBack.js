let XMLHttpRequest = require("xmlHttpRequest").XMLHttpRequest;

function getUserDetailsCallBack(data){
    console.log("Get User Details: "+data);
}

function makeAjaxCall(methodType, url, callbackfnc, async = true, data = null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log("State Changed Called. Ready State: "+ xhr.readyState+" Status: "+xhr.status);
        if(xhr.readyState == 4){
            if(xhr.status ===200 || xhr.status === 201){
                callbackfnc(xhr.responseText)
            }else if(xhr.status >= 400){
                console.log("Handle 400 or 500 status errors")
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

}
const getUrl = "http://localhost:3000/employees/93";
makeAjaxCall("GET", getUrl, getUserDetailsCallBack, true);

const deleteUrl =  "http://localhost:3000/employees/94";
function userDeleted(data){
    console.log("User Deleted: "+data);
}
makeAjaxCall("DELETE",deleteUrl,userDeleted,false);

const postUrl = "http://localhost:3000/employees/";
const empData = {
    "name": "Mukesh",
    "salary": 500000,
    "startDate": {
      "year": 2020,
      "month": 11,
      "day": 1
    },
    "gender": "M"
  }
function userAdded(data){
    console.log("USer Added: "+data);
}
makeAjaxCall("POST", postUrl, userAdded, true, empData);