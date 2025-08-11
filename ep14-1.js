//array map

const data = [
    {data:"01/06/2564",weather:"แดดร้อน",temp:27},
    {data:"02/06/2564",weather:"ฝนตก",temp:23},
    {data:"03/06/2564",weather:"หมอก",temp:18},
    
]
// const result = data.map(e=>{
//     return e.weather
// })
const result = data.map(e=>e.weather)
console.log(result)