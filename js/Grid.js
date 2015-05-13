/**
 * Created by kevin on 5/9/15.
 *
 *
 */

function Grid(){
    this.row;
    this.col;
    this.height = Number(document.getElementById('myCanvas').getAttribute('height'));
    this.width = Number(document.getElementById('myCanvas').getAttribute('width'));
    var array2D = [];
    this.cellLocations = [];

    this.resizeGrid = function(){

        console.log('grid height: ' + this.height + ' , grid width: ' + this.width);
        for(var i = 0; i < this.row; i++){
            array2D[i] = [];
            this.cellLocations[i] = [];
            for(var j = 0; j < this.col; j++){
                array2D[i][j] = new Cell();
                this.cellLocations[i][j] = calculateLocationOfCell(i,j, this.height, this.width, this.row, this.col);
            }
        }
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
            var img = new Image;
            img.src = this.getCellInGrid(i, j).getImage();
            console.log(this.cellLocations[i][j][0]);
            canvasContext.drawImage(img ,
                this.cellLocations[i][j][0],
                this.cellLocations[i][j][1],
                calculateCellSize(this.row, this.col, this.height, this.width)[0],
                calculateCellSize(this.row, this.col, this.height, this.width)[1]);
            console.log('Cell at: ' + i +' ' + j + ' has been rendered')
        }
    }
}

