var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


//Goes through the array, calls the evenOdd function and chnages the value
//to "even" or "odd" in the array.
// outer loop applies to outer array
for (var i=0, len=numbers.length; i<len; i++) {
    // inner loop applies to sub-arrays
    for (var j=0, len2=numbers[i].length; j<len2; j++) {
        // accesses each element of each sub-array in turn
        if((numbers[i][j] % 2) === 0){
          numbers[i][j] = "even";
        } else {
          numbers[i][j] = "odd";
        }
        console.log( numbers[i][j] ); 
    }
}