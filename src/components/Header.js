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
            <a className="main" href="/">Heavenly Relaxation</a>
            <div className="header-right">
                <Link className="active link" ref={home} to="/">Home</Link>
                <Link className="link" to="/quran" ref={quran}>Quran</Link>
                <Link className="link" to="/nature" ref={nature}>Nature</Link>
            </div>
        </div>
    )
}

export default Header
