import React from 'react';
import { PropTypes } from 'prop-types';
import { USERS_MAP } from '../app/constants';

import styled from 'styled-components';

const DIV = styled.div`
    width: 700px;
    padding: 0 25px;
    margin: 0 auto;
    text-align: left;
    overflow: hidden;
`;

const Span = styled.span`
    float: left;
`;

const Link = styled.a`
    float: right;
`;

const Sidebar = ({ show, current_user, back, can_back }) => {
    if (!show) {
        return null;
    }
    return (
        <DIV>
            <Span>请{USERS_MAP[current_user]}下棋</Span>
            {
                can_back ?
                    <Link onClick={back}>悔棋</Link> : null
            }
        </DIV>
    );
};

Sidebar.propTypes = {
    show: PropTypes.bool.isRequired,
    can_back: PropTypes.bool.isRequired,
    current_user: PropTypes.string.isRequired,
    back: PropTypes.func.isRequired
};

export default Sidebar;