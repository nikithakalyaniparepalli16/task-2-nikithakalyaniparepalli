const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const biologyquestions = [
  {
    id: 1,
    question: "What is the basic unit of life?",
    options: ["Cell", "Tissue", "Organ", "Atom"],
    answer: "Cell"
  },
  {
    id: 2,
    question: "Which blood cells fight infections?",
    options: ["RBC", "WBC", "Platelets", "Plasma"],
    answer: "WBC"
  },

  {
  id: 3,
    question: "Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf"
},

{
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Brain"],
    answer: "Skin"
},

{
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D"
},

{
    question: "How many chambers does a human heart have?",
    options: ["2", "3", "4", "5"],
    answer: "4"
},

{
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
},

{
    question: "What is the study of plants called?",
    options: ["Zoology", "Ecology", "Botany", "Genetics"],
    answer: "Botany"
},

{
    question: "DNA stands for?",
    options: [
        "Deoxyribonucleic Acid",
        "Dioxyribose Acid",
        "Double Nucleic Acid",
        "Dynamic Nuclear Acid"
    ],
    answer: "Deoxyribonucleic Acid"
}
];

const chemistryQuestions = [
{
    id:1,
    question:"What is H2O?",
    options:["Water","Oxygen","Hydrogen","Salt"],
    answer:"Water"
},
{
    id:2,
    question:"Chemical symbol of Gold?",
    options:["Au","Ag","Fe","Cu"],
    answer:"Au"
},
{
    question: "Which gas is essential for respiration?",
    options: ["Hydrogen", "Nitrogen", "Oxygen", "Helium"],
    answer: "Oxygen"
},
{
    question: "Which acid is present in lemon?",
    options: ["Sulfuric Acid", "Citric Acid", "Hydrochloric Acid", "Nitric Acid"],
    answer: "Citric Acid"
},

{
    question: "What is the pH value of pure water?",
    options: ["5", "6", "7", "8"],
    answer: "7"
},

{
    question: "Which element is represented by the symbol 'Na'?",
    options: ["Nitrogen", "Neon", "Sodium", "Nickel"],
    answer: "Sodium"
},

{
    question: "Which gas is released during photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
    answer: "Oxygen"
},

{
    question: "What is the chemical formula of common salt?",
    options: ["KCl", "NaCl", "CaCl2", "MgCl2"],
    answer: "NaCl"
},

{
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Copper", "Silver"],
    answer: "Mercury"
},

{
    question: "Which subatomic particle carries a negative charge?",
    options: ["Proton", "Neutron", "Electron", "Nucleus"],
    answer: "Electron"
}
];

const aptitudeQuestions = [
{
    id:1,
    question:"25 × 4 = ?",
    options:["50","75","100","125"],
    answer:"100"
},
{
    id:2,
    question:"50% of 200 = ?",
    options:["50","100","150","200"],
    answer:"100"
},
{
    question: "If a train travels 60 km in 1 hour, how far will it travel in 3 hours?",
    options: ["120 km", "150 km", "180 km", "200 km"],
    answer: "180 km"
},

{
    question: "What is the average of 10, 20 and 30?",
    options: ["15", "20", "25", "30"],
    answer: "20"
},

{
    question: "A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit?",
    options: ["₹50", "₹75", "₹100", "₹150"],
    answer: "₹100"
},

{
    question: "What comes next in the series? 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "64"],
    answer: "32"
},

{
    question: "If 5 workers complete a job in 10 days, how many days will 10 workers take?",
    options: ["2", "5", "10", "20"],
    answer: "5"
},

{
    question: "What is 15% of 400?",
    options: ["40", "50", "60", "80"],
    answer: "60"
},

{
    question: "A car travels at 80 km/hr. How far will it travel in 2.5 hours?",
    options: ["180 km", "200 km", "220 km", "240 km"],
    answer: "200 km"
},

{
    question: "Find the odd one out: 3, 5, 7, 10, 11",
    options: ["3", "5", "7", "10"],
    answer: "10"
},

];

