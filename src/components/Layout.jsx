import React from "react";

import Header from "../components/Header";
import Footer from '../components/Footer';
import '../components/Layout.css';

function Layout(props){
    const {user, signOut} = props;
    return(
        <div className="mt h-100">
            {props.children}
            <Header
                user={user}
                signOut={signOut}
            ></Header>
            <Footer></Footer>
        </div>
    )
}

export default Layout;