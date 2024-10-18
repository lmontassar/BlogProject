import { FaGithub,FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>About ProBlog</h3>
          <p>
            ProBlog is your go-to source for insightful articles on web
            development, technology, and design.
          </p>
        </div>
        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a href="#" aria-label="Github">
                <FaGithub/> Github
            </a>
            <a href="#" aria-label="LinkedIn">
                <FaLinkedin/> LinkedIn
           </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 ProBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}
