import React from "react";
import Title from "../components/Title";
import mainStyle from "../styles/Main.module.css";
const contact = () => {
  return (
    <section>
      <div className="container">
        <Title title={"contact me"} />
        <main className={mainStyle.main}>
          <h4>get in touch</h4>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              id="yourname"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id="youremail"
            />
            <textarea
              name="message"
              placeholder="Your Name"
              id="yourmessage"
            ></textarea>
            <input type="submit" className="btn" />
          </form>

          <h4>contact info</h4>
          <span>
            <i className="bx bxs-envelope"></i>
            <p>Sirhmd@outlook.com</p>
          </span>
          <span>
            <i className="bx bxs-map"></i>
            <p>Tebessa Algeria</p>
          </span>
        </main>
      </div>
    </section>
  );
};

export default contact;
