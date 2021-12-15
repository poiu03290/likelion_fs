// 몸풀기 2문제 - 1번

// https://codingdojang.com/scode/393?answer_mode=hide
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)


// 정답
console.log((Array(100).fill(1).map((value, index) => value + index) + '').split('8').length - 1)




// 몸풀기 2문제 - 2번
//https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// ----------  1번문제풀이  ----------
let s = [1, 3, 4, 8, 13, 17, 20]
let arr = new Array()
// for (let i = 0; i < s.length - 1; i++) {
//     console.log(s[i+1] - s[i])
// }
for (let i = 1; i < s.length; i++) {
    arr.push((s[i] - s[i-1]))
}
// let result = arr.indexOf(Math.min.apply(null, arr))
let result = Math.min(...arr)
console.log(s[result], s[result + 1])

// ------------ 2번문제풀이 -----------
// let s = [1, 3, 4, 8, 13, 17, 20]

// const zip = (a, b) => a.map((v, i) => [v, b[i]])
// let pairs = zip(s.slice(), s.slice(1)).slice(0, -1)
// function compare(a, b) {
//     if (a[1] - a[0] < b[1] - b[0]){
//         return - 1
//     }
//     if (a[1] - a[0] > b[1] - b[0]) {
//         return 1;
//     }
//     return 0
// }

// pairs.sort(compare)
// console.log(pairs[0])

// ---------------- 3번 문제풀이 --------------
// let s = [1, 3, 4, 8, 13, 17, 20]
// const zip = (a, b) => a.map((v, i) => [v, b[i]])
// let pairs = zip(s.slice(), s.slice(1)).slice(0, -1)

// init은 초기값인데 for문안에서는 최솟값을 비교하는 용도로 사용.
// MAX_SAFE_INTEGER를 주로 사용합니다.
// let init = Number.MAX_SAFE_INTEGER

let init = pairs[0][1] - pairs[0][0]
let result = []
for (let i of pairs) {
    // console.log(i)
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}
console.log(result)
