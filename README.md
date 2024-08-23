# React Chessboard with Custom "Archer" Piece

## Overview

This project is a React-based web application that implements a functional chessboard. The chessboard allows users to visualize and simulate the movement of standard chess pieces—Pawn, Rook, Knight, Bishop, Queen, and King—as well as a custom piece called the "Archer." The Archer alternates its movement pattern between a Bishop and a Rook on each turn.

## Features

- **Responsive 8x8 Chessboard**: A visually appealing, responsive chessboard with clear differentiation between white and black squares.
- **Standard Chess Piece Movements**: Implements the correct movement logic for all standard chess pieces.
- **Custom Archer Piece**: A unique chess piece that alternates its movement between Bishop and Rook with each move.
- **Turn-Based Logic**: Proper turn tracking to ensure that each player moves only on their turn and that the Archer's movement alternates correctly.
- **Piece Highlighting**: Highlights valid moves for the selected piece.

## Technologies Used

- **React**: For building the user interface.
- **Styled Components**: For styling the chessboard and pieces.
- **JavaScript**: For implementing the logic of the chess pieces' movements.

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/react-chessboard.git
   cd react-chessboard

2. **Install Dependencies**

   ```bash
   npm install
3. **Start the Application**

   ```bash
   npm start
-  **The app should now be running on http://localhost:3000.**

## Project Structure
- src/: Contains all the source code.
- Contains React components, including Chessboard.js and Piece.js.
- Contains styled components for the board and squares.
- Contains utility functions for piece movements in pieceMovement.js.

## How to Play
- **Select a Piece:** Click on a chess piece to view its possible moves. The valid squares will be highlighted.
- **Move a Piece:** Click on a highlighted square to move the selected piece to that position.
- **Turn-Based Play:** The game tracks whose turn it is and restricts movement to the current player.
- **Custom Archer Piece:** The Archer piece alternates its movement pattern between a Bishop and a Rook on each turn.
- **Custom Piece - Archer
First Turn:** Moves like a Bishop (any number of squares diagonally).
- **Second Turn:** Moves like a Rook (any number of squares horizontally or vertically).
- **Subsequent Turns:** Continues alternating between Bishop and Rook movements.
