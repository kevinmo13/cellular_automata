/**
 * Created by kevin on 5/9/15.
 *
 * Main controller that interacts with the view. Defines all event functions from user interaction.
 */
$(document).ready(function(){
});

var simulation;

function modifyGrid(){
    simulation.grid.setGridDimensions(document.getElementsByName("row"), document.getElementsByName("col"));
}

function createSimulation(){
    simulation = new Simulation("GameOfLife");

    simulation.grid.setGridDimensions(document.getElementsByName("row"), document.getElementsByName("col"));
    simulation.grid.renderGrid();
}

// TODO:
function startAnimations(){
    run();
}

// TODO:
function pauseAnimations(){

}

// TODO:
function run(){
    simulation.algorithm.run(simulation.grid);
}


