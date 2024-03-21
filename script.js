
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

let history = [];

const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const canvas = document.getElementById('myCanvas');

const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const fontPicker = document.getElementById('fontPicker'); // (if used)

const fontSizePicker = document.getElementById('fontSizePicker');

let context = canvas.getContext('2d');

// Set initial line width based on device type (optional)
let lineWidth = isMobile() ? 5 : 2; // Adjust values as needed
context.lineWidth = lineWidth;

function isMobile() {
  // You can use a library like https://www.npmjs.com/package/is-mobile-js to detect mobile devices
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

colorPicker.addEventListener('change', (event) => {
    context.fillStyle = event.target.value;
    context.strokeStyle = event.target.value;
});

canvasColor.addEventListener('change', (event) => {
    context.fillStyle = event.target.value;
    context.fillRect(0, 0, canvas.width, canvas.height);
});

// Use touch events for mobile devices
canvas.addEventListener('touchstart', (event) => {
    isDrawing = true;
    lastX = event.touches[0].offsetX;
    lastY = event.touches[0].offsetY;
});

canvas.addEventListener('touchmove', (event) => {
    if (isDrawing) {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(event.touches[0].offsetX, event.touches[0].offsetY);
        context.stroke();

        lastX = event.touches[0].offsetX;
        lastY = event.touches[0].offsetY;
    }
});

canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

canvas.addEventListener('touchend', () => {
    isDrawing = false;
});

fontSizePicker.addEventListener('change', (event) => {
    context.lineWidth = event.target.value;
    // context.font = `${fontPicker.value} ${event.target.value}px`;  // (if used)
});

// Resize canvas on load and window resize events
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

clearButton.addEventListener('click', () => {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
})

// Add event listener for the save button (unchanged)
saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContents', canvas.toDataURL());
    // Create a new <a> element
    let link = document.createElement('a');

    // Set the download attribute and the href attribute of the <a> element
    link.download = 'signature.png';
    link.href = canvas.toDataURL();

    // Dispatch a click event on the <a> element
    link.click();
});


