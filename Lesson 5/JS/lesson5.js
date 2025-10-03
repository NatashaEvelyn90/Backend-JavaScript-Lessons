//! Objects
/**
 * syntax
    var objName = {
        property: value,
        key: value,
        prop value
    }

    Dot notation

    syntax:

    objName.key


    Bracket Notation

    syntax:

    objName['property']
 * 
 */

    var person = {
        fName: 'Dwayne',
        lName: 'Johnson',
        alias: 'The Rock',
        "occupation": 'President of the United States',
        "other jobs": ['rasslor', 'actor'],
        age: 51,
        isStrong: true
    }

    console.log(person.alias)
    console.log(person['other jobs'])
    console.log(person['other jobs.'][1])

    var work = 'occupation'
    console.log(person[work])

    console.log(person.work) // This will come back as undefined

    // update date in an object
    person.age = 53
    
    person.finishingMove = "The People's Elbow"
    console.log(person);

    person.quote = function() {
        var message = 'Can you SMELLLLLLLLL what The Rock is cooking? ✔️👀 '
        return console.log(message)
    }
    person.quote()
    

    function quote() {
        console.log('This is a Function')
    }
    quote()

    var crazpicc = {
        myName: {
            fName: 'Crazpicc',
            lName: 'Eve',
            alias: 'Flute Girl',
            occupation: 'unemployed',
            age: 35,
            kids: 'none',
            hobbies: ['eating', 'gaming', 'dancing', 'drawing', 'sleeping'],
        },
        favFood: ['cake', 'salad', 'pasta'],
        greeting: function() {
            console.log('My name is ' + this.myName.fName + ' and I am eternally poor.')
        }
    }

    crazpicc.greeting();