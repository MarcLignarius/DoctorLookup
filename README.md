# Doctor Lookup

#### _Node.js, 06.07.2019_

#### By _Marc Davies_

## Description

* _This program takes two inputs allowing users to search by either doctor name, or health symptom._
* _This program then makes a call to the BetterDoctor API and returns a list of doctors matching those search terms._
* _See specs below for more detail._

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| If user does not enter a name or a symptom, program displays "Please enter a doctor name or health symptom/doctor specialty." | Enter a doctor name: "", Enter your symptom or doctor specialty: "", click submit | "Please enter a doctor name or health symptom/doctor specialty." |
| If API call returns no results, program displays "Your search did not return any results. Please try another search."  | Enter a doctor name: "Barozzini", Enter your symptom or doctor specialty: "detist", click submit | "Your search did not return any results. Please try another search." |
| If user does not enter a doctor name but enters "dentist" in the symptom/specialty field, the programs returns a list of dentists. | Enter a doctor name: "", Enter your symptom or doctor specialty: "dentist", click submit | ![ss1](https://i.imgur.com/rjuEQNa.png) |
| If user does not enter a symptom/specialty but enters "Smith" in the doctor name field, the programs returns a list of doctors named Smith. | Enter a doctor name: "Smith", Enter your symptom or doctor specialty: "", click submit | ![ss2](https://i.imgur.com/sUAi5Qj.png) |
| If user enters "Barozzini" in the doctor name field and "dentist" in the symptom/specialty field, the programs returns that specific doctor's information. | Enter a doctor name: "Barozzini", Enter your symptom or doctor specialty: "dentist", click submit | ![ss3](https://i.imgur.com/vonCfKB.png) |

## Installation and Setup

_Cloning and installing the application_

* If you don't have it installed, download and install Node.js 12.3.1
* `$ git clone https://github.com/MarcLignarius/DoctorLookup.git` This will clone the repository to your local machine.
* `$ npm install` This will allow you to have access to the CLI (command line interface) for webpack.
* `$ npm run build`
This will automatically build the bundle once. The entry file is `./src/script/index.js`, with production ready code (minified).
* `$ npm run start`
This will watch the file changes in `./src` and automatically build the bundle with dev build (not minified). This is a continuous monitoring which can be stopped with the key combination `Ctrl + C` within the terminal.

_Creating and Storing Your API key_

* Go to https://developer.betterdoctor.com/ and create an account, or sign in.
* After completing the signup/login process, you should be presented with an API key. Copy this key for use in the application.
* `$ touch .env` in the top level directory to create a .env file.
* `$ atom .env` and add "exports.apiKey = xxx" where xxx is the API key you obtained from the BetterDoctor site.
* (Optional) Add the .env file to the .gitignore file

## Known Bugs
There are no known bugs as of last update.

## Support and contact details
_Please contact me at marcdaviesriot@gmail.com if you run into any issues or have questions, ideas or feedback._

## Technologies Used
This application was built in Atom using JavaScript, Node.js 12.3.1, an API call, jQuery 3.4.1, Bootstrap v4.3.1 and a custom css file. For unit testing, Jasmine framework and Karma task runner are both used.

### License

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Marc Davies_**
