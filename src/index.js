module.exports = function towelSort (matrix) {
	if(!matrix) return [];
	let result = [];
	for(let x = 0; x < matrix.length; x++) {      
      if(x % 2) {
        matrix[x].reverse();        
      }
      result = result.concat(matrix[x]);
    }
  return result;
}
