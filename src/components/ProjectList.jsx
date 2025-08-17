"use client";
import React from "react";
import ScrollArea from "@/components/ScrollArea.jsx";

const projects = [
    { title: "Project 1", description: "Deskripsi project pertama." },
    { title: "Project 2", description: "Deskripsi project kedua." },
    { title: "Project 3", description: "Deskripsi project ketiga." },
    { title: "Project 4", description: "Deskripsi project keempat." },
    { title: "Project 5", description: "Deskripsi project kelima." },
    { title: "Project 6", description: "Deskripsi project keenam." },
];

const ProjectList = () => {
    return (
        <ScrollArea height="300px">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {projects.map((project, index) => (
                    <li
                        key={index}
                        style={{
                            border: "2px solid #10B981",
                            borderRadius: "10px",
                            padding: "15px",
                            marginBottom: "10px",
                            backgroundColor: "var(--bg-2)",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h5 style={{ fontWeight: "bold", marginBottom: "5px" }}>
                            {project.title}
                        </h5>
                        <p style={{ margin: 0 }}>{project.description}</p>
                    </li>
                ))}
            </ul>
        </ScrollArea>
    );
};

export default ProjectList;
