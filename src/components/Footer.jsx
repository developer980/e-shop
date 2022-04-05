import React from 'react';
import {Link} from 'react-router-dom';
import "../components/footer.css";

function Footer(){
    return(
        <footer className='d-flex flex-row justify-content-around'>
            <div className="d-flex flex-column">
                <b>DETALII</b>
                <Link to = '/about'>Despre noi</Link>
                <Link to = '/about'>Termeni si conditii</Link>
            </div>
            <div className="d-flex flex-column">
                <div className="mb-1">
                   <b>Contacteaza-ne</b>
                </div>
                <div className="mb-1">
                   Telefon: +40746054090
                </div>
                <div className="mb-1">
                   Email: tudordin2002@gmail.com
                </div>
            </div>
        </footer>
    )
}

export default Footer;