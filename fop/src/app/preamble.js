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

function clearCanvas()
{
    const ctx = getDrawingContext();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)    
};

clearCanvas();
`;

export default preamble;