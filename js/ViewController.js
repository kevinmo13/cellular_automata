/**
 * Created by kevin on 5/9/15.
 *
 * Main controller that interacts with the view. Defines all event functions from user interaction.
 */
var grid = new Grid(document.getElementsByName("row"), document.getElementsByName("col"));

$(document).ready(function(){
    grid.resizeGrid();
});

function modifyGrid(){
    grid.setGridDimensions(document.getElementsByName("row"), document.getElementsByName("col"));
    alert('Alert using jQuery Function!');

}

// TODO:
function startAnimations(){

}
