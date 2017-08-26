import React from 'react';
import Chess from '../chess';
import './index.css';

import { USERS_TYPE, USERS_MAP, BOARD_SIZE, CHESSBOARD } from './constants';

const checkWinner = (x, y, winners) => {
    return winners.some(([w_x, w_y]) => w_x === x && w_y === y);
}

const getWinnerPointers = (pointer, user, chessboard) => {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [1, -1], [1, 0], [1, 1],
        [0, -1], [0, 1]
    ];
    const [board_x, board_y] = BOARD_SIZE;
    const [x, y] = pointer;
    let pointers = [];
    const is_win = directions.some(dir => {
        pointers = [pointer];
        const max_x = x + dir[0] * 4;
        const max_y = y + dir[1] * 4;
        if (max_x > board_x || max_x < 0
            || max_y > board_y || max_y < 0) {
            return false;
        }
        for (let i = 1; i < 5; i++) {
            const temp_x = x + dir[0] * i;
            const temp_y = y + dir[1] * i;
            pointers.push([temp_x, temp_y]);
        }
        return pointers.every(p => chessboard[p[0]][p[1]] === user);
    });
    return is_win ? pointers : [];
};

const INIT_STATE = {
    chessboard: CHESSBOARD,
    result: [],
    winner_pointers: [],
    current_user: USERS_TYPE.BLACK
};

class ChessBoard extends React.Component {
    constructor() {
        super();
        this.onChoose = this.onChoose.bind(this);
        this.state = INIT_STATE;
    }

    onChoose(x, y) {
        const { current_user, winner_pointers, chessboard, result } = this.state;
        if (winner_pointers.length) {
            return false;
        }
        chessboard[x][y] = current_user;
        result.push([x, y]);
        const check_winner_result = getWinnerPointers([x, y], current_user, chessboard);
        this.setState({
            current_user: this.toggleUser(),
            winner_pointers: check_winner_result,
            result,
            chessboard
        });
    }

    toggleUser() {
        const { current_user } = this.state;
        return current_user === USERS_TYPE.BLACK ? USERS_TYPE.WHITE : USERS_TYPE.BLACK;
    }

    renderChess() {
        const { winner_pointers } = this.state;
        return this.state.chessboard.map((chess_x, x) => (
            chess_x.map((chess, y) => (
                <Chess
                    key={ `chess-${x}-${y}` }
                    x={ x }
                    y={ y }
                    user={ chess }
                    is_win={ checkWinner(x, y, winner_pointers) }
                    onChoose={ this.onChoose }/>
            ))
        ));
    }

    render() {
        return (
            <div>
                <ul className="chessboard">    
                    {
                        this.renderChess()
                    }
                </ul>    
            </div>
        );
    }

}

export default ChessBoard;