
export function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            console.log('Up arrow key pressed');
            break;
        case 'ArrowDown':
            console.log('Down arrow key pressed');
            break;
        case 'ArrowLeft':
            console.log('Left arrow key pressed');
            break;
        case 'ArrowRight':
            console.log('Right arrow key pressed');
            break;
        case 'q':
        case 'Q':
            console.log('Q key pressed');
            break;
        case 'w':
        case 'W':
            console.log('W key pressed');
            break;
        case 'e':
        case 'E':
            console.log('E key pressed');
            break;
        case 'r':
        case 'R':
            console.log('R key pressed');
            break;
        default:
            console.log('Key pressed:', event.key);
    }
}

