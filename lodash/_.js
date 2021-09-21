const _ = {
  clamp(num, lower, upper) {
    let lowerClampedValue = Math.max(num, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },

  inRange(num, start, end) {
    // check if end value exists
    if (end === undefined) {
      // if not, make start = 0 and end = start
      end = start;
      start = 0;
    }
    // check if start is > end
    if (start > end) {
      // if so, make start = end & end = start
      let temp = end; // temp var
      end = start;
      start = temp;
    }
    // check if num is in range
    const isInRange = num >= start && num < end;
    return isInRange;
  },

  words(string) {
    return string.split(' ');
  },

  pad(string, length) {
    if(string.length < length) {
      let frontPadding = Math.floor((length - string.length) / 2);
      let backPadding = length - string.length - frontPadding;
      return ' '.repeat(frontPadding) + string + ' '.repeat(backPadding);
    }
    return string;
  },

  has(object, path) {
    let hasValue = object[path];
    if (hasValue != undefined) {
      return true;
    } else {
      return false;
    }
  },

  invert(object) {
    let invertedObject = {};

    for(key in Object.keys(object)) {
      let originalValue = object[Object.keys(object)[key]];
      invertedObject[originalValue] = Object.keys(object)[key];
    }

    return invertedObject;
  },

  findKey(object, predicate) {
    for (key in object) {
      if(predicate(object.key)) {
        return key;
      }
    }
    return undefined;
  },

  drop(array, n) {
    if(!n) {
      n = 1;
    }
    return array.slice(n);
  },

  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size) {
    if(!size) {
      size = 1;
    }

    let arrayChunks = [];

    for(let i = 0 ; i < array.length ; i += size) {
      arrayChunks.push(array.slice(i, i + size));
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;
