import React from 'react'
import Navbar from './Navbar'

const Portfolio = () => {
    return (
        <div style={{ color: "var(--fg)", backgroundColor: "var(--bg)", minHeight: "100vh" }}>
            <Navbar />
            <div className='container py-5' id='home'>
                <div className='row align-items-center'>
                    {/* Kolom gambar */}
                    <div className='col-md-6 text-center'>
                        <img
                            src='./myself.png'
                            alt='Myself'
                            className='img-fluid'
                            style={{ maxWidth: '500px', borderRadius: '100px' }}
                        />
                    </div>

                    {/* Kolom teks */}
                    <div className='col-md-6 text-white'>
                        <h1 className='fw-bold'>I'm Junior Natra Situmorang</h1>
                        <p>
                            Mahasiswa Teknik Informatika yang suka ngoprek teknologi, bikin projek, dan selalu penasaran hal baru.
                        </p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio
