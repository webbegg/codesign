import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title> CODE & DESIGN</title>
        <meta name="description" content="Marcos Juan personal corner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex justify-center items-center bg-gray-800 select-none">
        <h1 className="tracking-wide font-black leading-none cursor-default flex flex-col text-4xl text-gray-300">
          <span>
            CODE <span className="text-gray-500">&</span>
          </span>
          <span>DESIGN</span>
        </h1>
      </main>
    </div>
  );
}
