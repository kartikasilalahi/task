function cariMean(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    var mean = sum/arr.length
    return mean
}
var array = [1,2,3,4]
console.log(cariMean(array))    // 2.5
console.log(cariMean([1,2,3,4,5,6]))    // 3.5