const doSomething = callback => {
    setTimeout(() => {
        const skill = ['JS', 'CSS', 'HTML'];
        callback(false, skill);
    }, 1000);
};

const callback = (error, skill) => {
    if (error) {
        console.log(error);
    } else {
        console.log(skill);
    }
}

doSomething(callback)