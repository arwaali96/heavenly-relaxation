import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react';

const Header = () => {
    const location = useLocation()

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

        const checkLocation = () => {
            if (location.pathname === '/quran') {
                makeActive(quran)
            } else if (location.pathname === '/nature') {
                makeActive(nature)
            } else {
                makeActive(home)
            }
        }

        window.addEventListener('load', () => {
            checkLocation()
        })

    })

    return (
        <div className="header">
            <a className="main" href="/">Heavenly Relaxation</a>
            <div className="header-right">
                <a className="active link" ref={home} href="/">Home</a>
                <a className="link" href="/quran" ref={quran}>Quran</a>
                <a className="link" href="/nature" ref={nature}>Nature</a>
            </div>
        </div>
    )
}

export default Header
