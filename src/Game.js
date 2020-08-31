import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from './CalculateWinner'

const Game = () => {
    const [history, setHistory] = useState ([Array(9).fill(null)])
    const [stepNum, setStepNum] = useState (0)
    const [xIsNext, setXisNext] = useState (true)
    const winner = calculateWinner(history[stepNum])
    const XO = xIsNext ? "X" : "O"

    const handleClick = (i) => {
        const historyPoint = history.slice(0,stepNum+1)
        const current = historyPoint[stepNum]
        const squares = [...current]
        if (winner || squares[i]) return
        squares[i] = XO
        setHistory([...historyPoint, squares])
        setStepNum(historyPoint.length)
        setXisNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setStepNum(step)
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => 
        history.map((_step, move) => {
            const destination = move ? `Goto move #${move}` : "Go to start"
            return (
                <li key={move}>
                    <button onClick={()=> jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    

    return (
        <>
            <h1>React Tic Tac Toe</h1>
            <Board squares={history[stepNum]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>            
                <h3>{winner ? "Winner: " + winner : "Next Player: " + XO}</h3>
            </div>
        </>
    )
}

export default Game