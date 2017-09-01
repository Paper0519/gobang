import React, { PropTypes } from 'react';
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

class Chess extends React.Component {
    constructor() {
        super();
        this.onChoose = this.onChoose.bind(this);
        this.state = {};
    }
    onChoose(e) {
        if (this.props.user) {
            return false;
        }
        const { x, y } = e.target.dataset;
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

Chess.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    is_win: PropTypes.bool.isRequired,
    onChoose: PropTypes.func.isRequired
};

export default Chess;
