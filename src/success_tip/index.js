import React from 'react';
import { PropTypes } from 'prop-types';
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

const SuccessTip = ({ show, children }) => {
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

SuccessTip.propTypes = {
    show: PropTypes.bool.isRequired
};

export default SuccessTip;