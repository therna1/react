import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore';
import PropTypes from 'prop-types';

const Faq = () => (
  <Container>
    <h2>FAQ</h2>
      <Hero title={faq.title} image={faq.image}> </Hero>  
       <p>{faq.description}</p>  
  </Container>
);

Faq.propTypes = {
    description: PropTypes.string,
  
  };


export default Faq;