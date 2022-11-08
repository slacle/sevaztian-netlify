import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen text-neutral-300 bg-neutral-900">
      <Head>
        <title>sevaztian</title>
        <meta name="description" content="One short song a week." />
      </Head>
      <Header />
      <main className="flex-1 container mx-auto xl:px-20 lg:px-10 px-5 py-16">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
