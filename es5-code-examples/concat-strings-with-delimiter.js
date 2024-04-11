function concatenateStrings(strings, delimiter) {
    if (typeof delimiter === 'undefined') {
        delimiter = ', ';
    }

    var result = '';

    for (var i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < strings.length - 1) {
            result += delimiter;
        }
    }

    return result;
}

var words = ['Hello', 'world', 'of', 'JavaScript'];
var sentence = concatenateStrings(words);

console.log(sentence);