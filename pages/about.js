import React from "react";
import Title from "../components/Title";
import mainStyle from "../styles/Main.module.css";

const about = () => {
  return (
    <section>
      <div className="container">
        <Title title={"about me"} />
        <main className={mainStyle.main}>
          <h4>Hi , I’M Abdelhamid</h4>
          <p>
            Frontend developer with 5 years experience,I create successful
            websites that are fast, easy to use, and built with best practices.
          </p>
          <p>
            I work to make a better web; one that is fast, easy to use,
            beautiful, accessible to all. I use HTML, CSS, and JavaScript to
            produce responsive websites and web apps that provide users the best
            and most appropriate experience suited to their device and browser.
          </p>
          <p>
            I have a special interest in use of animation on the web. I
            particularly like working on websites that have seamless transitions
            and require high-level performance to maintain a smooth and
            appealing website.
          </p>
        </main>
      </div>
    </section>
  );
};

export default about;
