// Initial values and their binary representation
let x = 2; // Binary: 00000000000000000000000000000010
let y = 3; // Binary: 00000000000000000000000000000011
let z = 4; // Binary: 00000000000000000000000000000100

x <<= 2; // Left shift by 2:  Binary after shift:  00000000000000000000000000001000 (8 in decimal)
y >>= 2; // Right shift by 2: Binary after shift:  00000000000000000000000000000000 (0 in decimal)
z >>>= 2; // Unsigned right shift by 2: Binary after shift:  00000000000000000000000000000001 (1 in decimal)

document.getElementById("leftShift").innerHTML = "Left Shift: " + x;
console.log("x: ", x);
document.getElementById("rightShift").innerHTML = "Right Shift: " + y;
console.log("y: ", y);
document.getElementById("unsignedRightShift").innerHTML = "Unsigned Right Shift: " + z;
console.log("z: ", z);
