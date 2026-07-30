import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-10 flex flex-wrap rounded-lg overflow-hidden">
      <div className="lg:w-1/4 w-full lg:py-6 lg:pr-5 mb-10 lg:mb-0 lg:flex lg:flex-col lg:justify-center text-center lg:text-left">
        <h1 className="text-2xl font-bold mb-1">sevaztian</h1>
        <p className="italic mb-10">One short song a week</p>
        <p className="mb-10">
          <Link
            href={"/songs"}
            className="rounded-full px-5 py-3 ring-5 ring-gray-800 text-sky-300 hover:text-sky-400"
          >
            go to all songs <span>&rarr;</span>
          </Link>
        </p>
      </div>
      <div className="lg:w-2/4 w-full lg:py-6 lg:pl-5 mb-20 lg:mb-0">
        <div className="sm:flex rounded-lg p-5 bg-neutral-800 mb-10 sm:mb-5">
          <Image
            src="https://audius-creator-5.theblueprint.xyz/content/QmUVXGpoXMdi2oNbdph6RVyBvxdBHRsAGA888WvRh7yE1m/150x150.jpg"
            alt="Week 29 of 2013"
            width={100}
            height={100}
            priority
            className="object-cover rounded-full mx-auto sm:mr-3 mb-3 sm:mb-0"
          />
          <div className="w-full flex flex-col justify-center">
            <Link href={"/week-29-of-2013"} className="pb-3 mx-auto sm:mx-0">
              <h2 className="font-semibold hover:text-sky-300">
                Week 29 of 2013
              </h2>
            </Link>
            <audio
              controls
              controlsList="nodownload"
              className="w-full rounded h-10 opacity-50"
            >
              <source
                src="https://api.audius.co/v1/tracks/EaXJR/stream?app_name=sevaztian"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
        <div className="sm:flex rounded-lg p-5 bg-neutral-800 mb-10 sm:mb-5">
          <Image
            src="https://audius-creator-5.theblueprint.xyz/content/QmTWQcVofczZCeJvcUXHaMHhNhzXsFq2DQQexjnDzLAb4e/150x150.jpg"
            alt="Week 30 of 2012"
            width={100}
            height={100}
            priority
            className="object-cover rounded-full mx-auto sm:mr-3 mb-3 sm:mb-0"
          />
          <div className="w-full flex flex-col justify-center">
            <Link href={"/week-30-of-2012"} className="pb-3 mx-auto sm:mx-0">
              <h2 className="font-semibold hover:text-sky-300">
                Week 30 of 2012
              </h2>
            </Link>
            <audio
              controls
              controlsList="nodownload"
              className="w-full rounded h-10 opacity-50"
            >
              <source
                src="https://api.audius.co/v1/tracks/JNb8Z/stream?app_name=sevaztian"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
        <div className="sm:flex rounded-lg p-5 bg-neutral-800">
          <Image
            src="https://audius-creator-5.theblueprint.xyz/content/QmVJxxLbGHvu7SD12fxbuqmvTJi1zk294fFVSYRksK9Dg4/150x150.jpg"
            alt="Week 37 of 2011"
            width={100}
            height={100}
            priority
            className="object-cover rounded-full mx-auto sm:mr-3 mb-3 sm:mb-0"
          />
          <div className="w-full flex flex-col justify-center">
            <Link href={"/week-37-of-2011"} className="pb-3 mx-auto sm:mx-0">
              <h2 className="font-semibold hover:text-sky-300">
                Week 37 of 2011
              </h2>
            </Link>
            <audio
              controls
              controlsList="nodownload"
              className="w-full rounded h-10 opacity-50"
            >
              <source
                src="https://api.audius.co/v1/tracks/0R7PK/stream?app_name=sevaztian"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 w-full lg:py-6 lg:pl-5 flex justify-center lg:justify-end">
        <div className="max-w-max self-center rounded-lg p-5 bg-neutral-800 mb-10">
          <p className="mb-2">You can find me on:</p>
          <ul className="list-disc list-inside">
            <li className="mb-1 ml-1">
              <a
                href="https://soundcloud.com/sevaztian"
                className="text-sky-300 hover:text-sky-400"
              >
                SoundCloud
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://audius.co/sevaztian/"
                className="text-sky-300 hover:text-sky-400"
              >
                Audius
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://www.youtube.com/@sevaztian_music"
                className="text-sky-300 hover:text-sky-400"
              >
                YouTube
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://x.com/_sevaztian"
                className="text-sky-300 hover:text-sky-400"
              >
                X / Twitter
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://www.instagram.com/_sevaztian/"
                className="text-sky-300 hover:text-sky-400"
              >
                Instagram
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://www.tiktok.com/@_sevaztian"
                className="text-sky-300 hover:text-sky-400"
              >
                TikTok
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://mastodon.social/@sevaztian"
                className="text-sky-300 hover:text-sky-400"
              >
                Mastodon
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://bsky.app/profile/sevaztian.com"
                className="text-sky-300 hover:text-sky-400"
              >
                Bluesky
              </a>
            </li>
            <li className="mb-1 ml-1">
              <a
                href="https://patreon.com/sevaztian"
                className="text-sky-300 hover:text-sky-400"
              >
                Patreon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
