// 함수버전
function randomFunc(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
let lottoArr = [];
function lottoGenerator() {
    while (lottoArr.length < 6) {
        let result = randomFunc(1, 46)
        let isGot = false

        lottoArr.forEach(element => {
            if (element === result) {
                isGot = true;
            }
        })    

            if (!isGot) {
                lottoArr.push(result)
            }      
    }
    return lottoArr
}

console.log(lottoGenerator())

// 함수아닌버전
array = []
while(array.length < 6) {
let num = Math.floor(Math.random() * 44) + 1
	if (!array.includes(num)) {
		array.push(num)	
	}
}

console.log(array)