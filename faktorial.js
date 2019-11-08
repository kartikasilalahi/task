// function faktorial(num) {
//     var hasil = 1
//     for(var i = 1; i <= num; i++){
//         hasil *= i
//     }
//     return hasil
// }
// CARA II
function faktorial(num) {
    for(var i = num-1; i > 0; i--){
        num *= i
    }
    return num
}
console.log(faktorial(4))
console.log(faktorial(3))
console.log(faktorial(5))
console.log(faktorial(6))
