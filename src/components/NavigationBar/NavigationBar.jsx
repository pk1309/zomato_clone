import { useState } from 'react';
import { Link } from 'react-router-dom'

import mobileHand from '/icons/smartphone.png'
import menuBar from '/icons/menu.png'
import downArrow from '/icons/down-arrow.png'
import profilePic from '/images/profilepic.jpg'

import Login from '../Auth/Login/Login'
import Signup from '../Auth/Signup/Signup'
import EnterOTP from '../Auth/EnterOTP/EnterOTP'

import css from './NavigationBar.module.css';

let NavigationBar = ({ toogleMenu, setToggleMenu, page }) => {
    let [menuDisplay, setMenuDisplay] = useState(false);
    let [loggedIn, setLoggedIn] = useState(true);
    let [auth, setAuth] = useState({
        closed: true,
        login: false,
        signup: false
    });


    return <div className={css.navbar}>
        <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
        <div className={css.navbarInner}>
            <div className={css.leftSide}>
                <img src={mobileHand} alt="mobile in hand icon" className={css.img} />
                <Link to='/get-the-app' className={css.appTxt}>Get The App</Link>
            </div>
            <div className={css.rightSide}>
                {page !== 'add-restaurant' ? <Link to='/add-restaurant' className={css.menuItem} >Add restuarant</Link> : ''}
                {loggedIn ? (<div className={css.menuItem}>
                    <div className={css.profile} onClick={() => setMenuDisplay(val => !val)}>
                        <img src={profilePic} alt="profile pic" className={css.profilePic} />
                        <div className={css.profileName}>Profile</div>
                        <img src={downArrow} alt="arrow" className={css.arrow} />
                    </div>
                    <div className={css.menu} style={{display: menuDisplay ? "block" : ""}}>
                        <Link to='/user/ll/reviews' className={css.menuItemLinkTxt}>
                            <div className={css.menuItemLink}>
                                Profile
                            </div>
                        </Link>
                        <Link to='/notifications' className={css.menuItemLinkTxt}>
                            <div className={css.menuItemLink}>
                                Notifications
                            </div>
                        </Link>
                        <Link to='/user/ll/bookmarks' className={css.menuItemLinkTxt}>
                            <div className={css.menuItemLink}>
                                Bookmarks
                            </div>
                        </Link>
                        <Link to='/user/ll/reviews' className={css.menuItemLinkTxt}>
                            <div className={css.menuItemLink}>
                                Reviews
                            </div>
                        </Link>
                        <Link to='/network' className={css.menuItemLinkTxt}>
                            <div className={css.menuItemLink}>
                                Network
                            </div>
                        </Link>
                        <Link to='/find-friends' className={css.menuItemLinkTxt}>
                            <div className={css.menuItemLink}>
                                Find Friends
                            </div>
                        </Link>
                        <Link to='/settings' className={css.menuItemLinkTxt}>
                            <div className={css.menuItemLink}>
                                Settings
                            </div>
                        </Link>
                        <Link to='/logout' className={css.menuItemLinkTxt} onClick={() => setLoggedIn(false)}>
                            <div className={css.menuItemLink}>
                                Logout
                            </div>
                        </Link>
                    </div>
                </div>) : (<>
                    <div className={css.menuItem} onClick={() => setAuth({ closed: false, login: true, signup: false })}>Log in</div>
                    <div className={css.menuItem} onClick={() => setAuth({ closed: false, login: false, signup: true })}>Sign up</div>
                </>)}
            </div>
        </div>
        <div>
            {auth?.login ? <Login setAuth={setAuth} /> : null}
            {auth?.signup ? <Signup setAuth={setAuth} /> : null}
        </div>
        {/* <EnterOTP /> */}
    </div>
}

export default NavigationBar;