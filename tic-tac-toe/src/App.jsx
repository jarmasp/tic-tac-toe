// import { useState } from 'react'
import './App.css'

const turns = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

const Square = ({ children, updateBoard, index }) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App() {
  

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
                >
                  {square}
                </Square>
              )
            })
          }
        </section>
      </main>
  )
}

export default App
