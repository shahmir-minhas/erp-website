import React, { Children, Component } from 'react';
import Footer from '../Components/Layout/Footer/footer';
import NavBar from '../Components/Layout/Navbar/navbar';


const Layout = (props) => {
    console.log(props);
    return (<React.Fragment>
    
        <NavBar/>

        <main>{props.children}</main>

        <Footer/>
    </React.Fragment>  );
}
 
export default Layout;
