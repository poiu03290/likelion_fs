for (let i = 0; i < 10; i++) {
    console.log(i)
}

let a = [10, 20, 30, 40]
for(let i of a) {
    console.log(i)
}

let x = 0;
while (x < 10) {
    console.log(x)
    x++;
}

let x = 0;
do {
    console.log(x)
    x++;
} while (x < 10)

a.forEach(e => console.log(e**2));

for (let i = 0; i < 10; i++) { 
    if (i === 5) {
        break
    }
    console.log(i)
}

for (let i = 0; i < 10; i++) { 
    if (i === 5) {
        continue
    }
    console.log(i)
}