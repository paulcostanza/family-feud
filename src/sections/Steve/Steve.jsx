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
            <button onTouchStart={() => handleClick(uhHuh)}>Uh Huh</button>
            <button onTouchStart={() => handleClick(thatShouldBe)}>That Should Be</button>
            <button onTouchStart={() => handleClick(lordHaveMercy)}>Lord Have Mercy</button>
            <button onTouchStart={() => handleClick(hellNo)}>Hell No</button>

        </div>
    )
}