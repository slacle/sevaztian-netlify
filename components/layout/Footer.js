import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-neutral-400 bg-neutral-950 body-font">
      <div className="container mx-auto xl:px-20 lg:px-10 px-5 py-3">
        <p className="text-sm text-center">
          <Link href={"/songs"} className="hover:text-sky-300">
            All songs
          </Link>
          <span className="px-5">|</span>
          <Link href={"/about-sevaztian"} className="hover:text-sky-300">
            About
          </Link>
          <span className="px-5">|</span>
          sevaztian &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
