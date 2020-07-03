import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

function Footer() {

    return (
    
        
    <MDBFooter className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
        <div className="foot-wrapper text-center">
            <div className="logo">YOM.</div>
            <br></br>
            <h3>Welcome to Jenny and Calvin's favorite recipes!</h3>
        </div>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: YOM.
        </MDBContainer>
        </div>
    </MDBFooter>
          );
}

export default Footer;
