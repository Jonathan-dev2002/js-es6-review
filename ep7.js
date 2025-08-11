//Destructuring (การสลายโครงสร้าง)

//array
const color = ["เขียว","แดง","เหลือง"]
const green = color[0]
const red = color[1]
console.log("แบบเก่า "+green)

const number = ["หนึ่ง","สอง","สาม"]
const [one,two,three]  = number
console.log("แบบ Destructuring "+two)

const number1 = ["สี่","ห้า","หก"]
const [,,six]  = number1
console.log("แบบ Destructuring "+six)


//object
const product = {
    productName : "computer",
    price : 30,
    stock : 10
}
const name1 = product.productName
console.log("แบบเก่า "+name1)

const {productName:productName1,price} = product
console.log("แบบ Destructuring  "+productName1)
console.log("แบบ Destructuring  "+price)

