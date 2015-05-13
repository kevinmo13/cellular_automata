/**
 * Created by kevin on 5/13/15.
 */


function getSimulationDocument(){
    if (window.XMLHttpRequest) {
        xhttp=new XMLHttpRequest();
    }
    else{
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    console.log(xhttp);
    xhttp.open("GET","simulation.xml",false);
    xhttp.send();
    return xmlDoc;
}


function getDefaultCellType(simulation){
    xmlDoc = getSimulationDocument();
    cell_list = xmlDoc.getElementsByName(simulation)[0].firstChild.childNodes;
    for(var index = 0; index < cell_list.length; index++){
        if(cell_list[index].nodeValue == "Default"){
            return cell_list[index].nodeValue;
        }

    }

}
