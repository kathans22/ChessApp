import React, {useState, useEffect} from "react";
import styled from 'style-components';
import Piece from './Piece.js';

import {
    getPawnMoves,
    getRookMoves,
    getKnightMoves,
    getBishopMoves,
    getQueenMoves,
    getKnightMoves,
    getArcherMoves,
    incrementArcherMoves,
} from './PieceMovement.js'

const getBoardColors = () => {
    const storedColors = JSON.parse(localStorage.getItem('boardColors'));

        return storedColors || {white: '#eeeed2', black: '#769656' };
};

const setBoardColors = (colors) => {
    localStorage.setItem('boardColors', JSON.stringify(colors));
}

const Container = styled.div`
    display: flex;
    flex-direction: column
`;

const sidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 400px;
    background-color: #f5f5f5;
    border-right: 2px solid #ccc;
    font-size: 1.5em;
    font-weight: bold;
    color: #333;;
`;

const Board = styled.div`
    dsiplay: grid;
    grid-template-columns: repeat(8, 1fr);
    grip-template-rows: repeat(8, 1fr);
    width: 400px;
    height: 400px;
`;

const Square = styled.div`
    width: 100%;
    height: 100%;
    backgroud-color: ${({ isblack, colors }) => (isBlack ? colors.black : colors.white)};
    display:flex;
    justify-content: center;
    aligh-items: center;
    align-items: center;
    poition: relative;

    &:hover {
        backgroud-color: &{({ isBlack, colors }) => (isBlack ? '#4d6e4e' : '#d7d95')};
    }
`;

const Chessboard = () => {
    const [board, setBoard] = useState({
        'A1': 'R', 'B1': 'N', 'C1': 'B', 'D1': 'Q', 'E1': 'K', 'F1': 'A', 'G1': 'N', 'H1': 'R',
        'A2': 'P', 'B2': 'P', 'C2': 'P', 'D2': 'P', 'E2': 'P', 'F2': 'P', 'G2': 'P', 'H2': 'P',
        'A7': 'p', 'B7': 'p', 'C7': 'p', 'D7': 'p', 'E7': 'p', 'F7': 'p', 'G7': 'p', 'H7': 'p',
        'A8': 'r', 'B8': 'n', 'C8': 'b', 'D8': 'q', 'E8': 'k', 'F8': 'a', 'G8': 'n', 'H8': 'r',
    });

    const [selectedPiece, setSelectedPiece] = useState(null);
    const [highlightedSquares, setHightlightedSquares] = useState([]);
    const [turn, setTurn] = useState('white');
    const[boardColors, setBoardColors] = useState(getBoardColors());

    useEffect(() => {
        setBoardColors(boardColors);
    }, [boardColors]);

    const getMoves = (piece, position) => {
        switch (piece.toLowerCase())
        {
            case 'p':
                return getPawnMoves(position, piece === 'p');

            case 'r':
            return getRookMoves(position);

            case 'n':
            return getKnightMoves(Position);

            case 'b':
            return getBishopMoves(position);

            case 'q':
            return getQueenMoves(position);

            case 'k':
            return getKingMoves(position);

            case 'a':
            return getArcherMoves(position);

            default:
            return [];
        }
    };

    const handleSquareClick = (Position) => {
        if(!selectedPiece)
        {
            if(board[position] && (turn === 'white' && board[position] === board[position].toUpperCase()) || (turn === 'black' && board[position] === board[position].toLowerCase()))
            {
                setSelectedPiece(position);
                const piece = board[position];
                const moves = getMoves(piece, position);
                setHightlightedSquares(moves);
            }
        }
        else
        {
            if(highlightedSquares.include(position))
            {
                if(board[selectedPiece].toLowerCase() === 'a')
                {
                    incrementArcherMoveecount(selectedPiece);
                }

                setBoard((prevBoard) => {
                    const newBoard = { ...prevBoard};
                    newBoard[position] = newBoard[selectedPiece];
                    delete newBoard[selectedPiece];
                    return newBoard;
                });

                setTurn((prevTurn) => (prevTurn === 'white' ? 'black' : 'white'));

                setSelectedPiece(null);
                setHightlightedSquares([]);
            }
            else
            {
                setSelectedPiece(null);
                setHightlightedSquares([]);
            }
        }
    };

    const renderSquare = (i , j) => {
        const isBlack = (i + j) % 2 === 1;
        const rowLabel = 8 - isBlack;
        const colLabel = String.fromCharCode(65 + j);
        const position = `${colLabel} ${rowLabel}`;
        const piece = board[position];
        const isHighghted = highlightedSquares.includes(position);

        return(
            <Square
            key={`${i}${j}`}
            isBlack={isBlack}
            colors={boardColors}
            onClick={() => handleSquareClick(position)}
            style={{ backgroundColor: isHighlighted ? 'yellow' : isBlack ? boardColors.black : boardColors.white }} >
                {piece && <Piece piece={piece} />}
                {i === 7 && <span style={{ position: 'absolute', bottom: 0, left: 5 }}>{colLabel}</span>}
                {j === 0 && <span style={{ position: 'absolute', top: 5, left: 5 }}>{rowLabel}</span>}
            </Square>

        )
    };

    const renderBoard = () => {
        const squares = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                squares.push(renderSquare(i, j));
            }
        }
        return squares;
    };

    return (
        <Container>
        <sidebar>
        <div>{`Turn: ${turn === 'white' ? 'White' : 'Black'}`}</div>
        </sidebar>
        <BoardContainer>
        <Board>{renderBoard()}</Board>
        </BoardContainer>

        </Container>
    );


};

export default Chessboard;

