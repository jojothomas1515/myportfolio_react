import {ReactElement, useRef} from "react";
import "../styles/components/Header.css"
import {FaGithub, FaLaptopCode, FaLinkedin} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6";
import {Link} from 'react-router-dom'

function Header(): ReactElement {

  const navToggle = useRef<HTMLInputElement>(null);
  const aboutLinkActiveRef =  useRef<HTMLAnchorElement>(null)

  const toggleNav = () => {
    if (navToggle.current?.checked) {
      navToggle.current.checked = false;
    } else if (navToggle.current?.checked === false) {
      navToggle.current.checked = true;
    }
  }

  return (
    <>
      <header>
        <div className={'site-title-background'}>
          <h3 className={'site-title'}>
            <FaLaptopCode size={"2rem"}/>
            Joseph Thomas Ehigie
          </h3>
        </div>
        <input type="checkbox" id={'nav-toggle'} ref={navToggle}/>

        <button className={'nav-toggle-button'} onClick={toggleNav}>
          <span className={'nav-button-bar'}/>
          <span className={'nav-button-bar'}/>
          <span className={'nav-button-bar'}/>
        </button>
        <nav id={"full-nav"}>
          <div className={'pages-link'}>
            <Link to={"/home"} > Home </Link>
            <Link to={"/projects"}> Project </Link>
            <Link to={"/abouts"} ref={aboutLinkActiveRef}> About </Link>
          </div>
          <div className={'socials'}>
            <Link to={"https://www.github.com/jojothomas1515"} target={"_blank"}><FaGithub/></Link>
            <Link to={"https://x.com/jojothomas1515"} target={"_blank"}><FaXTwitter/></Link>
            <Link to={"https://www.linkedin.com/in/joseph-thomas-ehigie-551452210/"}><FaLinkedin/></Link>
          </div>
        </nav>
        <nav id={"mobile-nav"}>
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
