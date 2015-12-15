/* This a bloom filter factory function that takes a single input to represent the size of the storage array,
and returns a bloom filter object. Some of the functions are stubbed out. */

function bloomFilter(storageSize){
  //this will be your bit vector
  var bloomStorage = limitedArray(storageSize);

  //This function should take a two-letter input string, and add it to the bloom filter using the 
  //hashing helper functions below
  function addWordToFilter(string){
    if(string.length !== 2){
      console.error("Input length incorrect");
      return null;
    }
    //finish this function
  }

  //This function return "true" if the string might be in the bloom filter, and false
  //if it is definitely not in the bloom filter.
  function isWordProbablyInFilter(string){
    if(string.length !== 2){
      console.error("Input length incorrect");
      return null;
    }
    //finish this function
  }
  // returns a decimal representing the chance that the positive is a false positive.
  // function getFalsePositiveRate(){

  // }

  return {
    addWordToFilter: addWordToFilter,
    isWordProbablyInFilter: checkString,
    //getFalsePositiveRate: getFalsePositiveRate,
  };
}

//This is a rudimentary hashing function that takes a character and a maximum, and returns a number within the max.

//How could these functions be improved to ensure an identical probability of results?
var hashCharacter1 = function(char, max){
  var charCode = str.charCodeAt(char);
  return charCode % max;
};

var hashCharacter2 = function(char, max){
  var charCode = str.charCodeAt(char)^2;
  return charCode % max;
};

//NOTE: COPY PASTED LIMITED ARRAY FROM HASH TABLE SPRINT
// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value){
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};


