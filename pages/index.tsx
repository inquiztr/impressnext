import styles from "../styles/Home.module.css";
import Hero from "@/components/hero/Hero";
import { NextSeo } from "next-seo";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      {/*       

      <main className={styles.main}>
        <div className={styles.description}></div>
      </main> */}
      <Layout>
        <NextSeo
          title="Impressionable Gifts"
          description="Wall Décor, Ladies Clothing, Jewellery, Accent Furniture, Accessories"
          openGraph={{
            type: "website",
          }}
        />
        <div>
          <Hero />
          <figure>logo</figure>
          <h1>Impressionable Gifts Hello, World!</h1>
        </div>
      </Layout>
    </>
  );
}
