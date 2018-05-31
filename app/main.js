const greeter = require('./add.js');
// import filecss from './css/file.css'
// console.log(filecss);
const css = require('./css/file.css').toString();
console.log(css);
document.querySelector("#app").appendChild(greeter());