module.exports = function reverse (n) {
    let  b = String(n).split("");
    let otv = '';
    for (let i =0;i<b.length;i++){
    if (typeof +b[i] == "number") otv = otv + b[i];

}

    otv = otv.split('').reverse().join('');
    return parseInt(otv, 10) 
}
