let a = 5;  // 00000101 in binary
let b = 3;  // 00000011 in binary

// Bitwise AND Assignment
let andValue = a;
andValue &= b; // andValue = andValue & b
document.getElementById('andOperation').textContent = `Bitwise AND Assignment: ${andValue} (binary: ${andValue.toString(2)})`;

// Bitwise OR Assignment
let orValue = a;
orValue |= b; // orValue = orValue | b
document.getElementById('orOperation').textContent = `Bitwise OR Assignment: ${orValue} (binary: ${orValue.toString(2)})`;

// Bitwise XOR Assignment
let xorValue = a;
xorValue ^= b; // xorValue = xorValue ^ b
document.getElementById('xorOperation').textContent = `Bitwise XOR Assignment: ${xorValue} (binary: ${xorValue.toString(2)})`;

// Bitwise Left Shift Assignment
let leftShiftValue = a;
leftShiftValue <<= 1; // leftShiftValue = leftShiftValue << 1
document.getElementById('leftShiftOperation').textContent = `Bitwise Left Shift Assignment: ${leftShiftValue} (binary: ${leftShiftValue.toString(2)})`;

// Bitwise Right Shift Assignment
let rightShiftValue = a;
rightShiftValue >>= 1; // rightShiftValue = rightShiftValue >> 1
document.getElementById('rightShiftOperation').textContent = `Bitwise Right Shift Assignment: ${rightShiftValue} (binary: ${rightShiftValue.toString(2)})`;

// Bitwise Unsigned Right Shift Assignment
let unsignedRightShiftValue = a;
unsignedRightShiftValue >>>= 1; // unsignedRightShiftValue = unsignedRightShiftValue >>> 1
document.getElementById('unsignedRightShiftOperation').textContent = `Bitwise Unsigned Right Shift Assignment: ${unsignedRightShiftValue} (binary: ${unsignedRightShiftValue.toString(2)})`;
