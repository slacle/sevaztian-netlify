import songs from "../db.json";
import SongListItem from "../components/layout/SongListItem";

export default function Songs() {
  return (
    <>
      <div className="inline-block min-w-full rounded-lg overflow-hidden my-5">
        <table className="min-w-full leading-normal text-center">
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
            {songs.map((song) => (
              <SongListItem key={song.audius_id} song={song} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
