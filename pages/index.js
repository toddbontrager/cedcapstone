import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
// import organicChecker from '../ethereum/organicChecker';
import Layout from '../components/Layout';
import MainCards from '../components/MainCards';

class Organics extends Component {
//   static async getInitialProps() {
//     const campaigns = await organicChecker.methods.getDeployedCampaigns().call();
//     return { campaigns };
//   }

  render() {
    return (
      <Layout>
        <Container style={{ marginTop: '30px' }}>
            <Header style={{ marginLeft: '10px', fontSize: '50px' }}as='h1'>Organic Checker</Header>
            <MainCards></MainCards>
        </Container>
      </Layout>
    );
  }
}

export default Organics;