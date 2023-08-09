import { Link } from 'react-router-dom'
export default function About(){
    return (
        <>
  <section className="subheader">
  
    <h1>About us</h1>
  </section>
  {/* ----------about us content--------- */}
  <section className="about-us">
    <div className="row">
      <div className="about-col">
        <h1>We are the world's largest university</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          excepturi quae porro mollitia illo quaerat fuga, ad ipsa cum!
          Suscipit, tenetur quia? Earum nostrum maiores voluptates quam ipsum
          veniam corrupti.
        </p>
        <a href="#" className="hero-btn red-btn">
          Explore Now!!!
        </a>
      </div>
      <div className="about-col">
        <img src="./eduford_img/about.jpg" alt="" />
      </div>
    </div>
  </section>
  {/* ------footer------ */}

  {/* JAVASCRIPT FOR MENU */}
</>

    )
}

