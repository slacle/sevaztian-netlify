export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold pb-1">sevaztian</h1>
      <p className="italic pb-4">One short song a week.</p>
      <p>
        Currently working on this website. It will be updated frequently. Please
        check back in the coming days.
      </p>
      <div className="mt-4">
        <a
          href="https://soundcloud.com/sevaztian"
          className="underline text-sky-700 hover:text-sky-900"
        >
          SoundCloud
        </a>
        <br />
        <a
          href="https://audius.co/sevaztian/"
          className="underline text-sky-700 hover:text-sky-900"
        >
          Audius
        </a>
      </div>
    </>
  );
}
