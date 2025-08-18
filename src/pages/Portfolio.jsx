"use client";
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import ProjectList from '@/components/ProjectList.js';
import Skill from '@/components/Skill.js';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link.js';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Portfolio = () => {
    return (
        <div className="full-background" style={{ color: "var(--fg)", backgroundColor: "var(--bg)", minHeight: "100vh", margin: "0" }}>
            <Navbar />
            <div className='container py-5' id='about home'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-center' style={{ paddingBottom: "50px" }}>
                        <img
                            src='./myself.png'
                            alt='Myself'
                            className='img-fluid myself'
                            style={{ borderRadius: "50px" }}
                        />
                    </div>
                    <div className='col-md-6' style={{ paddingTop: "50px" }}>

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
            <div className='transition-1'>

            </div>
            <div id='project' style={{
                backgroundColor: "var(--bg-2)",
                minHeight: "100vh",
            }} >
                <div
                    className='container'>
                    <h1 className='fw-bold text-center'>My Project Review</h1>
                    <div className='card-area'>
                        <ProjectList />
                    </div>
                </div>
            </div>
            <div className='transition-1-reversed'>
            </div>
            <div id="skill" style={{
                backgroundColor: "var(--bg)",
                minHeight: "100vh",
            }}>
                <h1 className='fw-bold text-center pb-5' >Skills & Tools</h1>
                <Skill />
            </div>
            <div className='transition-1'>
            </div>
            <div style={{ background: "var(--bg-2)" }}>
                <footer className='container text-center' style={{ background: "var(--bg-2)", padding: "20px" }}>
                    <Link href="#home" className="navbar-brand d-flex align-items-center navbar-effect navbar-text" style={{ background: "var(--bg-2)" }}>
                        <img src="./LogoYt.jpg" alt="Logo" width="30" height="30" className="m-auto navbar-link" style={{ borderRadius: '100%', background: "var(--bg-2)" }} />
                    </Link>

                    <h3 className='text-center fw-bold mt-3'>Let's Talk With Me!</h3>
                    <p className='text-center fw-light'>
                        I’m open to new opportunities, collaborations, or just a friendly chat.
                        Let’s create something impactful together 🚀
                    </p>

                    {/* Social Icons */}
                    <div className="d-flex justify-content-center gap-3 mt-3">
                        <a href="https://github.com/Jerannn24" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navbar-fg)', fontSize: "1.8rem" }}>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/junior-natra-929b42320/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navbar-fg)', fontSize: "1.8rem" }}>
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com/j.natras" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navbar-fg)', fontSize: "1.8rem" }}>
                            <FaInstagram />
                        </a>
                        <a href="mailto:juniornatra72@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navbar-fg)', fontSize: "1.8rem" }}>
                            <MdEmail />
                        </a>
                    </div>
                </footer>
            </div>
            <div className='transition-1-reversed' style={{ height: '10vh' }}>
            </div>
        </div >
    )
}

export default Portfolio
