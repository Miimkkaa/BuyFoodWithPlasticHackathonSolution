## Receipts Management System
Receipts Management System is a web based solution that we are submitting to the "Climate Hackathon" organized by Microsoft in partnership with Stratiteq Sweden AB. We managed to create a system in which the company can submit a digital receipt, which they are going to write manually on the website, as well as check all receipts, that has been submitted already. We chose to build the system with React and Firebase, because that way, the system and code can easily be extended in the future. We have also added a bot from the Power Virtual Agents, that will provide the user with important information and answer different questions.


Right now, the company has the ability to submit and check receipts, but we also have the idea where the company can scan the receipts, and then either use cognitive AI that can read the written by hand receipts, and upload the information digitally, or scan the receipts and then upload them as images in the Firebase Storage. 
The storage is really easy to use, even for people without any technical knowledge – the company goes on the website, presses ‘upload a new receipt’, and upload the receipt, which will be saved in the Firebase storage. Those images will then be presented on the website, with the option to add the date in which they have been uploaded.
No matter which option the company chooses, they will have the ability to submit and retrieve important information, which will make their work a lot easier, by having everything digitally, instead of writing it manually.


## Our Demo
[Receipts Management System](https://firebase.google.com/docs/firestore)

## Inspiration
As a team we were inspired by the idea behind the hackathon - fighting climate change with technologies. By looking through all the organizations that took part of the hakacthon, we decided to tackle the challenge of "Waste". We choose the organization "Buy Food With Plastic" mostly because of their ideals and goals. We were inspired by their message - recycling plastic bottles and providing food for many families in some of the poorest countries in the world.

## Tech/framework used

<b>Built with</b>
- [Cloud Firestore](https://firebase.google.com/docs/firestore)
- [React](https://reactjs.org/docs/getting-started.html)
- [Power Virtal Agents](https://docs.microsoft.com/en-us/power-virtual-agents/)
- [Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/)

## What makes the project stand out?
Our solution stands out for a few reasons. Firstly, people with no technical background can work with the system. This will save a lot of time and resources not only to the people involved with the organization, but to the organization itself. Secondly, we took into consideration that there might be more innovative and complex solutions to this problem. However, for us it is important to provide an easy fix to a complex thing. For that matter, the technologies we decided to proceed with are simple, but efficient and they do not need continues support or extra resources. Last but not least, the idea could be extented a lot by people with little or a lot of experience in the technical field. We wanted to make sure that more people will be able to build on top of this in the future.

## Installation
- git clone https://github.com/Miimkkaa/BuyFoodWithPlasticHackathonSolution.git
- cd BuyFoodWithPlasticHackathonSolution
- npm install
- npm start

#### Note
This project was part of the Microsoft hackathon "Climate hackathon".
