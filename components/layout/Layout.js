import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>sevaztian</title>
        <meta name="description" content="One short song a week." />
      </Head>
      <Header />
      <main className="flex-1 container mx-auto p-5">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
