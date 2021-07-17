const TEST_RESULT = "test_result_data"

// dictionary stores all the relevant information about all the attributes
let dictionary = {
    "R": {
        name: "Realistic",
        description: "These people are often good at mechanical or atheletic jobs.",
        pathway: ["Agriculture","Health Assistant","Computers","Construction","Mechanic/Machinist","Engineering","Food and Hospitality"],
        gif: ["https://i.pinimg.com/originals/d5/69/12/d56912e297cf3a797d5d5c728a23fda9.gif", "https://cdn.dribbble.com/users/1129235/screenshots/10762000/media/ace6e95b814e602a1b5a0527a54af10f.gif",
        "https://cdn.dribbble.com/users/2008861/screenshots/15526868/alfa-office-dude.gif", "https://www.esthete.in/images/icon2.gif", "https://cdn.dribbble.com/users/2221597/screenshots/11933222/media/c7bff7d4fa3f4befecb1cd1ae87c08ae.gif", "https://blog.advids.co/wp-content/uploads//2017/06/industry-tech111-min.gif",
        "http://discovertemplate.com/wp-content/uploads/2020/09/Hospitality-Services-Animated-GIF-Icon-pack.gif"]
    },

    "I": {
        name: "Investigative",
        description: "These people like to watch, learn, analyse and solve problems.",
        pathway: ["Marine Biology", "Engineering", "Chemistry","Zoology", "Medicine/Surgery","Consumer Economics","Psychology"]
    },

    "A": {
        name: "Artistic",
        description: "These people like to work in unstructured situations where they can use their creativity.",
        pathway: ["Communications","Cosmetology","Fine and Performing Arts", "Photography","Radio and TV","Interior Design", "Architecture"]
    },

    "S": {
        name: "Social",
        description: "These people like to work with other peole, rather than things.",
        pathway: ["Counseling","Nursing","Physical Therapy","Travel","Advertising","Public Relations","Education"]
    },

    "E": {
        name: "Enterprising",
        description: "These people like to work with others and enjoy persuading and performing.",
        pathway: ["Fashion Merchandising","Real Estate","Marketing/Sales","Law","Political Science","International Trade","Banking/Finance"]
    },

    "C": {
        name: "Conventional",
        description: "These people are very detail oriented, organised and like to work with data.",
        pathway: ["Accounting","Court Reporting","Insurance","Adminstration","Medical Records","Banking","Data Processing"]
    }
}

let data = localStorage.getItem(TEST_RESULT);
let result = JSON.parse(data);

// searching for the highest score
let highestAttribute = "R";
for (let attribute in result)
{
   if(result[attribute] > result[highestAttribute])
   {
       highestAttribute = attribute;
   }
}

// display all the data
document.getElementById("name").innerHTML = `<h3> Your Primary Attribute is ${highestAttribute} (${dictionary[highestAttribute].name})<h3>`
document.getElementById("description").innerHTML = `<h3> ${dictionary[highestAttribute].description}<h3>`

function displayResults(attribute){
    let resultRef = document.getElementById("result");
    let output = "";

    for(let i = 0; i < dictionary[attribute].pathway.length; i++)
    {
        output += ` <div class="col">
            <div class="card h-100">
              <img src="${dictionary[attribute].gif[i]}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${dictionary[attribute].pathway[i]}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>`
    }
    
    resultRef.innerHTML = output;
}

displayResults(highestAttribute);
