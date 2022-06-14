import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://bdapis.herokuapp.com/api/v1.1/districts/"
  );

  return {
    props: { data: res.data.data },
  };
};

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Get all districts of Bangladesh</code>
        </p>

        <div className={styles.grid}>
          {data.map((district) => {
            return (
              <div key={district._id} className={styles.card}>
                <h2>District: {district.district} &rarr;</h2>
                <p>Coordinates: {district.coordinates}</p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
