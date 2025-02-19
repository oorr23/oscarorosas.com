import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <h2>Oscar O. Rosas</h2>
                    <br></br>
                    <p>"They named things after me for a reason."</p>
                </div>
                <div className="footer-center">
                    <h3>Quick Links</h3>
                    <br></br>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Subscribe</h3>
                    <br></br>
                    <form>
                        <input type="email" placeholder="Your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=100019522081506"><img src="/icons/facebook.svg" alt=" Facebook"/></a>
                        <a href="https://www.instagram.com/theoscar.r/"><img src="/icons/instagram.svg" alt=" Instagram"/></a>
                        <a href="https://wa.me/8452340502"><img src="/icons/whatsapp.svg" alt=" Whatsapp"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;