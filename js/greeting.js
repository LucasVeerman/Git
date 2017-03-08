var today = new Date();
var hourToday = today.getHours();
var greeting;

var welcome  = document.querySelector('h1');
welcome.textContent =  "Welkom bij het lesonderdeel Debugger";

if (hourToday > 18) {
    greeting = 'Goedenavond!';
} if (hourToday > 12) {
    greeting = 'Goedemiddag!';
} if (hourToday > 0) {
    greeting = 'Goedemorgen!';
} else {
    greeting = 'Hartelijk welkom!';
}

document.write("<h3 class='text'>" + greeting + ' ' + welcome.textContent + "</h3>");

