// list of questions to ask the user
let questions = ["I like to work on cars", "I like to do puzzles", "I am good at working independently",
"I like to work in teams", "I am an ambitious person, I set goals for myself", "I like to organise things(files, desks/offices)",
"I like to build things", "I like to read about art and music", "I like to have clear instructions to follow", 
"I lke to try to influence or persuade people", "I like to do experiments", "I like to teach or train people",
"I like trying to help people solve their problems", "I like to take care of animals", "I wouldn't mind working 8 hours per day in an office",
"I like selling things", "I enjoy creative writing", "I enjoy science", "I am quick to take on new responsibilites",
"I am interested in healing people", "I enjoy trying to figure out how things work", "I like putting things together or assembling things", 
"I am a creative person", "I pay attention to details", "I like to do filing or typing", "I like to analyse things(problems/situations)",
"I like to play instruments or sing", "I enjoy learning about other cultures", "I would like to start my own business",
"I like to cook", "I like acting in plays", "I am a practical person", "I like working wit numbers or charts",
"I like to get into discussions about issues", "I am good at keeping records of my work", "I like to lead", "I like working outdoors",
"I would like to work in an office", "I'm good at math", "I like helping people", "I like to draw", "I like to give speeches"];

let allQuestionsRef = document.getElementById("allQuestions");
let string = "";

for (let i=0; i<questions.length; i++)
{
    string += `<span> <li class="list-group-item">${questions[i]}</li></span>
    <span style="float: right">
    <input type="radio" name="question${i}" id="question${i},0" value=0> 
    <input type="radio" name="question${i}" id="question${i},1" value=1> 
    <input type="radio" name="question${i}" id="question${i},2" value=2>
    <input type="radio" name="question${i}" id="question${i},3" value=3> 
    <input type="radio" name="question${i}" id="question${i},4" value=4>
    <input type="radio" name="question${i}" id="question${i},5" value=5>  
    </span>
    <br><hr>`;
}
allQuestionsRef.innerHTML = string


/***
 * @description function that returns the results of the personality test 
 */
function submit()
{
    let answer = [0,0,0,0,0,0]
    // outer loop checks each question
    for(let i=0; i<questions.length; i++)
    {
        // inner loop checks for buttons selected in each question
        for(let j=0; j<5; j++)
        {
            let buttonSelected = document.getElementById(`question${i},${j}`);
            if (buttonSelected.checked == true)
            {
                answer[j]++
            }
        }
    }
    return answer
}
