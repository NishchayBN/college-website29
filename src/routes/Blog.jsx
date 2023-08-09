import { Link } from 'react-router-dom'
export default function Blog(){
  return(
    <>
  
  <section className="subheader">
    
    <h1>Our Certificates and Online courses for 2023</h1>
  </section>
  {/* ---------blog-page-content------- */}
  <section className="blog-content">
    <div className="row">
      <div className="blog-left">
        <img src="./eduford_img/certificate.jpg" alt="" />
        <h2>Our Certificates and Online programs for 2023</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          dolores. Laudantium magnam iure voluptatem amet nostrum voluptatibus
          ab aliquid magni assumenda eos consectetur, veniam quae aperiam fugit
          consequuntur ut officia! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Maiores omnis commodi sed modi temporibus quis odio
          aut. Maxime suscipit voluptatem, eos, voluptate aut, id quasi odio
          ipsum facere ratione accusantium?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          accusantium et ullam recusandae cum minima quasi id itaque
          voluptatibus laboriosam, modi explicabo! Est omnis voluptatum
          accusamus expedita itaque accusantium, inventore nisi, cupiditate eius
          aperiam aliquam! Libero saepe, facere cum fuga recusandae deleniti
          dignissimos iure facilis quaerat dolore ullam totam explicabo aliquid
          rem id tenetur sit ipsum labore sint vero ipsa, beatae perspiciatis!
          Omnis, amet. Saepe corporis labore fuga doloremque deserunt? Libero
          tempora soluta consequatur iure provident, ipsam odio, error nisi
          voluptatem sunt ut. Dolorem minus doloremque dicta enim dolor, nulla
          harum itaque. Laborum omnis cupiditate enim, natus quidem praesentium
          exercitationem!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum
          ipsa maiores tempora, repudiandae unde aliquam qui aut sapiente autem
          commodi rerum expedita excepturi itaque sit maxime culpa animi debitis
          quas doloribus tempore incidunt pariatur. Commodi magni pariatur
          architecto velit ea qui, facilis sit illo mollitia, doloremque sint
          quis reprehenderit accusantium! Aut numquam quod consequuntur
          quibusdam. Explicabo ea aliquam neque. Accusantium exercitationem
          aliquid nihil accusamus! Earum, aperiam expedita! Iure necessitatibus
          excepturi eaque obcaecati eos, sequi inventore? Fugiat laudantium
          odio, beatae debitis nesciunt officia alias mollitia dolores veniam
          deleniti? Dolore ipsam ullam voluptatem, quae atque, blanditiis magni
          quibusdam eos animi ipsa laudantium maiores quam eum eligendi vel.
          Eligendi quas blanditiis veritatis nihil illum pariatur repudiandae
          possimus dolor suscipit nostrum minima, temporibus, sequi quae in
          doloribus repellat?
        </p>
        <div className="comment-box">
          <h3>Leave a comment</h3>
          <form action="#" className="comment-form">
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter E-mail" />
            <textarea rows={5} placeholder="Your comment" defaultValue={""} />
            <button type="submit" className="hero-btn red-btn">
              Post comment
            </button>
          </form>
        </div>
      </div>
      <div className="blog-right">
        <h3>Post Categories</h3>
        <div>
          <span>Business Analytics</span>
          <span>21</span>
        </div>
        <div>
          <span>Data Science</span>
          <span>24</span>
        </div>
        <div>
          <span>Machine Learning</span>
          <span>29</span>
        </div>
        <div>
          <span>Autocad</span>
          <span>23</span>
        </div>
        <div>
          <span>Journalism</span>
          <span>28</span>
        </div>
        <div>
          <span>E-commerce</span>
          <span>26</span>
        </div>
      </div>
    </div>
  </section>
  
  {/* JAVASCRIPT FOR MENU */}
</>

  )
}

