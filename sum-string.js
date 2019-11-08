function sumString(str) {
    var sum = 0
    for(var i = 0; i < str.length; i++){
        sum += parseInt(str[i])
    }
    return sum
}
console.log(sumString('12345'))  // 10
console.log(sumString('123456'))    // 21