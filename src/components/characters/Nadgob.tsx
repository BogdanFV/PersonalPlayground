import React  from 'react';

import './Nadgob.scss'
import { useDispatch, useSelector } from 'react-redux';
import {
  moveCharacterLeft,
  moveCharacterRight,
  moveCharacterUp,
  moveCharacterDown
} from '../../scripts/actions';

const Nadgob: React.FC = () => {
  const dispatch = useDispatch();
  const { x, y } = useSelector((state: any) => ({
    x: state.x,
    y: state.y
  }));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        console.log("left");
        dispatch(moveCharacterLeft());
        break;
      case 'ArrowRight':
        dispatch(moveCharacterRight());
        break;
      case 'ArrowUp':
        dispatch(moveCharacterUp());
        break;
      case 'ArrowDown':
        dispatch(moveCharacterDown());
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="Nadgob Character"
      style={{ left: `${x}px`, top: `${y}px` }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      Character
    </div>
  );
};

export default Nadgob;
