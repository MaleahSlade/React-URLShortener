import { useState } from "react";
import { shortenURL } from "../api.js";

export default function ShortenerForm({ onShorten }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const longURL = url.trim();

    if (longURL === "") {
      setError("Please add a link.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const shortURL = await shortenURL(longURL);
      onShorten(longURL, shortURL);
      setUrl("");
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <fieldset id="shortener-box">
      <form id="shortener-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="homepage" className="visually-hidden">
          Enter a URL:
        </label>

        <input
          type="url"
          id="homepage"
          name="homepage"
          placeholder="Shorten a link here..."
          aria-describedby="url-error"
          required
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />

        <small id="url-error" className="error-message" aria-live="polite">
          {error}
        </small>

        <button type="submit" id="shorten-button" disabled={loading}>
          {loading ? "Shortening..." : "Shorten It!"}
        </button>
      </form>
    </fieldset>
  );
}