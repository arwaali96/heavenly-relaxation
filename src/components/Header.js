import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/quran'>Quran</Link> <br />
            <Link to='/nature'>Nature</Link>

        </div>
    )
}

export default Header
