import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import './Responsive.css'
import useUser from '../../Hook/useUser'
import auth from '../firebase.init'
import { signOut } from 'firebase/auth'
const navUrls = ["home", "about", "inventory", "blogs","contact"]
const Navbar = () => {
    const navigate = useNavigate()
    const [navbar, setNavbar] = useState(false)
    const navHandler = () => {
        if (navbar) {
            setNavbar(false)
        }
        else {
            setNavbar(true)
        }
    }
    const user = useUser()
    const logout = () => {
        
        signOut(auth).then(() => {
            navigate('/')
            window.location.reload()
        }).catch((error) => {
            // An error happened.
        });
    }
  
    return (
        <>

            <nav id="navbar_top" className="navbar">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <Link to='/'>
                                <h1>Inventory</h1>
                            </Link>
                            <FontAwesomeIcon onClick={navHandler} icon={faBars} />
                        </div>
                        <ul className={navbar ? "show" : "dont-show"}>
                            {
                                navUrls.map(url => <li key={url}> <NavLink to={url} className='nav-link-m'>{url}</NavLink></li>)
                            }
                            <li>
                                {
                                    user.email ?
                                        <button onClick={logout}
                                         className='btn-special1'>Logout</button>
                                        :
                                        <Link className='btn-special1' to='/login'>Login</Link>
                                }
                                {
                                    user.email&& <Link className='btn-special2 ms-2' to='/Profile'>Admin</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar