import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import "../components/Header.css";
import {connect} from 'react-redux'

function Header(props){
    function handleSignOut(){
        signOut();
    }
    const{user, signOut, numberOfProducts} = props;

    return(
        <div className="d-flex justify-content-center">

            <nav className='w-100 d-flex justify-content-between align-items-center'>
                <Link to="/" className="my-3 logo">
                    <img src={Logo} alt="x(" className="logo-img"/>
                </Link>            
                <div className="d-flex flex-row justify-content-between w-25 align-items-center h-100">
                <div className="d-flex flex-row justify-content-center align-items-center">
                        { user
                            ? <p>{user.displayName}</p>
                            : null
                        }
                    
            
                    {user ? <p className = 'ml-3 font-weight-light button' onClick={handleSignOut}>Log out</p>
                    : <Link to ="/login"> <p className="ml-3 font-weight-light button">Log in</p></Link>}
                    
                </div>
                    <Link to="/cart" className='d-flex'>
                        <ShoppingCart className="ml-2"/>
                        <p className='ml-1 mb-0'><sub>{numberOfProducts}</sub></p>
                    </Link>
                    </div>
            </nav>
        </div>
    )
}

function mapStateToProps(state){
    return{
        numberOfProducts:state.cart.products.length
    }
}

export default connect(mapStateToProps,null)(Header);