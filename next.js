const Next=(str)=>{
    var alp='abcdefghijklmnopqrstuvwxyz'.split('')
    var result=''
    for(var i = 0; i < str.length; i++){
        if ( alp.indexOf(str[i]) < 25) {
            result += alp[(alp.indexOf(str[i]))+1]
        } else {
            result += alp[25-(alp.indexOf(str[i]))]
        }
    }
    return result
}
console.log(Next('zz')) // aa
console.log(Next('bda')) // ceb
console.log(Next('cwf')) // dxg




