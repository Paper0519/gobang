import React from 'react';
import Chess from '../chess';
import Chessboard from '../chessboard';
import SuccessTip from '../success_tip';
import Sidebar from '../sidebar';

import './index.css';

import { USERS_TYPE, USERS_MAP, getChessboard, checkWinner, getWinnerPointers } from './constants';

const getInit = () => ({
    chessboard: getChessboard(),
    result: [],
    winner_pointers: [],
    current_user: USERS_TYPE.BLACK
});

class ChessBoard extends React.Component {
    constructor() {
        super();
        this.onChoose = this.onChoose.bind(this);
        this.back = this.back.bind(this);
        this.reset = this.reset.bind(this);
        this.state = getInit();
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

    back(e) {
        e.preventDefault();
        const { result, chessboard } = this.state;
        const current_user = this.toggleUser();
        const prev_pointer = result.pop();
        const [x, y] = prev_pointer;
        chessboard[x][y] = '';
        this.setState({
            current_user,
            result,
            chessboard
        });
    }

    reset(e) {
        e.preventDefault();
        this.setState(getInit());
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
        const { current_user, winner_pointers, result } = this.state;
        const is_over = winner_pointers.length === 5;

        return (
            <div>
                <SuccessTip show={ is_over }>
                    赢家是{ USERS_MAP[this.toggleUser()] }<span role="img" aria-label="victory">✌️</span><br/>
                    <a onClick={ this.reset }>重新再战<span role="img" aria-label="make an effort">💪</span></a>
                </SuccessTip>
                <Sidebar
                    show={!is_over}
                    current_user={ current_user }
                    back={ this.back }
                    can_back={ result.length }/>
                <div className="chessboard-wrap">
                    <ul className="chessboard">    
                        {
                            this.renderChess()
                        }
                    </ul>
                    <Chessboard/>
                </div>    
            </div>
        );
    }
}

export default ChessBoard;