import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = ({isActiveLinkGarage=false, isActiveLinkWinners=false}) => {
    return (
        <div>
            <div className='navbar'>
                <div className="wrapper-navbar container">
                    <ul>
                        <Link className='Link' to='/'>ASYNC-RACE</Link>
                        <Link className={!isActiveLinkGarage ? 'Link' : 'Link Link__active'} to='/garage'>Garage</Link>
                        <Link className={!isActiveLinkWinners ? 'Link' : 'Link Link__active'} to='/winners'>Winners</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;