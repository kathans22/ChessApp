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

}

