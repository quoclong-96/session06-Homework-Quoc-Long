let a = 5;
let b = "5";
console.log(a == b); //Mặc dù b là chuỗi string, a là number nhưng trình duyệt chỉ quan tâm a và b đều có cùng giá trị là 1 nên -> Kêt quả là True -> Kêt quả là True
console.log(a === b); //a và b mặc dù có cùng giá trị nhưng khác kiểu dữ liệu, a là dữ liệu number, ba là kiểu dữ liệu chuỗi -> Kết quả là False
console.log(a != b); //Mặc dù b là chuỗi string, a là number nhưng trình duyệt chỉ quan tâm là a và b đều có cùng giá trị là 1 nên -> Kêt quả là True
console.log(a !== b); //a và b mặc dù có cùng giá trị nhưng khác kiểu dữ liệu, a là dữ liệu number, ba là kiểu dữ liệu chuỗi -> Kết quả là True
