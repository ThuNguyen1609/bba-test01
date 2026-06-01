let playerName = "Mario";
let currentLives = 3;

//Cách1: thủ công, khai báo từng hằng
const level1 = 25;
const level2 = 30;
const level3 = 45;

const sum = level1 + level2 + level3;
const average = sum / currentLives;
const div = average % currentLives;

console.log("Cách 1");
console.log(`Tổng coin là: ${sum}`);
console.log(`Trung bình coin là: ${average}`);
console.log(`Số coin dư sau khi chia là ${div}`);
console.log("===========");


//Cách 2: nhét các hằng số vào mảng + dùng for để tính tổng
let arr1 = [25, 30, 45];
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    sum1 = sum1 + arr1[i];
}
const average1 = sum1 / currentLives;
const div1 = average1 % currentLives;

console.log("Cách 2");
console.log(`Tổng coin là: ${sum1}`);
console.log(`Trung bình coin là: ${average1}`);
console.log(`Số coin dư là ${div1}`);
console.log("===========");


//Cách 3: giống cách 2 nhưng nhét hết vào function và gọi lại function đó
let arr2 = [25, 30, 45];
function tinhToanCoin(arr, currentLives) {
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum2 = sum2 + arr[i];
    }
    const average2 = sum2 / currentLives;
    const div2 = average2 % currentLives;

    console.log("Cách 3");
    console.log(`Tổng coin là: ${sum2}`);
    console.log(`Trung bình coin là: ${average}2`);
    console.log(`Số coin dư là ${div2}`);

}
tinhToanCoin(arr2, 3);