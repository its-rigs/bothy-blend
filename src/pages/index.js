import * as React from 'react';
import { Layout, Hero, Events, FindUs, About, ContactUs } from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Events />
      <FindUs />
      <About />
      <ContactUs />
    </Layout>
  );
};

export default IndexPage;
