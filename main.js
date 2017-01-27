(function () {
  "use strict";
  var words, inputElement, outputElement;

  function translate(input) {
    var i, length, output, key, a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0);
    input = input.toLowerCase();
    output = "";
    length = input.length;
    for (i = 0; i < length; i += 1) {
      key = input.charCodeAt(i) - a;
      if (key >= 0 && key <= 26) {
        if (i > 0) {
          output += " ";
        }
        output += words[key];
      }
    }
    return output;
  }

  function changeListener(event) {
    outputElement.innerHTML = translate(event.target.value);
  }

  function init() {
    words = [ "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu" ];
    inputElement = document.getElementById("inputElement");
    outputElement = document.getElementById("outputElement");

    inputElement.addEventListener("input", changeListener);
  }

  init();
}());
