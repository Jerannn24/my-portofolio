"use client";
import { useEffect, useState } from "react";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    // cek preferensi user di localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark-mode");
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md font-bold"
            style={{
                background: "var(--navbar-fg)",
                color: "white",
                border: "none",
                cursor: "pointer",
                transition: "0.3s",
            }}
        >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default DarkMode;
