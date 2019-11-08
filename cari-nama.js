var name = ['Kartika', 'nirwana', 'Silalahi', 'purwadhika']
function cari(arr) {
    for(var i = 0; i < name.length; i++){
        if (arr.toLowerCase() == name[i].toLowerCase()) {
            return true
        } 
    } 
    return false
}

// var name = ['Kartika', 'nirwana', 'Silalahi', 'purwadhika']
// function cari(arr) {
//     var nemu = false
//     for(var i = 0; i < name.length; i++){
//         if (name[i].toLowerCase() == arr.toLowerCase()) {
//             nemu = true
//             break
//         } 
//     } 
//     return nemu
// }

console.log(cari('Nirwana'))
console.log(cari('Kartika'))
console.log(cari('LALALA'))
console.log(cari('wkwkwk'))




