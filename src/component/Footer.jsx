

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img height={40} width={40} src="https://i.postimg.cc/L856rkVX/logo1.png" alt="" />
    <p>
      Instant Crop Care
      <br />
      <span className="text-lg font-medium">Email:<a href="mailto:instantcropcare@gmail.com">instantcropcare@gmail.com</a></span>
    </p>
    <p>© {new Date().getFullYear()} - All right reserved | Instant Crop Care | <span>developed by: <a className="font-medium" target="_blank" href="https://devfahim.netlify.app/">Fahim</a></span></p>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;