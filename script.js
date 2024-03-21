
// let history = [];

// const colorPicker = document.getElementById('colorPicker');
// const canvasColor = document.getElementById('canvasColor');
// const canvas = document.getElementById('myCanvas');

// const clearButton = document.getElementById('clearButton');
// const saveButton = document.getElementById('saveButton');
// const fontPicker = document.getElementById('fontPicker');

// const fontSizePicker = document.getElementById('fontSizePicker'); // add new element


// let context = canvas.getContext('2d');

// colorPicker.addEventListener('change', (event) => {
//     context.fillStyle = event.target.value;
//     context.strokeStyle = event.target.value;
// });

// canvasColor.addEventListener('change', (event) => {
//     context.fillStyle = event.target.value;
//     context.fillRect(0, 0, 800, 500);
// });

// canvas.addEventListener('mousedown', (event) => {
//     isDrawing = true;
//     lastX = event.offsetX;
//     lastY = event.offsetY;
// });

// canvas.addEventListener('mousemove', (event) => {
//     if (isDrawing) {
//         context.beginPath();
//         context.moveTo(lastX, lastY);
//         context.lineTo(event.offsetX, event.offsetY);
//         context.stroke();

//         lastX = event.offsetX;
//         lastY = event.offsetY;
//     }
// });

// canvas.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
// });

// canvas.addEventListener('mouseup', () => {
//     isDrawing = false;
// });

// fontSizePicker.addEventListener('change', (event) => {
//     context.lineWidth = event.target.value;
//     // context.font = `${fontPicker.value} ${event.target.value}px`;
// });

// clearButton.addEventListener('click', () => {
//     // Clear the canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);
// })

// // Add event listener for the save button
// saveButton.addEventListener('click', () => {
//     localStorage.setItem('canvasContents', canvas.toDataURL());
//     // Create a new <a> element
//     let link = document.createElement('a');

//     // Set the download attribute and the href attribute of the <a> element
//     link.download = 'signature.png';
//     link.href = canvas.toDataURL();

//     // Dispatch a click event on the <a> element
//     link.click();
// });

// // Add event listener for the retrieve button
// retrieveButton.addEventListener('click', () => {
//     // Retrieve the saved canvas contents from local storage
//     let savedCanvas = localStorage.getItem('canvasContents');

//     if (savedCanvas) {
//         let img = new Image();
//         img.src = savedCanvas;
//         context.drawImage(img, 0, 0);
//     }
// });


//New Code

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const canvas = document.getElementById('myCanvas');

const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');
const fontSizePicker = document.getElementById('fontSizePicker');

let context = canvas.getContext('2d');

colorPicker.addEventListener('change', (event) => {
    context.fillStyle = event.target.value;
    context.strokeStyle = event.target.value;
});

canvasColor.addEventListener('change', (event) => {
    context.fillStyle = event.target.value;
    context.fillRect(0, 0, 800, 500);
});

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

canvas.addEventListener('touchstart', (event) => {
    isDrawing = true;
    lastX = event.touches[0].pageX - canvas.offsetLeft;
    lastY = event.touches[0].pageY - canvas.offsetTop;
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        drawLine(lastX, lastY, event.offsetX, event.offsetY);
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
});

canvas.addEventListener('touchmove', (event) => {
    if (isDrawing) {
        drawLine(lastX, lastY, event.touches[0].pageX - canvas.offsetLeft, event.touches[0].pageY - canvas.offsetTop);
        lastX = event.touches[0].pageX - canvas.offsetLeft;
        lastY = event.touches[0].pageY - canvas.offsetTop;
    }
});

canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('touchend', () => {
    isDrawing = false;
});

fontSizePicker.addEventListener('change', (event) => {
    context.lineWidth = event.target.value;
});

clearButton.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContents', canvas.toDataURL());
    let link = document.createElement('a');
    link.download = 'signature.png';
    link.href = canvas.toDataURL();
    link.click();
});

retrieveButton.addEventListener('click', () => {
    let savedCanvas = localStorage.getItem('canvasContents');
    if (savedCanvas) {
        let img = new Image();
        img.src = savedCanvas;
        context.drawImage(img, 0, 0);
    }
});

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

