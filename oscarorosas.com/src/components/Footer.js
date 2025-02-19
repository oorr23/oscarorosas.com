import "./Footer.css"

const Footer = () => {
    return (
      <footer>
    <div class="footer-container">
        <div class="footer-left">
            <h2>Wordcraft Webworks</h2>
            <p>Building stunning websites that convert.</p>
        </div>
        <div class="footer-center">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-right">
            <h3>Subscribe</h3>
            <form>
                <input type="email" placeholder="Your email">
                <button type="submit">Subscribe</button>
            </form>
            <div class="social-icons">
                <a href="#"><img src="/icons/facebook.svg" alt="Facebook"></a>
                <a href="#"><img src="/icons/twitter.svg" alt="Twitter"></a>
                <a href="#"><img src="/icons/instagram.svg" alt="Instagram"></a>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer