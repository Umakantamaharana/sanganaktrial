import React from "react";
// import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

import './Footer.css'

function Footer(props) {
    return (
        <Typography className='footer' variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
            2022 Sanganak Techfest. All Rights Reserved | Team Sanganak
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const Footer = () => {
//     return (
//         <Container className="footer">
//             {/* <h1>Footer</h1> */}
//             <Container>
//                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                     {/* <Grid item xs={6}>
//                         <h3>ADDRESS</h3>
//                         <address>
//                             Created by Umakanta Maharana<br />
//                             Visit us at: sangank-uu.in<br />
//                             sangank-uu.in<br />
//                             Vani Vihar, Bhubaneswar<br />
//                             India
//                         </address>
//                     </Grid>
//                     <Grid item xs={6}>
//                         <h3>CONTACTS</h3>
//                         <p style={{wordWrap : 'break-word'}}>
//                             Phone : <a href="tel:9348003459">+9193480043459</a><br/>
//                             E-mail : <a href="mailto:umakantamaharana70@gmil.com">umakantamaharana70@gmail.com</a>
//                         </p>
//                     </Grid> */}

//                 </Grid>
//             </Container>
//         </Container>
//     );
// }

export default Footer;