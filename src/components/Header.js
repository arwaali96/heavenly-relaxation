import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react';

const Header = () => {

    let home = useRef(null)
    let quran = useRef(null)
    let nature = useRef(null)

    useEffect(() => {
        const makeActive = (button) => {
            home.current.classList.remove('active')
            quran.current.classList.remove('active')
            nature.current.classList.remove('active')

            button.current.classList.add('active')
        }

        home.current.addEventListener('click', () => {
            makeActive(home)
        })
        quran.current.addEventListener('click', () => {
            makeActive(quran)
        })
        nature.current.addEventListener('click', () => {
            makeActive(nature)
        })
    }, [])

    return (
        <div className="header">
            <p>Heavenly Relaxation</p>

            <div className="header-right">
                <Link className="active link" ref={home} to="/">Home</Link>
                <Link className="link" to="/quran" ref={quran}>Quran</Link>
                <Link className="link" to="/nature" ref={nature}>Nature</Link>
            </div>
        </div>

        // <div className='header'>
        //     <h1>Heavenly Relaxation</h1> <br />

        //     {location.pathname === '/' && (
        //         <Link to="/quran" className="btn">Quran</Link>)}
        //     {location.pathname === '/' && (
        //         <Link to="/nature" className="btn">Nature</Link>)}

        //     {location.pathname === '/quran' && (
        //         <Link to="/" className="btn">Home</Link>)}
        //     {location.pathname === '/quran' && (
        //         <Link to="/nature" className="btn">Nature</Link>)}

        //     {location.pathname === '/nature' && (
        //         <Link to="/" className="btn">Home</Link>)}
        //     {location.pathname === '/nature' && (
        //         <Link to="/quran" className="btn">Quran</Link>)}
        // </div>
    )
}

export default Header
