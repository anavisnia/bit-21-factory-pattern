const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const devide = (a, b) => a / b;


// console.log(devide(5, 8));

// const calc = (action, num1, num2) => action(num1, num2);
// console.log(calc(devide, 5, 8));

const calc = text => {
    const actions = {
        '+': sum,
        '-': minus,
        '*': multiply,
        '/': devide
    }
    let parts = text.split(' ');

    parts = parts.map((part, i) => {
        console.log(i, '-', part);
        if(i % 2 === 0) {
            return parseInt(part);
        } else {
            return part;
        }
    });
    
    const action = actions[parts[1]]

    if (!action) {
        return 'ERROR: no valid action';
    }
    return action(parts[0], parts[2]); // parts[1] = +
};

let userInput;
userInput = '13 + 17';

const rez = calc(userInput);

console.log(userInput , '=', rez);