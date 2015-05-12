/**
 * Created by kevin on 5/9/15.
 *
 *
 */

function Grid(){
    this.row;
    this.col;
    var array2D = [];
    this.cellLocations = [];

    this.resizeGrid = function(){
        var height = Number(document.getElementById('myCanvas').getAttribute('height'));
        var width = Number(document.getElementById('myCanvas').getAttribute('width'));
        console.log('grid height: ' + height + ' , grid width: ' + width);
        for(var i = 0; i < this.row; i++){

            array2D[i] = [];
            this.cellLocations[i] = [];
            for(var j = 0; j < this.col; j++){
                array2D[i][j] = new Cell();
                this.cellLocations[i][j] = calculateLocationOfCell(i,j, height, width);
            }
        }
        console.log('hi');

    }

    this.setCellInGrid = function(row, col, type){
        array2D[row][col].setType(type);
    }

    this.getCellInGrid = function(row, col) {
        return array2D[row][col];
    }
}

/**
 * Used by ViewController to change size when user changes dimensions
 *
 * @param row
 * @param col
 */
Grid.prototype.setGridDimensions = function(row, col) {
    this.row = row;
    this.col = col;
    this.resizeGrid();
    console.log('grid set. grid size: ' + this.cellLocations.size);
}

/**
 * Used by algorithm to pass back 2D array of cell types. Param of type String[][].
 *
 * @param cellGrid
 */
Grid.prototype.updateGrid = function(cellGrid){
    for(var i = 0; i < this.row; i++){
        for(var j = 0; j < this.col; j++){
            this.setCellInGrid(i, j, cellGrid[i][j])
        }
    }
}

/**
 * Given to Algorithm to as String[][] so that it can run simulations
 *
 * @returns {Array}
 */
Grid.prototype.getCellTypeGrid = function(){
    var cellGrid = [];
    for(var i = 0; i < this.row; i++){
        cellGrid[i] = [];
        for(var j = 0; j < this.col; j++){
            cellGrid[i][j] = this.getCellInGrid[i][j].type;
        }
    }
    return cellGrid;
}

/**
 * Called by Simulation to set up grid
 */
Grid.prototype.renderGrid = function(){
    var c = document.getElementById('myCanvas');
    var canvasContext = c.getContext('2d');
    for(var i = 0; i < this.row; i++){
        for(var j = 0; j < this.col; j++){
            canvasContext.drawImage(this.getCellInGrid(i, j).getImage(),
                this.cellLocations[i][j][0],
                this.cellLocations[i][j][1]);
        }
    }
}

