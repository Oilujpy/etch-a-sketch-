const containerDiv = document.querySelector(".container");

const fillGrid = function (squareNumber) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square");
    squareDiv.textContent = squareNumber;
    containerDiv.appendChild(squareDiv);    
} 

for (let index = 1; index < 256 + 1; index++) {
    fillGrid(index);
}
