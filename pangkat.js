function pangkat(num, pangkat){
    var hasil = 1
    for(var i = 0; i < pangkat; i++){
        hasil *= num
    }
    return hasil
}

console.log(pangkat(7,2)) 
console.log(pangkat(2,3)) 
console.log(pangkat(7,0)) 
console.log(pangkat(10,3)) 


// CARA II
// function pangkatkan(num, pangkat) {
//     if (pangkat == 0) {
//         return 1
//     } else {
//         var output = num
//         for(var i = 0; i < pangkat-1; i++){
//             output *= num
//         }
//         return output
//     }
// }
// console.log(pangkatkan(7,2)) 
// console.log(pangkatkan(2,3)) 
// console.log(pangkatkan(7,0))
// console.log(pangkatkan(10,3)) 

