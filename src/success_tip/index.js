import React, { PropTypes } from 'react';
import './index.css';

const SuccessTip = ({ show, children }) => {
    if (!show) {
        return null;
    }
    return (
        <div className="success-tip">
            <div className="shade" />
            <div className="content">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

SuccessTip.propTypes = {
    show: PropTypes.bool.isRequired
};

export default SuccessTip;