# Project Title

#### Epicodus JavaScript exercise, Date

#### By Your Name Here

## Description

Add description here

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Behavior | input | output |

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Specifications

Visitor clicks a button and gets to see a number in return.
Example Input: clicks "roll" button
Example Output: "6" is on screen

Upon clicking "roll" they see 1-6 as the number. This is saved in a temporary score.
Example Input: click "roll" button
Example Output: sees "4"

If they click roll again the new roll is added to the previous roll value.
Example Input: click "roll" - "4", click "roll" - "2"
Example Output: "6"

After clicking roll they now have the choice for a second button that allows them to hold. If clicked the number goes to a permanent score.
Example Input: click "hold"
Example Output: "4"

After clicking hold, the roll number and temporary score slots are reset to 0
Example Input: "roll" = "2", click "roll" = "3", click "hold"
Example Output: "0" at roll / "0" at temporary score

If a 1 is rolled all temporary score is erased.
Example Input: "1"
Example Output: "0"

Above specs are repeated with Player 2
Example Input: Rolls Dice chooses to hold or roll again
Example Output: "3"

If a 1 is rolled the turn moves to the next player.
Example Input: "1"
Example Output: "End of Turn"
-----
First player to 100 point permanent cap is winner
Example Input: Rolls Dice & holds
Example Output: "100pts - You win!"

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Links

* Add links here

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Your Name Here**