const reasoningQuestions = [
{
id:1,
question:"If ALL = 36, then CAT = ?",
options:["24","26","28","30"],
answer:"24"
},
{
id:2,
question:"Find the odd one out.",
options:["Square","Rectangle","Triangle","Circle"],
answer:"Circle"
},
{
id:3,
question:"2, 4, 8, 16, ?",
options:["20","24","32","64"],
answer:"32"
},
{
id:4,
question:"Dog is to Puppy as Cat is to ?",
options:["Kitten","Cub","Calf","Lamb"],
answer:"Kitten"
},
{
id:5,
question:"Which comes next? A, C, E, G, ?",
options:["H","I","J","K"],
answer:"I"
},
{
id:6,
question:"Mirror image of LEFT?",
options:["TFEL","LEFT","FELT","TELF"],
answer:"TFEL"
},
{
id:7,
question:"Find the missing number: 3, 6, 12, 24, ?",
options:["36","42","48","54"],
answer:"48"
},
{
id:8,
question:"Pen is used for ?",
options:["Writing","Eating","Driving","Swimming"],
answer:"Writing"
},
{
id:9,
question:"Which is different?",
options:["Apple","Banana","Mango","Carrot"],
answer:"Carrot"
},
{
id:10,
question:"1, 3, 6, 10, 15, ?",
options:["18","20","21","25"],
answer:"21"
}
];
const englishQuestions = [
{
id:1,
question:"Choose the correct spelling.",
options:["Recieve","Receive","Receeve","Receve"],
answer:"Receive"
},
{
id:2,
question:"Synonym of Happy?",
options:["Sad","Joyful","Angry","Weak"],
answer:"Joyful"
},
{
id:3,
question:"Antonym of Strong?",
options:["Powerful","Weak","Brave","Bold"],
answer:"Weak"
},
{
id:4,
question:"Fill in the blank: She ___ to school daily.",
options:["go","goes","gone","going"],
answer:"goes"
},
{
id:5,
question:"Choose the noun.",
options:["Run","Beautiful","Book","Quickly"],
answer:"Book"
},
{
id:6,
question:"Past tense of 'eat'?",
options:["eated","ate","eaten","eats"],
answer:"ate"
},
{
id:7,
question:"Choose the adjective.",
options:["Happy","Run","Jump","Walk"],
answer:"Happy"
},
{
id:8,
question:"Which sentence is correct?",
options:[
"He go to school",
"He goes to school",
"He going school",
"He gone school"
],
answer:"He goes to school"
},
{
id:9,
question:"Plural of Child?",
options:["Childs","Children","Childes","Childrens"],
answer:"Children"
},
{
id:10,
question:"Opposite of Hot?",
options:["Warm","Cold","Cool","Heat"],
answer:"Cold"
}
];

const gkQuestions = [
{
id:1,
question:"Capital of India?",
options:["Mumbai","Delhi","Chennai","Kolkata"],
answer:"Delhi"
},
{
id:2,
question:"National Animal of India?",
options:["Lion","Tiger","Elephant","Peacock"],
answer:"Tiger"
},
{
id:3,
question:"Who is known as the Father of the Nation?",
options:[
"Jawaharlal Nehru",
"Mahatma Gandhi",
"Subhash Chandra Bose",
"Bhagat Singh"
],
answer:"Mahatma Gandhi"
},
{
id:4,
question:"Largest planet in our Solar System?",
options:["Earth","Mars","Jupiter","Saturn"],
answer:"Jupiter"
},
{
id:5,
question:"How many continents are there?",
options:["5","6","7","8"],
answer:"7"
},
{
id:6,
question:"National Bird of India?",
options:["Crow","Parrot","Peacock","Sparrow"],
answer:"Peacock"
},
{
id:7,
question:"Which ocean is the largest?",
options:[
"Atlantic",
"Indian",
"Pacific",
"Arctic"
],
answer:"Pacific"
},
{
id:8,
question:"Who invented the telephone?",
options:[
"Newton",
"Edison",
"Alexander Graham Bell",
"Tesla"
],
answer:"Alexander Graham Bell"
},
{
id:9,
question:"Currency of Japan?",
options:["Won","Yen","Dollar","Euro"],
answer:"Yen"
},
{
id:10,
question:"Red Planet is?",
options:["Earth","Venus","Mars","Mercury"],
answer:"Mars"
}
];
const scienceQuestions = [
{
id:1,
question:"What planet is known as the Red Planet?",
options:["Earth","Venus","Mars","Jupiter"],
answer:"Mars"
},
{
id:2,
question:"What is the chemical symbol for Oxygen?",
options:["O","Ox","Og","Oy"],
answer:"O"
},
{
id:3,
question:"Which organ pumps blood throughout the body?",
options:["Liver","Brain","Heart","Kidney"],
answer:"Heart"
},
{
id:4,
question:"What gas do plants absorb from the atmosphere?",
options:["Oxygen","Hydrogen","Carbon Dioxide","Nitrogen"],
answer:"Carbon Dioxide"
},
{
id:5,
question:"How many bones are there in an adult human body?",
options:["206","208","210","212"],
answer:"206"
},
{
id:6,
question:"What is the boiling point of water?",
options:["90°C","95°C","100°C","110°C"],
answer:"100°C"
},
{
id:7,
question:"Which vitamin is produced when skin is exposed to sunlight?",
options:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],
answer:"Vitamin D"
},
{
id:8,
question:"What is the nearest star to Earth?",
options:["Moon","Mars","Sun","Venus"],
answer:"Sun"
},
{
id:9,
question:"Which part of the plant conducts photosynthesis?",
options:["Root","Stem","Leaf","Flower"],
answer:"Leaf"
},
{
id:10,
question:"What force keeps us on the ground?",
options:["Magnetism","Friction","Gravity","Pressure"],
answer:"Gravity"
}
];

