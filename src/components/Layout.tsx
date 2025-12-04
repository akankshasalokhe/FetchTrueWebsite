import Head from 'next/head';
import Navbar from './Header/Header';
import Footer from './Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
       
        <link rel="icon" type="image/jpeg" href="/FTFL.jpg" />
      </Head>
      <div className='min-h-screen'>
      <Navbar />
      <ParallaxProvider>
        <main>{children}</main>
      </ParallaxProvider>
      <Footer />
      </div>
    </>
  );
};

export default Layout;
