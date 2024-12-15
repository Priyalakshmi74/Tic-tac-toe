import React from 'react';

function Square({index, squares,handleSquareClick}) {
    return (
        <button
            className="square"
            onClick={() => handleSquareClick(index)}
        >
            {squares[index]}
        </button>
    );
}

export default Square;