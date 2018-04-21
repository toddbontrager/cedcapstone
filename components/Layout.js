import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default (props) => {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        </Head>
        <Header />
        {props.children}
    </Container>
  );
};