/* 
    2635. Apply Transform Over Each Element in Array

    Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

    The returned array should be created such that returnedArray[i] = fn(arr[i], i).

    Please solve it without the built-in Array.map method.

    Example 1:
    Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
    Output: [2,3,4]
    Explanation:
    const newArray = map(arr, plusone); // [2,3,4]
    The function increases each value in the array by one. 

    Example 2:
    Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
    Output: [1,3,5]
    Explanation: The function increases each value by the index it resides in.  

    Example 3:
    Input: arr = [10,20,30], fn = function constant() { return 42; }
    Output: [42,42,42]
    Explanation: The function always returns 42.

    Constraints:
    0 <= arr.length <= 1000
    -109 <= arr[i] <= 109
    fn returns an integer.  

*/

var map = function (arr, fn) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const transformValue = fn(arr[i], i)
        newArr.push(transformValue)
    }
    return newArr
};

//แบบใช้ arr.map()
var map_builtin = function (arr, fn) {
    return arr.map(fn);
};

// ตัวอย่างที่ 1: เพิ่มค่าทุกตัวด้วย 1
console.log("--- Example 1 ---");
const arr1 = [1, 2, 3];
const plusone = function (n) { return n + 1; };
const newArray1 = map(arr1, plusone);
console.log(newArray1); // ผลลัพธ์ที่คาดหวัง: [2, 3, 4]

// ตัวอย่างที่ 2: เพิ่มค่าด้วย index
console.log("--- Example 2 ---");
const arr2 = [1, 2, 3];
const plusI = function (n, i) { return n + i; };
const newArray2 = map(arr2, plusI);
console.log(newArray2); // ผลลัพธ์ที่คาดหวัง: [1, 3, 5]

// ตัวอย่างที่ 3: คืนค่า 42 เสมอ
console.log("--- Example 3 ---");
const arr3 = [10, 20, 30];
const constant = function () { return 42; };
const newArray3 = map(arr3, constant);
console.log(newArray3); // ผลลัพธ์ที่คาดหวัง: [42, 42, 42]