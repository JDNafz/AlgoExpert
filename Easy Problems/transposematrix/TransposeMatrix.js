function transposeMatrix(matrix) {
    let output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    console.log(output);
    return output;
};
let matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
// transposeMatrix(matrix1);

// .map practice! 
// function mapIt(array) {
// let output = array.map(num => num[3]);
// console.log(output);

// };

// let array1 = [1,2,3];
// mapIt(array1);