var daftar='0123456789abcdef'.split('')
// function heksadesimal(a) {
//     // console.log(daftar)
//     var result=''
//     while(a>0){
//         result += daftar[(a%16)]
//         a=Math.floor(a/16)
//     }
    
//     // console.log('ini result',result)
//     hasil=''
//     for(var i = result.length-1;i>=0;i--){
//         hasil+=result[i]
//     }
//     return hasil
// }

// CARA II
function heksadesimal(a) {
    var x = []
    for(var i = a; i >0; i =Math.floor(i/16)){
        var sisa = daftar[i%16]
        x.push(sisa)
    }
    return x.reverse().join('')
}

console.log(heksadesimal(15)) // f
console.log(heksadesimal(100)) // 64
console.log(heksadesimal(42)) // 2a
console.log(heksadesimal(7678)) // 1dfe
console.log(heksadesimal(6666666)) // 65b9aa

