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
            <div className="btns">
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(clap)}>Clap!</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(cheering)}>Cheering!</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(laughter)}>Laughter</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(booing)}>Booing</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(shocked)}>Shocked</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(ooh)}>Ooh</button>
                <button type='button' className='btn btn-primary btn-lg btn3d' onClick={() => handleClick(boo)}>Boo</button>
            </div>


        </div>
    )
}