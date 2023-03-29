// Declared constant variable kelvin, assigned to value
let kelvin = 300;
console.log(`The temperature in kelvin is: ${kelvin}`);

// Declared constant variable celsius, assigned to value
let celsius = kelvin - 273;
console.log(`The temperature in celsius is: ${celsius}`);

// Declared constant variable fahrenheit, assigned to value
let fahrenheit = (kelvin - 273) * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature in fahrenheit is: ${fahrenheit}`);

// Declared constant variable newton, assigned to value
let newtons = ((kelvin - 273) * 33) / 100;
newtons = Math.floor(newtons);
console.log(`The temperature in newtons is: ${newtons}`);



