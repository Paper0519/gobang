import React from 'react';
import { BOARD_SIZE } from '../app/constants';
import styled from 'styled-components';

const Ul = styled.ul`
    position: absolute;
    top: 25px;
    left: 25px;
    width: 700px;
    height: 700px;
    border-top: 1px solid #000;
    background-color: #f5ad45;
    z-index: 1;
`;

const Li = styled.li`
    border: 1px solid #000;
    border-width: 0 1px 1px 0;
    &:nth-child(14n-13) {
        border-left-width: 1px;
    }
`;

const Chessboard = () => {
    const [x, y] = BOARD_SIZE;
    let chess = [];
    for (let i = 0; i < x - 1; i++) {
        for (let j = 0; j < y - 1; j++) {
            chess.push(
                <Li
                    key={`square-${i}-${j}`} />
            )
        }
    }
    return <Ul>{ chess }</Ul>;
};

export default Chessboard;