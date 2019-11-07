// function repeat(arr) {
//     var jumlahSementara = 0;  
//     var result = '';     
//     var banyak = 0; 
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {        
//             if (arr[i] == arr[j]) {
//                 // jumlahSementara += 1
//                 result += arr[i]
//             }            
//         }
//         if (banyak < jumlahSementara) {
//             result = arr[i];
//             banyak = jumlahSementara;
//         }
//         jumlahSementara = 0
//     }
//     return result
// }
// console.log(repeat(['b', 'b', 'c', 'b', 'a'])) // b
// console.log(repeat(['b', 'a', 'c', 'b', 'a'])) // b
// console.log(repeat(['a', 'a', 'a', 'b', 'b', 'b'])) // a


function repeat(arr) {
    var result = '';     
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {        
            if (arr[i] == arr[j]) {
                result += arr[i]
            }            
            return result
        }
    }
}
console.log(repeat(['b', 'b', 'c', 'b', 'a'])) // b
console.log(repeat(['b', 'a', 'c', 'b', 'a'])) // b
console.log(repeat(['a', 'a', 'a', 'b', 'b', 'b'])) // a
console.log(repeat(['a', 'a', 'b', 'b', 'b', 'b'])) // a


