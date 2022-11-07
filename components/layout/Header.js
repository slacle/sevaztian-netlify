import Link from "next/link";

const Header = () => {
  return (
    <header className="text-neutral-200 bg-neutral-800 body-font">
      <div className="container mx-auto flex flex-wrap xl:px-20 lg:px-10 px-5 py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 p-2 bg-neutral-900 rounded-full text-sky-400 fill-current"
            viewBox="0 0 184.751 184.751"
          >
            <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z" />
          </svg>
          <span className="ml-1 text-xl">sevaztian</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/songs" className="mr-10 hover:text-white">
            Songs
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
