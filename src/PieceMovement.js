const isValidPosition = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

const positionToIndex = (pos) => {
    const col = pos.charAt(0) - 'A'.charCodeAt(0);
    const row = 8 - parseInt(pos[1], 10);
    return [row, col];
}

const indexToPosition = (x, y) => {
    const col = String.fromCharCode('A'.charCodeAt(0) + y);
    const row = (8 - x).toString();
    return `${col}${row}`;
}

const getBlockedPosition = () => {
    const storedBlocks = JSON.parse(localStorage.getItem('blockedPositions'));
    return storedBlocks || {};
}

const setBlockedPositions = (blockedPositions) => {
    localStorage.setItem('blockedPositions', JSON.stringify(blockedPositions))
}

export const getPawnMoves = (position, isWhite) => {
    const [x, y] = positionToIndex(position);
    const moves = [];

    const direction = isWhite ? -1 : 1;

    if (isValidPosition(x + direction, y)) {
        moves.push(indexToPosition(x+direction, y));
    }

    if (isValidPosition(x + direction, y - 1)) {
        moves.push(indexToPosition(x + direction, y - 1));
    }

    if (isValidPosition(x + direction, y + 1)) {
        moves.push(indexToPosition(x + direction, y + 1));
    }

    return moves;
}

export const getRookMoves = (position) => {
    const [x, y] = positionToIndex(position);
    const moves = [];

    for (let i = 0; i < 8; i++) {
        if (i !== x) moves.push(indexToPosition(i, y));
        if (i !== y) moves.push(indexToPosition(x, i));
    }

    return moves;
}

export const getKnightMoves = (position) => { 
    const [x, y] = positionToIndex(position);
    const moves = [];

    const knightMoves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2],
    ];

    knightMoves.forEach(([newX, newY]) => {
        if (isValidPosition(newX, newY)) {
            moves.push(indexToPosition(newX, newY))
        }
    });

    return moves;
}

export const getBishopMoves = (position) => {
    const [x, y] = positionToIndex(position);
    const moves = [];

    for (let i = 1; i < 8; i++) {

        if (isValidPosition(x + i, y + i))
            moves.push(indexToPosition(x + i, y + i))
        
        if (isValidPosition(x + i, y - i))
            moves.push(indexToPosition(x + i, y - i))
        
        if (isValidPosition(x - i, y + i))
            moves.push(indexToPosition(x - i, y + i))
        
        if (isValidPosition(x - i, y - i))
            moves.push(indexToPosition(x-i,y-i))
    }

    return moves;
}

export const getQueenMoves = (position) => {
    return [...getRookMoves(position), ...getBishopMoves(position)];
}

export const getKingMoves = (position) => { 
    const [x, y] = positionToIndex(position);
    const moves = [];

    const kingMoves = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
        [x + 1, y + 1],
        [x + 1, y - 1],
        [x - 1, y + 1],
        [x - 1, y - 1],
    ];

    kingMoves.forEach(([newX, newY]) => {
        if (isValidPosition(newX, newY)) {
            moves.push(indexToPosition(newX, newY));
        }
    })

    return moves;
}

let archerMoveCounts = {};

export const getArcherMoves = (position) => {
    const blockedPositions = getBlockedPosition();
    if (blockedPositions[position]) {
        return [];
    }

    if (!archerMoveCounts[position]) { 
        archerMoveCounts[position] = 0;
    }

    const isBishopMove = blockedPositions[position] % 2 === 0;
    const moves = isBishopMove ? getBishopMoves(position) : getRookMoves(position);

    return moves;
}

export const incrementArcherMoveCount = (position) => { 
    if (!archerMoveCounts[position]) {
        archerMoveCounts[position] = 0;
    }

    archerMoveCounts[position] += 1;

    const blockedPositions = getBlockedPosition();
    blockedPositions[position] = archerMoveCounts[position] % 2 === 0 ? 'bishop' : 'rook';
    setBlockedPositions(blockedPositions);
}