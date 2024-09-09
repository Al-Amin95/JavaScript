console.log("\n\n");

// let first-name = 'John'; // 1. Hyphens are not allowed in identifiers: SyntaxError: Unexpected token '-'

let first_name = 'Tahsin',last_name = 'Ahmed'; // 2. Underscore
console.log(`Underscore: ${first_name}, ${last_name}`);

let FirstName = 'John',LastName = 'Doe'; // 3. Upper Camel Case (Pascal Case)
console.log(`Upper Camel Case: ${FirstName}, ${LastName}`);

let firstName = 'John',lastName = 'Doe', masterCard = '1234-5678-9876-5432', interCity = 'Bus'; 
// 4. Lower Camel Case (ALWAYS use it)
console.log(`Lower Camel Case: ${firstName}, ${lastName}, ${masterCard}, ${interCity}`);

let caseSensitive = 'This is case-sensitive',CaseSensitive = 'This is also valid but different'; // 5. Case Sensitivity
console.log(`Case Sensitivity: ${caseSensitive}, ${CaseSensitive}`);

// 6. Cannot Start with a Digit:  let 1stVariable = 'Invalid'; // SyntaxError: Invalid or unexpected token
let first2ndVariable = 'Valid';
console.log(`Cannot Start with a Digit: ${first2ndVariable}`);

// 7. Keywords: let var = 'Invalid'; // SyntaxError: Unexpected token 'var'
let validVar = 'This is valid';
console.log(`Keywords: ${validVar}`);
