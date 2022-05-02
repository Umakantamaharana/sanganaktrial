import React from 'react';
import { Container } from '@mui/material'
import dept from '../../assets/dept.jpg';
import './About.css';

const About = () => {
    return (
        <Container className='techfest1'>
            <img src={dept} alt="MCA Department" />
            <h1>We love to unite!</h1>
            <p>“SANGANAK” is the annual technical festival of Utkal University organized by Dept. of Computer Science & Applications. It refers to the independent body of students who organize this event along with many other social initiatives and outreach programmes around the year. SANGANAK is known for hosting a variety of events that include competitions, seminars, lectures as well as workshops. Started in 2018 with the aim of providing a platform for the student community to develop and showcase their technical & innovation prowess. The activities culminate in a grand three-day festival event in the CSA campus which attracts different categories of people including students, academia, & general public.</p>
        </Container>
    );
}

export default About;