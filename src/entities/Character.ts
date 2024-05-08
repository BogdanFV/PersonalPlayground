class Character {
    private x: number;
    private y: number;
    private level: number;

    constructor(x: number, y: number, level: number) {
        this.x = x;
        this.y = y;
        this.level = level;
    }

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    getCoordinates(): [number, number] {
        return [this.x, this.y];
    }

    getLevel(): number {
        return this.level;
    }
}

export default Character;
