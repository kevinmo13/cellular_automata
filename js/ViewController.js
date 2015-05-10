/**
 * Created by kevin on 5/9/15.
 *
 * Main controller that interacts with the view. Defines all event functions from user interaction.
 */
var simulation = new Simulation();

$(document).ready(function(){
    simulation.grid.setGridDimensions(document.getElementsByName("row"), document.getElementsByName("col"));
});

function modifyGrid(){
    simulation.grid.setGridDimensions(document.getElementsByName("row"), document.getElementsByName("col"));
    alert('Alert using jQuery Function!');

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
    simulation.grid.updateGrid();
}


