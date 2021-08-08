// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const promptUser = [
    { type:'Input' ,
        name:'project',
    message:"What is the title of your project ?",},
{
    type:'input',
    name:'description',
    message:"please Provide a detailed description: ",},
{
    type:'input',
    name:"table of contents",
    message:"Provide the table of contents:" ,},
{
    type:'input',
    name:'installation',
    message:"Provide installation instructions to assit user: ",},
{   type:'input',
    name:"usage",
    message:"Provide the usage information: ",},
    {
        type:'input',
        name:'license',
        message:"what licences are currently being used: ",},
    
{
    type:'input',
    name:'contribution_guidelines',
    message:"Provide the contribution guidelines for the application: ",},
{
    type:'input',
    name:'test',
    message:"Provide the test instructions: ",},
    {
        type:'input',
        name:'Github_username',
        message:"please provide your github username: ",},
        {
            type:'input',
            name:'Email',
            message:"Please provide your email: ",},
            {
                type:'input',
                name:'github_link',
                message:"Please provide your Github profile link: ",}
        ]

// TODO: Create a function to write README file
function WriteReaadmeFile( fileName,data){
fs.writeFile(fileName, data , (err) =>{
    console.log(fileName)
    console.log(data)
    if (err){
      return  console.log(err)
    } else {  console.log("ReadMe file generated !")}
})}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser).then(function(data){
        WriteReaadmeFile("ReadMe.md",generateMarkdown(data))
        console.log(data)
    })
}

// Function call to initialize app
init(); 
