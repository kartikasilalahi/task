const navigasi=(str)=>{
    var jumlahx=0
    var jumlahy=0
    for(var i = 0; i < str.length; i++){
        if (str[i]=='T') {
            jumlahx++
        } else if (str[i]=='B') {
            jumlahx--
        }else if(str[i]=='U') {
            jumlahy++
        } else if (str[i]=='S') {
            jumlahy--
        }
    }
    if (jumlahx==jumlahy) { return true }
        return false
}
console.log(navigasi("USB"))
