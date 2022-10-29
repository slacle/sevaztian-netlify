import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>sevaztian</title>
        <meta name="description" content="One short song a week." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">sevaztian</h1>
      <div>One short song a week.</div>
    </div>
  );
}
