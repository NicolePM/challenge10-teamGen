//require inquirer
const inquirer = require('inquirer');
//require fs
const fs = require('fs');


//require team files
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

//create array for roles
const managers = [];
const engineers = [];
const interns = [];

//confirm new team member
const compileTeamMember = () => {
    inquirer
        .prompt ([
            {
                type: 'confirm',
                name: 'compileTeamMember',
                message: 'Would you like to add another team member?',
            },
        ])
        .then((answers) => {
            if(answers.compileTeamMember === true) {
                question1();
            } else {
                console.log(managers, engineers, interns);
                module.exports = managers;
                module.exports = engineers;
                module.exports = interns;
                deleteHtml();
                topHtmlFile();
                managerGenerator();
                engineerGenerator();
                internGenerator();
                bottomHtmlFile();
                return answers;
            }
        });
};

//question1 
const question1 = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'What is employees role?',
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then((answers) => {
            if (answers.role === 'Manager') {
                managerQuestions();
            } else if (answers.role === 'Engineer') {
                engineerQuestions();
            } else if (answers.role === 'Intern') {
                internQuestions();
            }
        });
};

question1();

//engineer questions
const engineerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is engineers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is engineers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is engineers email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is engineers github username (case sensitive)?',
            },
        ])
        .then((answers) => {
            const newEngineer = new Engineer (
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            engineers.push(newEngineer);
            compileTeamMember();
        });
};

//intern questions
const internQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did the intern attend?',
            },
        ])
        .then((answers) => {
            const newIntern = new Intern (
                answers.name,
                answers.id,
                answers.email,
                answers.school,
            );
            interns.push(newIntern);
            compileTeamMember();
        });
};

//manager questions
const managerQuestions = () => {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?',
            },
        ])
        .then((answers) => {
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber,
            );
            managers.push(newManager);
            compileTeamMember();
        });
};

//delete html file in none
const deleteHtml = () => {
    fs.unlinkSync('./index.html');
};

//append top html
const topHtmlFile = () => {
    fs.appendFileSync('index.html', generateHTML());
};

//append manager
const managerGenerator = () => {
    managers.forEach((manager => {
        fs.appendFileSync('index.html', generateMgr(manager));
    }));
};

//append engineer
const engineerGenerator = () => {
    engineers.forEach((engineer => {
        fs.appendFileSync('index.html', generateEng(engineer));
    }));
};

//append intern
const internGenerator = () => {
    interns.forEach((intern => {
        fs.appendFileSync('index.html', generateIntern(intern));
    }));
};

//append html bottom
const bottomHtmlFile = () => {
    fs.appendFileSync('index.html', generateBtm());
};

const generateHTML = () => {
   return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Generator</title>
</head>
<body>
    <div>
            <div class="jumbotron">
                <h1 class="text-center">Team Generator</h1>
        </div>
    </div>`
}    

//add intern card html
const generateIntern = (intern) => {
    return `
    <div class="card">
    <div class="card-header"><p>${intern.name}</p><i class="material-icons">school</i>Intern</div>
    <div class="card-main">
 <div class="main-description">
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>Id: ${intern.id}</p>
                <p>Role: ${intern.role}</p>
                <p>School: ${intern.school}</p>
                </div>
                </div></div>
                </div>`
}

//add engineer card html
const generateEng = (engineer) => {
    return `
            <div class="card">
            <div class="card-header"><p>${engineer.name}</p><i class="material-icons">people</i>Engineer-FTE</div>
            <div class="card-main">
         <div class="main-description">
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Id: ${engineer.id}</p>
                <p>Role: ${engineer.role}</p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
            </div></div>`
}

 //add manager card html
const generateMgr = (manager) => {
    return `<div class="wrapper">
    <div class="card">
    <div class="card-header"><p>${manager.name}</p><i class="material-icons">group</i>Manager-FTE</div>
    <div class="card-main">
 <div class="main-description">
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Id: ${manager.id}</p>
                <p>Role: ${manager.role}</p>
                <p>Office Number: ${manager.officeNumber}</p>
                </div>
                </div></div>`
}

//add bottom of html doc
const generateBtm = () => {
    return `</body>
    </html>`

}
    
