// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input 10
//let Licenses =  [];
  
/*
let [MIT_License, 
  Apache_License_2,
   GNU_General_Public_License, 
   BSD_License, 
   Creative_Commons_Licenses] = Licenses;
*/

const generateHTML = ({nameFile,
  Title,Licenses,descriptionText,
  installationText,usageText,contributingName,
  testsText,githubUsername,email,nameLicenses})=>

`
# ${Title}

## License
[![Static Badge](https://img.shields.io/badge/License-${nameLicenses}-name?style=flat&logo=%23512BD4&logoColor=%2300bfff&labelColor=%23add8e6&color=%2300bfff)](${Licenses})


# Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Description
${descriptionText}

## Installation
${installationText}

## Usage
${usageText}




## Contributing
* ${contributingName}


## Tests
${testsText}

## Questions
* GitHub-username ${githubUsername}
* Email-address ${email}


`;

/*,, 

*/
inquirer
  .prompt([
    {
      type: 'input',
      name: 'nameFile',
      message: 'Please name your README file?',
    },
    {
      type: 'input',
      name: 'Title',
      message: 'What is the name of your program?',
    },
    {
      type: 'list',
      name: 'Licenses',
      message: 'What license are you choosing?',
      choices: ['https://mit-license.org/','https://www.apache.org/licenses/LICENSE-2.0.txt','https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html', 
'https://creativecommons.org/licenses/by/4.0/legalcode.txt'],
    },
    {
      type: 'input',
      name: 'descriptionText',
      message: 'What is your description for app?',
    },
    {
      type: 'input',
      name: 'installationText',
      message: 'What is the useage for your app?',
    },
    {
      type: 'input',
      name: 'usageText',
      message: 'Contributer name',
    },
    {
      type: 'input',
      name: 'contributingName',
      message: 'What did the contributer do?',
    },
    {
      type: 'input',
      name: 'testsText',
      message: 'Link your website here.',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Github link here.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'license name here.',
    },
  ])
  .then((answers) => {
    
    switch (answers.Licenses) {
      case 'https://mit-license.org/':
        answers.nameLicenses = 'Mit_License';
      break;
      case 'https://www.apache.org/licenses/LICENSE-2.0.txt':
        answers.nameLicenses = 'Apache_License_2.0';
      break;
      case 'https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html':
        answers.nameLicenses = 'GPL_License';
      break;
      case 'https://creativecommons.org/licenses/by/4.0/legalcode.txt':
        answers.nameLicenses = 'Creative_Commons_Licenses';
      break;

    }
   

    const READMEContent = generateHTML(answers); // Call the generateHTML function with answers





    fs.writeFile(`${answers.nameFile}.md`, READMEContent, (err) =>
        err ? console.log(err) : console.log(`${answers.nameFile}.md was created!`)
    );
});