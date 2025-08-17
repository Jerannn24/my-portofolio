"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Import Bootstrap JS hanya di client-side
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
            .then(() => {
                console.log("Bootstrap JS loaded");
            })
            .catch((err) => console.error("Bootstrap JS failed to load", err));
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-effect">
                <div className="container">
                    <Link href="#home" className="navbar-brand d-flex align-items-center navbar-effect navbar-text ">
                        <img src="./LogoYt.jpg" alt="Logo" width="30" height="30" className="m-auto navbar-link" />
                    </Link>
                    <div className="navbar-nav ms-auto navbar-text">
                        <Link href="#" className="navbar-text navbar-brand text-center d-flex align-items-center navbar-effect nav-link">
                            Junior Natra Situmorang
                        </Link>
                    </div>
                    <div className="navbar-brand">
                        <button
                            className="navbar-toggler navbar-effect"
                            type="button"
                            data-bs-theme="dark"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className={isOpen ? "btn-close" : "navbar-toggler-icon"}></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex" style={{ gap: "10px" }}>
                            <li className="nav-item">
                                <Link href="#home" className="nav-link navbar-effect text-center hover-change">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="#about" className="nav-link navbar-effect text-center hover-change">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link href="#project" className="nav-link navbar-effect text-center">
                                    Project
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
