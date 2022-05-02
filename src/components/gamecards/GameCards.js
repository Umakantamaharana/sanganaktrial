import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

import './GameCards.css';

import pubg from '../../assets/pubg.jpg';
import cricket from '../../assets/cricket.jpg';
import badminton from '../../assets/badminton.jpg';

export default function ActionAreaCard() {
  return (
      <Container>
      <h1 style={{padding : 20, color : "white"}}>REGISTERATION OPEN</h1>
    <Container className='gamecards'>
    <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pubg}
          alt="PUBG"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BGMI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Battle Ground Mobile India
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cricket}
          alt="gully cricket"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gully Cricket
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Short boundry, hard hits, no sixes, more fun.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={badminton}
          alt="Badminton"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Badminton
          </Typography>
          <Typography variant="body2" color="text.secondary">
              Newly added game. Best choice for indoor players.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>

    </Container>
  );
}