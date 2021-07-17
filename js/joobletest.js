function abc(){
let jobref = document.getElementById("jobName")
let locref = document.getElementById("jobLoc")

var url = "https://jooble.org/api/";
var key = "e1d32487-e932-46bf-976c-f19dec3fd684";
var params = `{ keywords: '${jobref.value}', location: '${locref.value}'}`

//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
let displayRef = document.getElementById("display");
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
        let a = JSON.parse(http.responseText)
		displayRef.innerHTML = a.totalCount;
	}
}
//Send request to the server
http.send(params);
}