# Array Utilities

12 functions for working with arrays.

## Functions

**Basic:** removeDuplicates, shuffle, reverse  
**Set Ops:** findCommon, findUnique, difference  
**Transform:** chunk, flatten, compact  
**Stats:** findMax, findMin, average  

## Examples
```javascript
removeDuplicates([1, 2, 2, 3])     // [1, 2, 3]
findCommon([1, 2], [2, 3])         // [2]
chunk([1, 2, 3, 4], 2)             // [[1, 2], [3, 4]]
average([10, 20, 30])              // 20
```

## Run Tests
```bash
node array-utils.js
```

**Built:** Day 59