const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "name",
      message: "What is your name?",
      validate: function (input) {
        if (input == "") {
          return "Please enter yoru name.";
        }
        return true;
      },
    },
    {
      name: "location",
      message: "Where are you from?",
      validate: function (input) {
        if (input == "") {
          return "Please enter yoru name.";
        }
        return true;
      },
    },
    {
      name: "linkedin",
      message: "What is your LinkedIn URL?",
      validate: function (input) {
        if (input == "") {
          return "Please enter yoru name.";
        }
        return true;
      },
    },
    {
      name: "github",
      message: "What is your GitHub URL?",
      validate: function (input) {
        if (input == "") {
          return "Please enter yoru name.";
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    const generateHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${answers.name}</h1>
        <p class="lead">I am from ${answers.location}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${answers.github}</li>
          <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;

    fs.writeFile("./index.html", generateHTML, (err) => {
      console.log(err);
    });
  });
