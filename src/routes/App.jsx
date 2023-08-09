import { faEnvelope, faHouse, faPhone, faStar, faStarAndCrescent, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function App() {

  return (
    <>
  
  <section className="header">
    <div className="text-box">
      <h1>World's Best University.</h1>
      <p>
        Making a website is one of the most easiest things to do, You just have
        to learn HTML, CSS and <br />
        JavaScript and you are good to go
      </p>
      <a href="#" className="hero-btn">
        Visit Us to Know more
      </a>
    </div>
  </section>
  {/* -----courses----- */}
  <section className="course">
    <h1>Courses we offer</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="course-col">
        <h3>Intermediate</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil
          quasi officia officiis beatae cumque quis laborum veritatis modi
          perspiciatis autem, nemo nostrum? Corrupti voluptatem quas expedita
          eos magni modi.
        </p>
      </div>
      <div className="course-col">
        <h3>Degree</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil
          quasi officia officiis beatae cumque quis laborum veritatis modi
          perspiciatis autem, nemo nostrum? Corrupti voluptatem quas expedita
          eos magni modi.
        </p>
      </div>
      <div className="course-col">
        <h3>Post-Graduation</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, nihil
          quasi officia officiis beatae cumque quis laborum veritatis modi
          perspiciatis autem, nemo nostrum? Corrupti voluptatem quas expedita
          eos magni modi.
        </p>
      </div>
    </div>
  </section>
  {/* CAMPUS */}
  <section className="campus">
    <h1>Our Global Campus</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="row">
      <div className="campus-col">
        <img src="/eduford_img/london.png" alt="" />
        <div className="layer">
          <h3>London</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="/eduford_img/newyork.png" alt="" />
        <div className="layer">
          <h3>New York</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="/eduford_img/washington.png" alt="" />
        <div className="layer">
          <h3>Washington</h3>
        </div>
      </div>
    </div>
  </section>
  {/* FACILTIES */}
  <section className="facilities">
    <h1>Our Facilties</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    <div className="row">
      <div className="facilities-col">
        <img src="/eduford_img/library.png" alt="" />
        <h3>World class Library Facilties </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          consectetur!
        </p>
      </div>
      <div className="facilities-col">
        <img src="/eduford_img/basketball.png" alt="" />
        <h3>Largest Playground </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          consectetur!
        </p>
      </div>
      <div className="facilities-col">
        <img src="/eduford_img/cafeteria.png" alt="" />
        <h3>CAFETARIA-Tasty and Healthy food </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          consectetur!
        </p>
      </div>
    </div>
  </section>
  {/* --------testimonials-------- */}
  <section className="testimonials">
    <h1>What our students say :</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
      totam!
    </p>
    <div className="row">
      <div className="testimonials-col">
        <img src="/eduford_img/user1.jpg" alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eveniet impedit neque, hic alias incidunt similique facere illum
            odio beatae atque. Fugiat sint eaque labore voluptates? Distinctio,
            alias tempora. Mollitia.
          </p>
          <h3>Christine Berkley</h3>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStarHalfStroke}/>
          
        </div>
      </div>
      <div className="testimonials-col">
        <img src="/eduford_img/user2.jpg" alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eveniet impedit neque, hic alias incidunt similique facere illum
            odio beatae atque. Fugiat sint eaque labore voluptates? Distinctio,
            alias tempora. Mollitia.
          </p>
          <h3>Dan Berk</h3>
          <FontAwesomeIcon className='stars' icon={faStar}/>
          <FontAwesomeIcon className='stars' icon={faStar}/>
          <FontAwesomeIcon className='stars'  icon={faStar}/>
          <FontAwesomeIcon className='stars' icon={faStar}/>
          <FontAwesomeIcon className='stars' icon={faStarHalfStroke}/>
        </div>
      </div>
    </div>
  </section>
  {/* ----------call-to-action--------- */}
  <section className="cta">
    <h1>
      Enroll for our Various online courses <br />
      anywhere from the world{" "}
    </h1>
    <a href="#" className="hero-btn">
      Contact us
    </a>
  </section>
  
  {/* JAVASCRIPT FOR MENU */}
</>
  )
}

