// Question 1

// function isPrime(n){
//     if (n<=1) return false
//     if (n<=3) return true
//     if(n%2===0 || n%3===0) return false
//     let i=5
//     while(i*i<=n){
//         if(n%i===0 || n%(i+2)===0) return false
//         i+=6
//     }
//     return true
// }

// function reverseAndCheckPrimeFactors(x){
//     let reversedX = parseInt(x.toString().split('').reverse().join(''))
//     const primeFactors = []
//     for(let i=2;i<=reversedX;i++){
//         while(reversedX%i===0 && isPrime(i)){
//             primeFactors.push(i)
//             reversedX/=i
//         }
//         if(reversedX===1) break
//     }
//     if(primeFactors.length>0){
//         return `Yes-${primeFactors}`
//     }
//     else{
//         return 'No'
//     }
// }

// const inputNumber = 1500
// console.log(reverseAndCheckPrimeFactors(inputNumber))


// Question 2

// function groupAnagrams(strs){
//     const anagramGroups={}
//     for(const str of strs){
//         const key = str.split('').sort().join('')

//         if(!anagramGroups[key]){
//             anagramGroups[key]=[]
//         }

//         anagramGroups[key].push(str)

//     }
//     return Object.values(anagramGroups)

// }

// const str1=["eat","tea","tan","ate","nat","bat"]
// console.log(groupAnagrams(str1))


// Question 4

function largestNumber(nums){
    const largestNum = nums.map(num=>num.toString()).sort((a,b)=>(b+a).localeCompare(a+b)).join('')
    if(largestNum[0]==='0'){
        return '0'
    }
    return largestNum
}

const nums1=[3,30,34,5,9]
console.log(largestNumber(nums1))