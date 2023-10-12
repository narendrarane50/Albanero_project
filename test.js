// Question 1
//Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
// Example 1:
// Input - 123
// reversed integer - 321
// prime factors of 321 are 3 and 107
// output - Yes - [3,107]

function isPrime(n){
    if (n<=1) return false
    if (n<=3) return true
    if(n%2===0 || n%3===0) return false
    let i=5
    while(i*i<=n){
        if(n%i===0 || n%(i+2)===0) return false
        i+=6
    }
    return true
}

function reverseAndCheckPrimeFactors(x){
    let reversedX = parseInt(x.toString().split('').reverse().join(''))
    const primeFactors = []
    for(let i=2;i<=reversedX;i++){
        while(reversedX%i===0 && isPrime(i)){
            primeFactors.push(i)
            reversedX/=i
        }
        if(reversedX===1) break
    }
    if(primeFactors.length>0){
        return `Yes-${primeFactors}`
    }
    else{
        return 'No'
    }
}

const inputNumber = 1500
console.log(reverseAndCheckPrimeFactors(inputNumber))


// Question 2
//  Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

function groupAnagrams(strs){
    const anagramGroups={}
    for(const str of strs){
        const key = str.split('').sort().join('')

        if(!anagramGroups[key]){
            anagramGroups[key]=[]
        }

        anagramGroups[key].push(str)

    }
    return Object.values(anagramGroups)

}

const str1=["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(str1))

//Question 3
// Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false

const wordBreak = function (s, wordArray) {
    let n = s.length;
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i <= n; i++) {
      for (let word of wordArray) {
        if (word.length > n) {
          continue;
        }
        if (s.substring(i, i + word.length) === word && dp[i]) {
          dp[i + word.length] = true;
        }
      }
    }
    if (dp[n]) return true;
    return false;
  };
  // let s = "leetcode";
  // let wordArray = ["leet", "code"];
  let s = "catsanddog";
  let wordArray = ["cats", "dog", "sand", "and", "cat"];
  
  let s1 = "applepenapple";
  let wordArray1 = ["apple", "pen"];
  console.log(wordBreak(s, wordArray));
  console.log(wordBreak(s1, wordArray1));

// Question 4
// Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"

function largestNumber(nums){
    const largestNum = nums.map(num=>num.toString()).sort((a,b)=>(b+a).localeCompare(a+b)).join('')
    if(largestNum[0]==='0'){
        return '0'
    }
    return largestNum
}

const nums1=[3,30,34,5,9]
console.log(largestNumber(nums1))

// Question 5 
// Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34

function findKthLargest(nums, k) {
    const max = Math.max(...nums);
    // const min=Math.min(...nums);
    const count = new Array(max + 1).fill(0);
  
    for (let num of nums) {
      count[num]++;
    }
    for (let i = count.length - 1; i >= 0; i--) {
      k -= count[i];
      if (k <= 0) return i;
    }
  }
  let nums = [10, 4, 12, 9, 87, 34];
  let k = 2;
  console.log(findKthLargest(nums, k));