import React from 'react';
import Special from './Special';

const Cousins = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Tom Tom" && <Special asset={asset}></Special>
            }
        </div>
    );
};

export default Cousins;