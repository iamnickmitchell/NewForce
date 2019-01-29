// Create a new project.
// Paste the array of student objects above into your JavaScript file.
// Put the h1, section, and aside functions into your JavaScript file.
// Add the following styles to your CSS.

const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// for (let i = 0; i < students.length; i++){
//     let studentComponentPassing = ""
//     let studentComponentFailing = ""
//     if (students[i].score >= 60) {
//         studentComponentPassing = `<div class="student">
//         <h1 class="xx-large passing">Student Name</h1>
//         <section class="bordered dashed section--padded">Student class</section>
//         <aside class="pushRight">Additional information</aside>
//     </div>`
//     } else {
//         studentComponentFailing = `<div class="student">
//         <h1 class="xx-large failing">Student Name</h1>
//         <section class="bordered dashed section--padded">Student class</section>
//         <aside class="pushRight">Additional information</aside>
//     </div>`
//     }
// }


// const createStudentComponent = (name, studentClass, sectionClass, info) => `
//     <div id="student">
//         ${h1(name, studentClass, "xx-large")}
//         ${section(sectionClass, "section--padded")}
//         ${aside(info, "pushRight")}
//     </div>
// `

// const container = document.querySelector("#container")
// container.innerHTML = createStudentComponent("Marcus Fulbright", "Algebra", "Not a bright student")


let htmlString = "";

for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = `<h1 class = "xx-large passing">${student.name}</h1>`
        // `${h1(student.name, "xx-large passing")}`
    } else {
        studentComponent = `<h1 class = "xx-large failing">${student.name}</h1>`
        // `${h1(student.name, "xx-large failing")}`
    }
    studentComponent += `<section class = "bordered dashed section--padded">${student.class}</section>`
    // `${section(student.class, "section--padded")} ${aside(student.info, "pushRight")}`
    
}

document.querySelector("#container").innerHTML = htmlString;





//for of loop
// for (const student of students) {
//     let studentComponent = ""
//     if (currentStudent.score >= 60) {
//         studentComponent = h1(currentStudent.name, "xx-large passing")
//     } else {
//         studentComponent = h1(currentStudent.name, "xx-large failing")
//     }
//     studentComponent += `${section(student.class, "bordered dashed section--padded")} ${aside(student.info, "pushRight")}`
// }

// const h1 = 