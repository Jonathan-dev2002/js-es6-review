//ทำงานกับ object
const add = "pattaya"
const Fullname = "jonathan"
const data = "Hello World"

const customer = {
    customerName : "JO",
    age:40,
    address:add,
    Fullname,
    showData(){ //method
        console.log("detail of Data "+data)
    }
}
console.log(customer)
console.log(customer.address)
customer.showData()