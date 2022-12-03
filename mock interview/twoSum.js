// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.​

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Questions to ask:
// What do I return if there are multiple answers? => Pick any true result;
// Can integers be negative and/or positive?
// Are the numbers sorted?


// Time Complexity: O(n^2);
// Space Complexity: O(1);

const twoSum = (array, targetSum) => {
    for (let i = 0; i < array.length; i++) {
        const num1 = array[i];
        for(let j = 0; j < array.length; j++) {
            const num2 = array[j];
            if (num1 + num2 === targetSum && i !== j) return [num1, num2];
        }
    }
    return [];
}

console.log(twoSum([1,2,3,4,5], 6)); // [1, 5], [2, 4]
console.log(twoSum([1,2,3,4], 20)); // []

// Time Complexity: O(n);
// Space Complexity: O(n);

const twoSumMap = (array, targetSum) => {
    const nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) return [num, potentialMatch];
        else nums[num] = true;
    }
    return [];
}

console.log(twoSumMap([1,2,3,4,5], 6)); // [1, 5], [2, 4]
console.log(twoSumMap([1,2,3,4], 20)); // []


// Time Complexity: O(nlogn) => Not Sorted;
                    // O(n) => Presorted;
// Space Complexity: O(1);

const twoSumPointer = (array, targetSum) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        if (array[left] + array[right] < targetSum) left++;
        else if (array[left] + array[right] > targetSum) right--;
        else return [array[left], array[right]];
    }
    return [];
}

console.log(twoSumPointer([1,2,3,4,5], 6)); // [1, 5], [2, 4]
console.log(twoSumPointer([1,2,3,4], 20)); // []

// array.sort((a,b) => a - b);

// 1, 2 11, 12, 

// array.sort();
// 1, 11, 12, 2