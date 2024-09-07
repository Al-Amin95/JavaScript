let a = 5;  // (binary 0101)
let b = 3;  // (binary 0011)

let AND = a & b; // AND operation: 5: 0101 & 3: 0011 => 0101 & 0011 = 0001 = 1
let OR = a | b; // OR operation: 5: 0101 | 3: 0011 => 0101 | 0011 = 0111 = 7
let XOR = a ^ b; // XOR operation: 5: 0101 ^ 3: 0011 => 0101 ^ 0011 = 0110 = 6
let NOTa = ~a; // NOT operation on 'a': ~5: 0101 => 1010 = -6 (in two's complement)
let NOTb = ~b; // NOT operation on 'b': ~3: 0011 => 1100 = -4 (in two's complement)

let zeroFillLeftShift = a << 1; // Zero fill left shift: 5: 0101 << 1 => 1010 = 10
let signedRightShift1 = a >> 1; // Signed right shift: 5: 0101 >> 1 => 0010 = 2
let signedRightShift2 = b >> 1;  // Signed right shift (negative shift is not valid, fixed to 1): 3: 0011 >> 1 => 0001 = 1
let zeroFillRightShift = b >>> 1; // Zero fill right shift: 3: 0011 >>> 1 => 0001 = 1

// Print results to the console
console.log("AND: ", AND);
console.log("OR: ", OR);
console.log("XOR: ", XOR);
console.log("NOTa: ", NOTa);
console.log("NOTb: ", NOTb);
console.log("zeroFillLeftShift: ", zeroFillLeftShift);
console.log("signedRightShift1: ", signedRightShift1);
console.log("signedRightShift2: ", signedRightShift2);
console.log("zeroFillRightShift: ", zeroFillRightShift);

// Display results in the HTML document
document.getElementById("AND").innerHTML = "AND: " + AND;
document.getElementById("OR").innerHTML = "OR: " + OR;
document.getElementById("XOR").innerHTML = "XOR: " + XOR;
document.getElementById("NOT_a").innerHTML = "NOTa: " + NOTa;
document.getElementById("NOT_b").innerHTML = "NOTb: " + NOTb;
document.getElementById("zeroFilledLeftShift").innerHTML = "zeroFilledLeftShift: " + zeroFillLeftShift;
document.getElementById("signedRightShift1").innerHTML = "signedRightShift1: " + signedRightShift1;
document.getElementById("signedRightShift2").innerHTML = "signedRightShift2: " + signedRightShift2;
document.getElementById("zeroFilledRightShift").innerHTML = "zeroFilledRightShift: " + zeroFillRightShift;
