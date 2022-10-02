import Head from "next/head";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div>
      <Head>
        <title> CODE & DESIGN</title>
        <meta name="description" content="Marcos Juan personal corner" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#f2f2f2" />
      </Head>

      <main className="h-screen flex flex-col space-y-4 justify-center items-center bg-black select-none">
        <div className="flex items-center space-x-4">
          <Logo color="#5e5e5e" className="scale-90" />
          <h1 className="font-title leading-none tracking-wider cursor-default flex flex-col text-4xl text-gray-300">
            <span>
              CODE <span className="text-blackish">&</span>
            </span>
            <span>DESIGN</span>
          </h1>
        </div>
      </main>
    </div>
  );
}
