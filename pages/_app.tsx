import CustomHead from "../components/head";
export default function App({ Component, pageProps }) {
  return <div>
    <CustomHead />
    <Component {...pageProps} />
  </div>;
}
