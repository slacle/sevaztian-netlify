const Footer = () => {
  return (
    <footer className="text-neutral-400 bg-neutral-800 body-font">
      <div className="container mx-auto xl:px-20 lg:px-10 px-5 py-3">
        <p className="text-sm text-center">
          sevaztian &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
