import React, { useState } from 'react'

const Navbar = (props) => {
    const toggle = props.darkMode ? "Light" : "Dark";
    const [active, setActive] = useState(false);

    const isActive = () => {
        setActive(!active);
    }
    console.log(active);

    return (
        <div className='Navbar'>
            <div className='Navbar--Header'>
                <h1 className='head heade'>Chummy</h1>
                <h1 className='head1' style={{ color: props.darkMode ? "white" : "black" }}
                >Notes</h1>
            </div>
            <div className={`dropdown`} onClick={isActive}>
            <button className="dropbtn">
                    <img className={`dropdown-img dropdown-img-${active ? 'active' : ''}`} src={require('./images/arrow-down.png')} alt='img' />
                </button>
                <div className={`dropdown-content ${active ? 'active' : ''}`}>
                    <ul className='btn-list'>
                        <li>
                            <button
                                onClick={props.toggleDarkMode}
                            ><img className='btn-img'
                                src={require('./images/night-mode.png')} alt='img' />
                                {toggle} Mode
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;