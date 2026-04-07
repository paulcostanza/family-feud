export function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        // The API does not have a stop, so we must pause and reset
        song.pause()
        song.currentTime = 0;
    })
}