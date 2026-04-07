import UhHuh from './Sounds/uh-huh.mp3'
import ThatShouldBe from './Sounds/that should be.mp3'
import LordHaveMercy from './Sounds/lord have mercy.mp3'
import HellNo from './Sounds/hell no.mp3'

export default function Steve() {
    let uhHuh = new Audio(UhHuh)
    let thatShouldBe = new Audio(ThatShouldBe)
    let lordHaveMercy = new Audio(LordHaveMercy)
    let hellNo = new Audio(HellNo)

    function handleClick(sound) {
        sound.currentTime = 0
        sound.play()
    }

    return (
        <div className="container">
            <h2>Steve</h2>
            <div className="btns">
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(uhHuh)}>Uh Huh</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(thatShouldBe)}>That Should Be</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(lordHaveMercy)}>Lord Have Mercy</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(hellNo)}>Hell No</button>
            </div>
        </div>
    )
}