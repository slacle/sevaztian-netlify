import Head from "next/head";
import Image from "next/image";
import songs from "../db.json";

export default function Song({ song, artwork }) {
  return (
    <>
      <Head>
        <title>{`${song.title} - sevaztian`}</title>
      </Head>
      <div className="text-neutral-200 bg-neutral-800 p-10 sm:p-16 flex flex-wrap rounded-lg overflow-hidden">
        <div className="lg:w-1/2 w-full py-4 lg:pr-8 mb-12 lg:mb-0">
          <Image
            src={artwork}
            alt={song.title}
            width={480}
            height={480}
            priority
            className="object-cover object-center mx-auto rounded mb-10"
          />
          <audio
            controls
            controlsList="nodownload"
            className="w-full rounded h-10 opacity-50"
          >
            <source
              src={`https://creatornode.audius.co/tracks/stream/${song.audius_id}`}
              type="audio/mpeg"
            />
          </audio>
        </div>
        <div className="lg:w-1/2 w-full py-4 lg:pl-8">
          <h1 className="text-white text-2xl title-font font-medium mb-4">
            {song.title}
          </h1>
          <small className="mb-8 block text-neutral-400 italic">
            Recorded on{" "}
            {new Date(song.date).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            in {song.location}.
          </small>
          <div
            className="leading-relaxed mb-10"
            dangerouslySetInnerHTML={{ __html: song.description }}
          />
          <div>
            <div className="py-5 grid grid-cols-2 gap-4 border-t border-neutral-700">
              <span className="text-neutral-400">Genre</span>
              <span className="text-sm text-neutral-200">{song.genre}</span>
            </div>
            <div className="py-5 grid grid-cols-2 gap-4 border-t border-neutral-700">
              <span className="text-neutral-400">Mood</span>
              <span className="text-sm text-neutral-200">
                <ul className="list-disc list-inside">
                  {song.mood.map((mood, i) => (
                    <li key={i} className="mb-1.5">
                      {" "}
                      {mood}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
            <div className="py-5 grid grid-cols-2 gap-4 border-t border-neutral-700">
              <span className="text-neutral-400">Daw</span>
              <span className="text-sm text-neutral-200">{song.daw}</span>
            </div>
            <div className="py-5 grid grid-cols-2 gap-4 border-t border-neutral-700">
              <span className="text-neutral-400">Guitar</span>
              <span className="text-sm text-neutral-200">
                {song.guitar ? "Used" : "Not used"}
              </span>
            </div>
            <div className="py-5 grid grid-cols-2 gap-4 border-t border-neutral-700">
              <span className="text-neutral-400">Sample</span>
              <span className="text-sm text-neutral-200">
                {song.sample ? "Used" : "None used"}
              </span>
            </div>
            <div className="py-5 grid grid-cols-2 gap-4 border-t border-b border-neutral-700">
              <span className="text-neutral-400">Plugins</span>
              <span className="text-sm text-neutral-200">
                {song.plugins.length ? (
                  <ul className="list-disc list-inside">
                    {song.plugins.map((plugin, i) => (
                      <li key={i} className="mb-2">
                        {plugin}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "None used"
                )}
              </span>
            </div>
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

export async function getStaticProps(context) {
  const { slug } = context.params;
  const song = songs.find((song) => song.slug == slug);

  const res = await fetch(
    `https://discoveryprovider.audius.co/v1/tracks/${song.audius_id}?app_name=sevaztian`
  );
  const json = await res.json();
  const artwork = await json.data.artwork["480x480"];

  return { props: { song, artwork } };
}
