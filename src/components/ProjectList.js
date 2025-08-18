"use client";
import React from "react";

// Contoh data project
const projects = [
    {
        title: "Working ATM",
        description: "Python ATM Basic Project",
        status: "Completed",
        url: "https://github.com/Jerannn24/ATM"
    },
    {
        title: "Hospital System Management",
        description: "This project was made as a Team, using C without UI/UX",
        status: "Completed",
        url: "https://github.com/Jerannn24/Rumah-Sakit-Nimons"
    },
    {
        title: "Pokemon Games using Prolog Language",
        description: "This Project was made as a Team, using prolog without UI/UX",
        status: "Completed",
        url: "https://github.com/Jerannn24/Pokemon-Games"
    },
    {
        title: "Analisis Job Application",
        description: "Job Acceptance Prediction Project using Node2Vec and Logistic Regression using Python",
        status: "Completed",
        url: "https://github.com/Jerannn24/Analisis-Job-Application"
    },
    {
        title: "Calculator App",
        description: "Simple Calculator App using NextJs",
        status: "Completed",
        url: "https://github.com/Jerannn24/Calculator-App"
    },
    {
        title: "ToDo App",
        description: "Simple Todo App using CRUD method (NextJs)",
        status: "Completed",
        url: "https://github.com/Jerannn24/TodoApp"
    },
    {
        title: "Note App",
        description: "On Working Project",
        status: "in Progress",
        url: "https://github.com/Jerannn24/note-app"    
    },
];

const ProjectList = () => {
    return (
        <div className="container py-4">
            <div className="row g-4" >
                {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card h-100 shadow-sm card-style" style={{ borderTopRightRadius: "10px", borderBottomLeftRadius: "10px", backgroundColor: 'var(--navbar-bg)' }}>
                            <a href={project.url} target="_blank" className="text-decoration-none" style={{ color: "var(--fg)" }}>
                                <div className="card-body card-style-body" style={{ backgroundColor: 'var(--navbar-bg)', borderTopRightRadius: "10px", height: "150px" }}>
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                </div>
                                <div className="card-footer text-end card-style-body" style={{ borderBottomLeftRadius: "10px" }}>
                                    <span
                                        className={`badge ${project.status === "Completed"
                                            ? "bg-success"
                                            : project.status === "In Progress"
                                                ? "bg-warning text-dark"
                                                : "bg-primary"
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
