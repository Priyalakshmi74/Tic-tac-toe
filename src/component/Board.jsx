import React from 'react';
import Square from "./Square";
import '../style.css';


function Board({squares,handleSquareClick}) {
    const renderSquares = () => {
        return squares.map((square,index)=>(
            <Square key={index}
                    index={index}
                    squares={squares}
                    handleSquareClick={handleSquareClick}/>
        ))
    }
    return (
        <div className="grid">
            {renderSquares()}
        </div>
    );
}

export default Board;