"use client";
import React from 'react'
import Navbar from './Navbar'
import { Typewriter } from 'react-simple-typewriter'

const Portfolio = () => {
    return (
        <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <div className='container py-5' id='about'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-center' style={{ paddingBottom: "50px" }}>
                        <img
                            src='./myself.png'
                            alt='Myself'
                            className='img-fluid myself'
                            style={{ maxWidth: '500px', borderRadius: '50px' }}
                        />
                    </div>
                    <div className='col-md-6 text-white' style={{ paddingTop: "50px" }}>

                        <div className='desc-writer' style={{
                            minHeight: "10vw",   // tinggi static biar gak loncat2
                            width: "100%",        // atau kasih fixed width, misalnya "500px"
                            overflow: "hidden"    // biar kalau teks panjang nggak bikin layout geser
                        }}>
                            <h1 className='fw-bold'>
                                <Typewriter
                                    words={["I'm Junior Natra Situmorang"]}
                                    loop={1}             // atau false, supaya cuma sekali
                                    cursor={false}
                                    typeSpeed={70}
                                    deleteSpeed={0}
                                />
                            </h1>
                            <h5>
                                <Typewriter
                                    words={["I’m passionate about Software Engineering and excited to explore the world of AI Engineering 🤖. I love building things that solve real problems, experimenting with new ideas, and continuously learning along the way.", "Always open to collaboration, new opportunities, or just a chat — feel free to reach me anytime! ✉️"]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={20}
                                    deleteSpeed={50}
                                    delaySpeed={1500} />
                            </h5>
                        </div>
                        <a href='https://www.linkedin.com/in/junior-natra-929b42320/'>
                            <button className='contactMe'>
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div >
    )
}

export default Portfolio
