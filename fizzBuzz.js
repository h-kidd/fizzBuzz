const fizzBuzz = (num) => {
    let answer = ''
    if (num % 3 === 0) {
        answer += 'Fizz'
    }
    if (num % 5 === 0) {
        answer += 'Buzz'
    }
    if (answer != '') {
        return answer
    }
    return num
}
module.exports = {fizzBuzz}