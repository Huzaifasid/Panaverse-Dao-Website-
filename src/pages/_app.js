import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import LoadingBar from "react-top-loading-bar";
export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.query]);

  return (
    <ChakraProvider>
      <LoadingBar
        waitingTime={400}
        color="#ff2d55"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
