var fruits = ["Banana", "Orange", "Apple", "Mango"];
function myincludes(a, start) {
    for(var i = 0; i < fruits.length; i++){
        if (fruits[i] == a && (start <= i || start == undefined) ) {
            return true
        }
    } return false
}
console.log(myincludes('Banana', 3)) // false
console.log(myincludes('Mango')) // true
console.log(myincludes('Apple')) // true
console.log(myincludes('Apple', 1))