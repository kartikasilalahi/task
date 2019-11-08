// buatlah sebuah function dengan 1 parameter(number)
// tiap hari kelipatan 2 dpt 1, kelipatan 10 dapat 2 permen
function permen(number) {
    var banyakPermen = 0
    for(var i = 1; i <= number; i++){
        if (i % 10 == 0) {
            banyakPermen += 2
        } else if (i % 2 == 0) {
            banyakPermen += 1 // atau banyakPermen -=-1
        }
    }
    return banyakPermen
}
console.log(permen(100));
console.log(permen(10));

