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
            <button onTouchStart={() => handleClick(nakedGrandma)}>Naked Grandma!</button>
        </div>
    )
}