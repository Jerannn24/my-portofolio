"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    useEffect(() => {
        // Import Bootstrap JS hanya di client-side
        import("bootstrap/dist/js/bootstrap.bundle.min.js")
            .then(() => {
                console.log("Bootstrap JS loaded");
            })
            .catch((err) => console.error("Bootstrap JS failed to load", err));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-3d">
            <div className="container">
                <Link href="#" className="navbar-brand d-flex align-items-center mr-10px">
                    <img src="./LogoYt.jpg" alt="Logo" width="30" height="30" className="m-auto p-5px" />
                </Link>
                <div className="navbar-nav ms-auto navbar-hover">
                    <Link href="#" className="navbar-brand d-flex align-items-center navbar-3d p-10px navbar-hover nav-link">
                        JUNIOR NATRA SITUMORANG
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item navbar-hover me-3 mb-2">
                            <Link href="#" className="nav-link navbar-3d text-center">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item navbar-hover me-3 mb-2">
                            <Link href="#about" className="nav-link navbar-3d text-center">
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item navbar-hover me-3 mb-2">
                            <Link href="#project" className="nav-link navbar-3d text-center">
                                PROJECT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
