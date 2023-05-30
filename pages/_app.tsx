import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Topbar from '@/components/HomePage/Topbar';
import Footer from '@/components/HomePage/Footer/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>    
              <title>ISRS 2023 - Educational Course</title>
          </Head>
          <Topbar />
          <Component {...pageProps} />
          <Footer />
      </>
  );
}
