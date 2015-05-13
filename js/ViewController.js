/**
 * Created by kevin on 5/9/15.
 *
 * Main controller that interacts with the view. Defines all event functions from user interaction.
 */
$(document).ready(function(){
});

var simulation;

function modifyGrid(){
    simulation.grid.setGridDimensions(Number(document.getElementById("row").value), Number(document.getElementById("col").value));
}

function createSimulation(){
    simulation = new Simulation("GameOfLife");
    simulation.grid.setGridDimensions(Number(document.getElementById("row").value), Number(document.getElementById("col").value));
    simulation.grid.renderGrid();
}

// TODO:
function startAnimations(){
    run();
}

// TODO:
function pauseAnimations(){
    getDefaultCellType("WaTor");
}

// TODO:
function run(){
    simulation.algorithm.run(simulation.grid);
}



