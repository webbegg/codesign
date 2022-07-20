import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title> CODE & DESIGN</title>
        <meta name="description" content="Marcos Juan personal corner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex justify-center items-center bg-gray-900 select-none">
        <h1 className="cursor-default flex flex-col font-bold leading-none text-2xl text-gray-300 bg-gray-800 shadow-lg p-4 rounded-2xl">
          <span>
            CODE <span className="text-gray-500">&</span>
          </span>
          <span>DESIGN</span>
        </h1>
      </main>
    </div>
  );
}
