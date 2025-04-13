import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-10 flex flex-wrap rounded-lg overflow-hidden">
      <div className="lg:w-1/2 w-full lg:py-6 lg:pr-5 mb-12 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
        <h1 className="text-2xl font-bold mb-1">sevaztian</h1>
        <p className="italic mb-10">One short song a week</p>
        <p className="mb-4">
          Currently working on this website. It will be updated frequently.
          <br />
          Please check back in the coming days.
        </p>
        <p className="mb-10">
          Feel free to listen to some{" "}
          <Link
            href={"/songs"}
            className="underline text-sky-300 hover:text-sky-400"
          >
            songs
          </Link>{" "}
          in the mean time.
        </p>
        <p className="mb-2">You can find me on:</p>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://soundcloud.com/sevaztian"
              className="underline text-sky-300 hover:text-sky-400"
            >
              SoundCloud
            </a>
          </li>
          <li>
            <a
              href="https://audius.co/sevaztian/"
              className="underline text-sky-300 hover:text-sky-400"
            >
              Audius
            </a>
          </li>
          <li>
            <a
              href="https://x.com/_sevaztian"
              className="underline text-sky-300 hover:text-sky-400"
            >
              X / Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_sevaztian/"
              className="underline text-sky-300 hover:text-sky-400"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@_sevaztian"
              className="underline text-sky-300 hover:text-sky-400"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@sevaztian_music"
              className="underline text-sky-300 hover:text-sky-400"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2 w-full lg:py-6 lg:pl-5">
        <div className="sm:flex rounded-lg p-5 bg-neutral-800 mb-10 sm:mb-5">
          <Image
            src="https://blockdaemon-audius-content-03.bdnodes.net/content/QmUVXGpoXMdi2oNbdph6RVyBvxdBHRsAGA888WvRh7yE1m/150x150.jpg"
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
                src="https://audius-metadata-5.figment.io/v1/tracks/EaXJR/stream?app_name=sevaztian"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
        <div className="sm:flex rounded-lg p-5 bg-neutral-800 mb-10 sm:mb-5">
          <Image
            src="https://blockdaemon-audius-content-03.bdnodes.net/content/QmTWQcVofczZCeJvcUXHaMHhNhzXsFq2DQQexjnDzLAb4e/150x150.jpg"
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
                src="https://audius-metadata-5.figment.io/v1/tracks/JNb8Z/stream?app_name=sevaztian"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
        <div className="sm:flex rounded-lg p-5 bg-neutral-800">
          <Image
            src="https://blockdaemon-audius-content-03.bdnodes.net/content/QmVJxxLbGHvu7SD12fxbuqmvTJi1zk294fFVSYRksK9Dg4/150x150.jpg"
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
                src="https://audius-metadata-5.figment.io/v1/tracks/0R7PK/stream?app_name=sevaztian"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}
