var container = document.getElementById("container");
var newGridBtn = document.getElementById("newGridBtn");
var clearBtn = document.getElementById("clearBtn");
var gridInfo = document.getElementById("gridInfo");

var currentSize = 16;

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function handleSquareInteraction(square) {
    var interactions = parseInt(square.getAttribute("data-interactions"), 10);

    if (interactions < 10) {
        interactions++;
        square.setAttribute("data-interactions", interactions);
    }

    square.style.backgroundColor = randomColor();

    // Each interaction reduces opacity by 10%.
    // After 10 interactions the square becomes fully transparent,
    // revealing the black grid background.
    square.style.opacity = 1 - (interactions * 0.1);
}

function createGrid(size) {
    container.innerHTML = "";

    var squareSize = 100 / size;

    for (var i = 0; i < size * size; i++) {
        var square = document.createElement("div");

        square.className = "grid-square";
        square.style.width = squareSize + "%";
        square.style.height = squareSize + "%";
        square.setAttribute("data-interactions", "0");

        square.addEventListener("mouseenter", function () {
            handleSquareInteraction(this);
        });

        container.appendChild(square);
    }

    currentSize = size;
    gridInfo.textContent = size + " × " + size;
}

newGridBtn.addEventListener("click", function () {
    var input = prompt(
        "Enter the number of squares per side (maximum 100):",
        currentSize
    );

    if (input === null) {
        return;
    }

    input = input.trim();

    if (input === "") {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    var size = Number(input);

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(size);
});

clearBtn.addEventListener("click", function () {
    createGrid(currentSize);
});

createGrid(16);
