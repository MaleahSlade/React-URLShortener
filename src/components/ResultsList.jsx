import ResultCard from "./ResultCard.jsx";

export default function ResultsList({ links, onDelete, isSearching }) {
  return (
    <fieldset id="results-box">
      <section id="results-container" aria-label="Shortened links">
        {links.length === 0 && isSearching && (
          <p className="no-results" role="status">
            No links match your search.
          </p>
        )}

        {links.map((link) => (
          <ResultCard
            key={link.id}
            id={link.id}
            originalURL={link.originalURL}
            shortURL={link.shortURL}
            onDelete={onDelete}
          />
        ))}
      </section>
    </fieldset>
  );
}