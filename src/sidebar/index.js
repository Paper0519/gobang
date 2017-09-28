//@flow

import React from 'react';
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

type Props = {
    show: boolean,
    can_back: boolean,
    current_user: string,
    back: Function
};

const Sidebar = ({ show, current_user, back, can_back }: Props) => {
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

export default Sidebar;