import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer-container">
      <a href="https://www.facebook.com/caiman.parana" target="_blank" rel="noreferrer" className="social-icon">
        <i className="fa-brands fa-facebook-f"></i>
      </a>

      <a href="https://youtu.be/bKtFztQNqzw" target="_blank" rel="noreferrer" className="social-icon">
       <i className="fa-brands fa-youtube"></i>
      </a>

      <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noreferrer" className="social-icon">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;
