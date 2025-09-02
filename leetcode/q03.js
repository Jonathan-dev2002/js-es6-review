//FizzBuzz: โจทย์คลาสสิกตลอดกาล "วนลูปเลข 1-100 ถ้าหาร 3 ลงตัวให้พิมพ์ Fizz, หาร 5 ลงตัวพิมพ์ Buzz, ถ้าหารทั้ง 3 และ 5 ลงตัวพิมพ์ FizzBuzz"

function fizzBuzzWithIndex() {
    let result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            result.push(`FizzBuzz ${i}`); // ใช้ i โดยตรง
        } else if (i % 3 === 0) {
            result.push(`Fizz ${i}`); // ใช้ i โดยตรง
        } else if (i % 5 === 0) {
            result.push(`Buzz ${i}`); // ใช้ i โดยตรง
        } else {
            result.push(`Number ${i}`); // ใช้ i โดยตรง
        }
    }
    return result;
}

// เรียกใช้ฟังก์ชัน
let result = fizzBuzzWithIndex();
console.log(result)