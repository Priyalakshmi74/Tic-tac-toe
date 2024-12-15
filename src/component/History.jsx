import React from 'react';

export const History = ({ history, jumpToMove }) => {
    if (history.length <= 1) {
        return null;
    }

    return (
        <div className="history">
            <h2>History</h2>
            {history.map((_, move) => (
                <button className="history-item" key={move} onClick={() => jumpToMove(move)}>
                    Go to move #{move}
                </button>
            ))}
        </div>
    );
};