import React from 'react';
import Cousins from './Cousins';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousins asset={asset} name="Tom Tom"></Cousins>
                <Cousins name="Jo Jojo"></Cousins>
            </section>
        </div>
    );
};

export default Aunt;