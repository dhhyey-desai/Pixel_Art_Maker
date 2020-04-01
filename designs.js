

let canvas = document.getElementById("pixelCanvas"); // Using document.getElementById()
// to get id="pixelCanvas" from the HTML file
let height = document.getElementById("inputHeight");// Using document.getElementById()
// to get id="inputHeight" from the HTML file
let width = document.getElementById("inputWidth");// Using document.getElementById()
// to get id="inputWidth" from the HTML file
let sizePicker = document.getElementById("sizePicker");// Using document.getElementById()
// to get id="sizePicker" from the HTML file
let color = document.getElementById("colorPicker");// Using document.getElementById()
// to get id="colorPicker" from the HTML file

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid(); // When someone submits the size, it firstly clears the grid
    makeGrid(); // After clearing the grid it makes the new grid
};

function makeGrid() {
    // "for" loop for makig the grid
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){ // function to clear the grid
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}


function fillSquare () { // function to fill a square with the color
    this.setAttribute("style", `background-color: ${color.value}`);
}
