// 3의 배수와 5의 배수의 합을 더해라!
// result = 0
// for (let index = 0; index < 101; index++) {
//     if (index % 3 === 0 || index % 5 === 0) {
//         result += index
//     }
// }   

// console.log(result)


// 10000자리까지 '8'이 들어간 숫자 구하기!
// let text = '';
// let count = 0;

// for (let i = 0; i < 10001; i++) {
//     text += i;
// }
// // console.log(text);
// for (let i = 0; i < text.length; i++) {
//     if (text[i] == '8'){
//         count += 1;
//     }
// }

// console.log(count);

// 최솟갑, 최댓갑 구하기

// let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88]
// let temp = sample[0]

// for (let i = 0; i > sample.length; i++) {
//     if (temp < sample[i]) {
//         temp = sample[i]
//     }
// }

// for (let i = 0; i > sample.length; i++) {
//     if (temp > sample[i]) {
//         temp = sample[i]
//     }
// }


// 2개씩 출력
// let text = 'javascript';
// for (let i = 0; i < text.length - 1 ; i++) {
//     console.log(text[i - 1], text[i])
// }


// let value = [1, 3, 4, 8, 13, 17, 20]
// for (let i = 1; i < value.length; i++) {
//     console.log(value[i-1], value[i])
    
// }


// let value = [1, 3, 4, 8, 13, 17, 20];
// let temp = value[1] - value[0]
// for (let i = 0; i < value.length - 1; i++) {
//     if (temp > (value[i+1] - value[i])){
//         console.log(value[i], value[i + 1])
//     }
// }


let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]
let result = 0
for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i]
        result = i;
    }
}
console.log(value[result], value[result+1]);