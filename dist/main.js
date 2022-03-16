/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Modules/Meal-Menu.js":
/*!******************************!*\
  !*** ./Modules/Meal-Menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interactions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactions.js */ \"./Modules/interactions.js\");\n/* harmony import */ var _comments_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-api.js */ \"./Modules/comments-api.js\");\n\n\n\n// Popup window //\nconst popup = async () => {\n  const header = document.querySelector('header');\n  const main = document.querySelector('main');\n  const footer = document.querySelector('footer');\n  const btn = document.getElementsByClassName('comments');\n  const modal = document.querySelector('#modal');\n\n  const popupModalDataSet = async (id) => {\n    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;\n    const meals = await fetch(mealapiurl)\n      .then((res) => res.json())\n      .then((data) => data.meals);\n    meals.forEach((element) => {\n      if (element.idMeal === id) {\n        modal.innerHTML = `\n        <div class=\"modal\">\n        <div class=\"meal-header justify-end d-flex\">\n            <button class=\"close\"><i class=\"fas fa-times\"></i></button>\n        </div>\n        <div class=\"modal-header-img d-flex \">\n            <img class=\"modal-img\" src=\"${element.strMealThumb}\" alt=\"${element.strMeal}\">\n            <h2 class=\"titme\">${element.strMeal}</h2>\n        </div>\n        <div class=\"modal-description d-flex \">\n        <div class = \"left\">\n        <p> <span class=\"description-header\">Category:</span> ${element.strCategory} <p>\n        <p> <span class=\"description-header\">Ingredients:</span>\n        <ul id = \"ingredientsUl\">\n        </ul>\n        </span><p>\n        </div>\n        <div class = \"right\">\n        <p> <span class=\"description-header\">Country:</span> ${element.strArea} <p>\n        <p> <span class=\"description-header\">Instructions:</span> <p> <span class = \"recipe-instrruction\"> ${element.strInstructions}  > read more </button> </span>\n        </div>\n    </div>\n    <div class=\"comments-container\">\n    <div class=\"all-comments text-center\">\n        <h3>Comments <span id= \"comments-count\">0</span></h3>\n        <ul id=\"comments-ul\" class = \"d-flex justify-center flex-col\">\n\n        </ul>\n    </div>\n    <div class = \"text-center\">\n      <h3> Add a comment </h3> \n    </div>\n    \n    <div class=\"add-comments text-center d-flex justify-center\">\n      <form action=\"POST\">\n          <input name= \"name\" type=\"text\" id=\"input-name\" placeholder=\"Your name\" required>\n          <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\" required></textarea>\n          <span id = \"alert\" class=\"text-start\"> </span>\n          <button id=\"submit-comment\" class=\"submit-comment\" data=\"${element.idMeal}\"> Submit</button>\n          \n      </form>\n    </div>\n    </div>\n      `;\n\n        const ingredientsUl = document.querySelector('#ingredientsUl');\n        const ingredients = () => {\n          const entries = Object.entries(element);\n          const ingredientsArray = entries\n            .filter(([key, value]) => key.startsWith('strIngredient') && value && value.trim())\n          /* eslint-disable-next-line */\n              .map(([key, value]) => value);\r\n          const measuresArray = entries\n            .filter(([key, value]) => key.startsWith('strMeasure') && value && value.trim())\n          /* eslint-disable-next-line */\n              .map(([key, value]) => value);\r\n          for (let i = 1; i < ingredientsArray.length; i += 1) {\n            ingredientsUl.innerHTML += `<li> ${ingredientsArray[i]} - ${measuresArray[i]} </li> `;\n          }\n        };\n        ingredients();\n        const exit = document.querySelector('.fa-times');\n        exit.addEventListener('click', () => {\n          header.classList.remove('hidden');\n          main.classList.remove('hidden');\n          footer.classList.remove('hidden');\n          modal.classList.add('hidden');\n        });\n      }\n      (0,_comments_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n  };\n\n  for (let i = 0; i < btn.length; i += 1) {\n    btn[i].addEventListener('click', () => {\n      window.scrollTo(0, 0);\n      const id = btn[i].getAttribute('data');\n      popupModalDataSet(id);\n      header.classList.add('hidden');\n      main.classList.add('hidden');\n      footer.classList.add('hidden');\n      modal.classList.remove('hidden');\n    });\n  }\n};\n\n// Print meals\nconst getmeals = async () => {\n  const meallist = document.querySelector('.meal-list');\n  const getCategoryUrl = async (category) => {\n    meallist.innerHTML = '';\n    const printMeals = (meals) => {\n      meals.forEach((element) => {\n        const newmeal = document.createElement('li');\n        newmeal.innerHTML = ` \n\n        <div class=\"meal\">\n        <div class=\"meal-header\">\n          <img src=\"${element.strMealThumb}\" loading=\"lazy\" width=\"500\" height=\"280\" alt=\"${element.strMeal}\">\n        </div>\n        <div class=\"meal-body d-flex justify-between\">\n          <h4>${element.strMeal}</h4>\n          <button class=\"fav-btn\" ><i class=\"fas fa-heart\" data=\"${element.idMeal}\"></i></button>\n        </div>\n        <div>\n          <div class = \"likes\"><span class= \"likes-qty\" data=\"${element.idMeal}\">0</span> likes </div>\n          <button class= \"comments\" data=\"${element.idMeal}\">Comments</button>\n        </div>\n      </div>`;\n\n        meallist.appendChild(newmeal);\n      });\n    };\n\n    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`;\n    const meals = await fetch(mealapiurl)\n      .then((res) => res.json())\n      .then((data) => data.meals);\n    printMeals(meals);\n    popup();\n  };\n\n  const foodCount = document.getElementsByClassName('foodCount');\n\n  const printCount = async (category) => {\n    const mealapiurl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`;\n    const meals = await fetch(mealapiurl)\n      .then((res) => res.json())\n      .then((data) => data.meals);\n\n    for (let i = 0; i < foodCount.length; i += 1) {\n      foodCount[i].innerHTML = '';\n      if (foodCount[i].classList.contains(category)) {\n        foodCount[i].innerHTML = `(${meals.length})`;\n      }\n    }\n  };\n\n  const links = document.querySelectorAll('nav li');\n  const resetLinks = () => {\n    for (let i = 0; i < links.length; i += 1) {\n      links[i].classList.remove('active');\n    }\n  };\n\n  for (let i = 0; i < links.length; i += 1) {\n    links[i].addEventListener('click', () => {\n      const category = links[i].textContent.toLowerCase();\n      getCategoryUrl(category);\n      printCount(category);\n      resetLinks();\n      setTimeout(() => (0,_interactions_js__WEBPACK_IMPORTED_MODULE_0__.like)(), 2000);\n      (0,_interactions_js__WEBPACK_IMPORTED_MODULE_0__.Displaylikes)();\n      links[i].classList.add('active');\n    });\n  }\n  getCategoryUrl('french');\n  printCount('french');\n};\n\n(0,_interactions_js__WEBPACK_IMPORTED_MODULE_0__.Displaylikes)();\ngetmeals();\n\n\n//# sourceURL=webpack://mealapp/./Modules/Meal-Menu.js?");

