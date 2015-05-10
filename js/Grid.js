/**
 * Created by kevin on 5/9/15.
 *
 *
 */


function Grid(row, col){
    this.row = row;
    this.col = col;
    this.array2D = [];

    this.setGridDimensions = function(row, col){
        this.row = row;
        this.col = col;
    }

    // TODO: make more efficient
    this.resizeGrid = function(){
        for(var i = 0; i < this.row; i++){
            this.array2D[i] = [];
            for(var j = 0; j < this.col; j++){
                this.array2D[i][j] = new Cell();
                this.array2D[i][j].drawableCell.draw();
            }
        }
    }

    // TODO: implement
    this.moveCell = function(){

    }





}


