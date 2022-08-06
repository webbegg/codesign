import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title> CODE & DESIGN</title>
        <meta name="description" content="Marcos Juan personal corner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex flex-col space-y-4 justify-center items-center bg-black select-none">
        <h1 className="font-title leading-none tracking-wider cursor-default flex flex-col text-4xl text-gray-300">
          <span>
            CODE <span className="text-blackish">&</span>
          </span>
          <span>DESIGN</span>
        </h1>
      </main>
    </div>
  );
}
