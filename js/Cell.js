/**
 * Created by kevin on 5/9/15.
 *
 */

function Cell(){
    this.neighbors;
    this.type;
}

/**
 * Used by algorithm to change cell type and renderGrid graphics
 *
 * @param type
 */
Cell.prototype.setType = function(type){
    this.type = type;
    // TODO: write code to renderGrid graphics from xml file to view
}

Cell.prototype.getImage = function(){
    var img = new Image;
    img.src = "js/fish.svg"; // TODO: replace with dynamically found file;
    return img;
}



