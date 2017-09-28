//@flow

import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
    cursor: pointer;
    &:before {
        display: inline-block;
        content: '';
        width: ${({ is_win }) => is_win ? '70%' : '60%' };
        height: 60%;
        border-radius: 50%;
        vertical-align: middle;
        transition: width .5s, height .5s;
        background-color: ${({ user }) => user}
    }
`;

type Props = {
    x: number,
    y: number,
    user: string,
    is_win: boolean,
    onChoose: Function
};

type State = {
    
}

class Chess extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {};
    }
    onChoose(e: SyntheticEvent<HTMLButtonElement>) {
        if (this.props.user) {
            return false;
        }
        const { x, y } = e.currentTarget.dataset;
        this.props.onChoose(Number(x), Number(y));
    }
    render() {
        const { x, y, is_win, user } = this.props;
        return (
            <Li
                data-x={ x }
                data-y={y}
                is_win={is_win}
                user={ user }
                onClick={ this.onChoose } />
            );
    }  
}

export default Chess;
