import React from 'react';
import { BOARD_SIZE } from '../app/constants';
import './index.css';

const Chessboard = () => {
    const [x, y] = BOARD_SIZE;
    let chess = [];
    for (let i = 0; i < x - 1; i++) {
        for (let j = 0; j < y - 1; j++) {
            chess.push(
                <li
                    key={`square-${i}-${j}`} />
            )
        }
    }
    return <ul className="real-chessboard">{ chess }</ul>;
};

export default Chessboard;