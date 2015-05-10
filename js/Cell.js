/**
 * Created by kevin on 5/9/15.
 *
 */

function Cell(){
    this.neighbors;
    this.type;
}

/**
 * Used by algorithm to change cell type and render graphics
 *
 * @param type
 */
Cell.prototype.setType = function(type){
    this.type = type;
    // TODO: write code to render graphics from xml file to view
}



