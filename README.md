![](https://img.shields.io/badge/Microverse-blueviolet)

# MealApp
In this project, we built our own web application based on an external API. The web application has 3 user interfaces:

- On homepage interface you can you can like your favorite meals;
- On comments interface you can add comments;

![screenshot](./image/Home-chef.gif)

> This is a team project in the Microverse second Module. The project is a Meal-menu Web application that enables a user to Learn cooking of three different countries .

The goal of the project is to build the application using Vanilla JavaScript and ES6 Modules.   
Click [here](https://abenezer-tilahun.github.io/MealApp/) to get a live preview of the project

## Features implemented so far are:

Responsive HTML page

- Integrated webpack
- Integrated MealDB API
- Integrated Involvement API
- Addition of unit test using Jest.


## Built With

- Lighthouse (An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more).
- Webhint (A customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors).
- Stylelint (A mighty, modern linter that helps you avoid errors and enforce conventions in your styles).
- ESlint (A mighty, modern linter that helps you avoid errors and enforce conventions in JavaScript codes)
- Webpack (Used for bundling JavaScript files for usage in a browser)
- Bootstrap CSS library

### Technologies used

- Github
- GitFlow
- Visual Studio Code
- webpack
- npm
- jest

To get a local copy up and running follow these simple example steps.

### Prerequisites

The basic requirements for building the executable are:

- A working browser application (Google chrome, Mozilla Fire fox, Microsoft edge ...)
- VSCode or any other equivalent code editor
- Node Package Manager (For installing packages like Lighthous, webhint & stylelint used for checking for debugging bad codes before deployment)

#### Cloning the project
```
git clone  https://github.com/Abenezer-Tilahun/MealApp.git<Your-Build-Directory>
```

## Getting packages and debuging with Stylelint
```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
##### For validation detection using Stylelint Run
```
npx stylelint "**/*.{css,scss}"
```
##### from parent source directory

## Getting packages and debuging with ESlint
```
npm install npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
##### For validation detection using Stylelint Run
```
npx eslint .
```
##### from parent source directory

## Getting packages and debuging with Webhint
```
npm init -y
npm install --save-dev hint@6.x
```
##### For validation detection using Webhint Run
```
npx hint .
```

## Unit Testing

You can find each unit test cases in the Test folder located in the parent source directory of the project. you can create your own custom unit test and test it by running

```
npx run test
```
This should run all unit test found in the application.test.js from the Test folder.

 ## 🤝 Contributing

Feel free to check the [issues page](../../issues/).

## Authors

👤 **Author1**

- GitHub: [@githubhandle](https://github.com/Abenezer-Tilahun)
- Twitter: [@twitterhandle](https://twitter.com/AbenezerTilah11)
- LinkedIn: [LinkedIn](linkedin.com/in/abenezer-tilahun-4b4b43137)

👤 **Author2**

- GitHub: [@githubhandle](https://github.com/keza681)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/linda-keza-a10150218/)


## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse
- My coding partners(@keza681 ))

## 📝 License

This project is [MIT](./MIT.md) licensed.