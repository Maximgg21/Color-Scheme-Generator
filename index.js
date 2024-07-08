const inputColor = document.querySelector("input[type=color]");
const modeSelector = document.querySelector("select");
const colorBoxes = document.getElementsByClassName("color-box");
const colorCodes = document.getElementsByClassName("color-code");

document.querySelector("button").addEventListener("click", function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor.value.substring(1)}&mode=${modeSelector.value}`)
        .then(response => response.json())
        .then(data => {
            data.colors.forEach( (color, index) => {
                colorBoxes[index].style.background = color.hex.value;
                colorCodes[index].textContent = color.hex.value.toUpperCase();
            });
        });
})

document.body.addEventListener("click", function(e) {
    if (e.target.dataset.color) {
        [...colorCodes].forEach( (colorCode) => {
            if (e.target.dataset.color === colorCode.dataset.color) {
                navigator.clipboard.writeText(colorCode.textContent);
                alert(`${colorCode.textContent} copied!`);
            }
        })
    }
})