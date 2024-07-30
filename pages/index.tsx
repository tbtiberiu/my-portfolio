import { useEffect, useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';
import Introduction from '../components/Introduction/Introduction';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  const [scrolledOver, setScrolledOver] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
    const scrolledOver = window.scrollY > 80;
    setScrolledOver(scrolledOver);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Boșcan Tiberiu | Portfolio</title>
        <meta
          name="Description"
          content="I'm Boșcan Tiberiu and this is my portfolio. I'm a web designer and front-end developer. I build websites with creativity and passion. Hire me!"
        ></meta>
        <link rel="icon" href="/btiberiu.svg" />
      </Head>

      <Navbar scrolledOver={scrolledOver} />

      <main className={styles.main}>
        <Introduction scrolledOver={scrolledOver} />
        <Technologies />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2020 Tiberiu Boșcan</p>
      </footer>
    </div>
  );
}
