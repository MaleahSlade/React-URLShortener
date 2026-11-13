import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ShortenerForm from "./components/ShortenerForm.jsx";
import ResultsList from "./components/ResultsList.jsx";
import { getSavedLinks, saveLinks } from "./storage.js";

export default function App() {
  // The order list: read saved links once, when the app starts
  const [links, setLinks] = useState(getSavedLinks);

  // Whenever the list changes, save it
  useEffect(() => {
    saveLinks(links);
  }, [links]);

  // Newest link goes to the front
  function addLink(originalURL, shortURL) {
    setLinks((current) => [
      { id: crypto.randomUUID(), originalURL, shortURL },
      ...current,
    ]);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <ShortenerForm onShorten={addLink} />
      <ResultsList links={links} />
    </>
  );
}