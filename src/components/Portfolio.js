"use client";
import React from 'react'
import Navbar from './Navbar'
import { Typewriter } from 'react-simple-typewriter'

const Portfolio = () => {
    return (
        <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <div className='container py-5' id='home'>
                <div className='row align-items-center'>
                    <div className='col-md-6 text-center'>
                        <img
                            src='./myself.png'
                            alt='Myself'
                            className='img-fluid'
                            style={{ maxWidth: '500px', borderRadius: '10px' }}
                        />
                    </div>
                    <div className='col-md-6 text-white'>
                        <h1 className='fw-bold'>
                            <Typewriter
                                words={["I'm Junior Natra Situmorang"]}
                                loop={1}             // atau false, supaya cuma sekali
                                cursor={false}
                                typeSpeed={70}
                                deleteSpeed={0}
                            />
                        </h1>
                        <p>
                            <Typewriter
                                words={["I was interested at Software Engineering"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={100}
                                delaySpeed={1500} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
