import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className="container header__container">
                <div className="header__logo">
                    <a href="/"><i class='bx bxs-school header__icon'></i></a>
                </div>

                <div className="header__title" >
                    <a href="/">UniNav</a>
                </div>
            </nav>
        </header>
  )
}

export default Header