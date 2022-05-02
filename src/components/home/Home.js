import React from 'react';
import { Container } from '@mui/material'
import ActionAreaCard from '../gamecards/GameCards'
import { Alert } from '@mui/material';
import Events from '../events/Events';
import TitlebarImageList from '../gallery/Gallery';
// import dept from '../../assets/dept.jpg';
import hod from '../../assets/hod.jpg';
import './Home.css';
// import ResponsiveAppBar from '../navbar/AppBar';
import ImageSlider from '../../components/slider/Slider'
import CardMedia from '@mui/material/CardMedia';

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <Container className="techfest">
                <h1>We love to unite!</h1>
                {/* <CardMedia component="img" src={dept} /> */}
                <p>“SANGANAK” is the annual technical festival of Utkal University organized by Dept. of Computer Science & Applications. It refers to the independent body of students who organize this event along with many other social initiatives and outreach programmes around the year......</p>
                <a href="/about"><button>READ MORE</button></a>
            </Container>

            <Container className='hodmsg'>
                <h1>Message From President</h1>
                <CardMedia component="img" src={hod} />
                <p><br />It gives me immense pleasure to welcome all the students of our university as well as other universities to our 3rd State Level Technical Festival, “SANGANAK-2022”. This TechFest is aimed to provide the technically inclined youth an innovative platform, where their talent and expertise would be recognized and rewarded. Besides the technical events, this TechFest also contains a lot more fun and enjoyment for the students. Although “SANGANAK” is a toddler of just a year old, it has shown its potential from its second edition, where a huge number of students had participated and got rewarded handsomely. A lot more events have been added and many modifications have been made in the 3rd edition to meet the current technological trends and interests of the students. I welcome all to come and participate in huge numbers and be a part of this TechFest. I hope and believe “SANGANAK-2022” will be a grand success.</p>
            </Container>
            <ActionAreaCard />
            <Container>
                <h1 style={{ color: 'white' }}>Notices</h1>
                <Alert severity="info">1. AGENDA OF SANGANAK - 2022</Alert>
                <br />
                <Alert severity="info">
                    2. Kindly Register for the events on or before of their respective Closing Date. For Event Details go to the registration link to get the information. Else contact the MEMBERS under COMMITTE option for more Information.
                </Alert>
            </Container>
            <Events />
            <TitlebarImageList />
        </div>
    );
}

export default Home;