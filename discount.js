const getDiscount=(awal, persen)=>{
    persen=persen/100
    return awal-(awal*persen)
}
console.log(getDiscount(10000, 20))//800