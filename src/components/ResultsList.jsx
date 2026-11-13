import ResultCard from "./ResultCard.jsx";

export default function ResultsList({ links }) {
  return (
    <fieldset id="results-box">
      <section id="results-container" aria-label="Shortened links">
        {links.map((link) => (
          <ResultCard
            key={link.id}
            originalURL={link.originalURL}
            shortURL={link.shortURL}
          />
        ))}
      </section>
    </fieldset>
  );
}