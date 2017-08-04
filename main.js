(function () {
  "use strict";
  var symbols, inputElement, outputElement;

  function translate(input) {
    var i, length, output, key;
    input = input.toLowerCase();
    output = "";
    length = input.length;
    for (i = 0; i < length; i += 1) {
      key = input.charAt(i);
      if (i > 0) {
        output += " ";
      }
      if (symbols.hasOwnProperty(key)) {
        output += symbols[key];
      } else {
        output += key;
      }
    }
    return output;
  }

  function changeListener(event) {
    outputElement.innerHTML = translate(event.target.value);
  }

  function init() {
    symbols = {
      'a': 'Alfa',
      'b': 'Bravo',
      'c': 'Charlie',
      'd': 'Delta',
      'e': 'Echo',
      'f': 'Foxtrot',
      'g': 'Golf',
      'h': 'Hotel',
      'i': 'India',
      'j': 'Juliett',
      'k': 'Kilo',
      'l': 'Lima',
      'm': 'Mike',
      'n': 'November',
      'o': 'Oscar',
      'p': 'Papa',
      'q': 'Quebec',
      'r': 'Romeo',
      's': 'Sierra',
      't': 'Tango',
      'u': 'Uniform',
      'v': 'Victor',
      'w': 'Whiskey',
      'x': 'X-ray',
      'y': 'Yankee',
      'z': 'Zulu',
      '0': 'Zero',
      '1': 'One',
      '2': 'Two',
      '3': 'Three',
      '4': 'Four',
      '5': 'Five',
      '6': 'Six',
      '7': 'Seven',
      '8': 'Eight',
      '9': 'Nine',
      ' ': 'Space',
      '.': 'Dot',
      ',': 'Comma',
      ';': 'Semicolon',
      ':': 'Colon',
      '?': 'Question-Mark',
      '!': 'Exclamation-Mark',
      '@': 'At-Sign',
      '&': 'Ampersand',
      '"': 'Double-Quotation-Mark',
      '': 'Apostrophe',
      '-': 'Dash',
      '/': 'Forward-Slash',
      '\\': 'Backslash',
      '(': 'Left-Parenthesis',
      ')': 'Right-Parenthesis',
      '[': 'Left-Square-Bracket',
      ']': 'Right-Square-Bracket',
      '{': 'Left-Curly-Bracket',
      '}': 'Right-Curly-Bracket',
      '<': 'Left-Angle-Bracket',
      '>': 'Right-Angle-Bracket',
      '|': 'Pipe',
      '°': 'Degree-Symbol',
      '*': 'Asterisk',
      '+': 'Plus-Sign',
      '=': 'Equal-Sign',
      '#': 'Number-Sign',
      '§': 'Section-Sign',
      '$': 'Dollar-Sign',
      '€': 'Euro-Sign',
      '~': 'Tilde',
      '_': 'Underscore',
      '%': 'Percent-Sign',
      '^': 'Caret'
    };
    inputElement = document.getElementById("inputElement");
    outputElement = document.getElementById("outputElement");

    inputElement.addEventListener("input", changeListener);
  }

  init();
}());
