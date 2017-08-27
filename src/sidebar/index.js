import React, { PropTypes } from 'react';
import { USERS_MAP } from '../app/constants';

import './index.css';

const Sidebar = ({ show, current_user, back, can_back }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="sidebar">
            <span>请{USERS_MAP[current_user]}下棋</span>
            {
                can_back ?
                    <a onClick={back}>悔棋</a> : null
            }
        </div>
    );
};

Sidebar.propTypes = {
    show: PropTypes.bool.isRequired,
    can_back: PropTypes.bool.isRequired,
    current_user: PropTypes.string.isRequired,
    back: PropTypes.func.isRequired
};

export default Sidebar;