//@flow

import React from 'react';
import styled from 'styled-components';

const Shade = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .6);
    z-index: 999;
`;

const Content = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -50px;
    width: 150px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: #fff;
    z-index: 1000;
`;
const Article = styled.article`
    display: inline-block;
    line-height: 1.5em;
    vertical-align: middle;
`;

type Props = {
    show: boolean,
    children: React.DOM
}

const SuccessTip = ({ show, children }: Props) => {
    if (!show) {
        return null;
    }
    return (
        <div>
            <Shade/>
            <Content>
                <Article>
                    {children}
                </Article>
            </Content>
        </div>
    );
};

export default SuccessTip;