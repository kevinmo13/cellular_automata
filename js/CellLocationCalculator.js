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
    location[0] = (col/width/2)*col; //calculates x
    location[1] = (row/height/2)*row; // calculates y
    return location;
}
