function generateMarkdown(answers) {
  let encodedCharacter = answers.title.replace(" ","\+")
  console.log(encodedCharacter);
  return `
  ![GitHub](https://img.shields.io/github/license/${answers.name}/${encodedCharacter})
  # ${answers.title}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
      ${answers.installation}
  \`\`\`
  
  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  
  To run tests, run the following command.
  
  \`\`\`
      ${answers.test}
  \`\`\`
  
  ## Questions
  If you have any questions feel free to contact me at ${answers.email}.

  ![${answers.name}](${answers.avatar})

`;
}

module.exports = generateMarkdown;

    
    
    
    
    

