function heksadesimal(a) {
    var daftar='0123456789abcdef'.split('')
    // console.log(daftar)
    var result=''
    for(var i = 0; i < 10000000000;i++){
        result += daftar[(a%16)]
        a=Math.floor(a/16)
        if (a==0) {
            break
        }
    }
    // console.log('ini result',result)
    hasil=''
    for(var i = result.length-1;i>=0;i--){
        hasil+=result[i]
    }
    return hasil
}
console.log(heksadesimal(15)) // f
console.log(heksadesimal(100)) // 64
console.log(heksadesimal(42)) // 2a
console.log(heksadesimal(7678)) // 1dfe
console.log(heksadesimal(6666666)) // 65b9aa

