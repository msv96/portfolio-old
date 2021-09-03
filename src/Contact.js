import axios from "axios";
import React, { useState } from "react";

function Contact() {
    const [name, setname] = useState("");
    const [mail, setmail] = useState("");
    const [msg, setmsg] = useState("");
    const [stat, setstat] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        let date = new Date().toString();
        setstat(true);
        try {
            setname("");
            setmail("");
            setmsg("");
            await axios.post(
                `https://60f460de3cb0870017a8a216.mockapi.io/comment`,
                { name, mail, msg, date }
            );
            setTimeout(() => {
                setstat(false);
            }, 2000);
        } catch (error) {
            setstat(false);
            console.log(error);
        }
    };
    return (
        <div id="contact" className="contactme">
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                height="100"
                width="100%"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0 L50 97 L100 0"
                    fill="hsl(210, 10%, 15%)"
                    stroke="hsl(210, 10%, 15%)"
                ></path>
            </svg>
            <div className="contact">
                <div className="card">CONTACT</div>
                <div className="cardline"></div>
                <form method="post" className="form" onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name
                            <br />
                            <input
                                name="name"
                                type="text"
                                className="inputbox"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email ID
                            <br />
                            <input
                                name="emailid"
                                type="email"
                                className="inputbox"
                                value={mail}
                                onChange={(e) => setmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Comments
                            <br />
                            <textarea
                                rows="6"
                                cols="22"
                                name="message"
                                className="inputbox"
                                value={msg}
                                onChange={(e) => setmsg(e.target.value)}
                            ></textarea>
                        </label>
                    </div>
                    <button type="submit" className="btn4">
                        SUBMIT
                    </button>
                    {stat ? <p>Message Sent Successfully</p> : ""}
                </form>
                <a
                    href="https://linkedin.com/in/msv96"
                    target="_blank"
                    className="link5"
                    rel="noreferrer"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    href="https://github.com/msv96"
                    target="_blank"
                    className="link55"
                    rel="noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="mailto:msrini1100@gmail.com"
                    target="_blank"
                    className="link555"
                    rel="noreferrer"
                >
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
            <a href="#home" className="to_top">
                <i className="far fa-angle-double-up"></i>
            </a>
        </div>
    );
}

export default Contact;
