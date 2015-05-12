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
function calculateLocationOfCell(row, col, height, width){
    var location = [];
    location[0] = (width/(col+1)/2); //calculates x
    location[1] = (height/(row+1)/2); // calculates y
    console.log('Cell at row '  + row + ' col ' + col + ' is located at ' + location[0] + ' ' + location[1]);
    return location;
}
