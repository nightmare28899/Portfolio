/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";

export default function Footer() {
  return (
    <footer>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_copyright">
        <small>&copy; KLG. All rights reserved.</small>
      </div>
    </footer>
  );
}
