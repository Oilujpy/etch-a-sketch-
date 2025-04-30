const containerDiv = document.querySelector(".container");
const button = document.querySelector("#changeSizeBtn");

const calculateSquareSize = function (userInput) {
    const MAX_WIDTH = 1000;
    let size = (MAX_WIDTH / userInput);
    return size;
}

const createSquare = function () {
    const square = document.createElement("div");
    return square;
}

const handleHover = function (element) {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "#eab676";
    })
}


button.addEventListener("click", () => {
    let input = Number(prompt("Enter a number equal or smaller than 100:"));
    if (input > 100) {
        alert("The number must be smaller than 100. Try again!");
        input = Number(prompt("Enter a number smaller than 100:"));        
    }
})

const test = 100;
console.log(calculateSquareSize(test));


const fillGrid = function () {
    const squareDiv = createSquare();
    squareDiv.setAttribute("class", "square");
    squareDiv.setAttribute("style", `width: ${calculateSquareSize(test)}px; height: ${calculateSquareSize(test)}px`);
    containerDiv.appendChild(squareDiv);
    handleHover(squareDiv);
}

for (let index = 1; index < Math.pow(test ,2) + 1; index++) {
    fillGrid();
}