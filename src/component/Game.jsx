import Status from "./Status";
import Board from "./Board";
import {History} from "./History";
import {calculateNextValue, calculateWinner} from "../utils";
import {useState} from "react";

function Game() {
    const[squares, setSquares] = useState(Array(9).fill(null));
    const nextValue = calculateNextValue(squares);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const winner = calculateWinner(squares);

    const handleSquareClick = (index) => {
        if(winner || squares[index]!==null) return;
        const newSquares = [...squares];
        newSquares[index] = nextValue;
        setSquares(newSquares);

        setHistory([...history.slice(0, currentMove + 1), newSquares]);
        setCurrentMove(currentMove + 1);
    };

    const jumpToMove = (move) => {
        setCurrentMove(move);
        setSquares(history[move]);
    };

    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Status winner={winner} nextValue={nextValue} squares={squares}/>
            <Board squares={squares} handleSquareClick={handleSquareClick}/>
            <History history={history} jumpToMove={jumpToMove}/>
        </div>
    );
}

export default Game;