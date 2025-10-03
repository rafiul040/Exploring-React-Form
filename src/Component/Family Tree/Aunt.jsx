import React, { use } from 'react';
import Cousins from './Cousins';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {

    const [money, setMoney] = use(MoneyContext)

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousins asset={asset} name="Tom Tom"></Cousins>
                <Cousins name="Jo Jo"></Cousins>
                <button onClick={() => setMoney(money + 5000)}>Add 5000</button>
            </section>
        </div>
    );
};

export default Aunt;