export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search-links" className="visually-hidden">
        Search your shortened links
      </label>
      <input
        type="search"
        id="search-links"
        placeholder="Search your links..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}