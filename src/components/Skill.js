import React from 'react'

const Skill = () => {
    return (
        <div className='container'>
            <div>
                <ul
                    className='d-flex flex-column align-items-center'
                    style={{ listStyleType: "none", padding: 0, margin: 0 }}
                >
                    <li className='pb-3 text-center'>
                        <h4>Languages & Tools</h4>
                        <h5 className="d-flex flex-wrap justify-content-center gap-2">
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                C Language <i className='devicon-c-original colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                Python <i className='devicon-python-plain colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                HTML <i className='devicon-html5-plain colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                CSS <i className='devicon-css3-plain colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                JavaScript <i className='devicon-javascript-plain colored'></i>
                            </span>
                        </h5>
                    </li>
                    <li className='pb-3 text-center'>
                        <h4>Frameworks & Libraries</h4>
                        <h5 className="d-flex flex-wrap justify-content-center gap-2">
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                React <i className='devicon-react-original colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                Next.js <i className='devicon-nextjs-plain colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                Tailwind CSS <i className='devicon-tailwindcss-original colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                Bootstrap <i className='devicon-bootstrap-plain colored'></i>
                            </span>
                        </h5>
                    </li>
                    <li className='pb-3 text-center'>
                        <h4>Version Control</h4>
                        <h5 className="d-flex flex-wrap justify-content-center gap-2">
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                Git <i className='devicon-git-plain colored'></i>
                            </span>
                            <span className='badge span-style' style={{ backgroundColor: 'var(--navbar-fg)', color: 'var(--navbar-bg)' }}>
                                GitHub <i className='devicon-github-plain colored'></i>
                            </span>
                        </h5>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Skill
