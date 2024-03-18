import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";


const Home = () => {
  return (
    <> 
    <div className='home' id='home'>
     <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
     </main>
    </div>
     <div className="home2">
        <img src={vg} alt='Graphics' />

        <div>
        <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
          </div>
     </div>
    
    <div className="home3" id='about'>
        <div>
        <h1>Who we are ?</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet, est tenetur vel laudantium pariatur voluptate sit nostrum nemo neque cum, deleniti veritatis distinctio velit porro accusantium numquam asperiores! Dignissimos sed labore libero accusamus sint explicabo numquam voluptatem tenetur dicta ipsum perferendis, obcaecati aut, ad nihil error, expedita nisi reprehenderit saepe? Reprehenderit, accusantium nesciunt cumque repudiandae assumenda debitis error laborum ducimus, obcaecati quam, dolorem libero! Soluta, alias culpa. Sapiente debitis ut harum sunt reprehenderit, magnam placeat deserunt? Neque molestias vero ex perspiciatis eveniet iusto accusamus! Eius, odio. Quaerat, nostrum neque. Temporibus odio libero quas aliquam quam doloribus voluptatibus, distinctio aperiam.
        </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay: "1s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  );
}

export default Home
