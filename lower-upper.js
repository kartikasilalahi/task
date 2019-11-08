// function huruf(str) {
//     var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//     var output = ''
//     for(var i = 0; i < str.length; i++){
//         for(var j = 0; j < lowercase.length; j++){
//             if (str[i] == lowercase[j]) {
//                 output += uppercase[j]
//             } else if (str[i] == uppercase[j]) {
//                 output += lowercase[j]
//             }
//         }
//     } return output
// }
// console.log(huruf('kartika'))
// console.log(huruf('KARTIKA'))

function huruf(str, a) {
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    var output = ''
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < lowercase.length; j++){
            if ((str[i] == lowercase[j] || str[i] == uppercase[j]) && a == 'lower' ) {
                output += lowercase[j]
            } else if ((str[i] == lowercase[j] || str[i] == uppercase[j]) && a == 'upper' ) {
                output += uppercase[j]
            }
        }
    } return output
}
console.log(huruf('kartika', 'upper'))
console.log(huruf('KARTIKA', 'lower'))
console.log(huruf('KarTikA', 'lower'))
console.log(huruf('KarTikA', 'upper'))























