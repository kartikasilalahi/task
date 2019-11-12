const getMiddle=(str)=>{
    var length = str.length
    if (length % 2 == 0) {
        return (str[(length/2)-1] + str[(length/2)])
    } else {
        return str[Math.floor(length/2)]
    }
}
console.log(getMiddle('get')) // e
console.log(getMiddle('gets')) // et
console.log(getMiddle('kartika')) // t
console.log(getMiddle('getmiddlee')) // id
console.log(getMiddle('a'))

