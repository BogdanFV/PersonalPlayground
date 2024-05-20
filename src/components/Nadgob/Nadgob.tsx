import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import useKeyDownHandler from '../../app/hooks/useKeyDownHandler';
import './Nadgob.scss';

const Nadgob: React.FC = () => {
  const { x, y } = useSelector((state: RootState) => state.coordinates);
  useKeyDownHandler();

  return (
    <div className="Nadgob Character"  style={{ position: 'absolute', top: `${y}px`, left: `${x}px` }}>
    </div>
  );
};

export default Nadgob;
