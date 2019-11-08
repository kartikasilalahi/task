function functionAngka(num) {
    var numstring = String(num)
    var pangkat = []
    var output = []
    for(var i = 0; i < numstring.length; i++){
        pangkat.push(numstring.length-1 - i) 
        output.push(numstring[i] * Math.pow(10,pangkat[i]))
    }
    return output.join('+')
}
console.log(functionAngka(1234))
console.log(functionAngka(27531))


// CARA II
console.log('\nCara II')
function perkalianAngka(num) {
    var str = String(num)
    var output = ''
    for(var i = 0; i < str.length; i++){
        output += str[i] * Math.pow(10,str.length-1-i)
        if (i < str.length-1) {
            output += '+'
        }
    }return output

}
console.log(perkalianAngka(1234))
console.log(perkalianAngka(27531))