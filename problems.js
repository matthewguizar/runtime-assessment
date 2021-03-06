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


}//runtime: 0(n)
//space complexity: 0(n)

console.log(addToZero([1,2,3,4,-2], 0))

//PROBLEM 2


const hasUniqueChars = (str) => {
    const set = new Set(str)
    if(set.size === str.length){
      return true
    } return false

}//runtime: 0(n)
 //space complexity: 0(n)




//PROBLEM 3
const isPangram = (string) => {
    let regex = /([a-z])(?!.*\1)/gi;
    return (string.match(regex)).length === 26;


}//runtime:0(1)
//space complexity: 0(1)








//PROBLEM 4
function findLongestWord(arr){
  // arr.sort((a,b) => b.length - a.length)
  // return arr[0].length

  let longest = arr[0]

  for(let i = 0;i < arr.length;i++){
      if(longest.length < arr[i].length){
          longest = arr[i]
      }
  }
  return longest.length
}
//runtime: 0(n)
//space complexity: 0(n)

