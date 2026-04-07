import { useRef, useEffect } from 'react'
import Correct from './Sounds/correct.mp3'
import Strike from './Sounds/strike.mp3'
import Theme from './Sounds/theme-after-fast-money.mp3'
import YouSaid from './Sounds/you-said.mp3'
import WinRound from './Sounds/win-round.mp3'
import Timer from './Sounds/timer.mp3'

export default function Show() {
    let correct = new Audio(Correct)
    let strike = new Audio(Strike)
    let theme = new Audio(Theme)
    let youSaid = new Audio(YouSaid)
    let winRound = new Audio(WinRound)
    let timer = new Audio(Timer)

    function handleClick(sound) {
        sound.currentTime = 0
        sound.play()
    }

    return (
        <div className="container">
            <h2>Show</h2>
            <button onTouchStart={() => handleClick(correct)}>Correct!</button>
            <button onTouchStart={() => handleClick(strike)}>Strike!</button>{/* Edit out empty space at beginning */}
            <button onTouchStart={() => handleClick(theme)}>Theme</button>
            <button onTouchStart={() => handleClick(youSaid)}>You Said...</button>
            <button onTouchStart={() => handleClick(winRound)}>Win Round</button>
            <button onTouchStart={() => handleClick(timer)}>Timer</button>
        </div>
    )
}