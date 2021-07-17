let results = [
    {
        attribute: "R",
        majors: ["Agriculture","Health Assistant","Computers","Construction","Mechanic/Machinist","Engineering","Food and Hospitality"]
    },

    {
        attribute: "I",
        majors: ["Marine Biology","Engineering","Chemistry","Zoology","Medicine/Surgery","Consumer Economics","Psychology"]
    },

    {
        attribute: "A",
        majors: ["Communications","Cosmetology","Fine and Performing Arts","Photography","Radio and TV","Interior Design","Architecture"]
    },

    {
        attribute: "S",
        majors: ["Counseling","Nursing","Physical Therapy","Travel","Advertising","Public Relations","Education"]
    },

    {
        attribute: "E",
        majors: ["Fashion Merchandising","Real Estate","Marketing/Sales","Law","Political Science","International Trade","Banking/Finance"]
    },

    {
        attribute: "C",
        majors: ["Accounting","Court Reporting","Insurance","Administration","Medical Records","Banking","Data Processing"]
    }
]

function displayResults(){
    let resultRef = document.getElementById("result");
    // let ref=
    let output = "";

    for(let i = 0; i < 6; i++){
        if (results[i].attribute == "C") { //
            for(let j = 0; j < 7; j++){
                output += ` <div class="col">
            <div class="card h-100">
              <img src="img/giphy.gif" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${results[i].majors[j]}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>`
            }  
        }
    }
    
    resultRef.innerHTML = output;
}

displayResults();