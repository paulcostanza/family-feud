// naked grandma
import NakedGrandma from './Sounds/naked-grandma.mp3'
export default function Other() {
    let nakedGrandma = new Audio(NakedGrandma)

    function handleClick(sound) {
        sound.currentTime = 0
        sound.play()
    }

    return (
        <div className="container">
            <h2>Other</h2>
            <div className="btns">
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(nakedGrandma)}>Naked Grandma!</button>
            </div>
        </div>
    )
}