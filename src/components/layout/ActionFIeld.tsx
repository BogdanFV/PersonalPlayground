import React  from 'react';
import Ground from '../exterior/Ground';
import Nadgob from '../characters/Nadgob';

import { useSelector } from 'react-redux';


const ActionField: React.FC = () => {
    const isGameStarted = useSelector((state: any) => state.gameReducer.isGameStarted);

    return (
        <div id="ActionField" className="ActionField">
            <Ground />
            {isGameStarted && <Nadgob />}
        </div>
    );
}

export default ActionField;
