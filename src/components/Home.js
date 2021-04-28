import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{
            backgroundImage: 'url(/images/home-back.jpeg)',
            backgroundSize: 'cover',
            height: '100vh',
            width: "100vw"
        }}>
            <div className="main-btns">
                <Link className="link" to="/quran" >Quran</Link>
                <Link className="link" to="/nature">Nature</Link>
            </div>
        </div>
    )
}

export default Home
