import { Link } from 'react-router-dom'
export default function Course()
{
  return(
    <>
  
  <section className="subheader">
  
    <h1>Our Courses</h1>
  </section>
  {/* ---------courses------- */}
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
  {/* -------facilties------ */}
  <section className="facilities">
    <h1>Our Facilties</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    <div className="row">
      <div className="facilities-col">
        <img src="./eduford_img/library.png" alt="" />
        <h3>World class Library Facilties </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          consectetur!
        </p>
      </div>
      <div className="facilities-col">
        <img src="./eduford_img/basketball.png" alt="" />
        <h3>Largest Playground </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          consectetur!
        </p>
      </div>
      <div className="facilities-col">
        <img src="./eduford_img/cafeteria.png" alt="" />
        <h3>CAFETARIA-Tasty and Healthy food </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          consectetur!
        </p>
      </div>
    </div>
  </section>

  {/* JAVASCRIPT FOR MENU */}
</>

  )
}
