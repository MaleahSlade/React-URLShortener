import { useState } from "react";

export default function ResultCard({ id, originalURL, shortURL, onDelete }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(shortURL);
    setCopied(true);
  }

  return (
    <div className="result-card">
      <p className="original-link">{originalURL}</p>
      <a className="shortened-link" href={shortURL} target="_blank" rel="noreferrer">
        {shortURL}
      </a>
      <button type="button" className="copy-button" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </button>
      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(id)}
        aria-label={`Delete ${originalURL}`}
      >
        Delete
      </button>
    </div>
  );
}