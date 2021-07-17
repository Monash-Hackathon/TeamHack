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
    string += `<span> ${questions[i]} 
    <input type="radio" name=question${i}> 
    <input type="radio" name=question${i}> 
    <input type="radio" name=question${i}>
    <input type="radio" name=question${i}> 
    <input type="radio" name=question${i}>
    <input type="radio" name=question${i}> 
    </span>
    <br>`;
}

allQuestionsRef.innerHTML = string
