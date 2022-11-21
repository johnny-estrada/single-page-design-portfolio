import "./About.css";

function About() {
  return (
    <>
      <section className="section">
          <img className="card__img" src="./images/image-amy.webp" alt="Amy" />

        <div className="card__content">
          <h2 className="card__title">
            I’m Amy, and I’d love to work on your next project
          </h2>
          <p className="card__text">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <button className="card__cta">Free Consultation</button>
        </div>
      </section>
    </>
  );
}

export default About;
