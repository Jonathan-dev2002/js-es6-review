//array filter

const data = [10,20,30,40]

const result = data.filter(e=>e>=20)
console.log(result)

const data1 = [
    {name : "joe",salary : 20000,department: "programmer"},
    {name : "joey",salary : 20200,department: "programmer1"},
    {name : "joe1",salary : 21100,department: "programmer1"},
    {name : "joe2",salary : 30000,department: "programmer1"},
    {name : "joe3",salary : 40000,department: "programmer111"}   
]
const result1 = data1.filter(e=>{
    return e.salary>=30000
}).filter(e=>{
    return e.department ==="programmer1"
})
console.log(result1)