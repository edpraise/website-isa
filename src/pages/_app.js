import { Toaster } from "react-hot-toast";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <Toaster />
      </Theme>
    </>
  );
}
