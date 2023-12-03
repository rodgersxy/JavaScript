// promise using constructors

// const promise = new Promise ((resolve, reject)) {
//     resolve('successful')
//     reject('failed')
// }

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skill = ['JS', 'CSS', 'HTML'];
        if (skill.length > 0) {
            resolve(skill);
        } else {
            reject('No skill found');
        }
    }, 1000);
})

doPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })