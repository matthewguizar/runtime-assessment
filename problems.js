//Sum to zero

//PROBLEM 1
const addToZero = (arr, num) => {
        let obj = {}
        let diff
      
        for (let i = 0; i < arr.length; i++) {
          diff = num - arr[i]
      
          if (obj[diff]) {
            return true
          } else {
            obj[arr[i]] = true
          }
        }
        return false


}//runtime:

console.log(addToZero([1,2,3,4,-2], 0))

//PROBLEM 2


const hasUniqueChars = (str) => {
    const set = new Set(str)
    if(set.size === str.length){
      return true
    } return false

}//runtime: 





//PROBLEM 3
const isPangram = (string) => {
    let regex = /([a-z])(?!.*\1)/gi;
    return (string.match(regex)).length === 26;


}//runtime:








//PROBLEM 4
const findLongestWord = (str) => {
    let strSplit = str.split(' ')
    let longestWord = 0
    for (let i = 0; i< strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length
        }
    }
    return longestWord


}//runtime:

