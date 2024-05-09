import React  from 'react';
import Ground from '../exterior/Ground';
import Nadgob from '../characters/Nadgob';

import { useDispatch, useSelector } from 'react-redux';
import { startGame } from '../../scripts/actions';


const ActionField: React.FC = () => {
    // const dispatch = useDispatch();
    const isGameStarted = useSelector((state: any) => state.isGameStarted);


    return (
        <div id="ActionField" className="ActionField">
            <Ground />
            {isGameStarted && <Nadgob />}
            
        </div>
    );
}

export default ActionField;
