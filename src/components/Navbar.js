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
                <Link href="#" className="navbar-brand d-flex align-items-center navbar-3d mr-10px ">
                    <img src="./LogoYt.jpg" alt="Logo" width="30" height="30" />
                </Link>
                <div className="navbar-nav ms-auto navbar-hover">
                    <Link href="#" className="navbar-brand d-flex align-items-center navbar-3d mr-10px navbar-hover nav-link">
                        PORTOFOLIO
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
                        <li className="nav-item navbar-hover">
                            <Link href="#" className="nav-link navbar-3d">
                                HOME
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
