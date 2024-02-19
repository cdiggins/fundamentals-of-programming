const examples = { 
    
    drawHouse: 
`function drawHouse() 
{    
    const ctx = getDrawingContext();

    // Draw the house body
    ctx.fillStyle = '#FFA07A'; // Light Salmon color
    ctx.fillRect(75, 140, 150, 110); // Draw rectangle for the house body

    // Draw the roof
    ctx.beginPath();
    ctx.moveTo(50, 140); // The left point of the roof
    ctx.lineTo(150, 60); // The top point of the roof
    ctx.lineTo(250, 140); // The right point of the roof
    ctx.closePath();
    ctx.fillStyle = '#8B4513'; // SaddleBrown color
    ctx.fill();

    // Draw the door
    ctx.fillStyle = '#654321'; // DarkBrown color
    ctx.fillRect(130, 190, 40, 60); // Draw rectangle for the door
}

drawHouse();`,
    expressions: ``,
    booleans: ``,
    hexadecimal: ``,
    types: ``,    
    variables: ``,
    strings: ``,
    math: ``,
    drawing: ``,
    loops: ``,
    arrays: ``,
    objects: ``,
    assignment: ``,
    functions: ``,
    conditionals: ``,
    interpolation: ``,
    sorting: ``,
};

export default examples;