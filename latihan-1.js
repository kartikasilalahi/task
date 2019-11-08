// buat function yang menerima satu parameter (number)
// jika kelipata 3 mkaa purwa, jika kelipatan 5 maka dhika, jika kelipatan 3 dan 5 maka purwadhika, selain itu tetap nomor

function hitung(number) {
    var temp = ''
    for(var i = 1; i <= number; i++){
        if ((i % 3) == 0 && (i % 5) == 0) {
            temp += 'purwadhika, '
        } else if ((i % 3) == 0) {
            temp += 'purwa, '
        } else if ((i % 5) == 0) {
            temp += 'dhika, '
        } else {
            temp += i + ', '
        }
    }
    
    return temp
}
console.log(hitung(100))