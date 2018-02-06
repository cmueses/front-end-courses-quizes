/* 
Write an anonymous function expression that stores 
a function in a variable called "laugh" and outputs the number 
of "ha"s that you pass in as an argument.
*/
var laugh = function(num){
    var result = "";
    for(var x = 1; x <= num; x++){
        if(x === num){
            result += "ha" + "!";
        } else {
            result += "ha";
        }
    }return result;
}

console.log(laugh(3));
