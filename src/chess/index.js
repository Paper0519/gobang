import React, { PropTypes } from 'react';
import './index.css'

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
            <li
                data-x={ x }
                data-y={ y }
                className={ `${ user }${ is_win ? ' win' : ''  }` }
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
