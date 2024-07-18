
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      callback(collection[key], key, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const mappedArr = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      mappedArr.push(callback(collection[i], i, collection));
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      mappedArr.push(callback(collection[key], key, collection));
    }
  }
  return mappedArr;
}

function myReduce(collection, callback, acc) {
  let initializedAcc = acc;
  let startIndex = 0;
  
  if (acc === undefined) {
    initializedAcc = Array.isArray(collection) ? collection[0] : collection[Object.keys(collection)[0]];
    startIndex = 1;
  }
  
  if (Array.isArray(collection)) {
    for (let i = startIndex; i < collection.length; i++) {
      initializedAcc = callback(initializedAcc, collection[i], collection);
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = startIndex; i < keys.length; i++) {
      const key = keys[i];
      initializedAcc = callback(initializedAcc, collection[key], collection);
    }
  }
  
  return initializedAcc;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const filteredArr = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        filteredArr.push(collection[i]);
      }
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (predicate(collection[key])) {
        filteredArr.push(collection[key]);
      }
    }
  }
  return filteredArr;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}


function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(Math.max(array.length - n, 0));
}


function myKeys(object) {
  return Object.keys(object);
}


function myValues(object) {
  return Object.values(object);
}

