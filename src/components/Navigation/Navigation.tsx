import React from 'react'

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className='container'>
                <div className="navigation__content">
                    <div className="navigation__logo">LOGO</div>
                    <ul className="navigation__links">
                        <li className="navigation__link">List of TODO-S</li>
                        <li className="navigation__link">Information</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation