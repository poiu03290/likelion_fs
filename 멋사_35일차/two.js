let name = 'hyuk'
let age = 10

function plusAge() {
    age += 1;
    return age
}

function getValue() {
    return age
}

module.exports.name = name
module.exports.age = age
module.exports.plusAge = plusAge
module.exports.getValue = getValue