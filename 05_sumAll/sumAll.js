const sumAll = function(one, two) {
    let sum = 0;

    if(!Number.isInteger(one) || !Number.isInteger(two)) {
        return "ERROR";
    }

    if(one > two) {
        newOne = two;
        newTwo = one;
    } else if (one > 0 && two > 0 && one < two) {
        newOne = one;
        newTwo = two;
    } else if (one < 0 || two < 0) {
        return "ERROR";
    } else {
        return "ERROR";
    }

    for(let i = newOne; i <= newTwo; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
