// cheers
// booze
import Clap from './Sounds/clap.mp3'
import Cheering from './Sounds/cheering.mp3'
import Laughter from './Sounds/laughter.mp3'
import Booing from './Sounds/booing.mp3'
import Shocked from './Sounds/shocked.mp3'
import Ooh from './Sounds/ooh.mp3'
import Boo from './Sounds/boo.mp3'

export default function Crowd() {
    let clap = new Audio(Clap)
    let cheering = new Audio(Cheering)
    let laughter = new Audio(Laughter)
    let booing = new Audio(Booing)
    let shocked = new Audio(Shocked)
    let ooh = new Audio(Ooh)
    let boo = new Audio(Boo)

    function handleClick(sound) {
        sound.currentTime = 0
        sound.play()
    }

    return (
        <div className="container">
            <h2>Crowd</h2>
            <button onTouchStart={() => handleClick(clap)}>Clap!</button>
            <button onTouchStart={() => handleClick(cheering)}>Cheering!</button>
            <button onTouchStart={() => handleClick(laughter)}>Laughter</button>
            <button onTouchStart={() => handleClick(booing)}>Booing</button>
            <button onTouchStart={() => handleClick(shocked)}>Shocked</button>
            <button onTouchStart={() => handleClick(ooh)}>Ooh</button>
            <button onTouchStart={() => handleClick(boo)}>Boo</button>

        </div>
    )
}