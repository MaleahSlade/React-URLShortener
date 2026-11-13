import illustration from "../assets/img/illustration-working.svg";

export default function Hero() {
  return (
    <fieldset>
      <div className="hero-section">
        <div className="hero-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="intro-buttons">Get Started</button>
        </div>

        <div className="hero-image">
          <img
            src={illustration}
            alt="Hero Illustration"
            style={{ width: "75%" }}
          />
        </div>
      </div>
    </fieldset>
  );
}