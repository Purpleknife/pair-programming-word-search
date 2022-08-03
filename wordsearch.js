
//1- Copy the transpose function we worked on before:
const transpose = function(letters) {
  let result = [];
 
  for (let row = 0; row < letters[0].length; row++) {
    result.push([]);
  }

  for (let row = 0; row < letters.length; row++) {
    for (let column = 0; column < result.length; column++) {
      result[column].push(letters[row][column]);
    }
  }
  return result;
};


//2-Create a function that will check the array horizontally:
const horizontalSearch = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};


//3-Create a function that will check the array vertically:
const verticalSearch = function(letters, word) {
  letters = transpose(letters);

  const verticalJoin = letters.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};


//Main function:
const wordSearch = (letters, word) => {
  
  if (!letters.length) { //If the array is empty.
    return undefined;
  }
  if (horizontalSearch(letters, word) === true) {
    return true;
  }
  if (verticalSearch(letters, word) === true) {
    return true;
  }

  return false;

};


module.exports = wordSearch;