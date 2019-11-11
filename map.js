const mymap=(arr,fn)=>{
    var result=[]
    for(var i = 0; i < arr.length; i++){
        result.push(fn(arr[i]))
    }
    return result
}
var arr1 = [1,2,3,4]
console.log(mymap(arr1, (val)=>val*2)) // [ 2, 4, 6, 8 ]
console.log(mymap([1,2,3,4], (val)=>val*8)) // [ 8, 16, 24, 32 ]
