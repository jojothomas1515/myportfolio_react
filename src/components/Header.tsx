import {ReactElement} from "react";
import "../styles/Header.css"
import {FaGithub, FaLaptopCode, FaLinkedin} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6";
import {Link} from 'react-router-dom'

function Header(): ReactElement {
  return (
    <>
      <header>
        <div className={'site-title-background'}>
          <h3 className={'site-title'}>
            <FaLaptopCode size={"2rem"}/>
            Joseph Thomas Ehigie
          </h3>
        </div>


        <nav>
          <div className={'pages-link'}>
            <Link to={"/home"}> Home </Link>
            <Link to={"/projects"}> Project </Link>
            <Link to={"/abouts"}> About </Link>
          </div>
          <div className={'socials'}>
            <Link to={"https://www.github.com/jojothomas1515"} target={"_blank"}><FaGithub/></Link>
            <Link to={"https://x.com/jojothomas1515"} target={"_blank"}><FaXTwitter/></Link>
            <Link to={"https://www.linkedin.com/in/joseph-thomas-ehigie-551452210/"}><FaLinkedin/></Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
