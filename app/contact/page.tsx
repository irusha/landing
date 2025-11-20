'use client';

import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        setStatus(data.success ? "Message sent!" : "Error sending message.");
    };

    return (
        <div style={{ padding: "3rem", display: "flex", justifyContent: "center" }}>

            <div style={{ display: "flex", gap: "3rem", maxWidth: "1000px" }}>

                {/* LEFT PANEL - FORM */}
                <div style={{ width: "50%" }}>
                    <h1>CONTACT US</h1>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            style={{ padding: "10px", borderBottom: "1px solid black" }}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter a valid email address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={{ padding: "10px", borderBottom: "1px solid black" }}
                        />

                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            style={{ padding: "10px", borderBottom: "1px solid black", minHeight: "120px" }}
                        />

                        <button type="submit" style={{ padding: "12px 25px", border: "1px solid black", cursor: "pointer" }}>
                            SUBMIT
                        </button>

                    </form>

                    {status && <p style={{ marginTop: "1rem" }}>{status}</p>}

                    <p style={{ marginTop: "2rem", fontSize: "14px" }}>
                        Image by <a href="https://www.freepik.com">Freepik</a>
                    </p>
                </div>

                {/* RIGHT PANEL - CONTACT DETAILS */}
                <div style={{
                    width: "45%",
                    background: "#1f242e",
                    color: "white",
                    padding: "2rem",
                    borderRadius: "8px"
                }}>

                    <h2>📞 CALL US</h2>
                    <p>+94 753405009</p>

                    <br />

                    <h2>📍 LOCATION</h2>
                    <p>Repz.lk, Bay 7, Trace Expert City, Maradana, Colombo 10</p>

                    <br />

                    <h2>⏰ BUSINESS HOURS</h2>
                    <p>Mon – Fri: 8.30am – 5.30pm</p>
                </div>
            </div>
        </div>
    );
}
