// local storage used 
const TEST_RESULT = "test_result_data"

// list of questions to ask the user and their attributes
let list = [
    {
        question: "I like to work on cars",
        attribute: "R"
    },

    {
        question: "I like to do puzzles",
        attribute: "I"
    },

    {
        question: "I am good at working independently",
        attribute: "A"
    },

    {
        question: "I like to work in teams", 
        attribute: "S"
    },

    {
        question: "I am an ambitious person, I set goals for myself", 
        attribute: "E"
    },

    {
        question: "I like to organise things(files, desks/offices)",
        attribute: "C"
    },

    {
        question: "I like to build things",
        attribute: "R"
    },

    {
        question: "I like to read about art and music",
        attribute: "A"
    },

    {
        question: "I like to have clear instructions to follow",
        attribute: "C" 
    },

    {
        question: "I lke to try to influence or persuade people",
        attribute: "E"
    },

    {
        question: "I like to do experiments",
        attribute: "I"
    },

    {
        question: "I like to teach or train people",
        attribute: "S"
    },

    {
        question: "I like trying to help people solve their problems",
        attribute: "S"
    },

    {
        question: "I like to take care of animals",
        attribute: "R"
    },

    {
        question: "I wouldn't mind working 8 hours per day in an office",
        attribute: "C"
    },

    {
        question: "I like selling things",
        attribute: "E"
    },

    {
        question: "I enjoy creative writing",
        attribute: "A"
    },

    {
        question: "I enjoy science",
        attribute: "I"
    },

    {
        question: "I am quick to take on new responsibilites",
        attribute: "E"
    },

    {
        question: "I am interested in healing people",
        attribute: "S"
    },

    {
        question: "I enjoy trying to figure out how things work",
        attribute: "I"
    },

    {
        question: "I like putting things together or assembling things", 
        attribute:"R"
    },

    {
        question: "I am a creative person",
        attribute: "A"
    },

    {
        question: "I pay attention to details",
        attribute: "C"
    },

    {
        question: "I like to do filing or typing",
        attribute: "C"
    },

    {
        question: "I like to analyse things(problems/situations)",
        attribute: "I"
    },

    {
        question: "I like to play instruments or sing",
        attribute: "A"
    },

    {
        question: "I enjoy learning about other cultures",
        attribute: "S"
    },

    {
        question: "I would like to start my own business",
        attribute: "E"
    },

    {
        question: "I like to cook",
        attribute: "R"
    },

    {
        question: "I like acting in plays",
        attribute: "A"
    },

    {
        question: "I am a practical person",
        attribute: "R"
    },

    {
        question: "I like working with numbers or charts",
        attribute: "I"
    },

    {
        question: "I like to get into discussions about issues",
        attribute: "S"
    },

    {
        question: "I am good at keeping records of my work",
        attribute: "C"
    },

    {
        question: "I like to lead",
        attribute: "E"
    },

    {
        question: "I like working outdoors",
        attribute: "R"
    },

    {
        question: "I would like to work in an office",
        attribute: "C"
    },

    {
        question: "I'm good at math",
        attribute: "I"
    },

    {
        question: "I like helping people",
        attribute: "S"
    },

    {
        question: "I like to draw",
        attribute: "A"
    },

    {
        question: "I like to give speeches",
        attribute: "E"
    }
]

let allQuestionsRef = document.getElementById("allQuestions");
let string = "";
string += '<div style="text-align: center">'

for (let i=0; i<list.length; i++)
{
    string += `<font size="4"> <span>${i+1}. ${list[i].question}</span> <br>
    <span style="float: center">
    <label style="color:#2dc937">Yes</label> <input type="radio" name="question${i}" id="question${i},0"> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <label style="color:#cc3232">No</label> <input type="radio" name="question${i}" id="question${i},1"> 
    </span> <font>
    <br><hr>`;
}
string += "</div>"
allQuestionsRef.innerHTML = string


/***
 * @description returns the results of the personality test 
 */
function submit()
{
    let answer = {
        "R": 0,
        "I": 0,
        "A": 0,
        "S": 0,
        "E": 0,
        "C": 0
    }

   // iterate through each question
   for(let i=0; i<list.length; i++)
   {
       // making sure either button is selected
       if (document.getElementById(`question${i},0`).checked == true)
       {
           answer[list[i].attribute]++
       }
       else if (document.getElementById(`question${i},1`).checked == true) {} // does not need to do anything, just to make sure the question is answered
       else
       {
           return alert(`Question ${i+1} is not answered`)
       }
   }

   let jsonString = JSON.stringify(answer)
   localStorage.setItem(TEST_RESULT, jsonString)
   window.location.href = "wait.html"
}
