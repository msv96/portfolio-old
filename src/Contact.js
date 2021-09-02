import React from "react";

let done = (e) => {
    e.preventDefault();
    alert("Submitted Successfully");
};

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
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={(e) => done(e)}
                    id="usrform"
                    className="form"
                >
                    <input
                        name="name"
                        type="text"
                        className="inputbox"
                        placeholder="Your Name"
                        required
                    />
                    <br />
                    <input
                        name="email"
                        type="email"
                        className="inputbox"
                        placeholder="Your Email ID"
                        required
                    />
                    <br />
                    <textarea
                        rows="6"
                        cols="22"
                        name="comment"
                        form="usrform"
                        placeholder="Your Message"
                        className="inputbox"
                    ></textarea>
                    <br />
                    <input type="submit" value="SUBMIT" className="btn4" />
                </form>
                <a
                    href="https://linkedin.com/in/msv96"
                    target="_blank"
                    className="link5"
                    rel="noreferrer"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                    href="https://github.com/msv96"
                    target="_blank"
                    className="link55"
                    rel="noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a
                    href="mailto:msrini1100@gmail.com"
                    target="_blank"
                    className="link555"
                    rel="noreferrer"
                >
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
            <a href="#home" className="to_top">
                <i class="far fa-angle-double-up"></i>
            </a>
        </div>
    );
}

export default Contact;
