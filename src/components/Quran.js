import juz_1_img from '../images/juz_1.jpeg';
import juz_1 from '../sounds/juz_1.mp3'

const Quran = ( {soundContainer, playBtn, prevBtn, nextBtn, sound, progress, progressContainer, title, cover} ) => {
    return (
        <div>
            <h1 className="sound-type">Quran</h1>

            <div className="sound-container" ref ={soundContainer}>
                <div className="sound-info">
                    <h4 id="title" ref ={title}>juz_1</h4>
                    <div className="progress-container" ref ={progressContainer}>
                        <div className="progress" ref ={progress}></div>
                    </div>
                </div>

                <audio src={juz_1} id="sound" ref ={sound}></audio>
                <div className="image-container">
                    <img src={juz_1_img} alt="sound-cover" id="cover" ref ={cover} />
                </div>

                <div className="navigation">
                    <button id="prev" className="action-btn" ref ={prevBtn}>
                        <i className="fas fa-backward"></i>
                    </button>
                    <button id="play" className="action-btn action-btn-big" ref ={playBtn}>
                        <i className="fas fa-play"></i>
                    </button>
                    <button id="next" className="action-btn" ref ={nextBtn}>
                        <i className="fas fa-forward"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quran
