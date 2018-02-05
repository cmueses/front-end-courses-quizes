/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// takes a param to determine the times
function buildTriangle(x) {
    for(var y = 1; y <= x; y++) {
         console.log(makeLine(y));
    }
}

buildTriangle(10);

