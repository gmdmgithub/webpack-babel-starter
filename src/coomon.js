function first() {
    return 'Hi there';
}

function second(name) {
    return `My name is ${name}`;
}

function log(...mes) {
    console.log(mes.join(', '));

}

// module.exports.first = first;
// module.exports.second = second;
export {
    first,
    second
}
export default log;