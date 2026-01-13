// Day 49: Algorithm Practice


// Algorithm 1: Linear Search

// The Problem: Find if a value exists in an array, and where.

// The Strategy: Check each element one by one until you find it (or reach the end).


function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {

            return i;

        }

    }

    return -1;

}


let numbers = [23, 45, 12, 67, 89];

console.log(linearSearch(numbers, 67));

console.log(linearSearch(numbers, 100));



// Algorithm 2: Bubble Sort (Simple Sorting)

// The Problem: Arrange numbers in order (smallest to largest).

// The Strategy: Compare neighbors. If they're in wrong order, swap them. Repeat until sorted.


function bubbleSort(arr) {

    let sorted = [...arr];

    for (let i = 0; i < sorted.length; i++) {

        console.log(`\n🔄 Pass ${i + 1}`);

        for (let j = 0; j < sorted.length - 1; j++) {

            console.log(`   Comparing ${sorted[j]} and ${sorted[j + 1]}`);

            if (sorted[j] > sorted[j + 1]) {

                let temp = sorted[j];

                sorted[j] = sorted[j + 1];

                sorted[j + 1] = temp;

                console.log(`   ↔️ Swapped! Now: [${sorted}]`);

            }

        }

    }

    return sorted;

}


let unsortedArray = [64, 34, 25, 12, 22, 11, 90];

console.log(`\n📊 Original: ${unsortedArray}`);

console.log(`✅ Sorted: ${bubbleSort(unsortedArray)}`);



// Algorithm 3: Find Duplicates

// The Problem: Find which numbers appear more than once in an array.

// The Strategy: Use an object to count occurrences, then filter what appears 2+ times.


function findDuplicates(arr) {

    let counts = {};

    for (let num of arr) {

        if (counts[num]) {

            counts[num]++;

        } else {

            counts[num] = 1;

        }

    }

    console.log('📊 Counts:', counts);


    let duplicates = [];

    for (let num in counts) {

        if (counts[num] > 1) {

            duplicates.push(Number(num));

        }

    }

    return duplicates;

}


console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));

console.log(findDuplicates([10, 20, 10, 30, 20, 10]));

console.log(findDuplicates([1, 2, 3, 4]));



// Practice Time


// 1: Find Minimum Value


function findMin(numbers) {

    let min = numbers[0];

    for (let num of numbers) {

        if (num < min) {

            min = num;

        }

    }

    return min;

}


console.log(findMin([45, 23, 67, 12, 89]));

console.log(findMin([5, 2, 8, 1, 9]));



// 2. Count Occurrences


function countOccurrences(arr, value) {

    let count = 0;

    for (let item of arr) {

        if (item === value) {

            count++;

        }

    }

    return count;

}


console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));

console.log(countOccurrences([5, 5, 5, 5], 5));

console.log(countOccurrences([1, 2, 3], 9));



// 3. Remove Duplicates


function removeDuplicates(arr) {

    let uniqueItems = [];

    for (let item of arr) {

        if (!uniqueItems.includes(item)) {

            uniqueItems.push(item);

        }

    }

    return uniqueItems;

}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log(removeDuplicates([10, 10, 20, 30, 20]));


// 4. Binary Search

function binarySearch(arr, target) {

    let left = 0;

    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        console.log(`🔍 Checking index ${mid}: ${arr[mid]}`);

        console.log(`   Range: [${left}, ${right}]`);

        if (arr[mid] === target) {

            return mid;

        } else if (arr[mid] < target) {

            left = mid + 1;

            console.log(`   ${target} is bigger, search right half`);

        } else {

            right = mid - 1;

            console.log(`   ${target} is smaller, search left half`);

        }

    }

    return -1;

}


let sorted = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log("\n" + binarySearch(sorted, 60));

console.log("\n" + binarySearch(sorted, 100));



// MEGA CHALLENGE: Sort Checker


function isSorted(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {

            return false;

        }

    }

    return true;

}


console.log(isSorted([1, 2, 3, 4, 5]));

console.log(isSorted([1, 3, 2, 4]));

console.log(isSorted([5, 5, 5]));

console.log(isSorted([10, 5, 2]));