import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//App Bar
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';


//Bottom
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Instagram from '@mui/icons-material/Instagram';
import InfoIcon from '@mui/icons-material/Info';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

//Navigation and Logout
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthProvider";

import "react-toastify/dist/ReactToastify.css";
import Message from "../../component/Message/Message";
import ChatBot from "../../component/ChatBot/ChatBot";
import { toast, ToastContainer } from "react-toastify";

const pages = ['Games' , 'Appointment', 'Feedback', 'Food Roulette', 'Notification'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;


const AppBar = 
  styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


const DrawerHeader = 
  styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  


const MenuDashboard = ({option, children}) => {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [chatBotOpen, setChatBotOpen] = React.useState(false);
  const [bottomFixed, setBottomFixed] = React.useState('0');

  const navigate = useNavigate();
  const auth = useAuth();

  React.useEffect(() => {

    const handleScroll = () => {
      // console.log(window.innerHeight, window.scrollY, document.body.offsetHeight, document.documentElement.scrollHeight)
      if (window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight - 60)) {
        var details = (window.innerHeight + window.scrollY) - (document.documentElement.scrollHeight - 60)
        setBottomFixed(details);
      } else{
        setBottomFixed(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if(page != null){
      setOpen(false);
      var pageToLower = page.toLowerCase();
      pageToLower = pageToLower.replace(/\s/g, '')
      navigate(`/${pageToLower}`);
    }
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);

    if(setting == "Logout"){
      auth.logOut();
    }
  };

  const handleRedirectContact = (contact) => {
    if(contact === "Facebook"){
      window.location.href = "https://www.facebook.com/"
    } else if (contact === "Instagram") {
      window.location.href = "https://www.instagram.com/"
    } else if (contact === "LinkedIn") {
      window.location.href = "https://www.linkedin.com/"
    }  else if (contact === "Whatsapp") {
      window.location.href = "https://www.whatsapp.com/"
    }
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDisplayChatbot = () => {
    setChatBotOpen(!chatBotOpen);
  }

  return (
    <>
      {/* <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={e => handleCloseNavMenu("")}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {'Noobestest'}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={e => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>


            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={(e) => handleCloseUserMenu(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {pages.map((page) => (
           <ListItem key={page} disablePadding>
            <ListItemButton
                key={page}
                onClick={e => handleCloseNavMenu(page)}
            >
            <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
          ))}
        </List>
      </Drawer> */}

      <div>
        <div>
          {children}
        </div>

        <div className='text-end' 
        style={{position: 'fixed', right: 0, bottom: bottomFixed, zIndex:'1202', cursor:'pointer'}}>
          {chatBotOpen && (
            <ChatBot></ChatBot>
          )}
          <HelpCenterIcon onClick={() => handleDisplayChatbot()} style={{color:'dodgerblue', fontSize : '40px'}} />
        </div>
      </div>



      {/* <BottomNavigation style={option === 1 ? 
        {backgroundColor:'white', position:'absolute', width: '100%', zIndex:'1201'} : 
        {backgroundColor:'black',  position:'absolute' , width: '100%', zIndex:'1201'}}>
        <BottomNavigationAction
          label="Facebook"
          onClick= {() => handleRedirectContact('Facebook')}
          icon={<Facebook style={{color:'blue'}}/>}
        />
        <BottomNavigationAction
          label="WhatsApp"
          onClick= {() => handleRedirectContact('Whatsapp')}
          icon={<WhatsApp style={{color:'green'}} />}
        />
        <BottomNavigationAction
          label="Instagram"
          onClick= {() => handleRedirectContact('Instagram')}
          icon={<Instagram style={{color:'deeppink'}}/>}
        />
        <BottomNavigationAction
          label="LinkedIn"
          onClick= {() => handleRedirectContact('LinkedIn')}
          icon={<LinkedIn style={{color:'blue'}} />}
        />
      </BottomNavigation> */}
    </>
  );
}
export default MenuDashboard;
