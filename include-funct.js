var kata = 'hello'

const includeFunc = function(a='', b) {
    if (b.length==1) {
        for(var i = 0; i < a.length; i++){
            if (b == a[i]) {
                return true
            }
        }
        return false
    }
    else{
        for(var i = 0; i < a.length; i++){
            if (b==a.substr(i,b.length)) {
                return true
            }
        }
    }
    return false
}
console.log(includeFunc(kata, 'ell'))




// NOTE
var abc = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse()
console.log(abc)
var numbstring = 1234566
numbstring = numbstring.toString().split('')
for(var i = 0; i<numbstring.length; i++){
    numbstring[i] = parseInt(numbstring[i])
}
console.log(numbstring)