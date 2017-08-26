const USERS_TYPE = {
    BLACK: 'black',
    WHITE: 'white'
};

const USERS_MAP = {
    [USERS_TYPE.BLACK]: '黑子',
    [USERS_TYPE.WHITE]: '白子'
};

const BOARD_SIZE = [15, 15];

const CHESSBOARD = (() => {
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
})();

export {
    USERS_TYPE,
    USERS_MAP,
    BOARD_SIZE,
    CHESSBOARD
};