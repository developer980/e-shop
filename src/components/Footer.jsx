import React from 'react';
import {Link} from 'react-router-dom';
import "../components/footer.css";

function Footer(){
    return(
        <footer>
             <div className="row">
                <div className="col-4 mb-1">
                    <b>DETALII</b>
                </div>
                <div className="col-4 mb-1">
                    <b>INFORMATII DE CONTACT</b>   
                </div>
            </div>
            <div className="row">
                <div className="col-4 mb-1">
                    <Link to = '/about'>Despre noi</Link>
                </div>
                <div className="col-4 mb-1">
                   Telefon: +40746054090
                </div>
            </div>
            <div className="row">
                <div className="col-4 mb-1">
                    <Link to = '/about'>Termeni si conditii</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;