/**
 * Board is made up of individual spaces where each space represents a DOM element
 */
class Board {
    constructor(){
        this.rows = 3;
        this.cols = 3;
        this.spaces = this.createSpaces();
    }

    /**
     * Create obects to represent spaces on the board
     * @return {array} spaces - array of Space objects
     */
    createSpaces(){
        const spaces = [];
        for (let x = 0; x < this.cols; x++) {
            const col = [];
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                col.push(space);
            }
            spaces.push(col);
        }
        return spaces;
    }

    /**
     * Render the game board using the spaces array of objects
     */
    renderBoard(){
        for (let column of this.spaces) {
            for (let space of column) {
                space.renderSpace();
            }
        }
    }
    
}