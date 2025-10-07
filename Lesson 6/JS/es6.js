/**
 * ES6 syntax
 */

//! var => let, const

// var myAge = 35

let myAge = 35

myAge = 30;

// let isAwesome;
//* when you use const, you cannot change them. Once they are assigned a value, it cannot be changed. Var and let can be chagned
const isAwesome = true
// var isAwesome;

const nTeams = ['dodgers', 'padres', 'diamondbacks', 'rockies']
nTeams.push('bananas')

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log(i)

function logArrItems(arr) {

    var i = 0

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    console.log(i)
}
logArrItems(nTeams)

/**
 * Ternary operators
 * 
 * syntax
 * 
 * Boolean expression ? do stuff : do something else
 */

let amHungry = true

// if(amHungry) {
//     console.log("I'm Hungry, When is Lunch?")
// } else {
//     console.log("I just ate. I need a nap")
// }

amHungry ? console.log("I'm Hungry, When is Lunch?") : console.log("I just ate. I need a nap.")

let num = -8;

num > 0 ? console.log('positive') : null

//! Arrow funtion 

// function numSquared(num) {
//     return num ** 2
// }

// rewriting numSquared as an arrow function
const numSquared =(num)=> num**2

console.log(numSquared(4))

const numCubed =(num) => {
    let cubedValue = num **3
    console.log(num + ' to the third power is ' + cubedValue)
    return cubedValue
}
numCubed(4)

const greetCustomer =(name)=> {
    let time = new Date().getHours()

    time <= 12 ? console.log(`Good Morning, ${name}`) : console.log (`Good evening, ${name}`)
    return
}
greetCustomer('Natasha')

console.log(`8 times 2 is ${8 * 2}`)
console.log(`They said "my name is `${sayMyName('Natasha')}`".`)

const nextPage() => {

    var item = 1

    const items = [ 'item1', 'item2', 'item3', 'item4', 'item5', 'item6']

    
}