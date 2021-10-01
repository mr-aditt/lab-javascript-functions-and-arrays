// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b){
  return a>b ? a : b;
}

// Progression #2: The lengthy word
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length == 0){
    return null
  }
  words = words.sort(function(a, b) { return b.length - a.length })
  return words[0]
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  if(numbers.length==0){
    return 0
  }
  var total =  numbers.reduce(function(sum, next) {return sum + next})
  return total
}

//Bonus: 3.1 Calculate the sum
function add(arr){
  var counter = 0
  if(arr.length==0){
    return 0
  }
  else{ 
    for(var i=0;i<arr.length;i++){
      if(typeof arr[i] == 'object' || typeof arr[i] == 'undefined'){
        throw new Error("Unsupported data type sir or ma'am")}
      else if(typeof arr[i] == 'boolean'){
        if(arr[i]==true){counter+=1}}
      else if(typeof arr[i] == 'string'){
        counter += arr[i].length}
      else if(typeof arr[i]=='number'){
        counter+=arr[i]}
    }
  }
  return counter
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length==0){
    return null
  }else{
    var sum=numbersAvg.reduce(function(count, next){return count+next})
  }
  return sum/numbersAvg.length
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  var counter=0
  if(wordsArr.length==0){
    return null
  }else{
    for(var i=0;i<wordsArr.length;i++){
      counter+=wordsArr[i].length
    }
  }
  return counter/wordsArr.length
}

//Bonus: Calculate the average of a mixed elements array
function avg(arr){
  var counter = 0
  if(arr.length==0){
    return null
  }
  else{ 
    for(var i=0;i<arr.length;i++){
      if(typeof arr[i] == 'object' || typeof arr[i] == 'undefined'){
        throw new Error("Unsupported data type sir or ma'am")}
      else if(typeof arr[i] == 'boolean'){
        if(arr[i]==true){counter+=1}}
      else if(typeof arr[i] == 'string'){
        counter += arr[i].length}
      else if(typeof arr[i]=='number'){
        counter+=arr[i]}
    }
  }
  return parseFloat((counter/arr.length).toFixed(2))
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
  if(wordsUnique.length==0){
    return null
  }
  let unique = new Set(wordsUnique)
  return Array.from(unique)
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, key){
  if(wordsFind.length==0){
    return null
  }
  else if(wordsFind.find((str) => str === key)){
    return true
  }
  return false
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, search_key){

  hash_map = {}
  if(wordsCount.length==0){return 0}
  else{  
    for(var i=0; i<wordsCount.length; i++){
      if(hash_map.hasOwnProperty(wordsCount[i])){
        hash_map[wordsCount[i]]+=1
      }
      else{
        hash_map[wordsCount[i]] = 1
      }
    }
  }
  return hash_map.hasOwnProperty(search_key)?hash_map[search_key]:0
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix){
  var product = 1
  var largest = 0
  rows = matrix.length
  cols = matrix[0].length
  for(var i=0; i<rows; i++){
    for(var j=0; j<cols; j++){
      if((i+1)<rows){
        product=product*matrix[i+1][j]
        }
      if((i-1)>=0){
        product=product*matrix[i-1][j]
        }
      if((j+1)<cols){
        product=product*matrix[i][j+1]
        }
      if((j-1)>=0){
        product=product*matrix[i][j-1]
        }
      console.log(i,j,product)
      if(product>largest){
        largest=product}
      product=1
    }
  }
  return largest
}