//          Reduce method

//  Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

function extractValue(str, key) {
    return str.reduce(function (accum, next) {
        accum.push(next[key]);
        return accum;
    }, []);
}

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count.

function vowelCount(str) {
    const vowels = "aeiou";
    return str.split('').reduce(function (accum, next) {
        let lowerCased = next.toLowerCase()
        if (vowels.indexOf(lowerCased) !== -1) {
            if (accum[lowerCased]) {
                accum[lowerCased]++;
            } else {
                accum[lowerCased] = 1;
            }
        }
        return accum;
    }, {});
};

//Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

function addKeyAndValue(str, key, value) {
    return str.reduce(function (accum, next, idx) {
        accum[idx][key] = value;
        return accum;
    }, str);
}


//  

function partition(arr, cb) {
    return arr.reduce(function (acc, next) {
        if (cb(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[], []]);
}