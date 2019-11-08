function sum(arr) {
    var jumlah = 0
    for(var i = 0; i < arr.length; i++){
        jumlah += arr[i]
    } return jumlah
}
var array = [1,2,3,4]
console.log(sum(array)) // 10
console.log(sum([1,2,3,4,5,6])) // 21