/***/ }),

/***/ "./Modules/comments-api.js":
/*!*********************************!*\
  !*** ./Modules/comments-api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Get comments from API\nconst getComments = async () => {\n  const submitBtn = document.getElementById('submit-comment');\n  const ul = document.getElementById('comments-ul');\n  const id = submitBtn.getAttribute('data');\n  const commentsCount = document.getElementById('comments-count');\n\n  const get = () => fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3ZrrNIt8NnVNPbr64tsy/comments?item_id=${id}`)\n    .then((res) => res.json());\n\n  const mealComments = await get();\n\n  commentsCount.innerHTML = `${mealComments.length > 0 ? `${mealComments.length}` : '0'}`;\n\n  ul.innerHTML = '';\n  if (mealComments.length > 0) {\n    mealComments.forEach((elem) => {\n      const liComments = document.createElement('li');\n      liComments.innerHTML = `\n        <p><span class=\"bold\">${elem.creation_date} ${elem.username}</span>: ${elem.comment}</p>\n        `;\n      ul.appendChild(liComments);\n    });\n  }\n};\n\n// Post comments from API\nconst postComment = () => {\n  const userNameInput = document.getElementById('input-name');\n  const alert = document.getElementById('alert');\n  const userComment = document.getElementById('comment');\n  const submitBtn = document.getElementById('submit-comment');\n\n  const post = (id, name, comment) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3ZrrNIt8NnVNPbr64tsy/comments',\n    {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify(\n        {\n          item_id: id,\n          username: name,\n          comment,\n        },\n      ),\n    })\n    .then((res) => res.text());\n\n  getComments();\n  submitBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n\n    const id = submitBtn.getAttribute('data');\n    const name = userNameInput.value;\n    const comment = userComment.value;\n    alert.innerHTML = '';\n    if (name !== '' && comment !== '') {\n      userNameInput.value = '';\n      userComment.value = '';\n      await post(id, name, comment)\n        .then(() => getComments());\n    } else alert.innerHTML = 'Please insert your name and comment';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n//# sourceURL=webpack://mealapp/./Modules/comments-api.js?");

/***/ }),

