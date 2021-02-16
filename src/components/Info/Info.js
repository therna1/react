import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore';
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <h2>Info</h2>
      <Hero title={info.title} image={info.image}></Hero>  
       <p>{info.description}</p>  
  </Container>
);

Info.propTypes = {
    description: PropTypes.string,
  
  };


export default Info;