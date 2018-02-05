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

// buildTriangle takes one parameter to define how many iterations
// Then it builds the triangle in a variable of the same name 
//and returns the triangle already built.
function buildTriangle(x) {
    var triangle = "*";
    for(var y = 1; y <= x; y++) {
         triangle += makeLine(y);
    }

    return triangle;
}

console.log(buildTriangle(10));

