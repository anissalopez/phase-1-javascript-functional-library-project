function myEach(collection, callback) {
    const array = typeof collection === 'object' ? Object.values(collection) : collection;

    for (let number of array) {
        callback(number);
    }

    return collection;
}

function myMap(collection, callback){
    const array = typeof collection === 'object' ? Object.values(collection) : collection;
    let newArray = []; 

    for (let numbers of array){
        newArray.push(callback(numbers))
    }
   return newArray;
}

function myReduce(collection, callback, acc){
    const array = typeof collection === 'object' ? Object.values(collection) : collection;
    let accValue = 0;
  
    if(acc == undefined){
            accValue = array[0]
            let newArray = array.slice(1)
            for (let numbers of newArray){
                accValue = callback(accValue, numbers, newArray);
            };
            return accValue
        }

    for(let numbers of array){
            acc = callback(acc, numbers, array);
        }
        return acc;
    
};

function myFind(collection, predicate){
    const array = typeof collection === 'object' ? Object.values(collection) : collection;
    for (let numbers of array){
        if (predicate(numbers) === true){
            return numbers;
        };
    };
};

function myFilter(collection, predicate){
    const array = typeof collection === 'object' ? Object.values(collection) : collection;
    let newArray = [];

    for(let numbers of array){
        if (predicate(numbers) === true){
            newArray.push(numbers);
        };
    };
   return newArray;
};

function mySize(collection){
    const array = typeof collection === 'object' ? Object.values(collection) : collection;
    return array.length;
};

function myFirst(array, n){
    if (n === undefined){
      return array[0]; 
    };
    array.splice(n);
    return array;
};

function myLast(array, n){
    if (n === undefined){
        return array[array.length-1]
    };
    let newArray = array.slice(-n);
    return newArray;
};

function myKeys(object){
    return Object.keys(object);
};

function myValues(object){
    return Object.values(object);
};



function mySortBy(array, callback) {
    let copyArray = [...array];


    return copyArray.sort((a, b) => {
      const aValue = callback(a);
      const bValue = callback(b);
  
      if (aValue < bValue) {
        return -1;
      } else if (aValue > bValue) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  




//iterates through an array
//variable for numbers can equal zero
//if the index of that number in the array is greater than 






