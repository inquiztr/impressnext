import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow?: boolean }
    ) => {
      if (!shallow) {
        //gtag.pageview(url);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
