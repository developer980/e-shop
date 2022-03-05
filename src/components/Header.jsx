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
            <div className="subtitle">
            { user
                ? <p className='display-4'>Salut, {user.displayName}! ;)</p>
                : null
            }
           {user ? <p className = 'h5 btn btn-outline-dark d-flex align-items-center button' onClick={handleSignOut}>Log out</p>
            : <Link to ="/login" className="h5 btn btn-outline-dark d-flex align-items-center button">Log in</Link>}
        </div>
            <nav className='w-100 d-flex justify-content-between align-items-center'>
                <Link to="/" className="my-3">
                    <img src={Logo} alt="x(" className="logo"/>
                </Link>
                <Link to="/cart" className='d-flex'>
                    <ShoppingCart className="ml-2"/>
                    <p className='ml-1 mb-0'><sub>{numberOfProducts}</sub></p>
                </Link>
            </nav>
        </div>
    )
}

function mapStateToProps(state){
    return{
        numberOfProducts:state.products.length
    }
}

export default connect(mapStateToProps,null)(Header);