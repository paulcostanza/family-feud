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
            <div className="btns">
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(correct)}>Correct!</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(strike)}>Strike!</button>{/* Edit out empty space at beginning */}
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(theme)}>Theme</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(youSaid)}>You Said...</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(winRound)}>Win Round</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(timer)}>Timer</button>
            </div>

        </div>
    )
}