/**
 * Created by kevin on 5/10/15.
 */


function Algorithm(){
    var algorithmRules;

    this.setRules = function(rules){
        algorithmRules = rules;
    }
}


/**
 * Passes in a 2D array of strings to be manipulated by algorithm
 *
 * @param cellArray
 */
Algorithm.prototype.run = function(grid){
    grid.getCellTypeGrid();

}