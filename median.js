function cariMedian(arr) {
    var length = arr.length
    if (length % 2 == 0) {
        // indeks ke panjang bagi 2 + indeks ke panjang bagi 2 'dikurang 1'

        return (arr[Math.floor((length/2)-1)] + arr[(length/2)])/2
    } else {
        return arr[Math.floor(length/2)]
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 6, 7, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

