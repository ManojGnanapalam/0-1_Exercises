const arr1 = [21,22,23,44,25,64,33]

let BigNum = arr1[0]

for (let i in arr1 ){
    if (arr1[i] > BigNum){
        BigNum = arr1[i]
    }
}

console.log(BigNum)