const TEST_RESULT = "test_result_data"

// dictionary stores all the relevant information about all the attributes
let dictionary = {
    "R": {
        name: "Realistic",
        description: "These people are often good at mechanical or atheletic jobs.",
        pathway: ["Agriculture","Health Assistant","Computers","Construction","Mechanic/Machinist","Engineering","Food and Hospitality"]
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

for (let i=0; i<dictionary[highestAttribute].pathway.length; i++)
{
    document.getElementById(`job${i}`).innerHTML = dictionary[highestAttribute].pathway[i];
}
