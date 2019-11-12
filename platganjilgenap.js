const ganjilgenap=(plat, tgl)=>{
    var plat=plat.split(' ')
    var noPlat=plat[1]
    if ((noPlat % 2 == 0 && tgl % 2 == 0) || (noPlat%2 !=0 && tgl % 2 != 0)) {
        return 'boleh lewat'
    } else {
        return 'tidak boleh lewat'
    }
}
console.log(ganjilgenap('be 1234', 24)) // boleh lewat
console.log(ganjilgenap('be 1', 24)) // tidak boleh lewat
console.log(ganjilgenap('b 11234567342', 13)) // tidak boleh lewat
console.log(ganjilgenap('be 123411199', 1)) // boleh lewat


