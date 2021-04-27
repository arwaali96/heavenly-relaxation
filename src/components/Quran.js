import juz_1_img from '../images/juz_1.jpeg';
import juz_1 from '../sounds/juz_1.mp3'
import { useEffect, useRef } from 'react';

const Quran = () => {
    let soundContainer = useRef(null)
    let playBtn = useRef(null)
    let prevBtn = useRef(null)
    let nextBtn = useRef(null)
    let sound = useRef(null)
    let progress = useRef(null)
    let progressContainer = useRef(null)
    let title = useRef(null)
    let cover = useRef(null)

    useEffect(() => {
        // Song titles
        var i;
        let songs = [];
        for (i = 1; i < 6; i++) {
            let song = i
            songs.push(song)
        }

        // Keep track of songs
        let songIndex = 0

        // Update song details
        const loadSong = (song) => {
            title.current.innerText = "Juz " + song
            sound.current.src = `/sounds/${song}.mp3`
            cover.current.src = `/images/${song}.jpeg`
        }

        // Initially load song info DOM
        loadSong(songs[songIndex])

        const playSong = () => {
            soundContainer.current.classList.add('play')
            playBtn.current.querySelector('i.fas').classList.remove('fa-play')
            playBtn.current.querySelector('i.fas').classList.add('fa-pause')

            sound.current.play()
        }

        const pauseSong = () => {
            soundContainer.current.classList.remove('play')
            playBtn.current.querySelector('i.fas').classList.add('fa-play')
            playBtn.current.querySelector('i.fas').classList.remove('fa-pause')

            sound.current.pause()
        }

        const prevSong = () => {
            songIndex--

            if (songIndex < 0) {
                songIndex = songs.length - 1
            }

            loadSong(songs[songIndex])

            playSong()
        }

        const nextSong = () => {
            songIndex++

            if (songIndex > songs.length - 1) {
                songIndex = 0
            }

            loadSong(songs[songIndex])

            playSong()

        }

        const updateProgress = (e) => {
            // srcElement is audio
            // console.log(e.srcElement.currentTime)
            const { duration, currentTime } = e.srcElement
            const progressPercent = (currentTime / duration) * 100
            console.log(progress.current)
            progress.current.style.width = `${progressPercent}%`
        }

        const setProgress = (e) => {
            const width = progressContainer.current.clientWidth
            const clickX = e.offsetX
            const duration = sound.current.duration
            sound.current.currentTime = (clickX / width) * duration
        }

        // Event listeners
        playBtn.current.addEventListener('click', () => {
            const isPlaying = soundContainer.current.classList.contains('play')

            if (isPlaying) {
                pauseSong()
            } else {
                playSong()
            }
        })

        // Change song events
        prevBtn.current.addEventListener('click', prevSong)
        nextBtn.current.addEventListener('click', nextSong)

        sound.current.addEventListener('timeupdate', updateProgress)

        progressContainer.current.addEventListener('click', setProgress)

        sound.current.addEventListener('ended', nextSong)
    }, [])

    return (
        <div>
            <h1 className="sound-type">Quran</h1>

            <div className="sound-container" ref={soundContainer}>
                <div className="sound-info">
                    <h4 id="title" ref={title}>juz_1</h4>
                    <div className="progress-container" ref={progressContainer}>
                        <div className="progress" ref={progress}></div>
                    </div>
                </div>

                <audio src={juz_1} id="sound" ref={sound}></audio>
                <div className="image-container">
                    <img src={juz_1_img} alt="sound-cover" id="cover" ref={cover} />
                </div>

                <div className="navigation">
                    <button id="prev" className="action-btn" ref={prevBtn}>
                        <i className="fas fa-backward"></i>
                    </button>
                    <button id="play" className="action-btn action-btn-big" ref={playBtn}>
                        <i className="fas fa-play"></i>
                    </button>
                    <button id="next" className="action-btn" ref={nextBtn}>
                        <i className="fas fa-forward"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quran
