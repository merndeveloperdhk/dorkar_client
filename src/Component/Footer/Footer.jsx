import NewsLetter from "../NewsLetter/NewsLetter";
import SocialIcons from "../SocialIcons/SocialIcons";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <div>
      <NewsLetter></NewsLetter>
      {/* <Subscribe></Subscribe> */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <aside className="space-y-2">
           <img src="https://i.ibb.co/51f0xrZ/Logo-03.png" alt="" />
            <p>M M GROUP Ltd.</p>
            <p>Providing reliable tech  1992</p>
            <p>+12424359587</p>
          </aside>
          <SocialIcons></SocialIcons>
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <CopyRight></CopyRight>
    </div>
  );
};

export default Footer;
