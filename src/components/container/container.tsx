import React,{ReactNode} from 'react';
import './container.css';

const container = (parameters:{children?:ReactNode}): React.ReactNode => {
    return (
        <div className="container-root">
            {parameters.children}
        </div>
    );
};

export default container;