// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import { Container } from '@mui/material';

import img1 from '../../assets/gallery/g1.JPG';
import img2 from '../../assets/gallery/g2.JPG';
import img3 from '../../assets/gallery/g3.JPG';
import img4 from '../../assets/gallery/g4.JPG';
import img5 from '../../assets/gallery/g5.JPG';
import img6 from '../../assets/gallery/g6.JPG';
import img7 from '../../assets/gallery/g7.JPG';
import img8 from '../../assets/gallery/g8.JPG';
import img9 from '../../assets/gallery/g9.JPG';

// export default function StandardImageList() {
//   return (
//       <Container>
//           <h1 style={{color:'white'}}>GALLERY</h1>
//       <Container>
//     <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight={164} >
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//     </Container>
//     </Container>
//   );
// }

// const itemData = [
//   {
//     img: img1,
//     title: 'Breakfast',
//   },
//   {
//     img: img2,
//     title: 'Burger',
//   },
//   {
//     img: img3,
//     title: 'Camera',
//   },
//   {
//     img: img4,
//     title: 'Coffee',
//   },
//   {
//     img: img5,
//     title: 'Hats',
//   },
//   {
//     img: img6,
//     title: 'Honey',
//   },
//   {
//     img: img7,
//     title: 'Basketball',
//   },
//   {
//     img: img8,
//     title: 'Fern',
//   },
//   {
//     img: img9,
//     title: 'Mushrooms',
//   },
// ];

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import { Container } from '@mui/material';

export default function TitlebarImageList() {
  return (
      <Container sx={{marginTop:'100px'}}>
    <ImageList sx={{ width: '100%', height: 'auto' }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div" style={{textAlign:'center', fontWeight:'bold', fontSize:'1.2em', color: 'white', background : '#222'}}>IMAGE GALLERY</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Breakfast',
  },
  {
    img: img2,
    title: 'Burger',
  },
  {
    img: img3,
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: img4,
    title: 'Coffee',
  },
  {
    img: img5,
    title: 'Hats',
  },
  {
    img: img6,
    title: 'Honey',
  },
  {
    img: img7,
    title: 'Basketball',
  },
  {
    img: img8,
    title: 'Fern',
  },
  {
    img: img9,
    title: 'Mushrooms',
  },
];
