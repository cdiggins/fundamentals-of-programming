//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
import React, { useRef } from 'react'

const Canvas = props => {
  
  const { ...rest } = props
  const canvasRef = useRef(null)
  
  return <canvas id="drawingCanvas" ref={canvasRef} {...rest}/>
}

export default Canvas