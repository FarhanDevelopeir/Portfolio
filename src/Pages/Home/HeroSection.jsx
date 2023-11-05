export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Assalamoalaikum! I'm Muhammad Farhan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">React </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Experienced React developer dedicated to transforming design concepts into functional web solutions.
            <br /> 
          </p>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/mainpic.png" alt="Hero Section" />
      </div>
    </section>
  );
}
