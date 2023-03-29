import allSongs from "../db.json";
import SongListItem from "../components/SongListItem";
import Filter from "../components/Filter";
import { useState } from "react";

export default function Songs() {
  const [songs, setSongs] = useState(allSongs);

  return (
    <div className="flex flex-wrap gap-10 min-w-full rounded-lg overflow-hidden">
      <div className="lg:flex-grow-0">
        <div className="px-5 py-3 bg-neutral-800 text-neutral-200 text-xs font-semibold uppercase tracking-wider">
          Filter
        </div>
        <Filter allSongs={allSongs} setSongs={setSongs} />
      </div>
      <table className="lg:flex-auto h-fit leading-normal text-center">
        <thead>
          <tr>
            <th className="px-5 py-3 bg-neutral-800 text-neutral-200 text-xs font-semibold uppercase tracking-wider">
              Song
            </th>
            <th className="px-5 py-3 bg-neutral-800 text-neutral-200 text-xs font-semibold uppercase tracking-wider">
              Genre
            </th>
            <th className="px-5 py-3 bg-neutral-800 text-neutral-200 text-xs font-semibold uppercase tracking-wider hidden md:table-cell">
              Location
            </th>
            <th className="px-5 py-3 bg-neutral-800 text-neutral-200 text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">
              Daw
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.length > 0 ? (
            songs.map((song) => (
              <SongListItem key={song.audius_id} song={song} />
            ))
          ) : (
            <tr>
              <td className="py-10" colSpan={4}>
                No songs found matching these selections.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
