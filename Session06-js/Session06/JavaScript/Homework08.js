let radius = Number(prompt("Nhập bán kính hình tròn"));
let pi = Math.PI;
let perimeter = 2 * pi * radius;
let diameter = radius * 2;
let acreage = (pi * Math.pow(diameter, 2)) / 4;

console.log("Chu vi hình tròn là: ", perimeter);
console.log("Diện tích hình tròn là: ", acreage);
