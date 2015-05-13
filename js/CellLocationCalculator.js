/**
 * Created by kevin on 5/11/15.
 */

/**
 * Returns calculated x and y location stored as '[x, y]'
 *
 * @param row
 * @param col
 * @param height
 * @param width
 * @returns {Array}
 */
function calculateLocationOfCell(row, col, height, width, numRow, numCol){
    var location = [];
    location[0] = width/numCol * col; //calculates x
    location[1] = height/numRow * row; // calculates y
    console.log('Cell at row '  + row + ' col ' + col + ' is located at ' + location[0] + ' ' + location[1]);
    return location;
}

function calculateCellSize(numRow, numCol, height, width){
    var dimensions = [];
    dimensions[0] = width/numCol;
    dimensions[1] = height/numRow;
    return dimensions;
}

