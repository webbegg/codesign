import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen font-body font-bold text-gray-300 overflow-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
