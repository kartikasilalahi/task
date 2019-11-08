function meanString(str) {
    var sum = 0
    for(var i = 0; i < str.length; i++){
        sum += Number(str[i])
    }
    return sum/str.length
}
console.log(meanString('1234')) // 2.5
console.log(meanString('123456'))   // 3.5