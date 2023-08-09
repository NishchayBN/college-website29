import { Outlet,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Root()
{
  const [showMenu, setshowMenu]=useState(false)
  function toggleMenu()
  {
    setshowMenu(!showMenu)
  }
    return(
        <>
        <section className="nav">
        <nav>
      <a href="index.html">
        <img src="/eduford_img/logo.png" alt="" />
      </a>
      <div id="navlinks" className={`nav-links ${showMenu ?"open":""}`}>
        <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} className="fa"/>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/course"}>COURSE</Link>
          </li>
          <li>
            <Link to={"/blog"}>BLOG</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon color="#f44336" className="fa" icon={faCompass} onClick={toggleMenu} />
      
    </nav>
        </section>
        

    <Outlet/>
    
<section className="footer">
    <h4>ABOUT US</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fuga
      officiis a repellendus,
      <br /> asperiores veniam magni harum officia vero sit quam culpa debitis
      necessitatibus perferendis numquam dolor quasi quisquam quaerat.
    </p>
    <div className="icon">
       <FontAwesomeIcon icon={faFacebook} />
       <FontAwesomeIcon icon={faInstagram} />
       <FontAwesomeIcon icon={faTwitter} />
    </div>
    <p>
      Made with <FontAwesomeIcon icon={faHeart}/> By Group 8 
    </p>
  </section>
        </>
    )
}
