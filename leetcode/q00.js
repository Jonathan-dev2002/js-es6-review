const reverseArray =(arr1)=>{
    let newArr = []
    for (let i = arr1.length - 1 ; i>= 0 ; i--){
        let num = arr1[i] 
        newArr.push(num)
    }
    return newArr
}
let arr1 = [1,2,3]

let result = reverseArray(arr1)
console.log(result)