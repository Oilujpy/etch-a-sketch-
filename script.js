const containerDiv = document.querySelector(".container");

const createSquare = function() {
    const square = document.createElement("div");
    return square;
}

const handleHover = function(element) {
    element.addEventListener("mouseover", ()=> {
        element.setAttribute("style", "background: #eab676");
    })
} 

const fillGrid = function (squareNumber) {
    const squareDiv = createSquare();
    squareDiv.setAttribute("class", "square");
    squareDiv.textContent = squareNumber;
    containerDiv.appendChild(squareDiv);    
    handleHover(squareDiv);
} 

for (let index = 1; index < 256 + 1; index++) {
    fillGrid(index);
}
