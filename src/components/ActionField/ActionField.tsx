import React  from 'react';
import Ground from '../Ground/Ground';
import Nadgob from '../Nadgob/Nadgob';

import { useAppSelector } from '../../app/hooks/supportHooks';
import { gameStatus } from '../Header/headerSlice';


const ActionField: React.FC = () => {
    const isGameStarted = useAppSelector(gameStatus);

    return (
        <div className="ActionField">
            <Ground />
            {isGameStarted && <Nadgob />}
        </div>
    );
}

export default ActionField;
