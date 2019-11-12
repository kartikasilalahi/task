const getDomain=(str)=>{
    var str = str.split('.')
    return str[1]
}
console.log(getDomain('https://www.w3schools.com/')) // w3schools
console.log(getDomain('https://open.spotify.com/artist/3SgHzT552wy2W8pNLaLk24')) // spotify
console.log(getDomain('https://developer.mozilla.org/id/docs/Web/JavaScript')) // mozilla
console.log(getDomain('https://developer.mozilla-ku.org/id/docs/Web/JavaScript')) // mozilla-ku





// https?://(www\.)?[A-Za-z0-9]+\.(com|org|edu|gov|us)/?.*
