const STORAGE_KEY = "shortenedLinks";

// Read saved links (older ones without an id get one)
export function getSavedLinks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    return JSON.parse(saved).map((link) => ({
      ...link,
      id: link.id ?? crypto.randomUUID(),
    }));
  } catch {
    return [];
  }
}

// Save links
export function saveLinks(links) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  } catch {
    // if storage is blocked, the app still works for this visit
  }
}