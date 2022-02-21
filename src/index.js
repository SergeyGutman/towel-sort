
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    let result = [];
    for(let i = 0; i < matrix.length; i++){
        let subArr = matrix[i];
        i % 2 ? subArr.sort((a, b) => b - a) : subArr.sort((a, b) => a - b);
        result = result.concat(subArr);
    }
  return result;
}