/***/ "./Modules/interactions.js":
/*!*********************************!*\
  !*** ./Modules/interactions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Displaylikes\": () => (/* binding */ Displaylikes),\n/* harmony export */   \"like\": () => (/* binding */ like)\n/* harmony export */ });\nconst Displaylikes = async () => {\n  const likeditems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3ZrrNIt8NnVNPbr64tsy/likes')\n    .then((response) => response.json())\n    .then((data) => data);\n\n  const likesnumber = document.getElementsByClassName('likes-qty');\n  const likebtnsarray = Array.from(likesnumber);\n\n  likebtnsarray.forEach((element) => {\n    const likeId = element.getAttribute('data');\n    const currentSpan = element;\n    likeditems.forEach((e) => {\n      if (likeId === e.item_id) {\n        currentSpan.innerHTML = e.likes;\n      }\n    });\n  });\n};\n\nconst likeapi = async (itemid) => {\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3ZrrNIt8NnVNPbr64tsy/likes/', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: itemid,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  })\n    .then(() => {\n      Displaylikes();\n    });\n};\n\nconst like = () => {\n  const likebtns = document.getElementsByClassName('fa-heart');\n  const likebtnsarray = Array.from(likebtns);\n  likebtnsarray.forEach((element) => {\n    const likeId = element.getAttribute('data');\n    element.addEventListener('click', () => {\n      element.classList.add('heart-active');\n      likeapi(likeId);\n    });\n  });\n};\n\nsetTimeout(() => like(), 3000);\n\n\n\n//# sourceURL=webpack://mealapp/./Modules/interactions.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../image/HomeChef-Logo.jpg */ \"./image/HomeChef-Logo.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../image/Background.png */ \"./image/Background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  background-color: #f5f5f5;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  padding: 0 2rem;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  max-width: 750px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: start;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 100;\\r\\n  flex-shrink: 0;\\r\\n}\\r\\n\\r\\n.header-top {\\r\\n  color: #fff;\\r\\n  text-transform: uppercase;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  height: 200px;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center;\\r\\n}\\r\\n\\r\\n.header-middle {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.header-middle h1 {\\r\\n  font-weight: 200;\\r\\n  font-family: 'Average', sans-serif;\\r\\n  font-size: 3rem;\\r\\n  letter-spacing: 0.5rem;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  font-size: 20px;\\r\\n  font-weight: bolder;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.header-middle p {\\r\\n  font-size: 3rem;\\r\\n  font-weight: bold;\\r\\n  color: #667eea;\\r\\n  font-family: 'Allison', sans-serif;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nli a {\\r\\n  padding-right: 2rem;\\r\\n  font-weight: 500;\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.pt-2 li a {\\r\\n  font-size: 2.5rem;\\r\\n  padding-right: 2rem;\\r\\n  font-weight: bold;\\r\\n  color: black;\\r\\n  font-family: 'Allison', sans-serif;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.pt-2 li a:hover {\\r\\n  color: #667eea;\\r\\n  transition: all ease 0.3s;\\r\\n}\\r\\n\\r\\n.align-center {\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.justify-center {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.text-center {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.bg-indigo {\\r\\n  background-color: #667eea;\\r\\n}\\r\\n\\r\\n.bg-gray {\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n/* meal-list */\\r\\nimg {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.meal {\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.meal-list {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.meal-list li {\\r\\n  list-style: none;\\r\\n  width: 30%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  text-align: end;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  padding: 0.7rem;\\r\\n  background-color: #667eea;\\r\\n  color: #fff;\\r\\n  font-size: 1rem;\\r\\n  width: 100%;\\r\\n  cursor: pointer;\\r\\n  border: #667eea 2px solid;\\r\\n}\\r\\n\\r\\n.comments:hover {\\r\\n  background-color: #eaeaea;\\r\\n  color: #667eea;\\r\\n  transition: all ease 0.3s;\\r\\n}\\r\\n\\r\\n#modal {\\r\\n  padding: 2rem 0;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  color: #aaa7a7;\\r\\n}\\r\\n\\r\\n.fa-heart.active {\\r\\n  color: rgb(128, 0, 0);\\r\\n}\\r\\n\\r\\ni {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.justify-end {\\r\\n  justify-content: end;\\r\\n}\\r\\n\\r\\n/* modal */\\r\\n.modal {\\r\\n  width: 85vw;\\r\\n  min-height: 100vh;\\r\\n  border: #6d8347 2px solid;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.modal h2 {\\r\\n  font-size: 2.5rem;\\r\\n  margin: 0.5rem;\\r\\n}\\r\\n\\r\\n.modal-header-img {\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.modal-header-img img {\\r\\n  width: 500px;\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\n.recipe-instrruction {\\r\\n  word-break: break-word;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n  display: -webkit-box;\\r\\n  -webkit-line-clamp: 20;\\r\\n  -webkit-box-orient: vertical;\\r\\n}\\r\\n\\r\\n.description-header {\\r\\n  font-weight: bolder;\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.submit-comment {\\r\\n  border: 1px solid #6d8347;\\r\\n  background-color: #6d8347;\\r\\n  color: #fff;\\r\\n  padding: 0.5rem 2rem;\\r\\n}\\r\\n\\r\\n.submit-comment,\\r\\n#input-name,\\r\\n#comment {\\r\\n  border: 1px solid #6d8347;\\r\\n  padding: 0.7rem 1rem;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\ninput:focus,\\r\\ntextarea:focus {\\r\\n  outline: none !important;\\r\\n  box-shadow: 0 0 10px #6d8347;\\r\\n}\\r\\n\\r\\n#comments-ul {\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#comments-ul li {\\r\\n  width: 40%;\\r\\n  text-align: start;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#comments-ul li p {\\r\\n  margin: 0.2rem;\\r\\n}\\r\\n\\r\\n#alert {\\r\\n  text-align: start;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.fa-heart:active {\\r\\n  transform: translateY(4px);\\r\\n  transition: all ease 0.3s;\\r\\n}\\r\\n\\r\\n.fav-btn {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  font-size: 1.2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.left,\\r\\n.right {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  border: none;\\r\\n  font-size: 2rem;\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\n.visible {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n/* about */\\r\\n#about {\\r\\n  background-color: burlywood;\\r\\n  padding: 7rem 2rem;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n#about .container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n#about .about-text {\\r\\n  grid-column: 2 span;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n#about .about-text h2 {\\r\\n  text-align: center;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.about-author h3 {\\r\\n  margin-left: 100px;\\r\\n}\\r\\n\\r\\n#about h3 {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n#about .about-author ul {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n#about .about-author ul .author {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#about .about-author ul img {\\r\\n  width: 100px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.about-techs {\\r\\n  margin-top: -230px;\\r\\n  margin-right: -100px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n#about .about-techs ul {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 0.5rem;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n#about .tech-item {\\r\\n  font-size: 0.85rem;\\r\\n  padding: 0.25rem 0.5rem;\\r\\n  background: #007749;\\r\\n  border-radius: 0.2rem;\\r\\n  color: bisque;\\r\\n}\\r\\n\\r\\nbutton:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  text-align: center;\\r\\n  background-color: #667eea;\\r\\n  flex-shrink: 0;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 680px) {\\r\\n  .meal-list li {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mealapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://mealapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://mealapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mealapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mealapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mealapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mealapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mealapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mealapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mealapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mealapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Modules_Meal_Menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modules/Meal-Menu.js */ \"./Modules/Meal-Menu.js\");\n/* harmony import */ var _Modules_interactions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modules/interactions.js */ \"./Modules/interactions.js\");\n\n\n\n\n//# sourceURL=webpack://mealapp/./src/index.js?");

/***/ }),

/***/ "./image/Background.png":
/*!******************************!*\
  !*** ./image/Background.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./images/Background.png\";\n\n//# sourceURL=webpack://mealapp/./image/Background.png?");

/***/ }),

/***/ "./image/HomeChef-Logo.jpg":
/*!*********************************!*\
  !*** ./image/HomeChef-Logo.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./images/HomeChef-Logo.jpg\";\n\n//# sourceURL=webpack://mealapp/./image/HomeChef-Logo.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;