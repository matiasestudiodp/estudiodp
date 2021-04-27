import * as React from "react"

import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (<div className="flex flex-col min-h-screen overflow-hidden">

  {/*  Site header */}
  <Header />

  {/*  Page content */}
  <main className="flex-grow">

    {/*  Page sections */}
    <HeroHome />
    <Testimonials />
    {/* <Newsletter /> */}

  </main>

  {/*  Site footer */}
  <Footer />

</div>
);

}

export default IndexPage
