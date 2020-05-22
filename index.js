
//Imports
var fs = require("fs");
var inquirer = require('inquirer');

//ReadIn JSON File
fs.readFile("./assets/questions.json", "utf8", function (error, data) {
    if (error) {
        console.log(error)
    } else {
        data = JSON.parse(data);
        inquirer.prompt(
            /* Questions */
            data.questions
        )
        .then(answers => {
            //Generate README
            var content =  `# Title\n${answers.title}  
            \n## Description\n${answers.description}  
            \n## Table of Contents\n${answers.toc}
            \n## Installation\n${answers.installation}
            \n## Usage\n${answers.usage}
            \n## License\n${answers.license}
            \n## Contributing\n${answers.contributing}
            \n## Test\n${answers.test}
            \n## Questions\n${answers.questions}
            `
            //Export
            fs.appendFile("test-readme.md", content, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Finished");
                }
            });
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
    }
});

