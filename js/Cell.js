/**
 * Created by kevin on 5/9/15.
 *
 *
 */

function Cell(){
    this.type;
    this.drawableCell = new DrawableCell();
    this.setType = function(type){
        this.type = type;
    }
}


function DrawableCell(shape){
    this.fill;
    this.x;
    this.y;
    this.sides;
    this.rotation;
    this.shape = shape;
    this.draw = function(){
        $('canvas').drawPolygon();
    }
}
