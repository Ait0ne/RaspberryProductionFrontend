import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import CartIcon from '../cart-icon/cart-icon.component';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../src/redux/user/user.action';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {motion} from 'framer-motion';



const Header = ({currentUser, setCurrentUser, cartHidden }) => {
    const [hidden, setHidden] = useState(true)
    const handleSignOut = () => {
        auth.signOut()
        setCurrentUser(null)
    }
    

    return (

        <Fragment>
            <motion.div initial='initial' animate='animate'>
            <div className='header'>
                <div className='header-navbar'>
                    <Link href='/'>
                        <span>Your Logo</span>
                    </Link>
                    
                    <div className='header-navigation'>
                        <div className='lg-hidden'>
                            <Link  href='/'>
                                <span className='navigation-button'>SHOP</span>
                            </Link>
                            {currentUser ? 
                            <span className='navigation-button' onClick={handleSignOut}>SIGN OUT</span>
                            : 
                            <Link  href='/auth'>
                                <span className='navigation-button'>SIGN IN</span>
                            </Link>}
                        </div>
                        <span className='navigation-button' ><CartIcon/></span>
                        <div className='navigation-toggle-container' onClick={() =>setHidden(!hidden)}>
                            <FontAwesomeIcon className='navigation-toggle'  icon={faBars} size='2x'/> 
                        </div>
                    </div>

                </div>
            </div>
            <div className={`${!hidden ? 'nav-show' : '' } navigation-hidden`}>
                <div className='menu-hidden'>
                    
                    <Link  href='/'>
                        <span className='button-hidden' onClick={() =>setHidden(!hidden)}>SHOP</span>
                    </Link>
                    { currentUser ?
                        <span className='button-hidden' onClick={() =>auth.signOut()}>SIGN OUT</span>
                    :<Link  href='/auth' >
                        <span className='button-hidden' onClick={() =>setHidden(!hidden)}>SIGN IN</span>
                    </Link>}
                </div>
            </div>
            { cartHidden ? null : <CartDropdown />  }
            </motion.div>

        </Fragment>
    )
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    cartHidden: state.cart.cartHidden
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);