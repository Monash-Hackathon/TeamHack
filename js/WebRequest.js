"use strict"

function webServiceRequest(url, data) {
    // Build URL parameters from data object.
    let params = "";
    // For each key in data object...
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (params.length == 0) {
                // First parameter starts with '?'
                params += "?";
            }
            else {
                // Subsequent parameter separated by '&'
                params += "&";
            }

            //Encoding replaces the problem characters with escape sequences
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(data[key]);

            params += encodedKey + "=" + encodedValue;
        }
    }
    //Create an instance of the element for script
    let script = document.createElement('script');
    //Add the instance of element together with the parameters 
    script.src = url + params;
    //Appends a node as the last child of a node
    document.body.appendChild(script);
}


function jobSearch(jobName, location, callbackName) {

    //Define a variable to hold the data needed to be requested
    let data = {
        engine : "google_jobs",
        q: `${jobName}`,
        location : `${location}`,
        api_key: "6f147a45afa10165eb8f514be29ee2ebde68971252c901c0779f9936a2ed19e3",
        jsonp: callbackName
    }

    //Generate request to the web service
    webServiceRequest(`https://serpapi.com/search.json`, data);
}

function jobApply(jobId, callbackName) {
    //Define a variable to hold the data needed to be requested
    let data = {
        engine : "google_jobs_listing",
        q: `${jobId}`,
        api_key: "6f147a45afa10165eb8f514be29ee2ebde68971252c901c0779f9936a2ed19e3",
        output: callbackName
    }

    //Generate request to the web service
    webServiceRequest(`https://serpapi.com/search`, data);
}

function abc() {
    let nameRef = document.getElementById("jobName")
    let locRef = document.getElementById("jobLoc")

    jobSearch(nameRef.value, locRef.value, "showData")
}

function showData(result) {
    let displayRef = document.getElementById("display");
    displayRef.innerHTML = result
}

var url = "https://serpapi.com/search";
var key = "6f147a45afa10165eb8f514be29ee2ebde68971252c901c0779f9936a2ed19e3";
var params = "{ engine: 'google_jobs', q: 'software', location: 'Malaysia'}"

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
		displayRef.innerHTML = a.jobs_results[0].title;
	}
}
//Send request to the server
http.send(params);