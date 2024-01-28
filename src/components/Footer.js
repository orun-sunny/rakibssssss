import "./Footer.css"

const Footer = () => {

    return(
        <>
        <div className="footer">
            <div>
                <div className="top">
                    
                    <h1>Agventure</h1>
                    <p>Your Journey Your Story</p>
                </div>

                <div className="icons">
                    <a href="/">
                        <i className="fa-brands fa-facebook-square">

                        </i>
                        <i className="fa-brands fa-instagram-square">

                        </i>
                        <i className="fa-brands fa-behance-square">

                        </i>
                        <i className="fa-brands fa-twitter-square">

                        </i>
                    </a>
                </div>

            </div>

            
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                   
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                   
                </div>
            </div>

        </div>
        
        </>
    );
}

export default Footer;