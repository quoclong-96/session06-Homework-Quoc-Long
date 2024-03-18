let width = Number(prompt("Nhập vào chiều rộng của hình chữ nhật"));
let length = Number(prompt("Nhập vào chiều dài của hình chữ nhật"));

//Math.sqrt: căn bậc 2, Math.pow(width,2) -> căn bậc 2 của chiều rộng bình phương
let diameter = Math.sqrt(Math.pow(width, 2) + Math.pow(length, 2));
const pi = Math.PI;
let radius = diameter / 2;
let perimeter = 2 * pi * radius;
let acreage = (pi * Math.pow(diameter, 2)) / 4;
//Results
console.log("Chu vi hình tròn là: ", perimeter);

console.log("Diện tích hình tròn là: ", acreage);
