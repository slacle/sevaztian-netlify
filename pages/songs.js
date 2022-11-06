import songs from "../db.json";
import SongListItem from "../components/layout/SongListItem";

export default function Songs() {
  return (
    <>
      <h1 className="text-2xl font-bold pb-1 mb-5">Songs</h1>
      {songs.map((song) => (
        <SongListItem key={song.audius_id} song={song} />
      ))}
    </>
  );
}
