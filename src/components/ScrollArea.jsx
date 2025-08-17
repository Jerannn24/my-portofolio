"use client";
import React, { useRef } from "react";

const ScrollArea = ({ children, height = "200px" }) => {
    const scrollRef = useRef(null);

    return (
        <div style={{ padding: "20px" }}>
            <div
                ref={scrollRef}
                style={{
                    width: "100%",
                    height: height,
                    overflowY: "scroll",
                    padding: "10px",
                    border: "2px solid #333",
                    scrollbarWidth: "thin",               // Firefox: tipis
                    scrollbarColor: "#10B981 #e0e0e0",
                    borderRadius: "10px",  // Firefox: thumb dan track
                }}
            >
                {children}
            </div>

            <style jsx>{`
        div::-webkit-scrollbar {
          width: 12px; /* lebar scrollbar */
        }

        div::-webkit-scrollbar-track {
          background: #e0e0e0; /* track */
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb {
          background-color: #10B981; /* emerald */
          border-radius: 10px;
          border: 3px solid #e0e0e0;
        }

        div::-webkit-scrollbar-thumb:hover {
          background-color: #059669; /* emerald lebih gelap saat hover */
        }
      `}</style>
        </div>
    );
};

export default ScrollArea;
