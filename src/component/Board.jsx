import React, {useState} from 'react';
import Square from "./Square";
import '../style.css';
import {calculateNextValue, calculateWinner} from "../utils";
import Status from "./Status";


function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const nextValue = calculateNextValue(squares);
    const winner = calculateWinner(squares);

    const handleSquareClick = (index) => {
        if (winner || squares[index] !== null) return;

        const newSquares = [...squares];
        newSquares[index] = nextValue;
        setSquares(newSquares);

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
            <Status winner={winner} nextValue={nextValue} squares={squares}/>
            <div className="grid">
                {renderSquares()}
            </div>
        </div>    );
}

export default Board;