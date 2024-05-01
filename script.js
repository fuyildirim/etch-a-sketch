const divContainer = document.querySelector('.container');

function createRow(num) {

    for (let i = 1; i <= num; i++ ) {
    
    const rowContainer = document.createElement('div');
    rowContainer.className = "row";
    rowContainer.setAttribute("id", "row" + i);
        

    const docFrag = document.createDocumentFragment();
    for (let i = 1; i <= num; i++) {
        const divSquare = document.createElement('div');
        divSquare.className = "square";
        docFrag.appendChild(divSquare)
    }

    rowContainer.append(docFrag);
    divContainer.appendChild(rowContainer);
    }
}



grid = parseInt(prompt("Enter a number: (10-250)", ""))
if (grid > 250 || !grid) {
    alert("Must be between 1-250")
    window.location.reload()
}

createRow(grid);

document.querySelectorAll(".square").forEach(elem => elem.addEventListener("mouseover", function() {
    elem.style.backgroundColor = "black";
}))

function reload() {
    window.location.reload();
}