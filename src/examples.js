const examples = { 
    helloWorld:
`writeLine("Hello world!");`,

    askName: 
`function whatIsYourName()
{
    const name = prompt("What is your name?");
    alert("Hello " + name + ", pleased to meet you!");    
}

whatIsYourName();
`,
    drawHouse: 
`function drawHouse() 
{    
    // Set line width
    ctx.lineWidth = 10;
    
    // Wall
    ctx.strokeRect(75, 140, 150, 110);
    
    // Door
    ctx.fillRect(130, 190, 40, 60);
    
    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
}

drawHouse();`,

drawHouseWithVars: 
`function drawHouseWithVars() 
{    
    // Set line width
    ctx.lineWidth = 10;
    
    // Wall
    const left = 75;
    const bottom = 140;
    const width = 150;
    const height = 110;
    ctx.strokeRect(left, bottom, width, height);
    
    // Door
    const doorLeft = 130;
    const doorBottom = 190;
    const doorWidth = 40;
    const doorHeight = 60;
    ctx.fillRect(doorLeft, doorBottom, doorWidth, doorHeight);
    
    // Roof
    ctx.beginPath();
    const roofLeft = 50;
    const roofBottom = 140;
    ctx.moveTo(roofLeft, roofBottom);
    const roofMiddle = 150;
    const roofTop = 60;
    ctx.lineTo(roofMiddle, roofTop);
    const roofRight = 250;
    ctx.lineTo(roofRight, roofBottom);
    ctx.closePath();
    ctx.stroke();
}

drawHouseWithVars();`,


drawHouseWithArgs: 
`function drawHouse(left, bottom, width, height) 
{    
    // Set line width
    ctx.lineWidth = 10;
    
    // Wall
    ctx.strokeRect(left, bottom, width, height);
    
    // Door
    const doorLeft = 130;
    const doorBottom = 190;
    const doorWidth = 40;
    const doorHeight = 60;
    ctx.fillRect(doorLeft, doorBottom, doorWidth, doorHeight);
    
    // Roof
    ctx.beginPath();
    const roofLeft = 50;
    const roofBottom = 140;
    ctx.moveTo(roofLeft, roofBottom);
    const roofMiddle = 150;
    const roofTop = 60;
    ctx.lineTo(roofMiddle, roofTop);
    const roofRight = 250;
    ctx.lineTo(roofRight, roofBottom);
    ctx.closePath();
    ctx.stroke();
}

drawHouse(75, 140, 150, 110);`,

    pythagoras: 
`// This example demonstrates 
// - Writing a function
// - Using the Math object 
// - String interpolation
// - Variable declaration

function hypoteneuse(a, b)
{
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
    return Math.sqrt(a * a + b * b);
}

const a = 4;
const b = 5;
const h = hypoteneuse(a, b);

writeLine(\`A right triangle with sides\`);
writeLine(\`\${a} and \${b} has a\`);
writeLine(\`hypoteneuse of \${h}\`);
`,

functions: 
`function listFunctions(obj) 
{    
    writeLine(\`The functions available on the object which has type \${typeof obj} are\`);
    for (var m in obj) {
        if (typeof obj[m] == "function") {
            writeLine(m);
        }
    }
}

listFunctions(ctx);
`
/*
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
*/
};

export default examples;