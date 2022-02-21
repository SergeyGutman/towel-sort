
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return [];
    }
    let result = [];
    for(let i = 0; i < matrix.length; i++){
       result = result.concat(matrix[i].sort((a, b) => b -a));
    }
  return result;
}
