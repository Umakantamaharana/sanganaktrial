import React from 'react'
import { Container } from '@mui/material';
import TechEvents from './TechEvents';
import SportsEvents from './SportsEvents';
import CulturalEvents from './CulturalEvents';
import FunEvents from './FunEvents';

import './Events.css';

const Events = () => {
  return (
    <Container className='event'>
      <h1>Events</h1>
      <Container className="eventbtns">
        <h2>TECHNICAL EVENTS</h2>
        <TechEvents />
        <h2>SPORTS AND GAMES</h2>
        <SportsEvents />
        <h2>CULTURAL EVENTS</h2>
        <CulturalEvents />
        <h2>FUN EVENTS</h2>
        <FunEvents />
      </Container>
    </Container>
  );
};
export default Events;