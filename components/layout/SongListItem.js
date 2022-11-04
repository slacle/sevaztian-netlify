import Link from "next/link";

export default function SongListItem({ song }) {
  return (
    <>
      <Link href={"/" + song.slug}>
        <div className="border mb-5 flex justify-between">
          <div className="none">
            <h3 className="none">{song.title}</h3>
            <p className="none">{song.genre}</p>
            <p className="none">{song.location}</p>
          </div>
          <div className="none">
            <div className="none">
              <span>{song.daw}</span>
            </div>
            {song.guitar && (
              <div className="none">
                <span>Guitar</span>
              </div>
            )}
            {song.sample && (
              <div className="none">
                <span>Sample</span>
              </div>
            )}
          </div>
          <div className="none">
            {song.plugins.length
              ? song.plugins.map((p) => <span key={p}>{p}</span>)
              : "No plugins used"}
          </div>
        </div>
      </Link>
    </>
  );
}
