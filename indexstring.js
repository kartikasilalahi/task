var number=function(array){
    var result = []
    for(var i = 0; i < array.length; i++){
        tamp = `${i+1}: ${array[i]}`
        result.push(tamp)
    }
    return result
}
console.log(number([])) // []
console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]             