const currentAffairsQuestions = [
{
id:1,
question:"Who is the current Prime Minister of India?",
options:[
"Narendra Modi",
"Rahul Gandhi",
"Droupadi Murmu",
"Amit Shah"
],
answer:"Narendra Modi"
},
{
id:2,
question:"Which city hosted the G20 Summit 2023 in India?",
options:[
"Mumbai",
"Delhi",
"Hyderabad",
"Bengaluru"
],
answer:"Delhi"
},
{
id:3,
question:"India's current President is?",
options:[
"Ram Nath Kovind",
"Droupadi Murmu",
"Narendra Modi",
"Jagdeep Dhankhar"
],
answer:"Droupadi Murmu"
},
{
id:4,
question:"Which organization conducts the IPL tournament?",
options:[
"BCCI",
"ICC",
"FIFA",
"AIFF"
],
answer:"BCCI"
},
{
id:5,
question:"Which mission successfully landed near the Moon's south pole?",
options:[
"Chandrayaan-1",
"Chandrayaan-2",
"Chandrayaan-3",
"Mangalyaan"
],
answer:"Chandrayaan-3"
},
{
id:6,
question:"Which country hosted the FIFA World Cup 2022?",
options:[
"Brazil",
"Qatar",
"Russia",
"France"
],
answer:"Qatar"
},
{
id:7,
question:"What is India's national digital payment system called?",
options:[
"UPI",
"PayPal",
"Visa",
"Mastercard"
],
answer:"UPI"
},
{
id:8,
question:"Which state launched the 'Gruha Lakshmi' scheme?",
options:[
"Telangana",
"Andhra Pradesh",
"Karnataka",
"Kerala"
],
answer:"Karnataka"
},
{
id:9,
question:"Which space agency launched the Aditya-L1 mission?",
options:[
"NASA",
"ESA",
"ISRO",
"JAXA"
],
answer:"ISRO"
},
{
id:10,
question:"What does G20 stand for?",
options:[
"Group of 20 Countries",
"Global 20 Nations",
"Government 20 Alliance",
"Group of 20 Economies"
],
answer:"Group of 20 Economies"
}
];

// GET Endpoint
app.get("/api/biology", (req, res) => {
  res.json(biologyquestions);
});
// Chemistry
app.get("/api/chemistry",(req,res)=>{
    res.json(chemistryQuestions);
});

// Aptitude
app.get("/api/aptitude",(req,res)=>{
    res.json(aptitudeQuestions);
});
app.get("/api/reasoning",(req,res)=>{
    res.json(reasoningQuestions);
});

app.get("/api/english",(req,res)=>{
    res.json(englishQuestions);
});

app.get("/api/gk",(req,res)=>{
    res.json(gkQuestions);
});

app.get("/api/science",(req,res)=>{
    res.json(scienceQuestions);
});

app.get("/api/currentaffairs",(req,res)=>{
    res.json(currentAffairsQuestions);
});
// POST Endpoint
app.post("/api/biology", (req, res) => {

  const newQuestion = {
  id: Date.now(),
  ...req.body
};

  biologyquestions.push(newQuestion);

  res.status(201).json({
    message: "Question Added Successfully",
    data: newQuestion
  });

});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});