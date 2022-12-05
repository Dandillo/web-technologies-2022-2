//1 задание
function pickPropArray(arr, prop) {
    let propArr = [];
    arr.forEach(element => {
        if (element.hasOwnProperty(prop)) {
            propArr.push(element[prop]);
        }
    });
    return propArr;
}

const students = [
    {name: 'Павел', age: 20},
    {name: 'Иван', age: 20},
    {name: 'Эдем', age: 20},
    {name: 'Денис', age: 20},
    {name: 'Виктория', age: 20},
    {age: 40},
];
const result = pickPropArray(students, 'name');

console.log('Задание 1 \n');
console.log(result);
console.log();
//2 задание
console.log('Задание 2 \n');

function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();
counter2();
console.log();
console.log('Задание 3 \n');

//3 задание
function checkWordLength(word) {

    return word.length >= 5
}

function reverseWord(word) {
    if(word.length === 0) return;
    return word.split('').reverse().join('')
}

function spinWords(str) {
    let wordArray = str.split(' ')

    return wordArray.map((word) => {
        return checkWordLength(word) ? reverseWord(word) : word;
    }).join(' ');
}

const result1 = spinWords("Привет от Legacy")
console.log(result1) // тевирП от ycageL

const result2 = spinWords("This is a test")
console.log(result2) // This is a test
console.log();
console.log('Задание 4 \n');

//4 задание
function findIndexEqTarget(nums, target) {
    if(nums.length === 0) return;
    let res = []
    for(let i = 0;i<nums.length;i++)
    {
        for(let j = i + 1;j<nums.length;j++)
        {
            let part2 = target - nums[i];
            if(nums[j] == part2) {
                res.push(i,j);
            }
        }
    }
    return res;
}
let nums = [2,7,11,15];

let target = 9;
console.log(findIndexEqTarget(nums,target));

console.log('Задание 5 \n');

function findMaxPrefix(strs) {
    if(strs.length === 0) return;
    for (let i = 0; i < strs[0].length ; i++){
        let c = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== c ) {
                return strs[0].substring(0, i).length  >= 2 ? strs[0].substring(0, i): '';
            }
        }
    }
    return strs[0];


}

let strs = ["цветок","поток","хлопок"];
let strsReversed = []
let resPrefix = findMaxPrefix(strs);
if(resPrefix.length === 0) {
    strs.forEach((element) => {
        strsReversed.push( reverseWord(element));
    });
    resPrefix = reverseWord(findMaxPrefix(strsReversed)) ;
}

console.log(resPrefix);