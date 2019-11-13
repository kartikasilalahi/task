const Next=(str, num)=>{
    var alp='abcdefghijklmnopqrstuvwxyz'.split('')
    var indeks= []
    for(var i = 0; i < str.length; i++){
        if ( alp.indexOf(str[i]) < 25) {
            indeks.push((alp.indexOf(str[i]))+(num))
        } else {
            indeks.push(25-(alp.indexOf(str[i]))+(num-1))
        }
    }
    // console.log(indeks)
    var result = ''
    for(var i = 0; i < indeks.length; i++){
        if (indeks[i]>25) {
            indeks[i]=indeks[i]-26
        }
        result += alp[indeks[i]]
    }
    return result
}
console.log(Next('zz', 1)) // aa
console.log(Next('bda', 2)) // dfc
console.log(Next('cwf', 3)) // fzi
console.log(Next('cwf', 4)) // gaj
console.log(Next('zzz', 5)) // eee







