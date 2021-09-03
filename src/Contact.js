import React from "react";

function Contact() {
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
                <form
                    name="contact v1"
                    method="post"
                    netlify="true"
                    data-netlify="true"
                    className="form"
                >
                    <input type="hidden" name="form-name" value="contact v1" />
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
                    <button type="submit" className="btn4">
                        SUBMIT
                    </button>
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
