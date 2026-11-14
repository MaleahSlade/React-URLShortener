import { useRef, useState } from "react";
import { shortenURL } from "../api.js";

// Checks the link and returns { url } if it's good, or { error } if not
function validateURL(value) {
  if (value === "") {
    return { error: "Please add a link." };
  }

  // Be friendly: if they left off https://, add it for them
  const candidate = /^https?:\/\//i.test(value) ? value : "https://" + value;

  try {
    const parsed = new URL(candidate);

    // Must end like a real domain, e.g. ".com" or ".io"
    if (!/\.[a-z]{2,}$/i.test(parsed.hostname)) {
      return { error: "That doesn't look like a valid link. Try https://example.com" };
    }

    return { url: candidate };
  } catch {
    return { error: "That doesn't look like a valid link. Try https://example.com" };
  }
}

export default function ShortenerForm({ onShorten }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null); // lets us jump the cursor back into the box

  async function handleSubmit(event) {
    event.preventDefault();

    const result = validateURL(url.trim());

    if (result.error) {
      setError(result.error);
      inputRef.current.focus();
      return;
    }

    setError("");
    setLoading(true);

    try {
      const shortURL = await shortenURL(result.url);
      onShorten(result.url, shortURL);
      setUrl("");
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  function handleChange(event) {
    setUrl(event.target.value);
    if (error) setError(""); // clear the error as soon as they start fixing it
  }

  return (
    <fieldset id="shortener-box">
      <form id="shortener-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="homepage" className="visually-hidden">
          Enter a URL:
        </label>

        <input
          ref={inputRef}
          type="url"
          id="homepage"
          name="homepage"
          placeholder="Shorten a link here..."
          aria-describedby="url-error"
          aria-invalid={error !== ""}
          value={url}
          onChange={handleChange}
        />

        <small id="url-error" className="error-message" role="alert">
          {error}
        </small>

        <button type="submit" id="shorten-button" disabled={loading}>
          {loading ? "Shortening..." : "Shorten It!"}
        </button>
      </form>
    </fieldset>
  );
}