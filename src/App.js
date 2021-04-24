import { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Quran from './components/Quran';
import Nature from './components/Nature';

function App() {
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
    const songs = ['juz_1', 'juz_2', 'juz_3', 'juz_4', 'juz_5']

    // Keep track of songs
    let songIndex = 0

    // Update song details
    const loadSong = (song) => {
      title.current.innerText = song
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
    <Router>
      <div className="App">
      <Header />
        {/* <div className="image-container">
        <img src="/images/juz_5.jpeg" alt="sound-cover" id="cover" />
      </div> */}
      <Route path='/quran' component={Quran}/> 
      <Route path='/nature' component={Nature} />

        <Quran soundContainer={soundContainer} playBtn={playBtn} prevBtn={prevBtn} nextBtn={nextBtn} sound={sound} soundContainer={soundContainer} progress={progress} progressContainer={progressContainer} title={title} cover={cover} />
      </div>
    </Router>
  );
}

export default App;
