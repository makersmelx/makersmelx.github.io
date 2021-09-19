function runTests(testGroups) {
    const testGroupsElement = document.getElementById('test-groups');

    testGroups.forEach((group) => {
        const { name, tests } = group;

        const groupItem = document.createElement('li');
        const groupList = document.createElement('ul');

        groupItem.textContent = name;

        testGroupsElement.appendChild(groupItem);
        groupItem.appendChild(groupList);

        tests.forEach((test) => {
            const [actualExpr, expected] = test;
            let actual, actualThrewException = false;

            try {
                actual = eval(actualExpr); // Note: do **not** use eval if you can avoid it
            } catch(e) {
                actualThrewException = true;
                actual = `ERROR: ${e.message}`;
            }

            const gotCorrectResult = actual === expected;

            const textExprDisp = document.createElement('li');
            groupList.appendChild(textExprDisp);

            textExprDisp.setAttribute('class', gotCorrectResult ? 'correct' : 'incorrect');

            if(gotCorrectResult) {
                textExprDisp.textContent = `${actualExpr} -> ${actual}`;
            } else {
                textExprDisp.textContent = actualExpr;

                const resultDisp = document.createElement('ul');
                textExprDisp.appendChild(resultDisp);

                const actualDisp = document.createElement('li');
                actualDisp.textContent = `Your code returned: ${actual}`;
                resultDisp.appendChild(actualDisp);

                const expectedDisp = document.createElement('li');
                expectedDisp.textContent = `Expected: ${expected}`;
                resultDisp.appendChild(expectedDisp);
            }
        });
    })
    // console.log(mainElement);
}

runTests([{
    name: 'Add One',
    tests: [
        ['addOne(1)', 2],
        ['addOne(3)', 4],
        ['addOne(-3)', -2]
    ]
}, {
    name: 'Getting the largest number',
    tests: [
        ['largest([2,4,3])', 4],
        ['largest([579])', 579],
        ['largest([-3, -10])', -3]
    ]
}, {
    name: 'Factorial',
    tests: [
        ['fact(0)', 1],
        ['fact(1)', 1],
        ['fact(2)', 2*1],
        ['fact(5)', 5*4*3*2*1],
        ['fact(6)', 6*5*4*3*2*1],
    ]
}, {
    name: 'Fibonacci Sequence',
    tests: [
        ['fib(0)', 0],
        ['fib(1)', 1],
        ['fib(2)', 1],
        ['fib(3)', 2],
        ['fib(4)', 3],
        ['fib(5)', 5],
        ['fib(6)', 8],
        ['fib(7)', 13],
    ]
}]);