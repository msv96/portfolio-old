import axios from "axios";
import React, { useState } from "react";

function Contact() {
    const [serverState, setServerState] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        setServerState(true);
        try {
            await axios({
                method: "post",
                url: "https://formspree.io/f/xknkkzkq",
                data: new FormData(form),
            });
            setServerState(false);
        } catch (error) {
            setServerState(false);
            console.log(error);
        }
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
    };

    return (
        <div id="contact" className="contactme">
            <div className="contact">
                <div className="card">CONTACT</div>
                <div className="cardline"></div>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name
                            <br />
                            <input
                                name="name"
                                type="text"
                                className="inputbox"
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
                            ></textarea>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn4"
                        disabled={serverState}
                    >
                        SUBMIT
                    </button>
                    {serverState ? <p>Message Sent Successfully</p> : ""}
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
