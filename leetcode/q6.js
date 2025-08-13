/* 
    2634. Filter Elements from Array

    Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

    The fn function takes one or two arguments:

    - arr[i] - number from the arr
    - i - index of arr[i]

    filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

    Please solve it without the built-in Array.filter method.

    Example 1:
    Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
    Output: [20,30]
    Explanation:
    const newArray = filter(arr, fn); // [20, 30]
    The function filters out values that are not greater than 10

    Example 2:
    Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
    Output: [1]
    Explanation:
    fn can also accept the index of each element
    In this case, the function removes elements not at index 0   

    Example 3:
    Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
    Output: [-2,0,1,2]
    Explanation:
    Falsey values such as 0 should be filtered out  

    Constraints:
    0 <= arr.length <= 1000
    -109 <= arr[i] <= 109    

    #Notes
    Truthy: คือค่าใดๆ ก็ตามที่ไม่ใช่ falsy เช่น true, ตัวเลขที่ไม่ใช่ 0 (เช่น 1, -10), ข้อความที่ไม่ใช่ค่าว่าง (เช่น "hello"), อ็อบเจกต์ {}, อาร์เรย์ []
    Falsy: มีอยู่ไม่กี่ตัวที่ต้องจำ คือ false, 0, "" (ข้อความว่าง), null, undefined, และ NaN
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