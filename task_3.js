
function task4(a, b, operation) {

    const operations = ['+', '-', '*', '/']

    if (typeof a === 'number' && typeof b === 'number' && operations.includes(operation)) {
        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }

    }
        return false
    }



console.log(task4(2, 6, '+'))