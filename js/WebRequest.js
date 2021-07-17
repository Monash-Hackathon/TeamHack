"use strict"
let countryCode = "";
let currency = "";

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

function dataForwardGeo(location, callbackName) {

    //Define a variable to hold the data needed to be requested
    let data = {
        q: `${location}`,
        key: "46a38f2f952f4a65a8340cb1d569a8db",
        callback: callbackName
    }

    //Generate request to the web service
    webServiceRequest(`https://api.opencagedata.com/geocode/v1/json`, data);
}

function jobSearch(jobName, location) {

    //Define a variable to hold the data needed to be requested
    let data = {
        app_id: "afd0cfd8",
        app_key: "9816f3772da75687810de10f5b1fa1bf",
        what: `${jobName}`,
        results_per_page: 10,
        where: `${location}`,
        callback: "showData"
    }
    let reqString = "https://api.adzuna.com/v1/api/jobs/"
    //Generate request to the web service
    webServiceRequest(`${reqString}${countryCode}/search/1`, data);
}

function searchingJob() {
    let nameRef = document.getElementById("jobName")
    let locRef = document.getElementById("jobLoc")

    dataForwardGeo(locRef.value, "findCountryCode")

    setTimeout(()=>{jobSearch(nameRef.value, locRef.value, "showData")}, 3000)

}

function findCountryCode(result){
    countryCode = result.results[0].components.country_code;
    currency =result.results[0].annotations.currency.iso_code;
}

function showData(result) {
    let displayRef = document.getElementById("display");
    let data = result.results;
    let output = "";
    let i = 0;

    while (i<10) {
        try {output += `<div class = "card-body>
        <h4 class = "card-title">${data[i].title}<br> <b>${currency}</b>${data[i].salary_max}</h4>
        <h5> ${data[i].location.display_name}</h5>
        <p class = "card-text"> ${data[i].description} </p>
        <a href = "${data[i].redirect_url}" >View Job</a> 
        </div>
        </div>
        <br>`
        i++;
        }
        catch(err){
        i++;
        }
    }
    displayRef.innerHTML = output;

}
