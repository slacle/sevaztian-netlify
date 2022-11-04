import Head from "next/head";
import songs from "../db.json";

export default function Song({ song }) {
  return (
    <>
      <Head>
        <title>{`sevaztian - ${song.title}`}</title>
      </Head>
      <div className="none">
        <iframe
          src={`https://audius.co/embed/track/${song.audius}?flavor=card`}
          width="400"
          height="480"
          allow="encrypted-media"
          style={{ border: "none" }}
        ></iframe>
        <div className="none">
          <h1>{song.title}</h1>
          <small>
            Recorded on{" "}
            {new Date(song.date).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            in {song.location}.
          </small>
          <p
            className="none"
            dangerouslySetInnerHTML={{ __html: song.content }}
          />
          <p className="none">Daw: {song.daw}</p>
          <br />
          <div className="none">
            Plugins:{" "}
            {song.plugins.length ? (
              <ul>
                {song.plugins.map((plugin, i) => (
                  <li key={i}> - {plugin}</li>
                ))}
              </ul>
            ) : (
              "None used"
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: songs.map((song) => ({
      params: { slug: song.slug },
    })),
  };
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const song = songs.find((song) => song.slug == slug);

  return { props: { song } };
}
