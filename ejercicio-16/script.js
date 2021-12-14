/**
 * Let a, b and c be integers, do the following operations:
   a + b - c
   a + a - 3c + 2b
   a2 + b2 - c2
   (a + b)c - 2b(a + c).
 */

var a = 5;
var b = 1;
var c = 2;
var result = a + b - c;
console.log(result);
// a + a - 6 + 2 / 5 + 5 - 6 + 2

result = a + a - 3 * c + 2 * b;
console.log(result);

result = Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2);
console.log(result);

result = (a + b) * c - 2 * 1 * (a + c);
console.log(result);

a = 2;
b = 4;
c = 6;

result = a + b - c;
console.log(result);

result = a + a - 3 * c + 2 * b;
console.log(result);

result = Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2);
console.log(result);

result = (a + b) * c - 2 * 1 * (a + c);
console.log(result);

a = 2;
b = 2 * a;
c = 2 * b;

result = a + b - c;
console.log(result);

result = a + a - 3 * c + 2 * b;
console.log(result);

result = Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2);
console.log(result);

result = (a + b) * c - 2 * 1 * (a + c);
console.log(result);
