// function minmax (arr, a) {
//     var tampung = 0
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr.length; j++){
//             if (arr[i] > arr[j]) {
//                 var tampung = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = tampung
//             }
//         }
//     } 
//     // console.log(arr)
//     if (a=='min') {
//         return arr[arr.length-1]
//     } else {
//         return arr[0]
//     }
// }

// CARA II
const minmax=(angka=[],cond)=>{
    angka.sort((a,b)=> a-b)
    if (cond=='min') {
        return angka[0]
    } else {
        return angka[angka.length-1]
    }
}
console.log(minmax([1,3,8,2,6,20], 'max')) // 20
console.log(minmax([1,3,8,2,6], 'min')) // 1
console.log(minmax([1,3,5,2,4,15], 'max')) // 15