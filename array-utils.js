// PROJECT: ARRAY UTILITY LIBRARY


// Function 1: removeDuplicates()


function removeDuplicates(arr) {

    let unique = [];

    for (let i = 0; i < arr.length; i++) {

        if (!unique.includes(arr[i])) {

            unique.push(arr[i]);

        }

    }

    return unique;

}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log(removeDuplicates([5, 5, 5, 5]));



// Function 2: shuffle()


function shuffle(arr) {

    let shuffled = [...arr];

    for (let i = shuffled.length - 1; i > 0; i--) {

        let randomIndex = Math.floor(Math.random() * (i + 1));

        let temp = shuffled[i];

        shuffled[i] = shuffled[randomIndex];

        shuffled[randomIndex] = temp;

    }

    return shuffled;

}


console.log(shuffle([1, 2, 3, 4, 5]));

console.log(shuffle([1, 2, 3, 4, 5]));



// Function 3: reverse()


function reverse(arr) {

    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        reversed.push(arr[i]);

    }

    return reversed;

}


let original = [1, 2, 3, 4, 5];

console.log(reverse(original));

console.log(original);



// Function 4: findCommon()


function findCommon(arr1, arr2) {

    let common = [];

    for (let i = 0; i < arr1.length; i++) {

        if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {

            common.push(arr1[i]);

        }

    }

    return common;

}


console.log(findCommon([1, 2, 3], [2, 3, 4]));

console.log(findCommon([1, 2, 3], [4, 5, 6]));

console.log(findCommon(['a', 'b'], ['b', 'c']));



// Function 5: findUnique()


function findUnique(arr) {

    let unique = [];

    for (let i = 0; i < arr.length; i++) {

        let count = 0;

        for (let j = 0; j < arr.length; j++) {

            if (arr[i] === arr[j]) {

                count++;

            }

        }

        if (count === 1 && !unique.includes(arr[i])) {

            unique.push(arr[i]);

        }

    }

    return unique;

}


console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));

console.log(findUnique([1, 1, 1]));



// Function 6: difference()


function difference(arr1, arr2) {

    let diff = [];

    for (let i = 0; i < arr1.length; i++) {

        if (!arr2.includes(arr1[i])) {

            diff.push(arr1[i]);

        }

    }

    return diff;

}


console.log(difference([1, 2, 3, 4], [3, 4, 5]));

console.log(difference([5, 6, 7], [1, 2, 3]));



// Function 7: chunk()


function chunk(arr, size) {

    let chunks = [];

    for (let i = 0; i < arr.length; i += size) {

        let chunk = [];

        for (let j = i; j < i + size && j < arr.length; j++) {

            chunk.push(arr[j]);

        }

        chunks.push(chunk);

    }

    return chunks;

}


console.log(chunk([1, 2, 3, 4, 5], 2));

console.log(chunk([1, 2, 3, 4, 5, 6], 3));



// Function 8: flatten()


function flatten(arr) {

    let flat = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            for (let j = 0; j < arr[i].length; j++) {

                flat.push(arr[i][j]);

            }

        } else {

            flat.push(arr[i]);

        }

    }

    return flat;

}


console.log(flatten([[1, 2], [3, 4], [5]]));

console.log(flatten([1, [2, 3], 4, [5, 6]]));



// Function 9: compact()


function compact(arr) {

    let compacted = [];


    for (let i = 0; i < arr.length; i++) {

        if (arr[i]) {

            compacted.push(arr[i]);

        }

    }

    return compacted;

}


console.log(compact([0, 1, false, 2, '', 3]));

console.log(compact([null, undefined, 5, 10, NaN]));



// Function 10: findMax()


function findMax(arr) {

    if (arr.length === 0) return null;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > max) max = arr[i];

    }

    return max;

}


console.log(findMax([1, 5, 3, 9, 2]));

console.log(findMax([10, 20, 15]));



// Function 11: findMin()


function findMin(arr) {

    if (arr.length === 0) return null;

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) min = arr[i];

    }

    return min;

}


console.log(findMin([1, 5, 3, 9, 2]));

console.log(findMin([10, 20, 15]));



// Function 12: average()


function average(arr) {

    if (arr.length === 0) return 0;

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum+= arr[i];

    }

    return sum / arr.length;

}


console.log(average([10, 20, 30]));

console.log(average([5, 10, 15, 20]));