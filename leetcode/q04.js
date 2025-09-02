//ฟังก์ชันเช็คว่าเป็น Palindrome หรือไม่

function isPalindromeArrayTwoPointers(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        const elementFromStart = arr[i];
        const elementFromEnd = arr[arr.length - 1 - i];

        // 2. ถ้าเจอสมาชิกคู่ไหนที่ไม่เหมือนกัน ให้ return false และจบการทำงานทันที
        if (elementFromStart !== elementFromEnd) {
            return false;
        }
    }

    // 3. ถ้าวนลูปจนจบแล้วยังไม่เจอตัวที่ต่างกันเลย แสดงว่าเป็น Palindrome
    return true;
}

// ตัวอย่างการใช้งาน
console.log(isPalindromeArrayTwoPointers([1, 2, 3, 2, 1])); // true
console.log(isPalindromeArrayTwoPointers(["a", "b", "c", "b", "a"])); // true
console.log(isPalindromeArrayTwoPointers([1, 2, 3, 4, 5])); // false