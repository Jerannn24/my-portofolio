"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof document !== "undefined") {
            // Cek awal
            setIsDark(document.body.classList.contains("dark-mode"));

            // Observasi perubahan class body
            const observer = new MutationObserver(() => {
                setIsDark(document.body.classList.contains("dark-mode"));
            });

            observer.observe(document.body, {
                attributes: true,
                attributeFilter: ["class"],
            });

            return () => observer.disconnect();
        }
    }, []);


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
            <nav className="d-flex navbar navbar-expand-lg fixed-top navbar-effect align-items-center">
                <div className="container">
                    <Link href="#home" className="navbar-brand d-flex align-items-center navbar-effect navbar-text ">
                        <img src="./LogoYt.jpg" alt="Logo" width="30" height="30" className="m-auto navbar-link" />
                    </Link>
                    <DarkMode className="navbar-brand navbar-effect navbar-darkmode" />
                    <div className="navbar-nav ms-auto navbar-text">
                        <Link href="#" className="navbar-text navbar-brand text-center d-flex align-items-center navbar-effect nav-link">
                            Junior Natra Situmorang
                        </Link>
                    </div>
                    <div className="navbar-brand">
                        <button
                            className="navbar-toggler navbar-effect"
                            type="button"
                            data-bs-theme={isDark ? "dark" : "light"}
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
                            <li className="nav-item ">
                                <Link href="#skill" className="nav-link navbar-effect text-center">
                                    Skill
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
