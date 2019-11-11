var myfilter=(arr, x)=>{
    var result = []
    for(var i = 0; i < arr.length; i++){
        if (x(arr[i])) { 
            result.push(arr[i]) 
        }
    }
    return result
}
var arr1 = [0,1,2,3,4]
console.log(myfilter(arr1, (val)=>val>2)) // [ 3, 4 ]
console.log(myfilter(['aku', 'kamu', 'dia', 'kita', 'mereka'], (val)=>val.length>3)) // [ 'kamu', 'kita', 'mereka' ]
