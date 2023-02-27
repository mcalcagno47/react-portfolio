import React from 'react';
import github from '../assets/images/github.png'
import gmail from '../assets/images/gmail.png'
import linkedin from '../assets/images/linkedin.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footerContent">
                <p>                
                    <a href="https://github.com/mcalcagno47">
                        <img src={github} alt="github"></img>          
                    </a>                    
                    <a href="https://www.linkedin.com/in/mark-calcagno-b96214a2/">
                        <img src={linkedin} alt="linkedin"></img>          
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=mcalcagn@gmail.com">
                        <img src={gmail} alt="gmail"></img>          
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;