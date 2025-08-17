import React, { useState, useEffect } from 'react'

const DarkMode = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDark(true);
        }
    }, []);

    return (
        <button
            onClick={() => setDark(!dark)}
            className='navbar-branc navbar-text'
            style={{
                padding: "5px",
                borderRadius: "15px",
                border: "none",
                cursor: "pointer",
                backgroundColor: dark ? "#333" : "#ddd",
                color: dark ? "#fff" : "#000",
                transition: "all 0.6s ease",
            }}
        >
            {dark ? "🌑 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
};


export default DarkMode