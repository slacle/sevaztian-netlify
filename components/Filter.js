import { useEffect, useRef, useState } from "react";

export default function Filter({ allSongs, setSongs }) {
  const [selections, setSelections] = useState({});

  // prevent useEffect to run (so filter doesn't run) on page load.
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    setSongs(
      allSongs.filter(
        (song) =>
          (selections.daw == undefined ||
            selections.daw == "all" ||
            song.daw == selections.daw) &&
          (selections.location == undefined ||
            selections.location == "all" ||
            song.location == selections.location) &&
          (selections.genre == undefined ||
            selections.genre == "all" ||
            song.genre == selections.genre)
      )
    );
  }, [selections]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSelections(e) {
    setSelections((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked ?? e.target.value,
    }));
  }

  return (
    <form>
      <br />

      {/* ---------- Daw ---------- */}
      <label htmlFor="daw">Daw:</label>
      <select
        className="block w-full px-3 py-2 bg-neutral-900 text-neutral-200 border border-neutral-700 rounded-sm focus:ring-blue-500 focus:border-blue-500"
        name="daw"
        id="daw"
        onChange={handleSelections}
      >
        <option value="all">All</option>
        {Array.from(new Set(allSongs.map((song) => song.daw)))
          .sort()
          .map((daw) => {
            return (
              <option key={daw} value={daw}>
                {daw}
              </option>
            );
          })}
      </select>

      <br />

      {/* ---------- Location ---------- */}
      <label htmlFor="location">Location:</label>
      <select
        className="block w-full px-3 py-2 bg-neutral-900 text-neutral-200 border border-neutral-700 rounded-sm focus:ring-blue-500 focus:border-blue-500"
        name="location"
        id="location"
        onChange={handleSelections}
      >
        <option value="all">All</option>
        {Array.from(new Set(allSongs.map((song) => song.location)))
          .sort()
          .map((location) => {
            return (
              <option key={location} value={location}>
                {location}
              </option>
            );
          })}
      </select>

      <br />

      {/* ---------- Genre ---------- */}
      <label htmlFor="genre">Genre:</label>
      <select
        className="block w-full px-3 py-2 bg-neutral-900 text-neutral-200 border border-neutral-700 rounded-sm focus:ring-blue-500 focus:border-blue-500"
        name="genre"
        id="genre"
        onChange={handleSelections}
      >
        <option value="all">All</option>
        {Array.from(new Set(allSongs.map((song) => song.genre)))
          .sort()
          .map((genre) => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
      </select>

      <br />
    </form>
  );
}
