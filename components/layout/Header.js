import Link from "next/link";

const Header = () => {
  return (
    <header className="text-neutral-200 bg-neutral-950 body-font">
      <div className="container flex justify-center mx-auto xl:px-20 lg:px-10 px-5 py-5">
        <Link
          href="/"
          className="flex max-w-max title-font font-medium text-white mb-4 sm:mb-0 hover:text-sky-300"
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
      </div>
    </header>
  );
};

export default Header;
