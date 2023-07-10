import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}



// eslint-disable-next-line react/prop-types
const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
 
  return (
    < div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const win_condition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const condition of win_condition) {
      const [a, b, c] = condition
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return 

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
   }

    return (
      <main className='board'>
        <h1> tic tac toe</h1>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
      </main>
  )
}

export default App
