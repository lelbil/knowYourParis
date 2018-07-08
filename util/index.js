'use strict'

/**
 * Get random int between 0 and max-1 included
 * @param max
 * @return {number}
 */
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

exports.includes = (array, item) => array.indexOf(item) > -1

const shuffle = array => {
    const dupArray = array.slice()
    const result = []

    while (dupArray.length > 0) {
        const randomIndex = getRandomInt(dupArray.length)
        result.push(dupArray[randomIndex])
        dupArray.splice(randomIndex, 1)
    }

    return result
}

// Todo: think about some better way to present/generate possible answers performance-wise
exports.generatePossibleAnswers = correctAnswers => {
    const possibleAnswers = [correctAnswers[getRandomInt(correctAnswers.length)]]

    for (let i = 0; i < 3; i++ ) {
        let randomAnswer = getRandomInt(20) + 1
        while(exports.includes(possibleAnswers, randomAnswer) || exports.includes(correctAnswers, randomAnswer)) {
            randomAnswer = getRandomInt(20) + 1
        }
        possibleAnswers.push(randomAnswer)
    }

    return shuffle(possibleAnswers)
}

exports.stringifyAnswer = districtNumber => {
    let suffix

    if (districtNumber === 1) suffix = 'er'
    else suffix = 'ème'

    return `${districtNumber}${suffix} arr.`
}