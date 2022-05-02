// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';

// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import LoginIcon from '@mui/icons-material/Login';
// import logo from '../../assets/logo.png';        
// import './Navbar.css';


// function ElevationScroll(props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 0,
//         target: window ? window() : undefined,
//     });

//     return React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//     });
// }

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     window: PropTypes.func,
// };

// export default function ElevateAppBar(props) {
//     const pages = ['Committe', 'About', 'Contact Us'];
//     const settings = ['Login', 'Register'];

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <ElevationScroll {...props}>
//                 <AppBar sx={{ bgcolor: "#333" }}>
//                     <Container maxWidth="xl">
//                         <Toolbar disableGutters>
//                             <Typography
//                                 variant="h6"
//                                 noWrap
//                                 component="div"
//                                 sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//                             >
//                                 <img src={logo} alt="SANGANAK" />
//                             </Typography>

//                             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                                 <IconButton
//                                     size="large"
//                                     aria-label="account of current user"
//                                     aria-controls="menu-appbar"
//                                     aria-haspopup="true"
//                                     onClick={handleOpenNavMenu}
//                                     color="inherit"
//                                 >
//                                     <MenuIcon />
//                                 </IconButton>
//                                 <Menu
//                                     id="menu-appbar"
//                                     anchorEl={anchorElNav}
//                                     anchorOrigin={{
//                                         vertical: 'bottom',
//                                         horizontal: 'left',
//                                     }}
//                                     keepMounted
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'left',
//                                     }}
//                                     open={Boolean(anchorElNav)}
//                                     onClose={handleCloseNavMenu}
//                                     sx={{
//                                         display: { xs: 'block', md: 'none' },
//                                     }}
//                                 >
//                                     {pages.map((page) => (
//                                         <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                             <Typography textAlign="center">{page}</Typography>
//                                         </MenuItem>
//                                     ))}
//                                 </Menu>
//                             </Box>
//                             <Typography
//                                 variant="h6"
//                                 noWrap
//                                 component="div"
//                                 sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//                             >
//                                 <img src={logo} alt="logo" />
//                             </Typography>
//                             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                                 {pages.map((page) => (
//                                     <Button
//                                         key={page}
//                                         onClick={handleCloseNavMenu}
//                                         sx={{ my: 2, color: 'white', display: 'block' }}
//                                     >
//                                         {page}
//                                     </Button>
//                                 ))}
//                             </Box>

//                             <Box sx={{ flexGrow: 0 }}>
//                                 <Tooltip title="Login / Register">
//                                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                         <LoginIcon alt="Login / Register" style={{ color: "white" }} />
//                                     </IconButton>
//                                 </Tooltip>
//                                 <Menu
//                                     sx={{ mt: '45px' }}
//                                     id="menu-appbar"
//                                     anchorEl={anchorElUser}
//                                     anchorOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     keepMounted
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     open={Boolean(anchorElUser)}
//                                     onClose={handleCloseUserMenu}
//                                 >
//                                     {settings.map((setting) => (
//                                         <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                             <Typography textAlign="center">{setting}</Typography>
//                                         </MenuItem>
//                                     ))}
//                                 </Menu>
//                             </Box>
//                         </Toolbar>
//                     </Container>
//                 </AppBar>
//             </ElevationScroll>
//             <Toolbar />
//         </React.Fragment>
//     );
// }