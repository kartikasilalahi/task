function formatTanggal(str) {
    var arrbulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']
    var tanggal = str[0]+str[1]
    var tahun = str[4]+str[5]+str[6]+str[7]
    var bulan = (str[2]+str[3])
    var month = ''
    for(var i = 0; i < arrbulan.length; i++){
        if (bulan == (i+1)) {
            month += arrbulan[i]
        }
    }
    return `${tanggal}-${month}-${tahun}`
}
console.log(formatTanggal('22122019')) // 22-Des-2019
console.log(formatTanggal('01012000')) // 01-Jan-2000