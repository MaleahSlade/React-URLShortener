import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ShortenerForm from "./components/ShortenerForm.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ResultsList from "./components/ResultsList.jsx";
import { getSavedLinks, saveLinks } from "./storage.js";

export default function App() {
  const [links, setLinks] = useState(getSavedLinks);
  const [searchTerm, setSearchTerm] = useState("");

  // Auto-save whenever the list changes
  useEffect(() => {
    saveLinks(links);
  }, [links]);

  function addLink(originalURL, shortURL) {
    setLinks((current) => [
      { id: crypto.randomUUID(), originalURL, shortURL },
      ...current,
    ]);
  }

  // Cross one off the list: keep everything except the matching id
  function deleteLink(id) {
    setLinks((current) => current.filter((link) => link.id !== id));
  }

  // A filtered *view* of the list; the saved list itself is untouched
  const term = searchTerm.trim().toLowerCase();
  const visibleLinks = links.filter(
    (link) =>
      link.originalURL.toLowerCase().includes(term) ||
      link.shortURL.toLowerCase().includes(term)
  );

  return (
    <>
      <Navbar />
      <Hero />
      <ShortenerForm onShorten={addLink} />
      {links.length > 0 && (
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      )}
      <ResultsList
        links={visibleLinks}
        onDelete={deleteLink}
        isSearching={term !== ""}
      />
    </>
  );
}