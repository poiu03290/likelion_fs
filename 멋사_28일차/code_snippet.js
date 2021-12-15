// Array(10)
// let x = Array(10)
// x[2] = undefined
// x  // [비어있음, 비어있음, undefined, 비어있음 ...]
// x.length = 20  // [비어있음, 비어있음, undefined, 비어있음 ... ~ 20]
// Array(10).fill(0)  // [0, 0, 0, 0, ...]
// Array(10).fill(10)  // [10, 10, 10, 10, ...]
// Array(100).fill(1).map((value, index) => value + index)  // [1, 2, ... 99, 100]
// '.'.repeat(10)  // '..........'
// '.'.repeat(10).split('.')  // ['', '', '', '', '', '', '', '', '', '', '']
// Array.from('abc')  // ['a', 'b', 'c']
// Array.from('a', repeat(5))  // ['a', 'a', 'a', 'a', 'a']


// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회


// 1. 스택과 큐
// class Stack {
//     constructor(){
//         this.arr = [];
//     }

//     push(data) {
//         this.arr.push(data);
//     }

//     pop(index=this.arr.length-1) {
//         if (index === this.arr.length-1){
//             return this.arr.pop();
//         }

//         let result = this.arr.splice(index, 1);
//         // let result = this.arr[index]
//         // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)]
//         return result
//     }

//     empty() {
//         if(this.arr.length == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     top() {
//         // return this.arr[this.arr.length-1]
//         try {
//             return this.arr[this.arr.length-1]
//         }
//         catch(error) {
//             return undefined
//         }
//     }

//     bottom() {
//         // return this.arr[0]
//         try {
//             return this.arr[0]
//         }
//         catch(error) {
//             return undefined
//         }
//     }
// }

// let s = new Stack()
// s.push(10);
// s.push(20);
// s.push(30);


// // 2. 연결리스트(linked list)

// const list = {
//     head: {
//         value: 90,
//         next: {
//             value: 2,
//             next: {
//                 value: 77,
//                 next: {
//                     value: 35,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        // 처음 값이 들어오면 그값이 head이면서 tail이니까(값이 하나니깐)
        this.tail = init;

        this.현재노드 = undefined;
        this.데이터수 = 0;
    }

    length() {
        return this.데이터수
    }

    append(data) {
        let 새로운노드 = new Node(data)
        // append는 배열의 뒤로 들어가니까 tail에 들어감
        // 마지막 값(null)은 새로운 노드가 됨.
        // 원래 tail이 data를 가리킴.
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨.
        // data를 tail로 선언.
        this.tail = 새로운노드
        this.데이터수 += 1;
    }
}

l = new LinkedList()
l.append(10)
l.append(12)
l.append(4)
l.append(24)
l.append(11)
console.log(l.length())


/////////////////////
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.현재노드 = undefined;
        this.데이터수 = 0;
    }

    length() {
        return this.데이터수
    }

    append(data) {
        let 새로운노드 = new Node(data)
        // append는 배열의 뒤로 들어가니까 tail에 들어감
        // 마지막 값(null)은 새로운 노드가 됨.
        // 원래 tail이 data를 가리킴.
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨.
        // data를 tail로 선언.
        this.tail = 새로운노드
        this.데이터수 += 1;
    }

    toString() {
        let 순회용현재노드 = this.head.next;

        let s = ''
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data},`
            순회용현재노드 = 순회용현재노드.next
        }
        return s.slice(0, -1)
    }
}

l = new LinkedList()
l.append(10)
l.append(12)
l.append(4)
l.append(24)
l.append(11)
console.log(l.length())

// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도