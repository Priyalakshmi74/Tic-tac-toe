import React from 'react';

function Status({winner,nextValue,squares}) {
    return (
        <div className="status">
            {winner
                ? `Winner: ${winner}`
                : squares.filter(Boolean).length === 9
                    ? `Scratch: Cat's game`
                    : `Next player: ${nextValue}` }
        </div>
    );
}

export default Status;