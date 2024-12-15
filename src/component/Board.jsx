import React, {useState} from 'react';
import Square from "./Square";
import '../style.css';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleSquareClick = (index) => {
        console.log(index);
    };

    const renderSquares = () => {
        return squares.map((square, index) => (
            <Square key={index}
                    index={index}
                    squares={squares}
                    handleSquareClick={handleSquareClick}/>
        ))
    }
    return (
        <div className="board">
            <h1>Tic-Tac-Toe</h1>
            <div className="grid">
                {renderSquares()}
            </div>
        </div>    );
}

export default Board;