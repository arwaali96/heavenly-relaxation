const Home = () => {
    return (
        <div style={{
            backgroundImage: 'url(/images/home-back.jpeg)',
            backgroundSize: 'cover',
            height: '100vh',
            width: "100vw"
        }}>
            <div className="phrase">
                <p>click listen relax.</p> <br />
            </div>
            <div className="main-btns">
                <a className="link" href="/quran" >Quran</a>
                <a className="link" href="/nature">Nature</a>
            </div>
        </div>
    )
}

export default Home
