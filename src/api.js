// Send a URL to the Shrtr API and return the shortened version
export async function shortenURL(longURL) {
  const response = await fetch("https://shrtr.top/api/v1/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: longURL }),
  });

  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }

  const data = await response.json();

  if (!data.short_url) {
    throw new Error("The API did not return a shortened URL.");
  }

  return data.short_url;
}