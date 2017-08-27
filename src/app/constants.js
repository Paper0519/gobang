const USERS_TYPE = {
    BLACK: 'black',
    WHITE: 'white'
};

const USERS_MAP = {
    [USERS_TYPE.BLACK]: '黑子',
    [USERS_TYPE.WHITE]: '白子'
};

const BOARD_SIZE = [15, 15];

const getChessboard = () => {
    let chessboard = [];
    const [x_num, y_num] = BOARD_SIZE;
    for (let x = 0; x < x_num; x++) {
        let chessboard_x = [];
        for (let y = 0; y < y_num; y++) {
            chessboard_x.push('');
        }
        chessboard.push(chessboard_x);
    }
    return chessboard;
};

const checkWinner = (x, y, winners) =>
    winners.some(([w_x, w_y]) => w_x === x && w_y === y)

const getWinnerPointers = (pointer, user, chessboard) => {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [1, -1], [1, 0], [1, 1],
        [0, -1], [0, 1]
    ];
    const [board_x, board_y] = BOARD_SIZE;
    const [x, y] = pointer;
    let pointers = [];
    const is_win = directions.some(dir => {
        pointers = [pointer];
        const max_x = x + dir[0] * 4;
        const max_y = y + dir[1] * 4;
        if (max_x > board_x || max_x < 0
            || max_y > board_y || max_y < 0) {
            return false;
        }
        for (let i = 1; i < 5; i++) {
            const temp_x = x + dir[0] * i;
            const temp_y = y + dir[1] * i;
            pointers.push([temp_x, temp_y]);
        }
        return pointers.every(p => chessboard[p[0]][p[1]] === user);
    });
    return is_win ? pointers : [];
};


export {
    USERS_TYPE,
    USERS_MAP,
    BOARD_SIZE,
    getChessboard,
    checkWinner,
    getWinnerPointers
};