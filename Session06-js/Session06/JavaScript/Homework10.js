let a = 6;
let result = ++a + a + a++ + ++a + a;
//7 + 7 + 7 + 9 + 9
console.log("Giá trị của a là: ", a);
console.log("Giá trị của result là: ", result);

//a++: Nhận giá trị cuối cùng sau khi trả về a copy
// Ví dụ var output = a++;
// Giai đoạn 1: "a copy" = a
// Giai đoạn 2: công thêm 1 vào a, a=a+1
// Giai đoạn 3: trả về "a copy" = a

//++a: Nhận giá trị ngay khi được cộng thêm 1
// Ví dụ: var output = ++a;
// Giai đoạn 1: cộng thêm 1 vào a, a = a+1
// Giai đoạn 2: trả về kết quả cuối cùng cho a sau khi được công 1
