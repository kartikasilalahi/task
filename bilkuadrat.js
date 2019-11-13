var bilkuadrat = function(n){
    var num = Math.floor(Math.sqrt(n))
    if (n < 0) {
        return false
    }
    if (n===(num*num)) {
        return true
    } else {
        return false
    }
}

console.log(bilkuadrat( 0)) 
console.log(bilkuadrat( 3))
console.log(bilkuadrat( 4)) 
console.log(bilkuadrat(27)) 
