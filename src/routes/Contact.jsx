import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
export default function Contact()
{
  return(
    <>
  
  <section className="subheader">
  
    <h1>Contact us</h1>
  </section>
  {/* -------contact section-------- */}
  <section className="location">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678246053813!5m2!1sen!2sin"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
  <section className="contact-us">
    <div className="row">
      <div className="contact-col">
        <div>
          <FontAwesomeIcon className='contact-icon' icon={faHouse}/>
          
          <span>
            <h5>XYZ Road,ABC building</h5>
            <p>Bangalore,Karnataka IN</p>
          </span>
        </div>
        <div>
        <FontAwesomeIcon className='contact-icon' icon={faPhone}/>
          <span>
            <h5>+91 1234567890</h5>
            <p>Monday to Saturday,10AM to 6PM</p>
          </span>
        </div>
        <div>
        <FontAwesomeIcon className='contact-icon' icon={faEnvelope}/>
          <span>
            <h5>info@eduford.in</h5>
            <p>Email Us your query</p>
          </span>
        </div>
      </div>
      <div className="contact-col">
        <form action="form-handler.php" method="post">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required=""
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required=""
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter your Subject"
            required=""
          />
          <textarea
            rows={8}
            name="message"
            placeholder="Message"
            required=""
            defaultValue={""}
          />
          <button type="submit" className="hero-btn red-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  
  {/* JAVASCRIPT FOR MENU */}
</>

  )
}
