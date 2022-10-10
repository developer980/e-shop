import React from 'react';
import {Link} from 'react-router-dom';
import "../components/footer.css";

function Footer(){
    return(
        <footer className='d-flex flex-row justify-content-around'>
            <div className="d-flex flex-column">
                <b>DETAILS</b>
                <Link to = '/about'>About us</Link>
                <Link to = '/about'>Terms and conditions</Link>
            </div>
            <div className="d-flex flex-column">
                <div className="mb-1">
                   <b>CONTACT US</b>
                </div>
                <div className="mb-1">
                   Phone number: +40746054090
                </div>
                <div className="mb-1">
                   Email: tudordin2002@gmail.com
                </div>
            </div>
        </footer>
    )
}

export default Footer;