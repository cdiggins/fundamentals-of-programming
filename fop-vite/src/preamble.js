// These are the globals and code that is executed when the user presses "run"
const preamble = `
function checkType(obj, typeName)
{
    const actualType = typeof(obj);
    if (actualType != typeName)
        throw new Error(\`Type error, expected a value of type '\${typeName}' but instead was type '\${actualType}'\`);
}

function getDrawingContext() 
{
    const canvases = document.getElementsByTagName('canvas');
    if (canvases == null || !canvases.length)
        throw new Error('Could not find any canvas');
    return canvases[0].getContext('2d');
}

// The global variables
const ctx = getDrawingContext();
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
ctx.font = "14px serif";
ctx.strokeStyle = "blue";
ctx.textBaseline = "top";
let textCursor = { x:0, y:0 };
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let textMetrics = ctx.measureText(alphabet);
let lineHeight = textMetrics.fontBoundingBoxAscent + textMetrics.fontBoundingBoxDescent;

// Functions which manipulate the global variables
function write(text)
{
    console.log(textCursor);
    if (text != undefined)
    {        
        ctx.fillText(text, textCursor.x, textCursor.y);
        textCursor.x += ctx.measureText(text).width;
    }
    console.log(textCursor);
}

function writeLine(text)
{
    write(text);
    textCursor.x = 0;
    textCursor.y += lineHeight;
    console.log(textCursor);
}
`;

export default preamble;