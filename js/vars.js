// canvas
var canvas;
const SCALE = 1.6;
const VARIABLE_SCALING = false;
const WIDTH = 800, HEIGHT = 500;

function limit (value, min, max) { return Math.min(Math.max(value, min), max); }

window.addEventListener("resize", function (ignored) {

  if (VARIABLE_SCALING) { resizeCanvas(Math.floor(limit(window.innerWidth / SCALE, 1000, 1200)), Math.floor(limit(window.innerWidth / SCALE, 580, 610))); }

}, true);

// site
var title = "travelling salesman";
var version = "version 1.1.6";

window.onload = function () { document.title = title; document.getElementById("title").innerHTML = title + "  <span style=\"font-size: 30px;\"> " + version + "<\span>"; }

function createInputAndButton (buttonMessage, createMessage) {

  var input = document.createElement("input");
  input.type = "text";
  input.id = "inputField";
  input.className = "field";

  document.getElementById("main").appendChild(input);

  var button = document.createElement("button");
  button.className = "field_button";
  button.id = "inputButton";
  button.textContent = buttonMessage;

  document.getElementById("main").appendChild(button);

  document.getElementById(button.id).addEventListener("click", function () { inputButtonClicked(); });

  if (createMessage) {

    var message = document.createElement("p");
    message.id = "result";
    message.className = "message";
    message.innerHTML = createMessage;

    document.getElementById("main").appendChild(message);

  }

  return [input, button];

}

function createCornerButton (buttonText) {

  var button = document.createElement("button");
  button.className = "corner_button";
  button.id = "cornerButton";
  button.textContent = buttonText;

  document.getElementById("main").appendChild(button);

  document.getElementById(button.id).addEventListener("click", function () { cornerButtonClicked(); });

  return button;

}

function inputButtonClicked () {

  var input = document.getElementById("inputField").value;
  var message = document.getElementById("result");

  console.log("input button clicked");

  // start here...

}

function cornerButtonClicked () {

  // start here...

  console.log("corner button clicked");

}

// colors
const BACKGROUND_COLOR = getComputedStyle(document.querySelector(":root")).getPropertyValue("--background-color");
const ACCENT_1 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-1");
const ACCENT_2 = getComputedStyle(document.querySelector(":root")).getPropertyValue("--accent-2");

// project
const CITY_COUNT = 7;
const CITY_SIZE = 15;
const OFFSET = WIDTH / 2;

swapify = function (order, x, y) {

  var temp = order[x];
  order[x] = order[y];
  order[y] = temp;

  return order;

}

lexicographicify  = function (order, p5) {

  var temp = [], first, second;

  for (var index = 0; index < order.length; index++) {

    if (order[index] < order[index + 1]) { first = index; }

  }

  if (first === undefined) { return order; }

  for (var index = 0; index < order.length; index++) {

    if (order[first] < order[index]) { second = index; }

  }

  if (second === undefined) { return order; }

  order = swapify(order, first, second);

  p5.arrayCopy(order, first + 1, temp, 0, order.length - first - 1);
  temp = p5.reverse(temp);
  p5.arrayCopy(temp, 0, order, first + 1, temp.length);

  return order;

}

function factorial (n) { if (n == 1) { return(1); } return(n * factorial(n - 1)); }