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

/***/ "./src/character-sheet.ts":
/*!********************************!*\
  !*** ./src/character-sheet.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.init = init;\n// Example character sheets\nconst characterSheets = [\n    { name: \"Arden the Brave\", stats: { STR: 15, DEX: 12, HP: 45 }, notes: \"Loyal knight of the realm.\" },\n    { name: \"Lyra the Mystic\", stats: { INT: 18, WIS: 14, MP: 30 }, notes: \"Seeker of forbidden knowledge.\" },\n];\n// Function to display character sheets in the browser\nfunction displayCharacterSheets() {\n    // Create a container for the character sheets\n    const container = document.createElement(\"div\");\n    container.style.position = \"absolute\";\n    container.style.top = \"10px\";\n    container.style.right = \"10px\";\n    container.style.backgroundColor = \"white\";\n    container.style.border = \"1px solid black\";\n    container.style.padding = \"10px\";\n    container.style.maxWidth = \"300px\";\n    container.style.overflowY = \"auto\";\n    // Add each character sheet to the container\n    characterSheets.forEach((sheet) => {\n        const card = document.createElement(\"div\");\n        card.style.marginBottom = \"10px\";\n        card.style.borderBottom = \"1px solid gray\";\n        card.style.paddingBottom = \"10px\";\n        const name = document.createElement(\"h3\");\n        name.textContent = sheet.name;\n        const stats = document.createElement(\"pre\");\n        stats.textContent = JSON.stringify(sheet.stats, null, 2);\n        const notes = document.createElement(\"p\");\n        notes.textContent = sheet.notes;\n        card.appendChild(name);\n        card.appendChild(stats);\n        card.appendChild(notes);\n        container.appendChild(card);\n    });\n    // Add the container to the web page\n    document.body.appendChild(container);\n}\n// Initialize the extension\nfunction init() {\n    displayCharacterSheets();\n}\n\n\n//# sourceURL=webpack://obsheets/./src/character-sheet.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/character-sheet.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;