import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { moveUp, moveDown, moveLeft, moveRight } from '../../features/coordinatesSlice';


const useKeyDownHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'w':
          dispatch(moveUp());
          break;
        case 's':
          dispatch(moveDown());
          break;
        case 'a':
          dispatch(moveLeft());
          break;
        case 'd':
          dispatch(moveRight());
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);
};

export default useKeyDownHandler;
