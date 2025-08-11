//push, pop , shift , unshift

const data = [10,20]
console.log(data)

data.push(30)
data.push(35)
console.log("push "+data)

data.pop()
console.log("pop "+data)

data.shift(10)
console.log("shift "+data)

data.unshift(99)
console.log("unshift "+data)


total = 0
AllData=(...enterData)=>{
    const data1 = [30,40,50]
    data1.push(...enterData) 
    return data1
    
}
console.log(AllData(200,1))