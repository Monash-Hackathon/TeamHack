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

function jobSearch(jobName, location, jobType) {
    //Define a variable to hold the data needed to be requested
    let data = {
        app_id: "afd0cfd8",
        app_key: "9816f3772da75687810de10f5b1fa1bf",
        what: `${jobName}`,
        results_per_page: 10,
        where: `${location}`,
        callback: "showData"
    }
    if (jobType == "full_time")
    {
        data = {
            app_id: "afd0cfd8",
            app_key: "9816f3772da75687810de10f5b1fa1bf",
            what: `${jobName}`,
            results_per_page: 10,
            full_time: 1,
            where: `${location}`,
            callback: "showData"
        }
    }
    else
    {
        data = {
            app_id: "afd0cfd8",
            app_key: "9816f3772da75687810de10f5b1fa1bf",
            what: `${jobName}`,
            results_per_page: 10,
            part_time: 1,
            where: `${location}`,
            callback: "showData"
        }
    }    
    let reqString = "https://api.adzuna.com/v1/api/jobs/"
    //Generate request to the web service
    webServiceRequest(`${reqString}${countryCode}/search/1`, data);
}

function searchingJob() {
    let nameRef = document.getElementById("jobName");
    let locRef = document.getElementById("jobLoc");
    let jobTypeRef = document.getElementById("jobType");
    let invalid = document.getElementById("invalidInput");

    dataForwardGeo(locRef.value, "findCountryCode")

    setTimeout(()=>{if (countryCode != ""){
        jobSearch(nameRef.value, locRef.value, jobTypeRef.value, "showData");
    }
    else{
        alert("Invalid Country");
    }
    },3500)
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

    if (result.count > 0){
    while (i<10) {
        output += `<div class = "container" style="border-radius: 15px; border: solid;" >
                <div class="row align-items-start">`
        try 
        {
            if (data[i].salary_max != undefined)
            {
                output += `<div class="col" >${i+1}. ${data[i].title}<br></div> <div class="col"><b>${currency}</b> ${data[i].salary_max}</div>`
            }
            else
            {
                output += `<div class="col">${i+1}. ${data[i].title}<br></div><div class="col"> Salary not specified</div>`
                
            }
            output += `<div class="col"><h5> ${data[i].location.display_name}</h5></div>
            <p class = "card-text"> ${data[i].description} </p></div>
            <div style="padding-left: 1200px;"><a class="btn btn-primary" href = "${data[i].redirect_url}" role="button">View Job</a> 
            </div>`

            if(data[i].contract_time == "full_time")
            {
                output += "Full Time"
            }
            else if (data[i].contract_time == "part_time")
            {
                output += "Part Time"
            }
            else
            {
                output += "Contract Not Specified"
            }
            output += `<br>
            </div>
            </div>
            <br>`
            i++
        }
        catch(err)  
        {
            i++;
        }
    }
}
else {
    output = `<div style = "color:red; text-align:center; font-size:50px"><i> No Job Found</i></div>`
}
    displayRef.innerHTML = output;

}
