// DESCRIPTION:
// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

// FUNDAMENTALSSTRINGS

function catMouse(x) {
    let wow = x.substring(1, x.length - 1)
    if (wow.length <= 3) {
        return "Caught!"
    } else return "Escaped!"
}
// DESCRIPTION:
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
function squares(x, n) {
    let wow = []
    if (n === 0 || n < 0) {
        return wow
    } for (let i = x; wow.length < n; i *= i) {
        wow.push(i)
    }
    return wow
}