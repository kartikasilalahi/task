function biner(a) {
    var x = ''
    while(a>0){
        x += a%2
        a=Math.floor(a/2)
    }
    var result =''
    for(var i = x.length-1; i>=0; i--){
        result += x[i]
    }
    return result
}
console.log(biner(500)) // 11110100
console.log(biner(8)) // 1000
console.log(biner(23)) // 10111
console.log(biner(50)) // 110010
console.log(biner(105)) // 1101001
console.log(biner(33333)) // 1000001000110101

