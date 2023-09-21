import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import CardContent from '../components/CardContent';
import MyCard from '../components/MyCard';
import MyCarrousel from './MyCarousel';


function Home() {
  return (
    <>
      <MyCarrousel />

      <CardContent />

      <Container style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap' }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <MyCard key={index} />
        ))}
      </Container>

    </>
  )
}

export default Home;