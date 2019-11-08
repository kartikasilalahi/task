function kalku(number,batas) {
    var perkalian = ''
    for(var i = 1; i <= batas; i++){
        perkalian += number + ' x ' + i + ' = ' + (number*i)
        perkalian += '\n'
    }
    return perkalian
}
console.log(kalku(5,20))