import Link from "next/link";

export default function SongListItem({ song }) {
  return (
    <tr className="border-b border-neutral-800">
      <td className="px-5 py-5 bg-neutral-900 text-base font-semibold">
        <Link
          href={"/" + song.slug}
          className="underline decoration-sky-400 decoration-0 hover:decoration-4"
        >
          <p className="text-neutral-300 whitespace-no-wrap">{song.title}</p>
        </Link>
      </td>
      <td className="px-5 py-5 bg-neutral-900 text-sm">
        <p className="text-neutral-300 whitespace-no-wrap">{song.genre}</p>
      </td>
      <td className="px-5 py-5 bg-neutral-900 text-sm hidden md:table-cell">
        <p className="text-neutral-300 whitespace-no-wrap">{song.location}</p>
      </td>
      <td className="px-5 py-5 bg-neutral-900 text-sm hidden sm:table-cell">
        <span className="relative inline-block px-3 py-1 font-semibold text-neutral-300 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-neutral-300 opacity-10 rounded-full"
          ></span>
          <span className="relative">{song.daw}</span>
        </span>
      </td>
    </tr>
  );
}
