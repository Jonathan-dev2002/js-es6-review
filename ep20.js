//ทบทวน+ประยุกต์ใช้

//4. ระบบค้นหาด้วย find, findIndex, indexOf

const colors = ["red", "green", "blue", "yellow"];
console.log("indexOf green:", colors.indexOf("green"));        // 1
console.log("find blue:", colors.find(c => c === "blue"));     // "blue"
console.log("findIndex yellow:", colors.findIndex(c => c === "yellow")); // 3
