"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-xl shadow-md font-semibold transition
                 bg-[var(--navbar-bg)] text-[var(--navbar-fg)] hover:text-[var(--navbar-fg-hover)]"
        >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}
