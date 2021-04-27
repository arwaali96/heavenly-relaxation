import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation()

    return (
        <div className='header'>
            <h1>Heavenly Relaxation</h1> <br />

            {location.pathname === '/' && (
                <Link to="/quran" className="btn">Quran</Link>)}
            {location.pathname === '/' && (
                <Link to="/nature" className="btn">Nature</Link>)}

            {location.pathname === '/quran' && (
                <Link to="/" className="btn">Home</Link>)}
            {location.pathname === '/quran' && (
                <Link to="/nature" className="btn">Nature</Link>)}

            {location.pathname === '/nature' && (
                <Link to="/" className="btn">Home</Link>)}
            {location.pathname === '/nature' && (
                <Link to="/quran" className="btn">Quran</Link>)}
        </div>
    )
}

export default Header
