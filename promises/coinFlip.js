const DELAY = 2000;
const THREE_SECONDS = 3000;

const pinkyPromise = new Promise((resolve , reject) => {
    if (DELAY > THREE_SECONDS) {
        reject('Took too long')
    }
    setTimeout(() => {
        resolve('Thank you for keeping your promise')
    }, DELAY);
});
// console.log(pinkyPromise);

function coinFlip () {
    return new Promise( (res,rej) => {
        const value = ['heads','tails'][Math.floor(Math.random() * 2)];
        if (value === "heads") {
            res(value)
        } else {
            rej(value)
        }
    })
}

console.log(coinFlip());

function delay(time) {
    return new Promise( (res,rej) => {
        setTimeout(() => {
            res(['heads','tails'][Math.floor(Math.random() * 2)])
        },time);
    })
}
console.log(delay(2000));