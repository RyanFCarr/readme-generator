
//Imports
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const axios = require('axios');
//ReadIn JSON File
fs.readFile("./utils/questions.json", "utf8", function (error, data) {
    if (error) {
        console.log(error)
    }else {
        data = JSON.parse(data);
        inquirer.prompt(
            /* Questions */
            data.questions
        )
        .then(answers => {

            axios(`https://api.github.com/users/${answers.name}`)
            .then((res)=>{
                answers.avatar = res.data.avatar_url
                //Export
                fs.writeFile("generated-readme.md", generateMarkdown(answers), function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Finished");
                    }
                });
            }); 
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                console.log(error)
            }
        });
    }
});

