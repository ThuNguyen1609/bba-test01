I. Array
1. Định nghĩa
Array (Mảng) là kiểu dữ liệu dùng để lưu trữ một danh sách có thứ tự các giá trị.

Quy tắc nhớ: Array giống một danh sách đánh số — mỗi phần tử có vị trí (index) bắt đầu từ 0.

2. Khai báo / Truy xuất / Gán lại / Thêm / Sửa / Xoá


// Khai báo Array Literal
let subjects = ["Toán", "Lý", "Hoá", "Văn", "Anh"];
let name = []; // mảng rỗng

// Khai báo dùng new Array (ít dùng)
let grade = new Array(6, 7, 8, 9);

//Gán lại giá trị cho từng index
subjects[0] = "Math";

//Thêm phần từ vào cuối
subjects.push("History");

//Xoá phần từ ở cuối -> Phải khai báo 1 biến để gán môn bị xoá
let monBiXoaCuoi = subjects.pop();
console.log(subjects);

//Thêm phần từ vào đầu
subjects.unshift("Culture");

//Xoá phần tử ở đầu
let monBiXoaDau = subjects.shift();
console.log(subjects);

//Lấy giá trị của array
console.log(subjects[0]); // index bắt đầu từ 0 -> phần từ thứ 1 thì index = 0
console.log(subjects[subjects.length-1]); //index bắt đầu từ 0 -> phần từ thứ cuối cùng thì index = length-1
console.log(subjects.length);

// Dùng for
let diemSo1 = [8, 6, 9, 7, 10];
for (let i = 0; i < diemSo1.length; i++) {
    console.log(`Học sinh ${i + 1}: điểm ${diemSo1[i]}`);
}

// Dùng for of 
let diemSo2 = [8, 6, 9, 7, 10];
for (let diem of diemSo2) {
    console.log(diem);
}

// Dùng for each
let diemSo3 = [8, 6, 9, 7, 10];
diemSo3.forEach(function (diem, viTri) {
    console.log(viTri + ":" + diem);
})

II. Object
1. Định nghĩa
Object (Đối tượng) là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp key – value (khoá – giá trị).

Quy tắc nhớ: Object giống như một hồ sơ (record) — mỗi mục trong hồ sơ có tên (key) và nội dung (value).

2. Khai báo / Truy xuất / Gán lại / Thêm / Sửa / Xoá / Object lồng nhau


/*
1. Khai báo cach 1: literal + lấy giá trị = dấu chấm
    Khai báo bằng cặp key-value, key có giá trị đặc biệt hoặc dấu cách thì phải dùng cặp nháy để khai báo
*/
let student1 = {
    name: "Thu",
    age: 18,
    score: 10
};
console.log(student1);
console.log(`Result: ${student1.name}-${student1.age}-${student1.score}`);
console.log(student1.name);
console.log(student1.age);
console.log(student1.score);

/*
2. Khai bao cach 2 + Lấy giá trị bằng dấu [] (bracket notation)
    new Object() -- chu O phải viet hoa nhe
    Lay gia tri object = dau [], trong ngoac vuong phải có dấu "" 
*/
let student2 = new Object();
student2.name = "Linh";
student2.age = 18;
student2.score = 9;

console.log(student2);
console.log(`Result: ${student2.name}-${student2.age}-${student2.score}`);
console.log(student2["name"]);
console.log(student2["age"]);
console.log(student2["score"]);

/*
3. Sửa/thêm giá trị Object
    - Gán vào key đã tồn tại = update
    - Gán vào key chưa tồn tại = add new
*/
let student3 = {
    name: "Hiền",
    age: 15,
    score: 10
};
student3.age = 20;
student3.email = "hien@gmail.com";
console.log(student3);

// 4. Thêm/Sửa/Xoá thuộc tính
let student4 = {
    name: "Zin",
};
student4.age = 2; //thêm = dot
student4["score"] = 10; // thêm = bracket notation
student4.name = "Đăng Khôi"; //update
delete student4.score;
console.log(student4);

//5. Object lồng nhau
let student5 = {
    name: "Thu",
    age: 30,
    address: {
        province: "Thái Bình",
        district: "Kiến Xương",
        village: "Vũ Hoà"
    }
}
console.log(student5.address.province);
console.log(student5["address"]["district"]);
console.log(student5["address"]["village"]);
console.log(`Information: ${student5.name} - ${student5.age} - ${student5.address.village} - ${student5["address"]["district"]} - ${student5["address"]["province"]}`);

III. Function
1. Định nghĩa
Function (Hàm) là một khối lệnh được đặt tên, có thể gọi lại nhiều lần mà không cần viết lại code.

Quy tắc nhớ: Function giống như một công thức nấu ăn — viết công thức 1 lần, nấu bao nhiêu lần cũng được.

2. Cách khai báo / Gọi
JavaScript


/*
Khai báo literal, backtick
Convention giống tên biến, ví dụ: tinhTong, đặt tên bắt đầu bằng động từ
Khai báo function xong cần gọi thì hàm mới chạy
*/
function trangTri(baiTap) {
    console.log(`Bắt đầu làm bài tập số ${baiTap}`);
}
trangTri(1);
console.log("Code của bài tập 1");

// function 1 biến
function chao1(ten) {
    console.log("Tôi là " + ten);
}
chao1("Thu");

// function 2 biến
function chao2(ten, tuoi) {
    console.log("Tôi là " + ten + ", " + tuoi + " tuổi");
}
chao2("Thu", 30);

//function có giá trị trả về return (khai báo xong return)
function tinhDienTich(d, r) {
    const S = d * r;
    return S
}

// function có giá trị trả về return (return luôn)
function tinhChuVi(d, r) {
    return C = (d * r) / 2;
}

// gọi lại giá trị trả về ở 1 hàm khác
function tinhSCHCN(d, r) {
    const S = tinhDienTich(d, r);
    const C = tinhChuVi(d, r);

    console.log(`HCN (${d},${r}): S=${S}, C=${C}`);
}
tinhSCHCN(5, 10);

//break: thoát khỏi vòng lặp luôn
const arr = [50, 12, 5, 14, 54, 78];
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === 5) {
        break; // tìm thấy item có giá trị = 5 thì dừng và thoát hẳn khỏi vòng lặp luôn
    }
    console.log(item);
}
console.log("End");

//continue: 
const arr1 = [100, 29, 5, 255, 234];
for (let i = 0; i < arr1.length; i++) {
    const item = arr[i];
    if (item === 5) {
        continue; // bỏ qua index đó và tiếp tục các vòng lặp ở các index tiếp theo
    }
    console.log(item);
}
console.log("End");