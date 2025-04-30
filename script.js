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

const handleHover = function (element, index) {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "#eab676";
    })
}

const clearContainer = function (element) {
    element.innerHTML = "";
}

const fillGrid = function (input) {
    for (let index = 1; index < Math.pow(input, 2) + 1; index++) {
        const squareDiv = createSquare();
        squareDiv.setAttribute("class", "square");
        squareDiv.setAttribute("style", `width: ${calculateSquareSize(input)}px; height: ${calculateSquareSize(input)}px`);
        containerDiv.appendChild(squareDiv);
        handleHover(squareDiv);
    }
}

button.addEventListener("click", () => {
    let input = Number(prompt("Enter a number equal or smaller than 100:"));
    while (input > 100 || input <= 0) {
        input = Number(prompt("The number must be greater than 0 and smaller than 100. Try again!:"));
    }
    clearContainer(containerDiv);
    fillGrid(input);
})

// placeholder matrix
fillGrid(12); 