const TEST_RESULT = "test_result_data"
const JOB_TO_SEARCH = "job_search"


/*

WILBERT CHANGES

*/
function findJob(pathway){
    localStorage.setItem(JOB_TO_SEARCH, pathway);
    window.location = "kentest.html";
}


// dictionary stores all the relevant information about all the attributes
let dictionary = {
    "R": {
        name: "Realistic",
        description: "These people are often good at mechanical or atheletic jobs.",
        pathway: ["Agriculture","Health Assistant","Computers","Construction","Mechanic/Machinist","Engineering","Food and Hospitality"],
        gif: ["https://i.pinimg.com/originals/d5/69/12/d56912e297cf3a797d5d5c728a23fda9.gif", "https://cdn.dribbble.com/users/1129235/screenshots/10762000/media/ace6e95b814e602a1b5a0527a54af10f.gif",
        "https://cdn.dribbble.com/users/2008861/screenshots/15526868/alfa-office-dude.gif", "https://www.esthete.in/images/icon2.gif", "https://cdn.dribbble.com/users/2221597/screenshots/11933222/media/c7bff7d4fa3f4befecb1cd1ae87c08ae.gif", "https://blog.advids.co/wp-content/uploads//2017/06/industry-tech111-min.gif",
        "http://discovertemplate.com/wp-content/uploads/2020/09/Hospitality-Services-Animated-GIF-Icon-pack.gif"],
        des: ["This group of careers includes jobs in agriculture, the production of food, and the development of natural resources. ",
            "The health sciences career group covers a diverse range of professions, ranging from those directly involved with patients, to those that support, manufacture, and produce medical and health related products and innovations.",
            "Computer programmers develop code used to create software programs designed to tell computers how to process information and perform specific tasks.",
            "The group of careers encompassing construction and architecture is a rapidly advancing field of study. Professionals in construction fields develop and plan structural components, infrastructure, transportation systems. ",
            "A mechanic is responsible for inspecting and repairing vehicles, machinery, and light trucks. Also known as service technicians, these professionals oversee maintenance inspections, monitor inventory, assemble mechanical components, and perform repairs.",
            "An Engineer, or Senior Engineer, uses math and science to solve different technical problems. Their main duties include developing new products for companies or individuals to use, providing maintenance to current products to enhance use and designing new machines to improve an organization's efficiencies.",
            "Food Service and Hospitality includes businesses and companies that provide a meal outside the home. This can include companies such as restaurants, cafeterias, catering services, and more. "]

    },

    "I": {
        name: "Investigative",
        description: "These people like to watch, learn, analyse and solve problems.",
        pathway: ["Marine Biology", "Engineering", "Chemistry","Zoology", "Medicine/Surgery","Consumer Economics","Psychology"],
        gif: ["https://media0.giphy.com/media/26h0pRNFrxOix2PuM/giphy.gif", "https://blog.advids.co/wp-content/uploads//2017/06/industry-tech111-min.gif", "https://i.pinimg.com/originals/cb/7e/f2/cb7ef26e157572c44cc84f88e92e5149.gif",
                "https://i.pinimg.com/originals/2c/10/f0/2c10f0428c20771beff2f895821686e8.gif", "https://i.pinimg.com/originals/82/b6/48/82b64893248a3a018403e9157dbc7cee.gif", "https://i.pinimg.com/originals/d3/5a/2c/d35a2c4885ba237815fc5178d7e900d1.gif", 
            "https://drkimmyramotar.com/wp-content/uploads/2020/11/Psychologist-3.gif"],
        des: ["Marine biologists are scientists who research life in the oceans and other saltwater environments such as estuaries and wetlands. They observe and analyze data, conduct experiments, rehabilitate injured marine animals and document the origins, behavior, genetics and diseases of marine life.",
            "An Engineer, or Senior Engineer, uses math and science to solve different technical problems. Their main duties include developing new products for companies or individuals to use, providing maintenance to current products to enhance use and designing new machines to improve an organization's efficiencies.", 
            "Chemists conduct experiments in labs in order to analyze substances, develop new products or improve existing ones. They may specialize in one or more areas, such as organic chemistry, inorganic chemistry and biochemistry.", 
            "Zoologists are biological scientists who specialize in the study of animals and their ecosystems. Their primary duties include researching animal behavior, collecting zoological data for analysis, and contributing to the publication of scientific journals.", 
            "Medicine is the field of health and healing. It includes nurses, doctors, and various specialists. It covers diagnosis, treatment, and prevention of disease, medical research, and many other aspects of health. Medicine aims to promote and maintain health and wellbeing.", 
            "Consumer economics is a branch of economics. It is a broad field, principally concerned with microeconomic analysis behavior in units of consumers, families, or individuals (in contrast to traditional economics, which primarily government or business units).", 
            "Psychology is the study of behavior and the mind. The overall scholarly discipline of psychology can be divided into many different specializations, with the most prominent being the following: Clinical — Applying the science and theory of psychology to treat mental illness and disabilities."]

    },

    "A": {
        name: "Artistic",
        description: "These people like to work in unstructured situations where they can use their creativity.",
        pathway: ["Communications","Cosmetology","Fine and Performing Arts", "Photography","Radio and TV","Interior Design", "Architecture"],
        gif: ["https://cdn.dribbble.com/users/1197681/screenshots/7893189/employe_communication.gif", "https://i.pinimg.com/originals/6b/8e/db/6b8edb651c53fe310d4b3b480a1e0592.gif", "https://i.gifer.com/UaCy.gif",
                "https://i.pinimg.com/originals/30/5e/6d/305e6d104bcec6cf420b108f2152a5d4.gif", "https://i.pinimg.com/originals/88/94/d8/8894d8d8f5e3f8eff0cc3de07e7af162.gif", "https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif",
            "https://gifimage.net/wp-content/uploads/2018/11/house-construction-gif-5.gif"],
        des: ["Communications Specialists are sometimes called Public Relations Specialists. Their general responsibility is to handle public relations, information output, press releases and media requests, social media and/or advertising efforts.", 
            "A cosmetologist serves customers by providing various beauty services, such as hair styling, manicures, pedicures, scalp and facial treatments, or make-up application.", 
            "Fine and Performing Arts are those arts which are performed using certain talents/skills by the performers before the public audience. The most common examples of performing arts are dancing, singing, or acting.", 
            "Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.", 
            "The main duty of radio announcers is to present clear, informative and entertaining information to their audience. This often requires announcers to prepare for their broadcasts in advance in areas such as topic research, fact-checking and script or show outline preparation.", 
            "Interior designers make interior spaces functional, safe, and beautiful by determining space requirements and selecting decorative items, such as colors, lighting, and materials. They read blueprints and must be aware of building codes and inspection regulations, as well as universal accessibility standards.", 
            "Architects create designs for new construction projects, alterations and redevelopments. They use their specialist construction knowledge and high-level drawing skills to design buildings that are functional, safe, sustainable and aesthetically pleasing."]

    },

    "S": {
        name: "Social",
        description: "These people like to work with other peole, rather than things.",
        pathway: ["Counseling","Nursing","Physical Therapy","Travel","Advertising","Public Relations","Education"],
        gif: ["https://www.mindgroom.com/wp-content/uploads/2021/02/Importance_of_career_counselling_1..gif", "https://cdn.dribbble.com/users/491173/screenshots/6437348/man_scene.gif", "https://cdn.rcimg.net/Angel0124/images/b6981f98/029e334074cc9725b74dcd917cdc2b6b.gif?width=300&quality=10&blur=20",
            "https://i.gifer.com/921j.gif", "https://visme.co/blog/wp-content/uploads/2019/08/header-1200.gif", "https://www.godfrey.com/-/media/godfrey/insights/pr/7-ways-to-refresh-your-b2b-pr-program/brads-isometric-3d-extrude-inset-p1-01.gif?la=en&&hasCC2361C05501E6D59A52EEA4DFBEB036DA8BE007", "https://i.pinimg.com/originals/bb/0c/c7/bb0cc783196fa9b2119864ff90eb5702.gif"],
        des: ["Counseling is a collaborative effort between the counselor and client. Professional counselors help clients identify goals and potential solutions to problems which cause emotional turmoil; seek to improve communication and coping skills; strengthen self-esteem; and promote behavior change and optimal mental health.", 
            "Nurses promote health, prevent disease and help patients cope with illness. They have a unique scope of practice and can practice independently, although they also collaborate with all members of the health care team to provide the care needed by each patient as an individual.", 
            "Physical therapists work with patients to improve their movement and manage their pain. PTs use a variety of techniques to help their patients, including hands-on therapy, strengthening and stretching exercises, electrical stimulation, ultrasound, ice/heat, and much more.", 
            "A travel agent's role is to help people plan, choose and arrange their holiday. They will usually work to a budget set out by whoever is planning the holiday. They also offer advice and opinions on where to go and local tourist attractions, events and customs.", 
            "The purpose of advertising is to develop a brand for a company and create a relationship between the company and its customers through that brand to initiate and sustain sales to those customers. Individuals working in this field have to be comfortable working without a template.", 
            "Public relations officers use a wide range of media to build and sustain a good image for a company, organisation or brand through planned publicity campaigns and PR activity.", 
            "Education is to teach and educate students according to the educational needs, abilities and attainment potential of individual students entrusted to his/her care by the Head of School or Head of Unit."]

    },

    "E": {
        name: "Enterprising",
        description: "These people like to work with others and enjoy persuading and performing.",
        pathway: ["Fashion Merchandising","Real Estate","Marketing/Sales","Law","Political Science","International Trade","Banking/Finance"],
        gif: ["https://www.increff.com/wp-content/uploads/2021/03/iris-x-Main-image.gif","https://blog.advids.co/wp-content/uploads//2017/06/Real-Estate11.gif", "https://i.pinimg.com/originals/91/16/8b/91168b4873f6659b3e9fdfe4b89cd864.gif",
        "https://i.gifer.com/LHDQ.gif", "https://images.wsj.net/im-236178?width=620&size=custom_1280x853", "https://thumbs.gfycat.com/BriskEdibleConey-size_restricted.gif", "https://www.intersystemsuki.com/wp-content/uploads/2020/06/finance.gif"],
        des: ["Fashion merchandisers oversee the style design of garments and accessories in retail clothing stores, costume suppliers, or fashion houses. It is the fashion merchandiser's responsibility to predict fashion trends, plan and implement store layouts, purchase apparel, and collaborate with designers.", 
        "A real estate agent helps his or her clients purchase, rent, or sell properties. They advise clients about market conditions, conduct walkthroughs, and provide guidance and assistance through the process of buying, selling, or leasing properties.", 
        "A sales and marketing manager is responsible for researching and developing marketing opportunities and planning and implementing new sales plans. The sales and marketing manager will also manage both the marketing and the sales staff and will perform managerial duties to meet the company's operations goals.", 
        "Most law careers involve helping clients deal with legal issues impacting their personal or business interests. Professionals in this field prepare legal documents, create contracts, and defend cases in court.", 
        "Political scientists study the origin, development, and operation of political systems. They research political ideas and analyze governments, policies, political trends, and related issues.", 
        "As an international trader, your responsibilities are to coordinate import and export operations for a company or your own business while following all legal requirements and regulations related to the import and export of goods, materials, or products from one country to another.", 
        "Processing deposits, payments, and withdrawals. Authorizing and evaluating overdrafts and loans. Handling other transactions, such as writing cashier checks or money orders, when necessary. Recommending and explaining banking services and products to clients based on their needs."]

    },

    "C": {
        name: "Conventional",
        description: "These people are very detail oriented, organised and like to work with data.",
        pathway: ["Accounting","Court Reporting","Insurance","Adminstration","Medical Records","Banking","Data Processing"],
        gif: ["http://xiaofei-wang.com/wp-content/uploads/2020/12/software.gif", "https://64.media.tumblr.com/3f5c6ef81ce4e51335e0291515da756a/8c80ca887c2e77a4-25/s400x600/0becf5eb4e1209ac18bd7c98c7780d4f56ff3b77.gifv","https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmVvpCEqfsZjhBkocLPGMkEn9AvxL8NE1aBKahA4r6MHqo/Insurance_Pic5_850x450_Anime.gif",
            "https://images.prismic.io/smarttask%2F61b50d35-28cd-4220-a2be-560c1216e049_project+management.gif?auto=compress,format", "https://cdn.dribbble.com/users/1706228/screenshots/6601279/ams-2-medical-records.gif", "https://thumbs.gfycat.com/OrdinaryWellinformedGosling-max-1mb.gif", "https://blog.advids.co/wp-content/uploads//2017/09/Information-Processing1.gif"],
        des: ["Accounting is the process of recording financial transactions pertaining to a business. The accounting process includes summarizing, analyzing and reporting these transactions to oversight agencies, regulators and tax collection entities.", 
        "Court reporters create word-for-word transcriptions at trials, depositions, administrative hearings, and other legal proceedings. Some court reporters provide captioning for television and real-time translation for deaf or hard-of-hearing people at public events, in business meetings, and in classrooms.", 
        "Insurance Agents are responsible for identifying sales opportunities for insurance plans and overseeing a portfolio of clients. Also known as Insurance Sales Agents, these professionals are responsible for identifying risk management strategies, handling policy renewals, and tracking claims.", 
        "Administration duties may include fielding telephone calls, receiving and directing visitors, word processing, creating spreadsheets and presentations, and filing. Additionally, administrators are often responsible for office projects and tasks, as well as overseeing the work of junior admin staff.", 
        "Creates new medical records and retrieves existing medical records by gathering appropriate record folders and contents; assigning and recording new record numbers; verifying existing record numbers; inputting and recording locations to computer; delivering records.", 
        "Managing client bank accounts, including opening and closing accounts, and overseeing transactions. Processing deposits, payments, and withdrawals. Authorizing and evaluating overdrafts and loans. ... Recommending and explaining banking services and products to clients based on their needs.", 
        "Entering customer and account data from source documents within time limits. Compiling, verifying accuracy and sorting information to prepare source data for computer entry. Reviewing data for deficiencies or errors, correcting any incompatibilities and checking output."]

    }
}

