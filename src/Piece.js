import React from "react";
import styled from "styled-components";

const PieceContainer = styled.div`
 font-size:2rem;
 text-align: center;
 line-height: 50px;
`;

const Piece = ({ piece }) => {
    return <PieceContainer>{ piece}</PieceContainer>
}

export default Piece;