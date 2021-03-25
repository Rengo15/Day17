const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirsttwo(list){
    "use strict"
    // Only change code below this line
    let [a,b, ...arr]=list;
    const array2=arr;
    // Only change code above this line
    return array2;
}

console.log(removeFirsttwo(array1));
module.exports = removeFirsttwo;