let data = localStorage.getItem(TEST_RESULT);
let result = JSON.parse(data);

// searching for the highest score
let highestAttribute = "E";
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


/***
 * @description creating cards with their job names, and display them to the user
 * @param attribute the highest attribute of the user
 */
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
                <p class="card-text">${dictionary[attribute].des[i]}</p>
                <button class="btn btn-primary" type="button" onclick="findJob(${dictionary[attribute].pathway[i]})">Find Related Jobs</button>
              </div>
            </div>
          </div>`
    }

    output += `<div class="col">
    <div class="card h-100">
      <img src="https://media1.giphy.com/media/j39AzlvlJqE7e/200w.gif?cid=82a1493bm8ociit8vin3b3nq49fvht853fh7fhgbb5wqcgkv&rid=200w.gif&ct=g">
      <div class="card-body">
        <h5 class="card-title">Take RIASEC Test Again!</h5>
        <p class="card-text">Not satisfied with your results? Still doubting our system? Go ahead and try again 😝</p>
        <a href="test.html" class="btn btn-primary stretched-link">Try Again</a>
      </div>
    </div>
  </div>`
  
    output += `<div class="col">
    <div class="card h-100">
      <img src="https://media2.giphy.com/media/S1ZnyFKKJ9rwc/200w.gif?cid=82a1493b6pkmdq1vw84po0ewfb9jn7kkl68nz4q497ybrcmf&rid=200w.gif&ct=g">
      <div class="card-body">
        <h5 class="card-title">Search for more Job!</h5>
        <p class="card-text">Still can't find your dream job? No worries, we got you covered ❤️ </p>
        <a href="kentest.html" class="btn btn-primary stretched-link">Dream Job Come True</a>
      </div>
    </div>
  </div>`
  
    resultRef.innerHTML = output;
}

// calling the function
displayResults(highestAttribute);
