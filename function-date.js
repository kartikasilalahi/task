var listhari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
var listbulan = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember']

let today = new Date()
// console.log(today)
function mydate() {
    var hari = today.getDay()
    // console.log('ini hari,' + hari)
    var tgl = today.getDate()
    var bln = today.getMonth()
    var tahun = today.getFullYear()
    return listhari[hari] + ', ' + tgl + ' ' + listbulan[bln] + ' ' + tahun
}

console.log(mydate())















// let today = new Date()
// var tglSekarang = today.getDate()
// var miliSecondHariIni = today.getTime();
// var miliSecondPerHari = 1000*60*60*24; 

// function mydate() {
//     var jarakTgl = 0
//     for(var i = tglSekarang; i <= 31; i++){
//         if (tglSekarang > 17) {
//             jarakTgl = tglSekarang - 16
//         } else if (tglSekarang < 17) {
//             jarakTgl = 16-tglSekarang
//         }
//     }
//     // console.log(jarakTgl)
//     var tgl17 = new Date(miliSecondHariIni - (miliSecondPerHari*jarakTgl)); 
//     var day17 = tgl17.getDay()
//     var date17 = tgl17.getDate()
//     var month17 = tgl17.getMonth()
//     var year17 = tgl17.getFullYear()
//     return listhari[day17] + ', ' + date17 + ' ' + listbulan[month17] + ' ' + year17
// }
// console.log(mydate())